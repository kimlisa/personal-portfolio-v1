module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_media-queries.scss";
          @import "@/scss/_fonts.scss";
          @import "@/scss/_variables.scss";
          @import "@/scss/_functions.scss";
        `,
      },
    },
  },
};
