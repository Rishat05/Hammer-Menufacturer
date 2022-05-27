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
        fetch(`http://localhost:5000/tools/${toolId}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [toolId]);

    const handleQuantity = (e) => {
        e.preventDefault();
        let quantity = parseInt(e.target.name.value);
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
    return (
        <div>
            <h2>this is purchase {toolId}</h2>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={item.img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {item.name}</h2>
                    <h5>Minimum-Order-Quantity : {item.minimumOrderQuantity}</h5>
                    <h5>Available-Quantity : {item.availableQuantity}</h5>
                    <h5>Price : {item.price}</h5>
                    <form className='flex flex-col gap-2'>
                        <input type="text" className="input input-bordered input-primary w-full max-w-xs" value={user.displayName ? user.displayName : 'Empty name'} readOnly />
                        <input type="email" className="input input-bordered input-primary w-full max-w-xs" value={user.email} readOnly />
                        <input type="text" placeholder="Your address" className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="number" placeholder="Your Phone Number" className="input input-bordered input-primary w-full max-w-xs" />
                    </form>
                    <form className='flex flex-row gap-2' onSubmit={handleQuantity}>
                        <input type="text" name='name' placeholder="Your Quantity" className="input input-bordered input-primary w-full max-w-xs" />
                        <button className="btn btn-secondary">Add Quantity</button>
                    </form>

                    {
                        error ? <p className='text-red-500'>{error}</p> : ''
                    }

                    <div>
                        <button className="btn btn-primary" disabled={error}>Purchase</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Purchase;