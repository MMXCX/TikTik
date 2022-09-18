import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'qx87d3ed',
  dataset: 'production',
  apiVersion: '2022-08-18',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
