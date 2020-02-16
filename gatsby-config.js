require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-blog",
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    siteTitleAlt: `ANKAA digital, communication sur mesure`,
    title: "ANKAA digital, un modèle unique",
    author: "Nathalie Roussel",
    description: "ANKAA digital, votre accompagnement digital sur mesure.",
    siteUrl: "https://ankaa-digital.net/",
    social: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/nathalierousseldigital/",
      },
     
    ],
  },
}

