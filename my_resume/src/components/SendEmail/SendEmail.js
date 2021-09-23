import React from 'react';
import emailjs from 'emailjs-com';
import './SendEmail.css';
import { useHistory } from "react-router-dom"; 
import sendButton from '../../image/send-icon.png'
import arrow from '../../image/down-arrow-icon.jpg'

export default function SendEmail() {

    const history= useHistory();
    // const [data , setData] =React.useState({Name:'' , yourEmail:'' , subject:'', message:''});
    const [data , setData] =React.useState([,,,,]);
    // const [data , setData] =React.useState('');

    function sendEmail(e) {
        e.preventDefault();
        data[0] && data[1] && data[2] && data[3] ? alert('nice') : alert('bad result')
        
        emailjs.sendForm('gmail', 'template_b517o1n', e.target, 'user_DOD2kZ9dURw4SQOsGonND')
        .then((result) => {
            console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        history.push('/')
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <h1>Invitation for an interview ?</h1>
            <img src={arrow} className={'arrowImg'}/>
            <div>
                <label className={'gmailLabels'}>Name : </label>
                <input type="text" name="name" onChange={e=>(setData(e.target.value))} required="true" className={'gmailInput'}/>
            </div>

            <div>
                <label className={'gmailLabels'}>Your Email  : </label>
                <input type="email" name="email"  required="true" className={'gmailInput'}/>
            </div>
            <div>
                <label className={'gmailLabels'}>subject : </label>
                <input type="text" name="subject" required="true" className={'gmailInput'}/>
            </div>
            <div>
            <label className={'gmailLabels'}>Message : </label>
            <textarea name="message" required="true" className={'gmailInput'}/>
            </div>
            {/* <img className={'imgButton'} type='submit' onClick={sendEmail} src={sendButton}/> */}
            
            <input type="submit" value="Send" className={'sendButton'}/>
         </form>
    );
}