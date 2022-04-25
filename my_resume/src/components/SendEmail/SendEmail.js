import React from 'react';
import emailjs from 'emailjs-com';
import './SendEmail.css';
import { useHistory } from "react-router-dom";
import sendButton from '../../image/send-icon.png'
import arrow from '../../image/down-arrow-icon.jpg'

export default function SendEmail() {

    const history = useHistory();
    // const [data , setData] =React.useState({Name:'' , yourEmail:'' , phone:'', message:''});
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setphone] = React.useState('');
    const [message, setMessage] = React.useState('');


    function sendEmail(e) {

        emailjs.send('gmail', 'template_b517o1n', { name, email, phone, message }, 'user_DOD2kZ9dURw4SQOsGonND')
            .then((result) => {
                console.log(result.text);
                name && email && phone && message ? alert('successfully send') : alert('you must fill all the feilds')
                history.push('/')
            }, (error) => {
                console.log(error.text);
            });
        // e.target.reset();
    }

    return (
        <form className="contact-form">
            <h1>Invitation for an interview ?</h1>
            <img alt='interview_Invitation' src={arrow} className={'arrowImg'} />
            <div>
                <label className={'gmailLabels'}>Name : </label>
                <input type="text" name="name" value={name} onChange={e => (setName(e.target.value))} required="true" className={'otherInput'} />
            </div>

            <div>
                <label className={'gmailLabels'}>Your Email  : </label>
                <input type="email" name="email" value={email} onChange={e => (setEmail(e.target.value))} required="true" className={'otherInput'} />
            </div>
            <div>
                <label className={'gmailLabels'}>Phone : </label>
                <input type="text" name="phone" value={phone} onChange={e => (setphone(e.target.value))} required="true" className={'otherInput'} />
            </div>
            <div>
                <label className={'gmailLabels'}>Message : </label>
                <textarea name="message" value={message} onChange={e => (setMessage(e.target.value))} required="true" className={'gmailInput'} placeholder='resizable'/>
            </div>
            <img alt='send_BTN' className={'imgButton'} onClick={sendEmail} src={sendButton} />
        </form >
    );
}