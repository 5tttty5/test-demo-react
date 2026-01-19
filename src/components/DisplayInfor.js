import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {

    constructor(props) {
        console.log(">>> calll constructor:1");
        super(props);
        // phải dùng this trong react
        this.state = {
            isShow: true
        }
    }

    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    componentDidMount() {
        console.log(">>call me componentdidmount")
        setTimeout(() => {
            document.title = 'thoennn'
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(">>call me componentdidupdate", this.props, prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('you got 5 userrs')
            }
        }
    }

    render() {
        console.log('>> call mee render')

        const { listUsers } = this.props;
        // console.log(listUsers);
        // console.table(listUsers)

        // template + logic js 
        return (

            <div className='display-infor-container'>
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>

                        {this.state.isShow === true ? "Hide list users:" : "Show list users:"} </span>
                </div>
                {this.state.isShow &&
                    <>
                        {listUsers.map((user) => {

                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>Name: {user.name}</div>
                                    <div>Age: {user.age} </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>X</button>
                                    </div>
                                    <hr />
                                </div>
                            )





                        })}


                    </>
                }
            </div>
        )
    }
}


export default DisplayInfor;