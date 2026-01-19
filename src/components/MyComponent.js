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

        let listUsersClone = [...this.state.listUsers]

        // this.setState({
        //     listUsers: [userObj, ...this.state.listUsers]
        // })
    }
    //JSX
    render() {
        return (
            <div>

                <AddUserInfor handleAddNewUser={this.handleAddNewUser}></AddUserInfor>
                <DisplayInfor
                    listUsers={this.state.listUsers}

                ></DisplayInfor>
            </div>

        );
    }
}

export default MyComponent;