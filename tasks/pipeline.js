/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 *
 * For more information see:
 *   https://github.com/balderdashy/sails-docs/blob/master/anatomy/myApp/tasks/pipeline.js.md
 */


var cssFilesToInject = [
  'vendor/**/*.css',
  'styles/**/*.css',
];

var jsDependenciesToInject = [
  /*
  * Order required dependencies
  */
  'js/dependencies/core/jquery/jquery.min.js',
  'js/dependencies/core/handlebars/handlebars.js',
  'js/dependencies/core/underscore/underscore.js',
  'js/dependencies/core/backbone/backbone.js',



  // The rest of the dependencies
  'js/dependencies/**/*.js'

];


var jsFilesToInject = [
  // Load sails.io before everything else
  // 'js/dependencies/sails.io.js',


  /*
  * Order required vendor
  */



  // The rest of the vendor files
  'vendor/**/*.js',



  /**********
  * Application specific requirements
  ***********/
  'js/libs/**/*.js',

  'js/application/application.js',
  'js/application/init.js',
  'js/application/models/*.js',
  'js/application/collections/*.js',


  'js/application/**/*.js'
];


// Thses are importing the handlebars templates that were
// compiled into javascript
var templateFilesToInject = [
  'templates/**/*.js'
];







// Default path for public folder (see documentation for more information)
var tmpPath = '.tmp/public/';

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(cssPath) {
  return require('path').join('.tmp/public/', cssPath);
});
module.exports.jsDependenciesToInject = jsDependenciesToInject.map(function(depPath) {
  return require('path').join('.tmp/public/', depPath);
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(jsPath) {
  return require('path').join('.tmp/public/', jsPath);
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(tplPath) {
  return require('path').join('.tmp/public/',tplPath);
});
