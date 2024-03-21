import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import cssNano from 'cssnano';

export default {
  plugins: [postcssImport, postcssPresetEnv, cssNano],
};
