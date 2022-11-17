import React, { ReactNode } from 'react';
import { Button } from './Authbutton.style';

interface IButton {
  children: ReactNode;
  background: string;
  width: string;
  type?: string;
  disabled?: boolean;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

export const Authbutton = ({
  children,
  background,
  width,
  disabled,
  onClick,
}: IButton) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: `${background}`,
        width: `${width}`,
      }}
    >
      {children}
    </Button>
  );
};
