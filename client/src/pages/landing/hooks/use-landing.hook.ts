import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'store';
import { convertRomanNumerals } from 'store/landing/thunks';

export const useLanding = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const {
    state: { roman: romanLetters },
    status,
  } = useAppSelector((store) => store.landing);

  const onCopy = () => {
    toast.success('Successfully copied roman numerals!');
    navigator.clipboard.writeText(String(romanLetters));
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(convertRomanNumerals(value));
  };

  return {
    onSubmit,
    onChange,
    onCopy,
    romanLetters,
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isFulfilled: status === 'fulfilled',
  };
};
