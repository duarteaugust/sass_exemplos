/*!
 * My Gruntfile
 * https://github.com/duarteaugust
 * @author duarteaugust
 */
 
 
/**
 * Grunt Module
 */


 module.exports = function(grunt) {
  
  // Project configuration.
  
  grunt.initConfig({
  
      pkg: grunt.file.readJSON('package.json'),



       compass: {
          dist: {
            options: {
              sassDir: 'dev',
              cssDir: 'dist'
            }
          }
        },


        sass: {
                dist: {
                  files: {
                    'dist/style.sass' : 'dev/style.css'
                  }
                }
          },


         watch: {
           css: {
              files: '**/*.sass',
              tasks: ['compass']
          }
        }

    });


// DEPENDENT PLUGINS =========================/
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

// TASKS =====================================/
  grunt.registerTask('default', ['watch']);

}