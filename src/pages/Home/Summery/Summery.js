import React from 'react';
import { FaFontAwesomeFlag, FaUsers, FaLaptop } from "react-icons/fa";

const Summery = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content text-center">
                <div class="max-w-md lg:max-w-2xl">
                    <h1 class="lg:text-5xl text-4xl text-sky-600 font-bold">Million Business Trust Us</h1>
                    <p class="py-6 text-3xl">Try to understand user expectation</p>
                    <div class="stats stats-vertical lg:stats-horizontal shadow px-12 py-10 ">

                        <div class="stat">
                            <div class="stat-value text-sky-600 text-center"><FaUsers></FaUsers></div>
                            <div class="stat-value">273+</div>
                            <div class="stat-title text-sky-600 text-2xl">100+ Customer</div>
                        </div>
                        <div class="stat ">
                            <div class="stat-value text-sky-600 text-center"><FaFontAwesomeFlag></FaFontAwesomeFlag></div>
                            <div class="stat-value">72</div>
                            <div class="stat-title text-sky-600 text-2xl">120M+ Annual Revenue</div>
                        </div>

                        <div class="stat">
                            <div class="stat-value text-sky-600"><FaLaptop></FaLaptop></div>
                            <div class="stat-value">535+</div>
                            <div class="stat-title text-sky-600 text-2xl">50+ Tools</div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summery;