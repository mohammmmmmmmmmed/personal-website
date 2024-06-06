import { Row, Col, Image, Container } from 'react-bootstrap';

const ImgCol = ({ url, imgSrc, caption, size }) => {
    return (
        <Col xs={12} className="d-flex flex-column align-items-center">
            <h1 className='glow' style={{ margin: "5vh" }}>{caption}</h1> {/* Added margin-top to the caption */}
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Image 
                    className="mx-auto d-block"
                    src={imgSrc}
                    style={{ width: "30%", height: "auto" }} 
                />
            </a>
        </Col>
    );
}

const Resume = () => {
    return (
        <Container fluid className="d-flex flex-column p-0">
            <Row className="justify-content-center m-0">
                <ImgCol url="https://mohammed-sahal.tiiny.site/" caption="Resume" imgSrc="./img/companies/resume.jpg" />
            </Row>
        </Container>
    );
}

export default Resume;
