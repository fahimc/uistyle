module.exports = function (grunt) {

  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ["SRC"]
        },
        files: {
          "Dist/css/uistyle.css": "SRC/main.less"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less']);

};
