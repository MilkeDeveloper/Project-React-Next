import { Button } from '@mui/material'
import {
    ListStyled,
    ItemList,
    Photo,
    Info,
    Name,
    Desc
} from './ListStyled'

import { Pets } from '../../../data/@types/Pets'
import { TextService } from '../../../data/services/TextService'
import { useState } from 'react'
import Home from '../../../pages'

interface ListProps {
    pets: Pets[];
    onSelect: (pets: Pets) => void;
}

export default function List(props: ListProps) {
    const TextMaxLenght = 200;

    return (
        < ListStyled>
            {props.pets.map(pet => (
                <ItemList key={pet.id}>
                 <Photo src={pet.photo} alt={pet.name}/>
                 <Info>
                     <Name>{pet.name}</Name>
                     <Desc>
                         {TextService.TextLimit(pet.history, TextMaxLenght)}
                     </Desc>
                     <Button onClick={() => props.onSelect(pet)}
                        variant={'contained'}
                        fullWidth>
                        <strong>Adotar {pet.name}</strong>
                     </Button>
                         
                     
                 </Info>
                </ItemList>
            ))}
           
 
        </ListStyled>
    )
}