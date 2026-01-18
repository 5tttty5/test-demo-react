import React from "react";

class DisplayInfor extends React.Component {

    render() {
        const { listUsers } = this.props;
        console.log(listUsers);


        return (


            <div>
                {listUsers.map((user) => {

                    return (
                        <div key={user.id}>
                            <div>Name: {user.name}</div>
                            <div>Age: {user.age} </div>
                            <hr />
                        </div>
                    )
                })}

                {/* <div>Name: {this.props.name}</div>
                <div>Age: {this.props.age}</div>
                <hr />
                <div>Name: {this.props.name}</div>
                <div>Age: {this.props.age}</div>
                <hr />
                <div>Name: {this.props.name}</div>
                <div>Age: {this.props.age}</div> */}

            </div>)
    }
}


export default DisplayInfor;