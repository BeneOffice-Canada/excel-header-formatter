import { isHexColor } from "./isHexColor";
import { TextFormatBuilderError } from "./TextFormatBuilderError";

export class TextFormatBuilder {
    #format = "";

    /**
     * Left aligns the characters that follow.
     */
    leftAlign(): this {
        this.#format += `&L`;
        return this;
    }

    /**
     * Centers the characters that follow.
     */
    centerAlign(): this {
        this.#format += `&C`;
        return this;
    }

    /**
     * Right aligns the characters that follow.
     */
    rightAlign(): this {
        this.#format += `&R`;
        return this;
    }

    /**
     * Turns bold printing on or off.
     */
    bold(): this {
        this.#format += `&B`;
        return this;
    }

    /**
     * Turns italic printing on or off.
     */
    italic(): this {
        this.#format += `&I`;
        return this;
    }

    /**
     * Turns underline printing on or off.
     */
    underline(): this {
        this.#format += `&U`;
        return this;
    }

    /**
     * Turns double-underline printing on or off.
     */
    doubleUnderline(): this {
        this.#format += `&E`;
        return this;
    }

    /**
     * Turns strikethrough printing on or off.
     */
    strikethrough(): this {
        this.#format += `&S`;
        return this;
    }

    /**
     * Turns superscript printing on or off.
     */
    superscript(): this {
        this.#format += `&X`;
        return this;
    }

    /**
     * Turns subscript printing on or off.
     */
    subscript(): this {
        this.#format += `&Y`;
        return this;
    }

    /**
     * Prints the characters that follow in the specified font.
     */
    font(fontName: string): this {
        this.#format += `&"${fontName}"`;
        return this;
    }

    /**
     * Prints the characters that follow in the specified font size.
     */
    fontSize(fontSize: number): this {
        if(fontSize < 0) {
            throw new TextFormatBuilderError("Fontsize must be a positive number");
        }

        if(fontSize >= 100) {
            throw new TextFormatBuilderError("Fontsize must be less than 100");
        }

        this.#format += `&${fontSize} `;
        return this;
    }

    /**
     * Prints the characters in the specified color. User supplies a hexadecimal color value.
     * @param hexColor Can be a 3 or 6 character hex value. Do not prefix with a #
     */
    fontColor(hexColor: string): this {
        if(!isHexColor(hexColor)) {
            throw new TextFormatBuilderError("hexColor must be a hex value");
        }

        this.#format += `&K${hexColor}`;
        return this;
    }

    /**
     * Added text to the formatted string
     */
    text(text: string): this {
        this.#format += text;
        return this;
    }

    /**
     * Prints the current date.
     */
    insertCurrentDate(): this {
        this.#format += "&D";
        return this;
    }

    /**
     * Prints the current time.
     */
    insertCurrentTime(): this {
        this.#format += "&T";
        return this;
    }

    /**
     * Prints the name of the document.
     */
    insertNameOfDocument(): this {
        this.#format += "&F";
        return this;
    }

    /**
     * Prints the name of the workbook tab.
     */
    insertNameOfWorkbookTab(): this {
        this.#format += "&A";
        return this;
    }

    /**
     * Prints the page number.
     */
    insertPageNumber(): this {
        this.#format += "&P";
        return this;
    }

    /**
     * Prints the page number plus the specified number.
     */
    insertPageNumberPlusSpecifiedNumber(numberToAdd: number): this {
        this.#format += `&P+${numberToAdd}`;
        return this;
    }

    /**
     *  	Prints the page number minus the specified number.
     */
    insertPageNumberMinusSpecifiedNumber(numberToSubtract: number): this {
        this.#format += `&P-${numberToSubtract}`;
        return this;
    }

    /**
     * Prints the total number of pages in the document.
     */
    insertTotalNumberOfPages(): this {
        this.#format += "&N";
        return this;
    }

    /**
     * Prints the file path.
     */
    insertFilePath(): this {
        this.#format += "&Z";
        return this;
    }

    get value(): string {
        return this.#format;
    }
}