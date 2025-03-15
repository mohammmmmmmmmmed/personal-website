import { Row, Col, Image, Container, Badge, ListGroup } from 'react-bootstrap';
import {
    SiTypescript, SiNextdotjs, SiReact, SiNodedotjs, SiCss3, SiMysql, SiJavascript, SiPython, SiBootstrap, SiCplusplus, SiC, SiFirebase, SiRedux, SiFlask
} from 'react-icons/si';
import React from 'react';
import { FaJava } from 'react-icons/fa';

const FireBadge = () => {
    return (
        <Badge bg="danger"><SiFirebase />Firebase</Badge>
    )
}
const PythonBadge = () => {
    return (
        <Badge bg="danger"><SiPython />Python</Badge>
    )
}
const FlaskBadge = () => {
    return (
        <Badge bg="danger"><SiFlask />Flask</Badge>
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
                    Of course, I can't call myself a Software Dev without some projects.
                </p>
                <p>
                    I enjoy building scalable, responsive, and performant applications.
                </p>
                <Container className="my-5">
                    <h2 align="center" className='glow'>Stuff I Made</h2>
                    <hr />
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="/" rel="noreferrer" target="_blank">Political Sentiment Analysis Trading Bot</a></h2>
                            <p>
                                Predicting market movements based on political sentiment analysis. Developed a trading bot that analyzes real-time political sentiment from Reddit, Twitter, and financial news outlets to assess market impact. Built a custom Named Entity Recognition (NER) model with fuzzy matching to identify key political figures, CEOs, and companies, dynamically resolving variations and nicknames. Utilized sentiment scoring techniques, including VADER and TextBlob, to assess public perception and aggregate trends over time. Implemented predictive analytics using machine learning models (Random Forest, LSTM) to forecast market trends based on sentiment and event co-occurrence. Generated real-time alerts for traders, visualized entity relationships, and developed correlation models using Pointwise Mutual Information (PMI) and association rule mining.
                            </p>
                            <div>
                                <CPPBadge /> <MySQLBadge /> <JavaScriptBadge /> <PythonBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="/" rel="noreferrer" target="_blank">TradeSentinel</a></h2>
                            <p>
                                Detecting and predicting illegal insider trading using machine learning. Developed a machine learning model to analyze unusual trading patterns and detect potential insider trading activities. Utilized anomaly detection techniques, including Isolation Forest and Autoencoders, to identify irregular stock movements. Integrated real-time market data feeds and SEC filings for comprehensive risk assessment.
                            </p>
                            <div>
                                <CPPBadge /> <MySQLBadge /> <JavaScriptBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="/" rel="noreferrer" target="_blank">Celeris</a></h2>
                            <p>
                                High-performance, real-time quantitative trading engine. Developed a C++-based low-latency trading engine optimized for real-time market data processing and order execution. Integrated a custom-built order book for efficient price matching and trade execution. Implemented statistical arbitrage strategies and backtesting capabilities using historical market data.
                            </p>
                            <div>
                                <CPPBadge /> <MySQLBadge /> <JavaScriptBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="/" rel="noreferrer" target="_blank">Sustainable Portfolio Optimizer</a></h2>
                            <p>
                                Optimizing investment portfolios while integrating ESG scores for sustainability and ethical investing. Developed a graphical user interface (GUI) application that allows users to input their preferences related to environmental, social, and governance (ESG) criteria for generating an ethically responsible equity investment portfolio. Utilized the Bloomberg Terminal to collect stock data, ESG ratings, and index price information, ensuring a robust dataset for analysis. Generated ESG scores specifically for members of the Nasdaq Composite Index, facilitating informed investment decisions based on ethical considerations.
                            </p>
                            <div>
                                <CPPBadge /> <MySQLBadge /> <JavaScriptBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="/" rel="noreferrer" target="_blank">F1 Race Outcome Predictor</a></h2>
                            <p>
                                A high-precision, real-time Formula 1 race prediction system. Integrated historical data into the prediction model to inform and refine outcomes based on past performances. Employed advanced probabilistic models, like Monte Carlo simulations, to analyze various racing scenarios and their potential impacts on race results. Achieved significant improvements in prediction accuracy through rigorous testing and optimization of simulation parameters.
                            </p>
                            <div>
                                <CPPBadge /> <MySQLBadge /> <JavaScriptBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="/" rel="noreferrer" target="_blank">Stock Feed Data Monitor</a></h2>
                            <p>
                                Analyzed financial data and created trading strategies using Perspective data visualization software. Developed a web application to monitor stock price trends and support decision-making processes.
                            </p>
                            <div>
                                <PythonBadge /> <ReactBadge /> <TypeBadge /> <CSSBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="/" rel="noreferrer" target="_blank">rDis</a></h2>
                            <p>
                                Automating healthcare data collection with quantitative finance integration. Developed a C++-based desktop application for automated healthcare data collection, reducing manual data entry efforts. Integrated quantitative finance techniques for predictive analytics in healthcare trends. Built an optimized Next.js, TailwindCSS, Prisma, and PostgreSQL stack for secure and efficient data management. Implemented chart visualization, authentication, and real-time analytics to enhance usability for Asha workers.
                            </p>
                            <div>
                                <CPPBadge /> <MySQLBadge /> <JavaScriptBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="/" rel="noreferrer" target="_blank">Reinforced Credit Scoring System</a></h2>
                            <p>
                                Enhancing credit scoring models with reinforcement learning. Designed a credit scoring model that dynamically adjusts risk thresholds using reinforcement learning algorithms. Trained on historical lending data to optimize approval decisions while minimizing default risk. Integrated explainable AI (XAI) techniques to provide transparency in creditworthiness evaluations.
                            </p>
                            <div>
                                <CPPBadge /> <MySQLBadge /> <JavaScriptBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="/" rel="noreferrer" target="_blank">FraudShield</a></h2>
                            <p>
                                Detecting fraudulent credit card transactions using machine learning. Built a real-time fraud detection system leveraging machine learning algorithms, including Random Forest and Gradient Boosting. Implemented anomaly detection models to identify suspicious transactions with minimal false positives. Integrated risk scoring and adaptive learning mechanisms to improve fraud detection over time.
                            </p>
                            <div>
                                <CPPBadge /> <MySQLBadge /> <JavaScriptBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="/" rel="noreferrer" target="_blank">TradingView AutoTrader</a></h2>
                            <p>
                                Automating trading decisions via webhook-based integration with TradingView alerts. Developed an automated trading system that executes trades based on predefined TradingView alert conditions. Implemented webhook-based order execution and integrated APIs from major trading platforms. Optimized execution timing and risk management using statistical arbitrage techniques.
                            </p>
                            <div>
                                <CPPBadge /> <MySQLBadge /> <JavaScriptBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="/" rel="noreferrer" target="_blank">Options Valuation Toolkit</a></h2>
                            <p>
                                Implementing advanced models for accurate option price prediction. Developed a quantitative finance toolkit for option valuation using Black-Scholes, Binomial Tree, and Monte Carlo simulations. Implemented implied volatility modeling to refine option pricing accuracy. Built real-time analytics for option Greeks (Delta, Gamma, Theta, Vega) to assist traders in risk management.
                            </p>
                            <div>
                                <CPPBadge /> <MySQLBadge /> <JavaScriptBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="/" rel="noreferrer" target="_blank">ESG Integration Framework</a></h2>
                            <p>
                                Incorporating ESG scores into financial models for responsible investing. Built a financial modeling framework that integrates Environmental, Social, and Governance (ESG) scores into traditional investment strategies. Optimized portfolio construction using ESG-adjusted risk metrics and multi-objective optimization algorithms. Analyzed sustainability impacts on long-term financial performance through regression-based factor analysis.
                            </p>
                            <div>
                                <CPPBadge /> <MySQLBadge /> <JavaScriptBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="/" rel="noreferrer" target="_blank">TradeSentinel</a></h2>
                            <p>
                                Detecting and predicting illegal insider trading using machine learning. Developed an automated market surveillance system that detects anomalies and fraud in financial markets, optimized for real-time performance with C++. Employed a range of machine learning techniques to analyze stock prices, trading volumes, and relevant news articles. Key statistical tests utilized include the Granger causality test and the Augmented Dickey-Fuller (AD Fuller) test to assess relationships and stationarity in the data.
                            </p>
                            <div>
                                <CPPBadge /> <MySQLBadge /> <JavaScriptBadge />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h2><a href="/" rel="noreferrer" target="_blank">Personal Website</a></h2>
                            <p>
                                Wait... that's this site! Built with React and Bootstrap, this website showcases my projects, skills, and professional experience in a clean and responsive design.
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
                                A Jira-Trello (Jello) clone with drag-and-drop functionality and subtask management. Built with React and CSS, this project demonstrates my ability to create intuitive and user-friendly interfaces.
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

                            <p>
                                Automating healthcare data collection with quantitative finance integration. Developed a C++-based desktop application for automated healthcare data collection, reducing manual data entry efforts. Integrated quantitative finance techniques for predictive analytics in healthcare trends. Built an optimized Next.js, TailwindCSS, Prisma, and PostgreSQL stack for secure and efficient data management. Implemented chart visualization, authentication, and real-time analytics to enhance usability for Asha workers.
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
                                A platform for sharing portfolios among peers and recruiters. Built with Next.js and TypeScript, this project features user authentication, portfolio sharing, and real-time updates.
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
                                An HTML and CSS code generator based on user-defined customizations. This tool allows users to create and export custom UI components, streamlining the web development process.
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
                                A Pokedex with a Windows XP theme. Built with React and CSS, this project combines nostalgia with modern web development techniques.
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
                                An integrated community welfare web application designed to improve communication and resource sharing within local communities.
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
                                A fashion e-commerce website featuring product listings, user reviews, and a seamless checkout process. Built with React and CSS, this project showcases my ability to create visually appealing and functional web applications.
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
                                An NFT website showcasing innovative tokens and digital art. Built with React and CSS, this project highlights my ability to create engaging and interactive web experiences.
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
                                A restaurant website showcasing its menu and enabling on-call reservations. Future updates include online ordering and payment integration.
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
                                A portfolio website to share projects, blogs, and professional experience. Built with Next.js and TypeScript, this project demonstrates my growth as a developer.
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
                                Designed and developed a comprehensive website from scratch for Spotlight, an NGO, tripling user traffic and significantly enhancing community engagement and resource accessibility.
                            </p>
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
                                A few frontend clones of popular websites, including Stripe, Apple, and Foodpanda. These projects demonstrate my ability to replicate complex designs and functionalities.
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