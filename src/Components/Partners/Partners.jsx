import React, { useEffect } from 'react';
import partners from '../../assets/partners.png';
import algida from '../../assets/Algida.png';
import koral from '../../assets/Koral.png';
import zielona from '../../assets/Taurus.jpg';
import aviko from '../../assets/Aviko.png';
import Aos from 'aos';
import { PartnersLogoList } from './PartnersLogoList';

export const Partners = ({ myRef }) => {
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);
  return (
    <section ref={myRef} className='flex items-center w-full pb-16 min-h-[85%] mt-24 justify-end'>
      <div 
        className='h-screen w-9/12 mr-24 flex items-center'
      >
        <div data-aos='fade-left' className='h-auto w-full mr-1  rounded-lg GlassEffect flex-col flex items-center'>
          <div  className='h-1/5 text-4xl flex-col flex items-center justify-center w-full pt-9'>
            Partnerzy
            <div className='w-36 py-3'>
              {' '}
              <img className='rounded-lg' src={partners} />
            </div>
          </div>
          <div className=' flex w-full justify-center'>
            <div className='ml-5 bg-opacity-40 h-[150%] w-full rounded-lg mr-4 p-5'>
              <div className='w-full text-xl flex justify-center'>
                Naszymi parnterami z którymi prowadzimy długoletnią współpracę
                są :
              </div>
              <PartnersLogoList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
