import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';

const ArrayDep = () => {

    const [randonNumber, setRandomNumber] = useState(0);
    const [effects, setEffects] = useState([]);


    useEffect(() => {
        setEffects(preEffects => [...preEffects,'Hello'])
    },[]);

    return (
        <div>
            <h1>{randonNumber}</h1>
            <Button className="btn btn-primary" onClick={() => {setRandomNumber(Math.random())}}>
                Generate random Number
            </Button>
            <div>
                {effects.map((effect, index) => (
                    <div key={index}>{'🍔'.repeat(index) + effect}</div>
                ))}
            </div>
        </div>
    )
}

export default ArrayDep;