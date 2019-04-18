module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/personal-portfolio-v1/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_media-queries.scss";
          @import "@/scss/_fonts.scss";
          @import "@/scss/_variables.scss";
          @import "@/scss/_functions.scss";
          @import "@/scss/_mixins.scss";
        `,
      },
    },
  },
};
