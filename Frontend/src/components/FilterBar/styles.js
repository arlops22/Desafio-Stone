import styled from 'styled-components';

const FilterContainer = styled.div `

    width: 95vw;
    height: 40px;
    background: var(--white);
    border-radius: 25px;
    box-shadow: 0 0 5px var(--black-shadow);
    padding: 0 12px;

    position: absolute;
    top: 8px;
    left: calc(5vw/2);
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    @media(min-width: 1280px) {
        top: 36px;
        height: 50px;
        width: 40vw;
        left: calc(30vw + 80px);
        padding: 0 16px;
    }

`

const FilterButton = styled.button `
    
    font-size: 0.625em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--secondary-green);
    position: relative;
    z-index: 1;
    padding: 8px;
    cursor: pointer;
    transition: .2s;
    
    svg {
        width: 0.625em;
        height: 0.625em;
    }

    &:focus, &:hover {
        color: var(--gray);
    }
    
    @media(min-width: 1280px) {
        font-size: 0.875em;

        svg {
            width: 0.875em;
            height: 0.875em;
        }
    }
`

const DropDown = styled.ul `

    height: ${props => props.open ? `${(props.item * 22) + 16}px` : '0'};

    background: var(--white);
    position: absolute;
    bottom: ${props => props.open ? `-${(props.item * 22) + 16}px` : '0'};
    list-style: none;
    padding: 8px;
    border-radius: 0 0 5px 5px;
    transition: .2s;
    z-index: 0;
    overflow: hidden;
    box-shadow: ${props => !props.open ? 'none' : '2px 4px 5px var(--black-shadow)'};

    button {
        padding: 4px 0;
        color: var(--secondary-green);
        font-size: 0.75em;
        cursor: pointer;
        transition: .2s;
        width: 100%;
        text-align: left;

        &:focus, &:hover {
            color: var(--gray);
        }
    }

    @media(min-width: 120px) {
        
        height: ${props => props.open ? `${(props.item * 24) + 16}px` : '0'};
        bottom: ${props => props.open ? `-${(props.item * 24) + 16}px` : '0'};
        
        button {
            font-size: 0.875em;
        }
    }

`;

const AddButton = styled.button `

    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .2s;
    
    svg {
        width: 1.125em;
        height: 1.125em;
        fill: var(--secondary-green);
    }

    &:hover svg {
        fill: var(--gray);
    }

    @media(min-width: 1280px) {
        svg {
            width: 1.5em;
            height: 1.5em
        }
    }

` 

const ModalForm = styled.form `

    display: ${props => props.modal ? 'flex' : 'none'};
    flex-direction: column;

    height: 65vh;
    width: 95vw;
    background: var(--white);
    border-radius: 5px;
    padding: 12px;
    box-shadow: 0 0 5px var(--black-shadow);

    position: absolute;
    z-index: 10;
    top: 10vh;
    left: calc(5vw/2);

    h1 {
        color: var(--client-green);
        font-weight: 700;
        font-size: 1.125em;
        text-align: center;
        margin-top: 3em;
        margin-bottom: 1em;
    }

    input, select {
        border-radius: 25px;
        border: 1px solid var(--gray);
        padding: 8px;
        width: 100%;
        margin-bottom: 12px;
        transition: .2s;
        color: var(--gray);
    }

    input::placeholder {
        color: var(--gray)
    }

    input:focus, select:focus {
        border: 1px solid var(--client-green);
        color: var(--black);
    }
    
    @media(min-width: 1280px) {
        padding: 12px 36px;
        width: 50vw;
        top: 15vh;
        left: calc(25vw + 80px);
    }

`;

const CloseModalButton = styled.button `

    position: absolute;

    top: 12px;
    right: 12px;
    cursor: pointer;

    svg {
        transition: .2s;
        fill: var(--gray);
        width: 1.125em;
        height: 1.125em;
    }

    &:hover svg {
        fill: var(--black);
    }

`;

const SubmitButton = styled.button`

    color: var(--black);
    background: var(--primary-green);
    padding: 8px;
    border-radius: 25px;
    width: 50%;
    margin: 12px auto 0 auto;
    transition: .2s;
    cursor: pointer;

    &:hover, &:focus {
        background: var(--secondary-green);
        color: var(--white);
    }

`;

export { 
    FilterContainer, 
    FilterButton,
    DropDown,
    AddButton, 
    ModalForm, 
    CloseModalButton, 
    SubmitButton 
};