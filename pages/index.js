import $nacelle from 'services/nacelle';
import React from 'react';
import styles from '../styles/Home.module.css';
import { Sections } from 'components'

const circleStyle = {
  width: 100,
  height: 100,
  borderRadius: '50%',
  backgroundColor: 'darkorange'
};

export default function Home({ page }) {
  return (
    <div className={styles.container}>
      <div css={circleStyle} />
      <Sections sections={page.sections} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const page = await $nacelle.data.page({ handle: 'homepage' });
    return {
      props: { page }
    };
  } catch (err) {
    console.error(`Error fetching data on homepage:\n${err}`);
  }
}
