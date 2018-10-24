import React from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet/dist/leaflet.css'
import FireBase from "./firebase.js"

class DrawMap extends React.Component {
    state = {
        lat: 51.1107811,
        lng: 17.016858,
        zoom: 10,
    };

    componentDidMount(){
        let dataBase = new FireBase();
        console.log(dataBase.config);
        console.log(dataBase);
    }
    render() {
        const position = [this.state.lat, this.state.lng];

        return (
            <Map style={ { width: '100%', height:"700px" } } center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </Map>
        )
    }
}

export default DrawMap;