import React, { useContext, useState } from 'react'
import '../App.css';

export default function Szo(props) {
    const [visszajelzes]=useState(true);
  return (
    <tr  className='respo'>
        <td>
            {props.adat.angol}
        </td>
        <td>
            {props.adat.magyar}
        </td>
        <td>
            {visszajelzes?'✅':'❌'}
        </td>
   
        </tr>
  )
}
