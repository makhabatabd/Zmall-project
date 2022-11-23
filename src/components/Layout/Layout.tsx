import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useAppDispatch } from '@/hooks';
import { getMyMessage } from '@/store/ChatSlice';

const Layout = ({ children }: React.PropsWithChildren) => {
  const dispatch = useAppDispatch();

  const token =
    typeof window !== 'undefined' &&
    localStorage.getItem('auth') &&
    JSON.parse(localStorage.getItem('auth') || '');

  useEffect(() => {
    if (token) {
      const headers = {
        Authorization: `Bearer ${token.token}`,
      };

      const interval = setInterval(async () => {
        await fetch(`http://188.225.83.42:8001/api/v1/chat/chats/`, {
          headers,
        })
          .then((response) => response.json())
          .then((responseData) => {
            console.log(responseData);
            dispatch(getMyMessage(responseData));
          })
          .catch((error) => console.log(error));
      }, 5000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [token]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
