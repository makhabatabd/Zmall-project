import React, { ReactNode } from 'react';
import { Container } from '@/components/Styles/sharedstyles';
import {
  AdminPageHeader,
  AdminPageTab,
  AdminPageTitle,
} from '@/components/AdminPage/AdminPage.style';
import Link from 'next/link';

const AdminPageNavBar = ({
  element,
  pageName,
}: {
  element: ReactNode;
  pageName: string;
}) => {
  return (
    <>
      <AdminPageHeader>
        <Container>
          <AdminPageTitle>Страница администратора</AdminPageTitle>
          <AdminPageTab>
            <li>
              <Link
                className={pageName === 'add-list' ? 'link active' : 'link  '}
                href={'/admin-page/add-list'}
              >
                <p className="admin-page__tab-name">Список объявлений</p>
              </Link>
            </li>
            <li>
              <Link
                className={pageName === 'complaints' ? 'link active' : 'link  '}
                href={'/admin-page/complaints'}
              >
                <p className="admin-page__tab-name">Список жалоб</p>
              </Link>
            </li>
            <li>
              <Link
                className={pageName === 'users' ? 'link active' : 'link  '}
                href={'/admin-page/users'}
              >
                <p className="admin-page__tab-name">Пользователи</p>
              </Link>
            </li>
            <li>
              <Link
                className={pageName === 'feedback' ? 'link active' : 'link  '}
                href={'/admin-page/feedback'}
              >
                <p className="admin-page__tab-name">
                  Связаться с администрацией
                </p>
              </Link>
            </li>
          </AdminPageTab>
        </Container>
      </AdminPageHeader>

      {element}
    </>
  );
};

export default AdminPageNavBar;
