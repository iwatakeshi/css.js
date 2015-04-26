module.exports = function(grunt){
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    concat:{
      dist:{
        src:['lib/Element/*.js', 'lib/class/**/*.js','lib/CSS/*.js'],
        dest:'harmony/index.js'
      }
    },
    babel: {
      options:{
        modules:'umd',
        moduleId:'css'
      },
        dist: {
            files: {
                './css.js': 'harmony/index.js'
            }
        }
    },
    watch:{
      scripts: {
        files: ['**/*.js'],
        tasks: ['concat', 'babel', 'uglify'],
        options: {
          spawn: false,
        },
      }
    },
    uglify: {
      dist: {
        files: {
          './css.min.js': ['./css.js']
        }
      }
  }
  });

  grunt.registerTask('default', ['concat','babel', 'uglify']);
  grunt.registerTask('dev', ['watch']);
};
