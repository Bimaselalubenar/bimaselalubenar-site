import React from 'react'

import PropTypes from 'prop-types'

import './produk-swr.css'

const ProdukSwr = (props) => {
  return (
    <div className={`produk-swr-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.GambarProduk}
        loading="lazy"
        className="produk-swr-image"
      />
      <div className="produk-swr-container1">
        <div className="produk-swr-container2">
          <span className="produk-swr-text">
            <span className="">ADOBE</span>
            <br className=""></br>
          </span>
          <span className="produk-swr-text03">{props.text1}</span>
        </div>
        <span className="produk-swr-text04">{props.NamaProduk}</span>
        <div className="produk-swr-container3">
          <span className="produk-swr-text05">{props.text2}</span>
          <span id="HargaFix" className="produk-swr-text06">
            {props.HargaFix}
          </span>
        </div>
        <div className="produk-swr-container4">
          <div className="produk-swr-container5">
            <svg viewBox="0 0 1024 1024" className="produk-swr-icon">
              <path
                d="M896 472.747v39.253c-0.043 106.027-43.051 201.941-112.64 271.445s-165.547 112.384-271.573 112.299-201.984-43.051-271.445-112.64-112.384-165.504-112.341-271.573 43.051-201.941 112.64-271.445 165.547-112.384 271.573-112.341c56.747 0.043 110.336 12.331 155.691 33.067 21.419 9.813 46.763 0.341 56.533-21.077s0.341-46.763-21.077-56.533c-56.619-25.856-122.283-40.747-191.104-40.789-129.579-0.085-246.997 52.437-331.947 137.259s-137.557 202.24-137.643 331.819 52.437 246.997 137.259 331.947 202.197 137.6 331.776 137.643 246.997-52.437 331.947-137.259 137.6-202.197 137.685-331.819v-39.253c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM908.501 140.501l-396.501 396.885-97.835-97.792c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l128 128c16.683 16.683 43.691 16.64 60.373 0l426.667-427.093c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043z"
                className=""
              ></path>
            </svg>
            <span className="produk-swr-text07">{props.text5}</span>
          </div>
          <div className="produk-swr-container6">
            <svg viewBox="0 0 1024 1024" className="produk-swr-icon2">
              <path
                d="M896 472.747v39.253c-0.043 106.027-43.051 201.941-112.64 271.445s-165.547 112.384-271.573 112.299-201.984-43.051-271.445-112.64-112.384-165.504-112.341-271.573 43.051-201.941 112.64-271.445 165.547-112.384 271.573-112.341c56.747 0.043 110.336 12.331 155.691 33.067 21.419 9.813 46.763 0.341 56.533-21.077s0.341-46.763-21.077-56.533c-56.619-25.856-122.283-40.747-191.104-40.789-129.579-0.085-246.997 52.437-331.947 137.259s-137.557 202.24-137.643 331.819 52.437 246.997 137.259 331.947 202.197 137.6 331.776 137.643 246.997-52.437 331.947-137.259 137.6-202.197 137.685-331.819v-39.253c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM908.501 140.501l-396.501 396.885-97.835-97.792c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l128 128c16.683 16.683 43.691 16.64 60.373 0l426.667-427.093c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043z"
                className=""
              ></path>
            </svg>
            <span className="produk-swr-text08">{props.text6}</span>
          </div>
          <div className="produk-swr-container7">
            <svg viewBox="0 0 1024 1024" className="produk-swr-icon4">
              <path
                d="M896 472.747v39.253c-0.043 106.027-43.051 201.941-112.64 271.445s-165.547 112.384-271.573 112.299-201.984-43.051-271.445-112.64-112.384-165.504-112.341-271.573 43.051-201.941 112.64-271.445 165.547-112.384 271.573-112.341c56.747 0.043 110.336 12.331 155.691 33.067 21.419 9.813 46.763 0.341 56.533-21.077s0.341-46.763-21.077-56.533c-56.619-25.856-122.283-40.747-191.104-40.789-129.579-0.085-246.997 52.437-331.947 137.259s-137.557 202.24-137.643 331.819 52.437 246.997 137.259 331.947 202.197 137.6 331.776 137.643 246.997-52.437 331.947-137.259 137.6-202.197 137.685-331.819v-39.253c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM908.501 140.501l-396.501 396.885-97.835-97.792c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l128 128c16.683 16.683 43.691 16.64 60.373 0l426.667-427.093c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043z"
                className=""
              ></path>
            </svg>
            <span className="produk-swr-text09">{props.text7}</span>
          </div>
        </div>
        <a
          href={props.LinkProduk}
          target="_blank"
          rel="noreferrer noopener"
          className="produk-swr-link"
        >
          <div className="produk-swr-container8">
            <span className="produk-swr-text10">{props.text8}</span>
            <svg viewBox="0 0 1024 1024" className="produk-swr-icon6">
              <path
                d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 2-6 20l-152 276q-24 44-74 44h-318l-38 70-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26z"
                className=""
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}

ProdukSwr.defaultProps = {
  text8: 'Beli Sekarang',
  NamaProduk: 'Name Software',
  GambarProduk:
    'https://media.mayar.id/images/f36a67cd-2ba9-446a-a6d7-e1a231f84e3e.jpeg',
  text7: 'Instalasi dan dukungan penuh',
  HargaFix: 'Rp. 200.000,-',
  text6: 'Garansi 100%',
  LinkProduk: 'https://beli',
  image_alt: 'Fitur',
  text1: 'Stock Unlimited',
  text2: 'Harga ',
  rootClassName: '',
  text5: 'Bebas Virus',
}

ProdukSwr.propTypes = {
  text8: PropTypes.string,
  NamaProduk: PropTypes.string,
  GambarProduk: PropTypes.string,
  text7: PropTypes.string,
  HargaFix: PropTypes.string,
  text6: PropTypes.string,
  LinkProduk: PropTypes.string,
  image_alt: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text5: PropTypes.string,
}

export default ProdukSwr
