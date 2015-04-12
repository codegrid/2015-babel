module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          "bundle.js": ["./src/js/main.js"]
        },
        options: {
          transform: ["babelify"]
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['browserify']);
};
