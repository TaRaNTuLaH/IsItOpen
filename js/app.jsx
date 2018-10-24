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


class Map extends React.Component{
    render(){
        return <div className={"map"}>
            <img src={"./images/mapa.jpg"}/>
        </div>

    }
}
class App extends React.Component{
    render(){
        return <div>
            <Header/>
            <Map/>
            <Footer/>
        </div>
    }
}


document.addEventListener("DOMContentLoaded",function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')

    );
});
