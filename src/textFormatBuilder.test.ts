import { describe, expect, test } from '@jest/globals';
import { TextFormatBuilder } from "./textFormatBuilder";
import { TextFormatBuilderError } from './TextFormatBuilderError';

describe("TextFormatBuilder", () => {
    test("Should return turn text passed in", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.text("Hello World").value;
        expect(actual).toBe("Hello World");
    });

    test("Should format string to bold", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.bold().value;
        expect(actual).toBe("&B");
    });

    test("Should format string to underline", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.underline().value;
        expect(actual).toBe("&U");
    });

    test("Should format string to doubleUnderline", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.doubleUnderline().value;
        expect(actual).toBe("&E");
    });

    test("Should format string to italic", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.italic().value;
        expect(actual).toBe("&I");
    });

    test("Should format string to strikethrough", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.strikethrough().value;
        expect(actual).toBe("&S");
    });

    test("Should format string to superscript", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.superscript().value;
        expect(actual).toBe("&X");
    });

    test("Should format string to subscript", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.subscript().value;
        expect(actual).toBe("&Y");
    });

    test("Should format string to left align", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.leftAlign().value;
        expect(actual).toBe("&L");
    });

    test("Should format string to center align", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.centerAlign().value;
        expect(actual).toBe("&C");
    });

    test("Should format string to right align", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.rightAlign().value;
        expect(actual).toBe("&R");
    });

    test("Should set the font", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.font("Calibri (Body)").value;
        expect(actual).toBe("&\"Calibri (Body)\"");
    });

    test("Should set the font size", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.fontSize(12).value;
        expect(actual).toBe("&12");
    });

    test("Should throw error when fontSize is negative number", () => {
        const builder = new TextFormatBuilder();
        expect(() => {
            builder.fontSize(-1);
        }).toThrow(new TextFormatBuilderError("Fontsize must be a positive number"));
    });

    test("Should throw error when fontSize is greater or equal to 100", () => {
        const builder = new TextFormatBuilder();
        expect(() => {
            builder.fontSize(100);
        }).toThrow(new TextFormatBuilderError("Fontsize must be less than 100"));
    });

    test("Should set the font color", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.fontColor("FF00FF").value;
        expect(actual).toBe("&KFF00FF");
    });

    test("Should throw error when color is not a hex value", () => {
        const builder = new TextFormatBuilder();
        expect(() => {
            builder.fontColor("red");
        }).toThrow(new TextFormatBuilderError("hexColor must be a hex value"));
    });

    test("Should insert current date token", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.insertCurrentDate().value;
        expect(actual).toBe("&D");
    });

    test("Should insert current time token", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.insertCurrentTime().value;
        expect(actual).toBe("&T");
    });

    test("Should insert name of document token", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.insertNameOfDocument().value;
        expect(actual).toBe("&F");
    });

    test("Should insert name of workbook tab token", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.insertNameOfWorkbookTab().value;
        expect(actual).toBe("&A");
    });

    test("Should insert page number token", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.insertPageNumber().value;
        expect(actual).toBe("&P");
    });

    test("Should insert current date token", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.insertPageNumberPlusSpecifiedNumber(5).value;
        expect(actual).toBe("&P+5");
    });

    test("Should insert current date token", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.insertPageNumberMinusSpecifiedNumber(5).value;
        expect(actual).toBe("&P-5");
    });

    test("Should insert total number of pages token", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.insertTotalNumberOfPages().value;
        expect(actual).toBe("&N");
    });

    test("Should insert file path token", () => {
        const builder = new TextFormatBuilder();
        const actual = builder.insertFilePath().value;
        expect(actual).toBe("&Z");
    });

    test("Should be able to change multiple formats", () => {
        const builder = new TextFormatBuilder();
        const actual = builder
            .bold()
            .underline()
            .text("Hello")
            .underline()
            .bold()
            .doubleUnderline()
            .text("World!")
            .value;
        expect(actual).toBe("&B&UHello&U&B&EWorld!");
    });
});
