import { Paper, Grid, TextField, Button, Snackbar, Alert } from "@mui/material";
import { NextPage } from "next";
import { useRegistration } from "../../data/hooks/pages/pets/useRegistration";
import { Desc } from "../../ui/components/List/ListStyled";
import Title from "../../ui/components/Title/Title";

const Registration: NextPage = () => {
    const {
        name,
        desc,
        photo,
        setName,
        setDesc,
        setPhoto,
        Register,
        msg,
        setMessage
    } = useRegistration();
    
    return (
        <>
            <Title 
                title={'Cadastro de pets para Adoção'}
                subtitle={'Preencha os campos abaixo com os dados do novo pet'}
            />
            <Paper sx={{maxWidth: 970, mx: 'auto', p: 5}} >
                <Grid container spacing={3} >
                    <Grid item xs={12} >
                        <TextField 
                            label={'Nome'}
                            type={'name'} value={name} onChange={(e) => setName(e.target.value)}
                            placeholder={'Digite o nome do pet'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            label={'Descrição'}
                            value={desc} onChange={(e) => setDesc(e.target.value)}
                            multiline
                            rows={4}
                            placeholder={'Conte resumidamente a história do pet'}
                            fullWidth
                        />
                        {desc}
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            label={'Imagem'}
                            type={'photo'} value={photo} onChange={(e) => setPhoto(e.target.value)}
                            placeholder={'Digite aqui o endereço da imagem'}
                            fullWidth
                        />
                        <Button
                            variant={'contained'}
                            color={'secondary'}
                            sx={{mt: 2}}
                            component={'a'}
                            href={'https://imgur.com/upload'}
                            target= {'_blank'}
                        >
                            Enviar Imagem
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}} >
                    <Button
                            onClick={Register}
                            variant={'contained'}
                            fullWidth
                            sx={{maxWidth: {md: 200}, mt: 4}}
                        
                        >
                            Cadastrar Pet
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Snackbar 
                open={msg.length > 0} onClose={() => setMessage('')} autoHideDuration={2500}  
            >
                <Alert color={'success'} sx={{ width: '100%', color: '#f0f0d8', bgcolor: '#4caf50' }} >
                    {msg}
                </Alert>
            </Snackbar>

        </>
    )
};

export default Registration;