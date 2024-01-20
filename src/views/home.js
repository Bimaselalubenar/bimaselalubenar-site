import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Announcement from '../components/announcement'
import Navbar from '../components/navbar'
import MenuInteraktif from '../components/menu-interaktif'
import Highlight from '../components/highlight'
import Point from '../components/point'
import Feature from '../components/feature'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Bimaselalubenar</title>
        <meta
          name="description"
          content="Halo, saya Bima. saya seorang animator, 3d modeling dan Full stack development. bagaimana saya dapat berkontribusi dengan anda?"
        />
        <meta property="og:title" content="Bimaselalubenar" />
        <meta
          property="og:description"
          content="Halo, saya Bima. saya seorang animator, 3d modeling dan Full stack development. bagaimana saya dapat berkontribusi dengan anda?"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bf1328a2-cee6-443f-bd21-0ba3b0b34318/2ff00303-1ed2-4ec4-9e9c-1571882f861b?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <div className="home-header">
        <div className="home-heading">
          <div id="notifcation" className="home-notification">
            <Link to="/">
              <Announcement
                rootClassName="announcement-root-class-name"
                className="home-component"
              ></Announcement>
            </Link>
          </div>
        </div>
      </div>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <div className="home-hero">
        <MenuInteraktif
          Title="3D Animaton"
          Deskripsi="Sejak 2018"
          rootClassName="menu-interaktif-root-class-name1"
        ></MenuInteraktif>
        <MenuInteraktif
          Title="Full Stack Development"
          Deskripsi="Sejak 2021"
          rootClassName="menu-interaktif-root-class-name"
        ></MenuInteraktif>
        <div className="home-content">
          <div className="home-container01">
            <h1 data-aos="zoom-in-down" className="home-text">
              Halo, Saya 
            </h1>
            <h1 data-aos="zoom-in-down" className="home-text01">
              Bima
            </h1>
          </div>
          <span data-aos="zoom-in-down" className="H4-16px">
            <span className="home-text02">
              Saya seorang UI/UX Design &amp; Web Development menguasai dan
              mendalami user experience, UX researcher dan UX writer.
            </span>
            <br></br>
          </span>
          <div className="home-hero-buttons">
            <Link to="/portofolio" className="home-navlink1">
              <div
                id="Lihatportofolio"
                data-aos="zoom-in-down"
                className="home-ios-btn"
              >
                <span className="home-caption1">Lihat Portofolio</span>
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM341.333 554.667h238.336l-97.835 97.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l170.667-170.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-170.667-170.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l97.835 97.835h-238.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <img
          alt="Load"
          src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/load-bima.svg?updatedAt=1696319311873"
          className="home-image"
        />
      </div>
      <div className="home-video">
        <div data-aos="zoom-in-up" className="home-content1">
          <div className="home-header1">
            <h2 className="home-text04">Project</h2>
            <div className="home-container02"></div>
          </div>
          <div data-aos="zoom-in-down" className="home-container03">
            <div className="home-stat">
              <span className="home-caption2">Null</span>
              <span className="home-description">Web Project Team</span>
            </div>
            <div className="home-stat1">
              <span className="home-caption3">Null</span>
              <span className="home-description1">
                Project 3D Animation
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="home-stat2">
              <span className="home-caption4">19</span>
              <span className="home-description2">Process Of Working</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-sections">
        <div className="home-section">
          <div data-aos="zoom-in-up" className="home-image1"></div>
          <div className="home-content2">
            <h2 data-aos="zoom-in-down" className="home-text05">
              Bagaimana Saya Hidup di Era Digital?
            </h2>
            <Highlight
              Title="Animasi 3D"
              Description="Pembuatan animasi Film 3D mencakup semua langkah dalam alur animasi dari scripting untuk rendering dan pengomposisian."
            ></Highlight>
            <Highlight
              Title="Virtual &amp; Augmented Realitas"
              Description="Membuat benda-benda benda menjadi hidup? Anda dapat membuatnya dengan Augmented Realitas, itu sangat bagus untuk yang baru fitur dalam pembelajaran."
            ></Highlight>
            <Highlight
              Title="Pengembang Game / Tur Virtual"
              Description="Buat dunia virtual kustom Anda sendiri. Sekarang tren Metaverse sedang bergejolak. Kami membuat beberapa tur virtual untuk beberapa acara seperti permainan."
            ></Highlight>
            <Highlight
              Title="Desain Grafis 3D"
              Description="Kami juga menerima yang kecil proyek untuk membuat model 3D objek apa pun untuk kebutuhan UI Anda atau bumper logo."
            ></Highlight>
          </div>
        </div>
        <div className="home-section1">
          <div data-aos="zoom-in-down" className="home-content3">
            <div className="home-heading1">
              <h2 className="home-text06">Creative +</h2>
            </div>
            <div className="home-content4">
              <div className="home-points">
                <Point text="Web Development"></Point>
                <Point text="Animation 3D"></Point>
                <Point text="Modeling 3D Artis"></Point>
                <Point text="Design Graphic"></Point>
              </div>
            </div>
            <div className="home-ios-btn1">
              <span className="home-caption5">Lihat Portofolio</span>
              <svg viewBox="0 0 1024 1024" className="home-icon2">
                <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM341.333 554.667h238.336l-97.835 97.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l170.667-170.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-170.667-170.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l97.835 97.835h-238.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div className="home-container04">
            <div id="1" className="home-container05">
              <img
                alt="pf"
                src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Portofolio/serverbima-portofolio-WilkerLKS.png?updatedAt=1696243183436"
                loading="lazy"
                className="home-image2"
              />
              <div className="home-highlight">
                <span className="home-text07">Wilker LKS - 2020</span>
                <span className="home-text08">
                  Berkesempatan mengikuti dan sekaligus koordinator di acara
                  Wilker 5 Bidang Aimasi 3D dan
                </span>
                <Link to="/portofolio" className="home-navlink2">
                  <div className="home-button">
                    <span className="home-text09">Selengkapnya</span>
                    <span className="home-text10">-&gt;</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="home-container06">
              <img
                alt="pf"
                src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Portofolio/serverbima-myskill-advanceprogramer.jpg?updatedAt=1696242909133"
                loading="lazy"
                className="home-image3"
              />
              <div className="home-highlight1">
                <span className="home-text11">Advance Beginner Programmer</span>
                <span className="home-text12">
                  Saya belajar pemrograman python sejak 2013, dan melanjutkan
                  beberapa pemrograman
                </span>
                <Link to="/portofolio" className="home-navlink3">
                  <div className="home-button1">
                    <span className="home-text13">Selengkapnya</span>
                    <span className="home-text14">-&gt;</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="home-container07">
              <img
                alt="pf"
                src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Portofolio/serverbima-portofolio-helofest.jpg?updatedAt=1696242919461"
                loading="lazy"
                className="home-image4"
              />
              <div className="home-highlight2">
                <span className="home-text15">Helofest - 2020</span>
                <span className="home-text16">
                  Living leaf Studio menjadi penyalur film terpendek terbaik
                  tingkat Nasional yang di selenggarakan oleh Helofest, dengan
                  tema
                </span>
                <Link to="/portofolio" className="home-navlink4">
                  <div className="home-button2">
                    <span className="home-text17">Selengkapnya</span>
                    <span className="home-text18">-&gt;</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="home-container08">
              <img
                alt="pf"
                src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Portofolio/serverbima-portofolio-metanesia.png?updatedAt=1696242914438"
                loading="lazy"
                className="home-image5"
              />
              <div className="home-highlight3">
                <span className="home-text19">Metanesia - 2022</span>
                <span className="home-text20">
                  Ikut serta terlibat dalam pengembangan Metanesia verse milik
                  PT. Telkom Indonesia serta 24 peserta lainnya. .Ikut serta
                  pembuatan project masjid
                </span>
                <div className="home-button3">
                  <span className="home-text21">Selengkapnya</span>
                  <span className="home-text22">-&gt;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner-container">
        <div data-aos="flip-right" className="home-banner">
          <div className="home-overlay">
            <div className="home-container09">
              <span className="home-text23">
                <span>Mulai Kerjakan</span>
                <br></br>
                <span>Proyek Digital Mu</span>
                <br></br>
              </span>
              <a
                href="https://infinitex.my.id/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <div className="home-ios-btn2">
                  <span className="home-caption6">Mulai</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon4">
                    <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM341.333 554.667h238.336l-97.835 97.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l170.667-170.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-170.667-170.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l97.835 97.835h-238.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </a>
            </div>
            <img
              alt="Austronut"
              src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Portofolio/astronot%20(1).gif?updatedAt=1696297502089"
              loading="lazy"
              className="home-image6"
            />
          </div>
        </div>
      </div>
      <div className="home-features">
        <div data-aos="zoom-in-down" className="home-header2">
          <div className="home-tag">
            <span className="home-text28">Skill Software Multi Tasking</span>
          </div>
          <div className="home-heading2">
            <h2 className="home-text29">Software Support</h2>
            <span className="home-text30 H4-16px">
              Software yang saya kuasai
            </span>
          </div>
        </div>
        <div className="home-feature-list">
          <Feature
            Tag="⭐⭐⭐⭐⭐"
            Star1="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star2="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star3="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star4="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star5="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star%20(1).png?updatedAt=1696306408473"
            Title="Adobe Premiere Pro"
            Thumbnail="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/premiere-pro.png?updatedAt=1696300464180"
            image_src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            image_src1="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            image_src2="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            image_src3="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            image_src4="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Description="Mampu mengoprasikan Adobe Premier Pro Editing Video, untuk keperluan konten promosi dan film."
          ></Feature>
          <Feature
            Star1="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star2="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star3="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star4="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star5="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Title="Photoshop"
            Thumbnail="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/photoshop.png?updatedAt=1696300464135"
            Description="Mampu mengoprasikan Adobe  Photoshop editing foto, untuk keperluan konten promosi digital dan flayer."
          ></Feature>
          <Feature
            Star1="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star2="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star3="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star4="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star5="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star%20(1).png?updatedAt=1696306408473"
            Title="After Effect"
            Thumbnail="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/after-effects.png?updatedAt=1696300459647"
            Description="Mampu mengoprasikan aplikasi editing dengan Adobe After Effect. untuk pembuatan animasi produk iklan."
          ></Feature>
          <Feature
            Star1="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star2="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star3="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star4="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star5="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Title="Adobe Ilustrator"
            Thumbnail="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/illustrator.png?updatedAt=1696300460092"
            Description="Dapat menjalankan aplikasi Adobe Ilustrator untuk  kebutuhan industri kreatif"
          ></Feature>
          <Feature
            Star1="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star2="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star3="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star4="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star5="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Title="Figma"
            Thumbnail="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/figma.png?updatedAt=1696300459636"
            Description="Dapat mengoprasikan apliikasi front end Development dengan baik."
          ></Feature>
          <Feature
            Star1="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star2="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star3="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star4="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star5="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Title="Spark AR"
            Thumbnail="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/SparkAR_Symbol_01_FullColor_4FUBNf2.webp?updatedAt=1696300460234"
            Description="Mampu menjalankan aplikasi kreatif dari Meta, untuk pembuatan filter dari segala developer"
          ></Feature>
          <Feature
            Star1="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star2="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star3="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star4="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star5="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Title="3D Blender"
            Thumbnail="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/pngwing.com.png?updatedAt=1696300459998"
            Description="Mampu menjalankan project animasi 3D dengan team."
          ></Feature>
          <Feature
            Star1="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star2="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star3="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star4="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Star5="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/star.png?updatedAt=1696306408078"
            Title="Html 5"
            Thumbnail="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/html.png?updatedAt=1696300459380"
            Description="Mendalami dan mampu menerapkan skill development untuk kemajuan dan perkembangan di bidang teknologi."
          ></Feature>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-content5">
          <div data-aos="zoom-in-down" className="home-header3">
            <div className="home-tag1">
              <span className="home-text31">
                <span>QnA</span>
                <br></br>
              </span>
            </div>
            <div className="home-heading3">
              <h2 className="home-text34">Tanya Jawab</h2>
            </div>
          </div>
          <div className="home-rows">
            <div className="home-column">
              <div data-aos="zoom-in-down" className="Question">
                <span className="home-title">Boleh gabung nggak?</span>
                <span className="home-description3">
                  Boleh, Kirim aja email, kenalan, sertain portofolio, nggak
                  perlu formal – formal, nanti kita hubungi biar bisa nongkrong
                  bareng kalo nggak pandemi ya.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div data-aos="zoom-in-down" className="Question">
                <span className="home-title1">
                  Saya Bisa Dapet Gaji Nggak Disini?
                </span>
                <span className="home-description4">
                  <span>
                    Gaji by project, Iya dapet. Jadi usahain pertajam skill
                    terus ya.
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
            <div className="home-column1">
              <div data-aos="zoom-in-down" className="home-question2 Question">
                <span className="home-title2">Kegiatannya Apa Aja?</span>
                <span className="home-description5">
                  Kita bikin film 3D, challenge, kelas desain, ikutan event dll.
                  yang semuanya nggak bakalan jauh – jauh dari dunia multimedia.
                </span>
              </div>
              <div data-aos="zoom-in-down" className="home-question3 Question">
                <span className="home-title3">Gimana kalo ada proyek?</span>
                <span className="home-description6">
                  Nanti kita bakalan diskusi di grup siapa siapa aja yang
                  bakalan handle di suatu project. Tentu saja menurut kapasitas
                  masing – masing personel, beserta bagi hasilnya.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
