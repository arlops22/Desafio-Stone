import React from 'react';
import { FaMap, FaList } from 'react-icons/fa';

import GlobalStyle from '../../assets/styles/global';
import { Navbar, StyledLink } from './styles';

export default function Header() {
    return (
        <>
            <GlobalStyle />
            <Navbar>
                <ul>
                    <li><StyledLink exact to='/'><FaMap />Mapa</StyledLink></li>
                    <li><StyledLink exact to='/list'><FaList />Lista</StyledLink></li>
                </ul>
            </Navbar>
        </>
    )
}
