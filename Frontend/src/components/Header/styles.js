import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navbar = styled.nav`
    width: 100%;
    height: 56px;
    background: var(--secondary-green);
    
    position: fixed;
    bottom: 0;
    z-index: 1;

    display:flex;
    align-items: center;

    ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
        width: 100%;
    }

    @media(min-width: 1280px) {
        left: 0;
        background: var(--client-green);

        width: 160px;
        height: 100vh;
        align-items: flex-start;

        ul {
            margin-top: 24px;
            margin-left: 24px;
            flex-direction: column;
            justify-content: flex-start;
        }
    }

`;

const StyledLink = styled(NavLink) `

    text-decoration: none;
    padding: 12px;
    color: var(--tertiary-green);

    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        fill: var(--tertiary-green);
        margin-bottom: 2px;
    }

    &:hover, &:focus, &.active {
        color: var(--white);
    }

    &:hover > svg, &:focus > svg, &.active > svg {
        fill: var(--white);
    }

    @media(min-width: 1280px) {
        flex-direction: row;

        svg {
            margin-right: 8px;
        }
    }

`

export { Navbar, StyledLink }