import React, { useEffect } from 'react';
import FrozenFood1 from '../../assets/FrozenFood1.jpg'
import FrozenFood2 from '../../assets/FrozenFood2.jpg'
import FrozenFood3 from '../../assets/FrozenFood3.jpg'
import Aos from 'aos';

export const Cooperation = ({myRef}) => {
  useEffect(() => {
    Aos.init({duration: 1400});
  }, []);
  return (
    <section ref={myRef} className='w-full min-h-screen flex pb-48 items-start'>
      <div data-aos='fade-right' className=' h-screen GlassEffect  w-9/12  flex ml-20 items-start'>
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
              <div className=' items-center mt-6 rounded-lg space-x-2 flex justify-between mr-5 w-auto  '>
                <div className='h-16 rounded-sm  max-w-[40%] '>
                  <img src={FrozenFood1} className='rounded-md' alt='sklep' />
                </div>
                <div className='h-16 max-w-[25%] '>
                  <img src={FrozenFood2} className='rounded-sm' alt='foodtruck' />
                </div>
                <div className='h-16  max-w-[25%] '>
                  <img src={FrozenFood3} className='rounded-sm' alt='szkola' />
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
