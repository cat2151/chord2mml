import { parse } from "./chord2mml_chord2ast.cjs";
import { astToAst } from "./chord2mml_ast2ast";
import { astToNotes } from "./chord2mml_ast2notes";
import { notesToMml } from "./chord2mml_notes2mml";

// parseがぶら下がっているのは、取り急ぎeasychord2mmlでそのまま動く用

function parseInternal(chord: string): string {
  let ast = parse(chord);
  ast = astToAst(ast);
  const notes = astToNotes(ast);
  const mml = notesToMml(notes);
  return mml;
}

// コード進行表記の方言を、できる範囲で全て試して、エラーにならないものを返す
function preprocessChord(chord: string): string {
  const transforms: Array<(s: string) => string> = [replaceHyphenToDot, replaceMinorRomanNumerals];
  return findParsableChordVariant(chord);

  // 方言：ハイフンを中点に置換（例：1-3 → 1・3）
  function replaceHyphenToDot(s: string): string {
    return s.replace(/-/g, "・");
  }

  // 方言：ローマ数字マイナー表記を統一（例：ii → IIm）
  function replaceMinorRomanNumerals(s: string): string {
    return s
      .replace(/\bvii(?![a-zA-Z])/g, "VIIm")
      .replace(/\biii(?![a-zA-Z])/g, "IIIm")
      .replace(/\bvi(?![a-zA-Z])/g, "VIm")
      .replace(/\biv(?![a-zA-Z])/g, "IVm")
      .replace(/\bii(?![a-zA-Z])/g, "IIm")
      .replace(/\bv(?![a-zA-Z])/g, "Vm")
      .replace(/\bi(?![a-zA-Z])/g, "Im");
  }

  function findParsableChordVariant(chord: string): string {
    const tried = new Set<string>();
    for (const seq of getAllCombinations(transforms)) {
      let candidate = chord;
      for (const fn of seq) {
        candidate = fn(candidate);
      }
      if (tried.has(candidate)) continue;
      tried.add(candidate);
      try {
        parseInternal(candidate);
        return candidate;
      } catch (_e) {}
    }
    return chord;
  }

  function getAllCombinations(funcs: Array<(s: string) => string>): Array<Array<(s: string) => string>> {
    const results: Array<Array<(s: string) => string>> = [];
    const n = funcs.length;
    for (let i = 0; i < (1 << n); i++) {
      let seq: Array<(s: string) => string> = [];
      for (let j = 0; j < n; j++) {
        if (i & (1 << j)) seq.push(funcs[j]);
      }
      if (seq.length === 0) seq = [(x: string) => x];
      results.push(seq);
    }
    const perms: Array<Array<(s: string) => string>> = [];
    for (const seq of results) {
      if (seq.length <= 1) {
        perms.push(seq);
      } else {
        perms.push(...permute(seq));
      }
    }
    return perms;
  }

  function permute(arr: Array<(s: string) => string>): Array<Array<(s: string) => string>> {
    if (arr.length <= 1) return [arr];
    const result: Array<Array<(s: string) => string>> = [];
    for (let i = 0; i < arr.length; i++) {
      const rest = arr.slice(0, i).concat(arr.slice(i + 1));
      for (const p of permute(rest)) {
        result.push([arr[i], ...p]);
      }
    }
    return result;
  }
}

const chord2mml = { parse };
chord2mml.parse = function(chord: string): string {
  return parseInternal(preprocessChord(chord));
};

export {
  chord2mml,
  preprocessChord
};
