module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      vendor: {
        files: [
          { 
            src: [
              'public/lib/*.js',
            ], 
            dest: 'public/build/vendor.js'
          }
        ]
      },
      app: {
        files: [
          { 
            src: [
              'public/js/*.js',
            ], 
            dest: 'public/build/app.js'
          }
        ]
      }
    },
    watch: {
      develop: {
        files: ['public/js/*.js'],
        tasks: ['concat:app'],
        options: {
          spawn: true,
        },
      },
    },
    tpl: {
      "public/tpl/resultado.js": ["public/tpl/*.tpl"]
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "public/build/out.html": ["public/jade/*.jade"]
        }
      }
    },

    uglify: {
      develop: {
        files: {
          'public/build/app.min.js': ["public/js/*.js"]
        }
      }
    },
    coffee: {
      compile: {
        files: {
          'public/build/example_from_coffee.js': 'public/js/example.js.coffee', // 1:1 compile
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-tpl');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  // grunt.loadNpmTasks('grunt-contrib-jst');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-manifest');
  grunt.registerTask('develop', ['concat', 'jade', 'uglify', 'coffee']);
  // grunt.registerTask('production', ['concat:vendor','uglify','jst','cssmin','manifest']);
  // grunt.registerTask('staging', ['deploy:staging']);
};