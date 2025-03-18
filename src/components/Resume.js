import { Row, Col, Container } from 'react-bootstrap';

const Resume = () => {
    // Direct link to the PDF file (replace with your actual PDF link)
    const pdfUrl = "https://drive.google.com/file/d/1QAoAlj103PQ-Tu-AueurFWYLnIE0LfwU/preview";


    return (
        <Container fluid className="d-flex flex-column p-0">
            <Row className="justify-content-center m-0">
                <Col xs={12} className="d-flex flex-column align-items-center">
                    <h1 className='glow' style={{ margin: "5vh" }}>Resume</h1>
                    {/* Embedded PDF Viewer */}
                    <iframe
                        src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
                        title="Resume Preview"
                        style={{ width: "80%", height: "80vh", border: "none" }}
                        allowFullScreen
                    ></iframe>
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;
