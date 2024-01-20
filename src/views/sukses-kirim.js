import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './sukses-kirim.css'

const SuksesKirim = (props) => {
  return (
    <div className="sukses-kirim-container">
      <Helmet>
        <title>Sukses-Kirim - bimaselalubenar</title>
        <meta
          name="description"
          content="Halo! Saya bima, saya seorang web development dan software enginer. ada yang bisa di bantu?"
        />
        <meta property="og:title" content="Sukses-Kirim - bimaselalubenar" />
        <meta
          property="og:description"
          content="Halo, saya Bima. saya seorang  3d modeling dan Full stack development. bagaimana saya dapat berkontribusi dengan anda?"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bf1328a2-cee6-443f-bd21-0ba3b0b34318/2718b425-4e04-4c38-a1b3-210d3c77aba4?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="sukses-kirim-container1"
      >
        <svg viewBox="0 0 1024 1024" className="sukses-kirim-icon">
          <path d="M864 128l-480 480-224-224-160 160 384 384 640-640z"></path>
        </svg>
        <h1 className="sukses-kirim-text">Terkirim</h1>
      </div>
      <Link to="/materisocmed" className="sukses-kirim-navlink">
        <h1 data-aos="zoom-in-up" className="sukses-kirim-text1 H4-16px">
          Kembali
        </h1>
      </Link>
    </div>
  )
}

export default SuksesKirim
