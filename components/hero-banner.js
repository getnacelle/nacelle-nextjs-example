import React from 'react';

const heroStyles = {
  block: {
    display: 'grid',
    placeItems: 'center',
    marginBottom: '-0.33em'
  },
  image: {
    width: '100vw',
    objectFit: 'fill'
  },
  title: (color) => ({
    position: 'absolute',
    color: color,
    fontSize: '4em',
    textShadow: '1px 2px darkslategray'
  })
};

const HeroBanner = ({ fields, textColor }) => {
  const image = fields.featuredMedia.fields;
  return (
    <div css={heroStyles.block}>
      <picture>
        <img src={image.file.url} css={heroStyles.image} />
      </picture>
      <h1 css={heroStyles.title(textColor || '#222')}>{fields.title}</h1>
    </div>
  );
};

export default HeroBanner;
