import express from 'express';
import { convertToRomanNumeral } from '../utils/convert-to-roman';

const router = express.Router();

router.get('/', (req, res) => {
  const { query } = req.query;
  const param = Number(query);
  if (!Number.isInteger(param) || param > 3999) {
    return res.status(400).json({ error: 'Bad query param' });
  }

  return res.json({
    roman: convertToRomanNumeral(param),
  });
});

export default router;
