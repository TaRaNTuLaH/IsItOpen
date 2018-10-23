import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss'

class Header extends React.Component{
    render(){
        return <div>
            <ul style={{listStyle: "none", display: "flex", justifyContent: "space-between"}}>
                <li><a href="/main">Main Page</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About</a></li>
            </ul>
               </div>
    }
}
class Jakub extends React.Component{
    render(){
        return<div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque cupiditate dignissimos eius harum numquam recusandae velit? Adipisci aperiam consequatur culpa cum excepturi ipsum mollitia necessitatibus, placeat, praesentium, quasi rem?</p>
        </div>
    }
}

class App extends React.Component{
    render(){
        return<div className={"testing"}>
            <Header/>
            <Jakub/>
        </div>
    }
}

document.addEventListener("DOMContentLoaded",function(){

    ReactDOM.render(
        <App/>,
        document.getElementById('app')

    );
});
