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
        ast.notes = getNotesByChord(ast.root, ast.quality, ast.inversion ?? inversionMode, openHarmonyMode, octaveOffsetUpper + ast.octaveOffset);
        ast = deleteProperties(ast);
        result.push(ast);
        break;
      case "chord over bass note":
        ast.notes = getNotesByChordOverBassNote(ast.upperRoot, ast.upperQuality, ast.lowerRoot, ast.upperInversion ?? inversionMode, openHarmonyMode,
          octaveOffsetUpper + ast.upperOctaveOffset, octaveOffsetLower + ast.lowerOctaveOffset);
        ast = deleteProperties(ast);
        result.push(ast);
        break;
      case "inversion":
        ast.notes = getNotesByInversionChord(ast.upperRoot, ast.upperQuality, ast.lowerRoot, bassPlayMode, octaveOffsetUpper + ast.upperOctaveOffset);
        ast = deleteProperties(ast);
        result.push(ast);
        break;
      case "polychord":
        ast.notes = getNotesByPolychord(ast.upperRoot, ast.upperQuality, ast.upperInversion ?? inversionMode,
            ast.lowerRoot, ast.lowerQuality, ast.lowerInversion ?? inversionMode,
            octaveOffsetUpper + ast.upperOctaveOffset, octaveOffsetLower + ast.lowerOctaveOffset);
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
  delete ast.octaveOffset;

  delete ast.upperRoot;
  delete ast.upperQuality;
  delete ast.upperInversion;
  delete ast.upperOctaveOffset;

  delete ast.lowerRoot;
  delete ast.lowerQuality;
  delete ast.lowerInversion;
  delete ast.lowerOctaveOffset;

  return ast;
}

// 基本chord用
function getNotesByChord(root: number, quality: string, inversionMode: string, openHarmonyMode:string, octaveOffset: number): number[] {
  let notes = getNotes(root, quality);

  // 転回形 & drop2等
  notes = inversionAndOpenHarmony(notes, inversionMode, openHarmonyMode);

  // octave offset
  notes = keyShiftNotes(notes, octaveOffset * 12);

  return notes;
}

function getNotesByChordOverBassNote(upperRoot: number, upperQuality:string, lowerRoot: number,
                                      inversionMode: string, openHarmonyMode: string, octaveOffsetUpper: number, octaveOffsetLower: number): number[] {
  // lower
  let lowerNotes = [lowerRoot];

  // upper
  let upperNotes = getNotes(upperRoot, upperQuality);
  // 転回形 & drop2等
  upperNotes = inversionAndOpenHarmony(upperNotes, inversionMode, openHarmonyMode);
  // lowerの上にupperを重ねる
  upperNotes = keyShiftUpperNotes(upperNotes, lowerNotes);

  // lower + upper
  let notes = concatLowerAndUpper(upperNotes, octaveOffsetUpper, lowerNotes, octaveOffsetLower);

  // bass noteがあるぶん音域を下げる
  notes = keyShiftNotes(notes, -12);

  return notes;
}

function concatLowerAndUpper(upperNotes: number[], octaveOffsetUpper:number, lowerNotes: number[], octaveOffsetLower): number[] {
  // octave offset
  lowerNotes = keyShiftNotes(lowerNotes, octaveOffsetLower * 12);
  upperNotes = keyShiftNotes(upperNotes, octaveOffsetUpper * 12);

  // lower vs upper 衝突したか？
  if (upperNotes[0] <= lowerNotes[lowerNotes.length - 1]) throw new Error(`ERROR : lowerとupperが衝突しました lowerNotes:${lowerNotes} upperNotes:${upperNotes}`);

  // 結合
  let notes = [];
  notes.push(...lowerNotes, ...upperNotes);

  return notes;
}

function keyShiftUpperNotes(upperNotes: number[], lowerNotes: number[]): number[] {
  // lowerの上にupperを積み重ねる用
  while (upperNotes[0] <= lowerNotes[lowerNotes.length - 1]) {
    upperNotes = keyShiftNotes(upperNotes, 12);
  }
  return upperNotes;
}

