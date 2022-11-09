import React, { useState } from 'react';
import {
  AddAdvertBtn,
  AddAdvertBox,
  AddAdvertBtnSubtitle,
  AddAdvertBtnTitle,
  AddAdvertInputBox,
  AddAdvertInputTitle,
  AddAdvertSection,
  AddAdvertTitle,
  CategoryItem,
  CategoryItemInfo,
  ListCategory,
  ListCategoryItem,
  ListSubCategoryItem,
  ListSubCategoryItemText,
  AddAdvertInput,
  PriceInputBox,
  AddAdvertNameHint,
  AddAdvertTextArea,
  AddAdvertTextNameHint,
  AddAdvertTextAreaBox,
  AddAdvertForm,
  AddAdvertInputSubtitle,
  AddAdvertAddBtn,
  AddAdvertAddBtnBox,
  AddAdvertAddPhotoInput,
} from '@/components/AddAdvertPage/AddAdverPage.style';
import icon from '../../../public/icons/aircraft.svg';
import arrow from '../../../public/icons/arrow.png';

console.log(arrow);

const AddAdvertPage = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [showCity, setShowCity] = useState(false);

  return (
    <AddAdvertSection>
      <AddAdvertTitle>Выберите подкатегорию для размещения</AddAdvertTitle>
      <AddAdvertForm>
        <AddAdvertInputBox>
          <AddAdvertInputTitle>
            Категория<span>*</span>
          </AddAdvertInputTitle>
          <AddAdvertBox>
            <AddAdvertBtn
              type="button"
              onClick={() => setShowCategory(!showCategory)}
            >
              <CategoryItem>
                <img src={icon.src} alt="" />
                <CategoryItemInfo>
                  <AddAdvertBtnTitle>Транспорт</AddAdvertBtnTitle>
                  <AddAdvertBtnSubtitle>5 084 объявления</AddAdvertBtnSubtitle>
                </CategoryItemInfo>
              </CategoryItem>
              <img
                style={
                  showCategory
                    ? { transform: 'rotate(3.142rad)', transition: '0.2s' }
                    : {
                        transform: 'rotate(0)',
                        transition: '0.2s',
                      }
                }
                src={arrow.src}
                alt=""
              />
            </AddAdvertBtn>
            {showCategory && (
              <ListCategory>
                <ListCategoryItem>
                  <CategoryItem>
                    <img src={icon.src} alt="" />
                    <CategoryItemInfo>
                      <AddAdvertBtnTitle>Транспорт</AddAdvertBtnTitle>
                      <AddAdvertBtnSubtitle>
                        5 084 объявления
                      </AddAdvertBtnSubtitle>
                    </CategoryItemInfo>
                  </CategoryItem>
                </ListCategoryItem>
                <ListCategoryItem>
                  <CategoryItem>
                    <img src={icon.src} alt="" />
                    <CategoryItemInfo>
                      <AddAdvertBtnTitle>Транспорт</AddAdvertBtnTitle>
                      <AddAdvertBtnSubtitle>
                        5 084 объявления
                      </AddAdvertBtnSubtitle>
                    </CategoryItemInfo>
                  </CategoryItem>
                </ListCategoryItem>
                <ListCategoryItem>
                  <CategoryItem>
                    <img src={icon.src} alt="" />
                    <CategoryItemInfo>
                      <AddAdvertBtnTitle>Транспорт</AddAdvertBtnTitle>
                      <AddAdvertBtnSubtitle>
                        5 084 объявления
                      </AddAdvertBtnSubtitle>
                    </CategoryItemInfo>
                  </CategoryItem>
                </ListCategoryItem>
                <ListCategoryItem>
                  <CategoryItem>
                    <img src={icon.src} alt="" />
                    <CategoryItemInfo>
                      <AddAdvertBtnTitle>Транспорт</AddAdvertBtnTitle>
                      <AddAdvertBtnSubtitle>
                        5 084 объявления
                      </AddAdvertBtnSubtitle>
                    </CategoryItemInfo>
                  </CategoryItem>
                </ListCategoryItem>
              </ListCategory>
            )}
          </AddAdvertBox>
        </AddAdvertInputBox>

        <AddAdvertInputBox>
          <AddAdvertInputTitle>
            Подкатегория<span>*</span>
          </AddAdvertInputTitle>
          <AddAdvertBox>
            <AddAdvertBtn
              type="button"
              onClick={() => setShowSubCategory(!showSubCategory)}
            >
              <span>Легковые автомобили</span>
              <img
                style={
                  showSubCategory
                    ? { transform: 'rotate(3.142rad)', transition: '0.2s' }
                    : {
                        transform: 'rotate(0)',
                        transition: '0.2s',
                      }
                }
                src={arrow.src}
                alt=""
              />
            </AddAdvertBtn>
            {showSubCategory && (
              <ListCategory>
                <ListCategoryItem>
                  <ListSubCategoryItem>
                    <ListSubCategoryItemText>Авто</ListSubCategoryItemText>
                  </ListSubCategoryItem>
                </ListCategoryItem>
                <ListCategoryItem>
                  <ListSubCategoryItem>
                    <ListSubCategoryItemText>Запчасти</ListSubCategoryItemText>
                  </ListSubCategoryItem>
                </ListCategoryItem>
              </ListCategory>
            )}
          </AddAdvertBox>
        </AddAdvertInputBox>

        <AddAdvertInputBox>
          <AddAdvertInputTitle>
            Название товара<span>*</span>
          </AddAdvertInputTitle>
          <AddAdvertBox>
            <AddAdvertInput placeholder="Название" />
            <AddAdvertNameHint>
              Название не должно превышать 100 символов
            </AddAdvertNameHint>
          </AddAdvertBox>
        </AddAdvertInputBox>

        <AddAdvertInputBox>
          <AddAdvertInputTitle>
            Цена<span>*</span>
          </AddAdvertInputTitle>
          <PriceInputBox>
            <AddAdvertInput />
            <span> До </span>
            <AddAdvertInput />
          </PriceInputBox>
        </AddAdvertInputBox>

        <AddAdvertInputBox>
          <AddAdvertInputTitle>
            Ваше сообщение<span>*</span>
          </AddAdvertInputTitle>
          <AddAdvertTextAreaBox>
            <AddAdvertTextArea />
            <AddAdvertTextNameHint>4000 знаков осталось</AddAdvertTextNameHint>
          </AddAdvertTextAreaBox>
        </AddAdvertInputBox>

        <AddAdvertInputBox>
          <AddAdvertInputTitle>
            Фотографии
            <AddAdvertInputSubtitle>
              Объявления с фото получают в среднем в 3-5 раз больше откликов. Вы
              можете загрузить до 8 фотографий
            </AddAdvertInputSubtitle>
          </AddAdvertInputTitle>
          <AddAdvertAddBtnBox>
            <AddAdvertAddBtn>
              <svg
                width={24}
                height={24}
                viewBox="0 0 22 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.93702 2.84538C6.00787 2.74688 6.08656 2.62631 6.18689 2.46372C6.22356 2.40431 6.32355 2.23934 6.39799 2.11653L6.4818 1.97841C7.31079 0.622387 7.91339 0 9 0H14V2H9C8.91327 2 8.6405 2.28172 8.1882 3.02159L8.11542 3.14154L8.11524 3.14183C8.04019 3.26566 7.93096 3.44589 7.88887 3.51409C7.76592 3.71332 7.66375 3.86988 7.56061 4.01326C7.11237 4.63641 6.66434 5 6 5H3C2.44772 5 2 5.44772 2 6V15C2 15.5523 2.44772 16 3 16H19C19.5523 16 20 15.5523 20 15V9H22V15C22 16.6569 20.6569 18 19 18H3C1.34315 18 0 16.6569 0 15V6C0 4.34315 1.34315 3 3 3H5.8162C5.84949 2.96194 5.8903 2.91033 5.93702 2.84538ZM16 5V3H18V1H20V3H22V5H20V7H18V5H16ZM11 15C8.23858 15 6 12.7614 6 10C6 7.23858 8.23858 5 11 5C13.7614 5 16 7.23858 16 10C16 12.7614 13.7614 15 11 15ZM11 13C12.6569 13 14 11.6569 14 10C14 8.34315 12.6569 7 11 7C9.34315 7 8 8.34315 8 10C8 11.6569 9.34315 13 11 13Z"
                />
              </svg>
              <p>Добавить фото</p>
              <AddAdvertAddPhotoInput
                id="addPhoto"
                accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                multiple
                type="file"
              />
            </AddAdvertAddBtn>
          </AddAdvertAddBtnBox>
        </AddAdvertInputBox>

        <AddAdvertInputBox>
          <AddAdvertInputTitle>
            Город<span>*</span>
          </AddAdvertInputTitle>
          <AddAdvertBox>
            <AddAdvertBtn type="button" onClick={() => setShowCity(!showCity)}>
              <span>Укажите название города</span>
              <img
                style={
                  showCity
                    ? { transform: 'rotate(3.142rad)', transition: '0.2s' }
                    : {
                        transform: 'rotate(0)',
                        transition: '0.2s',
                      }
                }
                src={arrow.src}
                alt=""
              />
            </AddAdvertBtn>
            {showCity && (
              <ListCategory>
                <ListCategoryItem>
                  <ListSubCategoryItem>
                    <ListSubCategoryItemText>Bishkek</ListSubCategoryItemText>
                  </ListSubCategoryItem>
                </ListCategoryItem>
                <ListCategoryItem>
                  <ListSubCategoryItem>
                    <ListSubCategoryItemText>Osh</ListSubCategoryItemText>
                  </ListSubCategoryItem>
                </ListCategoryItem>
              </ListCategory>
            )}
          </AddAdvertBox>
        </AddAdvertInputBox>

        <AddAdvertInputBox>
          <AddAdvertInputTitle>
            E-mail адрес<span>*</span>
          </AddAdvertInputTitle>
          <AddAdvertBox>
            <AddAdvertInput />
          </AddAdvertBox>
        </AddAdvertInputBox>
      </AddAdvertForm>
    </AddAdvertSection>
  );
};

export default AddAdvertPage;
