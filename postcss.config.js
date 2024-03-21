import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssNested from 'postcss-nested';
import postcssPresetEnv from 'postcss-preset-env';
import cssNano from 'cssnano';

export default {
  plugins: [
    postcssImport,
    postcssMixins,
    postcssSimpleVars,
    postcssNested,
    postcssPresetEnv,
    cssNano,
  ],
};
