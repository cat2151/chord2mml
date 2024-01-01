import { parse } from "./chord2mml_chord2ast.cjs";
import { astToNotes } from "./chord2mml_ast2notes";
import { notesToMml } from "./chord2mml_notes2mml";

// この構成は、
//  取り急ぎ、easychord2mmlでそのまま動かす用

const chord2mml = { parse };
chord2mml.parse = function(chord) {
  const ast = parse(chord);
  const notes = astToNotes(ast);
  const mml = notesToMml(notes);
  return mml;
};

// ブラウザ用
if (typeof window !== undefined) {
  (window as any).chord2mml = chord2mml;
}

// jest用
export {
  chord2mml
};
