import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = (props) => {
    const { _id, name, img, description, minimumOrderQuantity, availableQuantity, price } = props.tool;

    const navigate = useNavigate();
    const navigateToItemDetail = id => {
        navigate(`/tool/${id}`);
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className='h-80 w-80 p-2'>
                <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>{description}</p>
                <h5>Minimum-Order-Quantity : {minimumOrderQuantity}</h5>
                <h5>Available-Quantity : {availableQuantity}</h5>
                <h5>Price : {price}</h5>
                <div class="card-actions">
                    <Link to='/purchase'>
                        <button onClick={() => navigateToItemDetail(_id)} class="btn btn-primary">Order Now</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Tool;