import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModelCreateUser from './ModelCreateUser';
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';


const ManageUser = (props) => {

    const [showModelCreateUser, setShowModelCreateUser] = useState(false);
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
                    <TableUser />

                </div>
                <ModelCreateUser show={showModelCreateUser}
                    setShow={setShowModelCreateUser}
                ></ModelCreateUser>
            </div>
        </div>
    )
}

export default ManageUser;