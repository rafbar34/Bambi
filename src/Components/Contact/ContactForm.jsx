import {useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {useState} from 'react';
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();
  const [responseCode, setCodeResponse] = useState();
  console.log( process.env.REACT_APP_SERVICE_ID)
  const onSubmit = async (data) => {
    const {name, email, subject, message} = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      const response = await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      setCodeResponse(response.status);
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='flex flex-col'>
          <div className='flex text-center'>
            <div className='w-full'>
              <form
                id='contact-form'
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 of form */}
                <div className='flex flex-col'>
                  <div className='flex flex-col'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Proszę wpisać nazwę',
                        },
                        maxLength: {
                          value: 30,
                          message: 'proszę wprowadzić mniej niż 30 znaków',
                        },
                      })}
                      className='border-2 h-10 mb-2 pl-5 mt-2 border-gray-400 rounded-3xl'
                      placeholder='Nazwa'
                    ></input>
                    {errors.name && (
                      <span className='text-red-400'>
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className='flex flex-col'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className='border-2 h-10 mb-2 pl-5 mt-2 border-gray-400 rounded-3xl'
                      placeholder='Email'
                    ></input>
                    {errors.email && (
                      <span className='text-red-400'>
                        Proszę wpisać aktualny adres e-mail
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='flex flex-col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Proszę wprowadzić temat wiadomości',
                        },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters',
                        },
                      })}
                      className='border-2 h-10 mb-2 mt-2 pl-5 2 border-gray-400 rounded-3xl'
                      placeholder='Temat'
                    ></input>
                    {errors.subject && (
                      <span className='text-red-400'>
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='flex flex-col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true,
                        
                      })}
                      className='border-2 max-h-24 h-24 mb-2 pt-2 pl-5 mt-2 border-gray-400 rounded-3xl'
                      placeholder='Wiadomość'
                      maxLength={700}
                    ></textarea>
                    {errors.message && (
                      <span className='text-red-400'>
                        Proszę wpisać wiadomość
                      </span>
                    )}
                  </div>
                  <div className='text-xs w-full text-right pl-7 text-gray-500'> max 700 znaków</div>
                </div>
                {responseCode && responseCode === 200 ? (
                  ''
                ) : (
                  <div className='border-2 mt-12 rounded-3xl MenuBackground '>
                    <button className='submit-btn py-2 font-bold text-white' type='submit'>
                      Wyślij
                    </button>
                  </div>
                )}
              </form>
              {responseCode && responseCode === 200 ? 'Succes' : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
