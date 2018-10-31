import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'

class WeatherList extends Component {
    renderWeather(cityData) {
        const cityName = cityData.city.name
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidities = cityData.list.map(weather => weather.main.humidity)

        return (
            <tr key={cityName}>
                <td>{cityName}</td>
                <td><Chart data={temps} color='orange' units='C' /></td>
                <td><Chart data={pressures} color='green' units='hPa' /></td>
                <td><Chart data={humidities} color='black' units='%' /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)} 
                </tbody>
            </table>
        ) // we map to props cities from the search
    }
}

function mapStateToProps({ weather }) { //would be state and then weather:state.weather below but we can access it
    // like this as well, as weather above works like const weather = state.weather
    return { weather } //weather is assigned in index reducer with reducer_weather
}

export default connect(mapStateToProps)(WeatherList)