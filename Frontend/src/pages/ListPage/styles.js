import styled from 'styled-components';

const Container = styled.div `
    margin-top: 64px;
    padding-bottom: 56px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 1280px) {
        margin-top: 88px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-left: 160px;
    }
`;

const Card = styled.button `

    text-align: left;
    background: var(--white);
    border-radius: 8px;
    box-shadow: 0 0 5px var(--black-shadow);
    padding: 8px 1em;
    padding-left: ${props => props.selected ? '24px' : '1em' };
    width: 95%;
    height: 8.5em;
    overflow: hidden;
    position: relative;

    margin-bottom: 8px;
    transition: .2s;
    
    h3 {
        font-size: 1em;
        color: var(--black);
        margin-bottom: 2px;
    }

    p {
        color: var(--gray);
        font-size: 0.875em
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
        width: ${props => props.selected ? '16px' : '8px' };
        background: ${props => props.selected ? 'var(--primary-green) !important' : null };
        background: ${props => props.tipo === 'lead' ? 'var(--lead-green);' : 'var(--client-green)'};
        position: absolute;
        top: 0;
        left: 0;
        transition: .2s;
    }

    @media(min-width: 1280px) {
        width: 420px;
        margin: 12px;
        cursor: pointer;

        h3 {
            font-size: 1.125em;
        }

        p {
            font-size: 1em;
        }

        span {
            font-size: 0.875em;
        }

        &::before {
            height: 10em;
        }

        &:hover {
            padding-left: 24px; 
        }

        &:hover::before {
            background: var(--primary-green);
            width: 16px;
        }
    }
`;

const CreateScreeplay = styled.button `

    position: fixed;
    bottom: 64px;
    right: 2.5vw;
    background: #26734D;
    border-radius: 25px;
    box-shadow: 0 0 5px var(--black-shadow);
    padding: 8px;
    color: var(--white);
    transition: .2s;
    cursor: pointer;

    svg {
        margin-right: 8px;
    }

    &:hover {
        background: var(--client-green)
    }
`;

export { Container, Card, CreateScreeplay };