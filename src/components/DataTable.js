import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';

const Datatable = ({ dataWeather }) => {
    const [dados, setDados] = useState(null)

    const dataRows = () => {
        let dadosIniciais = []
        dataWeather.map((date) => {
            dadosIniciais.push({
                date: date.date_br,
                temperature_morning: date.temperature.morning.max + "ºC",
                temperature_afternoon: date.temperature.afternoon.max + "ºC",
                temperature_night: date.temperature.night.max + "ºC",
                thermal_sensation_min: date.thermal_sensation.min + "ºC",
                rain: date.rain.probability + "%",
            })
        })
        setDados(dadosIniciais);
    }
    useEffect(() => {
        dataRows()
    }, [])


    const data = {
        columns: [
            {
                label: [<i key="Dia" className="far fa-calendar-alt mr-2 text-orange" aria-hidden="true"></i>, 'Dia'],
                field: 'date',
                sort: 'asc',
                width: 150
            },
            {
                label: [<i key="Temp. Manhã" className="fas fa-mug-hot mr-2 text-orange" aria-hidden="true"></i>, 'Temp. Manhã'],
                field: 'temperature_morning',
                sort: 'asc',
                width: 270
            },
            {
                label: [<i key="Temp. Tarde" className="far fa-sun mr-2 text-orange" aria-hidden="true"></i>, 'Temp. Tarde'],
                field: 'temperature_afternoon',
                sort: 'asc',
                width: 270
            },
            {
                label: [<i key="Temp. Noite" className="far fa-moon mr-2 text-orange" aria-hidden="true"></i>, 'Temp. Noite'],
                field: 'temperature_night',
                sort: 'asc',
                width: 200
            },
            {
                label: [<i key="Sensação Térmica Geral" className="fas fa-temperature-low mr-2 text-orange" aria-hidden="true"></i>, 'Sensação Térmica Geral'],
                field: 'thermal_sensation_min',
                sort: 'asc',
                width: 200
            },
            {
                label: [<i key="Chuva" className="fas fa-cloud-rain mr-2 text-orange" aria-hidden="true"></i>, 'Chuva'],
                field: 'rain',
                sort: 'asc',
                width: 200
            },
        ],
        rows: dados
    };

    return (
        <>
            {dados && (
                <MDBDataTable
                    striped
                    bordered
                    hover
                    data={data}
                />
            )}
        </>
    );
}

export default Datatable;