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
        			port: process.env.OPENSHIFT_NODEJS_PORT || 9001,
        			hostname: process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
        			keepalive: true,
        			base: 'client'
      			}
    		}

		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	grunt.registerTask('default', ['jshint', 'connect']);
};