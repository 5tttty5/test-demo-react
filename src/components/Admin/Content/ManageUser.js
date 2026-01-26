
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModelCreateUser from './ModelCreateUser';
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';
import { useEffect, useState } from "react";
import { getAllUsers } from '../../../services/apiService'

const ManageUser = (props) => {

    const [showModelCreateUser, setShowModelCreateUser] = useState(false);
    const [listUsers, setListUsers] = useState([])
    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        console.log(res);
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>

            <div className="users-content">
                <div className='btn-add-new'>
                    <button className='btn btn-primary' onClick={() => setShowModelCreateUser(true)}><FcPlus></FcPlus> Add new users</button>
                </div>
                <div>
                    <TableUser listUsers={listUsers} />

                </div>
                <ModelCreateUser show={showModelCreateUser}
                    setShow={setShowModelCreateUser}
                    fetchListUsers={fetchListUsers}
                ></ModelCreateUser>
            </div>
        </div>
    )
}

export default ManageUser;