// class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "thien",
        address: "hoi dan ti",
        age: 21
    };


    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name}

            </div>
        );
    }
}

export default MyComponent;