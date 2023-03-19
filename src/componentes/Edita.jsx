import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Edita({open, fecha,edicao,linha}) {

    const mover = () =>{
        edicao(linha.id, temp)
        fecha();
    }
    const [temp,setTemp] = React.useState(linha.text);

  return (
    
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={fecha}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <TextField onChange={ (e)=> setTemp(e.target.value) }  />
        </DialogContent>
        <DialogActions>
          <Button onClick={fecha}>Cancela</Button>
          <Button  onClick={mover}>Pronto</Button>
        </DialogActions>
      </Dialog>

  );
}
