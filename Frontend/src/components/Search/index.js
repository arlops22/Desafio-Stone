import React, { useState, useEffect, useContext } from 'react';
import { MdSearch } from 'react-icons/md';

import { Context } from '../../Context/PinContext';

import { SearchBar, SearchInput } from './styles';

export default function Search() {
    const [ searchQuery, setSearchQuery ] = useState('');

    const { handleSearch } = useContext(Context);

    useEffect(() => {
        
        handleSearch(searchQuery)

    }, [searchQuery, handleSearch])

    return (
        <SearchBar>
            <label htmlFor="searchbar"><MdSearch /></label>
            <SearchInput 
                type="text"
                name="searchbar"
                placeholder="Nome ou endereço"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
            />
        </SearchBar>
    )
}
