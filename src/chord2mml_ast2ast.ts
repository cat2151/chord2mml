function astToAst(asts) {
  let slashMode = "chord over bass note";
  let bassPlayMode = "no bass";
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
      case "change bass play mode to root":
        bassPlayMode = "root";
        break;
      case "change bass play mode to no bass":
        bassPlayMode = "no bass";
        break;
      case "chord":
        if (bassPlayMode == "root") {
          ast.event = "chord over bass note";
          ast.upperRoot = ast.root;
          ast.upperQuality = ast.quality;
          ast.lowerRoot = ast.root;
          ast.lowerQuality = ast.quality;
          delete ast.root;
          delete ast.quality;
        }
        break;
      }
  }
  return asts;
}

export {
  astToAst
};
