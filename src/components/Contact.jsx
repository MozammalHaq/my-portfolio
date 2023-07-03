import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container style={{ padding: "5rem 0" }}>
            <Row>
                <Col className='text-center my-5 '>
                    <h2 className='text-warning border-top rounded-pill border-warning border-2 d-inline pt-2 px-3'>Contact Form</h2>
                </Col>
            </Row>
            <div className='row justify-content-center'>
                <div className='col-lg-6 col-md-6 col-sm-12 text-warning border-start rounded border-warning border-2 border-end'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Your name</label>
                        <input type="text" className="form-control py-2 px-4 border-warning text-warning bg-transparent rounded-pill" id="exampleFormControlInput1" placeholder="Sara Binte Mozammal" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                        <input type="email" className="form-control py-2 px-4 border-warning text-warning bg-transparent rounded-pill" id="exampleFormControlInput2" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control py-2 px-4 text-warning bg-transparent border-warning rounded-pill" id="exampleFormControlTextarea1" rows="3" placeholder='Write here ..'></textarea>
                    </div>
                    <div className='text-end mt-4'>
                        <Button variant="outline-warning rounded-pill">Submit</Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Contact;