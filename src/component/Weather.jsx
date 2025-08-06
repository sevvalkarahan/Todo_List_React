import React, { useEffect, useState } from 'react'
import "../css/weather.css"
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";


function Weather() {

    const [weatherData, setWeatherData] = useState(null);
    const [input, setInput] = useState("");


    const API_URL = "https://api.openweathermap.org/data/2.5/weather?q="
    const API_key = "5f89cc787666cf80d4c967493e4d56b4";



    const dayApi = async () => {
        try {
            const response = await axios.get(`${API_URL}istanbul&appid=${API_key}&units=metric&lang=tr`);
            setWeatherData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Hava durumu verisi alınırken hata oluştu:", error);
        }
    };

    const citySearch = async () => {
        try {
            const response = await axios.get(`${API_URL}${input}&appid=${API_key}&units=metric&lang=tr`);
            setWeatherData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Hava durumu verisi alınırken hata oluştu:", error);
        }
        setInput("")
    }


    useEffect(() => {
        dayApi();
    }, [])

    if (!weatherData) {
        return <div>Yükleniyor...</div>;
    }


    return (
        <div className='weather-container'>
            <div className='weather-input'>
                <input value={input} onChange={(e) => setInput(e.target.value)} type='text' placeholder='Şehir Giriniz' />
                <FaSearch onClick={citySearch} style={{ cursor: "pointer", color: "white" }} />
            </div>
            <div className='weather-city'>
                <div style={{ width: "100%", height: "40%", display: "flex", justifyContent: "center" }}>
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} />
                </div>
                <div className='weather-city-details'>
                    <div style={{ width: "100%", height: "50%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <span style={{ fontWeight: "bold", color: "white" }}>{`${weatherData.name}, ${weatherData.sys.country}`}</span>
                        <span style={{ color: "white" }}>{Math.round(weatherData.main.temp)}°C</span>
                        <span style={{ fontStyle: "italic", color: "gray", color: "white" }}>{weatherData.weather[0].description}</span>
                    </div>
                    <div style={{ color: "white", width: "100%", height: "40%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                        <span style={{ color: "white", fontSize: "17px" }}>
                            <FaDroplet style={{ color: "blue", marginRight: "5px" }} />
                            {weatherData.main.humidity}%
                        </span>
                        <span style={{ fontSize: "17px" }}>
                            <FaWind style={{ color: "red", marginRight: "5px" }} />
                            {weatherData.wind.speed} km/s
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Weather
