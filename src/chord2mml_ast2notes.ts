function astToNotes(asts) {
  let result = [];
  let inversionMode = "root inv";
  for (let i = 0; i < asts.length; i++) {
    let ast = asts[i];
    let notes;
    switch (ast.event) {
      case "chord":
        notes = getNotes(ast.root, ast.quality, inversionMode);
        result.push(notes);
        break;
      case "chord over bass note":
        notes = getNotesByChordOverBassNote(ast.upperRoot, ast.upperQuality, ast.lowerRoot);
        result.push(notes);
        break;
      case "inversion":
        notes = getNotesByInversionChord(ast.upperRoot, ast.upperQuality, ast.lowerRoot);
        result.push(notes);
        break;
      case "polychord":
        notes = getNotesByPolychord(ast.upperRoot, ast.upperQuality, ast.lowerRoot, ast.lowerQuality);
        result.push(notes);
        break;
      case "inline mml":
        result.push(ast);
        break;
      case "change inversion mode to root inv":
        inversionMode = "root inv";
        break;
      case "change inversion mode to 1st inv":
        inversionMode = "1st inv";
        break;
      case "change inversion mode to 2nd inv":
        inversionMode = "2nd inv";
        break;
      case "change inversion mode to 3rd inv":
        inversionMode = "3rd inv";
        break;
    } // switch
  }
  return result;
}

function getNotes(root, quality, inversionMode = "root inv") {
  let notes = [];
  switch (quality) {
    case "maj": notes = [0,4,7]; break;
    case "maj7": notes = [0,4,7,11]; break;
  }

  // root
  //  chordのrootにあわせ、半音単位でshiftする
  notes = shiftNotes(notes, root);

  // inversion
  {
    switch (inversionMode) {
      case "1st inv": notes = rotateNotesByCount(notes, 1); break;
      case "2nd inv": notes = rotateNotesByCount(notes, 2); break;
      case "3rd inv": notes = rotateNotesByCount(notes, 3); break;
    }
  }

  // octave
  notes = adjustNotesOctave(notes);

  return notes;
}

function shiftNotes(notes, v) {
  for (let iNotes = 0; iNotes < notes.length; iNotes++) {
    notes[iNotes] += v;
  }
  return notes;
}

function getNotesByChordOverBassNote(upperRoot, upperQuality, lowerRoot) {
  // lower
  let notes = [];
  notes.push(lowerRoot);

  // upper
  let upperNotes = getUpperNotes(upperRoot, upperQuality, lowerRoot);
  notes.push(...upperNotes);

  return notes;
}

function getUpperNotes(upperRoot, upperQuality, lowerRoot) {
  let upperNotes = getNotes(upperRoot, upperQuality);
  // octave
  if (upperRoot <= lowerRoot) {
    upperNotes = shiftNotes(upperNotes, 12);
  }
  return upperNotes;
}

function getNotesByInversionChord(upperRoot, upperQuality, lowerRoot) {
  let notes = getNotes(upperRoot, upperQuality);
  notes = rotateNotesByTargetNote(notes, lowerRoot);
  // octave
  notes = adjustNotesOctave(notes);
  return notes;
}

function rotateNotesByTargetNote(notes, targetNote) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[0] == targetNote) break;
    notes.push(notes.shift());
  }
  return notes;
}

function rotateNotesByCount(notes, count) {
  for (let i = 0; i < count; i++) {
    notes.push(notes.shift());
  }
  return notes;
}

function adjustNotesOctave(notes) {
  // example: [7,0,4] to [7,12,16]
  let oldNote = -1;
  for (let i = 0; i < notes.length; i++) {
    for (let iNote = 0; iNote < 128; iNote +=12) {
      if (notes[i] > oldNote) break;
      notes[i] += 12;
    }
    oldNote = notes[i];
  }
  return notes;
}

function getNotesByPolychord(upperRoot, upperQuality, lowerRoot, lowerQuality) {
  const lowerNotes = getNotes(lowerRoot, lowerQuality);
  const upperNotes = getNotes(upperRoot, upperQuality);
  let notes = [...lowerNotes, ...upperNotes];
  // octave
  notes = adjustNotesOctave(notes);
  return notes;
}

export {
  astToNotes
};
