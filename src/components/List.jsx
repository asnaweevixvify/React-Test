import './App.css'
import PropTypes from 'prop-types';



function List(props){
    const {title,amount} = props
    const status = amount<0 ? 'expense' : 'income'
    const symbol = amount<0 ? '-' : '+'
    return(
        <>
        <li className={`list ${status}`}> 
            <span>{title}</span>
            <span>{symbol}{Math.abs(amount)}</span>
        </li>
        </>
    ) 
}

List.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default List