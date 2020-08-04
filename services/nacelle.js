import NacelleClient from '@nacelle/client-js-sdk';

const settings = {
  id: 'rude-parrot-iBiKZQDPOa',
  token: '8638f8ca-4934-436e-80bd-851a710abc04',
  locale: 'en-us',
  staticBasePath:
    'https://nacelle-demo-sites-git-feature-dash-dash.nacelle.vercel.app/',
  nacelleEndpoint: 'https://hailfrequency.com/v2/graphql'
};

const nacelleClient = new NacelleClient(settings);

export default nacelleClient;
