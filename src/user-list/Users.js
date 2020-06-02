import React from 'react';

export default function Users(props) {
    let users = props.data;

    let userList = users.map(function(user, index){
        return (<tr key={index} className="userName">
            <td onClick={()=>props.edit(index)}>{user.fName} {user.lName}</td>
            <td>
                <button onClick={()=>props.delete(index)} className="btn btn-danger">Delete</button>
            </td>
        </tr>);
    })
    return userList;
}