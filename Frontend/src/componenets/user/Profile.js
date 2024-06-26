import React, { Fragment , useEffect } from 'react';
import MetaData from '../layout/metadata';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import Loader from '../layout/Loader/loader';
import './Profile.css'
import { useNavigate } from 'react-router-dom';

function Profile() {
    const { user, loading, isAuthenticated } = useSelector(state => state.user);
    console.log("This is called")
    console.log("is Auth", user);
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated === false) {
        navigate("/login");
        }
      }, [navigate , isAuthenticated]);

    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <h1>Hiiiiiii</h1>
                    <p>{user && user.name}</p>
                    <MetaData title={`${user && user.name}'s Profile`} />
                   <div className='profileContainer'>
                    <div>
                        <h1>My Profile</h1>
                        <img src={user && user.avatar.url} alt={user.name} />
                        <Link to="/me/update">Edit Profile</Link>
                    </div>
                    <div>
                        <div>
                            <h4>Full Name</h4>
                            <p>{user.name}</p>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p>{user.email}</p>
                        </div>
                        <div>
                            <h4>Joined On</h4>
                            <p>{String(user.createdAt).substr(1 , 10)}</p>
                        </div>

                        <div>
                            <Link to="/orders">My Orders</Link>
                            <Link to="/password/update">Change Password</Link>
                        </div>
                    </div>
                   </div>
                </Fragment>}
        </Fragment>

    );
}

export default Profile;
