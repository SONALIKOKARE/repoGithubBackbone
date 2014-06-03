module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [/*'Gruntfile.js',*/ 'src/js/*.js'],
      options: {
      // options here to override JSHint defaults
      globals: {
        "node": true,
        "browser": true,
        "es5": true,
        "esnext": true,
        "bitwise": true,
        "camelcase": true,
        "curly": true,
        "eqeqeq": true,
        "immed": true,
        "indent": 4,
        "latedef": true,
        "newcap": true,
        "noarg": true,
        "quotmark": "single",
        "regexp": true,
        "undef": true,
        "unused": true,
        "strict": true,
        "trailing": true,
        "smarttabs": true,
        "jquery": true,
        "expr": false
      }
      }
    },
    /*less:{
      readyMade: {
          options: {
              compress: true
          },
          files: {
             "src/css/style.css": "src/less/style.less",
              "src/css/advanced.css": ["src/less/common.less","src/less/advanced.less"],
              "src/css/blue_scroll.css": "src/less/blue_scroll.less",
              "src/css/academic.css": ["src/less/common.less","src/less/academic.less"],
              "src/css/article.css": "src/less/article.less",
              "src/css/student.css": "src/less/student.less",
              "src/css/readModal.css": "src/less/readModal.less",
              "src/css/scroll.css": "src/less/scroll.less",
              "src/css/ewol.css": "src/less/ewol.less",
              "src/css/superHome.css": "src/less/superHome.less",
              "src/css/theme/superHome_theme.css": "src/less/theme/superHome_theme.less",
              "src/css/theme/academic_theme.css": "src/less/theme/academic_theme.less",
              "src/css/theme/student_theme.css": "src/less/theme/student_theme.less",
              "src/css/theme/advanced_theme.css": "src/less/theme/advanced_theme.less",
              "src/css/theme/ewol_theme.css": "src/less/theme/ewol_theme.less",
              "src/css/bxslider.css": "src/less/bxslider.less"
          }
      }
    },*/
    htmlhint: {
      files: ['src/index.html','src/template/*.html','src/template/*/*.html'],
      options: {
       "tag-pair": true,
        "tagname-lowercase": true,
        "attr-lowercase": true,
        "attr-value-double-quotes": true,
        "attr-value-not-empty": true,
        "doctype-first": true,
        "tag-self-close": true,
        "spec-char-escape": true,
        "id-unique": true,
        "head-script-disabled": true,
        "img-alt-require": true,
        "doctype-html5": true,
        "id-class-value": true
      }
    },
    watch: {
      files: ['src/less/*.less'],
      tasks: ['less']
    }
  });

  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint','htmlhint','less']);

  grunt.registerTask('default', ['jshint','htmlhint','less']);

};