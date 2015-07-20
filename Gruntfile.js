module.exports = function(grunt) {

	grunt.initConfig({
			stylus: {
					options: {
						'include css': true,
						"resolve url": true
					},
					files: {
						src:"src.styl",
						dest:"res-grunt.css"
					}
				}
			}
	);

	grunt.loadNpmTasks('grunt-contrib-stylus');

	grunt.registerTask('test', ['stylus']);
};