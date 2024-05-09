import React from 'react';
import { searchIcon } from '../../assets/icons';
import './SearchBar.css';

export default function SearchBar() {
    return <div className='input-wrapper'>
        <input
            type="text"
            placeholder='Search' />
        <img src={searchIcon} alt="search icon" />
    </div>;
}
