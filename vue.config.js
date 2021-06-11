module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue3-online-shop/" : "/",
  configureWebpack: {
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  },
};
