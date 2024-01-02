function astToAst(asts) {
  for (let i = 0; i < asts.length; i++) {
    let ast = asts[i];
    // slash chordを読み解く
    if (ast.event == "slash chord") {
      // 今後、事前設定されたslashModeによって、eventを変更させる
      ast.event = "compound chord";
    }
  }
  return asts;
}

export {
  astToAst
};
