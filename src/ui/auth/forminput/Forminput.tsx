import React from 'react';
import { Input } from './Forminput.style';
import { PasswordConfirmField } from './PasswordConfirm';
import { PasswordField } from './PasswordInput';

export interface IProps {
  name?: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Forminput = (props: IProps) => {
  return (
    <>
      {props.name === 'password' && props.type === 'password' && (
        <PasswordField {...props} />
      )}
      {props.name === 'password_confirm' && props.type === 'password' && (
        <PasswordConfirmField {...props} />
      )}
      {(props.type === 'text' ||
        props.type === 'email' ||
        props.type === 'number') && <Input {...props} autoComplete="off" />}
    </>
  );
};
