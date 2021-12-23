// apollo.config.js
module.exports = {
  client: {
    service: {
      name: "productdevbook-l9wp9",
      // URL to the GraphQL API
      url: "https://api.productdevbook.com/graphql",
    },
    // Files processed by the extension
    includes: ["**/*.vue", "**/*.js"],
  },
};
