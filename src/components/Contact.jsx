import React, { useRef } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_unx70hb', 'template_ymzerbh', form.current, 'sFQfMdACX3uj4qmjy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <Container style={{ padding: "5rem 0" }}>
            <Row>
                <Col className='text-center my-5 '>
                    <h2 className='text-warning border-top rounded-pill border-warning border-2 d-inline pt-2 px-3'>Contact Form</h2>
                </Col>
            </Row>
            <form ref={form} onSubmit={sendEmail} className='row justify-content-center'>
                <div className='col-lg-6 col-md-6 col-sm-12 text-warning border-start rounded border-warning border-2 border-end'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Your name</label>
                        <input type="text" name="user_name" className="form-control py-2 px-4 border-warning text-warning bg-transparent rounded-pill" id="exampleFormControlInput1" placeholder="Sara Binte Mozammal" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                        <input type="email" name="user_email" className="form-control py-2 px-4 border-warning text-warning bg-transparent rounded-pill" id="exampleFormControlInput2" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea name='message' className="form-control py-2 px-4 text-warning bg-transparent border-warning rounded-pill" id="exampleFormControlTextarea1" rows="3" placeholder='Write here ..'></textarea>
                    </div>
                    <div className='text-end mt-4'>
                        <button className='btn btn-outline-warning rounded-pill'>Submit</button>
                    </div>
                </div>
            </form>
        </Container>
    );
};

export default Contact;