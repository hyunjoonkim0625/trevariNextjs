const withTypescript = require("@zeit/next-typescript");

const withSass = require("@zeit/next-sass");

module.exports = withTypescript(
  withSass({
    cssLoaderOptions: {
      importLoaders: 1
    }
  })
);
