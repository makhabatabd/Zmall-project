import React from 'react';
import AdminPageNavBar from '@/components/AdminPage/AdminPageNavBar';
import { AdminPageSection } from '@/components/AdminPage/AdminPage.style';
import FeedBackComponent from '@/components/AdminPage/Feedback/FeedBackComponent';

const Feedback = () => {
  return (
    <AdminPageSection>
      <AdminPageNavBar pageName={"feedback"}  element={<FeedBackComponent/>}/>
    </AdminPageSection>
  );
};

export default Feedback;