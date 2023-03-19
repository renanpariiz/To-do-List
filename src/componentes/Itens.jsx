import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Edita from './Edita';
import { Paper } from '@mui/material';

export default function Itens({linha, deleta,edicao}) {
  const[abrir,setAbrir] = React.useState(false);

  const fecha = () =>{
    setAbrir(!abrir);
  }


  return (
    <div>

    <Edita open = {abrir} fecha={fecha} edicao={edicao} linha={linha}/>
    <Paper>
    <ListItem
    secondaryAction={
      <IconButton edge="end" aria-label="comments" onClick={() =>deleta(linha.id)}>
        <DeleteForeverIcon />
      </IconButton>
    }
    disablePadding
  >
    <ListItemButton role={undefined} dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
          tabIndex={-1}
          disableRipple

        />
      </ListItemIcon>
      <ListItemText primary = {linha.text} onClick={() => setAbrir(true)}/>
    </ListItemButton>
  </ListItem>
  </Paper>
  </div>
  );
}
