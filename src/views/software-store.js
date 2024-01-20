import React from 'react'

import { Helmet } from 'react-helmet'

import Announcement from '../components/announcement'
import Navbar from '../components/navbar'
import ProdukSwr from '../components/produk-swr'
import TestimoniLoader from '../components/testimoni-loader'
import Footer from '../components/footer'
import ChatInfinitex from '../components/chat-infinitex'
import './software-store.css'

const SoftwareStore = (props) => {
  return (
    <div className="software-store-container">
      <Helmet>
        <title>Software-Store - bimaselalubenar</title>
        <meta
          name="description"
          content="Software Adobe dll Only 200K. ✅Life time - Adobe Photoshop, Adobe Ilustrator, Adobe Premiere Pro, Adobe After Effect"
        />
        <meta property="og:title" content="Software-Store - bimaselalubenar" />
        <meta
          property="og:description"
          content="Software Adobe dll Only 300K. ✅Life time - Adobe Photoshop, Adobe Ilustrator, Adobe Premiere Pro, Adobe After Effect"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bf1328a2-cee6-443f-bd21-0ba3b0b34318/21c51ced-14a9-43b3-b686-b29e8959bb6f?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <Announcement rootClassName="announcement-root-class-name4"></Announcement>
      <Navbar rootClassName="navbar-root-class-name4"></Navbar>
      <div
        data-thq="slider"
        data-loop="true"
        data-autoplay="true"
        data-navigation="false"
        data-pagination="true"
        data-autoplay-delay="2000"
        className="software-store-slider swiper"
      >
        <div
          data-thq="slider-pagination"
          className="software-store-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
        ></div>
        <div data-thq="slider-wrapper" className="swiper-wrapper">
          <div
            data-thq="slider-slide"
            className="software-store-slider-slide swiper-slide"
          >
            <a
              href="https://infinitex.mayar.link/catalog"
              target="_blank"
              rel="noreferrer noopener"
              className="software-store-link"
            >
              <img
                alt="image"
                src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Ads/Frame%2090.png?updatedAt=1703481546562"
                className="software-store-image"
              />
            </a>
          </div>
          <div
            data-thq="slider-slide"
            className="software-store-slider-slide1 swiper-slide"
          >
            <a
              href="https://infinitex.mayar.link/catalog/bundle-adobe-cc-2020"
              target="_blank"
              rel="noreferrer noopener"
              className="software-store-link1"
            >
              <img
                alt="image"
                src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Ads/Frame%2092.png?updatedAt=1703481546000"
                className="software-store-image1"
              />
            </a>
          </div>
        </div>
        <div
          data-thq="slider-button-prev"
          className="software-store-slider-button-prev swiper-button-prev"
        ></div>
        <div
          data-thq="slider-button-next"
          className="software-store-slider-button-next swiper-button-next"
        ></div>
      </div>
      <div className="software-store-blog">
        <div className="software-store-container1">
          <span className="software-store-text">Adobe Familly</span>
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="software-store-icon"
          >
            <path d="M734.286 512c0-9.714-3.429-18.857-10.286-25.714l-258.857-258.857c-6.857-6.857-16-10.286-25.714-10.286s-18.857 3.429-25.714 10.286l-52 52c-6.857 6.857-10.286 16-10.286 25.714s3.429 18.857 10.286 25.714l108 108h-286.857c-20 0-36.571 16.571-36.571 36.571v73.143c0 20 16.571 36.571 36.571 36.571h286.857l-108 108c-6.857 6.857-10.857 16-10.857 25.714s4 18.857 10.857 25.714l52 52c6.857 6.857 16 10.286 25.714 10.286s18.857-3.429 25.714-10.286l258.857-258.857c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
        </div>
        <div className="software-store-container2">
          <ProdukSwr
            LinkProduk="https://infinitex.mayar.link/catalog/adobe-photoshop-cc-2020"
            NamaProduk="PHOTOSHOP CC 2020"
            GambarProduk="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/ADOBE%20-%20Photoshop%20CC%202020.png?updatedAt=1703484884075"
            rootClassName="produk-swr-root-class-name"
          ></ProdukSwr>
          <ProdukSwr
            LinkProduk="https://infinitex.mayar.link/catalog/adobe-ilustrator-cc-2020"
            NamaProduk="ILUSTRATOR CC 2020"
            GambarProduk="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/ADOBE%20-Ilustrator%20CC%202020.png?updatedAt=1703484890579"
            rootClassName="produk-swr-root-class-name3"
          ></ProdukSwr>
          <ProdukSwr
            LinkProduk="https://infinitex.mayar.link/catalog/adobe-premiere-pro-cc-2020"
            NamaProduk="PREMIERE PRO CC 2020"
            GambarProduk="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/ADOBE%20-%20Premiere%20CC%202020.png?updatedAt=1703486763136"
            rootClassName="produk-swr-root-class-name2"
          ></ProdukSwr>
          <ProdukSwr
            LinkProduk="https://infinitex.mayar.link/catalog/adobe-encorder-cc-2020"
            NamaProduk="ENCORDER CC 2020"
            GambarProduk="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/ADOBE%20-%20Encorder%20CC%202020.png?updatedAt=1703484883587"
            rootClassName="produk-swr-root-class-name1"
          ></ProdukSwr>
          <ProdukSwr
            LinkProduk="https://infinitex.mayar.link/catalog/adobe-after-effect-cc-2020"
            NamaProduk="AFTER EFFECT CC 2020"
            GambarProduk="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/ADOBE%20-%20After%20Effect%20CC%202020.png?updatedAt=1703484883801"
            rootClassName="produk-swr-root-class-name4"
          ></ProdukSwr>
          <ProdukSwr
            HargaFix="Rp. 700.000,-"
            LinkProduk="https://infinitex.mayar.link/pl/bundle-adobe-cc-2020"
            NamaProduk="BUNDLE ADOBE CC 2020"
            GambarProduk="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/ADOBE%20-%20Bundle%20CC%202020.png?updatedAt=1703455304761"
            rootClassName="produk-swr-root-class-name5"
          ></ProdukSwr>
        </div>
      </div>
      <TestimoniLoader></TestimoniLoader>
      <div className="software-store-blog1">
        <div className="software-store-container3">
          <span className="software-store-text1">Anti Virus Gratis</span>
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="software-store-icon2"
          >
            <path d="M734.286 512c0-9.714-3.429-18.857-10.286-25.714l-258.857-258.857c-6.857-6.857-16-10.286-25.714-10.286s-18.857 3.429-25.714 10.286l-52 52c-6.857 6.857-10.286 16-10.286 25.714s3.429 18.857 10.286 25.714l108 108h-286.857c-20 0-36.571 16.571-36.571 36.571v73.143c0 20 16.571 36.571 36.571 36.571h286.857l-108 108c-6.857 6.857-10.857 16-10.857 25.714s4 18.857 10.857 25.714l52 52c6.857 6.857 16 10.286 25.714 10.286s18.857-3.429 25.714-10.286l258.857-258.857c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
        </div>
        <div className="software-store-container4">
          <ProdukSwr
            text="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/SMADAV%202023.png?updatedAt=1703486047357"
            HargaFix="GRATIS!"
            LinkProduk="https://infinitex.mayar.link/pl/smadav-pro-2023"
            NamaProduk="SMADAV PRO 2023"
            GambarProduk="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/SMADAV%202023.png?updatedAt=1703486047357"
            rootClassName="produk-swr-root-class-name6"
          ></ProdukSwr>
          <ProdukSwr
            text="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/SMADAV%202023.png?updatedAt=1703486047357"
            HargaFix="Rp. 25.000,-"
            LinkProduk="https://infinitex.mayar.link/catalog/ccleaner-pro-2023"
            NamaProduk="CCleaner PRO 2023"
            GambarProduk="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/CCleaner%202023.png?updatedAt=1703496180246"
            rootClassName="produk-swr-root-class-name8"
          ></ProdukSwr>
          <ProdukSwr
            text="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/SMADAV%202023.png?updatedAt=1703486047357"
            HargaFix="Rp. 45.000,-"
            LinkProduk="https://infinitex.mayar.link/pl/avast-anti-virus"
            NamaProduk="AVAST PRO 2023"
            GambarProduk="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/AVAST%20ANTI%20VIRUS.png?updatedAt=1703497905981"
            rootClassName="produk-swr-root-class-name9"
          ></ProdukSwr>
        </div>
      </div>
      <div className="software-store-blog2">
        <div className="software-store-container5">
          <span className="software-store-text2">Editing Software</span>
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="software-store-icon4"
          >
            <path d="M734.286 512c0-9.714-3.429-18.857-10.286-25.714l-258.857-258.857c-6.857-6.857-16-10.286-25.714-10.286s-18.857 3.429-25.714 10.286l-52 52c-6.857 6.857-10.286 16-10.286 25.714s3.429 18.857 10.286 25.714l108 108h-286.857c-20 0-36.571 16.571-36.571 36.571v73.143c0 20 16.571 36.571 36.571 36.571h286.857l-108 108c-6.857 6.857-10.857 16-10.857 25.714s4 18.857 10.857 25.714l52 52c6.857 6.857 16 10.286 25.714 10.286s18.857-3.429 25.714-10.286l258.857-258.857c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
        </div>
        <div className="software-store-container6">
          <ProdukSwr
            text="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/SMADAV%202023.png?updatedAt=1703486047357"
            HargaFix="Rp. 50.000,-"
            LinkProduk="https://infinitex.mayar.link/pl/coreldraw-graphics-suite-2022"
            NamaProduk="CorelDRAW Graphics Suite 2022"
            GambarProduk="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Software/Corel%20Draw%202022.png?updatedAt=1703497638856"
            rootClassName="produk-swr-root-class-name7"
          ></ProdukSwr>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name5"></Footer>
      <TestimoniLoader rootClassName="testimoni-loader-root-class-name"></TestimoniLoader>
      <ChatInfinitex rootClassName="chat-infinitex-root-class-name"></ChatInfinitex>
    </div>
  )
}

export default SoftwareStore
