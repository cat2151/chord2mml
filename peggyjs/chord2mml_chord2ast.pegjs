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

CHORD_QUALITY=quality:((QUARTAL_HARMONY / MAJ9 / MIN7 / MAJ7 / MAJ_LONG / MIN_LONG / SEVENTH_SUS4 / SEVENTH_SUS2 / SUS4 / SUS2 / DIM_TRIAD / AUG / THIRTEENTH / ELEVENTH // 2文字以上系
    / NINTH / SEVENTH / SIXTH / MIN_SHORT // 1文字系
    / MAJ_SHORT ) // 0文字系
    (OMIT_N / ADD_N / FLATTED_FIFTH / AUGMENTED_FIFTH)* ) {
    return quality.join(""); }
MAJ_LONG="maj"i { return "maj"; } // LONGとSHORTに分けたのは、文字数の多いものから順に並べ、意図通りにマッチさせる用
MAJ_SHORT=("M" / "") { return "maj"; }
MAJ7=("maj7"i / "M7" / "△") { return "maj7"; }
MAJ9=("maj"i / "M" / "△") "("? "9" ")"? { return "maj7,add9"; } // ast2notes側をシンプルにすることを優先し、ひとまずこれで様子見する
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

MIDI_PROGRAM_CHANGE= PC000 / PC001 / PC002 / PC003 / PC004 / PC005 / PC006 / PC007 / PC008 / PC009
                /    PC010 / PC011 / PC012 / PC013 / PC014 / PC015 / PC016 / PC017 / PC018 / PC019
                /    PC020 / PC021 / PC022 / PC023 / PC024 / PC025 / PC026 / PC027 / PC028 / PC029
                /    PC030 / PC031 / PC032 / PC033 / PC034 / PC035 / PC036 / PC037 / PC038 / PC039
                /    PC040 / PC041 / PC042 / PC043 / PC044 / PC045 / PC046 / PC047 / PC048 / PC049
                /    PC050 / PC051 / PC052 / PC053 / PC054 / PC055 / PC056 / PC057 / PC058 / PC059
                /    PC060 / PC061 / PC062 / PC063 / PC064 / PC065 / PC066 / PC067 / PC068 / PC069
                /    PC070 / PC071 / PC072 / PC073 / PC074 / PC075 / PC076 / PC077 / PC078 / PC079
                /    PC080 / PC081 / PC082 / PC083 / PC084 / PC085 / PC086 / PC087 / PC088 / PC089
                /    PC090 / PC091 / PC092 / PC093 / PC094 / PC095 / PC096 / PC097 / PC098 / PC099
                /    PC100 / PC101 / PC102 / PC103 / PC104 / PC105 / PC106 / PC107 / PC108 / PC109
                /    PC110 / PC111 / PC112 / PC113 / PC114 / PC115 / PC116 / PC117 / PC118 / PC119
                /    PC120 / PC121 / PC122 / PC123 / PC124 / PC125 / PC126 / PC127

