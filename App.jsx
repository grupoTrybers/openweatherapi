import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=ff71599b9e11ad701438eb58a8ba36cd'
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="App">
      <div className="search">
        <input
        value= {location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="digite a cidade desejada"
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>

          </div>
          <div className="temp">
            {data.main ? <p>{data.main.temp}</p> : null }
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null }
          </div>
        </div>
        {data.name !== undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like}</p> : null}
            <p>Feels like</p> 
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}</p> : null}
            <p>Humidity</p> 
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed}</p> : null}
            <p>Wind</p> 
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default App
