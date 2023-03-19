import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "./Form";
import Itens from "./Itens";

export default function Pagina(){
    const[linhas,setLinhas] = useState([]);

    const Num = (linha) =>  {
        setLinhas([...linhas,linha]);
    };

    const deleta = (id) => {
        var verificador = linhas.filter((linha) =>linha.id!==id);
        setLinhas(verificador);
    };

    const edicao = (id,temp) => {
        var temporario = linhas;
            for(var i in temporario){
                if(temporario[i].id === id){
                    temporario[i].text = temp;
                }
            }
        setLinhas(temporario);
    }


    return(
        <Container maxWidth="xs" style={{marginTop: "1em"}}>
      <Form Num ={Num}/>
      <List sx={{ width: '100%', bgcolor: 'background.paper', marginTop: "1em" }}>
        {linhas.map( (linha) => ( 
            <div key={linha.id}>
                <Itens  linha = {linha} deleta={deleta} edicao={edicao} />   
            </div>
            
         ))}
      </List>
      
    </Container>
    )
    
}