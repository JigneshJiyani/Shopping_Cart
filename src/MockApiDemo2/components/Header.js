import React from 'react';
import { SearchBox } from 'react-instantsearch-dom';

const Header = () => (
    <header className="header">
        <h1 className="title">Senate Members Directory</h1>
        <center>
        <SearchBox
            className="search-bar"
            translations={{ placeholder : 'Search by Senate or Name'}}/>
        </center>
    </header>
);

export default Header;