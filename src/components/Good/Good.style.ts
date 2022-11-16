import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Card = styled.div`
  width: 248px;
  background: #ffffff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
  position: relative;
`;

export const Iconwrap = styled.div`
  position: absolute;
  top: 165px;
  right: 20px;
`;

const shake = keyframes`
0%, 100% {transform: translateX(0);}
	10%, 30%, 50%, 70%, 90% {transform: translateY(-10px);}
	20%, 40%, 60%, 80% {transform: translateY(10px);}
`;

export const IconwrapLoading = styled.div`
  position: absolute;
  top: 165px;
  right: 20px;
  animation: ${shake} 2s ease infinite;
`;

export const Description = styled.div`
  padding: 18px 16px;
`;

export const Title = styled.h2`
  color: ${(props) => `${props.theme.colors.blue}`};
  font-family: ${({ theme }) => `${theme.fonts[0]}`};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 19px;
`;

export const Price = styled.p`
  font-family: ${({ theme }) => `${theme.fonts[0]}`};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #444444;
  margin-bottom: 9px;
`;
export const Category = styled.p`
  font-family: ${({ theme }) => `${theme.fonts[0]}`};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #828282;
`;
