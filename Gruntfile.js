module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// tasks
		uglify: grunt.file.readJSON('./grunt/tasks/uglify.json'),
		jshint: grunt.file.readJSON('./grunt/tasks/jshint.json'),
		csslint: grunt.file.readJSON('./grunt/tasks/csslint.json'),
		validation: grunt.file.readJSON('./grunt/tasks/validation.json')
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-html-validation');

	grunt.registerTask(
		'default',
		[
			'csslint:src',
			'jshint:src',
			'validation:src',
			'uglify'
		]
	);

};
