import NacelleClient from '@nacelle/client-js-sdk';
import NacelleContentfulPreviewConnector from '@nacelle/contentful-preview-connector';

const settings = {
  id: process.env.NACELLE_SPACE_ID,
  token: process.env.NACELLE_GRAPHQL_TOKEN,
  nacelleEndpoint:
    'https://2tmj15n9p1.execute-api.us-east-1.amazonaws.com/beta/graphql',
  useStatic: false
};

const shopifySettings = {
  ...settings,
  locale: 'en-us'
};

const contentfulSettings = {
  ...settings,
  locale: 'en-US'
};

const clientPIM = new NacelleClient(shopifySettings);
const clientCMS = new NacelleClient(contentfulSettings);

const nacelleClient = {
  ...clientPIM,
  data: {
    space: (params) => clientCMS.data.space(params),
    product: (params) => clientPIM.data.product(params),
    products: (params) => clientPIM.data.products(params),
    allProducts: (params) => clientPIM.data.allProducts(params),
    collection: (params) => clientCMS.data.collection(params),
    collectionPage: (params) => clientCMS.data.collectionPage(params),
    allCollections: (params) => clientPIM.data.allCollections(params),
    content: (params) => clientPIM.data.content(params),
    allContent: (params) => clientCMS.data.allContent(params),
    page: (params) => clientCMS.data.page(params),
    pages: (params) => clientCMS.data.pages(params),
    article: (params) => clientCMS.data.article(params),
    articles: (params) => clientCMS.data.articles(params),
    blog: (params) => clientCMS.data.blog(params),
    blogPage: (params) => clientCMS.data.blogPage(params),
    update: (params) => clientCMS.data.update(params)
  }
};

if (
  (process.env.NACELLE_PREVIEW_MODE ||
    process.env.VERCEL_GITHUB_COMMIT_REF === 'preview') &&
  process.env.CONTENTFUL_PREVIEW_SPACE_ID &&
  process.env.CONTENTFUL_PREVIEW_API_TOKEN
) {
  console.log('RUNNING NACELLE IN PREVIEW MODE');
  // Initialize the Preview Connector
  // Note: the Contentful Preview API token is not the same as your Content Delivery API token
  const previewConnector = new NacelleContentfulPreviewConnector({
    contentfulSpaceID: process.env.CONTENTFUL_PREVIEW_SPACE_ID,
    contentfulToken: process.env.CONTENTFUL_PREVIEW_API_TOKEN
  });

  nacelleClient.data.content = (params) => previewConnector.content(params);
  nacelleClient.data.pages = (params) => previewConnector.pages(params);
  nacelleClient.data.page = (params) => previewConnector.page(params);
  nacelleClient.data.article = (params) => previewConnector.article(params);
  nacelleClient.data.articles = (params) => previewConnector.articles(params);
  nacelleClient.data.blog = (params) => previewConnector.blog(params);
}

export default nacelleClient;
