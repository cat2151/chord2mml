{{
    function getOffsetIonian(degree) {
        return getOffsetsByScale("ionian")[getDegreeIndex(degree)];
    }

    function getOffsetsByScale(scale) {
        switch (scale) {
        case "ionian":     return [0,2,4,5,7,9,11];
        case "dorian":     return [0,2,3,5,7,9,10];
        case "phrygian":   return [0,1,3,5,7,8,10];
        case "lydian":     return [0,2,4,6,7,9,11];
        case "mixolydian": return [0,2,4,5,7,9,10];
        case "aeolian":    return [0,2,3,5,7,8,10];
        case "locrian":    return [0,1,3,5,6,8,10];
        default: throw new Error(`ERROR : getOffsetsByScale`);
        }
    }

    function getDegreeIndex(degree) {
        switch (degree) {
        case 'I':   return 0;
        case 'II':  return 1;
        case 'III': return 2;
        case 'IV':  return 3;
        case 'V':   return 4;
        case 'VI':  return 5;
        case 'VII': return 6;
        //
        case '1':   return 0;
        case '2':   return 1;
        case '3':   return 2;
        case '4':   return 3;
        case '5':   return 4;
        case '6':   return 5;
        case '7':   return 6;
        default: throw new Error(`ERROR : getDegreeIndex`);
        }
    }

    function getRootCdefgabOffset(root, sharp, flat) {
        let offset;
        switch (root) {
        case 'C': offset =  0; break;
        case 'D': offset =  2; break;
        case 'E': offset =  4; break;
        case 'F': offset =  5; break;
        case 'G': offset =  7; break;
        case 'A': offset =  9; break;
        case 'B': offset = 11; break;
        default: throw new Error(`ERROR : getRootCdefgabOffset`);
        }
        offset += sharp.length - flat.length;
        return offset;
    }
}}
{
    let gKey = 0; // 0～11
    let gScale = "ionian";
}
CHORDS=event:EVENT* _ { return event; }
EVENT=INLINE_ABC
    / INLINE_MML
    / BAR_SLASH
    / MIDI_PROGRAM_CHANGE
    / TEMPO
    / OCTAVE_UP_UPPER / OCTAVE_DOWN_UPPER
    / OCTAVE_UP_LOWER / OCTAVE_DOWN_LOWER
    / OCTAVE_UP       / OCTAVE_DOWN
    / SLASH_CHORD_MODE_CHORD_OVER_BASS_NOTE
    / SLASH_CHORD_MODE_POLYCHORD
    / SLASH_CHORD_MODE_INVERSION
    / INVERSION_MODE_ROOT_INV
    / INVERSION_MODE_1ST_INV
    / INVERSION_MODE_2ND_INV
    / INVERSION_MODE_3RD_INV
    / OPEN_HARMONY_MODE_DROP2AND4
    / OPEN_HARMONY_MODE_DROP4
    / OPEN_HARMONY_MODE_DROP2
    / OPEN_HARMONY_MODE_CLOSE
    / BASS_PLAY_MODE_NO_BASS
    / BASS_PLAY_MODE_ROOT
    / BAR
    / SCALE / KEY
    / SLASH_CHORD
    / ON_CHORD
    / CHORD
CHORD=_ root:ROOT quality:CHORD_QUALITY inversion:INVERSION octaveOffset:OCTAVE_OFFSET CHORD_SEPARATOR {
    return { event: "chord", root, quality, inversion, octaveOffset }; }
SLASH_CHORD=_   upperRoot:ROOT  upperQuality:CHORD_QUALITY  upperInversion:INVERSION upperOctaveOffset:OCTAVE_OFFSET "/"
                lowerRoot:ROOT? lowerQuality:CHORD_QUALITY? lowerInversion:INVERSION lowerOctaveOffset:OCTAVE_OFFSET CHORD_SEPARATOR {
    lowerRoot ??= upperRoot;
    lowerQuality ??= upperQuality;
    return { event: "slash chord", upperRoot, upperQuality, upperInversion, upperOctaveOffset, lowerRoot, lowerQuality, lowerInversion, lowerOctaveOffset }; }
ON_CHORD=_  upperRoot:ROOT  upperQuality:CHORD_QUALITY  upperInversion:INVERSION upperOctaveOffset:OCTAVE_OFFSET ("on" / "over")
            lowerRoot:ROOT? lowerQuality:CHORD_QUALITY? lowerInversion:INVERSION lowerOctaveOffset:OCTAVE_OFFSET CHORD_SEPARATOR {
    lowerRoot ??= upperRoot;
    lowerQuality ??= upperQuality;
    return { event: "chord over bass note", upperRoot, upperQuality, upperInversion, upperOctaveOffset, lowerRoot, lowerQuality, lowerInversion, lowerOctaveOffset }; } // このオンコード表記は日本固有である。見かけるので対象とした。なおover表記を海外で見かけたのでそれも対象にした。
