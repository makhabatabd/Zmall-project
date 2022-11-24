/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

const getStorageData = (keyName: string, defaultValue: object) => {
  if (typeof window !== 'undefined') {
    const savedItem: any = localStorage.getItem(keyName);
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || defaultValue;
  }
};

export const useLocalStorage = (keyName: string, initialValue: object) => {
  const [value, setValue] = useState(() => {
    return getStorageData(keyName, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value));
  }, [keyName, value]);

  return [value, setValue];
};
