import React from 'react'

import PropTypes from 'prop-types'

import './check.css'

const Check = (props) => {
  return (
    <div className={`check-check ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="check-icon">
        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
      </svg>
      <span className="check-text">{props.Feature}</span>
    </div>
  )
}

Check.defaultProps = {
  rootClassName: '',
  Feature: 'Sed ut perspiciatis unde',
}

Check.propTypes = {
  rootClassName: PropTypes.string,
  Feature: PropTypes.string,
}

export default Check
