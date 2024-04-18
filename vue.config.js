module.exports = {
  lintOnSave: false,

  css: {
    loaerOptions: {
      sass: {
        additionalData: `
          @import "@/styles/functions";
          @import "@/styles/colors";
        `,
      }
    }
  }
}
