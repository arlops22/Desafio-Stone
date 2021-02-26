import React, { useState, useContext } from 'react';
import { MdAttachMoney, MdDelete, MdAccessTime, MdInsertEmoticon, MdClose } from 'react-icons/md';
import { BiCalendar, BiDoorOpen } from 'react-icons/bi';
import { IoThermometerOutline } from 'react-icons/io5';

import { Context } from '../../Context/PinContext';

import { 
    Card, 
    ExtraInfoBox, 
    DeleteButton, 
    ButtonBox, 
    ClientButton, 
    Button,
    Modal,
    SavePropostaButton,
    CloseModalButton,
    ClientStatus,
    ProgressBox,
    ProgressBar
} from './styles';

export default function PinScreen({ pin, visible }) {
    const [ propostaModal, setPropostaModal ] = useState(false);
    const [ proposta, setProposta ] = useState(pin.proposta ? pin.proposta : '');

    const { handleDelete, handleUpdate, handleSaveProposal } = useContext(Context);

    const handleClientButton = (pin) => {

        if (pin.tipo === 'lead') {
            handleUpdate(pin);

        } else {
            return
        }

    }

    const saveProposal = (e, pinId) => {
        e.preventDefault();

        const { proposta } = e.target.elements;
        setProposta(proposta.value)

        handleSaveProposal(proposta.value, pinId);

        setPropostaModal(false);
    }   

    const visitDate = new Date(pin.visitaRecente);
    const visitMonth = visitDate.getMonth() + 1;

    const lastVisitDate = new Date(pin.ultimaVisita);
    const lastVisit = visitDate.getDate() - lastVisitDate.getDate();

    return (
        <>
        <Card open={pin.id === visible ? true : false} tipo={pin.tipo}>
            <div>    
                <h3>{pin.nomeEC}</h3>
                <p>{pin.endereco}</p>
            </div>
            {pin.tipo === "lead" ? (
                <>
                <ExtraInfoBox>
                    <span><MdAttachMoney />{`${pin.potencialTPV/1000}K`}</span>
                    <span><IoThermometerOutline />quente</span>
                    <span><BiDoorOpen />{pin.qtdVisitas ? pin.qtdVisitas : '0'} visitas</span>
                </ExtraInfoBox>
                <span><MdAccessTime />{lastVisit && pin.ultimaVisita ? `Há ${lastVisit} dias` : "--"}</span>
                <span><BiCalendar />{pin.visitaRecente ? `${visitDate.getDate()}/${visitMonth < 10 ? `0${visitMonth}`: visitMonth}` : '--'}</span>
                <ButtonBox>
                    <Button onClick={() => setPropostaModal(prevState => !prevState)}>Enviar Proposta</Button>
                    <ClientButton onClick={() => handleClientButton(pin)} starType={pin.tipo}></ClientButton>
                </ButtonBox>
                </>
            ) : (
                <>
                    <ClientStatus>Satisfação do cliente: <MdInsertEmoticon /></ClientStatus>
                    <span><MdAccessTime />{lastVisit && pin.ultimaVisita ? `Há ${lastVisit} dias` : "--"}</span>
                    <span><BiCalendar />{pin.visitaRecente ? `${visitDate.getDate()}/${visitMonth < 10 ? `0${visitMonth}`: visitMonth}` : '--'}</span>
                    <ProgressBox>
                        <span>% de migração: </span>

                        <ProgressBar>
                            <div></div>
                        </ProgressBar>
                    </ProgressBox>
                </>
            )}
            <DeleteButton onClick={() => handleDelete(pin.id)}><MdDelete /></DeleteButton>
        </Card>
        <Modal 
            open={propostaModal}
            onSubmit={(e) => saveProposal(e, pin.id)}
        >
            <textarea 
                placeholder="Descrição da Proposta" 
                name="proposta"
                rows="4"
                onChange={(e) => setProposta(e.target.value)}
                value={proposta}
            ></textarea>
            <SavePropostaButton type="submit">Salvar</SavePropostaButton>
            <CloseModalButton 
                type='button' 
                onClick={() => {
                    setPropostaModal(prevState => !prevState);
                    setProposta(pin.proposta ? pin.proposta : '')
                }}
            ><MdClose /></CloseModalButton>
        </Modal>
        </>
    )
}
