import { useState } from 'react'
import './App.css'
import PropTypes from 'prop-types';



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

List.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default List