import React, { useContext } from 'react'
import {Container, Table} from 'react-bootstrap'
import Szo from './Szo'
import '../App.css';


export default function Szavak(props) {

  return (
    <Container>
        <h2>Szavak</h2>
        <input className='kinezet' type='search' placeholder='Válasz témát!'/>
        
        <div>
            <Table bordered hover >
                <thead >
                    <tr  className='respo'>
                        <th>Angol</th>
                        <th>Magyar</th>
                        <th>Visszajelzes</th>
                    </tr>
                </thead>
                
                    {props.szavakLista.map((element)=>{
                        return <Szo adat={element} key={element.id}/>
                    })}
               
            </Table>
        </div>
    </Container>
  )
}
