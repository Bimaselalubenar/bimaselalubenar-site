import React from 'react'

import PropTypes from 'prop-types'

import './menu-interaktif.css'

const MenuInteraktif = (props) => {
  return (
    <div className={`menu-interaktif-container ${props.rootClassName} `}>
      <div className="menu-interaktif-container1">
        <img
          alt="Indikator"
          src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/load-bima.svg?updatedAt=1696319311873"
          className="menu-interaktif-image"
        />
        <h1 className="menu-interaktif-text">{props.Title}</h1>
        <h1 className="menu-interaktif-text1 H5-12px">{props.Deskripsi}</h1>
      </div>
    </div>
  )
}

MenuInteraktif.defaultProps = {
  rootClassName: '',
  Title: '3D Modeling',
  Deskripsi: 'Sejak 2019',
}

MenuInteraktif.propTypes = {
  rootClassName: PropTypes.string,
  Title: PropTypes.string,
  Deskripsi: PropTypes.string,
}

export default MenuInteraktif
