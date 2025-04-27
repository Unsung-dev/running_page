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
  siteUrl: 'https://www.gavin-dev.com/',
  logo: '/images/avatar.png',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://www.gavin-dev.com/',
    },
    {
      name: 'About',
      url: 'https://www.gavin-dev.com/',
    },
  ],
};

export default data;
