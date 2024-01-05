function notesToMml(noteAsts: any[]): string {
  const twelveIonians = create12ionians();
  let mml = "";
  let keyAst = { event: "key", root: "C", sharpLength: 0, flatLength: 0, offset: 0 };
  let scaleAst = { event: "scale", offsets: [0,2,4,5,7,9,11] };
  let isSharp = isSharpByKeyAndScale(keyAst.offset, scaleAst.offsets, twelveIonians);
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
        isSharp = isSharpByKeyAndScale(keyAst.offset, scaleAst.offsets, twelveIonians);
        continue;
      case "scale":
        scaleAst = noteAst;
        isSharp = isSharpByKeyAndScale(keyAst.offset, scaleAst.offsets, twelveIonians);
        continue;
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

      if (isSharp) {
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

function create12ionians(): number[][] {
  const cIonian = [0,2,4,5,7,9,11];
  const twelveIonians = generateIonians(cIonian);
  const normalized12ionians = normalizeArrays(twelveIonians);
  return normalized12ionians;

  function generateIonians(base: number[]): number[][] {
    let result: number[][] = [];
    for(let i = 0; i < 12; i++){
      const ionian = base.map(x => (x + i) % 12);
      result.push(ionian);
    }
    return result;
  }

  function normalizeArrays(arrays: number[][]): number[][] {
    return arrays.map(arr => arr.sort((a, b) => a - b));
  }
}

function isSharpByKeyAndScale(key: number, offsets: number[], twelveIonians: number[][]): boolean {
  const result = searchIonians(key, offsets, twelveIonians);
  switch (result) {
    case  0: return true;  // C
    case  1: return false; // Db
    case  2: return true;  // D
    case  3: return false; // Eb
    case  4: return true;  // E
    case  5: return false; // F
    case  6: return false; // Gb
    case  7: return true;  // G
    case  8: return false; // Ab
    case  9: return true;  // A
    case 10: return false; // Bb
    case 11: return true;  // B
    default: throw new Error(`ERROR : isSharpByKeyAndScale`);
  }

  function searchIonians(key: number, offsets: number[], ionians: number[][]): number {
    const keyOffsets = offsets.map(offset => offset + key);
    const sortedOffsets = keyOffsets.map(koffset => koffset % 12).sort((a, b) => a - b);
    for(let i = 0; i < ionians.length; i++){
      if(JSON.stringify(ionians[i]) === JSON.stringify(sortedOffsets)){
        return i;
      }
    }
    throw new Error(`ERROR : isSharpByKeyAndScale searchIonians`);
  }
}

export {
  notesToMml
};
