/**
 * Gruntfile配置文件包含4部分
 * 一个包装（wrapper）函数
 * 项目和任务配置（grunt.initConfig）
 *  加载grunt插件和任务
 * 自定义任务
 */

module.exports = function (grunt) {
  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // step1 在grunt.initConfig方法中配置 uglify的配置参数
    uglify: {
      options: {
        stripBanners: true,
        banner: '/* ! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */ \n'
      },
      target: {
        files: {
          'build/js/lib/react.development-min.js': ['src/js/lib/react.development.js'],
          'build/js/lib/jq-min.js': ['src/js/lib/jq.js'],
          'build/js/utility/test-min.js': ['src/js/utility/test.js']
        }
      },
      /*build: {
        src: 'src/js/utility/test.js',
        dest: 'build/js/utility/<%= pkg.name %>-v<%= pkg.version %>-test.js'
      }*/
    },

  });
  // defaut tasks
  // grunt.registerTask('default',[]);

  // step2 在grunt.initConfig 方法之后，要让grunt去加载这个插件
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // step3 在grunt命令执行时，要不要立即执行uglify插件？若要，就写上，否则不写
  grunt.registerTask('default',['uglify']);

}



























