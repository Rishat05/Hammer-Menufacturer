import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hook/UseAdmin';
const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="dashboard-drawer" className="text-black font-bold mt-10"><span className='border-2 border-indigo-600 rounded-r-lg p-2 mt-10 text-2xl'>&gt;</span> </label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to={'/dashboard'} className="text-secondary font-semibold">Profile</Link></li>
                    <li><Link to={'/dashboard/myreview'} className="text-secondary font-semibold">Review</Link></li>
                    <li><Link to={'/dashboard/myorders'} className="text-secondary font-semibold">My Orders</Link></li>
                    {admin.admin && <li><Link to={'/dashboard/allusers'} className="text-secondary font-semibold">All users</Link></li>}

                    {admin.admin && <li><Link to={'/dashboard/addproduct'} className="text-secondary font-semibold">Add products</Link></li>}

                    {admin.admin && <li><Link to={'/dashboard/allproduct'} className="text-secondary font-semibold">Mange product</Link></li>}

                </ul>
            </div>
        </div>
    )
}

export default Dashboard