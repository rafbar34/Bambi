import React, { useEffect } from 'react';
import FrozenFood1 from '../../assets/FrozenFood1.jpg'
import FrozenFood2 from '../../assets/FrozenFood2.jpg'
import FrozenFood3 from '../../assets/FrozenFood3.jpg'
import Aos from 'aos';

export const Cooperation = ({ myRef }) => {
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);
  return (
    <section ref={myRef} className='w-full min-h-screen h-auto mt-24  flex items-center'>
      <div data-aos='fade-right' className=' min-h-[95%]  GlassEffect  w-9/12  flex ml-14 items-start'>
        <div  className=' w-full mt-9 rounded-lg  flex-col flex items-center'>
          <div className='h-1/2 text-4xl pb-5 flex justify-center w-full'>
            <h4>Współpraca</h4>
          </div>
          <div className='ml-5 bg-opacity-40 h-full px-8 sm:px-14  rounded-lg mr-4 m-2'>
            <div className='text text-xl center pb-5'>
              <ul className=' font-bold text-xl sm:text-2xl'>
                {' '}
                Zaopatujemy w najwyższej jakości produkty  takie obiekty jak:{' '}
              </ul>
              <li className='pt-2'>sklepy lokalne, </li> 
              <li>sklepy sieciowe,</li>
              <li>markety,</li>
              <li>restauracje, </li>
              <li>restauracje typu fastfood,</li> <li>szkoły,</li>{' '}
              <li>przedszkola,</li>
              <li>lodziarnie</li>
              <p className='pt-1'>Staramy się utrzymywać długie i obustronne
                korzystne współprace.</p>
            </div>
            <div className=' items-center  rounded-lg space-x-2 flex justify-between mr-5 w-auto  '>
              <div className='h-auto rounded-sm  max-w-[40%] '>
                <img src={FrozenFood1} className='rounded-md' alt='sklep' />
              </div>
              <div className='h-auto max-w-[25%] '>
                <img src={FrozenFood2} className='rounded-sm' alt='foodtruck' />
              </div>
              <div className='h-auto max-w-[25%] '>
                <img src={FrozenFood3} className='rounded-sm' alt='szkola' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
