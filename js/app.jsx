import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss'
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"
import DrawMap from "../components/drawmap.jsx"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet/dist/leaflet.css'
import Form from "./../components/form.jsx"
import FireBase from "../components/firebase";



class App extends React.Component{
    constructor(props){
        super(props);
        this.firebase = new FireBase;
    }

    render(){
        return <div>
            <Header/>
            <DrawMap database={this.firebase}/>
            <Footer/>
            <Form database={this.firebase}/>
        </div>
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});

