import React from 'react'

const heroStyles = fields => ({
  display: 'grid',
  placeItems: 'center',
  backgroundImage: `url(${fields.featuredMedia.fields.file.url})`,
  height: '70vh',
  marginTop: '2em',
  marginBottom: '6em'
})

const HeroBanner = ({ fields }) => {
  return (
    <div css={heroStyles(fields)}>
      <h1>{fields.title}</h1>
    </div>
  )
}

export default HeroBanner
