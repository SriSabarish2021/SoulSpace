import '../../../CSS/HomePageSASS/GetinTouch/GetinTouch.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const GetinTouch = ({successsubmit}) => {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lng3tri', 'template_rn9mgjs', form.current, {
        publicKey: 'U08Tgu_MKdFnHmQj1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div id='Contact' className='Contact-form-input-container'>
        <div className="heart-img-design-one heart-one-design"></div>
        <div className="heart-img-design-one heart-two-design"></div>
        <div className="heart-img-design-one heart-three-design"></div>
        <div className="heart-img-design-one heart-four-design"></div>
        <div className="heart-img-design-one heart-five-design"></div>
        <div className="heart-img-design-one heart-six-design"></div>
        <div className="heart-img-design-one heart-seven-design"></div>
        <div className="heart-img-design-one heart-eight-design"></div>
        <div className="heart-img-design-one heart-nine-design"></div>
        <div className="heart-img-design-one heart-ten-design"></div>
        <div className="heart-img-design-one heart-eleven-design"></div>
        <div className="heart-img-design-one heart-twelve-design"></div>
        <div className="heart-img-design-one heart-13-design"></div>
        <div className="heart-img-design-one heart-14-design"></div>
        <div className="heart-img-design-one heart-15-design"></div>
        <div className="heart-img-design-one heart-16-design"></div>
        <div className='style-image-one-form '></div>
      <div className='Contact-form-title'>
        <p className='title-for-contact-form'>Get Your First Free Online<span>Consultation</span></p>
      </div>
      <form ref={form} onSubmit={sendEmail} className='Contact-form-input-fields'>
        <div className='Form-element-conatiner'>
            <div className='basic-info-form-container'>
                <div className='input-with-txt-container'>
                    <p className='input-form-txt'>Name</p>
                    <div className='input-container-form'>
                        <input name='name' type="text" placeholder='Your Name' className='input-box-form' />
                    </div>
                </div>
                <div className='input-with-txt-container'>
                    <p className='input-form-txt'>Email</p>
                    <div className='input-container-form'>
                        <input name='email' type="text" placeholder='Your Email' className='input-box-form' />
                    </div>
                </div>
                <div className='input-with-txt-container'>
                    <p className='input-form-txt'>Program</p>
                    <div className='input-container-form'>
                        <input name='program' type="text" placeholder='Program' className='input-box-form' />
                    </div>
                </div>
                <div className='input-with-txt-container'>
                    <p className='input-form-txt'>Date</p>
                    <div className='input-container-form'>
                        <input name='date' type="date" placeholder='dd/mm/yyy' className='input-box-form' />
                    </div>
                </div>
                <div className='input-with-txt-container'>
                    <p className='input-form-txt'>Phone</p>
                    <div className='input-container-form'>
                        <input name='phone' type="text" placeholder='Your Mobile.No' className='input-box-form' />
                    </div>
                </div>
                <div className='input-with-txt-container'>
                    <p className='input-form-txt'>Specific Need</p>
                    <div className='input-container-form'>
                        <select name='phone'  type="text" placeholder='Your Mobile.No' className='input-box-form'>
                          <option value="Not Choosed">--Choose--</option>
                          <option value="One-One">One-One</option>
                          <option value="Councelling">Councelling</option>
                          <option value="Emotional Support">Emotional Support</option>
                          <option value="Medication">Medication</option>
                          <option value="Motive Support">Motive Support</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='main-message-form-container'>
                <p className='para-for-text-in-form'>Message</p>
                <textarea name='message' placeholder='Your Message To us' className='text-area-for-message'></textarea>
            </div>
        </div>
        <p className='para-policy-in-form'>
Suspendisse potenti. Donec tristique dolor id sapien porttitor, rhoncus malesuada turpis ullamcorper. Sit amet mattis vulputate enim nulla aliquet</p>
        <button className='Form-submit-btn' type="submit" value="Send" onClick={()=>successsubmit()} >
            Submit
            <div className='for-submit-btn-design'></div>
        </button>
      </form>
    </div>
  )
}

export default GetinTouch
