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
  AddAdvertInputNumber,
  ImageWrapper,
  ImageDelete,
  PhoneWrapper,
  Label,
  PublishAds,
  AddAdvertError,
} from '@/components/AddAdvertPage/AddAdverPage.style';
import icon from '../../../public/icons/aircraft.svg';
import arrow from '../../../public/icons/arrow.png';
import {
  usePostAdvertisingMutation,
  useGetCategoriesQuery,
  useGetCitiesQuery,
  useGetSubcategoryQuery,
} from '@/store/addAdvertising/addAdvertising.api';
import Image from 'next/image';
import * as yup from 'yup';

const AddAdvertPage = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [showCity, setShowCity] = useState(false);

  type CityType = {
    id: number;
    name: string;
  };

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState<CityType>({
    id: 1,
    name: 'Укажите название города',
  });

  const [phone, setPhone] = useState<{ [key: number]: string }>({});
  const [whatsApp, setWhatsApp] = useState('');
  const [phones, setPhones] = useState<number[]>([]);

  const [postAdvertising] = usePostAdvertisingMutation();

  const { data } = useGetCategoriesQuery('');
  const [category, setCategory] = useState(data?.results[0]);
  const { data: subcategories } = useGetSubcategoryQuery(category?.id || 1);
  const { data: cities } = useGetCitiesQuery('');
  const [subcategory, setSubcategory] = useState(
    subcategories?.child_category[0]
  );

  const getBalance = (message: string) => {
    return 4000 - message.length;
  };

  const [image, setImage] = useState<string[]>([]);
  const onImageChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const arr = [...image];
      arr.push(URL.createObjectURL(target.files[0]));
      setImage(arr);
    }
  };

  const deleteImage = (i: number) => {
    if (i > -1) {
      const newArr = image.filter((item, index) => index != i);
      setImage(newArr);
    }
  };

  const addExtraPhoneInput = () => {
    setPhones((prev) => [...prev, prev.length ? prev[prev.length - 1] + 1 : 1]);
  };

  const deleteExtraPhoneInput = (i: number) => {
    const newPhones = phones.filter((item) => {
      if (item == i) {
        delete phone[i];
        return false;
      }
      return true;
    });
    setPhones(newPhones);
  };

  const phoneArray = Object.values(phone).map((item) => '+' + item);

  const advertising = {
    name: title,
    price: price,
    max_price: maxPrice,
    description: message,
    email: email,
    phone_numbers: phoneArray,
    whatsapp_number: '+' + whatsApp,
    city: city?.id,
    child_category: subcategory?.id,
  };

  const phoneRegex = /^\+?[0-9]{3}?[0-9]{3}?[0-9]{6}$/;
  const schema = yup.object().shape({
    name: yup.string().required('Обязательное поле'),
    price: yup.string().required('Обязательное поле'),
    description: yup.string().required('Обязательное поле'),
    whatsapp_number: yup
      .string()
      .required('Обязательное поле')
      .matches(phoneRegex, 'Не валидный номер'),

    max_price: yup.string(),
    email: yup.string().email(),
    phone_numbers: yup.array().of(yup.string()),
  });

  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string | string[];
  }>({});
  const addAdvertising = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    schema
      .validate(advertising, { abortEarly: false })
      .then((responseData) => {
        setValidationErrors({});
        console.log(responseData);
        // postAdvertising(responseData);
      })
      .catch((err) => {
        setValidationErrors({});
        err.inner.forEach(
          ({ path, message }: { path: string; message: string }) => {
            setValidationErrors((prev) => ({
              ...prev,
              [path]: message,
            }));
          }
        );
      });
  };

  const setToPhone = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const arr = { ...phone };
    arr[id] = e.target.value;
    setPhone(arr);
  };

  const onChangeWhatsApp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value == '' || re.test(e.target.value)) {
      setWhatsApp(e.target.value);
    }
  };

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
                  <AddAdvertBtnTitle>{category?.name}</AddAdvertBtnTitle>
                  <AddAdvertBtnSubtitle>
                    {category?.ads_count} объявления
                  </AddAdvertBtnSubtitle>
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
                {data?.results?.map((item) => (
                  <ListCategoryItem
                    key={item.id}
                    onClick={() => setCategory(item)}
                  >
                    <CategoryItem>
                      <img src={icon.src} alt="" />
                      <CategoryItemInfo>
                        <AddAdvertBtnTitle>{item.name}</AddAdvertBtnTitle>
                        <AddAdvertBtnSubtitle>
                          {item.ads_count} объявления
                        </AddAdvertBtnSubtitle>
                      </CategoryItemInfo>
                    </CategoryItem>
                  </ListCategoryItem>
                ))}
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
              <span>{subcategory?.name}</span>
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
                {subcategories?.child_category?.map((item) => (
                  <ListCategoryItem
                    key={item.id}
                    onClick={() => setSubcategory(item)}
                  >
                    <ListSubCategoryItem>
                      <ListSubCategoryItemText>
                        {item.name}
                      </ListSubCategoryItemText>
                    </ListSubCategoryItem>
                  </ListCategoryItem>
                ))}
              </ListCategory>
            )}
          </AddAdvertBox>
        </AddAdvertInputBox>

        <AddAdvertInputBox>
          <AddAdvertInputTitle>
            Название товара<span>*</span>
          </AddAdvertInputTitle>
          <AddAdvertBox>
            <AddAdvertInput
              titleLength={title.length}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Название"
            />
            <AddAdvertNameHint>
              <p>{validationErrors.name && validationErrors.name}</p>
              Название не должно превышать 100 символов
            </AddAdvertNameHint>
          </AddAdvertBox>
        </AddAdvertInputBox>

        <AddAdvertInputBox>
          <AddAdvertInputTitle>
            Цена<span>*</span>
          </AddAdvertInputTitle>
          <div>
            <PriceInputBox>
              <AddAdvertInput
                value={price}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPrice(e.target.value)
                }
              />
              <span> До </span>
              <AddAdvertInput
                value={maxPrice}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setMaxPrice(e.target.value)
                }
              />
            </PriceInputBox>
            <AddAdvertError>
              {validationErrors.price && validationErrors.price}
            </AddAdvertError>
          </div>
        </AddAdvertInputBox>

        <AddAdvertInputBox>
          <AddAdvertInputTitle>
            Ваше сообщение<span>*</span>
          </AddAdvertInputTitle>
          <AddAdvertTextAreaBox>
            <AddAdvertTextArea
              value={message}
              name="description"
              onChange={(e) => setMessage(e.target.value)}
            />
            <AddAdvertTextNameHint>
              <p>
                {validationErrors.description && validationErrors.description}
              </p>
              {getBalance(message) >= 0 ? getBalance(message) : 0} знаков
              осталось
            </AddAdvertTextNameHint>
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
            {image?.map((item, i) => (
              <ImageWrapper key={i}>
                <Image
                  width={112}
                  height={112}
                  style={{ objectFit: 'cover', borderRadius: 8 }}
                  src={item}
                  alt="preview image"
                />
                <ImageDelete
                  onClick={() => deleteImage(i)}
                  width={22}
                  height={22}
                  src="/add-adver-page/delete-icon.svg"
                  alt="delete"
                />
              </ImageWrapper>
            ))}

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
                onChange={onImageChange}
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
              <span>{city.name}</span>
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
                {cities?.results?.map((item) => (
                  <ListCategoryItem onClick={() => setCity(item)} key={item.id}>
                    <ListSubCategoryItem>
                      <ListSubCategoryItemText>
                        {item.name}
                      </ListSubCategoryItemText>
                    </ListSubCategoryItem>
                  </ListCategoryItem>
                ))}
              </ListCategory>
            )}
          </AddAdvertBox>
        </AddAdvertInputBox>

        <AddAdvertInputBox>
          <AddAdvertInputTitle>
            E-mail адрес<span>*</span>
          </AddAdvertInputTitle>
          <AddAdvertBox>
            <AddAdvertInput
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </AddAdvertBox>
        </AddAdvertInputBox>
        <AddAdvertInputBox>
          <AddAdvertInputTitle>
            Контактные данные<span>*</span>
          </AddAdvertInputTitle>
          <PhoneWrapper>
            <Label>
              <Image
                width={24}
                height={24}
                src="/add-adver-page/phone-icon.svg"
                alt="phone icon"
              />
              <div></div>
              <AddAdvertInputNumber
                placeholder="996 555 555555"
                onChange={(e) => setToPhone(e, 0)}
              />
            </Label>
            <div onClick={addExtraPhoneInput}> + еще номер</div>
            {phones.map((item, i) => (
              <div key={i} style={{ position: 'relative' }}>
                {
                  <>
                    <Label>
                      <Image
                        width={24}
                        height={24}
                        src="/add-adver-page/phone-icon.svg"
                        alt={'phone icon'}
                      />
                      <div></div>
                      <AddAdvertInputNumber
                        placeholder="996 555 555555"
                        value={phone[item]}
                        onChange={(e) => setToPhone(e, item)}
                      />
                    </Label>
                    <ImageDelete
                      onClick={() => deleteExtraPhoneInput(item)}
                      width={24}
                      height={24}
                      src={'/add-adver-page/delete-icon.svg'}
                      alt="delete"
                    />
                  </>
                }
              </div>
            ))}

            <Label>
              <Image
                width={24}
                height={24}
                src="/add-adver-page/whatsApp-icon.svg"
                alt={'phone icon'}
              />
              <div></div>
              <AddAdvertInputNumber
                placeholder="996 555 555555"
                onChange={onChangeWhatsApp}
              />
            </Label>
            <AddAdvertError>
              {validationErrors.whatsapp_number &&
                validationErrors.whatsapp_number}
            </AddAdvertError>

            <PublishAds
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                addAdvertising(e)
              }
            >
              <Image
                width={24}
                height={24}
                src={'/add-adver-page/add-icon.svg'}
                alt={'add icon'}
              />
              Опубликать объявление
            </PublishAds>
          </PhoneWrapper>
        </AddAdvertInputBox>
      </AddAdvertForm>
    </AddAdvertSection>
  );
};

export default AddAdvertPage;
