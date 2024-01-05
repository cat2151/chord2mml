function notesToMml(noteAsts) {
  let mml = "";
  let keyAst = { event: "key", root: "C", sharpLength: 0, flatLength: 0 };
  for (let noteAst of noteAsts) {
    switch (noteAst.event) {
      case "inline mml":
        mml += noteAst.mml;
        continue;
      case "bar":
        mml += "/*|*/";
        continue;
      case "key":
        keyAst = noteAst;
    }

    const notes = noteAst.notes;
    if (!notes) {
      continue; // { event: "change slash chord mode to polychord" } など用
      // throw new Error(`ERROR : ${JSON.stringify(noteAst)}`);
    }

    // chord
    let lastOctaveOffset = 0;
    if (notes.length) mml += "'";

    let bottomNote = notes[0];
    // 一番下の音がnote offset 0未満の場合。drop4など用。
    while (bottomNote < 0) {
      bottomNote += 12;
      mml += ">";
      lastOctaveOffset--;
    }

    for (let iNotes = 0; iNotes < notes.length; iNotes++) {
      let note = notes[iNotes];

      // octave up
      let octaveOffset = Math.floor(note / 12);
      while (octaveOffset > lastOctaveOffset) {
        mml += "<";
        lastOctaveOffset++;
      }

      if (isKeySharp(keyAst)) {
        switch (((note % 12) + 12) % 12) {
          case  0: mml += "c";  break;
          case  1: mml += "c+"; break;
          case  2: mml += "d";  break;
          case  3: mml += "d+"; break;
          case  4: mml += "e";  break;
          case  5: mml += "f";  break;
          case  6: mml += "f+"; break;
          case  7: mml += "g";  break;
          case  8: mml += "g+"; break;
          case  9: mml += "a";  break;
          case 10: mml += "a+"; break;
          case 11: mml += "b";  break;
        }
      } else {
        switch (((note % 12) + 12) % 12) {
          case  0: mml += "c";  break;
          case  1: mml += "d-"; break;
          case  2: mml += "d";  break;
          case  3: mml += "e-"; break;
          case  4: mml += "e";  break;
          case  5: mml += "f";  break;
          case  6: mml += "g-"; break;
          case  7: mml += "g";  break;
          case  8: mml += "a-"; break;
          case  9: mml += "a";  break;
          case 10: mml += "b-"; break;
          case 11: mml += "b";  break;
        }
      }

      if (!iNotes && noteAst.noteLength) {
        mml += noteAst.noteLength;
      }

    } // for
    if (notes.length) mml += "'";
  }
  return mml;
}

function isKeySharp(keyAst) {
  const sharp = keyAst.sharpLength ? "#" : ""; // double sharp等はひとまずsharpと同じで進めて様子見する。実用上問題が出る例を得るまでは対応後回しにする
  const flat = keyAst.flatLength ? "b" : "";
  const key = keyAst.root + sharp + flat;
  if (sharp) return true;
  if (flat) return false;
  switch (key) {
    case "C":  return true; // ひとまずCはsharp側で進めて様子見する。実用上問題が出る例を得るまでは対応後回しにする
    case "D":  return true;
    case "E":  return true;
    case "F":  return false; // Fだけifにするよりは、switchの一覧性によるミス防止を優先する
    case "G":  return true;
    case "A":  return true;
    case "B":  return true;
    default: throw new Error(`ERROR : isKeySharp`);
  }
}

export {
  notesToMml
};
