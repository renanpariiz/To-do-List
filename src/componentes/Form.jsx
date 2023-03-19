import { Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Form({Num}){
    const [tarefa,setTarefa] = useState();
    const[id, setId] = useState(0)

    const Passagem = (tarefa)=> {
        const Objeto = {text: tarefa, id: id}
        setId(id+1);
        Num(Objeto);
    }



    return(
        <Paper style={{ padding: "1em" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TextField id="outlined-basic" label="Tarefa" variant="outlined" onChange={(e)=> setTarefa(e.target.value)} />
                <Button variant="tarefa" onClick={() => Passagem(tarefa)}>+</Button>
            </div>
            
        </Paper>
    )

}



