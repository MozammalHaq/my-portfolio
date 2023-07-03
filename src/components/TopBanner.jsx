import Image from '../assets/mozammal.png'
import Button from 'react-bootstrap/Button';
import { Container, Row } from 'react-bootstrap';
import { fadeIn } from 'react-animations'


const TopBanner = () => {

    const handleDownload = async () => {
        const fileUrl = '/src/assets/resume.pdf';

        try {
            const response = await fetch(fileUrl);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'resume.pdf'; 
            link.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading the file:', error);
        }
    };

    return (
        <Container style={{ padding: "6rem 0 4rem 0" }}>
            <Row>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                    <div>
                        <div className='border-top rounded-pill px-3 pt-2 text-center'>
                            <h3>Assalamu Alaikum Warahmatullah</h3>
                            <p style={{ fontSize: "calc(.8rem + .6vw)" }} className='mb-4 my-2'>(May Allah's peace and blessings be upon you.)</p>
                        </div>
                        <h2 className='mb-5 border-bottom border-3 rounded-pill text-center px-3 pb-2'>I am a Front-end <span className='text-info' style={fadeIn}>Web Developer</span></h2>
                        <div className='text-center'>
                            <Button onClick={handleDownload} variant="outline-info rounded-pill">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-download" viewBox="0 0 16 16">
                                    <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                                    <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
                                </svg>
                                <span className='ms-2'>resume</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                    <img src={Image} className='img-fluid rounded' alt="" />
                </div>
            </Row>
        </Container>
    );
};

export default TopBanner;