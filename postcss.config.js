import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import cssNano from 'cssnano';

export default {
  plugins: [postcssImport, autoprefixer, cssNano],
};
