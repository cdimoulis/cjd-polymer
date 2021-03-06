/**
 * `linkAssetsBuild`
 *
 * ---------------------------------------------------------------
 *
 * This Grunt tasklist is not designed to be used directly-- rather
 * it is a helper called by the `build` tasklist.
 *
 * For more information see:
 *   http://sailsjs.org/documentation/anatomy/my-app/tasks/register/link-assets-build-js
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('linkAssetsBuild', [
    'sails-linker:devDependenciesJsJade',
    'sails-linker:devJsRelativeJade',
    'sails-linker:devStylesRelativeJade',
    'sails-linker:devTplJade'
  ]);
};
