import React from 'react';
import { Search, SearchIcon, SearchInput } from './ProfilePage.style';

interface IProps {
  value: string;
  setValue: (value: string) => void;
}

export const ProfileAdvertsSearch = ({ setValue, value }: IProps) => {
  return (
    <Search>
      <SearchInput
        placeholder="Найти объявление"
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <SearchIcon src="/user/search.svg" alt="search" width={20} height={20} />
    </Search>
  );
};
