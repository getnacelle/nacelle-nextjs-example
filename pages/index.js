import $nacelle from 'services/nacelle';
import React from 'react';
import { Sections, Layout } from 'components';

export default function Home({ page, space }) {
  return (
    <Layout space={space}>
      <div>
        <Sections sections={page.sections} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const page = await $nacelle.data.page({ handle: 'homepage' });
    const space = await $nacelle.data.space();

    return {
      props: { page, space }
    };
  } catch (err) {
    console.error(`Error fetching data on homepage:\n${err}`);
  }
}
