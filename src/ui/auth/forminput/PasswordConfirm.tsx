import { useState } from 'react';
import { IProps } from './Forminput';
import { Input, PasswordWrapper, StyledImage } from './Forminput.style';

export const PasswordConfirmField = (props: IProps) => {
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);

  return (
    <PasswordWrapper>
      <Input
        name={props.name}
        placeholder={props.placeholder}
        type={!isEyeOpen ? 'password' : 'text'}
        autoComplete="off"
      />
      {isEyeOpen && props.name === 'password_confirm' ? (
        <StyledImage
          src="/icons/eyeclosw.svg"
          alt="eyeclose"
          width={24}
          height={24}
          // onClick={() => setIsEyeOpen(!isEyeOpen)}
        />
      ) : (
        <StyledImage
          src="/icons/eyeopen.svg"
          alt="eyeopen"
          width={24}
          height={24}
          onClick={() => setIsEyeOpen(!isEyeOpen)}
        />
      )}
    </PasswordWrapper>
  );
};
