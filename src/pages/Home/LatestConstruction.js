import React from 'react';
import latest1 from '../../assets/images/latest1.jpg';
import latest2 from '../../assets/images/latest2.jpg';
import latest3 from '../../assets/images/latest3.jpg';
const LatestConstruction = () => {
    return (

        <div>
            <h3 className='text-primary text-5xl text-center font-bold mb-4'>Our Latest Construction</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={latest1} alt="Shoes" className="rounded-xl h-56" />
                    </figure>
                    <div className="card-body items-center text-center">
                        {/* <h2 className="card-title">hammer </h2> */}

                    </div>
                </div >
                <div className="card w-full bg-base-100 shadow-xl" >
                    <figure className="px-10 pt-10" >
                        <img src={latest2} alt="Shoes" className="rounded-xl h-56" />
                    </figure >
                    <div className="card-body items-center text-center" >
                        {/* <h2 className="card-title">Shoes!</h2> */}

                    </div >
                </div >
                <div className="card w-full bg-base-100 shadow-xl" >
                    <figure className="px-10 pt-10" >
                        <img src={latest3} alt="Shoes" className="rounded-xl h-56" />
                    </figure >
                    <div className="card-body items-center text-center" >
                        {/* <h2 className="card-title">Shoes!</h2> */}

                    </div >
                </div >
            </div >
        </div >
    );
};

export default LatestConstruction;