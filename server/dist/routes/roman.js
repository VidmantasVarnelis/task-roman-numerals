"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const convert_to_roman_1 = require("../utils/convert-to-roman");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    const { query } = req.query;
    const param = Number(query);
    if (!Number.isInteger(param) || param > 3999) {
        return res.status(400).json({ error: 'Bad query param' });
    }
    return res.json({
        roman: (0, convert_to_roman_1.convertToRomanNumeral)(param),
    });
});
exports.default = router;
//# sourceMappingURL=roman.js.map