import { parse } from "./chord2mml_chord2ast.cjs";
import { astToAst } from "./chord2mml_ast2ast";
import { astToNotes } from "./chord2mml_ast2notes";
import { notesToMml } from "./chord2mml_notes2mml";

// parseがぶら下がっているのは、取り急ぎeasychord2mmlでそのまま動く用

const chord2mml = { parse };
chord2mml.parse = function(chord) {
  let ast = parse(chord);
  ast = astToAst(ast);
  const notes = astToNotes(ast);
  const mml = notesToMml(notes);
  return mml;
};

export {
  chord2mml
};
