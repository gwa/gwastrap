window.gwa = window.gwa || {};

gwa.extendDummy = function () {};

/**
 * Provides class inheritance.
 * ~~~~~~~~{.js}
 * function Base( param1, param2 )
 * {
 *     this.first = param1;
 *     this.second = param2;
 * }
 *
 * function Sub( param1, param2 )
 * {
 *     // call constructor in parent class
 *     Base.call(this, param1, param2);
 *     console.log(this.first); // param 1
 * }
 *
 * gwa.extend(Base, Sub);
 * ~~~~~~~~
 * @see http://stackoverflow.com/a/4389429/698511
 * @param Function base The base class.
 * @param Function base The sub class.
 */
gwa.extend = function( base, sub )
{
	var d = function () {};
	gwa.extendDummy.prototype = base.prototype;
	sub.prototype = new gwa.extendDummy();
	sub.prototype.constructor = sub;
}