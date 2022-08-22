import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import logo from '../../assets/logo.png'
export const LogoPage = () => {
  useEffect(() => {
    Aos.init({duration: 1400});
  }, []);
  return (
    <header className='h-screen w-full'>
      <main  className='w-full h-screen flex items-center justify-center text-8xl'>
        <section data-aos='fade-up' data-aos-anchor-placement='center-up'>
         <img className='rounded-xl' src={logo} alt='logo'/>
        </section>
      </main>
    </header>
  );
};
