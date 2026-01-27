
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModelCreateUser from './ModelCreateUser';
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';
import { useEffect, useState } from "react";
import { getAllUsers } from '../../../services/apiService'
import ModelUpdateUser from './ModelUpdateUser';

const ManageUser = (props) => {
    const [showModelUpdateUser, setShowModelUpdateUser] = useState(false);
    const [showModelCreateUser, setShowModelCreateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

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

    const handleClickBtnUpdate = (user) => {
        setShowModelUpdateUser(true);
        setDataUpdate(user);

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
                    <TableUser listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                    />

                </div>
                <ModelCreateUser show={showModelCreateUser}
                    setShow={setShowModelCreateUser}
                    fetchListUsers={fetchListUsers}
                ></ModelCreateUser>
                <ModelUpdateUser
                    show={showModelUpdateUser}
                    setShow={setShowModelUpdateUser}
                    dataUpdate={dataUpdate}
                />
            </div>
        </div>
    )
}

export default ManageUser;