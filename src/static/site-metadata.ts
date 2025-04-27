interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Unsung Running Page',
  siteUrl: 'https://x.com/Unsung9521',
  logo: '/images/avatar.png',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://x.com/Unsung9521',
    },
    {
      name: 'About',
      url: 'https://x.com/Unsung9521',
    },
  ],
};

export default data;
