CHORDS=EVENT*
EVENT=INLINE_MML
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
    / CHORD
CHORD=_ root:ROOT quality:CHORD_QUALITY H _ { return { event: "chord", root, quality }; }
SLASH_CHORD=_ upperRoot:ROOT upperQuality:CHORD_QUALITY "/" lowerRoot:ROOT lowerQuality:CHORD_QUALITY H _ {
    return { event: "slash chord", upperRoot, upperQuality, lowerRoot, lowerQuality }; }
ON_CHORD=_ upperRoot:ROOT upperQuality:CHORD_QUALITY "on" lowerRoot:ROOT lowerQuality:CHORD_QUALITY H _ {
    return { event: "chord over bass note", upperRoot, upperQuality, lowerRoot, lowerQuality }; } // このオンコード表記は日本固有である。見かけるので対象とした。
SLASH_CHORD_MODE_CHORD_OVER_BASS_NOTE=_ "chord over bass note"i _ { return { event: "change slash chord mode to chord over bass note" }; }
SLASH_CHORD_MODE_INVERSION=_ ("inversion"i / "inv"i) _ { return { event: "change slash chord mode to inversion" }; }
SLASH_CHORD_MODE_POLYCHORD=_ ("upper structure triad"i / "upper structure"i / "UST"i / "US"i / "polychord"i / "poly"i) _ { return { event: "change slash chord mode to polychord" }; }
INLINE_MML= "/*" mml:[^*/]+ "*/" { return { event: "inline mml", mml: mml.join("") }; } // 問題、*と/を含むことができない。適切な書き方があるか把握できていない。対策、ひとまず試して様子見する
INVERSION_MODE_ROOT_INV=_ "root inv"i _ { return { event: "change inversion mode to root inv" }; }
INVERSION_MODE_1ST_INV=_ "1st inv"i _ { return { event: "change inversion mode to 1st inv" }; }
INVERSION_MODE_2ND_INV=_ "2nd inv"i _ { return { event: "change inversion mode to 2nd inv" }; }
INVERSION_MODE_3RD_INV=_ "3rd inv"i _ { return { event: "change inversion mode to 3rd inv" }; } // 4和音用
OPEN_HARMONY_MODE_CLOSE=_ ("close harmony"i / "close"i) _ { return { event: "change open harmony mode to close" }; } // close harmonyは、wikipedia英語版より。open harmonyに寄せた。
OPEN_HARMONY_MODE_DROP2=_ ("drop2"i / "drop-2"i / "open triad"i) _ { return { event: "change open harmony mode to drop2" }; } // open harmonyは、wikipedia英語版より。open voicingにしないのは、wikipedia英語版でそれが使われていないため。
OPEN_HARMONY_MODE_DROP4=_ ("drop4"i / "drop-4"i) _ { return { event: "change open harmony mode to drop4" }; } // ハイフンありは、wikipedia英語版より。ハイフン有無どちらもありうるとのこと。
OPEN_HARMONY_MODE_DROP2AND4=_ ("drop2and4"i / "drop-2-and-4"i) _ { return { event: "change open harmony mode to drop2and4" }; }
ROOT=root:[A-G] sharp:SHARP* flat:FLAT* {
	let offset;
    switch (root) {
    case 'C': offset =  0; break;
    case 'D': offset =  2; break;
    case 'E': offset =  4; break;
    case 'F': offset =  5; break;
    case 'G': offset =  7; break;
    case 'A': offset =  9; break;
    case 'B': offset = 11; break;
    defaut: assert(false); break;
    }
    offset += sharp.length - flat.length;
    offset %= 12;
    return offset; }
SHARP=[#＃♯] { return "#"; }
FLAT=[b♭] { return "b"; }
CHORD_QUALITY=quality:(MIN7 / MAJ7 / MAJ_LONG / MIN_LONG / MIN_SHORT / MAJ_SHORT) { return quality; }
MAJ_LONG="maj"i { return "maj"; } // LONGとSHORTに分けたのは、文字数の多いものから順に並べ、意図通りにマッチさせる用
MAJ_SHORT=("M" / "") { return "maj"; }
MAJ7=("maj7"i / "△") { return "maj7"; }
MIN_LONG="min"i { return "min"; }
MIN_SHORT=("m" / "-") { return "min"; }
MIN7=("min7"i / "m7" / "-7") { return "min7"; }
_ "whitespace"= [ \t\n\r]*
H "hyphen"= (" - " / _ "→" _)* // コードのつなぎで書かれることがあり、それを扱える用。ハイフンは前後space必須。でないと C-C が、Cmin Cmaj なのか、Cmaj - Cmaj なのか区別がつかない。