function getNotesByInversionChord(upperRoot: number, upperQuality: string, lowerRoot: number, bassPlayMode: string, octaveOffset: number): number[] {
  if (bassPlayMode == "root") {
    // bass
    let lowerNotes = [upperRoot]; // bass is root時は、upper部に記述されたものをrootつまりここではlowerNotesとして扱う

    // chord inversion
    let upperNotes = getNotes(upperRoot, upperQuality);
    upperNotes = inversionByTargetNote(upperNotes, lowerRoot);

    // lower + upper
    let notes = concatLowerAndUpper(upperNotes, octaveOffset, lowerNotes, /*octaveOffsetLower=*/octaveOffset); // 備忘、ここはbass is rootかつ、slashなしchord時である。よって臨時octave指定はupper lower共通でかかる、とする。

    // bass noteがあるぶん音域を下げる
    notes = keyShiftNotes(notes, -12);

    return notes;
  } else {
    let notes = getNotes(upperRoot, upperQuality);
    // octave offset
    notes = keyShiftNotes(notes, octaveOffset * 12);
    // inversion
    notes = inversionByTargetNote(notes, lowerRoot);

    return notes;
  }
}

function getNotesByPolychord(upperRoot: number, upperQuality: string, upperInversion: string,
    lowerRoot: number, lowerQuality: string, lowerInversion: string, octaveOffsetUpper: number, octaveOffsetLower: number): number[] {
  let upperNotes = getNotes(upperRoot, upperQuality);
  let lowerNotes = getNotes(lowerRoot, lowerQuality);

  // inversion
  upperNotes = inversionAndOpenHarmony(upperNotes, upperInversion, /*openHarmonyMode = */"");
  lowerNotes = inversionAndOpenHarmony(lowerNotes, lowerInversion, /*openHarmonyMode = */"");

  // lowerNotesの最高音より、upperNotesの最低音のほうが高い音とする用
  upperNotes = keyShiftUpperNotes(upperNotes, lowerNotes);

  // lower + upper
  let notes = concatLowerAndUpper(upperNotes, octaveOffsetUpper, lowerNotes, octaveOffsetLower);

  // lower structureがあるぶん音域を下げる用
  notes = keyShiftNotes(notes, -12);

  return notes;
}

function getNotes(root: number, quality: string): number[] {
  const q = quality.split(",");

  let notes = [];
  switch (q[0]) {
    case "maj": notes = [0,4,7]; break;
    case "maj7": notes = [0,4,7,11]; break;
    case "min": notes = [0,3,7]; break;
    case "min7": notes = [0,3,7,10]; break;
    case "sus2": notes = [0,2,7]; break;
    case "sus4": notes = [0,5,7]; break;
    case "7sus2": notes = [0,2,7,10]; break;
    case "7sus4": notes = [0,5,7,10]; break;
    case "dim triad": notes = [0,3,6]; break;
    case "aug": notes = [0,4,8]; break;
    case "6": notes = [0,4,7,9]; break;
    case "7": notes = [0,4,7,10]; break;
    case "9": notes = [0,4,7,10,14]; break;
    case "11": notes = [0,4,7,10,14,17]; break;
    case "13": notes = [0,4,7,10,14,17,21]; break;
  }

  for (let o of q) {
    switch (o) {
      case "omit1": notes = notes.filter(e => e !== 0); break;
      case "omit3": notes = notes.filter(e => ![3,4].includes(e)); break; // 短三度と長三度を削除
      case "omit5": notes = notes.filter(e => e !== 7); break;
      case "add2":  notes = addNote(notes, 2);      break;
      case "add9":  notes = addNote(notes, 2 + 12); break;
      case "add4":  notes = addNote(notes, 5);      break;
      case "add11": notes = addNote(notes, 5 + 12); break;
      case "add6":  notes = addNote(notes, 9);      break;
      case "add13": notes = addNote(notes, 9 + 12); break;
      case "flatted fifth":   notes = notes.map(note => note === 7 ? 6 : note); break;
      case "augmented fifth": notes = notes.map(note => note === 7 ? 8 : note); break;
    } // switch
  } // for

  // root
  //  chordのrootにあわせ、半音単位でshiftする
  notes = keyShiftNotes(notes, root);

  return notes;
}

function addNote(notes: number[], n: number): number[] {
  if (!notes.includes(n)) {
    notes.push(n);
    notes.sort((a, b) => a - b);
  }
  return notes;
}

function inversionAndOpenHarmony(notes: number[], inversionMode: string, openHarmonyMode: string): number[] {
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

function inversionByTargetNote(notes: number[], targetNote: number): number[] {
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
  let oldNote = -128; // 「臨時octave downを0に補正しない」用
  for (let i = 0; i < notes.length; i++) {
    for (let iNote = -128; iNote < 128; iNote +=12) {
      if (notes[i] > oldNote) break;
      notes[i] += 12;
    }
    oldNote = notes[i];
  }
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
