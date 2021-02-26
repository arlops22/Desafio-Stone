import React, { useState, useContext } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { MdAdd, MdClose } from 'react-icons/md';
import { FaCoins, FaHandshake, FaMapMarkerAlt,FaBuilding, FaDoorOpen } from 'react-icons/fa';

import { Context } from '../../Context/PinContext';

import { 
    FilterContainer, 
    FilterButton,
    DropDown,
    AddButton, 
    ModalForm, 
    CloseModalButton, 
    SubmitButton 
} from './styles';

export default function FilterBar() {
    const [ modal, setModal ] = useState(false);
    const [ proposalFilter, setProposalFilter ] = useState(false);
    const [ tpvFilter, setTpvFilter ] = useState(false);
    const [ segmentoFilter, setSegmentoFilter ] = useState(false);
    const [ autocomplete, setAutocomplete ] = useState();
    const [ location, setLocation ] = useState({});

    const { 
        handleCreate, 
        handleProposalFilter,
        handleTPVFilter, 
        handleSegmentoFilter, 
        handleVisitFilter, 
        clearFilter 
    } = useContext(Context);

    
    function onLoad(autocomplete) {
        setAutocomplete(autocomplete);
    }

    function onPlaceChanged() {
        if (autocomplete !== null) {
            const result = autocomplete.getPlace();

            const location = {
                endereco: `${result.address_components[1].long_name}, ${result.address_components[0].long_name}`,
                lat: result.geometry.location.lat(),
                lng: result.geometry.location.lng()               
            }

            setLocation(location)
        } else {
          console.log('Autocomplete is not loaded yet!')
        }
      }

    return (
        <>
            <FilterContainer>
                <AddButton onClick={() => setModal(prevState => !prevState)}><MdAdd /></AddButton>
                <FilterButton 
                    onClick={() => {
                            setSegmentoFilter(false);
                            setTpvFilter(false);
                            setProposalFilter(prevState => !prevState);
                            handleProposalFilter(proposalFilter);
                        }}
                ><FaHandshake />Proposta</FilterButton>
                <div>
                    <FilterButton onClick={() => {
                            setTpvFilter(prevState => !prevState);
                            setSegmentoFilter(false);
                        }
                    }><FaCoins />TPV Potencial</FilterButton>
                    <DropDown item={3} open={tpvFilter}>
                        <li><button onClick={() => handleTPVFilter(1)}>menor que 10k</button></li>
                        <li><button onClick={() => handleTPVFilter(2)}>entre 10 e 20k</button></li>
                        <li><button onClick={() => handleTPVFilter(3)}>maior que 20k</button></li>
                    </DropDown>
                </div>
                <div>
                    <FilterButton onClick={() => {
                            setSegmentoFilter(prevState => !prevState)
                            setTpvFilter(false);
                        }
                    }><FaBuilding />Segmento</FilterButton>
                    <DropDown item={5} open={segmentoFilter}>
                        <li><button onClick={() => handleSegmentoFilter(1)}>Restaurante</button></li>
                        <li><button onClick={() => handleSegmentoFilter(2)}>Ensino</button></li>
                        <li><button onClick={() => handleSegmentoFilter(3)}>Moda</button></li>
                        <li><button onClick={() => handleSegmentoFilter(4)}>Saúde</button></li>
                        <li><button onClick={() => handleSegmentoFilter(5)}>Mercado</button></li>
                    </DropDown>
                </div>
                <FilterButton 
                    onClick={() => {
                            handleVisitFilter();
                            setTpvFilter(false);
                            setSegmentoFilter(false);
                            setProposalFilter(false);
                        }}
                ><FaDoorOpen />Visitas</FilterButton>
                <FilterButton onClick={() => {
                        clearFilter();
                        setTpvFilter(false);
                        setSegmentoFilter(false);
                        setProposalFilter(false);
                    }
                }><FaMapMarkerAlt />Todos</FilterButton>
            </FilterContainer>
            <ModalForm 
                modal={modal} 
                onSubmit={(e) => {
                    handleCreate(e, location)
                    setModal(prevState => !prevState)
                }}>

                <h1>Novo Pin</h1>
                
                <input
                    type="text"
                    placeholder="Nome da EC"
                    name="nomeEC"
                />
                <Autocomplete
                    onLoad={onLoad}
                    onPlaceChanged={onPlaceChanged}
                >
                    <input
                        type="text"
                        placeholder="Endereço"
                        name="endereco"
                    />
                </Autocomplete>
                <input
                    type="number"
                    placeholder="TPV Potencial"
                    name="potencialTPV"
                />
                <select name="segmento">
                    <option value="">Segmento</option>
                    <option value="Restaurante">Restaurante</option>
                    <option value="Moda">Moda</option>
                    <option value="Saúde">Saúde</option>
                    <option value="Mercado">Mercado</option>
                    <option value="Ensino">Ensino</option>
                </select>
                <SubmitButton type="submit">Adicionar</SubmitButton>
                <CloseModalButton type='button' onClick={() => setModal(prevState => !prevState)}><MdClose /></CloseModalButton>
            </ModalForm>
        </>
    )
}
