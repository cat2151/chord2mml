import { parse } from "../src/chord2mml_chord2ast.cjs";
import { astToAst as a2a } from "../src/chord2mml_ast2ast";
import { astToNotes as toNotes } from "../src/chord2mml_ast2notes";
import { notesToMml as toMml } from "../src/chord2mml_notes2mml";
import { chord2mml } from "../src/chord2mml";
describe("chord2ast", () => {
    test("Cmaj", () => {
        expect(parse("C")).toEqual([{event: "chord", quality: "maj", root: 0}]);
    });
    test("sharp C#maj", () => {
        // 備忘、全角#は、入力環境によって半角#が封じられて全角#を代替で使う用。
        //  もしすべての全角を認めると処理が複雑すぎると判断し、
        //  応急で全角#のみ認識とする。
        //  すべての全角を例えばpreprocessで半角化するか？は別途検討とする。
        expect(parse("C# C＃ C♯")).toEqual([{event: "chord", quality: "maj", root: 1}, {event: "chord", quality: "maj", root: 1}, {event: "chord", quality: "maj", root: 1}]);
    });
    test("Dmaj", () => {
        expect(parse("D")).toEqual([{event: "chord", quality: "maj", root: 2}]);
    });
    test("flat Bbmaj", () => {
        expect(parse("Bb B♭")).toEqual([{event: "chord", quality: "maj", root: 10}, {event: "chord", quality: "maj", root: 10}]);
    });
    test("Bmaj", () => {
        expect(parse("B")).toEqual([{event: "chord", quality: "maj", root: 11}]);
    });
    test("space maj表記variation G", () => {
        expect(parse("Cmaj GM")).toEqual([{event: "chord", quality: "maj", root: 0}, {event: "chord", quality: "maj", root: 7}]);
    });
    test("maj7", () => {
        expect(parse("C#maj7")).toEqual([{event: "chord", quality: "maj7", root: 1}]);
    });
    test("maj7 表記variation", () => {
        expect(parse("C#Maj7 C#△")).toEqual([{event: "chord", quality: "maj7", root: 1}, {event: "chord", quality: "maj7", root: 1}]);
    });
    test("slash chord", () => {
        expect(parse("F/C")).toEqual([{event: "slash chord", upperRoot: 5, upperQuality: "maj", lowerRoot: 0, lowerQuality: "maj"}]);
    });
    test("chord over bass note mode", () => {
        expect(parse("chord over bass note")).toEqual([{event: "change slash chord mode to chord over bass note"}]);
    });
    test("inversion mode", () => {
        expect(parse("inversion")).toEqual([{event: "change slash chord mode to inversion"}]);
    });
    test("inversion mode", () => {
        expect(parse("inv")).toEqual([{event: "change slash chord mode to inversion"}]);
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
});
describe("ast2ast", () => {
    test("Cmaj", () => {
        expect(a2a([{event: "chord", quality: "maj", root: 0}])).toEqual([{event: "chord", quality: "maj", root: 0}]);
    });
    test("chord over bass note", () => {
        expect(a2a([{event: "slash chord", upperRoot: 5, upperQuality: "maj", lowerRoot: 0, lowerQuality: "maj"}])).toEqual([{event: "chord over bass note", upperRoot: 5, upperQuality: "maj", lowerRoot: 0, lowerQuality: "maj"}]);
    });
    test("inversion", () => {
        expect(a2a([{event: "change slash chord mode to inversion"}, {event: "slash chord", upperRoot: 0, upperQuality: "maj", lowerRoot: 7, lowerQuality: "maj"}])).toEqual([{event: "change slash chord mode to inversion"}, {event: "inversion", upperRoot: 0, upperQuality: "maj", lowerRoot: 7, lowerQuality: "maj"}]);
    });
    test("polychord", () => {
        expect(a2a([{event: "change slash chord mode to polychord"}, {event: "slash chord", upperRoot: 0, upperQuality: "maj", lowerRoot: 7, lowerQuality: "maj"}])).toEqual([{event: "change slash chord mode to polychord"}, {event: "polychord", upperRoot: 0, upperQuality: "maj", lowerRoot: 7, lowerQuality: "maj"}]);
    });
});
describe("astToNotes", () => {
    test("Cmaj", () => {
        expect(toNotes([{event: "chord", quality: "maj", root: 0}])).toEqual([[0,4,7]]);
    });
    test("Dmaj", () => {
        expect(toNotes([{event: "chord", quality: "maj", root: 2}])).toEqual([[2,6,9]]);
    });
    test("Cmaj7", () => {
        expect(toNotes([{event: "chord", quality: "maj7", root: 0}])).toEqual([[0,4,7,11]]);
    });
    test("Gmaj", () => {
        expect(toNotes([{event: "chord", quality: "maj", root: 7}])).toEqual([[7,11,14]]);
    });
    test("chord over bass note F/C", () => {
        expect(toNotes([{event: "chord over bass note", upperRoot: 5, upperQuality: "maj", lowerRoot: 0, lowerQuality: "maj"}])).toEqual([[0,5,9,12]]);
    });
    test("inversion C/G", () => {
        expect(toNotes([{event: "inversion", upperRoot: 0, upperQuality: "maj", lowerRoot: 7, lowerQuality: "maj"}])).toEqual([[7,12,16]]);
    });
    test("polychord D/C", () => {
        expect(toNotes([{event: "polychord", upperRoot: 2, upperQuality: "maj", lowerRoot: 0, lowerQuality: "maj"}])).toEqual([[0,4,7,14,18,21]]);
    });
});
describe("notesToMml", () => {
    test("Cmaj", () => {
        expect(toMml([[0,4,7]])).toEqual("'ceg'");
    });
    test("Dmaj", () => {
        expect(toMml([[2,6,9]])).toEqual("'df+a'");
    });
    test("Gmaj", () => {
        expect(toMml([[7,11,14]])).toEqual("'gb<d'");
    });
    test("Bmaj7", () => {
        expect(toMml([[11,11 + 4,11+7,11+11]])).toEqual("'b<d+f+a+'");
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
        expect(chord2mml.parse("EonC")).toEqual("'ceg+b'");
    });
    test("inline mml", () => {
        expect(chord2mml.parse("/*@48*/")).toEqual("@48");
    });
});
