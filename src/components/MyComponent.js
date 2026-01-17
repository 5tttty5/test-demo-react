// class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "thien",
        address: "hoi dan ti",
        age: 21
    };

    handleClick() {
        console.log("click me my buttoon")
    }


    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name}
                <button onClick={this.handleClick}> lick me </button>

            </div>
        );
    }
}

export default MyComponent;