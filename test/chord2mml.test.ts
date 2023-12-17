import { parse } from "../src/chord2mml.commonjs.js";
describe("chord2mml", () => {
    test("C", () => {
        expect(parse("C")).toEqual("'ceg'");
    });
    test("D", () => {
        expect(parse("D")).toEqual("'df+a'");
    });
    test("E", () => {
        expect(parse("E")).toEqual("'eg+b'");
    });
});