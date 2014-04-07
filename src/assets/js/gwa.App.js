/* global console */

window.gwa = window.gwa || {};

/**
 * @class App
 * @namespace  gwa
 */
(function( ns, $ ) { // jshint ignore:line

	/**
	 * @constructor
	 * @param {jQuery} jq
	 */
	ns.App = function( jq ) {

		// declare private variables
		var
		/**
		 * @property {Object} _interface
		 * @private
		 */
		_interface = {},

		/**
		 * @property {jQuery} _jq
		 * @private
		 */
		_jq = jq;

		/**
		 * Public init method attached to _interface
		 * @method init
		*/
		_interface.init = function()
		{
			console.log('init');
			// use `_jq` for jquery
			// e.g. `_jq.find('#id')` instead of `$('#id')`.
			console.log('jquery object:', _jq);
			// add private methods (functions) below
			foo();
		};

		function foo()
		{
			if ($('html').hasClass('mdzr-svg')) {
				console.log('modernizr: svg supported');
			}
			console.log('foo called');
		}

		return _interface;

	};

}(window.gwa = window.gwa || {}, typeof(jQuery) === 'function' ? jQuery : null));
