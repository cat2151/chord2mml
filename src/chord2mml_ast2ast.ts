function astToAst(asts) {
  let slashMode = "compound chord";
  for (let i = 0; i < asts.length; i++) {
    let ast = asts[i];
    switch (ast.event) {
      case "compound chord":
      case "inversion":
      case "upper structure":
        slashMode = ast.event;
        break;
      case "slash chord":
        ast.event = slashMode;
        break;
    }
  }
  return asts;
}

export {
  astToAst
};
