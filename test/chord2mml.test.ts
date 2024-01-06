import { parse } from "../src/chord2mml_chord2ast.cjs";
import { astToAst as a2a } from "../src/chord2mml_ast2ast";
import { astToNotes as toNotes } from "../src/chord2mml_ast2notes";
import { notesToMml as toMml } from "../src/chord2mml_notes2mml";
import { chord2mml } from "../src/chord2mml";
describe("chord2ast", () => {
    test("Cmaj", () => {
        expect(parse("C")).toEqual([{event: "chord", quality: "maj", root: 0, inversion: null, octaveOffset: 0}]);
    });
    test("sharp C#maj", () => {
        // 備忘、全角#は、入力環境によって半角#が封じられて全角#を代替で使う用。
        //  もしすべての全角を認めると処理が複雑すぎると判断し、
        //  応急で全角#のみ認識とする。
        //  すべての全角を例えばpreprocessで半角化するか？は別途検討とする。
        expect(parse("C# C＃ C♯")).toEqual([{event: "chord", quality: "maj", root: 1, inversion: null, octaveOffset: 0}, {event: "chord", quality: "maj", root: 1, inversion: null, octaveOffset: 0}, {event: "chord", quality: "maj", root: 1, inversion: null, octaveOffset: 0}]);
    });
    test("Dmaj", () => {
        expect(parse("D")).toEqual([{event: "chord", quality: "maj", root: 2, inversion: null, octaveOffset: 0}]);
    });
    test("flat Bbmaj", () => {
        expect(parse("Bb B♭")).toEqual([{event: "chord", quality: "maj", root: 10, inversion: null, octaveOffset: 0}, {event: "chord", quality: "maj", root: 10, inversion: null, octaveOffset: 0}]);
    });
    test("Bmaj", () => {
        expect(parse("B")).toEqual([{event: "chord", quality: "maj", root: 11, inversion: null, octaveOffset: 0}]);
    });
    test("space maj表記variation G", () => {
        expect(parse("Cmaj GM")).toEqual([{event: "chord", quality: "maj", root: 0, inversion: null, octaveOffset: 0}, {event: "chord", quality: "maj", root: 7, inversion: null, octaveOffset: 0}]);
    });
    test("maj7", () => {
        expect(parse("C#maj7")).toEqual([{event: "chord", quality: "maj7", root: 1, inversion: null, octaveOffset: 0}]);
    });
    test("maj7 表記variation", () => {
        expect(parse("C#M7 C#Maj7 C#△")).toEqual([{event: "chord", quality: "maj7", root: 1, inversion: null, octaveOffset: 0}, {event: "chord", quality: "maj7", root: 1, inversion: null, octaveOffset: 0}, {event: "chord", quality: "maj7", root: 1, inversion: null, octaveOffset: 0}]);
    });
    test("slash chord", () => {
        expect(parse("F/C")).toEqual([{event: "slash chord", upperRoot: 5, upperQuality: "maj", lowerRoot: 0, lowerQuality: "maj", upperInversion: null, lowerInversion: null, upperOctaveOffset: 0, lowerOctaveOffset: 0}]);
    });
    test("chord over bass note mode", () => {
        expect(parse("chord over bass note")).toEqual([{event: "change slash chord mode to chord over bass note"}]);
    });
    test("slash chord mode to inversion", () => {
        expect(parse("slash chord inversion")).toEqual([{event: "change slash chord mode to inversion"}]);
    });
    test("polychord mode", () => {
        expect(parse("polychord")).toEqual([{event: "change slash chord mode to polychord"}]);
    });
    test("polychord mode", () => {
        expect(parse("US")).toEqual([{event: "change slash chord mode to polychord"}]);
    });
    test("polychord mode", () => {
        expect(parse("UST")).toEqual([{event: "change slash chord mode to polychord"}]);
    });
    test("inline mml", () => {
        expect(parse("/*@48*/")).toEqual([{event: "inline mml", mml: "@48"}]);
    });
    test("1st inv", () => {
        expect(parse("1st inv")).toEqual([{event: "change inversion mode to 1st inv"}]);
    });
    test("drop2", () => {
        expect(parse("drop2")).toEqual([{event: "change open harmony mode to drop2"}]);
    });
    test("drop-2", () => {
        expect(parse("drop-2")).toEqual([{event: "change open harmony mode to drop2"}]);
    });
    test("drop4", () => {
        expect(parse("drop4")).toEqual([{event: "change open harmony mode to drop4"}]);
    });
    test("drop-4", () => {
        expect(parse("drop-4")).toEqual([{event: "change open harmony mode to drop4"}]);
    });
    test("drop2and4", () => {
        expect(parse("drop2and4")).toEqual([{event: "change open harmony mode to drop2and4"}]);
    });
    test("drop-2-and-4", () => {
        expect(parse("drop-2-and-4")).toEqual([{event: "change open harmony mode to drop2and4"}]);
    });
    test("bass is root", () => {
        expect(parse("bass is root")).toEqual([{event: "change bass play mode to root"}]);
    });
    test("bass plays root", () => {
        expect(parse("bass is root")).toEqual([{event: "change bass play mode to root"}]);
    });
    test("bass play root", () => {
        expect(parse("bass is root")).toEqual([{event: "change bass play mode to root"}]);
    });
    test("no bass", () => {
        expect(parse("no bass")).toEqual([{event: "change bass play mode to no bass"}]);
    });
    test("Dorian", () => {
        expect(parse("Dorian")).toEqual([{event: "scale", offsets: [0,2,3,5,7,9,10]}]);
    });
});
describe("ast2ast", () => {
    test("Cmaj", () => {
        expect(a2a([{event: "chord", quality: "maj", root: 0}])).toEqual([{event: "chord", quality: "maj", root: 0, noteLength: 1}]);
    });
    test("chord over bass note", () => {
        expect(a2a([{event: "slash chord", upperRoot: 5, upperQuality: "maj", lowerRoot: 0, lowerQuality: "maj"}])).toEqual([{event: "chord over bass note", upperRoot: 5, upperQuality: "maj", lowerRoot: 0, lowerQuality: "maj", noteLength: 1}]);
    });
    test("slash chord mode to inversion", () => {
        expect(a2a([{event: "change slash chord mode to inversion"}, {event: "slash chord", upperRoot: 0, upperQuality: "maj", lowerRoot: 7, lowerQuality: "maj"}])).toEqual([{event: "change slash chord mode to inversion"}, {event: "inversion", upperRoot: 0, upperQuality: "maj", lowerRoot: 7, lowerQuality: "maj", noteLength: 1}]);
    });
    test("polychord", () => {
        expect(a2a([{event: "change slash chord mode to polychord"}, {event: "slash chord", upperRoot: 0, upperQuality: "maj", lowerRoot: 7, lowerQuality: "maj"}])).toEqual([{event: "change slash chord mode to polychord"}, {event: "polychord", upperRoot: 0, upperQuality: "maj", lowerRoot: 7, lowerQuality: "maj", noteLength: 1}]);
    });
});
describe("astToNotes", () => {
    test("Cmaj", () => {
        expect(toNotes([{event: "chord", quality: "maj", root: 0, octaveOffset: 0}])).toEqual([{notes: [0,4,7]}]);
    });
    test("Dmaj", () => {
        expect(toNotes([{event: "chord", quality: "maj", root: 2, octaveOffset: 0}])).toEqual([{notes: [2,6,9]}]);
    });
    test("Cmaj7", () => {
        expect(toNotes([{event: "chord", quality: "maj7", root: 0, octaveOffset: 0}])).toEqual([{notes: [0,4,7,11]}]);
    });
    test("Gmaj", () => {
        expect(toNotes([{event: "chord", quality: "maj", root: 7, octaveOffset: 0}])).toEqual([{notes: [7,11,14]}]);
    });
    test("chord over bass note F/C", () => {
        expect(toNotes([{event: "chord over bass note", upperRoot: 5, upperQuality: "maj", lowerRoot: 0, lowerQuality: "maj", upperOctaveOffset: 0, lowerOctaveOffset: 0}])).toEqual([{notes: [-12+0,-12+5,-12+9,-12+12]}]);
    });
    test("inversion C/G", () => {
        expect(toNotes([{event: "inversion", upperRoot: 0, upperQuality: "maj", lowerRoot: 7, lowerQuality: "maj", upperOctaveOffset: 0, lowerOctaveOffset: 0}])).toEqual([{notes: [7,12,16]}]);
    });
    test("polychord D/C", () => {
        expect(toNotes([{event: "polychord", upperRoot: 2, upperQuality: "maj", lowerRoot: 0, lowerQuality: "maj", upperOctaveOffset: 0, lowerOctaveOffset: 0}])).toEqual([{notes: [0-12,4-12,7-12,14-12,18-12,21-12]}]);
    });
});
describe("notesToMml", () => {
    test("Cmaj", () => {
        expect(toMml([{notes: [0,4,7]}])).toEqual("'ceg'");
    });
    test("Dmaj", () => {
        expect(toMml([{notes: [2,6,9]}])).toEqual("'df+a'");
    });
    test("Gmaj", () => {
        expect(toMml([{notes: [7,11,14]}])).toEqual("'gb<d'");
    });
    test("Bmaj7", () => {
        expect(toMml([{notes: [11,11 + 4,11+7,11+11]}])).toEqual("'b<d+f+a+'");
    });
});
// parseがぶら下がっているのは、取り急ぎeasychord2mmlでそのまま動く用
describe("chord2mml", () => {
    test("Cmaj", () => {
        expect(chord2mml.parse("C")).toEqual("'c1eg'");
    });
    test("Bmaj7", () => {
        expect(chord2mml.parse("Bmaj7")).toEqual("'b1<d+f+a+'");
    });
    test("upper structure", () => {
        expect(chord2mml.parse("US C/G")).toEqual("'>g1b<d<ceg'");
    });
    test("upper structure triad", () => {
        expect(chord2mml.parse("upper structure triad C/G")).toEqual("'>g1b<d<ceg'");
    });
    test("polychord", () => {
        expect(chord2mml.parse("polychord C/G")).toEqual("'>g1b<d<ceg'");
    });
    test("polychord", () => {
        expect(chord2mml.parse("poly C/G")).toEqual("'>g1b<d<ceg'");
    });
    test("オンコード", () => {
        expect(chord2mml.parse("EonC")).toEqual("'>c1eg+b'");
    });
    test("inline mml", () => {
        expect(chord2mml.parse("/*@48*/")).toEqual("@48");
    });
    test("第1転回形", () => {
        expect(chord2mml.parse("1st inv C")).toEqual("'e1g<c'");
    });
    test("第2転回形", () => {
        expect(chord2mml.parse("2nd inv C")).toEqual("'g1<ce'");
    });
    test("第3転回形 & 基本形", () => {
        expect(chord2mml.parse("3rd inv Cmaj7 root inv Cmaj7")).toEqual("'b1<ceg''c1egb'");
    });
    test("drop2", () => {
        expect(chord2mml.parse("drop2 C")).toEqual("'>e1<cg'");
    });
    test("open triad", () => {
        expect(chord2mml.parse("open triad C")).toEqual("'>e1<cg'");
    });
    test("2nd inv drop2", () => {
        expect(chord2mml.parse("2nd inv drop2 Cmaj7")).toEqual("'c1gb<e'");
    });
    test("1st inv drop2", () => {
        expect(chord2mml.parse("1st inv drop2 C")).toEqual("'>g1<e<c'");
    });
    test("drop4", () => {
        expect(chord2mml.parse("drop4 Cmaj7")).toEqual("'>c1<egb'");
    });
    test("drop2and4", () => {
        expect(chord2mml.parse("drop2and4 Cmaj7")).toEqual("'>c1g<eb'");
    });
    test("drop4 のち close", () => {
        expect(chord2mml.parse("drop4 Cmaj7 close Cmaj7")).toEqual("'>c1<egb''c1egb'");
    });
    test("min", () => {
        expect(chord2mml.parse("Cm")).toEqual("'c1d+g'");
    });
    test("min", () => {
        expect(chord2mml.parse("Cmin")).toEqual("'c1d+g'");
    });
    test("min", () => {
        expect(chord2mml.parse("C- - C-")).toEqual("'c1d+g''c1d+g'");
    });
    test("min7", () => {
        expect(chord2mml.parse("Cm7")).toEqual("'c1d+ga+'");
    });
    test("min7", () => {
        expect(chord2mml.parse("Cmin7")).toEqual("'c1d+ga+'");
    });
    test("min7", () => {
        expect(chord2mml.parse("C-7 - C-7")).toEqual("'c1d+ga+''c1d+ga+'");
    });
    test("hyphen", () => {
        expect(chord2mml.parse("C - C/C - ConC - CoverC - C")).toEqual("'c1eg''>c1<ceg''>c1<ceg''>c1<ceg''c1eg'");
    });
    test("hyphen", () => {
        expect(chord2mml.parse("C→C → C")).toEqual("'c1eg''c1eg''c1eg'");
    });
    test("inversionを、chord over bass note にも適用する", () => {
        expect(chord2mml.parse("1st inv C/C")).toEqual("'>c1<eg<c'");
    });
    test("drop2等を、chord over bass note にも適用する", () => {
        expect(chord2mml.parse("drop2 C/C")).toEqual("'>c1e<cg'");
    });
    test("inversion and drop2を、chord over bass note にも適用する", () => {
        expect(chord2mml.parse("1st inv drop2 C/C")).toEqual("'>c1g<e<c'");
    });
    test("bass is root", () => {
        expect(chord2mml.parse("bass is root C")).toEqual("'>c1<ceg'");
    });
    test("bass is root", () => {
        expect(chord2mml.parse("bass is root C no bass C")).toEqual("'>c1<ceg''c1eg'");
    });
    test("bass is root, slash chord inversion において、inversionされつつbassも鳴る", () => {
        expect(chord2mml.parse("bass is root, slash chord inversion C/E")).toEqual("'>c1<eg<c'");
    });
    test("bar", () => {
        expect(chord2mml.parse("C | C")).toEqual("'c1eg'/*|*/'c1eg'");
    });
    test("tempo BPM", () => {
        expect(chord2mml.parse("BPM 120")).toEqual("t120");
    });
    test("tempo BPM", () => {
        expect(chord2mml.parse("BPM120 BPM120, TEMPO 120 TEMPO120 Tempo120 Bpm120")).toEqual("t120t120t120t120t120t120");
    });
    test("小節線をchord MMLごとのnote lengthに反映する", () => {
        expect(chord2mml.parse("| C |")).toEqual("/*|*/'c1eg'/*|*/");
    });
    test("小節線をchord MMLごとのnote lengthに反映する", () => {
        expect(chord2mml.parse("| C | C |")).toEqual("/*|*/'c1eg'/*|*/'c1eg'/*|*/");
    });
    test("小節線をchord MMLごとのnote lengthに反映する", () => {
        expect(chord2mml.parse("C | C")).toEqual("'c1eg'/*|*/'c1eg'");
    });
    test("小節線をchord MMLごとのnote lengthに反映する", () => {
        expect(chord2mml.parse("C | C C | C C C C")).toEqual("'c1eg'/*|*/'c2eg''c2eg'/*|*/'c4eg''c4eg''c4eg''c4eg'");
    });
    test("bar slash", () => {
        expect(chord2mml.parse("C / C C")).toEqual("'c2eg''c4eg''c4eg'");
    });
    test("bar slash", () => {
        expect(chord2mml.parse("C | C / C C")).toEqual("'c1eg'/*|*/'c2eg''c4eg''c4eg'");
    });
    test("inversion error", () => {
        expect(() => {
            chord2mml.parse("slash chord inversion C/D")
        }).toThrow();
    });
    test("MIDI Program Change", () => {
        expect(chord2mml.parse("Strings Ensemble 2")).toEqual("@49");
    });
    test("MIDI Program Change", () => {
        expect(chord2mml.parse("Strings2 Str.2 Choir")).toEqual("@49@49@52");
    });
    test("last space", () => {
        expect(chord2mml.parse("C ")).toEqual("'c1eg'");
    });
    test("inversion by caret", () => {
        expect(chord2mml.parse("C^1/A")).toEqual("'>a1<eg<c'");
    });
    test("inversion by caret", () => {
        expect(chord2mml.parse("C^2/A")).toEqual("'>a1<g<ce'");
    });
    test("inversion by caret", () => {
        expect(chord2mml.parse("CM7^3")).toEqual("'b1<ceg'");
    });
    test("inversion by caret", () => {
        expect(chord2mml.parse("1st inv CM7 CM7^0")).toEqual("'e1gb<c''c1egb'");
    });
    test("inversion by caret", () => {
        expect(chord2mml.parse("US C^2/C^1")).toEqual("'>e1g<cg<ce'");
    });
    test("inversion by caret", () => {
        expect(chord2mml.parse("bass is root C^1")).toEqual("'>c1<eg<c'");
    });
    test("degree", () => {
        expect(chord2mml.parse("I")).toEqual("'c1eg'");
    });
    test("degree", () => {
        expect(chord2mml.parse("key=D I")).toEqual("'d1f+a'");
    });
    test("degree", () => {
        expect(chord2mml.parse("Phrygian II")).toEqual("'d-1fa-'");
    });
    test("degree", () => {
        expect(chord2mml.parse("Aeolian IIm")).toEqual("'d1fa'");
    });
    test("octave up", () => {
        expect(chord2mml.parse("C octave up C")).toEqual("'c1eg''<c1eg'");
    });
    test("octave up chord over bass note", () => {
        expect(chord2mml.parse("octave-up C/C")).toEqual("'c1<ceg'");
    });
    test("octave up chord over bass note", () => {
        expect(chord2mml.parse("C/C octave-up C/C")).toEqual("'>c1<ceg''c1<ceg'");
    });
    test("octave up chord over bass note", () => {
        expect(chord2mml.parse("C/C /octave-up C/C")).toEqual("'>c1<ceg''c1ceg'");
    });
    test("octave up chord over bass note", () => {
        expect(chord2mml.parse("octave-up/ C/C")).toEqual("'>c1<<ceg'");
    });
    test("octave up chord over bass note", () => {
        expect(chord2mml.parse("C/C octave-up/ C/C")).toEqual("'>c1<ceg''>c1<<ceg'");
    });
    test("octave down", () => {
        expect(chord2mml.parse("C octave-down C")).toEqual("'c1eg''>c1eg'");
    });
    test("octave down chord over bass note", () => {
        expect(chord2mml.parse("C/C octave-down C/C")).toEqual("'>c1<ceg''>>c1<ceg'");
    });
    test("octave down chord over bass note", () => {
        expect(chord2mml.parse("octave-down/ C/C")).toEqual("'>c1ceg'");
    });
    test("octave down chord over bass note", () => {
        expect(chord2mml.parse("/octave-down C/C")).toEqual("'>>c1<<ceg'");
    });
    test("octave down", () => {
        expect(chord2mml.parse("C octave-down octave-down C")).toEqual("'c1eg''>>c1eg'");
    });
    test("key to flat", () => {
        expect(chord2mml.parse("key=F IV")).toEqual("'b-1<df'");
    });
    test("key and scale to flat", () => {
        expect(chord2mml.parse("Aeolian VI VII")).toEqual("'a-1<ce-''b-1<df'");
    });
    test("I VIm^2 を単純に書くとoctave以上跳躍", () => {
        expect(chord2mml.parse("I VIm^2")).toEqual("'c1eg''<e1a<c'");
    });
    test("I VIm^2 octave offset", () => {
        expect(chord2mml.parse("I VIm^2, VIm^2'")).toEqual("'c1eg''e1a<c''<<e1a<c'");
    });
    test("octave offset", () => {
        expect(chord2mml.parse("bass is root I,")).toEqual("'>>c1<ceg'");
    });
    test("octave offset", () => {
        expect(chord2mml.parse("US I'/I,")).toEqual("'>>c1eg<<ceg'");
    });
    test("octave offset", () => {
        expect(chord2mml.parse("slash chord inversion C/G C,/G")).toEqual("'g1<ce''>g1<ce'");
    });
    test("octave offset", () => {
        // slash chordのlowerのrootとqualityを省略した場合はupperを継承する
        // （bass is root時にoctave offsetをupperとlower個別に指定できる用）
        expect(chord2mml.parse("bass is root VIm^2 VIm^2, VIm^2,/")).toEqual("'>a1<<ea<c''>>a1<<ea<c''>a1<ea<c'");
    });
    test("octave offset", () => {
        expect(chord2mml.parse("C,, C''")).toEqual("'>>c1eg''<<c1eg'");
    });
    test("omit5 etc.", () => {
        expect(chord2mml.parse("C(omit5) C(omit1) C(omit3) Comit5 Cadd2 Cadd9 Cadd4 Cadd11 Cadd6 Cadd13")).toEqual("'c1e''e1g''c1g''c1e''c1deg''c1deg''c1efg''c1efg''c1ega''c1ega'");
    });
});
