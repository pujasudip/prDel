import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileEdit extends Component {
    constructor(props) {
        super(props);
        this.user = '';
        this.state = {
            'fName': '',
            'lName': '',
            'email': '',
            'phone': '',
            'address': ''
        }
        this.id = '';
    }

    componentWillMount() {
        this.id = this.props.match.params.id;

        let userData = localStorage.getItem('userData');
        this.user = JSON.parse(userData)[this.id];
        this.setState({
            'fName': this.user.fName,
            'lName': this.user.lName,
            'email': this.user.email,
            'phone': this.user.phone,
            'address': this.user.address
        });

    }

    changeUserData = (e) => {
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    onChangeSubmit = (e) => {
        e.preventDefault();
        let userData = localStorage.getItem('userData');
        if(userData){
            userData = JSON.parse(userData);
        }
        userData.splice(this.id, 1);
        userData.splice(this.id, 0, {
            'fName': this.state.fName,
            'lName': this.state.lName,
            'email': this.state.email,
            'phone': this.state.phone,
            'address': this.state.address
        })
        localStorage.clear();
        localStorage.setItem('userData', JSON.stringify(userData));
        this.props.history.push('/');
    }

    render() {

        console.log('edit:', this.props.match.params.id);
        return (<form onSubmit={this.onChangeSubmit} className="col-9 mx-auto">
            <div className="form-group">
                <label>First Name:</label><input name="fName" value={this.state.fName} onChange={this.changeUserData} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Last Name:</label><input name="lName" value={this.state.lName} onChange={this.changeUserData} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Email:</label><input name="email" value={this.state.email} onChange={this.changeUserData} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Phone:</label><input name="phone" value={this.state.phone} onChange={this.changeUserData} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Address:</label><input name="address" value={this.state.address} onChange={this.changeUserData} className="form-control"/>
            </div>
            <div>
                <button onClick={this.onChangeSubmit} className="btn btn-primary btnSbt">Update</button>
                <Link to="/"><button className="btn btn-outline-primary btnHome">Home</button></Link>
            </div>

        </form>);
    }
}

export default ProfileEdit;