import React from "react";


import FireBase from "../components/firebase.js";

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            OpenFrom: '',
            OpenTo: '',
            AdditionalInfo: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit(e) {
        alert('Thanks for contribution!');
        this.props.database.getData((response) => {response});

        e.preventDefault();
        this.setState({OpenFrom: '',OpenTo: '', Name: '', AdditionalInfo: ''})
    }
    render(){

        return <div className = "form" >
            <h3>Add New Store</h3>
            <form  onSubmit={this.handleSubmit}>
                <label> Name </label>
                <input disabled className = "shop" type="text" name="Name" placeholder="Please enter name of the store"  value={this.state.Name} onChange={this.handleChange}/>
                <label>Open From </label>
                <input disabled className = "open" type="text" name="OpenFrom" value={this.state.OpenFrom} onChange={this.handleChange}/>
                <label>Open To </label>
                <input disabled className = "open" type="text" name="OpenTo" value={this.state.OpenTo} onChange={this.handleChange}/>
                <label  className="center">Additional Informations</label>
                <input  disabled className = "additional" type = "textarea" name="AdditionalInfo" value={this.state.AdditionalInfo} onChange={this.handleChange}/>
                <input  disabled className = "btn-send" type="submit" value="Submit" />


            </form>

        </div>

    }

}

export default Form