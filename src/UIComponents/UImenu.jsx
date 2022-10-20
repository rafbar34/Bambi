import React from 'react';
import logo2 from '../assets/logo2.png';
export const Menu = ({myRefAboutsUs, myRefCooperation, myRefPartners, myRefContact}) => {
  const executeScroll = (myRef) =>{
    console.log(myRef)
    myRef.current.scrollIntoView({behavior: 'smooth', block: "center"});
}
  return (
    <div className='h-20 w-full z-10  fixed MenuBackground text-white flex justify-between items-center rounded-b-xl '>
      <div className='w-0 md:w-1/4   text-4xl flex items-center justify-start'>
        {' '}
        <img width={200} className='rounded-2xl' src={logo2} alt='logo' />{' '}
      </div>
      <div className='flex justify-around space-x-2 w-full  px-6 h-14 '>
        <div
          onClick={()=>executeScroll(myRefAboutsUs)}
          className=' w-1/5 text-sm sm:text-xl  hover:scale-110 transition hover:text-white rounded-lg  whitespace-nowrap py-3 '
        >
          O nas
        </div>
        <div
          onClick={()=>executeScroll(myRefCooperation)}
          className='w-1/3 text-sm sm:text-xl hover:scale-110 transition hover:text-white rounded-lg  py-3 '
        >
          Współpraca
        </div>
        <div
         onClick={()=>executeScroll(myRefPartners)}
          className=' w-1/3 text-sm sm:text-xl hover:scale-110 transition hover:text-white rounded-lg  py-3 '
        >
          Partnerzy
        </div>
        <div
          onClick={()=>executeScroll(myRefContact)}
          className='w-1/3 text-sm sm:text-xl  hover:scale-110 transition hover:text-white rounded-lg  py-3 '
        >
          Kontakt
        </div>
      </div>
    </div>
  );
};
