import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';


//stateless và stateful
// class DisplayInfor extends React.Component {


//     render() {
//         console.log('>> call mee render')

//         const { listUsers } = this.props;
//         // console.log(listUsers);
//         // console.table(listUsers)

//         // template + logic js 
//         return (

//             <div className='display-infor-container'>


//                 {true &&
//                     <>
//                         {listUsers.map((user) => {

//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>Name: {user.name}</div>
//                                     <div>Age: {user.age} </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>X</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )





//                         })}


//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;

    return (

        <div className='display-infor-container'>


            {true &&
                <>
                    {listUsers.map((user) => {

                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>Name: {user.name}</div>
                                <div>Age: {user.age} </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>X</button>
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



export default DisplayInfor;