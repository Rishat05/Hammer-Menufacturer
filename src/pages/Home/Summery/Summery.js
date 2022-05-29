import React from 'react';
import { FaFontAwesomeFlag, FaUsers, FaLaptop } from "react-icons/fa";

const Summery = () => {
    return (
        <div className="hero min-h-screen " >
            <div className="hero-content text-center" >
                <div className="max-w-md lg:max-w-2xl" >
                    <h1 className="lg:text-5xl text-4xl text-sky-600 font-bold" > Million Business Trust Us</h1 >
                    <p className="py-6 text-3xl" > Try to understand user expectation</p >
                    <div className="stats stats-vertical lg:stats-horizontal shadow px-12 py-10 " >

                        <div className="stat" >
                            <div className="stat-value text-sky-600 text-center" > <FaUsers></FaUsers></div >
                            <div className="stat-value" > 273 +</div >
                            <div className="stat-title text-sky-600 text-2xl" > 100 + Customer</div >
                        </div >
                        <div className="stat " >
                            <div className="stat-value text-sky-600 text-center" > <FaFontAwesomeFlag></FaFontAwesomeFlag></div >
                            <div className="stat-value" > 72</div >
                            <div className="stat-title text-sky-600 text-2xl" > 120M + Annual Revenue</div >
                        </div >

                        <div className="stat" >
                            <div className="stat-value text-sky-600" > <FaLaptop></FaLaptop></div >
                            <div className="stat-value" > 535 +</div >
                            <div className="stat-title text-sky-600 text-2xl" > 50 + Tools</div >
                        </div >



                    </div >
                </div >
            </div >
        </div >
    );
};

export default Summery;