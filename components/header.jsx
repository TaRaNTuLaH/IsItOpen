import React from "react"
class Header extends React.Component{
    render(){
        return <div className={"header"}>
            <div className={"logo"}><img src={"./images/logo.png"}/></div>
            <ul className={"navBar"}>
                <li> Main Page </li>
                <li> Change Log </li>
                <li> About</li>
                <li> Contact</li>
            </ul>
        </div>
    }
}

export default Header
