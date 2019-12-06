import React from "react"
import { Header, WeatherTabs } from '../components';


const Dashboard = () => {
    /*const [data, setData] = useState(null)
   
       const getData = async () => {
           let res = await axios.get("http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3477/days/15?token=356e147e0a87fa946bafdaaea65137ae");
           let { data } = res.data;
           setData(data);
       };
   
       useEffect(() => {
           getData()
       }, [])
       useEffect(() => {
           console.log("face it ", data)
       }, [data]) */

    const data = [
        {
            "date": "2019-12-06",
            "date_br": "06/12/2019",
            "humidity": {
                "min": 64,
                "max": 89,
                "dawn": {
                    "min": 82,
                    "max": 90
                },
                "morning": {
                    "min": 72,
                    "max": 89
                },
                "afternoon": {
                    "min": 64,
                    "max": 68
                },
                "night": {
                    "min": 71,
                    "max": 80
                }
            },
            "rain": {
                "probability": 90,
                "precipitation": 10
            },
            "wind": {
                "velocity_min": 6,
                "velocity_max": 23,
                "velocity_avg": 16,
                "gust_max": 40,
                "direction_degrees": 215,
                "direction": "SSW",
                "dawn": {
                    "direction": "WNW",
                    "direction_degrees": 304,
                    "gust_max": 40,
                    "velocity_max": 23,
                    "velocity_avg": 21
                },
                "morning": {
                    "direction": "W",
                    "direction_degrees": 269,
                    "gust_max": 25,
                    "velocity_max": 17,
                    "velocity_avg": 10
                },
                "afternoon": {
                    "direction": "SSE",
                    "direction_degrees": 160,
                    "gust_max": 29,
                    "velocity_max": 21,
                    "velocity_avg": 16
                },
                "night": {
                    "direction": "SE",
                    "direction_degrees": 144,
                    "gust_max": 22,
                    "velocity_max": 16,
                    "velocity_avg": 15
                }
            },
            "uv": {
                "max": 16.3
            },
            "thermal_sensation": {
                "min": 16,
                "max": 23
            },
            "text_icon": {
                "icon": {
                    "dawn": "5n",
                    "morning": "5",
                    "afternoon": "4r",
                    "night": "2rn",
                    "day": "4r"
                },
                "text": {
                    "pt": "Sol com muitas nuvens e chuva",
                    "en": "Sun and rain.",
                    "es": "Sol con muchas nubes durante el día. Períodos de nublado, con lluvia a cualquier hora.",
                    "phrase": {
                        "reduced": "Nublado com chuva de manhã. Aberturas de sol à tarde e pancadas de chuva. Noite seca.",
                        "morning": "Chuvoso",
                        "afternoon": "Sol com muitas nuvens e chuva",
                        "night": "Muitas nuvens",
                        "dawn": "Chuvoso"
                    }
                }
            },
            "temperature": {
                "min": 16,
                "max": 23,
                "dawn": {
                    "min": 17,
                    "max": 19
                },
                "morning": {
                    "min": 16,
                    "max": 17
                },
                "afternoon": {
                    "min": 18,
                    "max": 23
                },
                "night": {
                    "min": 18,
                    "max": 23
                }
            },
            "cloud_coverage": {
                "low": 3741.7,
                "mid": 137.5,
                "high": 0,
                "dawn": {
                    "low": 550,
                    "mid": 550,
                    "high": 0
                },
                "morning": {
                    "low": 3483.3,
                    "mid": 0,
                    "high": 0
                },
                "afternoon": {
                    "low": 6133.3,
                    "mid": 0,
                    "high": 0
                },
                "night": {
                    "low": 4800,
                    "mid": 0,
                    "high": 0
                }
            },
            "sun": {
                "sunrise": "05:11:00",
                "sunset": "18:43:00"
            }
        },
        {
            "date": "2019-12-07",
            "date_br": "07/12/2019",
            "humidity": {
                "min": 38,
                "max": 81,
                "dawn": {
                    "min": 80,
                    "max": 81
                },
                "morning": {
                    "min": 43,
                    "max": 76
                },
                "afternoon": {
                    "min": 38,
                    "max": 42
                },
                "night": {
                    "min": 46,
                    "max": 66
                }
            },
            "rain": {
                "probability": 0,
                "precipitation": 0
            },
            "wind": {
                "velocity_min": 12,
                "velocity_max": 21,
                "velocity_avg": 16,
                "gust_max": 28,
                "direction_degrees": 126,
                "direction": "ESE",
                "dawn": {
                    "direction": "ESE",
                    "direction_degrees": 113,
                    "gust_max": 21,
                    "velocity_max": 14,
                    "velocity_avg": 13
                },
                "morning": {
                    "direction": "E",
                    "direction_degrees": 108,
                    "gust_max": 22,
                    "velocity_max": 15,
                    "velocity_avg": 13
                },
                "afternoon": {
                    "direction": "ESE",
                    "direction_degrees": 134,
                    "gust_max": 21,
                    "velocity_max": 18,
                    "velocity_avg": 16
                },
                "night": {
                    "direction": "SE",
                    "direction_degrees": 139,
                    "gust_max": 28,
                    "velocity_max": 21,
                    "velocity_avg": 20
                }
            },
            "uv": {
                "max": 15.8
            },
            "thermal_sensation": {
                "min": 15,
                "max": 27
            },
            "text_icon": {
                "icon": {
                    "dawn": "2rn",
                    "morning": "2r",
                    "afternoon": "2",
                    "night": "2n",
                    "day": "2"
                },
                "text": {
                    "pt": "Sol com algumas nuvens",
                    "en": "Mostly sunny.",
                    "es": "Sol con algunas nubes. No llueve.",
                    "phrase": {
                        "reduced": "Dia de sol com algumas nuvens e névoa ao amanhecer. Noite com poucas nuvens.",
                        "morning": "Sol com muitas nuvens",
                        "afternoon": "Sol com algumas nuvens",
                        "night": "Algumas nuvens",
                        "dawn": "Muitas nuvens"
                    }
                }
            },
            "temperature": {
                "min": 15,
                "max": 27,
                "dawn": {
                    "min": 15,
                    "max": 15
                },
                "morning": {
                    "min": 15,
                    "max": 18
                },
                "afternoon": {
                    "min": 20,
                    "max": 27
                },
                "night": {
                    "min": 20,
                    "max": 26
                }
            },
            "cloud_coverage": {
                "low": 320.8,
                "mid": 0,
                "high": 0,
                "dawn": {
                    "low": 1283.3,
                    "mid": 0,
                    "high": 0
                },
                "morning": {
                    "low": 0,
                    "mid": 0,
                    "high": 0
                },
                "afternoon": {
                    "low": 0,
                    "mid": 0,
                    "high": 0
                },
                "night": {
                    "low": 0,
                    "mid": 0,
                    "high": 0
                }
            },
            "sun": {
                "sunrise": "05:12:00",
                "sunset": "18:44:00"
            }
        },
        {
            "date": "2019-12-08",
            "date_br": "08/12/2019",
            "humidity": {
                "min": 28,
                "max": 68,
                "dawn": {
                    "min": 63,
                    "max": 68
                },
                "morning": {
                    "min": 28,
                    "max": 59
                },
                "afternoon": {
                    "min": 29,
                    "max": 38
                },
                "night": {
                    "min": 42,
                    "max": 52
                }
            },
            "rain": {
                "probability": 0,
                "precipitation": 0
            },
            "wind": {
                "velocity_min": 18,
                "velocity_max": 24,
                "velocity_avg": 20,
                "gust_max": 34,
                "direction_degrees": 112,
                "direction": "E",
                "dawn": {
                    "direction": "ESE",
                    "direction_degrees": 115,
                    "gust_max": 31,
                    "velocity_max": 20,
                    "velocity_avg": 19
                },
                "morning": {
                    "direction": "E",
                    "direction_degrees": 97,
                    "gust_max": 32,
                    "velocity_max": 20,
                    "velocity_avg": 19
                },
                "afternoon": {
                    "direction": "ESE",
                    "direction_degrees": 114,
                    "gust_max": 27,
                    "velocity_max": 20,
                    "velocity_avg": 19
                },
                "night": {
                    "direction": "ESE",
                    "direction_degrees": 120,
                    "gust_max": 34,
                    "velocity_max": 24,
                    "velocity_avg": 23
                }
            },
            "uv": {
                "max": 15.8
            },
            "thermal_sensation": {
                "min": 14,
                "max": 26
            },
            "text_icon": {
                "icon": {
                    "dawn": "2rn",
                    "morning": "2r",
                    "afternoon": "2",
                    "night": "2n",
                    "day": "2"
                },
                "text": {
                    "pt": "Sol com algumas nuvens",
                    "en": "Mostly sunny.",
                    "es": "Sol con algunas nubes. No llueve.",
                    "phrase": {
                        "reduced": "Dia de sol com algumas nuvens e névoa ao amanhecer. Noite com poucas nuvens.",
                        "morning": "Sol com muitas nuvens",
                        "afternoon": "Sol com algumas nuvens",
                        "night": "Algumas nuvens",
                        "dawn": "Muitas nuvens"
                    }
                }
            },
            "temperature": {
                "min": 14,
                "max": 26,
                "dawn": {
                    "min": 14,
                    "max": 16
                },
                "morning": {
                    "min": 14,
                    "max": 18
                },
                "afternoon": {
                    "min": 21,
                    "max": 26
                },
                "night": {
                    "min": 18,
                    "max": 24
                }
            },
            "cloud_coverage": {
                "low": 0,
                "mid": 0,
                "high": 0,
                "dawn": {
                    "low": 0,
                    "mid": 0,
                    "high": 0
                },
                "morning": {
                    "low": 0,
                    "mid": 0,
                    "high": 0
                },
                "afternoon": {
                    "low": 0,
                    "mid": 0,
                    "high": 0
                },
                "night": {
                    "low": 0,
                    "mid": 0,
                    "high": 0
                }
            },
            "sun": {
                "sunrise": "05:12:00",
                "sunset": "18:44:00"
            }
        },
        {
            "date": "2019-12-09",
            "date_br": "09/12/2019",
            "humidity": {
                "min": 41,
                "max": 65,
                "dawn": {
                    "min": 51,
                    "max": 62
                },
                "morning": {
                    "min": 46,
                    "max": 62
                },
                "afternoon": {
                    "min": 41,
                    "max": 52
                },
                "night": {
                    "min": 60,
                    "max": 65
                }
            },
            "rain": {
                "probability": 90,
                "precipitation": 5
            },
            "wind": {
                "velocity_min": 5,
                "velocity_max": 21,
                "velocity_avg": 15,
                "gust_max": 34,
                "direction_degrees": 92,
                "direction": "E",
                "dawn": {
                    "direction": "E",
                    "direction_degrees": 99,
                    "gust_max": 34,
                    "velocity_max": 21,
                    "velocity_avg": 20
                },
                "morning": {
                    "direction": "ENE",
                    "direction_degrees": 73,
                    "gust_max": 30,
                    "velocity_max": 19,
                    "velocity_avg": 16
                },
                "afternoon": {
                    "direction": "NE",
                    "direction_degrees": 36,
                    "gust_max": 14,
                    "velocity_max": 10,
                    "velocity_avg": 7
                },
                "night": {
                    "direction": "ESE",
                    "direction_degrees": 123,
                    "gust_max": 29,
                    "velocity_max": 20,
                    "velocity_avg": 16
                }
            },
            "uv": {
                "max": 15.8
            },
            "thermal_sensation": {
                "min": 16,
                "max": 31
            },
            "text_icon": {
                "icon": {
                    "dawn": "2n",
                    "morning": "2",
                    "afternoon": "4t",
                    "night": "4tn",
                    "day": "4t"
                },
                "text": {
                    "pt": "Sol, pancadas de chuva e trovoadas.",
                    "en": null,
                    "es": null,
                    "phrase": {
                        "reduced": "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
                        "morning": "Sol com algumas nuvens",
                        "afternoon": "Sol, pancadas de chuva e trovoadas.",
                        "night": "Muitas nuvens, chuva e raios",
                        "dawn": "Algumas nuvens"
                    }
                }
            },
            "temperature": {
                "min": 16,
                "max": 30,
                "dawn": {
                    "min": 17,
                    "max": 18
                },
                "morning": {
                    "min": 16,
                    "max": 22
                },
                "afternoon": {
                    "min": 24,
                    "max": 30
                },
                "night": {
                    "min": 21,
                    "max": 28
                }
            },
            "cloud_coverage": {
                "low": 1204.2,
                "mid": 0,
                "high": 0,
                "dawn": {
                    "low": 0,
                    "mid": 0,
                    "high": 0
                },
                "morning": {
                    "low": 0,
                    "mid": 0,
                    "high": 0
                },
                "afternoon": {
                    "low": 3533.3,
                    "mid": 0,
                    "high": 0
                },
                "night": {
                    "low": 1283.3,
                    "mid": 0,
                    "high": 0
                }
            },
            "sun": {
                "sunrise": "05:12:00",
                "sunset": "18:45:00"
            }
        },
        {
            "date": "2019-12-10",
            "date_br": "10/12/2019",
            "humidity": {
                "min": 47,
                "max": 73,
                "dawn": {
                    "min": 67,
                    "max": 73
                },
                "morning": {
                    "min": 47,
                    "max": 71
                },
                "afternoon": {
                    "min": 48,
                    "max": 65
                },
                "night": {
                    "min": 66,
                    "max": 76
                }
            },
            "rain": {
                "probability": 80,
                "precipitation": 32
            },
            "wind": {
                "velocity_min": 3,
                "velocity_max": 18,
                "velocity_avg": 13,
                "gust_max": 29,
                "direction_degrees": 61,
                "direction": "NE",
                "dawn": {
                    "direction": "NE",
                    "direction_degrees": 74,
                    "gust_max": 29,
                    "velocity_max": 18,
                    "velocity_avg": 16
                },
                "morning": {
                    "direction": "N",
                    "direction_degrees": 16,
                    "gust_max": 24,
                    "velocity_max": 16,
                    "velocity_avg": 15
                },
                "afternoon": {
                    "direction": "NW",
                    "direction_degrees": 357,
                    "gust_max": 17,
                    "velocity_max": 12,
                    "velocity_avg": 8
                },
                "night": {
                    "direction": "ESE",
                    "direction_degrees": 110,
                    "gust_max": 20,
                    "velocity_max": 14,
                    "velocity_avg": 12
                }
            },
            "uv": {
                "max": 7.6
            },
            "thermal_sensation": {
                "min": 19,
                "max": 28
            },
            "text_icon": {
                "icon": {
                    "dawn": "4rn",
                    "morning": "4r",
                    "afternoon": "4r",
                    "night": "4rn",
                    "day": "4r"
                },
                "text": {
                    "pt": "Sol com muitas nuvens e chuva",
                    "en": "Sun and rain.",
                    "es": "Sol con muchas nubes durante el día. Períodos de nublado, con lluvia a cualquier hora.",
                    "phrase": {
                        "reduced": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
                        "morning": "Sol com muitas nuvens e chuva",
                        "afternoon": "Sol com muitas nuvens e chuva",
                        "night": "Muitas nuvens e chuva",
                        "dawn": "Muitas nuvens e chuva"
                    }
                }
            },
            "temperature": {
                "min": 19,
                "max": 27,
                "dawn": {
                    "min": 19,
                    "max": 20
                },
                "morning": {
                    "min": 19,
                    "max": 23
                },
                "afternoon": {
                    "min": 25,
                    "max": 27
                },
                "night": {
                    "min": 22,
                    "max": 25
                }
            },
            "cloud_coverage": {
                "low": 970.8,
                "mid": 45.8,
                "high": 0,
                "dawn": {
                    "low": 0,
                    "mid": 0,
                    "high": 0
                },
                "morning": {
                    "low": 0,
                    "mid": 0,
                    "high": 0
                },
                "afternoon": {
                    "low": 2966.7,
                    "mid": 0,
                    "high": 0
                },
                "night": {
                    "low": 916.7,
                    "mid": 183.3,
                    "high": 0
                }
            },
            "sun": {
                "sunrise": "05:12:00",
                "sunset": "18:45:00"
            }
        },
        {
            "date": "2019-12-11",
            "date_br": "11/12/2019",
            "humidity": {
                "min": 56,
                "max": 83,
                "dawn": {
                    "min": 77,
                    "max": 83
                },
                "morning": {
                    "min": 68,
                    "max": 82
                },
                "afternoon": {
                    "min": 56,
                    "max": 63
                },
                "night": {
                    "min": 65,
                    "max": 79
                }
            },
            "rain": {
                "probability": 86,
                "precipitation": 6
            },
            "wind": {
                "velocity_min": 6,
                "velocity_max": 17,
                "velocity_avg": 13,
                "gust_max": 26,
                "direction_degrees": 9,
                "direction": "N",
                "dawn": {
                    "direction": "ENE",
                    "direction_degrees": 49,
                    "gust_max": 26,
                    "velocity_max": 17,
                    "velocity_avg": 14
                },
                "morning": {
                    "direction": "N",
                    "direction_degrees": 5,
                    "gust_max": 26,
                    "velocity_max": 16,
                    "velocity_avg": 16
                },
                "afternoon": {
                    "direction": "N",
                    "direction_degrees": 350,
                    "gust_max": 23,
                    "velocity_max": 15,
                    "velocity_avg": 14
                },
                "night": {
                    "direction": "N",
                    "direction_degrees": 354,
                    "gust_max": 20,
                    "velocity_max": 14,
                    "velocity_avg": 9
                }
            },
            "uv": {
                "max": 14
            },
            "thermal_sensation": {
                "min": 20,
                "max": 28
            },
            "text_icon": {
                "icon": {
                    "dawn": "2n",
                    "morning": "2",
                    "afternoon": "2",
                    "night": "4n",
                    "day": "4"
                },
                "text": {
                    "pt": "Sol e Chuva",
                    "en": "Sun and rain.",
                    "es": "Sol y aumento de nubes. Chubascos aislados en la tarde y en la noche.",
                    "phrase": {
                        "reduced": "Sol com aumento de nuvens ao longo do dia. À noite ocorrem pancadas de chuva.",
                        "morning": "Sol com algumas nuvens",
                        "afternoon": "Sol com algumas nuvens",
                        "night": "Algumas nuvens e chuva",
                        "dawn": "Algumas nuvens"
                    }
                }
            },
            "temperature": {
                "min": 20,
                "max": 27,
                "dawn": {
                    "min": 21,
                    "max": 22
                },
                "morning": {
                    "min": 20,
                    "max": 22
                },
                "afternoon": {
                    "min": 23,
                    "max": 27
                },
                "night": {
                    "min": 22,
                    "max": 25
                }
            },
            "cloud_coverage": {
                "low": 3058.3,
                "mid": 1054.2,
                "high": 0,
                "dawn": {
                    "low": 0,
                    "mid": 1650,
                    "high": 0
                },
                "morning": {
                    "low": 2216.7,
                    "mid": 2383.3,
                    "high": 0
                },
                "afternoon": {
                    "low": 7250,
                    "mid": 183.3,
                    "high": 0
                },
                "night": {
                    "low": 2766.7,
                    "mid": 0,
                    "high": 0
                }
            },
            "sun": {
                "sunrise": "05:13:00",
                "sunset": "18:46:00"
            }
        },
        {
            "date": "2019-12-12",
            "date_br": "12/12/2019",
            "humidity": {
                "min": 43,
                "max": 84,
                "dawn": {
                    "min": 81,
                    "max": 84
                },
                "morning": {
                    "min": 59,
                    "max": 82
                },
                "afternoon": {
                    "min": 43,
                    "max": 54
                },
                "night": {
                    "min": 49,
                    "max": 68
                }
            },
            "rain": {
                "probability": 86,
                "precipitation": 8
            },
            "wind": {
                "velocity_min": 6,
                "velocity_max": 23,
                "velocity_avg": 18,
                "gust_max": 39,
                "direction_degrees": 319,
                "direction": "NW",
                "dawn": {
                    "direction": "NW",
                    "direction_degrees": 331,
                    "gust_max": 39,
                    "velocity_max": 23,
                    "velocity_avg": 20
                },
                "morning": {
                    "direction": "NW",
                    "direction_degrees": 323,
                    "gust_max": 35,
                    "velocity_max": 23,
                    "velocity_avg": 23
                },
                "afternoon": {
                    "direction": "WNW",
                    "direction_degrees": 310,
                    "gust_max": 33,
                    "velocity_max": 22,
                    "velocity_avg": 19
                },
                "night": {
                    "direction": "WNW",
                    "direction_degrees": 305,
                    "gust_max": 18,
                    "velocity_max": 15,
                    "velocity_avg": 11
                }
            },
            "uv": {
                "max": 14.9
            },
            "thermal_sensation": {
                "min": 21,
                "max": 31
            },
            "text_icon": {
                "icon": {
                    "dawn": "2n",
                    "morning": "2",
                    "afternoon": "2",
                    "night": "4tn",
                    "day": "4t"
                },
                "text": {
                    "pt": "Sol, pancadas de chuva e trovoadas.",
                    "en": null,
                    "es": null,
                    "phrase": {
                        "reduced": "Sol com aumento de nuvens ao longo do dia. À noite ocorrem pancadas de chuva.",
                        "morning": "Sol com algumas nuvens",
                        "afternoon": "Sol com algumas nuvens",
                        "night": "Muitas nuvens, chuva e raios",
                        "dawn": "Algumas nuvens"
                    }
                }
            },
            "temperature": {
                "min": 21,
                "max": 29,
                "dawn": {
                    "min": 21,
                    "max": 23
                },
                "morning": {
                    "min": 21,
                    "max": 23
                },
                "afternoon": {
                    "min": 24,
                    "max": 29
                },
                "night": {
                    "min": 26,
                    "max": 29
                }
            },
            "cloud_coverage": {
                "low": 1562.5,
                "mid": 91.7,
                "high": 0,
                "dawn": {
                    "low": 0,
                    "mid": 0,
                    "high": 0
                },
                "morning": {
                    "low": 2216.7,
                    "mid": 0,
                    "high": 0
                },
                "afternoon": {
                    "low": 1833.3,
                    "mid": 0,
                    "high": 0
                },
                "night": {
                    "low": 2200,
                    "mid": 366.7,
                    "high": 0
                }
            },
            "sun": {
                "sunrise": "05:13:00",
                "sunset": "18:47:00"
            }
        }
    ]
    return (
        <div id="section-home" className="dashboard">
            <Header dataWeather={data} />
            <WeatherTabs dataWeather={data} />
        </div>
    )
}

export default Dashboard