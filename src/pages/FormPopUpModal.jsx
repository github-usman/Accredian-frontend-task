import React, { useState } from 'react';
import refer_form_img from "../assets/media/Refer_form_images.png";
import warning from "../assets/media/warning.png";
import cross from "../assets/media/cross.svg";
import { useModalContext } from '../context/ModalContext';
import { referFriend } from '../services/referral.api';

const FormPopUpModal = () => {
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [referrerPhone, setReferrerPhone] = useState('');
  const [refereeName, setRefereeName] = useState('');
  const [refereeEmail, setRefereeEmail] = useState('');
  const [refereePhone, setRefereePhone] = useState('');
  const [errors, setErrors] = useState({});
  const { toggleModal,setLoading,setFailed,setSuccesstLoading } = useModalContext();

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // validation error
    const newErrors = {};
    if (referrerName === '') newErrors.referrerName = "Name is required";
    if (referrerEmail === '' || !referrerEmail.match(emailRegex)) newErrors.referrerEmail = "Valid email is required";
    if (referrerPhone.length<10) newErrors.referrerPhone = "Valid phone number is required";
    if (refereeName === '') newErrors.refereeName = "Friend's name is required";
    if (refereeEmail === '' || !refereeEmail.match(emailRegex)) newErrors.refereeEmail = "Valid email is required";
    if (refereePhone.length<10)  newErrors.refereePhone = "valid phone number is required";
    if (refereeEmail === referrerEmail) newErrors.refereeEmail = "Your email and your friend email should be diffrent";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading((val)=>!val)
    } else {
      setErrors({});
      const referalData = {
        referrerName,
        referrerEmail,
        referrerPhone,
        refereeName,
        refereeEmail,
        refereePhone,
      };
      try {
        const response = await referFriend(referalData);
        
        if (response.success) {
          toggleModal()
          setLoading((val)=>!val); // success loading spineer off
          setSuccesstLoading((val)=>!val);
        }else {
          setLoading((val)=>!val); // response promise resolve loading spineer off
          setFailed(response.message); // failed due some reason
        }
      } catch (error) {
        setLoading((val)=>!val); // response promise resolve loading spineer off
        setFailed('server issue please try again'); // failed due some reason
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000080] bg-opacity-70 overflow-x-scroll z-50">
      <div className="bg-white shadow-md max-w-[882px] w-[95%] lg:w-full  relative rounded-xl grid grid-cols-1-1 md:grid-cols-2 items-center">
        <button className='absolute ml-5 text-black right-0 top-[-40px] w-8 h-8 rounded-md bg-white' onClick={toggleModal}><img src={cross} alt='close button' /></button>
        <img src={refer_form_img} className='rounded-xl hidden md:block w-[80%] m-auto h-auto' alt='refer image' />
        <div className='shadow-lg py-5 px-5 '>
          <h3 className="text-2xl font-bold bg-inherit text-dblue text-center">Refer a Friend!</h3>
          <form className='mt-1 text-[14px] flex flex-col lg:px-8' onSubmit={handleSubmit}>
            <input type='text' autoComplete='off' placeholder='Your Name (required)' className='focus:outline-none focus:border-dblue border-[#dfdada] border-b-2 p-2' onChange={(e) => setReferrerName(e.target.value)} value={referrerName} />
            <p className={`text-[12px] text-[red] opacity-${errors.referrerName ? '100' : '0'} flex items-center gap-1 ps-2`}><img src={warning} className='h-[10px] w-[10px]' alt='warning' /> {errors.referrerName}</p>
            <input type='email' autoComplete='off' placeholder='Email (required)' className='focus:outline-none focus:border-dblue border-[#dfdada] border-b-2 p-2' onChange={(e) => setReferrerEmail(e.target.value)} value={referrerEmail} />
            <p className={`text-[12px] text-[red] opacity-${errors.referrerEmail ? '100' : '0'} flex items-center gap-1 ps-2`}><img src={warning} className='h-[12px] w-[12px]' alt='warning' /> {errors.referrerEmail}</p>
            <input type='text' autoComplete='off' placeholder='Phone (required)' className='focus:outline-none focus:border-dblue border-[#dfdada] border-b-2 p-2' onChange={(e) => setReferrerPhone(e.target.value)} value={referrerPhone} />
            <p className={`text-[12px] text-[red] opacity-${errors.referrerPhone ? '100' : '0'} flex items-center gap-1 ps-2`}><img src={warning} className='h-[12px] w-[12px]' alt='warning' /> {errors.referrerPhone}</p>
            <input type='text' autoComplete='off' placeholder='Your Friend Name (required)' className='focus:outline-none focus:border-dblue border-[#dfdada] border-b-2 p-2' onChange={(e) => setRefereeName(e.target.value)} value={refereeName} />
            <p className={`text-[12px] text-[red] opacity-${errors.refereeName ? '100' : '0'} flex items-center gap-1 ps-2`}><img src={warning} className='h-[12px] w-[12px]' alt='warning' /> {errors.refereeName}</p>
            <input type='email' autoComplete='off' placeholder='Friend Email (required)' className='focus:outline-none focus:border-dblue border-[#dfdada] border-b-2 p-2' onChange={(e) => setRefereeEmail(e.target.value)} value={refereeEmail} />
            <p className={`text-[12px] text-[red] opacity-${errors.refereeEmail ? '100' : '0'} flex items-center gap-1 ps-2`}><img src={warning} className='h-[12px] w-[12px]' alt='warning' /> {errors.refereeEmail}</p>
            <input type='text' autoComplete='off' placeholder='Friend Phone (required)' className='focus:outline-none focus:border-dblue border-[#dfdada] border-b-2 p-2' onChange={(e) => setRefereePhone(e.target.value)} value={refereePhone} />
            <p className={`text-[12px] text-[red] opacity-${errors.refereePhone ? '100' : '0'} flex items-center gap-1 ps-2`}><img src={warning} className='h-[12px] w-[12px]' alt='warning' /> {errors.refereePhone}</p>
            <p className='text-[12px] text-center py-2'>By submitting the form, you agree to our <span className='text-dblue'>Terms and Conditions</span> and our <span className='text-dblue'>Privacy Policy</span></p>
            <button type='submit' className='w-full bg-dblue text-white text-[15px] rounded-lg font-bold py-2 referal__benefits__shadow__all_program'>Start Referring</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormPopUpModal;
