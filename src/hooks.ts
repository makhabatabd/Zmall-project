import React, { useEffect, RefObject } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from './store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    function handleClickOutside(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();
      if (ref.current !== e.currentTarget) callback();
      if (ref.current && !ref.current.contains(e.currentTarget)) callback?.();
    }

    document.addEventListener('mousedown', function (e) {
      handleClickOutside(e as never);
    });
    return () => {
      document.removeEventListener('mousedown', function (e) {
        handleClickOutside(e as never);
      });
    };
  }, [ref]);
};
