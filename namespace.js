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



window.gwa = window.gwa || {};

/**
 * Prototype class
 * @class BaseClass
 * @namespace  gwa
 * @constructor
 */
(function( ns, $ ) {

	ns.BaseClass = function() {
		// empty constructor
	};

	/**
	 * @property {String} day
	 */
	ns.BaseClass.prototype.day = 'Monday';

	/**
	 * @method getDay
	 * @return {String}
	 */
	ns.BaseClass.prototype.getDay = function ()
	{
		return this.day;
	}

	/**
	 * @method setDay
	 * @param {String}
	 */
	ns.BaseClass.prototype.setDay = function ( day )
	{
		this.day = day;
	}

}(window.gwa = window.gwa || {}, typeof(jQuery)=='function' ? jQuery : null));



window.gwa = window.gwa || {};

/**
 * Prototype subclass
 * @class SubClass
 * @namespace  gwa
 * @constructor
 */
(function( ns, $ ) {

	ns.SubClass = function() {
		gwa.BaseClass.call(this);
	};

	// extend parent class
	gwa.extend(gwa.BaseClass, ns.SubClass);

	/**
	 * @method getDay
	 * @return {String}
	 */
	ns.SubClass.prototype.getDay = function ()
	{
		return this.day.toUpperCase();
	}

}(window.gwa = window.gwa || {}, typeof(jQuery)=='function' ? jQuery : null));










console.log(gwa.FooStatic.DAYS_IN_A_WEEK);
gwa.FooStatic.setGreeting('goodbye');

var f = new gwa.Foo($('#mydiv'), 'test');
console.log(f.getParam());


var b = new gwa.BaseClass();
console.log(b.getDay());
b.setDay('Tuesday');
console.log(b.getDay());

var s = new gwa.SubClass();
console.log(s.getDay());
s.setDay('Tuesday');
console.log(s.getDay());