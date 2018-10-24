import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss'
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"
import DrawMap from "../components/drawmap.jsx"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet/dist/leaflet.css'



class App extends React.Component{
    render(){
        return <div>
            <Header/>
            <DrawMap/>
            <Footer/>
        </div>
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});

