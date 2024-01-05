{{
    function getOffsetByScale(scale, root) {
        switch (scale) {
        case "ionian":
            switch (root) {
            case 'I':   return 0;
            case 'II':  return 2;
            case 'III': return 4;
            case 'IV':  return 5;
            case 'V':   return 7;
            case 'VI':  return 9;
            case 'VII': return 11;
            default: throw new Error(`ERROR : getOffsetByScale`);
            }
        case "dorian":
            switch (root) {
            case 'I':   return 0;
            case 'II':  return 2;
            case 'III': return 3;
            case 'IV':  return 5;
            case 'V':   return 7;
            case 'VI':  return 9;
            case 'VII': return 10;
            default: throw new Error(`ERROR : getOffsetByScale`);
            }
        case "phrygian":
            switch (root) {
            case 'I':   return 0;
            case 'II':  return 1;
            case 'III': return 3;
            case 'IV':  return 5;
            case 'V':   return 7;
            case 'VI':  return 8;
            case 'VII': return 10;
            default: throw new Error(`ERROR : getOffsetByScale`);
            }
        case "lydian":
            switch (root) {
            case 'I':   return 0;
            case 'II':  return 2;
            case 'III': return 4;
            case 'IV':  return 6;
            case 'V':   return 7;
            case 'VI':  return 9;
            case 'VII': return 11;
            default: throw new Error(`ERROR : getOffsetByScale`);
            }
        case "mixolydian":
            switch (root) {
            case 'I':   return 0;
            case 'II':  return 2;
            case 'III': return 4;
            case 'IV':  return 5;
            case 'V':   return 7;
            case 'VI':  return 9;
            case 'VII': return 10;
            default: throw new Error(`ERROR : getOffsetByScale`);
            }
        case "aeolian":
            switch (root) {
            case 'I':   return 0;
            case 'II':  return 1;
            case 'III': return 3;
            case 'IV':  return 5;
            case 'V':   return 7;
            case 'VI':  return 8;
            case 'VII': return 10;
            default: throw new Error(`ERROR : getOffsetByScale`);
            }
        case "locrian":
            switch (root) {
            case 'I':   return 0;
            case 'II':  return 1;
            case 'III': return 3;
            case 'IV':  return 5;
            case 'V':   return 6;
            case 'VI':  return 8;
            case 'VII': return 10;
            default: throw new Error(`ERROR : getOffsetByScale`);
            }
        default: throw new Error(`ERROR : getOffsetByScale`);
        }
    }
}}
{
    let key = 0; // 0～11
    let scale = "ionian";
}
CHORDS=event:EVENT* _ { return event; }
EVENT=INLINE_MML
    / BAR_SLASH
    / MIDI_PROGRAM_CHANGE
    / TEMPO
    / OCTAVE_UP_UPPER / OCTAVE_DOWN_UPPER
    / OCTAVE_UP_LOWER / OCTAVE_DOWN_LOWER
    / OCTAVE_UP       / OCTAVE_DOWN
    / SLASH_CHORD_MODE_CHORD_OVER_BASS_NOTE
    / SLASH_CHORD_MODE_POLYCHORD
    / SLASH_CHORD_MODE_INVERSION
    / SLASH_CHORD
    / ON_CHORD
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
    / SCALE / KEY
    / CHORD
    / BAR
CHORD=_ root:ROOT quality:CHORD_QUALITY inversion:INVERSION H { return { event: "chord", root, quality, inversion }; }
SLASH_CHORD=_ upperRoot:ROOT upperQuality:CHORD_QUALITY upperInversion:INVERSION "/" lowerRoot:ROOT lowerQuality:CHORD_QUALITY lowerInversion:INVERSION H {
    return { event: "slash chord", upperRoot, upperQuality, upperInversion, lowerRoot, lowerQuality, lowerInversion }; }
ON_CHORD=_ upperRoot:ROOT upperQuality:CHORD_QUALITY upperInversion:INVERSION ("on" / "over") lowerRoot:ROOT lowerQuality:CHORD_QUALITY lowerInversion:INVERSION H {
    return { event: "chord over bass note", upperRoot, upperQuality, upperInversion, lowerRoot, lowerQuality, lowerInversion }; } // このオンコード表記は日本固有である。見かけるので対象とした。なおover表記を海外で見かけたのでそれも対象にした。
SLASH_CHORD_MODE_CHORD_OVER_BASS_NOTE=_ "chord over bass note"i [\,\.]? { return { event: "change slash chord mode to chord over bass note" }; }
SLASH_CHORD_MODE_INVERSION=_ ("slash chord inversion"i) [\,\.]? { return { event: "change slash chord mode to inversion" }; } // "slash chord"の文言を追加したのは、inversionだけだと意図がわからないことがあるので。当初はわかったが現在は仕様が複雑になったため。
SLASH_CHORD_MODE_POLYCHORD=_ ("upper structure triad"i / "upper structure"i / "UST"i / "US"i / "polychord"i / "poly"i) [\,\.]? {
    return { event: "change slash chord mode to polychord" }; }
