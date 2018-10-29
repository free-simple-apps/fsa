module.exports = {
  siteMetadata: {
    title: 'Free Simple Apps',
    siteUrl: 'http://free-simple-apps.com/',
    description: 'We make your dreams come true',
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-N78PT8S',
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#639',
        theme_color: '#639',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
