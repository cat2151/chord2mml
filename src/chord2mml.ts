import { parse } from "./chord2mml_chord2ast.cjs";
import { astToAst } from "./chord2mml_ast2ast";
import { astToNotes } from "./chord2mml_ast2notes";
import { notesToMml } from "./chord2mml_notes2mml";
import { preprocessChord, preprocessTransforms, getAllCombinations } from "./chord2mml_preprocess";

// parseがぶら下がっているのは、取り急ぎeasychord2mmlでそのまま動く用

function parseInternal(chord: string): string {
  let ast = parse(chord);
  ast = astToAst(ast);
  const notes = astToNotes(ast);
  const mml = notesToMml(notes);
  return mml;
}

const chord2mml = { parse };
chord2mml.parse = function(chord: string): string {
  // まず変換なしで試み、成功すればMMLを直接返す（二重parseなし）
  let originalError: unknown;
  try {
    return parseInternal(chord);
  } catch (e) {
    originalError = e;
  }
  // 失敗した場合は各変換を試し、成功した時点でMMLを直接返す（二重parseなし）
  const tried = new Set<string>([chord]);
  for (const seq of getAllCombinations(preprocessTransforms)) {
    let candidate = chord;
    for (const fn of seq) {
      candidate = fn(candidate);
    }
    if (tried.has(candidate)) continue;
    tried.add(candidate);
    try {
      return parseInternal(candidate);
    } catch (_e) {}
  }
  throw originalError; // いずれも失敗 → 元のエラーを投げる
};

export {
  chord2mml,
  preprocessChord
};

