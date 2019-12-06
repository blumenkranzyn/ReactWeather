import React, { useState } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import * as dateUtil from "../utils/DateUtil"
import { Fade } from 'react-reveal';


const Header = ({ dataWeather }) => {

    const [data, setData] = useState(dataWeather[0])
    const today = new Date()

    return (
        <section className="header flex items-center ">
            {data && (
                <Container >
                    <Row className="flex items-center justify-center text-center my-4 ">
                        <Col className="local-hora">
                            <Fade bottom><h3>São Paulo</h3></Fade>
                            <Fade bottom delay={100}><span>{dateUtil.formatDateTime(today)}</span></Fade>
                        </Col>
                    </Row>
                    <Row className="flex items-center content-center justify-center text-center ">
                        <Col md={1} className="hidden-xs hidden-sm" />
                        <Col xs={12} sm={4} md={3} className="temperatura">
                            <Fade left delay={200}>
                                <h1>{data.temperature.max}ºC </h1>
                                <h3>{data.temperature.min}ºC min</h3>
                            </Fade>
                        </Col>
                        <Col xs={12} sm={4} md={4} className="icon">
                            <Fade top delay={200}>
                                <img src={`assets/icon/128px/${data.text_icon.icon.day}.png`} alt="imagem" className="img-responsive m-auto" />
                                <p>{data.text_icon.text.phrase.reduced}</p>
                            </Fade>
                        </Col>
                        <Col xs={12} sm={4} md={3} className="other-info">
                            <Fade right delay={200}>
                                <div >
                                    <i class="fas fa-cloud-rain mr-2"></i>
                                    <span>Chuva {data.rain.probability}% </span>
                                </div>
                                <div >
                                    <i class="fas fa-tint mr-2"></i>
                                    <span>Umidade  {data.humidity.max}% <small>max</small></span>
                                </div>
                                <div >
                                    <i class="fas fa-wind mr-2"></i>
                                    <span>Vento {data.wind.velocity_avg}km/h </span>
                                </div>
                            </Fade>
                        </Col>
                        <Col md={1} className="hidden-xs hidden-sm" />
                    </Row>
                </Container>

            )}
        </section>
    )
}

export default Header