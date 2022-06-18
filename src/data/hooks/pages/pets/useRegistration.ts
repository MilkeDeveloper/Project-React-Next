import { AxiosError } from 'axios';
import { useState } from 'react';
import { ApiService } from '../../../services/ApiService';

export function useRegistration() {
    const [name, setName] = useState(''),
        [desc, setDesc] = useState(''),
        [photo, setPhoto] = useState(''),
        [msg, setMessage] = useState('');

    function Register() {
        if(FormValidate()) {
            ApiService.post('/pets', {
                name,
                history: desc,
                photo
            })
                .then(() => {
                    ClearForm();
                    setMessage('Pet cadastrado com sucesso!')
                })
                .catch((error: AxiosError) => {
                    setMessage(error.response?.data.message);
                })
        } else {
            setMessage('Preencha todos os campos!');
        }
    }
    
    function FormValidate() {
        return name.length > 2 && desc.length > 20 && photo.length > 5
    }

    function ClearForm() {
        setName('')
        setDesc('')
        setPhoto('')
    }

    return {
        name,
        desc,
        photo,
        setName,
        setDesc,
        setPhoto,
        Register,
        msg,
        setMessage
    }
}