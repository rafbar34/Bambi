import React, { useEffect } from 'react';
import shops from '../../assets/shops.png';
import fastFood from '../../assets/fastFood.png';
import schools from '../../assets/schools.png';
import icesShops from '../../assets/iceshop.png';
import Aos from 'aos';

export const Cooperation = ({myRef}) => {
  useEffect(() => {
    Aos.init({duration: 1400});
  }, []);
  return (
    <div ref={myRef} className='w-full min-h-screen flex pb-48 items-center'>
      <div data-aos='fade-right' className=' min-h-[80%] h-auto GlassEffect  w-9/12  flex ml-20 items-center'>
        <div className='h-auto w-full mt-9 rounded-lg  flex-col flex items-center'>
          <div className='h-1/5 text-4xl pb-5 flex justify-center w-full'>
            Współpraca
          </div>
            <div className='ml-5 bg-opacity-40 h-[130%] rounded-lg mr-4 p-5'>
              <div className='text text-xl center'>
                <ul className='pb-5 font-bold text-2xl'>
                  {' '}
                  Zaopatujemy w najwyższej jakości produkty  takie obiekty jak:{' '}
                </ul>
                <li>małe lokalne, </li> <li>sklepiki,</li>
                <li> markety,</li>
                <li>restauracje, </li>
                <li>restauracje typu fastfood,</li> <li>szkoły,</li>{' '}
                <li>przedszkola,</li>
                <li>lodziarnie</li>
                <p className='pt-5'>Staramy się utrzymywać długie i obustronne
                korzystne współprace.</p>
              </div>
              <div className=' items-start rounded-lg flex justify-between mr-5 w-auto  '>
                <div className='h-16  max-w-[10%] pt-2'>
                  <img src={shops} alt='sklep' />
                </div>
                <div className='h-16 max-w-[7%] mb-5'>
                  <img src={fastFood} alt='foodtruck' />
                </div>
                <div className='h-16  max-w-[10%] pt-5'>
                  <img src={schools} alt='szkola' />
                </div>
                <div className='h-16  max-w-[7%]'>
                  <img src={icesShops} alt='lodziarnia' />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
