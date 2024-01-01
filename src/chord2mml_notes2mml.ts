function notesToMml(noteses) {
  let mml = "";
  for (let i = 0; i < noteses.length; i++) {
    let notes = noteses[i];
    let lastOctaveOffset = 0;
    if (notes.length) mml += "'";
    for (let iNotes = 0; iNotes < notes.length; iNotes++) {
      let note = notes[iNotes];

      // octave up
      let octaveOffset = Math.floor(note / 12);
      if (octaveOffset > lastOctaveOffset) {
        mml += "<";
        lastOctaveOffset = octaveOffset;
      }

      switch (note % 12) {
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
    }
    if (notes.length) mml += "'";
  }
  return mml;
}

export {
  notesToMml
};