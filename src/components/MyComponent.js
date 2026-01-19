// class component
// function component

import React from "react";
import AddUserInfor from './AddUserInfor';
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Hoidanit", age: "16" },
            { id: 2, name: "thoien", age: "26" },
            { id: 3, name: "dung", age: "69" },
        ]
    }
    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (UserId) => {
        let listUsersClone = [...this.state.listUsers]

        listUsersClone = listUsersClone.filter(item => item.id !== UserId)
        this.setState({
            listUsers: listUsersClone
        })
    }
    //JSX
    render() {
        const test = true;

        return (
            <>
                {test}
                <br />
                <div className='a'>

                    <AddUserInfor handleAddNewUser={this.handleAddNewUser}></AddUserInfor>
                    <DisplayInfor
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    ></DisplayInfor>
                </div>
                <div className='b'>

                </div>
            </>
        );
    }
}

export default MyComponent;