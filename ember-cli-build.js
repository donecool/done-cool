'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;
const harvester = require('seed-harvester');
const packer = require('seed-packer');

const Funnel = require('broccoli-funnel');
const concat = require('broccoli-concat');
const path = require('path');
const fs = require('fs');
const compileSass = require('broccoli-sass');

const resolve = require('rollup-plugin-node-resolve');
const json = require('rollup-plugin-json');
const commonjs = require('rollup-plugin-commonjs');

// Hack to include seed-harvester, until we have a way of specifying our own
// includePaths for sass
class CoolApp extends GlimmerApp {
  cssTree() {
    let stylesPath = path.join(this.resolveLocal('src'), 'ui', 'styles');

    if (fs.existsSync(stylesPath)) {
      // Compile SASS if app.scss is present
      // (this works with imports from app.scss)
      let scssPath = path.join(stylesPath, 'app.scss');
      if (fs.existsSync(scssPath)) {
        return compileSass([stylesPath].concat(harvester()), 'app.scss', this.outputPaths.app.css, {
          annotation: 'Funnel: scss'
        });
      }

      // Otherwise concat all the css in the styles dir
      return concat(new Funnel(stylesPath, {
        include: ['**/*.css'],
        annotation: 'Funnel: css'}),
        { outputFile: this.outputPaths.app.css });
    }
  }
}

module.exports = function(defaults) {
  packer();

  let app = new CoolApp(defaults, {
    rollup: {
      plugins: [
        resolve({ jsnext: true, module: true, main: true }),
        json({
          include: ['node_modules/emojilib/**'],
        }),
        commonjs({ extensions: ['.js', '.json'] })
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
