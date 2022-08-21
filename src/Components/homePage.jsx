import React, { useRef } from 'react';
import {Menu} from '../UIComponents/UImenu';
import {AboutUs} from './AboutUs/aboutsUs';
import { Contact } from './Contact/Contact';
import { Cooperation } from './Cooperation/Cooperation';
import { LogoPage } from './LogoPage/LogoPage';
import { Partners } from './Partners/Partners';

export const HomgePage = () => {
  const myRefAboutsUs = useRef(null)
  const myRefCooperation = useRef(null)
  const myRefPartners = useRef(null)
  const myRefContact = useRef(null)
  return (
    <div className='h-full HomeBackground w-full'>
      <Menu  myRefAboutsUs={myRefAboutsUs} myRefCooperation={myRefCooperation} myRefPartners= {myRefPartners} myRefContact={myRefContact}/>
      <LogoPage/>
      <AboutUs myRef={myRefAboutsUs} />
      <Cooperation  myRef={myRefCooperation}/>
      <Partners myRef={myRefPartners}/>
      <Contact myRef={myRefContact}/>
    </div>
  );
};
