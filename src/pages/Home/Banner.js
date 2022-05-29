import React from 'react';

const Banner = () => {
    return (

        <div className="hero min-h-fit ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-full lg:w-3/5 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-7xl font-bold text-amber-400">Hammer World!</h1>
                    <p className='font-bold text-3xl mt-1 '>Legendary Tools. Exceptional Value</p>
                    <p className="py-6 text-2xl">For over 150 years, Hammer Manufacturer have been the chosen brand for everywhere.</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;