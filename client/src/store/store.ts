import { configureStore } from '@reduxjs/toolkit';
import { landingReducer } from './landing';
import { AppDispatch, RootState } from './types';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer: {
    landing: landingReducer,
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
