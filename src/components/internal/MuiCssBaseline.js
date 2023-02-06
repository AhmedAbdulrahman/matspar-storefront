const overrides = {
  styleOverrides: (theme) => `
    /* Include font files here. */
    /* Out-commented @font-face example:
    @font-face {
      font-family: 'Family';
      font-weight: 400;
      font-display: swap;
      src: url('/fonts/family/family-regular.woff2') format('woff2');
    }
    */
    /* Define :root css variables. */
    :root {
      /* Base */
      --matspar-spacing-base: ${theme.spacing(1)};

      /* Components */
      --matspar-toolbar-dense-height: 48px;
      --matspar-toolbar-height: 56px;
      --matspar-toolbar-spacing: ${theme.spacing(2)};

      --matspar-header-toolbar-primary-height: 56px;
      --matspar-header-toolbar-secondary-height: 22px;
      --matspar-header-height: 0px; /* Calculated in AppHeader. */

      --matspar-section-spacing: max(${theme.spacing(3)}, 3.7vw);
      --matspar-container-spacing: calc(100vw / 24);
    }
    /* Opinionated defaults taken from sanitize.css */
    /* https://github.com/csstools/sanitize.css */
    iframe, img, input, select, textarea {
      height: auto;
      max-width: 100%;
    }
    ol ol, ol ul, ul ol, ul ul {
      margin: 0;
    }
    nav ol, nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    svg:not([fill]) {
      fill: currentColor;
    }
    /* Custom global css */
    [type="search"]::-webkit-search-cancel-button, [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
      appearance: none;
    }
    [id] {
      scroll-margin-top: var(--matspar-header-height);
    }
    a {
      color: inherit;
      text-decoration: none
    }
  `,
}

export default overrides
