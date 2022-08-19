import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo';
import Lista from '../ui/components/Lista/Lista';
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material';
import { UseIndex } from '../data/hooks/pages/useIndex';

const Home: NextPage = () => {
  const {
    listaPets,
    petSelecionado,
    setPetSelecionado
  } = UseIndex();

  return (
    <div>
      <Titulo 
      titulo="" 
      subtitulo={
      <span>
         Com um pequeno valor mensal, você <br/> pode <strong>adotar um pet virtualmente</strong>  
      </span>
      } />

      <Lista 
        pets={listaPets}
        onSelect={(pet) => setPetSelecionado(pet)}
      />

      <Dialog 
        open={petSelecionado !== null} 
        fullWidth 
        PaperProps={{ sx: {padding:'40px'} }}
        onClose={() => setPetSelecionado(null)}  
      >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField 
            label={'E-mail'} 
            type={'email'}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            label={'Quantia por mês'}
            type={'number'} 
            fullWidth
          />
        </Grid>
      </Grid>
      <DialogActions sx={{mt:5}}>
        <Button color={'secondary'}
        onClick={() => setPetSelecionado(null)}
      >
          Cancelar
        </Button>
        <Button variant={'contained'}>
          Confirmar adoção
        </Button>
      </DialogActions>
      </Dialog>

      <Snackbar 
        open={false}
        message={'fdfdfd dfdsfd dfdsff sdfsfsf'}
      />
    </div>
  )
}

export default Home
