import styled from 'styled-components';
import Image from 'next/image';

export const Input = styled.input`
  // box-sizing: border-box;
  width: 100%;
  height: 48px;
  // left: 280px;
  // top: 294px;
  background: #ffffff;
  border: 1px solid #e5e6e6;
  border-radius: 4px;
  padding: 0 12px;
`;

export const StyledImage = styled(Image)`
  position: absolute;
  right: 3%;
  top: 24.7%;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;
