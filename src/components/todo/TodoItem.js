import React from 'react'
import propTypes from 'prop-types'
import {partial} from '../../lib/utils'


export const TodoItem = (props) => {
 const handleToggle = partial(props.handleToggle, props.id)
 const handleRemove = partial(props.handleRemove, props.id)
  return (
    <li key={props.id}>
    <span className='delete-item'><a href="#" onClick={handleRemove}>X</a></span>
    <input type="checkbox" onChange={handleToggle}
    checked={props.isComplete}/>{props.name}
    </li>
  )
}

TodoItem.propTypes = {
 name: propTypes.string.isRequired,
 isComplete: propTypes.bool,
 id: propTypes.number.isRequired
}
