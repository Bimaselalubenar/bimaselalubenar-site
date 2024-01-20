import React from 'react'

import PropTypes from 'prop-types'

import './highlight.css'

const Highlight = (props) => {
  return (
    <div
      data-aos="fade-left"
      className={`highlight-highlight ${props.rootClassName} `}
    >
      <svg viewBox="0 0 1024 1024" className="highlight-icon">
        <path d="M512 470q18 0 30 12t12 30-12 30-30 12-30-12-12-30 12-30 30-12zM512 704q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
      </svg>
      <div className="highlight-container">
        <span className="highlight-text">{props.Title}</span>
        <span className="highlight-text1">{props.Description}</span>
      </div>
    </div>
  )
}

Highlight.defaultProps = {
  Description:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  rootClassName: '',
  Title: 'Everything you get with Finbest',
}

Highlight.propTypes = {
  Description: PropTypes.string,
  rootClassName: PropTypes.string,
  Title: PropTypes.string,
}

export default Highlight
