import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import crafts from '../assets/arts-crafts.png'
import toys from '../assets/toy-car.png'
import blog from '../assets/blog.png'
import './Projects.css'

const Projects = () => {
    return (
        <Container style={{ paddingTop: "5rem 0" }}>
            <Row>
                <Col className='text-center my-5 '>
                    <h2 className='text-primary border-top rounded-pill border-primary border-2 d-inline pt-2 px-3'>My Projects</h2>
                </Col>
            </Row>
            <Row>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className="single-project">
                        <div className='project-img border border-primary'>
                            <img src={crafts} className='img-fluid' alt="" />
                        </div>
                        <div className='mt-4 d-flex justify-content-center gap-4'>
                            <a href="https://arts-crafts-b7e57.web.app/" target="_blank" className='btn btn-outline-primary'>Live</a>
                            <a href="https://github.com/MozammalHaq/arts-and-crafts-client" target="_blank" className='btn btn-outline-primary'>Code</a>
                            <a href="#" target="_blank" className='btn btn-outline-primary'>Server</a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className="single-project">
                        <div className='project-img border border-primary'>
                            <img src={toys} className='img-fluid' alt="" />
                        </div>
                        <div className='mt-4 d-flex justify-content-center gap-4'>
                            <a href="https://toy-car-2096a.web.app/" target="_blank" className='btn btn-outline-primary'>Live</a>
                            <a href="https://github.com/MozammalHaq/arts-and-crafts-client" target="_blank" className='btn btn-outline-primary'>Code</a>
                            <a href="#" target="_blank" className='btn btn-outline-primary'>Server</a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className="single-project">
                        <div className='project-img border border-primary'>
                            <img src={blog} className='img-fluid' alt="" />
                        </div>
                        <div className='mt-4 d-flex justify-content-center gap-4'>
                            <a href="https://lambent-taffy-e9fd63.netlify.app/" target="_blank" className='btn btn-outline-primary'>Live</a>
                            <a href="https://github.com/MozammalHaq/arts-and-crafts-client" target="_blank" className='btn btn-outline-primary'>Code</a>
                            <a href="#" target="_blank" className='btn btn-outline-primary'>Server</a>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Projects;