SLASH_CHORD_MODE_CHORD_OVER_BASS_NOTE=_ "chord over bass note"i [\,\.]? { return { event: "change slash chord mode to chord over bass note" }; }
SLASH_CHORD_MODE_INVERSION=_ ("slash chord inversion"i) [\,\.]? { return { event: "change slash chord mode to inversion" }; } // "slash chord"の文言を追加したのは、inversionだけだと意図がわからないことがあるので。当初はわかったが現在は仕様が複雑になったため。
SLASH_CHORD_MODE_POLYCHORD=_ ("upper structure triad"i / "upper structure"i / "UST"i / "US"i / "polychord"i / "poly"i) [\,\.]? {
    return { event: "change slash chord mode to polychord" }; }
INLINE_MML= "/*" mml:([^*/] / INLINE_MML_SUB / "/")+ "*/" { return { event: "inline mml", mml: mml.join("") }; }
INLINE_MML_SUB = "*" [^/] { return text(); }
INLINE_ABC= "/*/*" abc:([^*/] / INLINE_MML_SUB / "/")+ "*/*/" { return { event: "inline mml", mml: "/*" + abc.join("") + "*/" }; }
INVERSION_MODE_ROOT_INV=_ "root inv"i [\,\.]? _ { return { event: "change inversion mode to root inv" }; }
INVERSION_MODE_1ST_INV=_ "1st inv"i [\,\.]? _ { return { event: "change inversion mode to 1st inv" }; }
INVERSION_MODE_2ND_INV=_ "2nd inv"i [\,\.]? _ { return { event: "change inversion mode to 2nd inv" }; }
INVERSION_MODE_3RD_INV=_ "3rd inv"i [\,\.]? _ { return { event: "change inversion mode to 3rd inv" }; } // 4和音用
OPEN_HARMONY_MODE_CLOSE=_ ("close harmony"i / "close"i) [\,\.]? _ { return { event: "change open harmony mode to close" }; } // close harmonyは、wikipedia英語版より。open harmonyに寄せた。
OPEN_HARMONY_MODE_DROP2=_ ("drop2"i / "drop-2"i / "open triad"i) [\,\.]? _ { return { event: "change open harmony mode to drop2" }; } // open harmonyは、wikipedia英語版より。open voicingにしないのは、wikipedia英語版でそれが使われていないため。
OPEN_HARMONY_MODE_DROP4=_ ("drop4"i / "drop-4"i) [\,\.]? _ { return { event: "change open harmony mode to drop4" }; } // ハイフンありは、wikipedia英語版より。ハイフン有無どちらもありうるとのこと。
OPEN_HARMONY_MODE_DROP2AND4=_ ("drop2and4"i / "drop-2-and-4"i) [\,\.]? _ { return { event: "change open harmony mode to drop2and4" }; }
BASS_PLAY_MODE_NO_BASS=_ ("no bass"i) [\,\.]? _ { return { event: "change bass play mode to no bass" }; }
BASS_PLAY_MODE_ROOT=_ ("bass is root"i / "bass plays root"i / "bass play root"i) [\,\.]? _ { return { event: "change bass play mode to root" }; }
TEMPO=_ ("BPM"i / "TEMPO"i) _ bpm:[0-9]+ [\,\.]? _ { return { event: "inline mml", mml: "t" + bpm.join("") }; }
BAR=_ "|" _ { return { event: "bar" }; }
BAR_SLASH=_ "/ " _ { return { event: "bar slash" }; }
KEY=_ "key"i [ \=:]? k:KEY_EVENT [\,\.]? _ { return k; }
KEY_EVENT=root:[A-G] sharp:SHARP* flat:FLAT* m:("minor"i / "m")? {
    gKey = getRootCdefgabOffset(root, sharp, flat);
    return { event: "key", root, sharpLength: sharp.length, flatLength: flat.length, offset: gKey }; }

SCALE=_ s:("ionian"i / "dorian"i / "phrygian"i / "lydian"i / "mixolydian"i / "aeolian"i / "locrian"i) [\,\.]? _ { gScale = s.toLowerCase(); return { event: "scale", offsets: getOffsetsByScale(gScale) }; }

OCTAVE_UP=_ ("octave"i [ \-] "up"i) [\,\.]? _ { return { event: "octave up" }; }
OCTAVE_UP_UPPER=_ ("octave"i [ \-] "up"i) "/" [\,\.]? _ { return { event: "octave up upper" }; }
OCTAVE_UP_LOWER=_ "/" ("octave"i [ \-] "up"i) [\,\.]? _ { return { event: "octave up lower" }; }

OCTAVE_DOWN=_ ("octave"i [ \-] "down"i) [\,\.]? _ { return { event: "octave down" }; }
OCTAVE_DOWN_UPPER=_ ("octave"i [ \-] "down"i) "/" [\,\.]? _ { return { event: "octave down upper" }; }
OCTAVE_DOWN_LOWER=_ "/" ("octave"i [ \-] "down"i) [\,\.]? _ { return { event: "octave down lower" }; }

ROOT=ROOT_CDEFGAB
    /ROOT_DEGREE

ROOT_CDEFGAB=root:[A-G] sharp:SHARP* flat:FLAT* { return getRootCdefgabOffset(root, sharp, flat); }

