import React from 'react'

import PropTypes from 'prop-types'

import './testimoni2.css'

const Testimoni2 = (props) => {
  return (
    <div className={`testimoni2-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="testimoni2-image"
      />
      <div className="testimoni2-container1">
        <div className="testimoni2-container2">
          <span className="testimoni2-text">{props.text2}</span>
        </div>
        <span className="testimoni2-text1">{props.text}</span>
        <span className="testimoni2-text2">{props.text1}</span>
      </div>
    </div>
  )
}

Testimoni2.defaultProps = {
  text: 'Melakukan Pembelian',
  text1: 'Sudah melalukan pembelian 2 hari yang lalu',
  rootClassName: '',
  image_alt: 'image',
  text2: 'B*** A****** P******',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Testimoni2.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text2: PropTypes.string,
  image_src: PropTypes.string,
}

export default Testimoni2
