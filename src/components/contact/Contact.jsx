
import React, {useRef, useState} from 'react'
import message from '../../assets/message.png'
import emailjs from '@emailjs/browser';

import './style.css'

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_cjqxg8j', 'template_07mmvvi', form.current, 'rO7IYLvpqgZ-mDMHv')
      .then((result) => {
          setFormData({
            email: '',
            subject: '',
            message: ''
         })
         setLoading(false)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='formArea' id='contactArea'>
        <h1 className='contactHeader'>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
            <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" name='user_email' placeholder='Enter You email' required/>
            <input value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} type="text" name='subject' placeholder='Subject' />
            <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} name="message" placeholder='Type in Your Message'></textarea>
            <button className='submitButton'>
              {
                loading ? 'Sending...' : <img src={message} alt="send-message" className='send-message'/>
              }
            </button>
        </form>
    </div>
  )
}

export default Contact