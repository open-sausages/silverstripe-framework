webpackJsonp([4],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jQuery2.default.entwine('ss', function ($) {
		$('form.uploadfield-form .TreeDropdownField').entwine({
			onmatch: function onmatch() {
				this._super();
	
				var self = this;
				this.bind('change', function () {
					var fileList = self.closest('form').find('.grid-field');
					fileList.setState('ParentID', self.getValue());
					fileList.reload();
				});
			},
			onunmatch: function onunmatch() {
				this._super();
			}
		});
	});

/***/ }
]);
//# sourceMappingURL=UploadField_select.js.map