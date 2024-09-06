import './Contact.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { validateEmail } from '../../Utils/EmailValidator.js'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setTimeout(() =>
                alert('Please Enter A Valid Email')
                , 500)
            return;
        }

        const serviceId = 'service_7z3rq0t';
        const templateId = 'template_cq7z9hc';
        const publicKey = 'B2PCc5s-Jybuu2Tck';

        const templateParams = {
            from_name: name,
            subject: subject,
            message: message,
            email: email,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                alert(`Thank you for your message ${name}!  We will get back to you soon!`);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }
    return (
        <>
            <article id='Contact' className='contact-header-container flex justify-center w-full'>
                <h2 className='contact-header justify-items-center p-2 text-2xl lg:text-3xl my-2 lg:my-4'>Contact</h2>
            </article>
            <main className='contact-main flex flex-col items-center w-full h-auto'>
                <form onSubmit={handleSubmit} className='contact-form col-start-1 flex flex-col items-center relative w-[90%] md:w-[70%] lg:w-[50%] h-auto gap-1 my-5 rounded-2xl'>
                    <article className='form-container flex flex-col items-center gap-1 w-[90%] h-[90%] pb-5 pt-5'>
                        <input
                            className='form-input w-full'
                            type='text'
                            value={name}
                            placeholder='Your Name'
                            onChange={(e) => setName(e.target.value)}></input>
                        <input
                            className='form-input w-full'
                            type='text'
                            value={email}
                            placeholder='Your Email'
                            onChange={(e) => setEmail(e.target.value)}></input>
                        <input
                            className='form-input w-full'
                            type='text'
                            value={subject}
                            placeholder='Subject'
                            onChange={(e) => setSubject(e.target.value)}></input>
                        <textarea
                            className='form-input w-full'
                            type='text'
                            value={message}
                            rows='4'
                            cols='10'
                            placeholder='Message'
                            onChange={(e) => setMessage(e.target.value)}></textarea>
                        <article className='w-full'>
                            <button type='submit' className='submit-btn flex text-xl justify-start w-fit px-1'>Submit</button>
                        </article>
                    </article>

                </form>
            </main>
            <article className='top-btn-container flex justify-center'>
                <button onClick={() => setTimeout(() => {
                    const topButton = document.getElementById('Top');
                    topButton.scrollIntoView({ behavior: 'smooth' })
                }, 500)} className='top-btn justify-items-center p-2 text-2xl lg:text-3xl my-2 lg:my-4'>To The Top</button>
            </article>
        </>
    )
}

export default Contact