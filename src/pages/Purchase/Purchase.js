import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const { toolId } = useParams();
    const [item, setItem] = useState({});
    const [error, setError] = useState('');
    useEffect(() => {
        fetch(`https://intense-shelf-07102.herokuapp.com/tools/${toolId}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [toolId]);

    const handleQuantity = () => {
        // e.preventDefault();
        let val = document.getElementById('quantity');
        let quantity = parseInt(val.value);
        let minimumQunatity = item.minimumOrderQuantity;
        let maximumQuantity = item.availableQuantity;
        if (quantity < minimumQunatity) {
            setError('*Can not lower then minimum quantity');
        }
        else if (quantity > maximumQuantity) {
            setError('*Can not higher then available quantity');
        }
        else {
            setError('');
        }
    }
    const handleOrder = (e) => {
        e.preventDefault();

        const data = {
            productName: item.name,
            price: item.price,
            userName: e.target.name.value,
            email: e.target.email.value,
            address: e.target.address.value,
            phone: e.target.phoneNumber.value,
            quantity: e.target.quantity.value,
            payment: 'unpaid',

        }
        const url = `https://intense-shelf-07102.herokuapp.com/booking`;
        fetch(url, {
            method: 'POST',
            headers: {

                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);


                if (result.acknowledged) {
                    alert('Your order is placed succesfully');
                }

            });
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.address.value = '';
        e.target.phoneNumber.value = '';
        e.target.quantity.value = '';
    }
    return (
        <div>
            <h2>this is purchase </h2>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={item.img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {item.name}</h2>
                    <h5>Minimum-Order-Quantity : {item.minimumOrderQuantity}</h5>
                    <h5>Available-Quantity : {item.availableQuantity}</h5>
                    <h5>Price : {item.price}</h5>
                </div>
            </div>
            <h2 className='text-primary text-5xl text-center font-bold mt-4 mb-4'>Purchase</h2>
            <form className='flex flex-col gap-2 w-80 mx-auto mt-3 mb-3' onSubmit={handleOrder}>
                <input type="text" name='name' className="input input-bordered input-primary w-full max-w-xs" value={user.displayName ? user.displayName : 'Empty name'} readOnly />
                <input type="email" name='email' className="input input-bordered input-primary w-full max-w-xs" value={user.email} readOnly />
                <input type="text" placeholder="Your address" className="input input-bordered input-primary w-full max-w-xs" name='address' />
                <input type="number" name='phoneNumber' placeholder="Your Phone Number" className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" name='quantity' placeholder="Your Quantity" className="input input-bordered input-primary w-full max-w-xs" onBlur={handleQuantity} id='quantity' />


                {
                    error ? <p className='text-red-500'>{error}</p> : ''
                }
                <button className="btn btn-primary" disabled={error}>Purchase</button>
            </form>


        </div>
    );
};

export default Purchase;