import React, { ReactNode } from 'react';
import { Button } from './Authbutton.style';

interface IButton {
  children: ReactNode;
  background: string;
  width: string;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

export const Authbutton = ({
  children,
  background,
  width,
  onClick,
}: IButton) => {
  return (
    <Button
      onClick={onClick}
      style={{
        background: `${background}`,
        width: `${width}`,
      }}
    >
      {children}
    </Button>
  );
};
