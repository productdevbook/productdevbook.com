// apollo.config.js
module.exports = {
  client: {
    service: {
      name: "productdevbook",
      // URL to the GraphQL API
      url: process.env.GRAPHQL_URL || "http://localhost:4000/graphql",
    },
    // Files processed by the extension
    includes: ["**/*.vue", "**/*.js"],
  },
};
