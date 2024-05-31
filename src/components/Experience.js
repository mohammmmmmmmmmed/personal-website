import { Row, Col, Image, Container, ListGroup } from 'react-bootstrap';

const ImgCol = ({url, imgSrc, caption, size}) => {
    return (
        <Col xs="6" sm={size} md={size} className="justify-content-center d-flex flex-column">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="img-col-div">
                    <Image 
                        className="mx-auto d-block"
                        src={imgSrc} fluid width="80%"
                    />
                </div>
                <p align="center">{caption}</p>
            </a>
        </Col>
    )
}

const CveItem = ({url, cveId, name, cvss}) => {
    return (
        <>
        <a rel="noopener noreferrer" target="_blank" href={url}>
            <b>{cveId}</b>
        </a>: CVSS {cvss} — {name}
        </>
    )
}

const Experience = () => {
    return (
        <>
        <Container>
            
            <h1 className='glow'>Professional Experience</h1>
            <p>
                Web Development is one of the many fields I'm passionate about.
            </p>
            <p>
                I primarily specialise in frontend development. In my free time, I play around with Website Cloning competitions and Hackathons.
            </p>
            <Container className="my-5">
                <h2 align="center" className='glow'>Organizations I've worked in:</h2>
                <div className="text-center">
                    View my <a href="https://www.linkedin.com/in/mohammed-sahal-4b299924a/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </div>
                <hr/>
                <Row className="justify-content-center">
                    <ImgCol size="2" url="https://www.linkedin.com/company/tinkerhub/" imgSrc="./img/companies/tinkerhub.jpg" caption="TinkerHub"/>
                    <ImgCol size="2" url="https://www.linkedin.com/company/spotlight-org/" imgSrc="./img/companies/spotlight.jpg" caption="Spotlight"/>
                    <ImgCol size="2" url="https://www.linkedin.com/company/mark-p/" imgSrc="./img/companies/mark-P.jpg" caption="mark-P"/>
                    
                </Row>
                <Row className="justify-content-center">
                <ImgCol size="2" url="https://www.linkedin.com/company/dsccusat/" imgSrc="./img/companies/gdsc.jpg" caption="Google Developers Students Club, CUSAT" id ="down"/>

                </Row>
                <Row className="justify-content-center my-5">
                    <p className="text-center">
                        This list is non-exhaustive and only includes public information. It does not include any private engagements.
                    </p>
                </Row>
            </Container>
            
            <Container className="my-5">
                <h2 align="center" className='glow'>Badges and Certificates</h2>
                <hr/>
                <Row className="justify-content-center">
                    <ImgCol size="3" url="https://www.hackerrank.com/profile/mohammedsahal001" imgSrc="./img/badges/java-5star.png" 
                        caption="Golden 5 Star in Java"/>
                    <ImgCol size="3" url="https://www.hackerrank.com/certificates/f0190dda54ec" imgSrc="./img/certificates/Java-Hackerrank.png" 
                        caption="Hackerrank Certified Java Professional"/>
                    <ImgCol size="3" url="https://www.hackerrank.com/profile/mohammedsahal001" imgSrc="./img/badges/problemSolving-1star.png" 
                        caption="Bronze 1 Star in Problem Solving"/>
                    
                </Row>
            </Container>
            <Container className="my-5">
                <h2 align="center" className='glow'>Hackathon Certificates</h2>
                <hr/>
                <Row className="justify-content-center">
                    <ImgCol size="3"  imgSrc="./img/certificates/dedsec.jpg" 
                        caption=" DEDSEC CTF at Solasta ‘24"/>
                    
                </Row>
            </Container>
            <Container className="my-5">
                <h2 align="center" className='glow'>Git Featured Commits</h2>
                <hr/>
                <Row className="justify-content-center">
                    <ImgCol size="7" url="https://github.com/NGcodeX/NG-java-MAX-code/pull/5#issue-1465072959" imgSrc="./img/commits/ngcodex.png" 
                        caption=" 

                        Created SECURITY.md, which tells the user/reader how to report a vulnerability in the repository.
                        "/>
                    
                </Row>
            </Container>
        </Container>
        </>
    )
}

export default Experience;