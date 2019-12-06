import React, { useEffect, useState } from "react"
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import * as dateUtil from "../utils/DateUtil"
import DataTable from "./DataTable"
import { Fade } from 'react-reveal';


const WeatherTabs = ({ dataWeather }) => {

    const [data, setData] = useState(dataWeather)

    return (
        <section className="tabs">
            <Container>
                <Row>
                    <Col>
                        {data && (
                            <Tabs>
                                <TabList>
                                    {data.map((date, index) => {
                                        return (
                                            <Tab>
                                                <Fade bottom delay={index * 100}>
                                                    <p className="date">{dateUtil.getDateWithoutYear(date.date_br)}</p>
                                                    <p className="img"><img src={`assets/icon/45px/${date.text_icon.icon.day}.png`} alt={date.text_icon.text} /></p>
                                                    <p className="temperature">{date.temperature.max}°C max</p>
                                                </Fade>
                                            </Tab>
                                        )
                                    })}
                                    <Tab style={{ float: "right", marginTop: 25, cursor: "pointer" }}>
                                        <Fade bottom delay={1000}>
                                            <i class="fas fa-sort-amount-up"></i>
                                            <p>Modo de Filtros</p>
                                        </Fade>
                                    </Tab>
                                </TabList>
                                {data.map((date, index) => {
                                    return (
                                        <TabPanel>
                                            <Fade bottom delay={400}>
                                                <h3 className="text-center py-2">{dateUtil.formatDateTime(date.date)}</h3>
                                                <div className="divider max-w-sm m-auto" />
                                            </Fade>
                                            <Container>
                                                <Row className="flex justify-center items-center mt-5">
                                                    <Col className="numbers" xs={12} md={4}>
                                                        <Fade left delay={600}>
                                                            <div className="max flex justify-center items-center">
                                                                <i class="fas fa-thermometer-half mr-1 fa-3x"></i>
                                                                <h1> {date.temperature.max}ºC </h1>
                                                            </div>
                                                            <div className="flex justify-around items-center ">
                                                                <p><i class="fas fa-thermometer-half mr-1"></i> {date.temperature.min}ºC <small>min</small></p>
                                                                <p><i class="fas fa-thermometer-half mr-1"></i> {date.temperature.max}ºC <small>sensação</small></p>
                                                            </div>
                                                            <div className="divider" />
                                                            <div className="flex justify-around items-start flex-col">
                                                                <p><i class="fas fa-thermometer-half mr-1"></i>Chuva: {date.rain.probability}% - Precipitação {date.rain.precipitation}%</p>
                                                                <p><i class="fas fa-thermometer-half mr-1"></i>Umidade: {date.humidity.min}%/min -  {date.humidity.max}%/max</p>
                                                                <p><i class="fas fa-thermometer-half mr-1"></i>Vento: {date.wind.velocity_avg}km/h - Direção {date.wind.direction}</p>
                                                            </div>
                                                        </Fade>
                                                    </Col>
                                                    <Col className="numbers" xs={12} md={4}>
                                                        <Fade top delay={600}>
                                                            <div className="max flex justify-center items-center">
                                                                <img src={`assets/icon/200px/${date.text_icon.icon.day}.png`} alt="imagem" className="img-responsive m-auto" />
                                                            </div>
                                                            <div className="divider" />
                                                            <div className="flex justify-around items-center ">
                                                                <p>{date.text_icon.text.phrase.reduced}</p>
                                                            </div>
                                                        </Fade>
                                                    </Col>
                                                    <Col className="numbers" xs={12} md={4}>
                                                        <Fade right delay={600}>
                                                            <Accordion defaultActiveKey="0">
                                                                <Card>
                                                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                                                        <i className="fas fa-mug-hot mr-1"></i>
                                                                        Manhã
                                                                </Accordion.Toggle>
                                                                    <Accordion.Collapse eventKey="0">
                                                                        <Card.Body>
                                                                            <div className="flex justify-around items-center ">
                                                                                <p className="text-5xl"><i class="fas fa-thermometer-half mr-1"></i> {date.temperature.morning.max}ºC </p>
                                                                            </div>
                                                                            <div className="flex justify-around items-center ">
                                                                                <p><i class="fas fa-thermometer-half mr-1"></i> {date.temperature.morning.min}ºC <small>min</small></p>
                                                                                <p><i class="fas fa-thermometer-half mr-1"></i> {date.temperature.morning.max}ºC <small>sensação</small></p>
                                                                            </div>
                                                                        </Card.Body>
                                                                    </Accordion.Collapse>
                                                                </Card>
                                                                <Card>
                                                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                                                        <i class="fas fa-sun mr-1"></i>
                                                                        Tarde
                                                                </Accordion.Toggle>
                                                                    <Accordion.Collapse eventKey="1">
                                                                        <Card.Body>
                                                                            <div className="flex justify-around items-center ">
                                                                                <p className="text-5xl"><i class="fas fa-thermometer-half mr-1"></i> {date.temperature.afternoon.max}ºC </p>
                                                                            </div>
                                                                            <div className="flex justify-around items-center ">
                                                                                <p><i class="fas fa-thermometer-half mr-1"></i> {date.temperature.afternoon.min}ºC <small>min</small></p>
                                                                                <p><i class="fas fa-thermometer-half mr-1"></i> {date.temperature.afternoon.max}ºC <small>sensação</small></p>
                                                                            </div>
                                                                        </Card.Body>
                                                                    </Accordion.Collapse>
                                                                </Card>
                                                                <Card>
                                                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                                                        <i class="far fa-moon mr-1"></i> Noite
                                                                </Accordion.Toggle>
                                                                    <Accordion.Collapse eventKey="2">
                                                                        <Card.Body>
                                                                            <div className="flex justify-around items-center ">
                                                                                <p className="text-5xl"><i class="fas fa-thermometer-half mr-1"></i> {date.temperature.night.max}ºC </p>
                                                                            </div>
                                                                            <div className="flex justify-around items-center ">
                                                                                <p><i class="fas fa-thermometer-half mr-1"></i> {date.temperature.night.min}ºC <small>min</small></p>
                                                                                <p><i class="fas fa-thermometer-half mr-1"></i> {date.temperature.night.max}ºC <small>sensação</small></p>
                                                                            </div>
                                                                        </Card.Body>
                                                                    </Accordion.Collapse>
                                                                </Card>
                                                            </Accordion>

                                                        </Fade>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </TabPanel>
                                    )
                                })}
                                <TabPanel className="text-justify">
                                    <Fade bottom delay={300}>
                                        <DataTable dataWeather={dataWeather} />
                                    </Fade>
                                </TabPanel>
                            </Tabs>
                        )
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WeatherTabs