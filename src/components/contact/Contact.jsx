import React from 'react'
import './style.css'

const Contact = () => {
  return (
    <div className='formArea' id='contactArea'>
        <h1 className='contactHeader'>Contact Me</h1>
        <form>
            <input type="email" name='mail' placeholder='Enter You email' required/>
            <input type="text" name='subject' placeholder='Subject' />
            <textarea name="content" placeholder='Type in Your Message'></textarea>
            <button className='submitButton'>Send Mail</button>
        </form>
    </div>
  )
}

export default Contact