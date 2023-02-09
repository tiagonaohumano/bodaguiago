import React from "react";
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './LayoutStyles.css';

const CarouselContainer = () => {
    return (

        <Container className="carousel">
            <Row>
            
                <Col sm={12}>
                        <Carousel fade>
                            <Carousel.Item interval={6000}>
                                <img
                                    className=""
                                    src='../assets/images/Rascafria_01.jpg'
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img
                                    className=""
                                    src='../assets/images/Rascafria_02.jpg'
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img
                                    className=""
                                    src='../assets/images/Rascafria_03.jpg'
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img
                                    className=""
                                    src='../assets/images/Rascafria_04.jpg'
                                    alt="Fourth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <img
                                    className=""
                                    src='../assets/images/Rascafria_05.jpg'
                                    alt="Fourth slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>     

            </Row>
        </Container>
    )
}

export default CarouselContainer;