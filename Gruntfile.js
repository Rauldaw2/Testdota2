module.exports = function(grunt) {


	grunt.initConfig({
		jshint: {
			client: {
				options: {
					extract: 'auto'
				},
				src: ['Gruntfile.js', 'package.json', 'client/bower.json', 'client/*.js', 'client/*.html']
			}
		
		},
		connect: {
			client: {
      			options: {
        			port: 9001,
        			hostname: '0.0.0.0',
        			keepalive: true
      			}
    		}

		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	grunt.registerTask('default', ['jshint', 'connect']);
};