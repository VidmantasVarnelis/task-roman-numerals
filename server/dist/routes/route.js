"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const converToRomanNumeral = (param) => {
    let romanString = '';
    const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    while (param > 0) {
        for (const key in roman) {
            if (param >= roman[key]) {
                romanString += key;
                param -= roman[key];
            }
        }
    }
    return romanString;
};
router.get('/', (req, res) => {
    const { query } = req.query;
    const param = Number(query);
    if (!Number.isInteger(param)) {
        return res.status(404).json({ error: 'Bad query param' });
    }
    return res.json({
        result: converToRomanNumeral(param),
    });
});
exports.default = router;
//# sourceMappingURL=route.js.map