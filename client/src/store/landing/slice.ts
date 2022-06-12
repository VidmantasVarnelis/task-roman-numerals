import { createSlice } from '@reduxjs/toolkit';
import { LANDING_SLICE } from './constants';
import { convertRomanNumerals } from './thunks';

type Status = 'idle' | 'pending' | 'rejected' | 'fulfilled';
type ConvertRomanResponse = {
  roman: string;
};
export interface LandingState {
  state: ConvertRomanResponse;
  status: Status;
}
const initialState: LandingState = {
  state: {
    roman: '',
  },
  status: 'idle',
};

export const landingSlice = createSlice({
  name: LANDING_SLICE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(convertRomanNumerals.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.state = action.payload;
    });
    builder.addCase(convertRomanNumerals.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(convertRomanNumerals.rejected, (state) => {
      state.status = 'rejected';
    });
  },
});

export const landingReducer = landingSlice.reducer;
