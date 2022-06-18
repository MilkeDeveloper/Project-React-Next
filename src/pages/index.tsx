import type { NextPage } from 'next'
import List from '../ui/components/List/List'
import Title from '../ui/components/Title/Title'
import { Dialog, Grid, TextField, DialogActions, Button, Snackbar, DialogContentText, DialogContent, Slide, Alert } from '@mui/material'
import { useIndex } from '../data/hooks/pages/useIndex'
import { TransitionProps } from '@mui/material/transitions'
import React from 'react'


const Home: NextPage = () => {
  const {
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

  } = useIndex();

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


  return (
    <div>
      <Title title=''
          subtitle={
            <span>
              Com um pequeno valor mensal, voce <br />
              pode <strong>adotar um pet virtualmente.</strong> 
            </span>

          }
      />
      <List pets={PetList} onSelect={(pet) => setSelected(pet)} />

      <Dialog open={SelectedPet !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 }}}
        onClose={() => setSelected(null)}
      >
        <Grid container spacing={2} >
          <Grid item xs={12} >
            <TextField label={'E-mail'} type={'email'} value={email} fullWidth onChange={(e) => setEmail(e.target.value)} />
          </Grid>
          <Grid item xs={12} >
            <TextField label={'Valor'} type={'number'} value={value} fullWidth onChange={(e) => setValue(e.target.value)} />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5}}>
          <Button color={'secondary'} onClick={() => setSelected(null)} >
            Cancelar
          </Button>
          <Button variant={'contained'} onClick={() => adotar()}>
            Confirmar Adoção
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={msg.length > 0} message={msg} autoHideDuration={2500} onClose={() => setMsg('')} >
        <Alert color={'success'} onClose={() => setMsg('')} sx={{ width: '100%', color: '#f0f0d8', bgcolor: '#4caf50' }} >
          {msg}
        </Alert>
      </Snackbar>
      <Snackbar open={errorMsg.length > 0} message={errorMsg} autoHideDuration={2500} onClose={() => setErrorMsg('')} >
          <Alert variant="filled" severity="warning" onClose={() => setErrorMsg('')} sx={{ width: '100%', color: '#f0f0d8', bgcolor: '#ce8e3a' }}>
            {errorMsg}
          </Alert>
      </Snackbar>
      
      
    </div>

    
    
  )
  
}

export default Home
