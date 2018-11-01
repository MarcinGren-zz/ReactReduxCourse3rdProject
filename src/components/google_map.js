import React, { Component } from 'react'

class GoogleMap extends Component {
    //gets called after component gets rendered to the screen
    componentDidMount() {
        //creates an embedded map inside a document, finds ref=map and embeds map into it as theyre not a part
        // of react ecosystem
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }


    render() {
        //this.refs.map to refer to it
        return <div ref='map' />
    }
}

export default GoogleMap