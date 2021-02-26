import styled from 'styled-components';

const SearchBar = styled.form `

    position: absolute;
    top: 12px;
    left: calc(5vw/2);
    z-index: 1;
    width: 95vw;
    height: 40px;
    display: flex;
    align-items: center;
    flex-direction: row;

    background: var(--white);
    border-radius: 25px;
    box-shadow: 0 0 5px var(--black-shadow);

    label {
        padding: 10px 0 10px 10px;
    }

    label svg {
        fill: var(--black);
        height: 1.25em;
        width: 1.25em;
    }

    @media(min-width: 1280px) {
        width: 40vw;
        left: calc(30vw + 80px);
        top: 36px;
    }
`;

const SearchInput = styled.input `

    color: var(--black);
    padding: 10px;
    width: calc(100% - 30px);

`;

export { SearchBar, SearchInput };