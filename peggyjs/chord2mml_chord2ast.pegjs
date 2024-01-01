CHORDS=CHORD*
CHORD=_ root:ROOT chordType:CHORD_TYPE _ { return { root, chordType }; }
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
CHORD_TYPE=chordType:(MAJ7 / MAJ) { return chordType; }
MAJ=("maj"i / "M" / "") { return "maj"; }
MAJ7=("maj7"i / "△") { return "maj7"; }
_ "whitespace"= [ \t\n\r]*
