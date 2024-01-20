import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card2.css'

const BlogPostCard2 = (props) => {
  return (
    <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        data-aos="fade-up"
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-post-card2-image"
      />
      <div data-aos="fade-up" className="blog-post-card2-container">
        <div className="blog-post-card2-container1">
          <span className="blog-post-card2-text">{props.label}</span>
          <span className="blog-post-card2-text1">{props.when}</span>
        </div>
        <span className="blog-post-card2-text2">{props.description}</span>
        <span className="blog-post-card2-text3">{props.description1}</span>
        <div className="blog-post-card2-container2">
          <div className="blog-post-card2-profile">
            <img
              alt="Bima"
              src="https://ik.imagekit.io/3ij6aly19/bankdata-bimaselalubenar/Portofolio/serverbima-profile2.jpg?updatedAt=1696242901859"
              loading="lazy"
              className="blog-post-card2-image1"
            />
            <span className="blog-post-card2-text4">{props.author}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  when: '3 days ago',
  description: 'Judul',
  rootClassName: '',
  label: 'ENTERPRISE',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=400',
  description1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  author: 'Bima Ardian',
  image_alt: 'image',
}

BlogPostCard2.propTypes = {
  when: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  label: PropTypes.string,
  image_src: PropTypes.string,
  description1: PropTypes.string,
  author: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BlogPostCard2
