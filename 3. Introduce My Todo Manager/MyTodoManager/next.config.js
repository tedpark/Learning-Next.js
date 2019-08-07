const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withSass({
    // exportTrailingSlash: true,
    exportPathMap: function() {
      return {
        "/": { page: "/index" },
        "/login": { page: "/login" },
        "/main": { page: "/main" }
        // "/": { page: "/" }
        // "/": { page: "/" }
        // "/": { page: "/" }
      };
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            publicPath: "/_next/static/",
            outputPath: "static/",
            name: "[name].[ext]"
          }
        }
      });
      return config;
    }
  })
);

// module.exports = withCSS();
