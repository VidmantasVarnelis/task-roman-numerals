import { createAsyncThunk } from '@reduxjs/toolkit';
import { CONVERT_NUMBER_API, CONVERT_THUNK } from '../constants';

export const convertRomanNumerals = createAsyncThunk(
  CONVERT_THUNK,
  async (input: string, { rejectWithValue }) => {
    try {
      if (
        !Number(input) ||
        !Number.isInteger(Number(input)) ||
        Number(input) > 3999
      )
        return rejectWithValue(false);
      const response = await fetch(`${CONVERT_NUMBER_API}${input}`);
      return await response.json();
    } catch {
      return rejectWithValue(false);
    }
  },
);
