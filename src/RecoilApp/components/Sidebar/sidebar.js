import React, { Suspense } from 'react';
import ContactList from '../ContactList/contactlist';


const Sidebar = () => {
    return(
        <div className="container">
            <h2 className="title">Contact Menu</h2>
            <div className="list">
                <Suspense fallback={<h3>Loading Contacts...</h3>}>
                    <ContactList/>
                </Suspense>
            </div>
        </div>
    );
}

export default Sidebar;