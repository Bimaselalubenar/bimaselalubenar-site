import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import BlogPostCard2 from '../components/blog-post-card2'
import Footer from '../components/footer'
import './portofolio.css'

const Portofolio = (props) => {
  return (
    <div className="portofolio-container">
      <Helmet>
        <title>Portofolio - bimaselalubenar</title>
        <meta
          name="description"
          content="Halo! Saya bima, saya seorang web development dan software enginer. ada yang bisa di bantu?"
        />
        <meta property="og:title" content="Portofolio - bimaselalubenar" />
        <meta
          property="og:description"
          content="Halo, saya Bima. saya seorang  3d modeling dan Full stack development. bagaimana saya dapat berkontribusi dengan anda?"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bf1328a2-cee6-443f-bd21-0ba3b0b34318/2718b425-4e04-4c38-a1b3-210d3c77aba4?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <div className="portofolio-banner">
        <div className="portofolio-container1">
          <div className="portofolio-container2">
            <span className="portofolio-text">
              <span>Portofolio Digital</span>
              <br></br>
              <span>Bima</span>
              <br></br>
            </span>
            <a href="#1" className="portofolio-link">
              <div className="portofolio-ios-btn">
                <span className="portofolio-caption">Berikutnya</span>
                <svg viewBox="0 0 1024 1024" className="portofolio-icon">
                  <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM341.333 554.667h238.336l-97.835 97.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l170.667-170.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-170.667-170.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l97.835 97.835h-238.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </a>
          </div>
          <img
            alt="Hello"
            src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Portofolio/Hello.svg?updatedAt=1696766983608"
            loading="lazy"
            data-aos="fade-up"
            className="portofolio-image"
          />
        </div>
      </div>
      <div className="portofolio-container3"></div>
      <div id="1" className="portofolio-blog">
        <span className="portofolio-text5">
          <span>My Skill</span>
          <br></br>
        </span>
        <div className="portofolio-container4">
          <BlogPostCard2
            when="2021"
            label="Programer"
            image_src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Portofolio/serverbima-myskill-advanceprogramer.jpg?updatedAt=1696242909133"
            description="Advance Beginner Programmer"
            profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            description1="Saya belajar pemrograman python sejak 2021, dan melanjutkan beberapa pemrograman lain seperti java, PHP, C# dan dimulai pada tahun 2020 diikuti oleh Node."
            rootClassName="rootClassName3"
          ></BlogPostCard2>
          <BlogPostCard2
            when="2019"
            label="3D Art"
            image_src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/serverbima-myskill-3dmodeler.png?updatedAt=1696242753299"
            description="3D Modeling"
            profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            description1="Saya mempelajari perangkat lunak Blender 3D telah 4 Tahun lamanya, dengan menguasai Blender 80%, Maya 30%, Unity Studio 60%."
            rootClassName="rootClassName"
          ></BlogPostCard2>
          <BlogPostCard2
            when="2018"
            label="3D ART"
            image_src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/serverbima-myskill-3danimation.jpg?updatedAt=1696242751998"
            description="3D Animation &amp; Motion 3D Graphic"
            profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            description1="Mempelajari animasi moving graphic dan mengembangkan skil 3D pada aspek rigging, lighting &amp; 3D asset."
            rootClassName="rootClassName1"
          ></BlogPostCard2>
        </div>
      </div>
      <div id="2" className="portofolio-blog1">
        <span className="portofolio-text8">Portofolio Individu &amp; Tim</span>
        <div className="portofolio-container5">
          <BlogPostCard2
            when="2020"
            label="3d tour"
            image_src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Portofolio/serverbima-portofolio-pekanekonomiunair.jpg?updatedAt=1696242847205"
            description="Pekan Ekonomi UNAIR"
            profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            description1="Di era pandemi ini, sekolah harus dilakukan dari rumah. Itulah yang membuat siswa akan Memiliki kurangnya pengalaman untuk mengenal lebih banyak tentang sekolah mereka berdasarkan tempat. Tur virtual ini akan Bantu mereka untuk membayangkannya sehingga mereka dapat membayangkannya Mereka berada di gedung sekolah yang tepat."
            rootClassName="rootClassName2"
          ></BlogPostCard2>
          <BlogPostCard2
            when="2020"
            label="3d tour"
            image_src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Portofolio/serverbima-portofolio-ITSUKMVirtual.png?updatedAt=1696242842702"
            description="ITS - UKM Virtual"
            profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            description1="Di era pandemi ini, sekolah harus dilakukan dari rumah. Itulah yang membuat siswa akan Memiliki kurangnya pengalaman untuk mengenal lebih banyak tentang sekolah mereka berdasarkan tempat. Tur virtual ini akan Bantu mereka untuk membayangkannya sehingga mereka dapat membayangkannya Mereka berada di gedung sekolah yang tepat."
            rootClassName="rootClassName4"
          ></BlogPostCard2>
          <BlogPostCard2
            when="2018"
            label="nft art"
            image_src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Portofolio/serverbima-portofolio-artisnft.jpg?updatedAt=1696242851992"
            description="Seni 3D NFT Collectible"
            profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            description1="Kami adalah Pengembang NFT. Banyak pesanan klien kepada kami Kami membuat skrip untuk menghasilkan seribu naga. Ini generator, tapi kelihatannya buatan tangan karena generator bekerja pada Blender 3D dengan berbasis Python. Bukan hanya seperti itu. Anda dapat meminta barang langka untuk sifat-sifat, kualitas tinggi dan banyak hal mengagumkan lainnya."
            rootClassName="rootClassName5"
          ></BlogPostCard2>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Portofolio
