import Image from '../assets/mozammal.png'
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';


const TopBanner = () => {

    return (
        <Container style={{paddingTop: "6rem"}}>
            <Row>
                <Col className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                    <div>
                        <div className='border-start ps-2'>
                            <h3>Assalamu Alaikum Warahmatullah</h3>
                            <p style={{ fontSize: "calc(.8rem + .6vw)" }} className='mb-4 my-2'>(May Allah's peace and blessings be upon you.)</p>
                        </div>
                        <h2 className='mb-5'>I am a Front-end <span className='text-info'>Web Developer</span></h2>
                        <Button variant="outline-info">Download resume</Button>

                    </div>
                </Col>
                <Col className="col-lg-6 col-md-6 col-sm-12 text-end">
                    <img src={Image} className='img-fluid' alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default TopBanner;