INLINE_MML= "/*" mml:[^*/]+ "*/" { return { event: "inline mml", mml: mml.join("") }; } // 問題、*と/を含むことができない。適切な書き方があるか把握できていない。対策、ひとまず試して様子見する
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
BAR_SLASH=" / " _ { return { event: "bar slash" }; }
KEY=_ "key"i [ \=]? k:ROOT_CDEFGAB [\,\.]? _ { key = k; return { event: "" }; }
SCALE=_ s:("ionian"i / "dorian"i / "phrygian"i / "lydian"i / "mixolydian"i / "aeolian"i / "locrian"i) [\,\.]? _ { scale = s.toLowerCase(); return { event: "" }; }

OCTAVE_UP=_ ("octave"i [ \-] "up"i) [\,\.]? _ { return { event: "octave up" }; }
OCTAVE_UP_UPPER=_ ("octave"i [ \-] "up"i) "/" [\,\.]? _ { return { event: "octave up upper" }; }
OCTAVE_UP_LOWER=_ "/" ("octave"i [ \-] "up"i) [\,\.]? _ { return { event: "octave up lower" }; }

OCTAVE_DOWN=_ ("octave"i [ \-] "down"i) [\,\.]? _ { return { event: "octave down" }; }
OCTAVE_DOWN_UPPER=_ ("octave"i [ \-] "down"i) "/" [\,\.]? _ { return { event: "octave down upper" }; }
OCTAVE_DOWN_LOWER=_ "/" ("octave"i [ \-] "down"i) [\,\.]? _ { return { event: "octave down lower" }; }

ROOT=ROOT_CDEFGAB
    /ROOT_DEGREE

ROOT_CDEFGAB=root:[A-G] sharp:SHARP* flat:FLAT* {
	let offset;
    switch (root) {
    case 'C': offset =  0; break;
    case 'D': offset =  2; break;
    case 'E': offset =  4; break;
    case 'F': offset =  5; break;
    case 'G': offset =  7; break;
    case 'A': offset =  9; break;
    case 'B': offset = 11; break;
    default: throw new Error(`ERROR : ROOT_CDEFGAB`);
    }
    offset += sharp.length - flat.length;
    return offset; }

ROOT_DEGREE=sharp:SHARP* flat:FLAT* root:("VII" / "III" / "VI"/ "IV" / "II" / "V" / "I") { // 文字数の多い順に並べるのは、そうしないとVIをV Iと認識するので防止用
    // 課題。getOffsetByScale() が大規模。当ライブラリの方針的に、AST生成側の分担としては大規模すぎる感触。
    //  対策、このまま進んで様子見する。
    //   根拠、ここでやる理由は、ROOT部分に影響範囲を閉じるため。ここ以外でやると、chord, chord over bass note, などそれぞれのdegree版を作ることになり影響範囲が広いため。
	let offset = getOffsetByScale(scale, root);
    offset += sharp.length - flat.length + key;
    return offset; }

SHARP=[#＃♯] { return "#"; }
FLAT=[b♭] { return "b"; }

CHORD_QUALITY=quality:(MIN7 / MAJ7 / MAJ_LONG / MIN_LONG / MIN_SHORT / MAJ_SHORT) { return quality; }
MAJ_LONG="maj"i { return "maj"; } // LONGとSHORTに分けたのは、文字数の多いものから順に並べ、意図通りにマッチさせる用
MAJ_SHORT=("M" / "") { return "maj"; }
MAJ7=("maj7"i / "M7" / "△") { return "maj7"; }
MIN_LONG="min"i { return "min"; }
MIN_SHORT=("m" / "-") { return "min"; }
MIN7=("min7"i / "m7" / "-7") { return "min7"; }

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

_ "whitespace"= [ \t\n\r]*
H "hyphen"= (" - " / _ "→" _)* // コードのつなぎで書かれることがあり、それを扱える用。ハイフンは前後space必須。でないと C-C が、Cmin Cmaj なのか、Cmaj - Cmaj なのか区別がつかない。

MIDI_PROGRAM_CHANGE=PC048 / PC049 / PC052
PC048=_ ("Strings" _ "Ensemble" _ "1"i / "Strings" _ "1" / "Str." _ "1") [\,\.]? _ { return { event: "inline mml", mml: "@48" }; }
PC049=_ ("Strings" _ "Ensemble" _ "2"i / "Strings" _ "2" / "Str." _ "2") [\,\.]? _ { return { event: "inline mml", mml: "@49" }; }
PC052=_ ("Voice Aahs"i / "Choir Aahs"i / "Choir"i / "Chor."i) [\,\.]? _ { return { event: "inline mml", mml: "@52" }; }
