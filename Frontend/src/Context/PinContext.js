import React, { useState, useEffect, useCallback, createContext } from 'react';

import api from '../api';

const Context = createContext();

function PinProvider({ children }) {    
    const [ pins, setPins ] = useState([])
    const [ filteredPins, setFilteredPins ] = useState([]);

    useEffect(() => {

        (async () => {

            try {

                const { data } = await api.get('/pins');
                setPins(data)
                setFilteredPins(data)

            } catch(err) {
                alert(err)
            }


        })();

    }, []);

    const handleSearch = useCallback((searchQuery) => {
        
        const updatedPins = pins.filter(pin => pin.nomeEC.toLowerCase().includes(searchQuery.toLowerCase()) || pin.endereco.toLowerCase().includes(searchQuery.toLowerCase()))
        
        setFilteredPins(updatedPins);

    }, [pins])

    const handleProposalFilter = useCallback((proposalFilter) => {

        const updatedPins = pins.filter(pin => proposalFilter ? pin.proposta : !pin.proposta);
        setFilteredPins(updatedPins);

    }, [pins])

    const handleTPVFilter = useCallback((filter) => {

        if (filter === 1) {
            const updatedPins = pins.filter(pin => pin.potencialTPV < 10000)
            setFilteredPins(updatedPins);
        }
        if (filter === 2) {
            const updatedPins = pins.filter(pin => pin.potencialTPV >= 10000 && pin.potencialTPV <= 20000)
            setFilteredPins(updatedPins);
        }
        
        if (filter === 3) {
            const updatedPins = pins.filter(pin => pin.potencialTPV > 20000)
            setFilteredPins(updatedPins);
        }

    }, [pins])

    const handleSegmentoFilter = useCallback((filter) => {

        if (filter === 1) {
            const updatedPins = pins.filter(pin => pin.segmento === 'Restaurante')
            setFilteredPins(updatedPins);
        }
        if (filter === 2) {
            const updatedPins = pins.filter(pin => pin.segmento === 'Ensino')
            setFilteredPins(updatedPins);
        }
        
        if (filter === 3) {
            const updatedPins = pins.filter(pin => pin.segmento === 'Moda')
            setFilteredPins(updatedPins);
        }

        if (filter === 4) {
            const updatedPins = pins.filter(pin => pin.segmento === 'Saúde')
            setFilteredPins(updatedPins);
        }

        if (filter === 5) {
            const updatedPins = pins.filter(pin => pin.segmento === 'Mercado')
            setFilteredPins(updatedPins);
        }

    }, [pins])

    const handleVisitFilter = useCallback(() => {

        const updatedPins = pins.filter((pin) => {

            const today = new Date();
            const date = new Date(pin.visitaRecente);

            return date.getDate() === today.getDate() &&
                date.getMonth() + 1 === today.getMonth() + 1 &&
                date.getFullYear() === today.getFullYear() 
        
        })
    
        setFilteredPins(updatedPins);

    }, [pins])

    const clearFilter = useCallback(() => {

        setFilteredPins(pins)

    }, [pins])

    const handleSaveProposal = useCallback(async (proposta, pinId) => {

        const { data } = await api.post(`/pins/${pinId}`, {
            proposta: proposta
        })

        const updatedPins = pins.map(pinElem => {
            return pinElem.id === pinId 
            ? { ...pinElem, proposta: proposta, updatedAt: data.updatedAt }
            : pinElem 
        })

        setFilteredPins(updatedPins);
        setPins(updatedPins);

    }, [pins])

    const handleVisit = useCallback( async (pinId) => {

        const nowDate = new Date();

        const { data } = await api.post(`/pins/${pinId}`, {
            visitaRecente: nowDate.toUTCString()
        })

        const updatedPins = pins.map(pinElem => {
            return pinElem.id === pinId 
            ? { ...pinElem, visitaRecente: nowDate.toUTCString(), updatedAt: data.updatedAt }
            : pinElem 
        })

        setFilteredPins(updatedPins);
        setPins(updatedPins);

    }, [pins])

    const handleCreate = useCallback( async (event, location) => {
        event.preventDefault();

        const { nomeEC, potencialTPV, segmento } = event.target.elements;

        const { data } = await api.post('/pins', {
            nomeEC: nomeEC.value,
            potencialTPV: potencialTPV.value,
            endereco: location.endereco,
            latitude: location.lat,
            longitude: location.lng,
            segmento: segmento.value
        })
        
        clearFilter();
        setFilteredPins(oldPins => [ ...oldPins, { ...data, tipo: 'lead'} ]);
        setPins(oldPins => [ ...oldPins, { ...data, tipo: 'lead'} ]);

        event.target.reset()

    }, [clearFilter])

    const handleUpdate = useCallback( async (pin) => {

        const { data } = await api.post(`/pins/${pin.id}`, {
            tipo: 'cliente'
        })

        const updatedPins = pins.map(pinElem => {
            return pinElem.id === pin.id 
            ? { ...pinElem, tipo: 'cliente', updatedAt: data.updatedAt }
            : pinElem 
        })

        setFilteredPins(updatedPins);
        setPins(updatedPins);

    }, [pins])

    const handleDelete = useCallback(async (id) => {

        await api.delete(`/pins/${id}`);

        const updatedPins = pins.filter(pin => pin.id !== id);

        setFilteredPins(updatedPins);
        setPins(updatedPins);

    }, [pins])

    return (
        <Context.Provider 
            value={{ 
                pins, 
                filteredPins, 
                handleSearch, 
                handleProposalFilter,
                handleTPVFilter, 
                handleSegmentoFilter, 
                handleVisitFilter,
                clearFilter, 
                handleSaveProposal, 
                handleVisit,
                handleUpdate, 
                handleCreate,
                handleDelete, 
            }}>
            {children}
        </Context.Provider>
    )

}

export { Context, PinProvider };