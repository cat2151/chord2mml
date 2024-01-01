import { parse } from "../src/chord2mml_chord2ast.cjs";
import { astToNotes as toNotes } from "../src/chord2mml_ast2notes";
import { notesToMml as toMml } from "../src/chord2mml_notes2mml";
import { chord2mml } from "../src/chord2mml";
describe("chord2mml_parse", () => {
    test("Cmaj", () => {
        expect(parse("C")).toEqual([{chordType: "maj", root: 0}]);
    });
    test("sharp C#maj", () => {
        // 備忘、全角#は、入力環境によって半角#が封じられて全角#を代替で使う用。
        //  もしすべての全角を認めると処理が複雑すぎると判断し、
        //  応急で全角#のみ認識とする。
        //  すべての全角を例えばpreprocessで半角化するか？は別途検討とする。
        expect(parse("C# C＃ C♯")).toEqual([{chordType: "maj", root: 1}, {chordType: "maj", root: 1}, {chordType: "maj", root: 1}]);
    });
    test("Dmaj", () => {
        expect(parse("D")).toEqual([{chordType: "maj", root: 2}]);
    });
    test("flat Bbmaj", () => {
        expect(parse("Bb B♭")).toEqual([{chordType: "maj", root: 10}, {chordType: "maj", root: 10}]);
    });
    test("Bmaj", () => {
        expect(parse("B")).toEqual([{chordType: "maj", root: 11}]);
    });
    test("space maj表記variation G", () => {
        expect(parse("Cmaj GM")).toEqual([{chordType: "maj", root: 0}, {chordType: "maj", root: 7}]);
    });
    test("maj7", () => {
        expect(parse("C#maj7")).toEqual([{chordType: "maj7", root: 1}]);
    });
    test("maj7 表記variation", () => {
        expect(parse("C#Maj7 C#△")).toEqual([{chordType: "maj7", root: 1}, {chordType: "maj7", root: 1}]);
    });
});
describe("astToNotes", () => {
    test("Cmaj", () => {
        expect(toNotes([{chordType: "maj", root: 0}])).toEqual([[0,4,7]]);
    });
    test("Dmaj", () => {
        expect(toNotes([{chordType: "maj", root: 2}])).toEqual([[2,6,9]]);
    });
    test("Cmaj7", () => {
        expect(toNotes([{chordType: "maj7", root: 0}])).toEqual([[0,4,7,11]]);
    });
    test("Gmaj", () => {
        expect(toNotes([{chordType: "maj", root: 7}])).toEqual([[7,11,14]]);
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
});
