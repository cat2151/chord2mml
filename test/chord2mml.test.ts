import { parse } from "../src/chord2mml_chord2ast.cjs";
import { astToAst as a2a } from "../src/chord2mml_ast2ast";
import { astToNotes as toNotes } from "../src/chord2mml_ast2notes";
import { notesToMml as toMml } from "../src/chord2mml_notes2mml";
import { chord2mml } from "../src/chord2mml";
describe("chord2ast", () => {
    test("Cmaj", () => {
        expect(parse("C")).toEqual([{event: "chord", quality: "maj", root: 0, inversion: null}]);
    });
    test("sharp C#maj", () => {
        // 備忘、全角#は、入力環境によって半角#が封じられて全角#を代替で使う用。
        //  もしすべての全角を認めると処理が複雑すぎると判断し、
        //  応急で全角#のみ認識とする。
        //  すべての全角を例えばpreprocessで半角化するか？は別途検討とする。
        expect(parse("C# C＃ C♯")).toEqual([{event: "chord", quality: "maj", root: 1, inversion: null}, {event: "chord", quality: "maj", root: 1, inversion: null}, {event: "chord", quality: "maj", root: 1, inversion: null}]);
    });
    test("Dmaj", () => {
        expect(parse("D")).toEqual([{event: "chord", quality: "maj", root: 2, inversion: null}]);
    });
    test("flat Bbmaj", () => {
        expect(parse("Bb B♭")).toEqual([{event: "chord", quality: "maj", root: 10, inversion: null}, {event: "chord", quality: "maj", root: 10, inversion: null}]);
    });
    test("Bmaj", () => {
        expect(parse("B")).toEqual([{event: "chord", quality: "maj", root: 11, inversion: null}]);
    });
    test("space maj表記variation G", () => {
        expect(parse("Cmaj GM")).toEqual([{event: "chord", quality: "maj", root: 0, inversion: null}, {event: "chord", quality: "maj", root: 7, inversion: null}]);
    });
    test("maj7", () => {
        expect(parse("C#maj7")).toEqual([{event: "chord", quality: "maj7", root: 1, inversion: null}]);
    });
    test("maj7 表記variation", () => {
        expect(parse("C#M7 C#Maj7 C#△")).toEqual([{event: "chord", quality: "maj7", root: 1, inversion: null}, {event: "chord", quality: "maj7", root: 1, inversion: null}, {event: "chord", quality: "maj7", root: 1, inversion: null}]);
    });
    test("slash chord", () => {
        expect(parse("F/C")).toEqual([{event: "slash chord", upperRoot: 5, upperQuality: "maj", lowerRoot: 0, lowerQuality: "maj", upperInversion: null, lowerInversion: null}]);
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
});
describe("ast2ast", () => {
    test("Cmaj", () => {
        expect(a2a([{event: "chord", quality: "maj", root: 0}])).toEqual([{event: "chord", quality: "maj", root: 0}]);
    });
    test("chord over bass note", () => {
        expect(a2a([{event: "slash chord", upperRoot: 5, upperQuality: "maj", lowerRoot: 0, lowerQuality: "maj"}])).toEqual([{event: "chord over bass note", upperRoot: 5, upperQuality: "maj", lowerRoot: 0, lowerQuality: "maj"}]);
    });
    test("slash chord mode to inversion", () => {
        expect(a2a([{event: "change slash chord mode to inversion"}, {event: "slash chord", upperRoot: 0, upperQuality: "maj", lowerRoot: 7, lowerQuality: "maj"}])).toEqual([{event: "change slash chord mode to inversion"}, {event: "inversion", upperRoot: 0, upperQuality: "maj", lowerRoot: 7, lowerQuality: "maj"}]);
    });
    test("polychord", () => {
        expect(a2a([{event: "change slash chord mode to polychord"}, {event: "slash chord", upperRoot: 0, upperQuality: "maj", lowerRoot: 7, lowerQuality: "maj"}])).toEqual([{event: "change slash chord mode to polychord"}, {event: "polychord", upperRoot: 0, upperQuality: "maj", lowerRoot: 7, lowerQuality: "maj"}]);
    });
});
describe("astToNotes", () => {
    test("Cmaj", () => {
        expect(toNotes([{event: "chord", quality: "maj", root: 0}])).toEqual([{notes: [0,4,7]}]);
    });
    test("Dmaj", () => {
        expect(toNotes([{event: "chord", quality: "maj", root: 2}])).toEqual([{notes: [2,6,9]}]);
    });
    test("Cmaj7", () => {
        expect(toNotes([{event: "chord", quality: "maj7", root: 0}])).toEqual([{notes: [0,4,7,11]}]);
    });
    test("Gmaj", () => {
        expect(toNotes([{event: "chord", quality: "maj", root: 7}])).toEqual([{notes: [7,11,14]}]);
    });
    test("chord over bass note F/C", () => {
        expect(toNotes([{event: "chord over bass note", upperRoot: 5, upperQuality: "maj", lowerRoot: 0, lowerQuality: "maj"}])).toEqual([{notes: [-12+0,-12+5,-12+9,-12+12]}]);
    });
    test("inversion C/G", () => {
        expect(toNotes([{event: "inversion", upperRoot: 0, upperQuality: "maj", lowerRoot: 7, lowerQuality: "maj"}])).toEqual([{notes: [7,12,16]}]);
    });
    test("polychord D/C", () => {
        expect(toNotes([{event: "polychord", upperRoot: 2, upperQuality: "maj", lowerRoot: 0, lowerQuality: "maj"}])).toEqual([{notes: [0,4,7,14,18,21]}]);
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
        expect(chord2mml.parse("C")).toEqual("'ceg'");
    });
    test("Bmaj7", () => {
        expect(chord2mml.parse("Bmaj7")).toEqual("'b<d+f+a+'");
    });
    test("upper structure", () => {
        expect(chord2mml.parse("US C/G")).toEqual("'gb<d<ceg'");
    });
    test("upper structure triad", () => {
        expect(chord2mml.parse("upper structure triad C/G")).toEqual("'gb<d<ceg'");
    });
    test("polychord", () => {
        expect(chord2mml.parse("polychord C/G")).toEqual("'gb<d<ceg'");
    });
    test("polychord", () => {
        expect(chord2mml.parse("poly C/G")).toEqual("'gb<d<ceg'");
    });
    test("オンコード", () => {
        expect(chord2mml.parse("EonC")).toEqual("'>ceg+b'");
    });
    test("inline mml", () => {
        expect(chord2mml.parse("/*@48*/")).toEqual("@48");
    });
    test("第1転回形", () => {
        expect(chord2mml.parse("1st inv C")).toEqual("'eg<c'");
    });
    test("第2転回形", () => {
        expect(chord2mml.parse("2nd inv C")).toEqual("'g<ce'");
    });
    test("第3転回形 & 基本形", () => {
        expect(chord2mml.parse("3rd inv Cmaj7 root inv Cmaj7")).toEqual("'b<ceg''cegb'");
    });
    test("drop2", () => {
        expect(chord2mml.parse("drop2 C")).toEqual("'>e<cg'");
    });
    test("open triad", () => {
        expect(chord2mml.parse("open triad C")).toEqual("'>e<cg'");
    });
    test("2nd inv drop2", () => {
        expect(chord2mml.parse("2nd inv drop2 Cmaj7")).toEqual("'cgb<e'");
    });
    test("1st inv drop2", () => {
        expect(chord2mml.parse("1st inv drop2 C")).toEqual("'>g<e<c'");
    });
    test("drop4", () => {
        expect(chord2mml.parse("drop4 Cmaj7")).toEqual("'>c<egb'");
    });
    test("drop2and4", () => {
        expect(chord2mml.parse("drop2and4 Cmaj7")).toEqual("'>cg<eb'");
    });
    test("drop4 のち close", () => {
        expect(chord2mml.parse("drop4 Cmaj7 close Cmaj7")).toEqual("'>c<egb''cegb'");
    });
    test("min", () => {
        expect(chord2mml.parse("Cm")).toEqual("'cd+g'");
    });
    test("min", () => {
        expect(chord2mml.parse("Cmin")).toEqual("'cd+g'");
    });
    test("min", () => {
        expect(chord2mml.parse("C- - C-")).toEqual("'cd+g''cd+g'");
    });
    test("min7", () => {
        expect(chord2mml.parse("Cm7")).toEqual("'cd+ga+'");
    });
    test("min7", () => {
        expect(chord2mml.parse("Cmin7")).toEqual("'cd+ga+'");
    });
    test("min7", () => {
        expect(chord2mml.parse("C-7 - C-7")).toEqual("'cd+ga+''cd+ga+'");
    });
    test("hyphen", () => {
        expect(chord2mml.parse("C - C/C - ConC - C")).toEqual("'ceg''>c<ceg''>c<ceg''ceg'");
    });
    test("hyphen", () => {
        expect(chord2mml.parse("C→C → C")).toEqual("'ceg''ceg''ceg'");
    });
    test("inversionを、chord over bass note にも適用する", () => {
        expect(chord2mml.parse("1st inv C/C")).toEqual("'>c<eg<c'");
    });
    test("drop2等を、chord over bass note にも適用する", () => {
        expect(chord2mml.parse("drop2 C/C")).toEqual("'>ce<cg'");
    });
    test("inversion and drop2を、chord over bass note にも適用する", () => {
        expect(chord2mml.parse("1st inv drop2 C/C")).toEqual("'>cg<e<c'");
    });
    test("bass is root", () => {
        expect(chord2mml.parse("bass is root C")).toEqual("'>c<ceg'");
    });
    test("bass is root", () => {
        expect(chord2mml.parse("bass is root C no bass C")).toEqual("'>c<ceg''ceg'");
    });
    test("bass is root, slash chord inversion において、inversionされつつbassも鳴る", () => {
        expect(chord2mml.parse("bass is root, slash chord inversion C/E")).toEqual("'>c<eg<c'");
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
        expect(chord2mml.parse("C ")).toEqual("'ceg'");
    });
    test("inversion by caret", () => {
        expect(chord2mml.parse("C^1/A")).toEqual("'>a<eg<c'");
    });
    test("inversion by caret", () => {
        expect(chord2mml.parse("C^2/A")).toEqual("'>a<g<ce'");
    });
    test("inversion by caret", () => {
        expect(chord2mml.parse("CM7^3")).toEqual("'b<ceg'");
    });
    test("inversion by caret", () => {
        expect(chord2mml.parse("1st inv CM7 CM7^0")).toEqual("'egb<c''cegb'");
    });
    test("inversion by caret", () => {
        expect(chord2mml.parse("US C^2/C^1")).toEqual("'eg<cg<ce'");
    });
    test("inversion by caret", () => {
        expect(chord2mml.parse("bass is root C^1")).toEqual("'>c<eg<c'");
    });
});
