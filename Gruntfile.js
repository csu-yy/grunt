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
  });
  // defaut tasks
  grunt.registerTask('default',[]);
}



























