import React from 'react';
import emailjs from 'emailjs-com';
import './SendEmail.css';
import { useHistory } from "react-router-dom"; 

export default function SendEmail() {

    const history= useHistory();

    function sendEmail(e) {
        e.preventDefault();
        console.log("helllllllllllllloooooo")
        
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

            <div>
                <label className={'nameLabel'}>Name</label>
                <input type="text" name="name" />
            </div>

            <div>
                <label className={'emailLabel'}>Email</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label className={'subjectLabel'}>subject</label>
                <input type="text" name="subject" />
            </div>
            <div>
            <label className={'messageLabel'}>Message</label>
            <textarea name="message" />
            </div>
            <input type="submit" value="Send" />
        </form>
    );
}