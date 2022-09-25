import Aos from 'aos';
import React, { useEffect } from 'react';

export const AboutUs = ({ myRef, myRefIntoForm }) => {
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);
  const executeScroll = (myRefIntoForm) => {
    myRefIntoForm.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <div ref={myRef} className=' min-h-screen h-auto pr-20 pl-20 w-full flex items-start'>
        <div data-aos='fade-up' className='h-auto  min-h-[75%] min-w-fit w-full mt-14 GlassEffect flex-col flex items-center'>
          <div className='h-1/5 text-4xl flex justify-center w-full mt-9'>
            <h4>O nas</h4>
          </div>
          <div className=' flex'>
            <div className='flex justify-center items-center h-3/4 w-full'>
              <div className=' mr-5  h-auto rounded-lg ml-2 p-5'>
                <div className='h-auto space-y-2 text-2xl px-14 text-center'>
                  <span className='font-bold text-2xl px-5 text-center '>
                    Bambi jest profesjonalną hurtownią zaopatrującą sklepy detaliczne i punkty gastronomiczne w żywność, prowadzącą swoją działalność na terenie województwa podkarpackiego, świętokrzyskiego i małopolskiego.
                  </span>
                  <p className='text-gray-700 text-xl py-5'>
                    Nasza firma jest prężnie rozwijającą się hutrownią zajmującą
                    się dystrybucją produktów takich jak: warzywa mrożone , owoce
                    mrożone, ryby mrożone, sosy, frytki, lody, sorbety, mrożone
                    wyroby mięsne, etc. Dzięki zdobytemu  doświadczeniu
                    w branży produktów mrożonych  jesteśmy zawsze
                    w stanie  doradzić Państwu jak najlepszy wybór  w zakresie
                    odpowiednich produktów będących przedmiotem naszej sprzedaży.
                    Jesteśmy przekonani, że szeroki asortyment, ich
                    wspaniały smak oraz bardzo atrakcyjne ceny w pełni
                    zadowolą Państwa potrzeby i oczekiwania. Jednocześnie
                    bez obaw podejmujemy nowe wyzwania i rozbudowujemy naszą ofertę
                    zawsze biorąc pod uwagę opinię oraz sugestię klientów. Do
                    Państwa dyspozycji pozostaje profesjonalna kadra z wieloletnim
                    doświadczeniem.
                  </p>
                  <div className='w-full flex items-center justify-center'>
                    <div onClick={() => executeScroll(myRefIntoForm)} className='border-2 mt-4 rounded-3xl MenuBackground px-4 text-xl py-1 text-white min-w-1/3'><button>Zapraszamy do współpracy</button></div>
                  </div></div>
              </div>
            </div>
            {/* <div className=' items-center rounded-lg  flex justify-center mb-12 ml-5 w-1/2 h-96 border-black'>
            <img
              className='rounded-xl border-2'
              width={800}
              height={400}
              src=''
              alt='budynek'
            />
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
