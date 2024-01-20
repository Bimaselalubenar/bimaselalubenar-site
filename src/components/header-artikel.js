import React from 'react'

import PropTypes from 'prop-types'

import './header-artikel.css'

const HeaderArtikel = (props) => {
  return (
    <div className={`header-artikel-container ${props.rootClassName} `}>
      <div className="header-artikel-container1">
        <h1 className="header-artikel-text">{props.heading}</h1>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="header-artikel-image"
        />
        <div className="header-artikel-container2">
          <h1 className="header-artikel-text1">{props.heading1}</h1>
          <a
            href={props.Share_Whatsapp_Link}
            target="_blank"
            rel="noreferrer noopener"
            className="header-artikel-link"
          >
            <h1 className="header-artikel-text2">{props.Share}</h1>
          </a>
        </div>
      </div>
    </div>
  )
}

HeaderArtikel.defaultProps = {
  image_alt: 'image',
  heading1: 'Bima | 05/01/2024',
  rootClassName: '',
  heading: 'Heading',
  Share: 'Bagikan di WhatsApp',
  Share_Whatsapp_Link: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

HeaderArtikel.propTypes = {
  image_alt: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  Share: PropTypes.string,
  Share_Whatsapp_Link: PropTypes.string,
  image_src: PropTypes.string,
}

export default HeaderArtikel
