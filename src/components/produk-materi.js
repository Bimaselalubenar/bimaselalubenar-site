import React from 'react'

import PropTypes from 'prop-types'

import './produk-materi.css'

const ProdukMateri = (props) => {
  return (
    <div className={`produk-materi-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.GambarMateri}
        loading="lazy"
        className="produk-materi-image"
      />
      <div className="produk-materi-container1">
        <div className="produk-materi-container2">
          <span className="produk-materi-text">
            <span className="">Google Foto</span>
            <br className=""></br>
          </span>
          <span className="produk-materi-text3">{props.text1}</span>
        </div>
        <span className="produk-materi-text4">{props.NamaProduk}</span>
        <a
          href={props.link_container}
          target="_blank"
          rel="noreferrer noopener"
          className="produk-materi-link"
        >
          <div className="produk-materi-container3">
            <span className="produk-materi-text5">{props.text8}</span>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="produk-materi-icon"
            >
              <path
                d="M731.429 768c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM877.714 768c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM950.857 640v182.857c0 30.286-24.571 54.857-54.857 54.857h-841.143c-30.286 0-54.857-24.571-54.857-54.857v-182.857c0-30.286 24.571-54.857 54.857-54.857h265.714l77.143 77.714c21.143 20.571 48.571 32 77.714 32s56.571-11.429 77.714-32l77.714-77.714h265.143c30.286 0 54.857 24.571 54.857 54.857zM765.143 314.857c5.714 13.714 2.857 29.714-8 40l-256 256c-6.857 7.429-16.571 10.857-25.714 10.857s-18.857-3.429-25.714-10.857l-256-256c-10.857-10.286-13.714-26.286-8-40 5.714-13.143 18.857-22.286 33.714-22.286h146.286v-256c0-20 16.571-36.571 36.571-36.571h146.286c20 0 36.571 16.571 36.571 36.571v256h146.286c14.857 0 28 9.143 33.714 22.286z"
                className=""
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}

ProdukMateri.defaultProps = {
  GambarMateri:
    'https://media.mayar.id/images/f36a67cd-2ba9-446a-a6d7-e1a231f84e3e.jpeg',
  text8: 'Download',
  image_alt: 'Fitur',
  text1: '2023',
  rootClassName1: '',
  rootClassName: '',
  NamaProduk: 'Name Software',
  link_container: '',
}

ProdukMateri.propTypes = {
  GambarMateri: PropTypes.string,
  text8: PropTypes.string,
  image_alt: PropTypes.string,
  text1: PropTypes.string,
  rootClassName1: PropTypes.string,
  rootClassName: PropTypes.string,
  NamaProduk: PropTypes.string,
  link_container: PropTypes.string,
}

export default ProdukMateri
