import React from 'react'

import PropTypes from 'prop-types'

import Links from './links'
import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-content">
        <div className="footer-information">
          <div className="footer-heading">
            <img
              alt="Bima"
              src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/serverbima-icon-bima2.png?updatedAt=1696243150268"
              className="footer-pasted-image"
            />
            <span className="footer-text H4-16px">{props.text1}</span>
          </div>
        </div>
        <Links className=""></Links>
      </div>
      <a
        href="https://infinitex.my.id"
        target="_blank"
        rel="noreferrer noopener"
        className="footer-link"
      >
        {props.text}
      </a>
    </div>
  )
}

Footer.defaultProps = {
  text1: 'Full Stack Developer',
  text2: 'HUBUNGI ADMIN',
  text: '© 2024 Infinitex. All Rights Reserved.',
  rootClassName: '',
}

Footer.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