PC000=_ ("Piano"i _ "1" / "Acoustic Grand Piano"i / "Grand Piano"i / "Pf") [\,\.]? _ { return { event: "inline mml", mml: "@000" }; }
PC001=_ ("Piano"i _ "2" / "Bright Acoustic Piano"i)                        [\,\.]? _ { return { event: "inline mml", mml: "@001" }; }
PC002=_ ("Piano"i _ "3" / "Electric Grand Piano"i)                         [\,\.]? _ { return { event: "inline mml", mml: "@002" }; }
PC003=_ ("Honky-tonk"i / "Honky-tonk Piano"i)                         [\,\.]? _ { return { event: "inline mml", mml: "@003" }; }
PC004=_ ("E.Piano"i _ "1" / "Electric Piano 1"i / "Rhodes"i / "Wurlitzer"i)              [\,\.]? _ { return { event: "inline mml", mml: "@004" }; }
PC005=_ ("E.Piano"i _ "2" / "Electric Piano 2"i / "FM piano"i)                           [\,\.]? _ { return { event: "inline mml", mml: "@005" }; }
PC006=_ ("Harpsichord"i)                                              [\,\.]? _ { return { event: "inline mml", mml: "@006" }; }
PC007=_ ("Clav."i / "Clavinet"i)                                                 [\,\.]? _ { return { event: "inline mml", mml: "@007" }; }
PC008=_ ("Celesta"i)                                                  [\,\.]? _ { return { event: "inline mml", mml: "@008" }; }
PC009=_ ("Glockenspl"i / "Glockenspiel"i)                                             [\,\.]? _ { return { event: "inline mml", mml: "@009" }; }
PC010=_ ("Music Box"i)                                                [\,\.]? _ { return { event: "inline mml", mml: "@010" }; }
PC011=_ ("Vibraphone"i)                                               [\,\.]? _ { return { event: "inline mml", mml: "@011" }; }
PC012=_ ("Marimba"i)                                                  [\,\.]? _ { return { event: "inline mml", mml: "@012" }; }
PC013=_ ("Xylophone"i)                                                [\,\.]? _ { return { event: "inline mml", mml: "@013" }; }
PC014=_ ("Tubularbell"i / "Tubular Bells"i)                                            [\,\.]? _ { return { event: "inline mml", mml: "@014" }; }
PC015=_ ("Santur"i / "Dulcimer"i)                                                 [\,\.]? _ { return { event: "inline mml", mml: "@015" }; }
PC016=_ ("Organ"i _ "1" / "Drawbar Organ"i)                                            [\,\.]? _ { return { event: "inline mml", mml: "@016" }; }
PC017=_ ("Organ"i _ "2" / "Percussive Organ"i)                                         [\,\.]? _ { return { event: "inline mml", mml: "@017" }; }
PC018=_ ("Organ"i _ "3" / "Rock Organ"i)                                               [\,\.]? _ { return { event: "inline mml", mml: "@018" }; }
PC019=_ ("Church Org"i _ [1-3] / "Church Organ"i)                                             [\,\.]? _ { return { event: "inline mml", mml: "@019" }; }
PC020=_ ("Reed Organ"i)                                               [\,\.]? _ { return { event: "inline mml", mml: "@020" }; }
PC021=_ ("Accordion"i _ [Fl] / "Accordion"i)                                                [\,\.]? _ { return { event: "inline mml", mml: "@021" }; }
PC022=_ ("Harmonica"i)                                                [\,\.]? _ { return { event: "inline mml", mml: "@022" }; }
PC023=_ ("Bandoneon"i)                                                [\,\.]? _ { return { event: "inline mml", mml: "@023" }; }
PC024=_ ("Nylon Gt."i / "Acoustic Guitar (nylon)"i)                                  [\,\.]? _ { return { event: "inline mml", mml: "@024" }; }
PC025=_ ("Steel Gt."i / "Acoustic Guitar (steel)"i)                                  [\,\.]? _ { return { event: "inline mml", mml: "@025" }; }
PC026=_ ("Jazz Gt."i / "Electric Guitar (jazz)"i)                                   [\,\.]? _ { return { event: "inline mml", mml: "@026" }; }
PC027=_ ("Clean Gt."i / "Electric Guitar (clean)"i)                                  [\,\.]? _ { return { event: "inline mml", mml: "@027" }; }
PC028=_ ("Muted Gt."i / "Electric Guitar (muted)"i)                                  [\,\.]? _ { return { event: "inline mml", mml: "@028" }; }
PC029=_ ("Overdrive"i _ "Gt"i / "Electric Guitar (overdrive)"i)                              [\,\.]? _ { return { event: "inline mml", mml: "@029" }; }
PC030=_ (("Dist."i / "Distortion"i) ("Gt."i / "Gt"i) / "Electric Guitar (distortion)"i) [\,\.]? _ { return { event: "inline mml", mml: "@030" }; }
PC031=_ ("Gt.Harmonix"i / "Gt.Harmonics"i / "Electric Guitar (harmonics)"i) [\,\.]? _ { return { event: "inline mml", mml: "@031" }; }

