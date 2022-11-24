import React from 'react';
import { AdminPageSection } from '@/components/AdminPage/AdminPage.style';
import AdminPageNavBar from '@/components/AdminPage/AdminPageNavBar';
import ComplaintsComponent from '@/components/AdminPage/Complaints/ComplaintsComponent';





const Complaints = () => {
  return (
    <AdminPageSection>
      <AdminPageNavBar pageName={"complaints"} element={<ComplaintsComponent />}/>
    </AdminPageSection>
  );
};

export default Complaints;