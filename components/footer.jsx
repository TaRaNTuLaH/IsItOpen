import React from "react"
class Footer extends React.Component{
    render(){
        return <div className={"footer"}>
            <p className={"rights"}>&#169; Dawid Czarnecki</p>
            <ul className={"getInTouch"}>
                <li> <a href="https://www.linkedin.com/in/dawid-czarnecki-24ba04157/"> <i className="fab fa-linkedin"> </i> </a> </li>
                <li> <a href="https://github.com/TaRaNTuLaH"> <i className="fab fa-github"> </i> </a> </li>
                <li> <a href="https://www.facebook.com/dawid.czarnecki"> <i className="fab fa-facebook-square"> </i> </a> </li>
            </ul>

        </div>
    }
}

export default Footer
