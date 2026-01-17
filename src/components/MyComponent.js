// class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "thien",
        address: "hoi dan ti",
        age: 21
    };

    handleClick = (event) => {
        console.log("click me my buttoon");

        // merge state => react class
        this.setState({
            name: "Erix",
            age: Math.floor((Math.random() * 100) + 1)
        })
        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }


    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and age is {this.state.age}
                <button onClick={this.handleClick}> lick me </button>

            </div>
        );
    }
}

export default MyComponent;