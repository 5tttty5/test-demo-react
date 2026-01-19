import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {

    state = {
        isShow: true
    }
    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        const { listUsers } = this.props;
        // console.log(listUsers);
        // console.table(listUsers)

        return (

            <div className='display-infor-container'>
                <img src={logo} />
                <div>
                    <span onClick={() => { this.handleShowHide() }}>

                        {this.state.isShow === true ? "Hide list users:" : "Show list users:"} </span>
                </div>
                {this.state.isShow &&
                    <div>
                        {listUsers.map((user) => {

                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>Name: {user.name}</div>
                                    <div>Age: {user.age} </div>
                                    <hr />
                                </div>
                            )





                        })}


                    </div>
                }
            </div>
        )
    }
}


export default DisplayInfor;