import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Container } from '../Styles/sharedstyles';
import { signOut, useSession } from 'next-auth/react';
// import { TopHeader, TopHeaderBody } from './Header.style';
import {
  BottomHedaer,
  BottomHeaderBody,
  Burger,
  BurgerClose,
  Logo,
  Location,
  MobileNavbar,
  MobileNavigation,
  Name,
  Profile,
  TopHeader,
  TopHeaderBody,
  DesktopNavbar,
  Favorites,
  Messages,
  DesktopNavigation,
  User,
  DesktopLink,
} from './Header.style';
import icon from '../../../public/icons/aircraft.svg';
import arrow from '../../../public/icons/arrow.png';
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
import { useLogOutMutation } from '@/store/authSlice';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [isNavbar, setIsNavbar] = useState<boolean>(true);
  const [activePage, setActivePage] = useState<string>('Объявления');
  const [showCategory, setShowCategory] = useState(false);
  const { data: session } = useSession();
  const [logOut] = useLogOutMutation();
  const [userInfo, setUserInfo] = useState({
    refresh: null,
    user: null,
  });
  function getUser() {
    const token =
      localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth'));
    const user =
      localStorage.getItem('currentUser') &&
      JSON.parse(localStorage.getItem('currentUser'));
    if (token && user)
      setUserInfo({ refresh: token.refresh, user: user.email });
  }

  useEffect(() => {
    getUser();
  }, [router.pathname]);

  const mockData = {
    isAuth: userInfo && userInfo?.user,
    location: 'Улькен Нарын (Большенарымское)',
    favites: 3,
    messages: 5,
  };

  function userSignOut() {
    signOut();
  }

  async function userLogOut() {
    try {
      await logOut({
        refresh: userInfo?.refresh,
      });
      localStorage.clear();
      setUserInfo({});
    } catch (error: typeof error) {
      console.log(error);
    }
  }

  return (
    <>
      <TopHeader>
        <Container>
          <TopHeaderBody>
            <Logo mobile>Zmall</Logo>

            <MobileNavbar isNavbar={isNavbar}>
              <Profile onClick={() => setIsNavbar(!isNavbar)}>
                <Image
                  alt="Profile"
                  src="/header/user.svg"
                  width={30}
                  height={30}
                />
                {/* on click or enter plase send him to the Auth Page */}
                {userInfo ? <Name>{userInfo?.user}</Name> : <Name>Вход</Name>}
              </Profile>
              <MobileNavigation>
                <ul>
                  <li onClick={() => setIsNavbar(!isNavbar)}>Объявления</li>
                  <li onClick={() => setIsNavbar(!isNavbar)}>О нас</li>
                  <li onClick={() => setIsNavbar(!isNavbar)}>Помощь</li>
                </ul>
              </MobileNavigation>
              <Location>
                <Image
                  alt="Location"
                  src="/header/location.svg"
                  width={30}
                  height={30}
                />
                <Name>{mockData.location || 'Вход'}</Name>
              </Location>

              <BurgerClose onClick={() => setIsNavbar(!isNavbar)}>
                <span></span>
                <span></span>
              </BurgerClose>
            </MobileNavbar>

            <DesktopNavbar>
              <DesktopNavigation>
                <ul>
                  <DesktopLink
                    desktop={activePage === 'Объявления' ? true : false}
                    onClick={() => setActivePage('Объявления')}
                  >
                    Объявления
                  </DesktopLink>
                  <DesktopLink
                    desktop={activePage === 'О нас' ? true : false}
                    onClick={() => setActivePage('О нас')}
                  >
                    О нас
                  </DesktopLink>
                  <DesktopLink
                    desktop={activePage === 'Помощь' ? true : false}
                    onClick={() => setActivePage('Помощь')}
                  >
                    Помощь
                  </DesktopLink>
                  <Location desktop>
                    <Image
                      alt="Location"
                      src="/header/location.svg"
                      width={30}
                      height={30}
                    />
                    <Name desktop>{mockData.location || 'Вход'}</Name>
                  </Location>
                </ul>
              </DesktopNavigation>

              <User>
                <Profile>
                  <Image
                    alt="Profile"
                    src="/header/user.svg"
                    width={30}
                    height={30}
                  />
                  <Name onClick={() => router.push('/auth')} desktop>
                    {mockData.isAuth || 'Вход'}
                  </Name>
                </Profile>

                <Favorites>
                  <Image
                    alt="Favorites"
                    src="/header/fav.svg"
                    width={30}
                    height={30}
                  />
                  <Name desktop>{mockData.favites || 'Вход'}</Name>
                </Favorites>

                <Messages>
                  <Image
                    alt="Messages"
                    src="/header/mail.svg"
                    width={30}
                    height={30}
                  />
                  <Name desktop>{mockData.messages || 'Вход'}</Name>
                </Messages>
                {userInfo?.user && (
                  <div onClick={session ? userSignOut : userLogOut}>
                    <Image
                      src="/icons/sign-out.svg"
                      width={30}
                      height={30}
                      alt="sign out"
                    />
                  </div>
                )}
              </User>
            </DesktopNavbar>

            <Burger onClick={() => setIsNavbar(!isNavbar)}>
              <span></span>
              <span></span>
              <span></span>
            </Burger>
          </TopHeaderBody>
        </Container>
      </TopHeader>
      <BottomHedaer>
        <Container>
          <BottomHeaderBody>
            <Logo desktop onClick={() => router.push('/')}>
              Zmall
            </Logo>

            <AddAdvertInputBox>
              <AddAdvertBox>
                <AddAdvertBtn
                  type="button"
                  onClick={() => setShowCategory(!showCategory)}
                >
                  <CategoryItem>
                    <CategoryItemInfo>
                      <AddAdvertBtnTitle>Транспорт</AddAdvertBtnTitle>
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
                        <Image
                          src="/icons/aircraft.svg"
                          alt="Category"
                          width={50}
                          height={44}
                        />
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
                        <Image
                          src="/icons/aircraft.svg"
                          alt="Category"
                          width={50}
                          height={44}
                        />
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
                        <Image
                          src="/icons/aircraft.svg"
                          alt="Category"
                          width={50}
                          height={44}
                        />
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
                        <Image
                          src="/icons/aircraft.svg"
                          alt="Category"
                          width={50}
                          height={44}
                        />
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
          </BottomHeaderBody>
        </Container>
      </BottomHedaer>
    </>
  );
};

export default Header;
