import styled from 'styled-components';
import Image from 'next/image';

export const AddAdvertSection = styled.section`
  padding: 28px 48px 68px;
  background-color: #fafafa;
`;

export const AddAdvertTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #444444;
  padding-bottom: 16px;
`;

export const AddAdvertForm = styled.form`
  margin-top: 16px;
  padding-bottom: 68px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: unset;
  gap: 25px;
`;

export const AddAdvertInputBox = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: start;
  margin-bottom: 16px;

  width: 100%;
  flex-direction: row;
`;

export const AddAdvertInputTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: #444444;
  max-width: 272px;
  width: 100%;

  span {
    color: #d62c54;
  }
`;

export const AddAdvertNameHint = styled.p`
  position: absolute;
  top: 52px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  color: #828282;
  font-style: normal;

  p {
    color: red;
  }
`;

export const AddAdvertError = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  color: red;
  font-style: normal;
  margin-top: 5px;
`;

export const AddAdvertErrorText = styled.p`
  height: 16px;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12.5px;
  line-height: 15px;
  color: #e31b4b;
  font-style: normal;
`;

export const AddAdvertBox = styled.div`
  width: 384px;
  position: relative;
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const AddAdvertBoxPhone = styled(AddAdvertBox)`
  flex-direction: column;
`;

export const PhoneWrapper = styled.div`
  width: 384px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  position: relative;

  div {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #00ccdb;
    cursor: pointer;

    display: flex;
    align-items: start;
    width: 100%;
    text-align: start;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  background-color: white;
  border: 1px solid #e5e6e6;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: black;
  font-style: normal;
  border-radius: 8px;
  outline: none;
  position: relative;

  div {
    width: 1px;
    height: 32px;
    border-right: 1px solid #e0e0e0;
    margin-left: 14px;
  }
`;

export const AddAdvertBtn = styled.button`
  width: 100%;
  padding: 18px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;

  span {
    width: 100%;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 200%;
    color: #2a2349;
    font-style: normal;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }
`;

export const CategoryItem = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: unset;
  align-items: unset;
  gap: 13px;
`;

export const CategoryItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: unset;
  align-items: unset;
  gap: 2px;
  text-align: start;
`;

export const AddAdvertBtnTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: #444444;
  font-style: normal;
`;
export const AddAdvertBtnSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  color: #706d7a;
  font-style: normal;
`;
export const ListCategory = styled.ul`
  position: absolute;
  right: 0;
  top: 70px;
  z-index: 100;
  overflow-y: scroll;
  width: fit-content;
  max-width: 48vw;
  max-height: 400px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 4%);

  ::-webkit-scrollbar-thumb {
    background-color: #373a3a;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(248, 248, 248, 0.7);
    border-radius: 10px;
  }
`;

export const ListCategoryItem = styled.li`
  width: 100%;
  cursor: pointer;
  align-self: flex-end;
  list-style: none;
`;

export const ListSubCategoryItem = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: unset;
`;
export const ListSubCategoryItemText = styled.p`
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  color: #2a2349;
  font-style: normal;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

export const AddAdvertInput = styled.input<{
  titleLength?: number;
}>`
  width: 100%;
  height: 48px;
  padding: 0 12px;
  background-color: white;
  border: ${(props) =>
    `${props.titleLength ?? 0 >= 100 ? '1px solid red' : '1px solid #e5e6e6'}`};
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: black;
  font-style: normal;
  border-radius: 8px;
  outline: none;
`;

export const AddAdvertInputNumber = styled(AddAdvertInput).attrs(() => ({
  type: 'tel',
}))`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  width: unset;
  border: none;
`;

// export const AddAdvertInputEmail = styled(AddAdvertInput).attrs(() => ({
//   type: 'email',
// }))``;

export const PriceInputBox = styled.div`
  max-width: 550px;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 30px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  span {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14.4px;
    color: #828282;
    font-style: normal;
  }
`;

export const AddAdvertTextArea = styled.textarea`
  padding: 10px 12px;
  background-color: white;
  border: 1px solid #e5e6e6;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: black;
  font-style: normal;
  max-width: 656px;
  max-height: 202px;
  width: 100%;
  height: 202px;
  resize: none;
  outline: none;
`;
export const AddAdvertTextNameHint = styled.p`
  height: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  color: #828282;
  font-style: normal;
  padding-top: 5px;

  p {
    color: red;
  }
`;
export const AddAdvertTextAreaBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  text-align: start;
  align-items: start;
  flex-direction: column;
`;

export const AddAdvertInputSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  color: #828282;
  font-style: normal;
`;

export const AddAdvertAddBtnBox = styled.div`
  padding: 5px 0;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`;

export const AddAdvertAddBtn = styled.label`
  width: 112px;
  height: 112px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid #d0d9de;
  border-radius: 8px;
  box-shadow: 0 0 2px rgb(0 0 0 / 10%);
  cursor: pointer;

  svg {
    fill: #d0d9de;
  }

  p {
    color: #d0d9de;
  }

  :hover {
    border-color: #7165ab;

    svg {
      fill: #7165ab;
    }

    p {
      color: #7165ab;
    }
  }
`;
export const AddAdvertAddPhotoInput = styled.input`
  display: none;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const ImageDelete = styled(Image)`
  position: absolute;
  top: -11px;
  right: -10px;
  transform: rotate(0deg);
  cursor: pointer;
`;

export const PublishAds = styled.button`
  width: 284px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #00ccdb;
  border-radius: 8px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 24px;
`;
