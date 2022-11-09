import Image from 'next/image';
import React, { useState } from 'react';
import { Container } from '../Styles/sharedstyles';
import { signOut, useSession } from 'next-auth/react';
// import { TopHeader, TopHeaderBody } from './Header.style';
import {
  BottomHedaer,
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

const Header = () => {
  const [isNavbar, setIsNavbar] = useState<boolean>(true);
  const [activePage, setActivePage] = useState<string>('Объявления');
  const { data: session } = useSession();
  const mockData = {
    isAuth: session && session.user?.name,
    location: 'Улькен Нарын (Большенарымское)',
    favites: 3,
    messages: 5,
  };

  function userSignOut() {
    console.log(1);
    signOut();
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
                {/* on click for enter plase send him to the Auth Page */}
                {session ? <Name>{mockData.isAuth}</Name> : <Name>Вход</Name>}
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
                  <Name desktop>{mockData.isAuth || 'Вход'}</Name>
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
                {session && (
                  <div onClick={userSignOut}>
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
          <Logo>Zmall</Logo>
        </Container>
      </BottomHedaer>
    </>
  );
};

export default Header;
