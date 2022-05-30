import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setorders] = useState([]);
    useEffect(() => {
        fetch('https://dry-earth-97304.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setorders(data));
    }, []);

    const handleShipped = () => {
        document.getElementById('pending').innerHTML = 'Shipped';
        document.getElementById('shipped').style.display = 'none';


    }

    return (
        <div >
            <h1 className="text-accent text-lg font-bold text-center my-5">
                {" "}
                Total number of Product : {orders?.length}
            </h1>
            <div className="overflow-x-auto">
                <table className="table w-3/4 flex justify-center items-center mx-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((product, index) => {
                            return (
                                <tr key={product._id}>
                                    <th className="text-accent text-base">{index + 1}</th>
                                    <td className="text-accent text-base">{product?.email}</td>
                                    <td className="text-accent text-base">{product?.phone}</td>
                                    <td className="text-accent text-base">{product?.productName}</td>
                                    <td className="text-accent text-base">{product?.quantity}</td>
                                    <td className="text-accent text-base">
                                        {/* <button className="btn btn-xs mx-1">{product?.payment}</button> */}
                                        {(product?.payment == "unpaid") ? (
                                            <button className="btn btn-xs mx-1">Unpaid</button>
                                        ) : (
                                            <>
                                                <button className="btn btn-xs mx-1 btn-success" id="pending">Pending</button>
                                                <button onClick={handleShipped} id='shipped' className="btn btn-xs mx-1 ">Shipped</button>
                                            </>
                                        )}
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div >

        </div>
    );
};

export default ManageAllOrders;