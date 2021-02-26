import styled from 'styled-components';

import star from '../../assets/img/star.png';
import checkedStar from '../../assets/img/checked-star.png';

const Card = styled.div `

    width: 95vw;
    height: 8.5em;
    background: var(--white);
    border-radius: 8px;
    box-shadow: 0 0 5px var(--black-shadow);
    padding: 8px 1em;
    overflow: hidden;
    margin-bottom: 8px;

    position: absolute;
    bottom: ${props => props.open ? '0' : 'calc(-12px - 8em)'};
    left: 2.5vw;
    transition: .2s;

    z-index: ${props => props.open ? 1 : -1};

    h3 {
        font-size: 1em;
        color: var(--black);
        margin-bottom: 4px;
    }

    p {
        color: var(--gray);
        font-size: 0.875em;
        margin-bottom: 4px;
    }

    span {
        display: flex;
        align-items: center;
        color: var(--gray);
        font-size: 0.75em;
        margin-top: 8px;

        & svg {
            fill: var(--gray);
            margin-right: 4px;
        }
    }

    &::before {
        content: '';
        display: block;
        height: 8.5em;
        width: 8px;
        background: ${props => props.tipo === 'lead' ? 'var(--lead-green);' : 'var(--client-green)'};
        position: absolute;
        top: 0;
        left: 0;
    }

    @media(min-width: 1280px) {
        width: 30vw;
        left: calc(35vw + 80px);
        bottom: ${props => props.open ? '36px' : 'calc(-12px - 8em)'};

        h3 {
            font-size: 1.125em;
        }

        p {
            font-size: 1em;
        }

        span {
            font-size: 0.875em;
        }
    }

`;

const ExtraInfoBox = styled.div `

    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    span + span {
        margin-left: 24px;
    }

`;

const ButtonBox = styled.div `

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    bottom: 8px;
    right: 1em;

    width: 50%;


`;

const Button = styled.button `

    border: 1px solid var(--gray);
    padding: 8px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 0.875em;
    color: var(--gray);
    transition: .2s;

    &:hover {
        border: 1px solid var(--lead-green);
        color: var(--lead-green);
    }

`;

const ClientButton = styled.div `

    border: 1px solid var(--gray);
    padding: 4px;
    width: 36px;
    height: 36px;

    border-radius: 50%;
    cursor: pointer;
    background: url(${props => props.starType === 'lead' ? star : checkedStar});
    background-size: 18px;
    background-repeat: no-repeat;
    background-position: 7px 8px;
    transition: .2s;

    &:hover {
        border: 1px solid var(--lead-green);
    }

`;

const DeleteButton = styled.button `

    position: absolute;
    top: 4px;
    right: 4px;
    width: 30px;
    height: 30px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    svg {
        transition: .2s;
        fill: var(--gray)
    }

    &:hover svg {
        fill: var(--lead-green)
    }

`;  

const Modal = styled.form `

    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;

    height: 35vh;
    width: 95vw;
    background: var(--white);
    border-radius: 5px;
    padding: 12px;

    position: absolute;
    z-index: 10;
    top: 20vh;
    left: calc(5vw/2);

    textarea {
        border-radius: 25px;
        border: 1px solid var(--gray);
        padding: 8px;
        width: 100%;
        margin: 36px 0 12px 0;
        transition: .2s;
        color: var(--gray);
    }

    textarea:focus {
        border: 1px solid var(--client-green);
        color: var(--black);
    }

    @media(min-width: 1280px) {
        width: 50vw;
        left: calc(25vw + 80px);
        padding: 12px 36px;
    }

`;

const SavePropostaButton = styled.button `

    width: fit-content;
    margin: 0 auto;
    padding: 8px 36px;
    background: var(--primary-green);
    border-radius: 20px;
    transition: .2s;
    cursor: pointer;

    &:focus, &:hover {
        background: var(--secondary-green);
        color: var(--white);
    }

`

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


const ClientStatus = styled.span `

    svg {
        margin-left: 4px;
        fill: var(--secondary-green) !important;
    }

` 

const ProgressBox = styled.div `

    width: 55%;

    position: absolute;
    bottom: 18px;
    right: 1em;

`

const ProgressBar = styled.div `

    margin-top: 4px;
    border: 1px solid var(--gray);
    width: 100%;
    height: 12px;
    border-radius: 15px;
    overflow: hidden;

    div {
        background: var(--primary-green);
        height: 12px;
        width: 80%;
    }

` 

export { 
    Card, 
    ExtraInfoBox, 
    DeleteButton, 
    ButtonBox, 
    Button, 
    Modal,
    SavePropostaButton,
    CloseModalButton,
    ClientButton, 
    ClientStatus, 
    ProgressBox,
    ProgressBar 
};