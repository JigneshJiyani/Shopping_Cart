import React from 'react';
import { useRecoilValue } from "recoil";
import { currentContactsDetails } from '../../recoil/selectors';


const Card = () => {
    const contact = useRecoilValue(currentContactsDetails);

    return(
        <div>
            <h3>{contact.name}</h3>
            <span>Address : {contact.address}</span>
            <br/>
            <span>Phone : {contact.phone}</span>
            <br/>
            <span>Email : {contact.email}</span>
        </div>
    );
};

export default Card;