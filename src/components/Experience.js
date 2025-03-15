import { Row, Col, Image, Container, ListGroup } from 'react-bootstrap';

const ImgCol = ({ url, imgSrc, caption, size }) => {
    return (
        <Col xs="6" sm={size} md={size} className="justify-content-center d-flex flex-column align-items-center">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="img-col-div">
                    <Image
                        className="mx-auto d-block"
                        src={imgSrc}
                        fluid
                        width="80%"
                        style={{ maxWidth: "100px" }} // Ensure consistent image size
                    />
                </div>
                <p className="text-center" style={{ height: "50px", display: "flex", alignItems: "center", justifyContent: "center", margin: "10px 0" }}>
                    {caption}
                </p>
            </a>
        </Col>
    );
};

const CveItem = ({ url, cveId, name, cvss }) => {
    return (
        <>
            <a rel="noopener noreferrer" target="_blank" href={url}>
                <b>{cveId}</b>
            </a>: CVSS {cvss} — {name}
        </>
    );
};

const Experience = () => {
    return (
        <>
            <Container>
                <h1 className='glow'>Professional Experience</h1>
                <p>
                    I am passionate about quantitative finance, algorithmic trading, and data-driven decision-making. My expertise lies in developing high-frequency trading systems, sentiment analysis engines, and portfolio optimization tools.
                </p>
                <p>
                    I specialize in Python, C++, and machine learning frameworks, with a focus on creating scalable and efficient solutions for financial markets.
                </p>
                <Container className="my-5">
                    <h2 align="center" className='glow'>Organizations I've worked in:</h2>
                    <div className="text-center">
                        View my <a href="https://www.linkedin.com/in/mohammed-sahal-4b299924a/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                    </div>
                    <hr />
                    <Row className="justify-content-center">
                        <ImgCol size="2" url="https://www.linkedin.com/company/quantumcona/" imgSrc="https://media.licdn.com/dms/image/v2/D560BAQEiKT22vHUmmQ/company-logo_100_100/company-logo_100_100/0/1708707582783/quantumcona_logo?e=1750291200&v=beta&t=in1RDbNclFbSnmIFqV17WBXoK1Ozg__jKNKVB3QBxBM" caption="Quantumcona" />
                        <ImgCol size="2" url="https://www.linkedin.com/company/appropriate-tech-solutions/" imgSrc="./img/companies/ats.png" caption="Appropriate Tech Solutions" style={{ Height: "150px" }} /> {/* Increased size by 10% */}                        <ImgCol size="2" url="tsoc.dev" imgSrc="https://media.licdn.com/dms/image/v2/C4D0BAQG68t-7fxTr3g/company-logo_100_100/company-logo_100_100/0/1678348461342?e=1750291200&v=beta&t=Nk1nEVqi-KRTXGMlHizTRqsKIPWzCtIjJ_IAtbeAklg" caption="Timechain Labs" />
                    </Row>
                    <Row className="justify-content-center">
                    <ImgCol size="2" url="https://www.linkedin.com/company/tinkerhub/" imgSrc="https://media.licdn.com/dms/image/v2/D560BAQH9dEfxje6v3w/company-logo_100_100/company-logo_100_100/0/1703247862296/tinkerhub_logo?e=1750291200&v=beta&t=VONj2UMdbGHL0jMUn4xIrh_5JgeU94FQngYybVkiWFQ" caption="TinkerHub" />

                        <ImgCol size="2" url="https://www.linkedin.com/company/spotlight-org/" imgSrc="./img/companies/spotlight.jpg" caption="Spotlight" />
                        <ImgCol size="2" url="https://www.linkedin.com/company/mark-p/" imgSrc="./img/companies/mark-P.jpg" caption="mark-P" />
                    </Row>
                    <Row className="justify-content-center my-5">
                        <p className="text-center">
                            This list is non-exhaustive and only includes public information. It does not include any private engagements.
                        </p>
                    </Row>
                </Container>

                <Container className="my-5">
                    <h2 align="center" className='glow'>Badges and Certificates</h2>
                    <hr />
                    <Row className="justify-content-center">
                        <ImgCol size="3" url="https://www.hackerrank.com/profile/mohammedsahal001" imgSrc="./img/badges/java-5star.png"
                            caption="Golden 5 Star in Java" />
                        <ImgCol size="3" url="https://www.hackerrank.com/certificates/f0190dda54ec" imgSrc="./img/certificates/Java-Hackerrank.png"
                            caption="Hackerrank Certified Java Professional" />
                        <ImgCol size="3" url="https://www.hackerrank.com/profile/mohammedsahal001" imgSrc="./img/badges/problemSolving-1star.png"
                            caption="Bronze 1 Star in Problem Solving" />
                    </Row>
                </Container>
                <Container className="my-5">
                    <h2 align="center" className='glow'>Hackathon Certificates</h2>
                    <hr />
                    <Row className="justify-content-center">
                        <ImgCol size="3" imgSrc="./img/certificates/dedsec.jpg"
                            caption=" DEDSEC CTF at Solasta ‘24" />
                    </Row>
                </Container>
                <Container className="my-5">
                    <h2 align="center" className='glow'>Git Featured Commits</h2>
                    <hr />
                    <Row className="justify-content-center">
                        <ImgCol size="7" url="https://github.com/NGcodeX/NG-java-MAX-code/pull/5#issue-1465072959" imgSrc="./img/commits/ngcodex.png"
                            caption="Created SECURITY.md, which tells the user/reader how to report a vulnerability in the repository." />
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default Experience;