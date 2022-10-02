import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

interface CounterState {
  items: number[];
}

const initialState: CounterState = {
  items: [],
};

export const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((id: number) => id !== action.payload);
    },
  },
});

export const { increment } = animeSlice.actions;

export const selectCount = (state: RootState) => state.anime;

export default animeSlice.reducer;
