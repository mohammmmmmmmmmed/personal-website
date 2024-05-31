import { Row, Col, Image, Container, Badge, ListGroup } from 'react-bootstrap';
import {
    SiTypescript, SiNextdotjs, SiReact, SiNodedotjs, SiCss3, SiMysql, SiJavascript, SiPython, SiBootstrap, SiCplusplus, SiC, SiFirebase, SiRedux
} from 'react-icons/si';
import React from 'react';
import { FaJava } from 'react-icons/fa';


const FireBadge = () => {
    return (
        <Badge bg="danger"><SiFirebase />Firebase</Badge>
    )
}

const TypeBadge = () => {
    return (
        <Badge bg="danger"><SiTypescript />TypeScript</Badge>
    )
}
const ReduxBadge = () => {
    return (
        <Badge bg="danger"><SiRedux />Redux</Badge>
    )
}

const NextBadge = () => {
    return (
        <Badge bg="secondary"><SiNextdotjs /> NextJS</Badge>
    )
};

const ReactBadge = () => {
    return (
        <Badge bg="primary"><SiReact /> React</Badge>
    )
}

const NodeBadge = () => {
    return (
        <Badge bg="secondary"><SiNodedotjs /> Node.js</Badge>
    )
};
const CSSBadge = () => {
    return (
        <Badge bg="success"><SiCss3 /> CSS</Badge>
    )
};

const MySQLBadge = () => {
    return (
        <Badge bg="success"><SiMysql /> MySQL</Badge>
    )
};
const JavaScriptBadge = () => {
    return (
        <Badge bg="warning" text="dark"><SiJavascript /> JavaScript</Badge>
    )
}

const JavaBadge = () => {
    return (
        <Badge bg="success"><FaJava /> Java</Badge>
    )
};

const CBadge = () => {
    return (
        <Badge bg="secondary"><SiC /> C</Badge>
    )
};
const CPPBadge = () => {
    return (
        <Badge bg="secondary"><SiCplusplus /> C++</Badge>
    )
};



const BootstrapBadge = () => {
    return (
        <Badge bg="danger"><SiBootstrap /> Bootstrap</Badge>
    )
}





