import React from 'react';
import { useRouter } from 'next/router';

import * as styles from './side-by-side.styles';

const SideBySide = ({ fields }) => {
  const router = useRouter();
  const textContent = findTextContent(fields.content.content);
  const imageSrc = fields.featuredMedia.fields.file.url;
  const flexDirection = fields.reverseDesktop ? 'row-reverse' : 'row';
  const routeToCtaPage = () => router.push(fields.ctaUrl);

  return (
    <div css={[styles.columnLayout, { flexDirection }]}>
      <section css={styles.column}>
        <img src={imageSrc} css={styles.image} />
      </section>
      <section
        css={[styles.column, { backgroundColor: fields.backgroundColor }]}
      >
        <div css={styles.content}>
          <h3 css={styles.title}>{fields.title}</h3>
          <p css={styles.textContent}>{textContent}</p>
          <button onClick={routeToCtaPage} css={styles.ctaButton}>
            {fields.ctaText}
          </button>
        </div>
      </section>
    </div>
  );
};

function findTextContent(content) {
  return content.reduce((_textValue, contentNode) => {
    if (contentNode.nodeType === 'text') {
      return contentNode.value;
    }

    return findTextContent(contentNode.content);
  }, '');
}

export default SideBySide;
