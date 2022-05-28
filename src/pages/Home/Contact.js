import React from 'react';

const Contact = () => {
    return (
        <div className='text-center'>
            <h2 className='my-5 font-bold'>Get In Touch</h2>
            <div className="grid grid-cols-1 gap-3 my-3">
                <input type="text" placeholder='Your Name' className='border-2 border-indigo-600' />

                <input type="email" placeholder='Your Email' className='border-2 border-indigo-600' />

                <textarea name="" id="" cols="30" rows="10" placeholder='Your Messege' className='border-2 border-indigo-600'></textarea>

                <input className='btn btn-primary  mx-auto' type="submit" value="Submit" />
            </div>
        </div>
    );
};

export default Contact;