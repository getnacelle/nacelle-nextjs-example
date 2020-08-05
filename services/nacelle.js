import NacelleClient from '@nacelle/client-js-sdk';

const defaultSettings = {
  nacelleEndpoint: 'https://hailfrequency.com/v2/graphql',
  id: 'rude-parrot-iBiKZQDPOa',
  token: '8638f8ca-4934-436e-80bd-851a710abc04',
  locale: 'en-us'
}

const settingsGraphQL = {
  ...defaultSettings,
  useStatic: false
};

const settingsJSON = {
  ...defaultSettings,
  staticBasePath: 'https://nacelle-demo-store-data.s3.amazonaws.com/'
};

const clientGraphQL = new NacelleClient(settingsGraphQL);
const clientJSON = new NacelleClient(settingsJSON);

const nacelleClient = {
  ...clientJSON,
  data: {
    space: params => clientJSON.data.space(params),
    product: params => clientJSON.data.product(params),
    products: params => clientJSON.data.products(params),
    allProducts: params => clientJSON.data.allProducts(params),
    collection: params => clientJSON.data.collection(params),
    collectionPage: params => clientJSON.data.collectionPage(params),
    allCollections: params => clientGraphQL.data.allCollections(params),
    content: params => clientJSON.data.content(params),
    allContent: params => clientGraphQL.data.allContent(params),
    page: params => clientJSON.data.page(params),
    pages: params => clientJSON.data.pages(params),
    article: params => clientJSON.data.article(params),
    articles: params => clientJSON.data.articles(params),
    blog: params => clientJSON.data.blog(params),
    blogPage: params => clientJSON.data.blogPage(params)
  }
}

export default nacelleClient;
