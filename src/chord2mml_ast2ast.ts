function astToAst(asts) {
  let slashMode = "chord over bass note";
  let bassPlayMode = "no bass";
  for (let ast of asts) {
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

  asts = bar2noteLength(asts);

  return asts;
}

function bar2noteLength(asts) {
  let barCount = 0;
  let totalNoteLength = 1;
  let chordIndexes = [];
  for (let i = 0; i < asts.length; i++) {
    let ast = asts[i];
    switch (ast.event) {
      case "chord":
      case "chord over bass note":
      case "inversion":
      case "polychord":
        chordIndexes.push(i);
        break;
      case "bar":
        barCount++;
        asts = updateAstNoteLength(asts, chordIndexes, totalNoteLength);

        // 次のカウント用
        chordIndexes = [];
        totalNoteLength = 1; // 全音符
        break;
      case "bar slash":
        barCount++; // barなしでbar slashがある場合用
        totalNoteLength = 2; // bar slashで分割されたそれぞれは2分音符となる
        asts = updateAstNoteLength(asts, chordIndexes, totalNoteLength);

        // 次のカウント用
        chordIndexes = [];
        break;
    }
  } // for

  // 用途、末尾のchord（後ろに小節線がない）のnoteLengthをupdateする用
  if (barCount) asts = updateAstNoteLength(asts, chordIndexes, totalNoteLength);

  return asts;
}

function updateAstNoteLength(asts, chordIndexes, totalNoteLength) {
  const noteLength = chordIndexes.length * totalNoteLength; // 例、1小節に4つchordがあるなら4分音符とし、4を得る。slashにより1/2小節に2つchordがある場合も4を得る。
  for (let iChord of chordIndexes) {
    asts[iChord].noteLength = noteLength;
  }
  return asts;
}

export {
  astToAst
};
