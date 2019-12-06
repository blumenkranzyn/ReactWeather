import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import * as dateUtil from "../utils/DateUtil"


const Header = () => {
    const today = new Date()
   
    return (

        <section className="header flex items-center">
            <Container>
                <Row className="flex items-center justify-center text-center my-4">
                    <Col className="local-hora">
                        <h3>São Paulo</h3>
                        <span>{dateUtil.formatDateTime(today)}</span>
                    </Col>
                </Row>
                <Row className="flex items-center content-center justify-center text-center">
                    <Col md={1} className="hidden-xs" />
                    <Col xs={12} md={3} className="temperatura">
                       <h1>25ºC</h1>
                       <h3>18ºC min</h3>
                    </Col>
                    <Col xs={12} md={4} className="icon">
                       <img src="assets/icon/128px/4t.png" alt="imagem" className="img-responsive m-auto"/>
                       <p>Chuva com muitas nuvens</p>
                    </Col>
                    <Col xs={12} md={3} className="other-info">
                       <div className="">
                            <i class="fas fa-thermometer-half mr-2"></i>
                            <span>Chuva 80% </span>
                       </div>
                       <div className="">
                           <i class="fas fa-thermometer-half mr-2"></i>
                           <span>Umidade 88% </span>
                       </div>
                       <div className="">
                          <i class="fas fa-thermometer-half mr-2"></i>
                          <span>Vento 80km/h </span>
                       </div>
                       
                    </Col>
                    <Col md={1} className="hidden-xs" />
                </Row>
            </Container>
        </section>
    )
}

export default Header