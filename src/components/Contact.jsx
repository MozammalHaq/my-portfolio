import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container>
            <Row>
                <Col className='text-center my-5'>
                    <h2 className='text-info'>Contact Form</h2>
                </Col>
            </Row>
            <Row>
                <div className='w-50 mx-auto'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Your name</label>
                        <input type="text" class="form-control py-2 px-4 text-white bg-transparent rounded-pill" id="exampleFormControlInput1" placeholder="Sara Binte Mozammal" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput2" class="form-label">Email address</label>
                        <input type="email" class="form-control py-2 px-4 text-white bg-transparent rounded-pill" id="exampleFormControlInput2" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control py-2 px-4 text-white bg-transparent border-warning rounded-pill" id="exampleFormControlTextarea1" rows="3" placeholder='Write here ..'></textarea>
                    </div>
                    <div className='text-end mt-4'>
                        <Button variant="outline-info rounded-pill">Submit</Button>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Contact;