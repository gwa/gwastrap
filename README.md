gwastrap
========

== JavaScript

=== Namespacing

=== Classes

Each class should be in its own file.

For production, class files should be minified and concatenated.

==== Standard class

```js
window.gwa = window.gwa || {};

/**
 * @class Foo
 * @namespace  gwa
 * @constructor
 * @param  {jQuery} jq
 * @param  {String} param
 */
(function( ns, $ ) {

	ns.Foo = function( jq, param ) {

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
		_jq = jq,

		/**
		 * @property {String} _param
		 * @private
		 */
		_param = param;

		/**
		 * Public method attached to _interface
		 * @method getParam
		 * @return {String}
		 */
		_interface.getParam = function ()
		{
			return param;
		}

		return _interface;

	};

}(window.gwa = window.gwa || {}, typeof(jQuery)=='function' ? jQuery : null));
```

==== Singelton pattern

```js
window.gwa = window.gwa || {};

/**
 * Singleton class.
 * @class FooStatic
 * @static
 * @namespace  gwa
 * @constructor
 * @param  {Object} ns
 * @param  {jQuery} $
 */
(function( ns, $ ) {

	/**
	 * property {Number} DAYS_IN_A_WEEK
	 * @final
	 */
	ns.DAYS_IN_A_WEEK = 7;

	var
	/**
	 * property {String} _greeting
	 * @private
	 */
	_greeting = 'hello';

	/**
	 * @method setGreeting
	 * @param  {String}    greeting
	 */
	ns.setGreeting = function( greeting )
	{
		ns.greeting = _firstLetterToUpperCase(greeting);
	};

	/**
	 * @method getGreeting
	 * @return {String}
	 */
	ns.getGreeting = function()
	{
		return _greeting;
	};

	/**
	 * @method _firstLetterToUpperCase
	 * @private
	 * @param  {String} str
	 * @return {String}
	 */
	function _firstLetterToUpperCase( str ) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

}(window.gwa.FooStatic = {}, typeof(jQuery)=='function' ? jQuery : null));
```
