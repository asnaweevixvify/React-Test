import { useState } from 'react'
import './App.css'


function List(props){
    const {title,amount} = props
    return(
        <>
        <li className='list'> 
            <span>{title}</span>
            <span>{amount}</span>
        </li>
        </>
    ) 
}

export default List