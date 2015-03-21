module.exports = function(grunt) {
  grunt.initConfig({
    "babel": {
      options: {
        sourceMap: false,
        modules: "common"
      },
      dist: {
        files: [{
          cwd: "./src/js",
          expand: true,
          src: ["*.js"],
          dest:  "./dist/js",
          ext: ".js"
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.registerTask('default', ['babel']);
};
