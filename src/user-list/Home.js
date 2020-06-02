import React, { Component } from 'react';
import  Users from './Users';
import { Link } from 'react-router-dom';
import './common.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentWillMount() {
        let userData = localStorage.getItem('userData');
        if(userData) {
            this.setState({
                users: JSON.parse(userData)
            });
        }
    }

    deleteUser = (user) => {
        let users = this.state.users;
        users.splice(user, 1);
        localStorage.clear();
        if(users.length > 0){
            localStorage.setItem('userData', JSON.stringify(users));
        }
        this.setState({
            users: users
        });
    }

    editUser = (index) => {
        console.log('hs:', this.props);
        this.props.history.push(`/edit/${index}`);
    }

    render() {
        // let userList = '';
        // if(this.users !== ''){
        //     userList = this.state.users.map(function(data, index){
        //         console.log('data:', data);
        //         return <Users user={data} key={index} delete={()=>this.deleteUser}/>
        //     });
        // }


        return <div className="container">
            <h2 className="text-center">Profile List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/*{userList}*/}
                    <Users data={this.state.users} delete={this.deleteUser} edit={this.editUser}/>
                </tbody>
            </table>
            <div className="btnProfile">
                <Link to="/profile"><button className="btn btn-primary">New Profile</button></Link>
            </div>
        </div>
    }
}

export default Home;