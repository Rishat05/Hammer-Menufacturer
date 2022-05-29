import React from 'react';
import PageFound from '../../assets/images/pageFound.jpg';
const PageNotFound = () => {
    return (
        <div className="card card-compact max-w-md mx-auto bg-base-100 shadow-xl" >
            <figure><img src={PageFound} alt="Shoes" /></figure>
            <div className="card-body" >
                <h2 className="card-title" > 404 Page Not Found</h2 >

            </div >
        </div >
    );
};

export default PageNotFound;