PC032=_ ("Acoustic Bass"i)                                            [\,\.]? _ { return { event: "inline mml", mml: "@032" }; }
PC033=_ ("Electric Bass (finger)"i)                                   [\,\.]? _ { return { event: "inline mml", mml: "@033" }; }
PC034=_ ("Electric Bass (picked)"i)                                   [\,\.]? _ { return { event: "inline mml", mml: "@034" }; }
PC035=_ ("Electric Bass (fretless)"i)                                 [\,\.]? _ { return { event: "inline mml", mml: "@035" }; }
PC036=_ ("Slap Bass 1"i)                                              [\,\.]? _ { return { event: "inline mml", mml: "@036" }; }
PC037=_ ("Slap Bass 2"i)                                              [\,\.]? _ { return { event: "inline mml", mml: "@037" }; }
PC038=_ ("Synth Bass 1"i)                                             [\,\.]? _ { return { event: "inline mml", mml: "@038" }; }
PC039=_ ("Synth Bass 2"i)                                             [\,\.]? _ { return { event: "inline mml", mml: "@039" }; }
PC040=_ ("Violin"i)                                                   [\,\.]? _ { return { event: "inline mml", mml: "@040" }; }
PC041=_ ("Viola"i)                                                    [\,\.]? _ { return { event: "inline mml", mml: "@041" }; }
PC042=_ ("Cello"i)                                                    [\,\.]? _ { return { event: "inline mml", mml: "@042" }; }
PC043=_ ("Contrabass"i)                                               [\,\.]? _ { return { event: "inline mml", mml: "@043" }; }
PC044=_ ("Tremolo Strings"i)                                          [\,\.]? _ { return { event: "inline mml", mml: "@044" }; }
PC045=_ ("Pizzicato Strings"i)                                        [\,\.]? _ { return { event: "inline mml", mml: "@045" }; }
PC046=_ ("Orchestral Harp"i)                                          [\,\.]? _ { return { event: "inline mml", mml: "@046" }; }
PC047=_ ("Timpani"i)                                                  [\,\.]? _ { return { event: "inline mml", mml: "@047" }; }
PC048=_ ("Strings"i _ "Ensemble"i _ "1" / "Strings"i _ "1" / "Str."i _ "1") [\,\.]? _ { return { event: "inline mml", mml: "@48" }; }
PC049=_ ("Strings"i _ "Ensemble"i _ "2" / "Strings"i _ "2" / "Str."i _ "2") [\,\.]? _ { return { event: "inline mml", mml: "@49" }; }
PC050=_ ("Synth Strings 1"i)                                                [\,\.]? _ { return { event: "inline mml", mml: "@050" }; }
PC051=_ ("Synth Strings 2"i)                                                [\,\.]? _ { return { event: "inline mml", mml: "@051" }; }
PC052=_ ("Voice Aahs"i / "Choir Aahs"i / "Choir"i / "Chor."i)               [\,\.]? _ { return { event: "inline mml", mml: "@52" }; }
PC053=_ ("Voice Oohs"i)                                                     [\,\.]? _ { return { event: "inline mml", mml: "@053" }; }
PC054=_ ("Synth Voice"i)                                                    [\,\.]? _ { return { event: "inline mml", mml: "@054" }; }
PC055=_ ("Orchestra Hit"i)                                                  [\,\.]? _ { return { event: "inline mml", mml: "@055" }; }
PC056=_ ("Trumpet"i)                                                        [\,\.]? _ { return { event: "inline mml", mml: "@056" }; }
PC057=_ ("Trombone"i)                                                       [\,\.]? _ { return { event: "inline mml", mml: "@057" }; }
PC058=_ ("Tuba"i)                                                           [\,\.]? _ { return { event: "inline mml", mml: "@058" }; }
PC059=_ ("Muted Trumpet"i)                                                  [\,\.]? _ { return { event: "inline mml", mml: "@059" }; }
PC060=_ ("French Horn"i)                                                    [\,\.]? _ { return { event: "inline mml", mml: "@060" }; }
PC061=_ ("Brass Section"i)                                                  [\,\.]? _ { return { event: "inline mml", mml: "@061" }; }
PC062=_ ("Synth Brass 1"i)                                                  [\,\.]? _ { return { event: "inline mml", mml: "@062" }; }
PC063=_ ("Synth Brass 2"i)                                                  [\,\.]? _ { return { event: "inline mml", mml: "@063" }; }
PC064=_ ("Soprano Sax"i)                                                    [\,\.]? _ { return { event: "inline mml", mml: "@064" }; }
PC065=_ ("Alto Sax"i)                                                       [\,\.]? _ { return { event: "inline mml", mml: "@065" }; }
PC066=_ ("Tenor Sax"i)                                                      [\,\.]? _ { return { event: "inline mml", mml: "@066" }; }
PC067=_ ("Baritone Sax"i)                                                   [\,\.]? _ { return { event: "inline mml", mml: "@067" }; }
PC068=_ ("Oboe"i)                                                           [\,\.]? _ { return { event: "inline mml", mml: "@068" }; }
PC069=_ ("English Horn"i)                                                   [\,\.]? _ { return { event: "inline mml", mml: "@069" }; }
PC070=_ ("Bassoon"i)                                                        [\,\.]? _ { return { event: "inline mml", mml: "@070" }; }
PC071=_ ("Clarinet"i)                                                       [\,\.]? _ { return { event: "inline mml", mml: "@071" }; }
PC072=_ ("Piccolo"i)                                                        [\,\.]? _ { return { event: "inline mml", mml: "@072" }; }
PC073=_ ("Flute"i)                                                          [\,\.]? _ { return { event: "inline mml", mml: "@073" }; }
PC074=_ ("Recorder"i)                                                       [\,\.]? _ { return { event: "inline mml", mml: "@074" }; }
PC075=_ ("Pan Flute"i)                                                      [\,\.]? _ { return { event: "inline mml", mml: "@075" }; }
PC076=_ ("Blown bottle"i)                                                   [\,\.]? _ { return { event: "inline mml", mml: "@076" }; }
PC077=_ ("Shakuhachi"i)                                                     [\,\.]? _ { return { event: "inline mml", mml: "@077" }; }
PC078=_ ("Whistle"i)                                                        [\,\.]? _ { return { event: "inline mml", mml: "@078" }; }
PC079=_ ("Ocarina"i)                                                        [\,\.]? _ { return { event: "inline mml", mml: "@079" }; }

