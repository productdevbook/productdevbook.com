// apollo.config.js
module.exports = {
  client: {
    service: {
      name: "productdevbook",
      // URL to the GraphQL API
      url: "http://localhost:8055/graphql",
    },
    // Files processed by the extension
    includes: ["**/*.vue", "**/*.js"],
  },
};
