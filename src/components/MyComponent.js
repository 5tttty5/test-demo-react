// class component
// function component

import React from "react";
import UserInfor from './Userinfor';
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Hoidanit", age: "16" },
            { id: 2, name: "thoien", age: "26" },
            { id: 3, name: "dung", age: "69" },
        ]
    }

    //JSX
    render() {
        return (
            <div>

                <UserInfor></UserInfor>
                <DisplayInfor
                    listUsers={this.state.listUsers}

                ></DisplayInfor>
            </div>

        );
    }
}

export default MyComponent;