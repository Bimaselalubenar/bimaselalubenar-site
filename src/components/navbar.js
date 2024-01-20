import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import Links from './links'
import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className={`navbar-navbar ${props.rootClassName} `}>
      <div className="navbar-desktop">
        <div className="navbar-main">
          <Link to="/" className="navbar-navlink">
            <img
              alt={props.image_alt1}
              src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/serverbima-icon-bima2.png?updatedAt=1696243150268"
              className="navbar-image"
            />
          </Link>
          <div className="navbar-links">
            <Link to="/" className="navbar-link">
              {props.Link_1}
            </Link>
            <Link to="/portofolio" className="navbar-link1">
              {props.Link_2}
            </Link>
            <Link to="/sukses-kirim" className="navbar-link2">
              {props.Link_4}
            </Link>
            <div
              data-thq="thq-dropdown"
              className="navbar-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-dropdown-toggle"
              >
                <span className="navbar-text">Lainnya</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="navbar-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="navbar-icon">
                    <path d="M426 726v-428l214 214z" className=""></path>
                  </svg>
                </div>
              </div>
              <ul data-thq="thq-dropdown-list" className="navbar-dropdown-list">
                <li
                  data-thq="thq-dropdown"
                  className="navbar-dropdown list-item"
                >
                  <a
                    href="https://edusupe.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className=""
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="navbar-dropdown-toggle1"
                    >
                      <span className="navbar-text1">Edusupe</span>
                    </div>
                  </a>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navbar-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-dropdown-toggle2"
                  >
                    <span className="navbar-text2">Tips &amp; Trick</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navbar-dropdown2 list-item"
                >
                  <a
                    href="https://infinitex.my.id/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className=""
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="navbar-dropdown-toggle3"
                    >
                      <span className="navbar-text3">Infinitex</span>
                    </div>
                  </a>
                  <Link to="/software-store" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="navbar-dropdown-toggle4"
                    >
                      <span className="navbar-text4">Software Store</span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navbar-dropdown3 list-item"
                >
                  <Link to="/materisocmed" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="navbar-dropdown-toggle5"
                    >
                      <span className="navbar-text5">Materi Socmed HO</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-quick-actions">
          <img
            id="open-mobile-menu"
            alt={props.pastedImage_alt}
            src={props.pastedImage_src}
            className="navbar-hamburger-menu"
          />
        </div>
      </div>
      <div id="mobile-menu" className="navbar-mobile">
        <div className="navbar-top">
          <img
            alt={props.image_alt}
            src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/serverbima-icon-bima2.png?updatedAt=1696243150268"
            className="navbar-image1"
          />
          <svg
            id="close-mobile-menu"
            viewBox="0 0 1024 1024"
            className="navbar-icon2"
          >
            <path
              d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
              className=""
            ></path>
          </svg>
        </div>
        <div className="navbar-links1">
          <Links rootClassName="links-root-class-name1" className=""></Links>
        </div>
      </div>
      <div className="">
        <div className="navbar-container1">
          <React.Fragment>
            <React.Fragment>
              {' '}
              <Script>{`
    /*
    Mobile menu - Code Embed
    */

    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu");

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu");
    const openButton = document.querySelector("#open-mobile-menu");

    if (mobileMenu && closeButton && openButton) {
      // On openButton click, set the mobileMenu position left to -100vw
      openButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(0%)";
      });

      // On closeButton click, set the mobileMenu position to 0vw
      closeButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(100%)";
      });
    }
  `}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  Link_3: 'Project',
  link_image: '',
  rootClassName: '',
  Link_4: 'Contact\n',
  image_alt1: 'image',
  Link_1: 'Home',
  image_alt: 'image',
  pastedImage_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4a46e3f6-a2fb-4002-a0ce-bb246bd8698d/191f70d5-9a02-4b3a-a398-d21659aa57d0?org_if_sml=1195',
  Link_2: 'Portofolio',
  pastedImage_alt: 'pastedImage',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
}

Navbar.propTypes = {
  Link_3: PropTypes.string,
  link_image: PropTypes.string,
  rootClassName: PropTypes.string,
  Link_4: PropTypes.string,
  image_alt1: PropTypes.string,
  Link_1: PropTypes.string,
  image_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  Link_2: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Navbar
