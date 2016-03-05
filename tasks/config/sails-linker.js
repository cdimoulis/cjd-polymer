/**
 * `sails-linker`
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags and <link> tags into the specified
 * specified HTML and/or EJS files.  The specified delimiters (`startTag`
 * and `endTag`) determine the insertion points.
 *
 * #### Development (default)
 * By default, tags will be injected for your app's client-side JavaScript files,
 * CSS stylesheets, and precompiled client-side HTML templates in the `templates/`
 * directory (see the `jst` task for more info on that).  In addition, if a LESS
 * stylesheet exists at `assets/styles/importer.less`, it will be compiled to CSS
 * and a `<link>` tag will be inserted for it.  Similarly, if any Coffeescript
 * files exists in `assets/js/`, they will be compiled into JavaScript and injected
 * as well.
 *
 * #### Production (`NODE_ENV=production`)
 * In production, all stylesheets are minified into a single `.css` file (see
 * `tasks/config/cssmin.js` task) and all client-side scripts are minified into
 * a single `.js` file (see `tasks/config/uglify.js` task).  Any client-side HTML
 * templates, CoffeeScript, or LESS files are bundled into these same two minified
 * files as well.
 *
 * For usage docs see:
 *   https://github.com/Zolmeister/grunt-sails-linker
 *
 */
module.exports = function(grunt) {

  grunt.config.set('sails-linker', {
    devDependenciesJsJade: {
      options: {
        startTag: '// DEPENDENCIES',
        endTag: '// END DEPENDENCIES',
        fileTmpl: 'script(src="%s")',
        appRoot: '.tmp/public'
      },
      files: {
        'views/**/*.jade': require('../pipeline').jsDependenciesToInject
      }
    },

    devDependenciesJsRelativeJade: {
      options: {
        startTag: '// DEPENDENCIES',
        endTag: '// END DEPENDENCIES',
        fileTmpl: 'script(src="%s")',
        appRoot: '.tmp/public',
        relative: true
      },
      files: {
        'views/**/*.jade': require('../pipeline').jsDependenciesToInject
      }
    },

    prodDependenciesJsJade: {
      options: {
        startTag: '// DEPENDENCIES',
        endTag: '// END DEPENDENCIES',
        fileTmpl: 'script(src="%s")',
        appRoot: '.tmp/public'
      },
      files: {
        'views/**/*.jade': [] // Testing empty ['.tmp/public/min/dependencies.min.js']
      }
    },

    prodDependenciesJsRelativeJade: {
      options: {
        startTag: '// DEPENDENCIES',
        endTag: '// END DEPENDENCIES',
        fileTmpl: 'script(src="%s")',
        appRoot: '.tmp/public',
        relative: true
      },
      files: {
        'views/**/*.jade': [] // Testing empty ['.tmp/public/min/dependencies.min.js']
      }
    },

    devJsJade: {
      options: {
        startTag: '// SCRIPTS',
        endTag: '// SCRIPTS END',
        fileTmpl: 'script(src="%s")',
        appRoot: '.tmp/public'
      },
      files: {
        'views/**/*.jade': require('../pipeline').jsFilesToInject
      }
    },

    devJsRelativeJade: {
      options: {
        startTag: '// SCRIPTS',
        endTag: '// SCRIPTS END',
        fileTmpl: 'script(src="%s")',
        appRoot: '.tmp/public',
        relative: true
      },
      files: {
        'views/**/*.jade': require('../pipeline').jsFilesToInject
      }
    },

    prodJsJade: {
      options: {
        startTag: '// SCRIPTS',
        endTag: '// SCRIPTS END',
        fileTmpl: 'script(src="%s")',
        appRoot: '.tmp/public'
      },
      files: {
        'views/**/*.jade': ['.tmp/public/min/production.min.js']
      }
    },

    prodJsRelativeJade: {
      options: {
        startTag: '// SCRIPTS',
        endTag: '// SCRIPTS END',
        fileTmpl: 'script(src="%s")',
        appRoot: '.tmp/public',
        relative: true
      },
      files: {
        'views/**/*.jade': ['.tmp/public/min/production.min.js']
      }
    },

    devStylesJade: {
      options: {
        startTag: '// STYLES',
        endTag: '// STYLES END',
        fileTmpl: 'link(rel="stylesheet", href="%s")',
        appRoot: '.tmp/public'
      },

      files: {
        'views/**/*.jade': require('../pipeline').cssFilesToInject
      }
    },

    devStylesRelativeJade: {
      options: {
        startTag: '// STYLES',
        endTag: '// STYLES END',
        fileTmpl: 'link(rel="stylesheet", href="%s")',
        appRoot: '.tmp/public',
        relative: true
      },

      files: {
        'views/**/*.jade': require('../pipeline').cssFilesToInject
      }
    },

    prodStylesJade: {
      options: {
        startTag: '// STYLES',
        endTag: '// STYLES END',
        fileTmpl: 'link(rel="stylesheet", href="%s")',
        appRoot: '.tmp/public'
      },
      files: {
        'views/**/*.jade': ['.tmp/public/min/production.min.css']
      }
    },

    prodStylesRelativeJade: {
      options: {
        startTag: '// STYLES',
        endTag: '// STYLES END',
        fileTmpl: 'link(rel="stylesheet", href="%s")',
        appRoot: '.tmp/public',
        relative: true
      },
      files: {
        'views/**/*.jade': ['.tmp/public/min/production.min.css']
      }
    },

    // Bring in JST template object
    devTplJade: {
      options: {
        startTag: '// TEMPLATES',
        endTag: '// TEMPLATES END',
        fileTmpl: 'script(type="text/javascript", src="%s")',
        appRoot: '.tmp/public'
      },
      files: {
        'views/**/*.jade': require('../pipeline').templateFilesToInject
      }
    },

    prodTplJade: {
      options: {
        startTag: '// TEMPLATES',
        endTag: '// TEMPLATES END',
        fileTmpl: 'script(type="text/javascript", src="%s")',
        appRoot: '.tmp/public'
      },
      files: {
        'views/**/*.jade': [] // Testing empty ['.tmp/public/min/templates.min.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sails-linker');
};
