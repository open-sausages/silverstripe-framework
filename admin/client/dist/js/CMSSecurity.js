webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jQuery2.default.noConflict();
	
	_jQuery2.default.entwine.warningLevel = _jQuery2.default.entwine.WARN_LEVEL_BESTPRACTISE;
	_jQuery2.default.entwine('ss', function ($) {
	  $('.cms input[type="submit"], .cms button, .cms input[type="reset"], .cms .ss-ui-button').entwine({
	    onadd: function onadd() {
	      this.addClass('ss-ui-button');
	      if (!this.data('button')) this.button();
	      this._super();
	    },
	    onremove: function onremove() {
	      if (this.data('button')) this.button('destroy');
	      this._super();
	    }
	  });
	});

/***/ }
]);
//# sourceMappingURL=CMSSecurity.js.map