import { useState } from 'react';
import { IProps } from './Forminput';
import { Input, PasswordWrapper, StyledImage } from './Forminput.style';

export const PasswordField = (props: IProps) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  return (
    <PasswordWrapper>
      <Input
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        placeholder={props.placeholder}
        type={!isShowPassword ? 'password' : 'text'}
        autoComplete="off"
      />

      {isShowPassword && props.name === 'password' ? (
        <StyledImage
          src="/icons/eyeopen.svg"
          alt="eyeclose"
          width={24}
          height={24}
          onClick={() => setIsShowPassword(!isShowPassword)}
        />
      ) : (
        <StyledImage
          src="/icons/eyeclosw.svg"
          alt="eyeopen"
          width={24}
          height={24}
          onClick={() => setIsShowPassword(!isShowPassword)}
        />
      )}
    </PasswordWrapper>
  );
};
