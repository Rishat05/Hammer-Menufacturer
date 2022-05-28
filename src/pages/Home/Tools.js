import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://intense-shelf-07102.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);
    return (
        <div>
            <h3 className='text-primary text-5xl text-center font-bold mb-4'>Our Tools</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    tools.slice(0, 6).map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;