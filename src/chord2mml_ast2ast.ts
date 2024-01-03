function astToAst(asts) {
  let slashMode = "chord over bass note";
  for (let i = 0; i < asts.length; i++) {
    let ast = asts[i];
    switch (ast.event) {
      case "change slash chord mode to chord over bass note":
        slashMode = "chord over bass note";
        break;
      case "change slash chord mode to inversion":
        slashMode = "inversion";
        break;
      case "change slash chord mode to polychord":
        slashMode = "polychord";
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
