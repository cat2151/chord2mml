import { parse } from "../src/chord2mml.commonjs.js";
describe("chord2mml", () => {
    test("C", () => {
        expect(parse("C")).toEqual("'ceg'");
    });
});