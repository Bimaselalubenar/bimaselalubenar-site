import React from 'react'

import PropTypes from 'prop-types'

import Testimoni2 from './testimoni2'
import './testimoni-loader.css'

const TestimoniLoader = (props) => {
  return (
    <div className={`testimoni-loader-container ${props.rootClassName} `}>
      <div
        data-thq="slider"
        data-loop="true"
        data-autoplay="true"
        data-navigation="false"
        data-pagination="false"
        data-autoplay-delay="1500"
        data-reverse-direction="true"
        data-pause-autoplay-on-mouse-enter="false"
        className="testimoni-loader-slider swiper"
      >
        <div data-thq="slider-wrapper" className="swiper-wrapper">
          <div
            data-thq="slider-slide"
            className="testimoni-loader-slider-slide swiper-slide"
          >
            <Testimoni2
              image_src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/ADOBE%20-%20Photoshop%20CC%202020.png?updatedAt=1703484884075"
              rootClassName="testimoni2-root-class-name"
              className=""
            ></Testimoni2>
          </div>
          <div
            data-thq="slider-slide"
            className="testimoni-loader-slider-slide1 swiper-slide"
          >
            <Testimoni2
              text1="Sudah melakukan pembelian 1 hari yang lalu"
              text2="F*** P*** p*****"
              image_src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/ADOBE%20-%20Bundle%20CC%202020.png?updatedAt=1703455304761"
              rootClassName="testimoni2-root-class-name1"
              className=""
            ></Testimoni2>
          </div>
          <div
            data-thq="slider-slide"
            className="testimoni-loader-slider-slide2 swiper-slide"
          >
            <Testimoni2
              text1="Sudah melakukan pembelian 3 hari yang lalu"
              text2="B*** K**** R****"
              image_src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/ADOBE%20-%20Premiere%20CC%202020.png?updatedAt=1703486763136"
              rootClassName="testimoni2-root-class-name2"
              className=""
            ></Testimoni2>
          </div>
          <div
            data-thq="slider-slide"
            className="testimoni-loader-slider-slide3 swiper-slide"
          >
            <Testimoni2
              text1="Sudah melakukan pembelian 2 hari yang lalu"
              text2="R*** P****"
              image_src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/SMADAV%202023.png?updatedAt=1703486047357"
              rootClassName="testimoni2-root-class-name3"
              className=""
            ></Testimoni2>
          </div>
        </div>
        <div
          data-thq="slider-pagination"
          className="testimoni-loader-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
        >
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet swiper-pagination-bullet-active"
          ></div>
        </div>
        <div
          data-thq="slider-button-prev"
          className="testimoni-loader-slider-button-prev swiper-button-prev"
        ></div>
        <div
          data-thq="slider-button-next"
          className="testimoni-loader-slider-button-next swiper-button-next"
        ></div>
      </div>
    </div>
  )
}

TestimoniLoader.defaultProps = {
  rootClassName: '',
}

TestimoniLoader.propTypes = {
  rootClassName: PropTypes.string,
}

export default TestimoniLoader
