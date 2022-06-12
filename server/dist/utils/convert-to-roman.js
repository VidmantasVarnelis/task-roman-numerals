"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToRomanNumeral = void 0;
const convertToRomanNumeral = (param) => {
    let romanString = '';
    const roman = [
        { value: 1000, letter: 'M' },
        { value: 900, letter: 'CM' },
        { value: 500, letter: 'D' },
        { value: 400, letter: 'CD' },
        { value: 100, letter: 'C' },
        { value: 90, letter: 'XC' },
        { value: 50, letter: 'L' },
        { value: 40, letter: 'XL' },
        { value: 10, letter: 'X' },
        { value: 9, letter: 'IX' },
        { value: 5, letter: 'V' },
        { value: 4, letter: 'IV' },
        { value: 1, letter: 'I' },
    ];
    let index = 0;
    while (param > 0) {
        const current = roman[index];
        if (param >= current.value) {
            romanString += current.letter;
            param -= current.value;
        }
        else
            index += 1;
    }
    return romanString;
};
exports.convertToRomanNumeral = convertToRomanNumeral;
//# sourceMappingURL=convert-to-roman.js.map