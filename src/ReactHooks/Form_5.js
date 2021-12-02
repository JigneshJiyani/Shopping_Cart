import Button from '@restart/ui/esm/Button';
import React, { useRef } from 'react';


const AccessDOM = () => {
    const textAreaEl = useRef(null);
    const stringVal = useRef("This is the saved String---")
    const handleClick = () => {
        textAreaEl.current.value =
        stringVal.current + "Hello everyone my name is jignesh jiyani";
        textAreaEl.current.focus();
    };

    return (
        <section style={{ textAlign: "center" }}>
            <div>
                <Button className="btn btn-primary" onClick={handleClick}>Focus & Populate this Text</Button>
            </div>
            <label htmlFor="story" style={{ display: "block", background: "olive", margin: "1rem", padding: "1rem" }}>
                Focused and populated with some text
            </label>
            <textarea ref={textAreaEl} id="story" rows="5" cols="33"/>
        </section>
    )
}

export default AccessDOM;