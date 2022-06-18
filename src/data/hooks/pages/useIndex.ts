import { useState, useEffect } from "react";
import { Pets } from "../../@types/Pets";
import { ApiService } from "../../services/ApiService";
import { AxiosError } from 'axios';
import { error } from "console";


export function useIndex() {
    const [PetList, setPetList] = useState<Pets[]>([]),
        [SelectedPet, setSelected] = useState<Pets | null>(null),
        [email, setEmail] = useState(''),
        [value, setValue] = useState(''),
        [msg, setMsg] = useState(''),
        [errorMsg, setErrorMsg] = useState('')
    
    useEffect(() => {
        ApiService.get('/pets')
        .then((response) => {
            setPetList(response.data);
        })
    }, [])

    useEffect(() => {
        if(SelectedPet === null){
            
            ClearForm();
        }
            
    }, [SelectedPet])

     function adotar() {
        if(SelectedPet !== null) {
            
            if(ValidateAdoptionData()) {
                ApiService.post('/adocoes', {
                    pet_id: SelectedPet.id,
                    email,
                    valor: value,
                })
                    .then(() => {
                        setSelected(null);
                
                        setMsg('Parabéns! Voce adotou um Pet')
                        
                        
                    })
                    .catch((error:AxiosError) => {
                        setErrorMsg(error.response?.data.message)
                    })
                    
            } else {
                setErrorMsg('Preencha todos os campos corretamente.')
            }
        }
    }

    function ValidateAdoptionData() {
        return email.length > 0 && value.length > 0;
    }

    function ClearForm() {
        setEmail(''),
        setValue('')
    }

    return {
        PetList,
        SelectedPet,
        setSelected,
        email,
        setEmail,
        value,
        setValue,
        msg,
        setMsg,
        errorMsg,
        setErrorMsg,
        adotar
    };
}