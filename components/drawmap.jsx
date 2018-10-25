import React from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet/dist/leaflet.css'
import FireBase from "./firebase.js"

class DrawMap extends React.Component {
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);

    }
    state = {
        lat: 51.1107811,
        lng: 17.016858,
        zoom: 10,
        markers: []
    };


    handleOnClick(e){
        this.props.database.ref.push({
            "Lattitude": e.latlng.lat,
            "Longitude": e.latlng.lng
        });
        this.props.database.getData((data)=>{
            const arr = [];
        for(const key in data){
            arr.push({lat:data[key].Lattitude,
            lng:data[key].Longitude})
        }
        this.setState({
            markers: arr
        })
        })
    }



    render() {
        const position = [this.state.lat, this.state.lng];

        return (
            <Map style={ { width: '100%', height:"700px" ,zIndex: "1"} } center={position} zoom={this.state.zoom} onClick = {this.handleOnClick}>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {this.state.markers.map((el,index)  => {
                    return <Marker position ={el} key={index}>

                    </Marker>
                })}

            </Map>
        )
    }
}

export default DrawMap;