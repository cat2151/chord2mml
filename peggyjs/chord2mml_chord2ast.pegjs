CHORDS=EVENT*
EVENT=COMPOUND_CHORD_MODE
    / UPPER_STRUCTURE_MODE
    / INVERSION_MODE
    / SLASH_CHORD
    / COMPOUND_CHORD
    / CHORD
CHORD=_ root:ROOT quality:CHORD_QUALITY _ { return { event: "chord", root, quality }; }
SLASH_CHORD=_ upperRoot:ROOT upperQuality:CHORD_QUALITY "/" lowerRoot:ROOT lowerQuality:CHORD_QUALITY _ {
    return { event: "slash chord", upperRoot, upperQuality, lowerRoot, lowerQuality }; }
COMPOUND_CHORD=_ upperRoot:ROOT upperQuality:CHORD_QUALITY "on" lowerRoot:ROOT lowerQuality:CHORD_QUALITY _ {
    return { event: "compound chord", upperRoot, upperQuality, lowerRoot, lowerQuality }; } // ON_CHORDと書かないのは「オンコード」は日本固有の表記らしいため
COMPOUND_CHORD_MODE=_ "compound chord"i _ { return { event: "compound chord" }; }
INVERSION_MODE=_ "inversion"i _ { return { event: "inversion" }; }
UPPER_STRUCTURE_MODE=_ ("upper structure"i / "UST"i / "US"i / "polychord"i / "poly"i) _ { return { event: "upper structure" }; }
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
