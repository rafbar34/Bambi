import React from 'react';
import ContactForm from './ContactForm';
import phone from '../../assets/phone.png';
import phone2 from '../../assets/phone2.png';
import email from '../../assets/mail.png';
import home from '../../assets/home.png';
export const Contact = ({ myRef }) => {
  return (
    <section ref={myRef} className='h-screen w-full flex items-start'>
      <div className='h-auto w-full mt-28 GlassEffect flex-col flex items-center'>
        <div className='h-1/5 mb-7 text-4xl flex justify-center w-full mt-9'>
          Kontakt
        </div>
        <div className=' w-full space-y-10 flex flex-col flex-wrap justify-center items-center pr-10 pl-10'>
          <div className='flex min-w-[67%] justify-center items-center- w-1/2 h-3/4 '>
            <div className='w-full text-xl bg-white rounded-lg p-5'>
              <div className=' h-auto text-xl'>
                <p>Możesz się z nami skontaktować przez:</p>
                <p className='pt-5 flex'>
                  email: bok@phbambi.pl{' '}
                  <img className='ml-8' width={25} src={email} />
                </p>
                <p className='pt-5 flex'>
                  telefon: 146811892{' '}
                  <img className='ml-5' width={25} src={phone} />
                </p>
                <p className='pt-5 flex'>
                  telefon: 508191070{' '}
                  <img className='ml-5' width={25} src={phone2} />
                </p>
                <p className='pt-5 flex'>
                  Adres: Drogowców 10B, 39-200 Dębica{' '}
                  <img className='ml-6' width={25} src={home} />
                </p>
              </div>
            </div>
          </div>
          <div className=' border-2 mb-5 w-2/3 shadow-2xl mr-5 bg-white h-auto rounded-lg ml-4 p-5'>
            Wypełnić formularz, a my się odezwiemy
            <div className=''>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
