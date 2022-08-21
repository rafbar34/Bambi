import React from 'react';
import logo2 from '../assets/logo2.png';
export const Menu = ({myRefAboutsUs, myRefCooperation, myRefPartners, myRefContact}) => {
  console.log(myRefAboutsUs)
  const executeScroll = (myRef) =>{
    myRef.current.scrollIntoView({behavior: 'smooth'});
}
  return (
    <div className='h-20 w-full z-10  fixed MenuBackground text-white flex justify-between items-center rounded-b-xl '>
      <div className='w-1/4  text-4xl flex items-center justify-start pl-5'>
        {' '}
        <img width={200} className='rounded-2xl' src={logo2} alt='logo' />{' '}
      </div>
      <div className='flex justify-around  max-w-3xl space-x-4 h-14 pr-4'>
        <div
          onClick={()=>executeScroll(myRefAboutsUs)}
          className=' w-1/5  text-lg hover:scale-110 transition hover:text-white rounded-lg px-5 whitespace-nowrap py-3 '
        >
          O nas
        </div>
        <div
          onClick={()=>executeScroll(myRefCooperation)}
          className='w-1/3  text-lg hover:scale-110 transition hover:text-white rounded-lg px-5 py-3 '
        >
          Współpraca
        </div>
        <div
         onClick={()=>executeScroll(myRefPartners)}
          className=' w-1/3 text-lg hover:scale-110 transition hover:text-white rounded-lg px-5 py-3 '
        >
          Partnerzy
        </div>
        <div
          onClick={()=>executeScroll(myRefContact)}
          className='w-1/3  text-lg hover:scale-110 transition hover:text-white rounded-lg px-5 py-3 '
        >
          Kontakt
        </div>
      </div>
    </div>
  );
};
