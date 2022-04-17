import React from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'


function Toolbar(props) {
    const {filters, selected, onSelect} = props;
  return (
      <div className='toolbar'>
          {filters.map(el => el === selected? <button key={nanoid()} onClick={onSelect} className='toolbarButton select'>{el}</button>:<button key={nanoid()} onClick={onSelect} className='toolbarButton'>{el}</button>)}
      </div>    
  )
}

Toolbar.propTypes = {
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}

export default Toolbar
