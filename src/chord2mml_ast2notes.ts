function astToNotes(asts) {
  let result = [];
  for (let i = 0; i < asts.length; i++) {
    let ast = asts[i];
    let notes;
    switch (ast.event) {
      case "chord":
        notes = getNotes(ast.root, ast.quality);
        result.push(notes);
        break;
      case "compound chord":
        notes = getCompoundChordNotes(ast.upperRoot, ast.upperQuality, ast.lowerRoot);
        result.push(notes);
        break;
    } // switch
  }
  return result;
}

function getNotes(root, quality) {
  let notes = [];
  switch (quality) {
    case "maj": notes = [0,4,7]; break;
    case "maj7": notes = [0,4,7,11]; break;
  }
  // root
  notes = shiftNotes(notes, root);
  return notes;
}

function shiftNotes(notes, v) {
  for (let iNotes = 0; iNotes < notes.length; iNotes++) {
    notes[iNotes] += v;
  }
  return notes;
}

function getCompoundChordNotes(upperRoot, upperQuality, lowerRoot) {
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

export {
  astToNotes
};
