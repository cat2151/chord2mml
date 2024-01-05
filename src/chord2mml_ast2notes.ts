function astToNotes(asts) {
  let result = [];
  let inversionMode = "root inv";
  let openHarmonyMode = "close";
  let bassPlayMode = "no bass";
  let octaveOffsetUpper = 0;
  let octaveOffsetLower = 0;
  // 備忘、役目完了したeventやpropertyはここで捨てている（後続処理をシンプル化する用）
  for (let ast of asts) {
    switch (ast.event) {
      case "chord":
        ast.notes = getNotes(ast.root, ast.quality, ast.inversion ?? inversionMode, openHarmonyMode, octaveOffsetUpper);
        ast = deleteProperties(ast);
        result.push(ast);
        break;
      case "chord over bass note":
        ast.notes = getNotesByChordOverBassNote(ast.upperRoot, ast.upperQuality, ast.lowerRoot, ast.upperInversion ?? inversionMode, openHarmonyMode, octaveOffsetUpper, octaveOffsetLower);
        ast.notes = keyShiftNotes(ast.notes, -12); // bass noteがあるぶん音域を下げる用
        ast = deleteProperties(ast);
        result.push(ast);
        break;
      case "inversion":
        ast.notes = getNotesByInversionChord(ast.upperRoot, ast.upperQuality, ast.lowerRoot, bassPlayMode, octaveOffsetUpper);
        ast = deleteProperties(ast);
        result.push(ast);
        break;
      case "polychord":
        ast.notes = getNotesByPolychord(ast.upperRoot, ast.upperQuality, ast.upperInversion ?? inversionMode, ast.lowerRoot, ast.lowerQuality, ast.lowerInversion ?? inversionMode, octaveOffsetUpper, octaveOffsetLower);
        ast = deleteProperties(ast);
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
      case "change bass play mode to root":
        bassPlayMode = "root";
        break;
      case "change bass play mode to no bass":
        bassPlayMode = "no bass";
        break;

      case "octave up":
        octaveOffsetUpper++;
        octaveOffsetLower++;
        break;
      case "octave up upper":
        octaveOffsetUpper++;
        break;
      case "octave up lower":
        octaveOffsetLower++;
        break;

      case "octave down":
        octaveOffsetUpper--;
        octaveOffsetLower--;
        break;
      case "octave down upper":
        octaveOffsetUpper--;
        break;
      case "octave down lower":
        octaveOffsetLower--;
        break;

      default:
        result.push(ast);
        break;
    } // switch
  }
  return result;
}

function deleteProperties(ast) {
  // 用途は、 > // 備忘、役目完了したeventやpropertyはここで捨てている（後続処理をシンプル化する用）
  delete ast.event;

  delete ast.root;
  delete ast.quality;
  delete ast.inversion;

  delete ast.upperRoot;
  delete ast.upperQuality;
  delete ast.upperInversion;

  delete ast.lowerRoot;
  delete ast.lowerQuality;
  delete ast.lowerInversion;

  return ast;
}

function getNotes(root: number, quality: string, inversionMode: string, openHarmonyMode:string, octaveOffset: number) {
  let notes = [];
  switch (quality) {
    case "maj": notes = [0,4,7]; break;
    case "maj7": notes = [0,4,7,11]; break;
    case "min": notes = [0,3,7]; break;
    case "min7": notes = [0,3,7,10]; break;
  }

  // root
  //  chordのrootにあわせ、半音単位でshiftする
  notes = keyShiftNotes(notes, root);

  // 転回形 & drop2等
  notes = inversionAndOpenHarmony(notes, inversionMode, openHarmonyMode);

  // octave offset
  notes = keyShiftNotes(notes, octaveOffset * 12);

  return notes;
}

function inversionAndOpenHarmony(notes, inversionMode, openHarmonyMode) {
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

function keyShiftNotes(notes, v) {
  for (let iNotes = 0; iNotes < notes.length; iNotes++) {
    notes[iNotes] += v;
  }
  return notes;
}

function getNotesByChordOverBassNote(upperRoot, upperQuality, lowerRoot, inversionMode, openHarmonyMode, octaveOffsetUpper, octaveOffsetLower) {
  // lower
  let notes = [];
  notes.push(lowerRoot + octaveOffsetLower * 12);

  // upper
  let upperNotes = getUpperNotes(upperRoot, upperQuality, lowerRoot, octaveOffsetUpper);
  // 転回形 & drop2等
  upperNotes = inversionAndOpenHarmony(upperNotes, inversionMode, openHarmonyMode);

  notes.push(...upperNotes);

  return notes;
}

function getUpperNotes(upperRoot, upperQuality, lowerRoot, octaveOffset) {
  let upperNotes = getNotes(upperRoot, upperQuality, /*inversionMode=*/"root inv", /*openHarmonyMode=*/"close", octaveOffset);
  // octave
  if (upperRoot <= lowerRoot) {
    upperNotes = keyShiftNotes(upperNotes, 12);
  }
  return upperNotes;
}

function getNotesByInversionChord(upperRoot, upperQuality, lowerRoot, bassPlayMode, octaveOffset) {
  let notes = [];
  if (bassPlayMode == "root") {
    // bass
    notes.push(upperRoot);
    // chord inversion
    let upperNotes = getUpperNotes(upperRoot, upperQuality, upperRoot, octaveOffset); // getUpperNotesを使うのは、bassのrootより上のoctaveのnotesを得る用
    upperNotes = inversionByTargetNote(upperNotes, lowerRoot);
    notes.push(...upperNotes);
    notes = keyShiftNotes(notes, -12); // bass noteがあるぶん音域を下げる用
  } else {
    notes = getNotes(upperRoot, upperQuality, /*inversionMode=*/"root inv", /*openHarmonyMode=*/"close", octaveOffset);
    notes = inversionByTargetNote(notes, lowerRoot);
  }

  return notes;
}

function inversionByTargetNote(notes, targetNote) {
  // targetNoteが最低音となるよう、inversionする
  let isInverted = false;
  for (let _dummy of notes) {
    if (((notes[0] % 12) + 12) % 12 == ((targetNote % 12) + 12) % 12) {
      isInverted = true;
      break; // %12は、getUpperNotesで+12されたnotesが来てもmatchする用
    }
    notes.push(notes.shift());
  }
  if (isInverted) {
    notes = adjustNotesOctave(notes);
    return notes;
  }
  throw new Error(`ERROR : ${JSON.stringify(notes)} を転回しようとしましたが、chordに ${JSON.stringify(targetNote)} が含まれていません。chordに含まれるnoteを指定してください。`)
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

function getNotesByPolychord(upperRoot, upperQuality, upperInversion, lowerRoot, lowerQuality, lowerInversion, octaveOffsetUpper, octaveOffsetLower) {
  const upperNotes = getNotes(upperRoot, upperQuality, upperInversion, /*openHarmonyMode=*/"close", octaveOffsetUpper);
  const lowerNotes = getNotes(lowerRoot, lowerQuality, lowerInversion, /*openHarmonyMode=*/"close", octaveOffsetLower);
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
