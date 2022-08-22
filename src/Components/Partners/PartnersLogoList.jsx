import React from 'react';
import algida from '../../assets/Algida.png';
import koral from '../../assets/Koral.png';
import taurus from '../../assets/Taurus.jpg';
import aviko from '../../assets/Aviko.png';
import abel from '../../assets/Abel.png';
import dr from '../../assets/Dr.png';
import fanex from '../../assets/Fanex.png';
import frost from '../../assets/Frost.jpg';
import hortex from '../../assets/Hortex.png';
import jawo from '../../assets/Jawo.png';
import konspol from '../../assets/Konspol.png';
import morex from '../../assets/Morex.png';
import nestle from '../../assets/Nestle.png';
import swisspol from '../../assets/Swisspol.png';

export const PartnersLogoList = () => {
  const LogoData = {
    logo: [
      algida,
      koral,
      taurus,
      aviko,
      abel,
      dr,
      fanex,
      frost,
      hortex,
      jawo,
      konspol,
      morex,
      nestle,
      swisspol,
    ],
  };
  return (
    <div className='w-full h-full flex justify-center'>
    <div className='w-3/4 min-h-[85%]  flex space-x-7 flex-wrap justify-around pt-5'>
      {LogoData.logo.map((logo) => {
        return (
          <div className='w-20 ml-5 flex items-center'>
            {' '}
            <img src={logo} className='rounded-md' />
          </div>
        );
      })}
    </div></div>
  );
};
