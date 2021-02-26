import React, { useState, useEffect, useContext } from 'react';
import { MdAttachMoney, MdAccessTime, MdInsertEmoticon } from 'react-icons/md';
import { BiCalendar, BiDoorOpen } from 'react-icons/bi';
import { IoThermometerOutline } from 'react-icons/io5';
import { FaRoute } from 'react-icons/fa';

import { Context } from '../../Context/PinContext';

import { 
    Container, 
    Card,
    CreateScreeplay
} from './styles';

import { 
    ExtraInfoBox,
    ClientStatus,
    ProgressBox,
    ProgressBar
} from '../../components/PinScreen/styles';

import Header from '../../components/Header';
import Search from '../../components/Search';

export default function ListPage() {
    const [ selectedPins, setSelectedPins ] = useState([]);

    const { filteredPins, handleVisit } = useContext(Context);

    useEffect(() => {

        const screenplay = filteredPins.filter(pin => {
            
            const today = new Date();
            const date = new Date(pin.visitaRecente);

            return date.getDate() === today.getDate() &&
                date.getMonth() + 1 === today.getMonth() + 1 &&
                date.getFullYear() === today.getFullYear() 

        })

        if (screenplay.length !== 0 && selectedPins.length === 0) {
            screenplay.forEach(pin => setSelectedPins(oldPins => [ ...oldPins, pin.id ]));
        }

    }, [filteredPins, selectedPins.length])

    return (
        <>
        <Header />
        <Search />
            <Container>
                {
                    filteredPins.map((pin) => {

                        const visitDate = new Date(pin.visitaRecente);
                        const visitMonth = visitDate.getMonth() + 1;

                        const lastVisitDate = new Date(pin.ultimaVisita);
                        const lastVisit = visitDate.getDate() - lastVisitDate.getDate();

                        return (   
                            <Card 
                                key={pin.id}
                                tipo={pin.tipo} 
                                selected={selectedPins.indexOf(pin.id) === -1 ? false : true}
                                onClick={() => {
                                        if (selectedPins.indexOf(pin.id) === -1) {
                                            setSelectedPins(oldSelecteds => [...oldSelecteds, pin.id])
                                        } else {
                                            const updatedSelectedPins = selectedPins.filter(selected => selected !== pin.id);
                                            setSelectedPins(updatedSelectedPins)
                                        }
                                    }
                                }
                            >
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
                                    {
                                        
                                    }
                                    <span><MdAccessTime />{(lastVisit && pin.ultimaVisita) ? `Há ${lastVisit} dias` : "--"}</span>
                                    <span><BiCalendar />{pin.visitaRecente ? `${visitDate.getDate()}/${visitMonth < 9 ? `0${visitMonth}`: visitMonth}` : '--'}</span>
                                    </>
                                ) : (
                                    <>
                                        <ExtraInfoBox>
                                            <ClientStatus>Satisfação do cliente: <MdInsertEmoticon /></ClientStatus>
                                            <span><MdAttachMoney />{`${pin.potencialTPV/1000}K`}</span>
                                        </ExtraInfoBox>
                                        <span><MdAccessTime />{(lastVisit && pin.ultimaVisita) ? `Há ${lastVisit} dias` : "--"}</span>
                                        <span><BiCalendar />{pin.visitaRecente ? `${visitDate.getDate()}/${visitMonth < 9 ? `0${visitMonth}`: visitMonth}` : '--'}</span>
                                        <ProgressBox>
                                            <span>% de migração: </span>

                                            <ProgressBar>
                                                <div></div>
                                            </ProgressBar>
                                            
                                        </ProgressBox>
                                    </>
                                )}
                            </Card>
                        )
                    })
                }
                <CreateScreeplay 
                    onClick={() => {

                        if (selectedPins.length !== 0) {
                            selectedPins.forEach(pin => {
                                handleVisit(pin);
                            })
                        }
                    }}
                ><FaRoute />Montar Roteiro</CreateScreeplay>
            </Container>
        </>
    )
}
