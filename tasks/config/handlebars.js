/**
 * `handlebars`
 *
 * ---------------------------------------------------------------
 *
 * Compile handlebars files located in `assets/templates` into js templates
 * and generate new `.js` files in `.tmp/public/templates`.
 *
 */
module.exports = function(grunt) {

  grunt.config.set('handlebars', {
    dev: {
      options: {
        namespace: "Templates",
        processName: function (dir) {
          str = dir.replace('assets/templates/','').replace('.handlebars','');
          return str;
        }
      },
      files: [{
        expand: true,
        cwd: 'assets/templates/',
        src: ['**/*.handlebars'],
        dest: '.tmp/public/templates/',
        ext: '.js'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-handlebars');
};
