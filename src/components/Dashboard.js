import React, { useEffect, useState, Fragment } from "react"
import { Header, WeatherTabs } from '../components';
import axios from "axios"


const Dashboard = () => {
    const [data, setData] = useState(null)

    const getData = async () => {
        let res = await axios.get("http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3477/days/15?token=356e147e0a87fa946bafdaaea65137ae");
        let { data } = res.data;
        setData(data);
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <div id="section-home" className="dashboard">
            {data && (
                <Fragment>
                    <Header dataWeather={data} />
                    <WeatherTabs dataWeather={data} />
                </Fragment>
            )}
        </div>
    )
}

export default Dashboard