const Projects = () => {

    return (
        <>
            <Container>
                
                <h1 className='glow'>Software</h1>
                <p>
                    Of course, I can't call myself a Web Dev without some projects.
                </p>
                <p>
                    I enjoy building scalable, responsive, and performant websites.
                </p>
                <Container className="my-5">
                    <h2 align="center" className='glow'>Stuff I Made</h2>
                    <hr />
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="/" rel="noreferrer" target="_blank">Personal Website</a></h2>
                            <p>
                                Wait... that's this site!
                            </p>
                            <div>
                                <ReactBadge /> <BootstrapBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="./img/projects/current.png" fluid width="90%" rounded />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="https://www.drag-n-drop-2nyd.vercel.app" rel="noreferrer" target="_blank">Jello</a></h2>
                            <p>
                                A Jira-Trello (Jello) clone with drag and drop, and subtask functionality.
                            </p>
                            <p>
                                May/2024
                            </p>
                            <div>
                                <JavaScriptBadge /> <CSSBadge /> <ReactBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="./img/projects/Jello.png" fluid width="90%" rounded />
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a
                                href="https://icw2a-org.vercel.app/icw2a/pages/homepage.html"
                                rel="noreferrer"
                                target="_blank"
                                id="rDis"
                            >  rDis</a></h2>
                            <span id="redacted-message-hover" style={{ color: 'blue' }}>This project is currently being built.</span>

                            <p>
                                An application to streamline childcare and disease control, while increasing efficiency.
                            </p>
                            <p>
                                Under construction.
                            </p>
                            <div>
                                <JavaScriptBadge /> <MySQLBadge /> <CSSBadge /> <NodeBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="./img/projects/rDis.png" fluid width="90%" rounded />
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="https://linkfolio-six.vercel.app/" rel="noreferrer" target="_blank">Linkfolio</a></h2>
                            <p>
                                A website to share portfolios, among peers, and among recruiters.
                            </p>
                            <p>
                                May/2024
                            </p>
                            <div>
                                <JavaScriptBadge /> <CSSBadge /> <NextBadge /> <TypeBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="./img/projects/Linkfolio.png" fluid width="90%" rounded />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="https://www.button-generator-one.vercel.app" rel="noreferrer" target="_blank">Website Builder</a></h2>
                            <p>
                                An HTML and CSS code generator based on user defined customizations.
                            </p>
                            <p>
                                May/2024
                            </p>
                            <div>
                                <JavaScriptBadge /> <CSSBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="./img/projects/button.png" fluid width="90%" rounded />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="https://www.pokexp.vercel.app" rel="noreferrer" target="_blank">PokeXP</a></h2>
                            <p>
                                A Pokedex with a Windows XP theme.
                            </p>
                            <p>
                                May/2024
                            </p>
                            <div>
                                <JavaScriptBadge /> <CSSBadge /> <ReactBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="./img/projects/pokeXP.png" fluid width="90%" rounded />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a
                                href="https://icw2a-org.vercel.app/icw2a/pages/homepage.html"
                                rel="noreferrer"
                                target="_blank"
                                id="icw2a"
                            >                                  Community App
                            </a></h2>
                            <span id="redacted-message-hover" style={{ color: 'blue' }}>This project is currently being built.</span>
                            <p></p>
                            <p>
                                An integrated community welfare web application.
                            </p>

                            <div>
                                <JavaScriptBadge /> <CSSBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="./img/projects/icw2a.png" fluid width="90%" rounded />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="https://www.studio-one-azure.vercel.app" rel="noreferrer" target="_blank">Studio</a></h2>
                            <p>
                                A fashion e-commerce website.
                            </p>
                            <p>
                                April/2024
                            </p>
                            <div>
                                <JavaScriptBadge /> <CSSBadge /> <ReactBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="./img/projects/Studio.png" fluid width="90%" rounded />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="https://www.weirder-people.vercel.app" rel="noreferrer" target="_blank">Weirder People</a></h2>
                            <p>
                                An NFT website with innovative tokens.
                            </p>
                            <p>
                                April/2024
                            </p>
                            <div>
                                <JavaScriptBadge /> <CSSBadge /> <ReactBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="./img/projects/Weirder-People.png" fluid width="90%" rounded />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="https://www.palate-six.vercel.app" rel="noreferrer" target="_blank">Palate</a></h2>
                            <p>
                                A Restaurant's website, showcasing its menu, and on-call-reservations. Future updates coming up.
                            </p>
                            <p>
                                May/2024
                            </p>
                            <div>
                                <JavaScriptBadge /> <CSSBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="./img/projects/Palate.png" fluid width="90%" rounded />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="https://www.old-portfolio-mohammed.app" rel="noreferrer" target="_blank">Old Portfolio Website</a></h2>
                            <p>
                                A portfolio website to share projects, blogs, and professional experience.
                            </p>
                            <p>
                                June/2023
                            </p>
                            <div>
                                <JavaScriptBadge /> <CSSBadge /> <NextBadge /> <TypeBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="./img/projects/old.png" fluid width="90%" rounded />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                id="spotlight">                                    Spotlight
                            </a></h2>
                            <span id="redacted-message-click" style={{ color: 'red' }}>Unfortunately, this information is redacted.</span>
                            <p>


                                Designed and developed a comprehensive website from scratch for Spotlight, an NGO, tripling user traffic and significantly enhancing community engagement and resource accessibility.                            </p>
                            <p>
                                May/2023
                            </p>
                            <div>
                                <JavaScriptBadge /> <CSSBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="./img/projects/Spotlight.png" fluid width="90%" rounded />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                id="private-chatroom-link">                                    Private Chatroom
                            </a></h2>
                            <span id="redacted-message-click" style={{ color: 'red' }}>Unfortunately, this information is redacted.</span>
                            <p>


                                A functional private chatroom that has authorization, a search feature, and the ability to upload files.
                            </p>
                            <p>
                                March/2023
                            </p>
                            <div>
                                <JavaScriptBadge /> <CSSBadge /> <NodeBadge/> <FireBadge/>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="./img/projects/Chatroom.png" fluid width="90%" rounded />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                id="public-chatroom-link">                                    Public Chatroom
                            </a></h2>
                            <span id="redacted-message-click" style={{ color: 'red' }}>Unfortunately, this information is redacted.</span>
                            <p>


                                A functional anonymous public chatroom that has authorization.
                            </p>
                            <p>
                                February/2023
                            </p>
                            <div>
                                <JavaScriptBadge /> <CSSBadge /> <ReactBadge/> <FireBadge/>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="./img/projects/Public-chatroom.png" fluid width="90%" rounded />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="#" rel="noreferrer" target="_blank">Frontend Clones</a></h2>
                            <p>
                                A few frontend clones.
                            </p>
                            <p>
                                2022-2024
                            </p>
                            <div>
                                <JavaScriptBadge /> <CSSBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="./img/projects/Stripe.png" fluid width="90%" rounded />
                            <Image src="./img/projects/Apple.png" fluid width="90%" rounded />
                            <Image src="./img/projects/Foodpanda.png" fluid width="90%" rounded />

                        </Col>
                    </Row>
                    <hr />


                </Container>
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={6} className="my-5">
                            <h2 align="center" className='glow'>Technologies I Use</h2>
                            <hr />
                            <div className="my-5">
                                <ListGroup a="ul">
                                    <li>
                                    <SiNodedotjs /> Node.js , <SiNextdotjs /> NextJS, <SiReact /> ReactJs, 
                                    <FaJava /> Java

                                    </li>
                                    <li>
                                    <SiTypescript /> TypeScript,  <SiCplusplus /> C++, <SiMysql /> MySQL

                                    </li>
                                    <li>
                                        <SiPython /> Python, <SiBootstrap /> Bootstrap, <SiC /> C, <SiFirebase/> Firebase
                                    </li>
                                    
                                    <li>
                                        <SiCss3 /> CSS, <SiJavascript /> JavaScript, <SiRedux /> Redux
                                    </li>
                                </ListGroup>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="my-5">
                            <h2 align="center" className='glow'>Competitions</h2>
                            <hr />
                            <div className="my-5">
                                <ListGroup a="ul">
                                    <li>
                                        Solana's DedSec CTF - 5th Place
                                    </li>
                                    
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Projects;