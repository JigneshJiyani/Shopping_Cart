import Button from '@restart/ui/esm/Button';
import React, {useMemo, useState } from 'react';


const Appmain = () => {

    const [age, setAge] = useState(0);
    const handleClick = () => setAge(age + 1);
    const someValue = useMemo(() => ({value : "someValue"}))
    const doSomething =() => {
        return someValue;
    }


    return (
        <div>
            <Age age={age} handleClick={handleClick} />
            <Instructions doSomething={doSomething} />
        </div>
    )
}


const Age = ({ age, handleClick }) => {
    return (
        <div>
            <div style={{ border: '2px', background: 'papayawhip', padding: "1rem" }}>
                Today I am {age} Years Old
            </div>
            <pre> - Click The button below 👇</pre>
            <Button className="btn btn-primary" onClick={handleClick}>Get Older!</Button>
        </div>
    )
}

const Instructions = React.memo(() => {
    return (
        <div style={{ background: 'black', color: 'yellow', padding: "1rem" }}>
            <p>Follow the instructions  above as closely as possible</p>
        </div>
    )
})

export default Appmain;