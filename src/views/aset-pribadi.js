import React from 'react'

import { Helmet } from 'react-helmet'

import './aset-pribadi.css'

const AsetPribadi = (props) => {
  return (
    <div className="aset-pribadi-container">
      <Helmet>
        <title>aset-pribadi - bimaselalubenar</title>
        <meta
          name="description"
          content="Halo! Saya bima, saya seorang web development dan software enginer. ada yang bisa di bantu?"
        />
        <meta property="og:title" content="aset-pribadi - bimaselalubenar" />
        <meta
          property="og:description"
          content="Halo, saya Bima. saya seorang  3d modeling dan Full stack development. bagaimana saya dapat berkontribusi dengan anda?"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bf1328a2-cee6-443f-bd21-0ba3b0b34318/2718b425-4e04-4c38-a1b3-210d3c77aba4?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <div className="aset-pribadi-content">
        <img
          alt="bima"
          src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/ASET%20PRIBADI.svg?updatedAt=1696694092128"
          loading="lazy"
          className="aset-pribadi-image"
        />
        <div className="aset-pribadi-container1">
          <div className="aset-pribadi-container2">
            <h1 data-aos="zoom-in-down" className="aset-pribadi-text">
              Aset Pribadi 
            </h1>
            <h1 data-aos="zoom-in-down" className="aset-pribadi-text1">
              Bima
            </h1>
          </div>
          <span data-aos="zoom-in-down" className="aset-pribadi-caption">
            <span className="aset-pribadi-text2">
              Barang siapa yang menemukan barang dengan tanda QR pada barang
              tersebut. di mohon untuk mengembalikan dengan hubungi kontak
              berikut.
            </span>
            <br></br>
          </span>
          <div className="aset-pribadi-hero-buttons">
            <a
              href="https://bit.ly/Bima23"
              target="_blank"
              rel="noreferrer noopener"
              className="aset-pribadi-link"
            >
              <div data-aos="zoom-in-down" className="aset-pribadi-ios-btn">
                <span className="aset-pribadi-caption1">Hubungi</span>
                <svg viewBox="0 0 1024 1024" className="aset-pribadi-icon">
                  <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM341.333 554.667h238.336l-97.835 97.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l170.667-170.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-170.667-170.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l97.835 97.835h-238.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AsetPribadi
