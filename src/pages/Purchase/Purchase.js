import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const { toolId } = useParams();
    const [item, setItem] = useState({});


    return (
        <div>
            <h2>this is purchase</h2>

        </div>
    );
};

export default Purchase;