PC080=_ ("Lead"i _ "1" / "Square"i)         [\,\.]? _ { return { event: "inline mml", mml: "@080" }; }
PC081=_ ("Lead"i _ "2" / "Sawtooth"i)       [\,\.]? _ { return { event: "inline mml", mml: "@081" }; }
PC082=_ ("Lead"i _ "3" / "Calliope"i)       [\,\.]? _ { return { event: "inline mml", mml: "@082" }; }
PC083=_ ("Lead"i _ "4" / "Chiff"i)          [\,\.]? _ { return { event: "inline mml", mml: "@083" }; }
PC084=_ ("Lead"i _ "5" / "Charang"i)        [\,\.]? _ { return { event: "inline mml", mml: "@084" }; }
PC085=_ ("Lead"i _ "6" / "Voice"i)          [\,\.]? _ { return { event: "inline mml", mml: "@085" }; }
PC086=_ ("Lead"i _ "7" / "Fifths"i)         [\,\.]? _ { return { event: "inline mml", mml: "@086" }; }
PC087=_ ("Lead"i _ "8" / "Bass and lead"i)  [\,\.]? _ { return { event: "inline mml", mml: "@087" }; }

PC088=_ ("Pad"i  _ "1" / "New age"i)        [\,\.]? _ { return { event: "inline mml", mml: "@088" }; }
PC089=_ ("Pad"i  _ "2" / "Warm"i)           [\,\.]? _ { return { event: "inline mml", mml: "@089" }; }
PC090=_ ("Pad"i  _ "3" / "Polysynth"i)      [\,\.]? _ { return { event: "inline mml", mml: "@090" }; }
PC091=_ ("Pad"i  _ "4" / "Choir"i)          [\,\.]? _ { return { event: "inline mml", mml: "@091" }; }
PC092=_ ("Pad"i  _ "5" / "Bowed glass"i)    [\,\.]? _ { return { event: "inline mml", mml: "@092" }; }
PC093=_ ("Pad"i  _ "6" / "Metallic"i)       [\,\.]? _ { return { event: "inline mml", mml: "@093" }; }
PC094=_ ("Pad"i  _ "7" / "Halo"i)           [\,\.]? _ { return { event: "inline mml", mml: "@094" }; }
PC095=_ ("Pad"i  _ "8" / "Sweep"i)          [\,\.]? _ { return { event: "inline mml", mml: "@095" }; }

