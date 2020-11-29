const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@views": path.resolve(__dirname, "src/views"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@api": path.resolve(__dirname, "src/api"),
      },
    },
  },
  devServer: {
    proxy: {
      "api/": {
        target: "http://182.92.128.115", // 允许跨域
        changeOrigin: true,
        // pathRewrite: {  // 重写路径
        //   "^api": "",
        // },
      },
    },
  },
};
