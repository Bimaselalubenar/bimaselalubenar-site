import React from 'react'

import { Helmet } from 'react-helmet'

import Links from '../components/links'
import './set-menu.css'

const SetMenu = (props) => {
  return (
    <div className="set-menu-container">
      <Helmet>
        <title>set-menu - bimaselalubenar</title>
        <meta
          name="description"
          content="Halo! Saya bima, saya seorang web development dan software enginer. ada yang bisa di bantu?"
        />
        <meta property="og:title" content="set-menu - bimaselalubenar" />
        <meta
          property="og:description"
          content="Halo, saya Bima. saya seorang  3d modeling dan Full stack development. bagaimana saya dapat berkontribusi dengan anda?"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bf1328a2-cee6-443f-bd21-0ba3b0b34318/2718b425-4e04-4c38-a1b3-210d3c77aba4?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <div className="set-menu-links">
        <Links rootClassName="links-root-class-name"></Links>
      </div>
    </div>
  )
}

export default SetMenu
