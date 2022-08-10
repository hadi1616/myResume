import React from 'react';
import emailjs from 'emailjs-com';
import './SendEmail.css';
import { useHistory } from "react-router-dom";
import sendButton from '../../image/send-icon.png'
import arrow from '../../image/down-arrow-icon.jpg'


export default function SendEmail() {

    const history = useHistory();
    const [myData , setData] =React.useState({Name:'' , yourEmail:'' , phone:'', message:''});
    const [invitation ,setInvitation] =React.useState('Invitation for an interview ?')


    function sendEmail(e) {

        emailjs.send('gmail', 'template_b517o1n', {myData}, 'user_DOD2kZ9dURw4SQOsGonND')
            .then((result) => {
                console.log(result.text);
                myData.Name && myData.yourEmail && myData.phone && myData.message ? alert('successfully send') : alert('you must fill all the feilds')
                history.push('/')
            }, (error) => {
                console.log(error.text);
            });
        // e.target.reset();
    }

    return (
        <form className="contact-form">
            <h1>{invitation}</h1>
            <img alt='interview_Invitation' src={arrow} className={'arrowImg'} />
            <div>
                <label className={'gmailLabels'}>Name : </label>
                <input type="text" name="name" value={myData.Name} onChange={e => (setData(myData.Name(e.target.value)))} required="true" className={'otherInput'} />
            </div>

            <div>
                <label className={'gmailLabels'}>Your Email  : </label>
                <input type="email" name="email" value={myData.yourEmai} onChange={e => (setData(myData.yourEmai(e.target.value)))} required="true" className={'otherInput'} />
            </div>
            <div>
                <label className={'gmailLabels'}>Phone : </label>
                <input type="text" name="phone" value={myData.phone} onChange={e => (setData(myData.phone(e.target.value)))} required="true" className={'otherInput'} />
            </div>
            <div>
                <label className={'gmailLabels'}>Message : </label>
                <textarea name="message" value={myData.message} onChange={e => (setData(myData.message(e.target.value)))} required="true" className={'gmailInput'} placeholder='resizable' />
            </div>
            <img alt='send_BTN' className={'imgButton'} onClick={sendEmail} src={sendButton} />
        </form >
    );
}



    // const [name, setName] = React.useState('');
    // const [email, setEmail] = React.useState('');
    // const [phone, setphone] = React.useState('');
    // const [message, setMessage] = React.useState('');