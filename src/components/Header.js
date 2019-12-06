import React, { useState } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import * as dateUtil from "../utils/DateUtil"


const Header = ({ dataWeather }) => {

    const [data, setData] = useState(dataWeather[0])
    const today = new Date()


    console.log(data)
    return (
        <section className="header flex items-center ">
            {data && (
                <Container >
                    <Row className="flex items-center justify-center text-center my-4 ">
                        <Col className="local-hora">
                            <h3>São Paulo</h3>
                            <span>{dateUtil.formatDateTime(today)}</span>
                        </Col>
                    </Row>
                    <Row className="flex items-center content-center justify-center text-center ">
                        <Col md={1} className="hidden-xs hidden-sm" />
                        <Col xs={12} sm={4} md={3} className="temperatura">
                            <h1>{data.temperature.max}ºC </h1>
                            <h3>{data.temperature.min}ºC min</h3>
                        </Col>
                        <Col xs={12} sm={4} md={4} className="icon">
                            <img src={`assets/icon/128px/${data.text_icon.icon.day}.png`} alt="imagem" className="img-responsive m-auto" />
                            <p>{data.text_icon.text.phrase.reduced}</p>
                        </Col>
                        <Col xs={12} sm={4} md={3} className="other-info">
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
                        </Col>
                        <Col md={1} className="hidden-xs hidden-sm" />
                    </Row>
                </Container>

            )}
        </section>
    )
}

export default Header