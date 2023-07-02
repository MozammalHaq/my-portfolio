import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Skills.css'
import html from '../assets/icon/html.png'
import css from '../assets/icon/css.png'
import js from '../assets/icon/js.png'
import bootstrap from '../assets/icon/bootstrap.png'
import tailwind from '../assets/icon/tailwind.png'
import react from '../assets/icon/react.png'
import reactb from '../assets/icon/reactb.png'
import dui from '../assets/icon/dui.png'
import mui from '../assets/icon/mui.png'
import mdb from '../assets/icon/mdb.png'
import exjs from '../assets/icon/exjs.png'
import node from '../assets/icon/node.png'
import github from '../assets/icon/github.png'

const Skills = () => {
    return (
        <Container>
            <Row>
                <Col className='text-center my-5'>
                    <h2 className='text-info'>My Skills</h2>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex gap-3 flex-wrap'>
                    <div className='skill rounded-pill border flex-grow-1 d-flex p-3 mb-3 align-items-center'>
                        <img src={html} alt="" className='me-3 rounded-circle border p-2' />
                        <h3>HTML</h3>
                    </div>
                    <div className='skill rounded-pill border flex-grow-1 d-flex p-3 mb-3 align-items-center'>
                        <img src={css} alt="" className='me-3 rounded-circle border p-2' />
                        <h3>CSS</h3>
                    </div>
                    <div className='skill rounded-pill border flex-grow-1 d-flex p-3 mb-3 align-items-center'>
                        <img src={js} alt="" className='me-3 rounded-circle border p-2' />
                        <h3>JavaScript</h3>
                    </div>
                    <div className='skill rounded-pill border flex-grow-1 d-flex p-3 mb-3 align-items-center'>
                        <img src={bootstrap} alt="" className='me-3 rounded-circle border p-2' />
                        <h3>Bootstrap</h3>
                    </div>
                    <div className='skill rounded-pill border flex-grow-1 d-flex p-3 mb-3 align-items-center'>
                        <img src={tailwind} alt="" className='me-3 rounded-circle border p-2' />
                        <h3>Tailwind</h3>
                    </div>
                    <div className='skill rounded-pill border flex-grow-1 d-flex p-3 mb-3 align-items-center'>
                        <img src={react} alt="" className='me-3 rounded-circle border p-2' />
                        <h3>React</h3>
                    </div>
                    <div className='skill rounded-pill border flex-grow-1 d-flex p-3 mb-3 align-items-center'>
                        <img src={reactb} alt="" className='me-3 rounded-circle border p-2' />
                        <h3>React Bootstrap</h3>
                    </div>
                    <div className='skill rounded-pill border flex-grow-1 d-flex p-3 mb-3 align-items-center'>
                        <img src={dui} alt="" className='me-3 rounded-circle border p-2' />
                        <h3>Daisy UI</h3>
                    </div>
                    <div className='skill rounded-pill border flex-grow-1 d-flex p-3 mb-3 align-items-center'>
                        <img src={mui} alt="" className='me-3 rounded-circle border p-2' />
                        <h3>Material UI</h3>
                    </div>
                    <div className='skill rounded-pill border flex-grow-1 d-flex p-3 mb-3 align-items-center'>
                        <img src={mdb} alt="" className='me-3 rounded-circle border p-2' />
                        <h3>MongoDB</h3>
                    </div>
                    <div className='skill rounded-pill border flex-grow-1 d-flex p-3 mb-3 align-items-center'>
                        <img src={exjs} alt="" className='me-3 rounded-circle border p-2' />
                        <h3>ExpressJS</h3>
                    </div>
                    <div className='skill rounded-pill border flex-grow-1 d-flex p-3 mb-3 align-items-center'>
                        <img src={node} alt="" className='me-3 rounded-circle border p-2' />
                        <h3>Node JS</h3>
                    </div>
                    <div className='skill rounded-pill border flex-grow-1 d-flex p-3 mb-3 align-items-center'>
                        <img src={github} alt="" className='me-3 rounded-circle border p-2' />
                        <h3>GitHub</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Skills;