function astToNotes(ast) {
  let result = [];
  for (let i = 0; i < ast.length; i++) {
    let chord = ast[i];
    let notes = [];
    switch (chord.chordType) {
      case "maj": notes = [0,4,7]; break;
      case "maj7": notes = [0,4,7,11]; break;
    }
    // key
    for (let iNotes = 0; iNotes < notes.length; iNotes++) {
      notes[iNotes] += chord.root;
    }
    result.push(notes);
  }
  return result;
}

export {
  astToNotes
};
