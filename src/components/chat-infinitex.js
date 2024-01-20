import React from 'react'

import PropTypes from 'prop-types'

import './chat-infinitex.css'

const ChatInfinitex = (props) => {
  return (
    <div className={`chat-infinitex-container ${props.rootClassName} `}>
      <a
        href="https://api.whatsapp.com/send?phone=6281917304951&amp;text=Saya%20berminat%20melakukan%20pembelian%20app%20software"
        target="_blank"
        rel="noreferrer noopener"
        className="chat-infinitex-link"
      >
        <img
          alt={props.Gambar2}
          src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Icon/Frame%2095.png?updatedAt=1703493006388"
          loading="lazy"
          className="chat-infinitex-image"
        />
      </a>
    </div>
  )
}

ChatInfinitex.defaultProps = {
  rootClassName: '',
  Gambar2: 'image',
}

ChatInfinitex.propTypes = {
  rootClassName: PropTypes.string,
  Gambar2: PropTypes.string,
}

export default ChatInfinitex
