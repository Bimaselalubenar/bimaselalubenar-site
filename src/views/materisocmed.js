import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ProdukMateri from '../components/produk-materi'
import Popmenu from '../components/popmenu'
import ChatBima from '../components/chat-bima'
import './materisocmed.css'

const Materisocmed = (props) => {
  return (
    <div className="materisocmed-container">
      <Helmet>
        <title>Materi socmed minggu ini</title>
        <meta
          name="description"
          content="Jadwal dan materi socmed terbaru 😎"
        />
        <meta property="og:title" content="Materi socmed minggu ini" />
        <meta
          property="og:description"
          content="Wajib posting di semua social media, Instagram, facebook, facebook page, marketplace fb &amp; status WA"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bf1328a2-cee6-443f-bd21-0ba3b0b34318/14da9d91-0666-4f1b-a038-f162ff8e7233?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <div className="materisocmed-container01">
        <div className="materisocmed-container02">
          <span className="materisocmed-text">
            <span>
              Materi sudah di perbarui per tanggal
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="materisocmed-text02">03/01/2024 | 12.42 </span>
          </span>
        </div>
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="false"
          data-pagination="true"
          data-autoplay-delay="2000"
          data-reverse-direction="true"
          className="materisocmed-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="materisocmed-slider-slide swiper-slide"
            >
              <img
                alt="image"
                src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Ads/rule.png?updatedAt=1704413157077"
                className="materisocmed-image"
              />
            </div>
            <div
              data-thq="slider-slide"
              className="materisocmed-slider-slide1 swiper-slide"
            >
              <img
                alt="image"
                src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Ads/Rule2.png?updatedAt=1704413157183"
                className="materisocmed-image01"
              />
              <a
                href="https://drive.google.com/drive/folders/1YB6mGAa4GGgUbMD3YfyYgoua1SgAY0yq?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="materisocmed-link"
              >
                <div id="minggu1" className="materisocmed-button">
                  <span className="materisocmed-text03">Isi report</span>
                </div>
              </a>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="materisocmed-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="materisocmed-slider-button-prev swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="materisocmed-slider-button-next swiper-button-next"
          ></div>
        </div>
        <div id="H1" className="materisocmed-container03">
          <h1 className="materisocmed-text04">Materi H1 (Penjualan)</h1>
          <div className="materisocmed-container04">
            <div className="materisocmed-container05">
              <div className="materisocmed-week1">
                <img
                  alt="Week1"
                  src="https://img.icons8.com/fluency/96/calendar-plus.png"
                  loading="lazy"
                  className="materisocmed-image02"
                />
                <div className="materisocmed-container06">
                  <h2 className="materisocmed-text05">Minggu 1</h2>
                  <span className="materisocmed-text06">
                    Wajib Posting Instagram, Facebook, Marketplace Facebook
                    &amp; status WA
                  </span>
                  <a
                    href="https://bit.ly/materisocmedweek1"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="materisocmed-link01"
                  >
                    <div id="minggu1" className="materisocmed-button01">
                      <span className="materisocmed-text07 H5-12px">
                        Download materi
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="materisocmed-week2">
                <img
                  alt="Week1"
                  src="https://img.icons8.com/fluency/96/calendar-plus.png"
                  loading="lazy"
                  className="materisocmed-image03"
                />
                <div className="materisocmed-container07">
                  <h2 className="materisocmed-text08">Minggu 2</h2>
                  <span className="materisocmed-text09">
                    Wajib Posting Instagram, Facebook, Marketplace Facebook
                    &amp; status WA
                  </span>
                  <a
                    href="https://bit.ly/materisocmedweek2"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="materisocmed-link02"
                  >
                    <div id="minggu1" className="materisocmed-button02">
                      <span className="materisocmed-text10 H5-12px">
                        Download materi
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="materisocmed-week21">
                <img
                  alt="Week1"
                  src="https://img.icons8.com/fluency/96/calendar-plus.png"
                  loading="lazy"
                  className="materisocmed-image04"
                />
                <div className="materisocmed-container08">
                  <h2 className="materisocmed-text11">Minggu 3</h2>
                  <span className="materisocmed-text12">
                    Wajib Posting Instagram, Facebook, Marketplace Facebook
                    &amp; status WA
                  </span>
                  <a
                    href="https://bit.ly/materisocmedweek3"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="materisocmed-link03"
                  >
                    <div id="minggu1" className="materisocmed-button03">
                      <span className="materisocmed-text13 H5-12px">
                        Download materi
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="materisocmed-week22">
                <img
                  alt="Week1"
                  src="https://img.icons8.com/fluency/96/calendar-plus.png"
                  loading="lazy"
                  className="materisocmed-image05"
                />
                <div className="materisocmed-container09">
                  <h2 className="materisocmed-text14">Minggu 4</h2>
                  <span className="materisocmed-text15">
                    Wajib Posting Instagram, Facebook, Marketplace Facebook
                    &amp; status WA
                  </span>
                  <a
                    href="https://bit.ly/materisocmedweek4"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="materisocmed-link04"
                  >
                    <div id="minggu1" className="materisocmed-button04">
                      <span className="materisocmed-text16 H5-12px">
                        Download materi
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <h1 className="materisocmed-text17">
              Jadwal &amp; Form report sales online
            </h1>
            <div className="materisocmed-container10">
              <div className="materisocmed-week23">
                <img
                  alt="Week1"
                  src="https://img.icons8.com/color/96/terms-and-conditions.png"
                  loading="lazy"
                  className="materisocmed-image06"
                />
                <div className="materisocmed-container11">
                  <h2 className="materisocmed-text18">
                    Jadwal Post Socmed Cabang
                  </h2>
                  <span className="materisocmed-text19">
                    *tidak perlu di laporkan
                  </span>
                  <a
                    href="https://bit.ly/reportsocmedmpmho"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="materisocmed-link05"
                  >
                    <div id="minggu1" className="materisocmed-button05">
                      <span className="materisocmed-text20 H5-12px">
                        Lihat Jadwal
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="materisocmed-week24">
                <img
                  alt="Week1"
                  src="https://img.icons8.com/color/96/terms-and-conditions.png"
                  loading="lazy"
                  className="materisocmed-image07"
                />
                <div className="materisocmed-container12">
                  <h2 className="materisocmed-text21">
                    Form Report Sales Online
                  </h2>
                  <span className="materisocmed-text22">*Langsung di isi</span>
                  <a
                    href="https://drive.google.com/drive/folders/1YB6mGAa4GGgUbMD3YfyYgoua1SgAY0yq?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="materisocmed-link06"
                  >
                    <div id="minggu1" className="materisocmed-button06">
                      <span className="materisocmed-text23 H5-12px">
                        Isi report
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="materisocmed-container13">
          <h2 className="materisocmed-text24">Share ke teman kamu :</h2>
          <a
            href="https://api.whatsapp.com/send?text=https://bimaselalubenar.my.id/materisocmed"
            target="_blank"
            rel="noreferrer noopener"
            className="materisocmed-link07"
          >
            <svg
              id="share"
              viewBox="0 0 1024 1024"
              className="materisocmed-icon"
            >
              <path d="M691.797 772.181c1.067-1.408 2.048-2.859 2.987-4.437 0.853-1.493 1.621-3.029 2.304-4.565 3.115-4.608 6.656-8.917 10.581-12.843 15.488-15.488 36.736-25.003 60.331-25.003s44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331c0-13.867 3.285-26.923 9.131-38.485zM695.509 258.389c-0.384-0.725-0.768-1.451-1.195-2.176s-0.853-1.451-1.323-2.133c-6.571-12.075-10.325-25.941-10.325-40.747 0-23.595 9.515-44.843 25.003-60.331s36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003c-4.608-4.608-8.704-9.728-12.16-15.275zM328.491 466.944c0.384 0.725 0.768 1.451 1.195 2.176s0.853 1.451 1.323 2.133c6.571 12.075 10.325 25.941 10.325 40.747s-3.755 28.672-10.368 40.789c-0.469 0.683-0.896 1.408-1.323 2.133s-0.811 1.408-1.152 2.133c-3.456 5.547-7.552 10.667-12.16 15.275-15.488 15.488-36.736 25.003-60.331 25.003s-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003c4.608 4.608 8.704 9.728 12.16 15.275zM603.733 259.755l-226.475 132.139c-0.171-0.213-0.384-0.384-0.597-0.597-30.805-30.805-73.557-49.963-120.661-49.963s-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005c0.213-0.213 0.384-0.384 0.597-0.597l226.517 132.011c-4.181 14.805-6.443 30.464-6.443 46.592 0 47.104 19.157 89.856 50.005 120.661s73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005c-0.128 0.128-0.299 0.299-0.427 0.427l-226.645-132.053c4.181-14.763 6.4-30.293 6.4-46.379s-2.219-31.659-6.4-46.421l226.475-132.181c0.171 0.213 0.384 0.384 0.597 0.597 30.805 30.848 73.557 50.005 120.661 50.005s89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661c0 16.085 2.219 31.659 6.4 46.421z"></path>
            </svg>
          </a>
        </div>
        <h2 className="materisocmed-text25">SpotLight 🎉</h2>
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="false"
          data-pagination="true"
          data-autoplay-delay="2000"
          data-reverse-direction="true"
          className="materisocmed-slider1 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="materisocmed-slider-slide2 swiper-slide"
            >
              <img
                alt="image"
                src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Ads/RuleGMB1.png?updatedAt=1704461175255"
                loading="lazy"
                className="materisocmed-image08"
              />
            </div>
            <div
              data-thq="slider-slide"
              className="materisocmed-slider-slide3 swiper-slide"
            >
              <img
                alt="image"
                src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Ads/RuleGMB2.png?updatedAt=1704461175204"
                loading="lazy"
                className="materisocmed-image09"
              />
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="materisocmed-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="materisocmed-slider-button-prev1 swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="materisocmed-slider-button-next1 swiper-button-next"
          ></div>
        </div>
        <div id="H23" className="materisocmed-container14">
          <h1 className="materisocmed-text26">Materi H23 (Bengkel)</h1>
          <div className="materisocmed-container15">
            <ProdukMateri
              NamaProduk="Promo AHASS Happy Hour"
              GambarMateri="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Ads/Promo%20Happy%20HOUR%20(1).png?updatedAt=1696516834240"
              rootClassName="produk-materi-root-class-name1"
              link_container="https://photos.app.goo.gl/PBzp9vUiBvGcam159"
            ></ProdukMateri>
            <ProdukMateri
              NamaProduk="PROMO RO"
              GambarMateri="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Ads/Promo%20RO%20Update%20(1).png?updatedAt=1696516834441"
              rootClassName="produk-materi-root-class-name4"
              link_container="https://photos.app.goo.gl/PBzp9vUiBvGcam159"
            ></ProdukMateri>
            <ProdukMateri
              NamaProduk="BOOKING SERVIS SAT-SET"
              GambarMateri="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Ads/Boking%20servis%20sat%20set%20dengan%20Brompit.jpg?updatedAt=1697166887567"
              rootClassName="produk-materi-root-class-name3"
              link_container="https://photos.app.goo.gl/PBzp9vUiBvGcam159"
            ></ProdukMateri>
            <ProdukMateri
              NamaProduk="AHASS Honda Service Protection"
              GambarMateri="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Materi%20H2/AHASS%20HONDA%20SERVICE%20PROTECTION.png?updatedAt=1704256539330"
              rootClassName="produk-materi-root-class-name"
              link_container="https://bimaselalubenar.my.id/ahass-honda-service-protection"
            ></ProdukMateri>
          </div>
        </div>
        <div id="tutorial" className="materisocmed-container16">
          <div className="materisocmed-container17">
            <h1 className="materisocmed-text27">Tutorial</h1>
          </div>
          <div className="materisocmed-container18">
            <div className="materisocmed-container19">
              <div className="materisocmed-container20"></div>
              <div className="materisocmed-container21">
                <span>
                  <span>
                    Cara set iklan dari budget
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="materisocmed-text30">50 Ribu</span>
                </span>
                <Link
                  to="/pengaturan-iklan-facebook-mulai-50-ribu-rupiah"
                  className="materisocmed-navlink"
                >
                  <div className="materisocmed-container22">
                    <span className="materisocmed-text31">Lihat tutorial</span>
                    <svg viewBox="0 0 1024 1024" className="materisocmed-icon2">
                      <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div className="materisocmed-container23">
              <div className="materisocmed-container24"></div>
              <div className="materisocmed-container25">
                <span>
                  <span>
                    Cara cetak bukti
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="materisocmed-text34">TOP UP</span>
                  <span> Iklan FB Ads</span>
                </span>
                <Link
                  to="/cetak-bukti-pembayaran-fb-ads"
                  className="materisocmed-navlink1"
                >
                  <div className="materisocmed-container26">
                    <span className="materisocmed-text36">Lihat tutorial</span>
                    <svg viewBox="0 0 1024 1024" className="materisocmed-icon4">
                      <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            data-thq="slider"
            data-navigation="false"
            data-pagination="true"
            className="materisocmed-slider2 swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="materisocmed-slider-slide4 swiper-slide"
              >
                <video
                  src="https://youtu.be/tpYYIC3j0NQ?t=58"
                  preload="auto"
                  controls
                  playsInline
                  className="materisocmed-video"
                ></video>
                <span className="materisocmed-text37">
                  Pakai Digital Marketing Sudah Wajib, Pahami Komponennya -
                  ANALISIS #1
                </span>
                <a
                  href="https://youtu.be/tpYYIC3j0NQ?si=XfkoMAFUF1JZmxUN"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="materisocmed-link08"
                >
                  <div id="minggu1" className="materisocmed-button07">
                    <span className="materisocmed-text38">Tonton Video</span>
                  </div>
                </a>
              </div>
              <div
                data-thq="slider-slide"
                className="materisocmed-slider-slide5 swiper-slide"
              >
                <video
                  src="https://www.youtube.com/watch?v=D38EccoU-JY&amp;list=RDCMUC4OPXGhLI6seUqeYOaUABaw&amp;index=8"
                  preload="metadata"
                  controls
                  playsInline
                  className="materisocmed-video1"
                ></video>
                <span className="materisocmed-text39">
                  Bedanya: Branding, Marketing, Promotion, Sales - Market Think
                </span>
                <a
                  href="https://youtu.be/D38EccoU-JY?feature=shared"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="materisocmed-link09"
                >
                  <div id="minggu1" className="materisocmed-button08">
                    <span className="materisocmed-text40">Tonton Video</span>
                  </div>
                </a>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="materisocmed-slider-pagination2 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="materisocmed-slider-button-prev2 swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="materisocmed-slider-button-next2 swiper-button-next"
            ></div>
          </div>
        </div>
        <form
          id="Masukan"
          name="Formmasukan"
          action="sukses-kirim"
          method="POST"
          autoComplete="off"
          data-netlify="true"
          className="materisocmed-form"
        >
          <h1 className="materisocmed-text41">Masukan dan saran 🎉</h1>
          <div className="materisocmed-container27">
            <input
              type="text"
              name="Nama"
              required
              placeholder="Nama"
              className="materisocmed-textinput input H5-12px"
            />
            <input
              type="text"
              name="Cabang"
              required
              placeholder="Cabang"
              className="materisocmed-textinput1 input H5-12px"
            />
          </div>
          <textarea
            placeholder="Masukan"
            className="materisocmed-textarea input H5-12px"
          ></textarea>
          <button type="submit" className="materisocmed-button09">
            Kirim
          </button>
        </form>
        <Popmenu rootClassName="popmenu-root-class-name"></Popmenu>
        <ChatBima rootClassName="chat-bima-root-class-name"></ChatBima>
      </div>
      <div className="materisocmed-container28">
        <img
          alt="image"
          src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/Search%20for%20Interface.gif?updatedAt=1705061539489"
          className="materisocmed-image10"
        />
        <div className="materisocmed-container29">
          <span>Perbaikan..</span>
          <span>
            <span>
              Hingga Sabtu
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="materisocmed-text45">08:31</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Materisocmed
