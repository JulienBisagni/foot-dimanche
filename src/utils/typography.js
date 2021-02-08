import Typography from 'typography';
import variables from '../styles/abstracts/_variables.scss';

const fontFamilyHeader = 'Rubik';
const fontFamilyBody = 'Karla';

const typography = new Typography({
  baseFontSize: '10px',
  headerFontFamily: [fontFamilyHeader, 'sans-serif'],
  bodyFontFamily: [fontFamilyBody, 'sans-serif'],
  headerWeight: 700,
  googleFonts: [
    {
      name: fontFamilyHeader,
      styles: ['700', '400'],
    },
    {
      name: fontFamilyBody,
      styles: ['700', '400'],
    },
  ],
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    body: { fontSize: variables.fontSizeParagraph, color: variables.colorText },
    p: {
      fontSize: variables.fontSizeParagraph,
      lineHeight: 1.3,
    },
    h1: {
      fontSize: variables.fontSizeTitle,
    },
    h2: {
      fontSize: variables.fontSizeSubtitle,
    },
    'h3, h4, h5, h6': {
      fontSize: variables.fontSizeParagraph,
    },
    'ul, li': {
      margin: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
      fontWeight: 700,
    },
    select: {
      fontFamily: fontFamilyBody,
    },
  }),
});

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
