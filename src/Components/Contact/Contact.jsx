import React from 'react';
import ContactForm from './ContactForm';
import phone from '../../assets/phone.png';
import phone2 from '../../assets/phone2.png';
import email from '../../assets/mail.png';
import home from '../../assets/home.png';
export const Contact = ({ myRef, myRefIntoForm }) => {
  return (
    <section ref={myRef} className='min-h-screen mb-14 w-full mt-24 flex items-center'>
      <div className='h-auto w-full mt-28 GlassEffect flex-col flex items-center'>
        <div className='h-1/5 mb-7  text-4xl flex justify-center w-full mt-9'>
          <h4>Kontakt</h4>
        </div>
        <div className=' w-full space-y-10 mb-5 flex flex-col flex-wrap justify-center items-center pr-10 pl-10'>
          <div className='flex min-w-[67%] justify-center items-center- w-1/2 h-3/4 '>
            <div className='w-full text-xl bg-white rounded-lg p-5'>
              <div className=' h-auto text-xl'>
                <p>Możesz się z nami skontaktować przez:</p>
                <p className='pt-5 flex'>
                  email: bok@phbambi.pl{' '}
                  <img className='ml-5' width={25} src={email} />
                </p>
                <p className='pt-5 flex'>
                  telefon: 14 681 18 92{' '}
                  <img className='ml-5' width={25} src={phone} />
                </p>
                <p className='pt-5 flex'>
                  telefon: 508 191 070{' '}
                  <img className='ml-5' width={25} src={phone2} />
                </p>
                <p className='pt-5 flex'>
                  Adres: Drogowców 10B, 39-200 Dębica
                  <p className=''>
                  <img className='ml-4 mr-5' width={25} src={home} /></p>
                </p>
              </div>
            </div>
          </div>
          <div className=' border-2 mb-5 w-2/3 shadow-2xl mr-5 bg-white h-auto rounded-lg ml-4 p-5'>
            Wypełnić formularz, a my się odezwiemy
            <div ref={myRefIntoForm} className=''>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
