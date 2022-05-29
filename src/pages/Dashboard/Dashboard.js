import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hook/UseAdmin';
const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile mt-5">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <h2>Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to={'/dashboard'} className="text-secondary font-semibold">Profile</Link></li>
                    {user && !admin.admin && <li><Link to={'/dashboard/myreview'} className="text-secondary font-semibold">Add a Review</Link></li>}
                    {
                        user && !admin.admin && <li><Link to={'/dashboard/myorders'} className="text-secondary font-semibold">My Orders</Link></li>
                    }
                    {admin.admin && <li><Link to={'/dashboard/allusers'} className="text-secondary font-semibold">Make Admin</Link></li>}

                    {admin.admin && <li><Link to={'/dashboard/addproduct'} className="text-secondary font-semibold">Add products</Link></li>}

                    {admin.admin && <li><Link to={'/dashboard/allproduct'} className="text-secondary font-semibold">Manage product</Link></li>}

                    {admin.admin && <li><Link to={'/dashboard/manageallproducts'} className="text-secondary font-semibold">Manage All Orders</Link></li>}
                </ul>

            </div>
        </div>


    )
}

export default Dashboard