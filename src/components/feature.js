import React from 'react'

import PropTypes from 'prop-types'

import './feature.css'

const Feature = (props) => {
  return (
    <div
      data-aos="zoom-in-down"
      className={`feature-feature ${props.rootClassName} `}
    >
      <img
        alt={props.Thumbnail_alt}
        src={props.Thumbnail}
        className="feature-image"
      />
      <div className="feature-content">
        <span className="feature-title">{props.Title}</span>
        <span className="feature-description">{props.Description}</span>
        <div className="feature-container">
          <img alt="1" src={props.Star1} className="feature-image1" />
          <img alt="2" src={props.Star2} className="feature-image2" />
          <img alt="3" src={props.Star3} className="feature-image3" />
          <img alt="4" src={props.Star4} className="feature-image4" />
          <img
            alt="5"
            src={props.Star5}
            loading="lazy"
            className="feature-image5"
          />
        </div>
      </div>
    </div>
  )
}

Feature.defaultProps = {
  Title: 'Account',
  Star2: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  Thumbnail_alt: 'image',
  Star4: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  Star1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  Tag: '#',
  Thumbnail: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  rootClassName: '',
  Description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa',
  Star5: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  Star3: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
}

Feature.propTypes = {
  Title: PropTypes.string,
  Star2: PropTypes.string,
  Thumbnail_alt: PropTypes.string,
  Star4: PropTypes.string,
  Star1: PropTypes.string,
  Tag: PropTypes.string,
  Thumbnail: PropTypes.string,
  rootClassName: PropTypes.string,
  Description: PropTypes.string,
  Star5: PropTypes.string,
  Star3: PropTypes.string,
}

export default Feature
