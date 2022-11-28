import React from 'react';
import AdminPageNavBar from '@/components/AdminPage/AdminPageNavBar';
import { AdminPageSection } from '@/components/AdminPage/AdminPage.style';
import UserListComponent from '@/components/AdminPage/UserList/UserListComponent';

const Users = () => {
  return (
    <AdminPageSection>
      <AdminPageNavBar pageName={"users"} element={<UserListComponent/>}/>
    </AdminPageSection>
  );
};

export default Users;