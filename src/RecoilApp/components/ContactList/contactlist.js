import React from 'react';
// import { currentContactState } from "../../recoil/atoms";
import { contactsList } from '../../recoil/selectors';
import { useRecoilState, useRecoilValue } from "recoil";
import { currentContactState } from '../../recoil/atmos';


const ContactList = () => {
    const [a, setCcontact] = useRecoilState(currentContactState);

    const contacts = useRecoilValue(contactsList);

    return contacts.map((contact) => (
        <div 
        key={contact.id}
        className="name_container name_selected"
          onClick={() => setCcontact(contact.id)}>
        {contact.name}
        </div>
    ));
};

export default ContactList;
