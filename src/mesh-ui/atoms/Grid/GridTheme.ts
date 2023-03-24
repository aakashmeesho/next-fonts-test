const gridThemeDesktop = {
  gridColumns: 12, // default 12
  breakpoints: {
    giant: 1328,
  },
  row: {
    padding: 8, // default 15
  },
  col: {
    padding: 8, // default 15
  },
  container: {
    padding: 0, // default 15
    maxWidth: {
      giant: 1328,
    },
  },
};

const gridThemeMobile = {
  gridColumns: 12, // default 12
  breakpoints: {
    phone: 576,
  },
  row: {
    padding: 4, // default 15
  },
  col: {
    padding: 8, // default 15
  },
  container: {
    padding: 0, // default 15
    maxWidth: {
      phone: 576,
    },
  },
};

export { gridThemeDesktop, gridThemeMobile };
