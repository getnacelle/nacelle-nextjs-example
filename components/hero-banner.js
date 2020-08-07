import React from 'react';
import { Image } from 'components';
import * as styles from './hero-banner.styles';

const HeroBanner = ({ fields, textColor }) => {
  const image = fields.featuredMedia.fields;
  return (
    <div css={styles.block}>
      <Image
        src={image.file.url}
        width="1800"
        styles={styles.image}
        format={['webp', 'jpg']}
      />
      <h1 css={styles.title(textColor || '#222')}>{fields.title}</h1>
    </div>
  );
};

export default HeroBanner;
