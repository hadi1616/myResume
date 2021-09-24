import React from 'react';
import emailjs from 'emailjs-com';
import './SendEmail.css';
import { useHistory } from "react-router-dom";
import sendButton from '../../image/send-icon.png'
import arrow from '../../image/down-arrow-icon.jpg'

export default function SendEmail() {

    const history = useHistory();
    // const [data , setData] =React.useState({Name:'' , yourEmail:'' , subject:'', message:''});
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');


    function sendEmail(e) {

        emailjs.send('gmail', 'template_b517o1n', { name, email, subject, message }, 'user_DOD2kZ9dURw4SQOsGonND')
            .then((result) => {
                console.log(result.text);
                name && email && subject && message ? alert('successfully send') : alert('you must fill all the feilds')
                history.push('/')
            }, (error) => {
                console.log(error.text);
            });
        // e.target.reset();
    }

    return (
        <form className="contact-form">
            <h1>Invitation for an interview ?</h1>
            <img src={arrow} className={'arrowImg'} />
            <div>
                <label className={'gmailLabels'}>Name : </label>
                <input type="text" name="name" value={name} onChange={e => (setName(e.target.value))} required="true" className={'gmailInput'} />
            </div>

            <div>
                <label className={'gmailLabels'}>Your Email  : </label>
                <input type="email" name="email" value={email} onChange={e => (setEmail(e.target.value))} required="true" className={'gmailInput'} />
            </div>
            <div>
                <label className={'gmailLabels'}>subject : </label>
                <input type="text" name="subject" value={subject} onChange={e => (setSubject(e.target.value))} required="true" className={'gmailInput'} />
            </div>
            <div>
                <label className={'gmailLabels'}>Message : </label>
                <textarea name="message" value={message} onChange={e => (setMessage(e.target.value))} required="true" className={'gmailInput'} />
            </div>
            <img className={'imgButton'} onClick={sendEmail} src={sendButton} />
        </form >
    );
}