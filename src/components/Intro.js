import React, { Fragment } from "react"
import { Flip } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'react-bootstrap';

const Intro = () => {

    const handleClick = (e) => {
        e.preventDefault();
        document.getElementById("section-home").scrollIntoView({ behavior: "smooth" });
    }

    return (
        <Fragment>
            <div className="intro">
                <div class="ocean">
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                </div>
                <Container>
                    <Row>
                        <Col xs={4}>
                            <Flip bottom>
                                <img src="assets/icon-intro.png" alt="Imagem de Introdução" />
                            </Flip>
                        </Col>
                        <Col xs={8}>
                            <Flip delay={200} bottom>
                                <h1>Seja Bem Vindo ao</h1>
                            </Flip>
                            <Flip delay={500} bottom>
                                <h3>climaTempo</h3>
                            </Flip>
                            <Flip delay={1000} bottom>
                                <h5>Veja o clima da sua cidade aqui!</h5>
                            </Flip>
                        </Col>
                    </Row>
                </Container>


                <button onClick={(e) => handleClick(e)} className="bounce" >
                    <FontAwesomeIcon icon={faAngleDown} />
                </button>

            </div>
        </Fragment>
    )
}

export default Intro