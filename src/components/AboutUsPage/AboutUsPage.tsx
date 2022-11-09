import React from 'react';
import AboutUsPreview from './AboutUsComponents/Prewiev/AboutUsPreview';
import Search from './AboutUsComponents/Search/Search';
import Packages from './AboutUsComponents/Packages/Packages';
import Benefits from './AboutUsComponents/Benefits/Benefits';
import PersonalBusinessPage from './AboutUsComponents/PresonalBusinessPage/PersonalBusinessPage';
import Contacts from './AboutUsComponents/Contacts/Contacts';
import { AboutUsSection } from './AboutUsComponents/Prewiev/AboutUsPreview.style';

const AboutUsPage = () => {
  return (
    <AboutUsSection>
      <AboutUsPreview />
      <Search />
      <Packages />
      <Benefits />
      <PersonalBusinessPage />
      <Contacts />
    </AboutUsSection>
  );
};
export default AboutUsPage;
