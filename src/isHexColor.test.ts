import { describe, expect, test } from '@jest/globals';
import { isHexColor } from './isHexColor';

describe("isHexColor", () => {
    test("Should be true when hex value is 6 digits", () => {
        expect(isHexColor("FF00AA")).toBe(true);
    });

    test("Should be true when hex value is 3 digits", () => {
        expect(isHexColor("ABC")).toBe(true);
    });

    test("Should be false when given a not hex string value", () => {
        expect(isHexColor("Hello World!")).toBe(false);
    });

    test("Should be false when given a empty value", () => {
        expect(isHexColor("")).toBe(false);
    });
});
