import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { term: '' }
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    //all functions based on onChange come with event (vanilla js thing)
    onInputChange(event) {
        this.setState({ term: event.target.value})
        //since this is referenced by callback this wont refer to SearchBar
    }

    onFormSubmit(event) {
        event.preventDefault()
        //fetch weather data
        this.props.fetchWeather(this.state.term)
        this.setState( {term: ''} )
    }

    render() {
      return (
        <form 
        onSubmit={this.onFormSubmit}
        className='input-group'>
            <input 
                placeholder='Get a five day forecast'
                className='form-control'
                value={this.state.term}
                onChange={this.onInputChange}/>        
            <span className='input-group-btn'>
                <button type='submit' className='btn btn-secondary'>Submit</button>
            </span>
        </form>
      )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {fetchWeather}, dispatch )
}

export default connect(null, mapDispatchToProps)(SearchBar)
//using null here as mapDispatch must be 2nd arg, just that. This container doesnt care about state