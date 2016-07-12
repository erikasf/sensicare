'use strict'
import React, { Component } from 'react'

import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

import fancyMapStyles from './map/mapStyle.json' 

export default class Map extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      markers: this.props.markers
    }
  }

  componentDidMount(){
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      markers: nextProps.markers
    })
  }

  renderMarkers(){
    let markers = []
    if (this.state.markers != null) {
      markers = this.state.markers.map((marker, index) => {
      var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/schools_maps.png';
        return (
          <Marker
            key={index}
            position={marker.position}
            icon={iconBase}
          >
          </Marker>
        )
      })
    } 
   
    return markers
  }

  render(){
    return (
      <div>
        <GoogleMapLoader
        containerElement={
          <div
            {...this.props.containerElementProps}
            style={{
              height: "300px",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={18}
            defaultCenter={{lat: 37.435267, lng: -122.174777}}
            onClick={this.props.onMapClick}
            defaultOptions={{ styles: fancyMapStyles }}
          >
            {this.renderMarkers()}
          </GoogleMap>
        }
      />
    </div>
    );
  }
}

Map.propTypes = {
  center: React.PropTypes.array,
  zoom: React.PropTypes.number,
  greatPlaceCoords: React.PropTypes.any
};

Map.defaultProps = {
  center: [59.938043, 30.337157],
  zoom: 18,
  greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
};

