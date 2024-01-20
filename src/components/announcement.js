import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './announcement.css'

const Announcement = (props) => {
  return (
    <div
      id="myDIV"
      className={`announcement-announcementmystyle ${props.rootClassName} `}
    >
      <div className="announcement-un-hide">
        <div className="announcement-container">
          <span className="announcement-title">{props.Title}</span>
          <Link to="/software-store" className="announcement-navlink">
            <div className="announcement-button">
              <span className="announcement-button-text">{props.Button}</span>
              <span className="announcement-button-text1">{props.Button1}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

Announcement.defaultProps = {
  Button11: '->',
  Title: 'Software Lisensi Original',
  rootClassName: '',
  Button2: 'Beli Sekarang',
  Title1: 'Software Lisensi Original',
  Button: 'Beli Sekarang',
  Button1: '->',
}

Announcement.propTypes = {
  Button11: PropTypes.string,
  Title: PropTypes.string,
  rootClassName: PropTypes.string,
  Button2: PropTypes.string,
  Title1: PropTypes.string,
  Button: PropTypes.string,
  Button1: PropTypes.string,
}

export default Announcement
