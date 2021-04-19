import { faArrowRight, faCamera, faHome, faPen, faPlus, faTasks, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Dashboard from '../Dashboard/Dashboard';
import './Sidebar.css'
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isadmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 col-sm-6 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/home" className="link">
                        <FontAwesomeIcon icon ={faHome}/><span>Home</span>
                    </Link>
                </li>
                <br/>
                <li>
                    <Link to="/bookorder" className="link">
                        <FontAwesomeIcon icon={faArrowRight} /><span>Book Order</span>
                    </Link>
                </li>
                <br />
                <li>
                    <Link to="/bookings" className="link">
                        <FontAwesomeIcon icon={faCamera} /><span>Bookings</span>
                    </Link>
                </li>
                <br />
                <li>
                    <Link to="/addreview" className="link">
                        <FontAwesomeIcon icon={faPen} /><span>Reviews</span>
                    </Link>
                </li>
                <br />
                {isAdmin && <div>
                    <li>
                        <Link to="/addservice" className="link">
                            <FontAwesomeIcon icon={faPlus} /><span>Add Service</span>
                        </Link>
                    </li>
                    <br />
                    <li>
                        <Link to="/addadmin" className="link">
                            <FontAwesomeIcon icon={faUserFriends} /><span>Add Admin</span>
                        </Link>
                    </li>
                </div>}
            </ul>
        </div>
    );
};

export default Sidebar;