PC096=_ ("FX"i   _ "1" / "Rain"i)           [\,\.]? _ { return { event: "inline mml", mml: "@096" }; }
PC097=_ ("FX"i   _ "2" / "Soundtrack"i)     [\,\.]? _ { return { event: "inline mml", mml: "@097" }; }
PC098=_ ("FX"i   _ "3" / "Crystal"i)        [\,\.]? _ { return { event: "inline mml", mml: "@098" }; }
PC099=_ ("FX"i   _ "4" / "Atmosphere"i)     [\,\.]? _ { return { event: "inline mml", mml: "@099" }; }
PC100=_ ("FX"i   _ "5" / "Brightness"i)     [\,\.]? _ { return { event: "inline mml", mml: "@100" }; }
PC101=_ ("FX"i   _ "6" / "Goblins"i)        [\,\.]? _ { return { event: "inline mml", mml: "@101" }; }
PC102=_ ("FX"i   _ "7" / "Echoes"i)         [\,\.]? _ { return { event: "inline mml", mml: "@102" }; }
PC103=_ ("FX"i   _ "8" / "Sci-fi"i)         [\,\.]? _ { return { event: "inline mml", mml: "@103" }; }

PC104=_ ("Sitar"i)                          [\,\.]? _ { return { event: "inline mml", mml: "@104" }; }
PC105=_ ("Banjo"i)                          [\,\.]? _ { return { event: "inline mml", mml: "@105" }; }
PC106=_ ("Shamisen"i)                       [\,\.]? _ { return { event: "inline mml", mml: "@106" }; }
PC107=_ ("Koto"i)                           [\,\.]? _ { return { event: "inline mml", mml: "@107" }; }
PC108=_ ("Kalimba"i)                        [\,\.]? _ { return { event: "inline mml", mml: "@108" }; }
PC109=_ ("Bag pipe"i)                       [\,\.]? _ { return { event: "inline mml", mml: "@109" }; }
PC110=_ ("Fiddle"i)                         [\,\.]? _ { return { event: "inline mml", mml: "@110" }; }
PC111=_ ("Shanai"i)                         [\,\.]? _ { return { event: "inline mml", mml: "@111" }; }
PC112=_ ("Tinkle Bell"i)                    [\,\.]? _ { return { event: "inline mml", mml: "@112" }; }
PC113=_ ("Agogo"i)                          [\,\.]? _ { return { event: "inline mml", mml: "@113" }; }
PC114=_ ("Steel Drums"i)                    [\,\.]? _ { return { event: "inline mml", mml: "@114" }; }
PC115=_ ("Woodblock"i)                      [\,\.]? _ { return { event: "inline mml", mml: "@115" }; }
PC116=_ ("Taiko"i)                          [\,\.]? _ { return { event: "inline mml", mml: "@116" }; }
PC117=_ ("Melodic Tom"i)                    [\,\.]? _ { return { event: "inline mml", mml: "@117" }; }
PC118=_ ("Synth Drum"i)                     [\,\.]? _ { return { event: "inline mml", mml: "@118" }; }
PC119=_ ("Reverse Cymbal"i)                 [\,\.]? _ { return { event: "inline mml", mml: "@119" }; }
PC120=_ ("Guitar Fret Noise"i)              [\,\.]? _ { return { event: "inline mml", mml: "@120" }; }
PC121=_ ("Breath Noise"i)                   [\,\.]? _ { return { event: "inline mml", mml: "@121" }; }
PC122=_ ("Seashore"i)                       [\,\.]? _ { return { event: "inline mml", mml: "@122" }; }
PC123=_ ("Bird Tweet"i)                     [\,\.]? _ { return { event: "inline mml", mml: "@123" }; }
PC124=_ ("Telephone Ring"i)                 [\,\.]? _ { return { event: "inline mml", mml: "@124" }; }
PC125=_ ("Helicopter"i)                     [\,\.]? _ { return { event: "inline mml", mml: "@125" }; }
PC126=_ ("Applause"i)                       [\,\.]? _ { return { event: "inline mml", mml: "@126" }; }
PC127=_ ("Gunshot"i)                        [\,\.]? _ { return { event: "inline mml", mml: "@127" }; }
