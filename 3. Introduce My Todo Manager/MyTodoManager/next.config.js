const withCSS = require("@zeit/next-css");

module.exports = withCSS({
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
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000
        }
      }
    });

    return config;
  }
});

// module.exports = withCSS();
