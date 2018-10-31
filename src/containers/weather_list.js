import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class WeatherList extends Component {
    renderWeather(cityData) {
        const cityName = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp)
        console.log(temps)

        return (
            <tr key={cityName}>
                <td>{cityName}</td>
            </tr>
        )
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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