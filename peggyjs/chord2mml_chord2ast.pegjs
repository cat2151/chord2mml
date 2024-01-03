CHORDS=EVENT*
EVENT=INLINE_MML
    / SLASH_CHORD_MODE_CHORD_OVER_BASS_NOTE
    / SLASH_CHORD_MODE_POLYCHORD
    / SLASH_CHORD_MODE_INVERSION
    / SLASH_CHORD
    / ON_CHORD
    / CHORD
CHORD=_ root:ROOT quality:CHORD_QUALITY _ { return { event: "chord", root, quality }; }
SLASH_CHORD=_ upperRoot:ROOT upperQuality:CHORD_QUALITY "/" lowerRoot:ROOT lowerQuality:CHORD_QUALITY _ {
    return { event: "slash chord", upperRoot, upperQuality, lowerRoot, lowerQuality }; }
ON_CHORD=_ upperRoot:ROOT upperQuality:CHORD_QUALITY "on" lowerRoot:ROOT lowerQuality:CHORD_QUALITY _ {
    return { event: "chord over bass note", upperRoot, upperQuality, lowerRoot, lowerQuality }; } // このオンコード表記は日本固有である。見かけるので対象とした。
SLASH_CHORD_MODE_CHORD_OVER_BASS_NOTE=_ "chord over bass note"i _ { return { event: "change slash chord mode to chord over bass note" }; }
SLASH_CHORD_MODE_INVERSION=_ ("inversion"i / "inv"i) _ { return { event: "change slash chord mode to inversion" }; }
SLASH_CHORD_MODE_POLYCHORD=_ ("upper structure triad"i / "upper structure"i / "UST"i / "US"i / "polychord"i / "poly"i) _ { return { event: "change slash chord mode to polychord" }; }
INLINE_MML= "/*" mml:[^*/]+ "*/" { return { event: "inline mml", mml: mml.join("") }; } // 問題、*と/を含むことができない。適切な書き方があるか把握できていない。対策、ひとまず試して様子見する
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
CHORD_QUALITY=quality:(MAJ7 / MAJ) { return quality; }
MAJ=("maj"i / "M" / "") { return "maj"; }
MAJ7=("maj7"i / "△") { return "maj7"; }
_ "whitespace"= [ \t\n\r]*
