"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = require("./utils/logger");
const roman_1 = __importDefault(require("./routes/roman"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: 'http://localhost:3001/' }));
app.use('/romannumeral', roman_1.default);
app.all('*', (_, res) => {
    res.status(404).json({ error: 'Page not found!' });
});
app.listen(PORT, () => logger_1.logger.info(`Listening on PORT: ${PORT}`));
//# sourceMappingURL=index.js.map