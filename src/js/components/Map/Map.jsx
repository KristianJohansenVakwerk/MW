import React, {Component} from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// global map styles
const defaultStyle = require("./styles.json");
const factoryStyle = require("./factory.json");
const kitchenStyle = require("./kitchen.json");
const foodlabStyle = require("./foodlab.json");


class Map extends Component {

mapStyles;

shouldComponentUpdate () {

	return false;

}

  render () {
  	
  	let marker = (this.props.markerColour != "") ? this.props.markerColour : '#000000'
  	// SVG marker icon
  	let icon = {
	    path: "M-10,0a10,10 0 1,0 20,0a10,10 0 1,0 -20,0Z",
	    fillColor: marker,
	    fillOpacity: 1,
	    strokeWeight: 0,
	    scale: 1
	}

	if(this.props.icon) icon = {...icon,...this.props.icon};

	const height = this.props.height || '100%';
	const scrollWheel = this.props.scrollWheel || false;
	const zoom = this.props.zoom || 15;

	const defaultUI = this.props.defaultUI || true;

	//position object from props
	const latlng = {
		lat: parseFloat(''+this.props.lat),
		lng: parseFloat(''+this.props.lng)
	}

	
	switch (this.props.styles) {

		case "food-factory":
			this.mapStyles = factoryStyle
			break;
		case "kitchen":
			this.mapStyles = kitchenStyle
			break;
		case "food-lab":
			this.mapStyles = foodlabStyle
			break;
		default:
			this.mapStyles = defaultStyle
	}


  	const MyMapComponent = withScriptjs(withGoogleMap((props) =>
		  <GoogleMap
		    defaultZoom={zoom}
		    defaultCenter={latlng}
		    defaultOptions={{ scrollwheel:scrollWheel, styles: this.mapStyles, disableDefaultUI: !defaultUI}}>
		    	<Marker position={latlng} icon={icon} />
		  </GoogleMap>
		))

    return (

      <div className="Map" >

      	<MyMapComponent
			  isMarkerShown
			  googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+this.props.apikey+"&v=3.exp&libraries=geometry,drawing,places"}
			  loadingElement={<div style={{ width: '100%', height: `100%` }} />}
			  containerElement={<div style={{ width: '100%', height: height }} />}
			  mapElement={<div style={{ width: '100%', height: `100%` }} />}
			/>
        
      </div>
    )
  }
}

export default Map
