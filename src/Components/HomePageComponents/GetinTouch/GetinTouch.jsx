import '../../../Sass/HomePageSASS/GetinTouch/GetinTouch.scss';
const GetinTouch = () => {
    
  return (
    <div className='Contact-form-input-container'>
        <div className='style-image-one-form'></div>
      <div className='Contact-form-title'>
        <p className='title-for-contact-form'>Get Your First Free Online<span>Consultation</span></p>
      </div>
      <div className='Contact-form-input-fields'>
        <div className='Form-element-conatiner'>
            <div className='basic-info-form-container'>
                <div className='input-with-txt-container'>
                    <p className='input-form-txt'>Name</p>
                    <div className='input-container-form'>
                        <input type="text" placeholder='Your Name' className='input-box-form' />
                    </div>
                </div>
                <div className='input-with-txt-container'>
                    <p className='input-form-txt'>Email</p>
                    <div className='input-container-form'>
                        <input type="text" placeholder='Your Email' className='input-box-form' />
                    </div>
                </div>
                <div className='input-with-txt-container'>
                    <p className='input-form-txt'>Program</p>
                    <div className='input-container-form'>
                        <input type="text" placeholder='Program' className='input-box-form' />
                    </div>
                </div>
                <div className='input-with-txt-container'>
                    <p className='input-form-txt'>Date</p>
                    <div className='input-container-form'>
                        <input type="text" placeholder='dd/mm/yyy' className='input-box-form' />
                    </div>
                </div>
                <div className='input-with-txt-container'>
                    <p className='input-form-txt'>Phone</p>
                    <div className='input-container-form'>
                        <input type="text" placeholder='Your Mobile.No' className='input-box-form' />
                    </div>
                </div>
                <div className='input-with-txt-container'>
                    <p className='input-form-txt'>Doctor</p>
                    <div className='input-container-form'>
                        <input type="text" className='input-box-form' placeholder='Your Email'/>
                    </div>
                </div>
            </div>
            <div className='main-message-form-container'>
                <p className='para-for-text-in-form'>Message</p>
                <textarea placeholder='Your Message To us' className='text-area-for-message'></textarea>
            </div>
        </div>
        <p className='para-policy-in-form'>
Suspendisse potenti. Donec tristique dolor id sapien porttitor, rhoncus malesuada turpis ullamcorper. Sit amet mattis vulputate enim nulla aliquet</p>
        <div className='Form-submit-btn'><p>Submit</p>
        <div className='for-submit-btn-design'></div></div>
      </div>
    </div>
  )
}

export default GetinTouch
