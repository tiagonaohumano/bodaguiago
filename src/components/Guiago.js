import React from "react";
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './LayoutStyles.css';

const Guiago = () => {
    return (

        <Container fluid className="guiago">
            <Row>
            
                <Col sm={12}>
                        <Carousel fade>
                            <Carousel.Item interval={6000}>
                                <img
                                    className=""
                                    src='../assets/images/Guiago_01.jpg'
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img
                                    className="w100"
                                    src='../assets/images/Guiago_02.jpg'
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img
                                    className="w100"
                                    src='../assets/images/Guiago_11.jpg'
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img
                                    className="w100"
                                    src='../assets/images/Guiago_12.jpg'
                                    alt="Fourth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img
                                    className="w100"
                                    src='../assets/images/Guiago_13.jpg'
                                    alt="Fourth slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>     

            </Row>
        </Container>
    )
}

export default Guiago;