ROOT_DEGREE=sharp:SHARP* flat:FLAT* degree:("VII" / "III" / "VI"/ "IV" / "II" / "V" / "I" / [1-7]) { // 文字数の多い順に並べるのは、そうしないとVIをV Iと認識するので防止用
    // 課題。 getOffsetIonian() と関連関数がやや大規模。当ライブラリの方針的に、AST生成側の分担としては大規模すぎる感触。
    //  対策、このまま進んで様子見する。
    //   根拠、ここでやる理由は、ROOT部分に影響範囲を閉じるため。ここ以外でやると、chord, chord over bass note, などそれぞれのdegree版を作ることになり影響範囲が広いため。
	let offset = getOffsetIonian(degree);
    offset += sharp.length - flat.length + gKey;
    return offset; }

SHARP=[#＃♯] { return "#"; }
FLAT=[b♭] { return "b"; }

CHORD_QUALITY=quality:((QUARTAL_HARMONY / MIN7 / MAJ7 / MAJ_LONG / MIN_LONG / SEVENTH_SUS4 / SEVENTH_SUS2 / SUS4 / SUS2 / DIM_TRIAD / AUG / THIRTEENTH / ELEVENTH // 2文字以上系
    / NINTH / SEVENTH / SIXTH / MIN_SHORT // 1文字系
    / MAJ_SHORT ) // 0文字系
    (OMIT_N / ADD_N / FLATTED_FIFTH / AUGMENTED_FIFTH)* ) {
    return quality.join(""); }
MAJ_LONG="maj"i { return "maj"; } // LONGとSHORTに分けたのは、文字数の多いものから順に並べ、意図通りにマッチさせる用
MAJ_SHORT=("M" / "") { return "maj"; }
MAJ7=("maj7"i / "M7" / "△") { return "maj7"; }
MIN_LONG="min"i { return "min"; }
MIN_SHORT=("m" / "-") { return "min"; }
MIN7=("min7"i / "m7" / "-7") { return "min7"; }
SIXTH="6" { return "6"; }
SEVENTH="7" { return "7"; }
NINTH="9" { return "9"; }
ELEVENTH="11" { return "11"; }
THIRTEENTH="13" { return "13"; }
SUS2="sus2" { return "sus2"; }
SUS4="sus4" { return "sus4"; }
SEVENTH_SUS2="7sus2" { return "7sus2"; }
SEVENTH_SUS4="7sus4" { return "7sus4"; }
DIM_TRIAD="dim" { return "dim triad"; }
AUG="aug" { return "aug"; }
QUARTAL_HARMONY="4." n:[2-9]+ { return text(); } // 四度堆積
FLATTED_FIFTH=("(b5)" / "(-5)") { return ",flatted fifth"; }
AUGMENTED_FIFTH=("(+5)" / "(#5)") { return ",augmented fifth"; }
OMIT_N="("? ("omit" / "o") n:[135] ")"? { return ",omit" + n; }
ADD_N="("? "add" n:[0-9]+ ")"? { return ",add" + n.join(""); }
//今後の仕様検討のため残しておく：
//  CHORD_QUALITY=[A-Za-z0-9△\-]* { return text(); }
//      NGだった。NG事例は「ConC」。「onC」をqualityとして認識してしまうため。
//      ここで必要なのは「onCにはmatchしない」ことである。
//      そこで必要なのは「qualityとして成立するもののみmatchする。それ以外にはmatchしない」ことである。

INVERSION=("^" [0-3])? {
    switch (text()) {
        case "": return null; // inversion modeのままとする用
        case "^0": return "root inv"; // inversion modeで1st～3rdが指定されていたときに、それを打ち消してroot invにする用
        case "^1": return "1st inv";
        case "^2": return "2nd inv";
        case "^3": return "3rd inv";
        default: throw new Error(`ERROR : INVERSION`);
    }
}

OCTAVE_OFFSET=up:"'"* down:","* { return up.length - down.length; } // ABC Notation のoctave offsetと類似の記法とする

_ "whitespace"= WHITE_SPACE*
WHITE_SPACE=[ \t\n\r]
HYPHEN= (" - " / _ "→" _) // コードのつなぎで書かれることがあり、それを扱える用。ハイフンは前後space必須。でないと C-C が、Cmin Cmaj なのか、Cmaj - Cmaj なのか区別がつかない。
CHORD_SEPARATOR=(HYPHEN / WHITE_SPACE / !.) // !. は end of input

MIDI_PROGRAM_CHANGE=PC048 / PC049 / PC052
PC048=_ ("Strings"i _ "Ensemble"i _ "1" / "Strings"i _ "1" / "Str."i _ "1") [\,\.]? _ { return { event: "inline mml", mml: "@48" }; }
PC049=_ ("Strings"i _ "Ensemble"i _ "2" / "Strings"i _ "2" / "Str."i _ "2") [\,\.]? _ { return { event: "inline mml", mml: "@49" }; }
PC052=_ ("Voice Aahs"i / "Choir Aahs"i / "Choir"i / "Chor."i) [\,\.]? _ { return { event: "inline mml", mml: "@52" }; }
