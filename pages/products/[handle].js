import NacelleClient from '@nacelle/client-js-sdk';
const Product = ({ product }) => {
  return <div>Test</div>;
};

async function getStaticPaths() {
  const settings = {
    id: 'rude-parrot-iBiKZQDPOa',
    token: '8638f8ca-4934-436e-80bd-851a710abc04',
    locale: 'en-us',
    staticBasePath:
      'https://nacelle-demo-sites-git-feature-dash-dash.nacelle.vercel.app/',
    nacelleEndpoint: 'https://hailfrequency.com/v2/graphql'
  };

  const client = new NacelleClient(settings);
  const space = await client.data.space();
  // const product = await client.data.product({ handle: 'tanja-heel-sandals' });
  const product = await client.data.products({
    handles: ['alonso-shoes']
  });

  console.log(product);
}

// async function getStaticProps() {
//   return { props: {} };
// }
