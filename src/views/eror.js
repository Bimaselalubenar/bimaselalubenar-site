import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './eror.css'

const Eror = (props) => {
  return (
    <div className="eror-container">
      <Helmet>
        <title>eror - bimaselalubenar</title>
        <meta
          name="description"
          content="Halo! Saya bima, saya seorang web development dan software enginer. ada yang bisa di bantu?"
        />
        <meta property="og:title" content="eror - bimaselalubenar" />
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
        className="eror-container1"
      >
        <svg viewBox="0 0 1024 1024" className="eror-icon">
          <path d="M1014.662 822.66c-0.004-0.004-0.008-0.008-0.012-0.010l-310.644-310.65 310.644-310.65c0.004-0.004 0.008-0.006 0.012-0.010 3.344-3.346 5.762-7.254 7.312-11.416 4.246-11.376 1.824-24.682-7.324-33.83l-146.746-146.746c-9.148-9.146-22.45-11.566-33.828-7.32-4.16 1.55-8.070 3.968-11.418 7.31 0 0.004-0.004 0.006-0.008 0.010l-310.648 310.652-310.648-310.65c-0.004-0.004-0.006-0.006-0.010-0.010-3.346-3.342-7.254-5.76-11.414-7.31-11.38-4.248-24.682-1.826-33.83 7.32l-146.748 146.748c-9.148 9.148-11.568 22.452-7.322 33.828 1.552 4.16 3.97 8.072 7.312 11.416 0.004 0.002 0.006 0.006 0.010 0.010l310.65 310.648-310.65 310.652c-0.002 0.004-0.006 0.006-0.008 0.010-3.342 3.346-5.76 7.254-7.314 11.414-4.248 11.376-1.826 24.682 7.322 33.83l146.748 146.746c9.15 9.148 22.452 11.568 33.83 7.322 4.16-1.552 8.070-3.97 11.416-7.312 0.002-0.004 0.006-0.006 0.010-0.010l310.648-310.65 310.648 310.65c0.004 0.002 0.008 0.006 0.012 0.008 3.348 3.344 7.254 5.762 11.414 7.314 11.378 4.246 24.684 1.826 33.828-7.322l146.746-146.748c9.148-9.148 11.57-22.454 7.324-33.83-1.552-4.16-3.97-8.068-7.314-11.414z"></path>
        </svg>
        <h1 className="eror-text">EROR</h1>
      </div>
      <h1 data-aos="zoom-in-up" className="eror-text1 H4-16px">
        Halaman tidak tersedia
      </h1>
      <Link to="/" className="eror-navlink">
        <h1 data-aos="zoom-in-up" className="eror-text2 H4-16px">
          Kembali
        </h1>
      </Link>
    </div>
  )
}

export default Eror
