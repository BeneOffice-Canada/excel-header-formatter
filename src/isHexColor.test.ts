import { describe, expect, test } from '@jest/globals';
import { isHexColor } from './isHexColor';

describe("isHexColor", () => {
    test("Should be true when a 6 digit hex value", () => {
        expect(isHexColor("#FF00AA")).toBe(true);
    });

    test("Should be true when a 3 digit hex value", () => {
        expect(isHexColor("#ABC")).toBe(true);
    });

    test("Should be false when hex value is 6 digits and does nto start with #", () => {
        expect(isHexColor("FF00AA")).toBe(false);
    });

    test("Should be false when hex value is 3 digits and does nto start with #", () => {
        expect(isHexColor("ABC")).toBe(false);
    });

    test("Should be false when given a not hex string value", () => {
        expect(isHexColor("Hello World!")).toBe(false);
    });
});
