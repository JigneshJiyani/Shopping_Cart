import React from 'react';
import Header from './Header';
import Hit from './Hit';
import { Hits } from 'react-instantsearch-dom';



const Content = () => (
    <main className="content">
        <Header/>
        <Hits hitComponent={Hit}/>
    </main>
);

export default Content;