module.exports = {
  siteMetadata: {
    siteUrl: `https://gonzalotorres.dev`,
    title: `Gonzalo Torres | Full Stack Developer`,
    author: `Gonzalo Torres Tonkowicz`,
    description: "Gonzalo Torres Tonkowicz's Developer porftolio",
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Exo\:100,100i,300,400`
        ],
        display: 'swap',
      },
    },
  ],
};
