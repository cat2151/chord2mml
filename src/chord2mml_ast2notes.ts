function astToNotes(asts) {
  let result = [];
  let inversionMode = "root inv";
  let openHarmonyMode = "close";
  for (let i = 0; i < asts.length; i++) {
    let ast = asts[i];
    let notes;
    switch (ast.event) {
      case "chord":
        notes = getNotes(ast.root, ast.quality, inversionMode, openHarmonyMode);
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
      case "change open harmony mode to close":
        openHarmonyMode = "close";
        break;
      case "change open harmony mode to drop2":
        openHarmonyMode = "drop2";
        break;
      case "change open harmony mode to drop4":
        openHarmonyMode = "drop4";
        break;
      case "change open harmony mode to drop2and4":
        openHarmonyMode = "drop2and4";
        break;
    } // switch
  }
  return result;
}

function getNotes(root, quality, inversionMode = "root inv", openHarmonyMode = "close") {
  let notes = [];
  switch (quality) {
    case "maj": notes = [0,4,7]; break;
    case "maj7": notes = [0,4,7,11]; break;
  }

  // root
  //  chordのrootにあわせ、半音単位でshiftする
  notes = shiftNotes(notes, root);

  // inversion
  switch (inversionMode) {
    case "1st inv": notes = inversionByCount(notes, 1); break;
    case "2nd inv": notes = inversionByCount(notes, 2); break;
    case "3rd inv": notes = inversionByCount(notes, 3); break;
  }

  // drop2 etc.
  switch (openHarmonyMode) {
    case "drop2": notes = drop2(notes); break;
    case "drop4": notes = drop4(notes); break;
    case "drop2and4": notes = drop2and4(notes); break;
  }

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
  notes = inversionByTargetNote(notes, lowerRoot);
  return notes;
}

function inversionByTargetNote(notes, targetNote) {
  // targetNoteが最低音となるよう、inversionする
  for (let i = 0; i < notes.length; i++) {
    if (notes[0] == targetNote) break;
    notes.push(notes.shift());
  }
  notes = adjustNotesOctave(notes);
  return notes;
}

function inversionByCount(notes, count) {
  // count 1 は第1転回形、2,3...も同様
  for (let i = 0; i < count; i++) {
    notes.push(notes.shift());
  }
  notes = adjustNotesOctave(notes);
  return notes;
}

function adjustNotesOctave(notes) {
  // notesについて、一つ前より低い音があればoctave upさせる用
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
  // lowerNotesの最高音より、upperNotesの最低音のほうが高い音とする用
  notes = adjustNotesOctave(notes);
  return notes;
}

function drop2(notes: number[]): number[] {
  if (notes.length < 2) {
    return notes;
  } else {
    const secondLast = notes[notes.length - 2] - 12;
    notes.splice(notes.length - 2, 1);
    notes.unshift(secondLast);
    return notes;
  }
}

function drop4(notes: number[]): number[] {
  if (notes.length < 4) {
    return notes;
  } else {
    const fourthLast = notes[notes.length - 4] - 12;
    notes.splice(notes.length - 4, 1);
    notes.unshift(fourthLast);
    return notes;
  }
}

function drop2and4(notes: number[]): number[] {
  if (notes.length < 4) {
    return notes;
  } else {
    const secondLast = notes[notes.length - 2] - 12;
    const fourthLast = notes[notes.length - 4] - 12;
    notes.splice(notes.length - 2    , 1);
    notes.splice(notes.length - 4 + 1, 1); // drop2したあとなので+1
    notes.unshift(secondLast);
    notes.unshift(fourthLast);
    return notes;
  }
}

export {
  astToNotes
};
