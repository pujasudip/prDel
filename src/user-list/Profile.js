import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './common.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'fName': '',
            'lName': '',
            'email': '',
            'phone': '',
            'address': ''
        }
        this.userData = [];
    }


    componentDidMount() {
        let userData = localStorage.getItem('userData');

        if(userData) {
            this.userData = JSON.parse(userData);
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            "fName": this.state.fName,
            "lName": this.state.lName,
            "email": this.state.email,
            "phone": this.state.phone,
            "address": this.state.address
        }

        this.userData.push(user);

        localStorage.setItem('userData', JSON.stringify(this.userData));

        this.props.history.push('/');
    }

    renderInput = (e) => {
        let {name, value } = e.target;
        this.setState({
            [name] : value
        });
    }

    render() {
        return (<form onSubmit={this.handleSubmit} className="col-6 mx-auto">
            <div className="form-group">
                <label>First Name:</label>
                <input name="fName" value={this.state.fName} onChange={this.renderInput} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Last Name:</label><input name="lName" value={this.state.lName} onChange={this.renderInput} className="form-control"/>
            </div>
            <div>
                <label>Email:</label><input name="email" value={this.state.email} onChange={this.renderInput} className="form-control"/>
            </div>
            <div>
                <label>Phone:</label><input name="phone" value={this.state.phone} onChange={this.renderInput} className="form-control"/>
            </div>
            <div>
                <label>Address:</label><input name="address" value={this.state.address} onChange={this.renderInput} className="form-control"/>
            </div>
            <div className="mt-4">
                <button className="btn btn-primary btnSbt">Submit</button>
                <Link to="/"><button className="btn btn-warning btnHome">Home</button></Link>
            </div>
        </form>);
    }
}

export default Profile;