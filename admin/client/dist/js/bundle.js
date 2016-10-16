webpackJsonp([5],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(5);
	__webpack_require__(18);
	__webpack_require__(21);
	__webpack_require__(23);
	__webpack_require__(25);
	__webpack_require__(35);
	__webpack_require__(39);
	__webpack_require__(49);
	__webpack_require__(50);
	__webpack_require__(51);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(56);
	__webpack_require__(60);
	__webpack_require__(62);
	__webpack_require__(65);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(75);
	
	__webpack_require__(84);
	__webpack_require__(85);
	__webpack_require__(86);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(104);
	__webpack_require__(106);
	
	__webpack_require__(107);
	__webpack_require__(108);
	__webpack_require__(109);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(114);
	__webpack_require__(109);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(123);
	
	__webpack_require__(124);

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["SilverStripeComponent"] = __webpack_require__(3);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SilverStripeComponent = function (_Component) {
	  _inherits(SilverStripeComponent, _Component);
	
	  function SilverStripeComponent() {
	    _classCallCheck(this, SilverStripeComponent);
	
	    return _possibleConstructorReturn(this, (SilverStripeComponent.__proto__ || Object.getPrototypeOf(SilverStripeComponent)).apply(this, arguments));
	  }
	
	  _createClass(SilverStripeComponent, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (typeof this.props.cmsEvents === 'undefined') {
	        return;
	      }
	
	      this.cmsEvents = this.props.cmsEvents;
	
	      for (var cmsEvent in this.cmsEvents) {
	        if ({}.hasOwnProperty.call(this.cmsEvents, cmsEvent)) {
	          (0, _jQuery2.default)(document).on(cmsEvent, this.cmsEvents[cmsEvent].bind(this));
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      for (var cmsEvent in this.cmsEvents) {
	        if ({}.hasOwnProperty.call(this.cmsEvents, cmsEvent)) {
	          (0, _jQuery2.default)(document).off(cmsEvent);
	        }
	      }
	    }
	  }, {
	    key: 'emitCmsEvent',
	    value: function emitCmsEvent(componentEvent, data) {
	      (0, _jQuery2.default)(document).trigger(componentEvent, data);
	    }
	  }]);
	
	  return SilverStripeComponent;
	}(_react.Component);
	
	SilverStripeComponent.propTypes = {
	  cmsEvents: _react2.default.PropTypes.object
	};
	
	exports.default = SilverStripeComponent;

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Backend"] = __webpack_require__(6);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _isomorphicFetch = __webpack_require__(7);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _es6Promise = __webpack_require__(9);
	
	var _es6Promise2 = _interopRequireDefault(_es6Promise);
	
	var _qs = __webpack_require__(12);
	
	var _qs2 = _interopRequireDefault(_qs);
	
	var _merge = __webpack_require__(16);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	_es6Promise2.default.polyfill();
	
	function checkStatus(response) {
	  var ret = null;
	  var error = null;
	  if (response.status >= 200 && response.status < 300) {
	    ret = response;
	  } else {
	    error = new Error(response.statusText);
	    error.response = response;
	    throw error;
	  }
	
	  return ret;
	}
	
	function encodeBody(data) {
	  var encodedData = null;
	  if (data instanceof FormData || typeof data === 'string') {
	    encodedData = data;
	  } else if (data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
	    encodedData = JSON.stringify(data);
	  } else {
	    throw new Error('Invalid body type');
	  }
	  return encodedData;
	}
	
	function encode(contentType, data) {
	  switch (contentType) {
	    case 'application/x-www-form-urlencoded':
	      return _qs2.default.stringify(data);
	
	    case 'application/json':
	    case 'application/x-json':
	    case 'application/x-javascript':
	    case 'text/javascript':
	    case 'text/x-javascript':
	    case 'text/x-json':
	      return JSON.stringify(data);
	
	    default:
	      throw new Error('Can\'t encode format: ' + contentType);
	  }
	}
	
	function decode(contentType, text) {
	  switch (contentType) {
	    case 'application/x-www-form-urlencoded':
	      return _qs2.default.parse(text);
	
	    case 'application/json':
	    case 'application/x-json':
	    case 'application/x-javascript':
	    case 'text/javascript':
	    case 'text/x-javascript':
	    case 'text/x-json':
	      return JSON.parse(text);
	
	    default:
	      throw new Error('Can\'t decode format: ' + contentType);
	  }
	}
	
	function addQuerystring(url, querystring) {
	  if (querystring === '') {
	    return url;
	  }
	
	  if (url.match(/\?/)) {
	    return url + '&' + querystring;
	  }
	
	  return url + '?' + querystring;
	}
	
	function parseResponse(response) {
	  return response.text().then(function (body) {
	    return decode(response.headers.get('Content-Type'), body);
	  });
	}
	
	function applySchemaToData(payloadSchema, data) {
	  return Object.keys(data).reduce(function (prev, key) {
	    var schema = payloadSchema[key];
	
	    if (schema && (schema.remove === true || schema.querystring === true)) {
	      return prev;
	    }
	
	    return _extends(prev, _defineProperty({}, key, data[key]));
	  }, {});
	}
	
	function applySchemaToUrl(payloadSchema, url, data) {
	  var opts = arguments.length <= 3 || arguments[3] === undefined ? { setFromData: false } : arguments[3];
	
	  var newUrl = url;
	
	  var queryData = Object.keys(data).reduce(function (prev, key) {
	    var schema = payloadSchema[key];
	    var includeThroughSetFromData = opts.setFromData === true && !(schema && schema.remove === true);
	    var includeThroughSpec = schema && schema.querystring === true && schema.remove !== true;
	    if (includeThroughSetFromData || includeThroughSpec) {
	      return _extends(prev, _defineProperty({}, key, data[key]));
	    }
	
	    return prev;
	  }, {});
	  var encodedQuery = encode('application/x-www-form-urlencoded', queryData);
	
	  newUrl = addQuerystring(newUrl, encodedQuery);
	
	  newUrl = Object.keys(payloadSchema).reduce(function (prev, key) {
	    var replacement = payloadSchema[key].urlReplacement;
	    if (replacement) {
	      return prev.replace(replacement, data[key]);
	    }
	
	    return prev;
	  }, newUrl);
	
	  return newUrl;
	}
	
	var Backend = function () {
	  function Backend() {
	    _classCallCheck(this, Backend);
	
	    this.fetch = _isomorphicFetch2.default;
	  }
	
	  _createClass(Backend, [{
	    key: 'createEndpointFetcher',
	    value: function createEndpointFetcher(endpointSpec) {
	      var _this = this;
	
	      var refinedSpec = _extends({
	        method: 'get',
	        payloadFormat: 'application/x-www-form-urlencoded',
	        responseFormat: 'application/json',
	        payloadSchema: {},
	        defaultData: {}
	      }, endpointSpec);
	
	      var formatShortcuts = {
	        json: 'application/json',
	        urlencoded: 'application/x-www-form-urlencoded'
	      };
	      ['payloadFormat', 'responseFormat'].forEach(function (key) {
	        if (formatShortcuts[refinedSpec[key]]) refinedSpec[key] = formatShortcuts[refinedSpec[key]];
	      });
	
	      return function () {
	        var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	        var headers = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        var mergedHeaders = _extends({}, headers, {
	          Accept: refinedSpec.responseFormat,
	          'Content-Type': refinedSpec.payloadFormat
	        });
	
	        var mergedData = _merge2.default.recursive({}, refinedSpec.defaultData, data);
	
	        var url = applySchemaToUrl(refinedSpec.payloadSchema, refinedSpec.url, mergedData, { setFromData: refinedSpec.method.toLowerCase() === 'get' });
	
	        var encodedData = refinedSpec.method.toLowerCase() !== 'get' ? encode(refinedSpec.payloadFormat, applySchemaToData(refinedSpec.payloadSchema, mergedData)) : '';
	
	        var args = refinedSpec.method.toLowerCase() === 'get' ? [url, mergedHeaders] : [url, encodedData, mergedHeaders];
	
	        return _this[refinedSpec.method.toLowerCase()].apply(_this, args).then(parseResponse);
	      };
	    }
	  }, {
	    key: 'get',
	    value: function get(url) {
	      var headers = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	      return this.fetch(url, {
	        method: 'get',
	        credentials: 'same-origin',
	        headers: headers
	      }).then(checkStatus);
	    }
	  }, {
	    key: 'post',
	    value: function post(url) {
	      var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	      var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	      var defaultHeaders = { 'Content-Type': 'application/x-www-form-urlencoded' };
	      return this.fetch(url, {
	        method: 'post',
	        credentials: 'same-origin',
	        body: encodeBody(data),
	        headers: _extends({}, defaultHeaders, headers)
	      }).then(checkStatus);
	    }
	  }, {
	    key: 'put',
	    value: function put(url) {
	      var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	      var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	      return this.fetch(url, {
	        method: 'put',
	        credentials: 'same-origin',
	        body: encodeBody(data),
	        headers: headers
	      }).then(checkStatus);
	    }
	  }, {
	    key: 'delete',
	    value: function _delete(url) {
	      var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	      var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	      return this.fetch(url, {
	        method: 'delete',
	        credentials: 'same-origin',
	        body: encodeBody(data),
	        headers: headers
	      }).then(checkStatus);
	    }
	  }]);
	
	  return Backend;
	}();
	
	var backend = new Backend();
	
	exports.default = backend;

/***/ },
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   3.3.1
	 */
	
	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ES6Promise = factory());
	}(this, (function () { 'use strict';
	
	function objectOrFunction(x) {
	  return typeof x === 'function' || typeof x === 'object' && x !== null;
	}
	
	function isFunction(x) {
	  return typeof x === 'function';
	}
	
	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	} else {
	  _isArray = Array.isArray;
	}
	
	var isArray = _isArray;
	
	var len = 0;
	var vertxNext = undefined;
	var customSchedulerFn = undefined;
	
	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};
	
	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}
	
	function setAsap(asapFn) {
	  asap = asapFn;
	}
	
	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';
	
	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	
	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}
	
	// vertx
	function useVertxTimer() {
	  return function () {
	    vertxNext(flush);
	  };
	}
	
	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });
	
	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}
	
	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}
	
	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}
	
	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];
	
	    callback(arg);
	
	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }
	
	  len = 0;
	}
	
	function attemptVertx() {
	  try {
	    var r = require;
	    var vertx = __webpack_require__(11);
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}
	
	var scheduleFlush = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}
	
	function then(onFulfillment, onRejection) {
	  var _arguments = arguments;
	
	  var parent = this;
	
	  var child = new this.constructor(noop);
	
	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }
	
	  var _state = parent._state;
	
	  if (_state) {
	    (function () {
	      var callback = _arguments[_state - 1];
	      asap(function () {
	        return invokeCallback(_state, child, callback, parent._result);
	      });
	    })();
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }
	
	  return child;
	}
	
	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.resolve(1);
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve(object) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }
	
	  var promise = new Constructor(noop);
	  _resolve(promise, object);
	  return promise;
	}
	
	var PROMISE_ID = Math.random().toString(36).substring(16);
	
	function noop() {}
	
	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	
	var GET_THEN_ERROR = new ErrorObject();
	
	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}
	
	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}
	
	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    GET_THEN_ERROR.error = error;
	    return GET_THEN_ERROR;
	  }
	}
	
	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}
	
	function handleForeignThenable(promise, thenable, then) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        _resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	
	      _reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	    if (!sealed && error) {
	      sealed = true;
	      _reject(promise, error);
	    }
	  }, promise);
	}
	
	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    _reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return _resolve(promise, value);
	    }, function (reason) {
	      return _reject(promise, reason);
	    });
	  }
	}
	
	function handleMaybeThenable(promise, maybeThenable, then$$) {
	  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$ === GET_THEN_ERROR) {
	      _reject(promise, GET_THEN_ERROR.error);
	    } else if (then$$ === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$)) {
	      handleForeignThenable(promise, maybeThenable, then$$);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}
	
	function _resolve(promise, value) {
	  if (promise === value) {
	    _reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}
	
	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }
	
	  publish(promise);
	}
	
	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	
	  promise._result = value;
	  promise._state = FULFILLED;
	
	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}
	
	function _reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;
	
	  asap(publishRejection, promise);
	}
	
	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;
	
	  parent._onerror = null;
	
	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;
	
	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}
	
	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;
	
	  if (subscribers.length === 0) {
	    return;
	  }
	
	  var child = undefined,
	      callback = undefined,
	      detail = promise._result;
	
	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];
	
	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }
	
	  promise._subscribers.length = 0;
	}
	
	function ErrorObject() {
	  this.error = null;
	}
	
	var TRY_CATCH_ERROR = new ErrorObject();
	
	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}
	
	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = undefined,
	      error = undefined,
	      succeeded = undefined,
	      failed = undefined;
	
	  if (hasCallback) {
	    value = tryCatch(callback, detail);
	
	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value = null;
	    } else {
	      succeeded = true;
	    }
	
	    if (promise === value) {
	      _reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }
	
	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	}
	
	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      _resolve(promise, value);
	    }, function rejectPromise(reason) {
	      _reject(promise, reason);
	    });
	  } catch (e) {
	    _reject(promise, e);
	  }
	}
	
	var id = 0;
	function nextId() {
	  return id++;
	}
	
	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}
	
	function Enumerator(Constructor, input) {
	  this._instanceConstructor = Constructor;
	  this.promise = new Constructor(noop);
	
	  if (!this.promise[PROMISE_ID]) {
	    makePromise(this.promise);
	  }
	
	  if (isArray(input)) {
	    this._input = input;
	    this.length = input.length;
	    this._remaining = input.length;
	
	    this._result = new Array(this.length);
	
	    if (this.length === 0) {
	      fulfill(this.promise, this._result);
	    } else {
	      this.length = this.length || 0;
	      this._enumerate();
	      if (this._remaining === 0) {
	        fulfill(this.promise, this._result);
	      }
	    }
	  } else {
	    _reject(this.promise, validationError());
	  }
	}
	
	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	};
	
	Enumerator.prototype._enumerate = function () {
	  var length = this.length;
	  var _input = this._input;
	
	  for (var i = 0; this._state === PENDING && i < length; i++) {
	    this._eachEntry(_input[i], i);
	  }
	};
	
	Enumerator.prototype._eachEntry = function (entry, i) {
	  var c = this._instanceConstructor;
	  var resolve$$ = c.resolve;
	
	  if (resolve$$ === resolve) {
	    var _then = getThen(entry);
	
	    if (_then === then && entry._state !== PENDING) {
	      this._settledAt(entry._state, i, entry._result);
	    } else if (typeof _then !== 'function') {
	      this._remaining--;
	      this._result[i] = entry;
	    } else if (c === Promise) {
	      var promise = new c(noop);
	      handleMaybeThenable(promise, entry, _then);
	      this._willSettleAt(promise, i);
	    } else {
	      this._willSettleAt(new c(function (resolve$$) {
	        return resolve$$(entry);
	      }), i);
	    }
	  } else {
	    this._willSettleAt(resolve$$(entry), i);
	  }
	};
	
	Enumerator.prototype._settledAt = function (state, i, value) {
	  var promise = this.promise;
	
	  if (promise._state === PENDING) {
	    this._remaining--;
	
	    if (state === REJECTED) {
	      _reject(promise, value);
	    } else {
	      this._result[i] = value;
	    }
	  }
	
	  if (this._remaining === 0) {
	    fulfill(promise, this._result);
	  }
	};
	
	Enumerator.prototype._willSettleAt = function (promise, i) {
	  var enumerator = this;
	
	  subscribe(promise, undefined, function (value) {
	    return enumerator._settledAt(FULFILLED, i, value);
	  }, function (reason) {
	    return enumerator._settledAt(REJECTED, i, reason);
	  });
	};
	
	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```
	
	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```
	
	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}
	
	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.
	
	  Example:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```
	
	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```
	
	  An example real-world use case is implementing timeouts:
	
	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```
	
	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}
	
	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  _reject(promise, reason);
	  return promise;
	}
	
	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}
	
	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}
	
	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.
	
	  Terminology
	  -----------
	
	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.
	
	  A promise can be in one of three states: pending, fulfilled, or rejected.
	
	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.
	
	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.
	
	
	  Basic Usage:
	  ------------
	
	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);
	
	    // on failure
	    reject(reason);
	  });
	
	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Advanced Usage:
	  ---------------
	
	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.
	
	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();
	
	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();
	
	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }
	
	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Unlike callbacks, promises are great composable primitives.
	
	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON
	
	    return values;
	  });
	  ```
	
	  @class Promise
	  @param {function} resolver
	  Useful for tooling.
	  @constructor
	*/
	function Promise(resolver) {
	  this[PROMISE_ID] = nextId();
	  this._result = this._state = undefined;
	  this._subscribers = [];
	
	  if (noop !== resolver) {
	    typeof resolver !== 'function' && needsResolver();
	    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	  }
	}
	
	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve;
	Promise.reject = reject;
	Promise._setScheduler = setScheduler;
	Promise._setAsap = setAsap;
	Promise._asap = asap;
	
	Promise.prototype = {
	  constructor: Promise,
	
	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we're unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfilled
	    @param {Function} onRejected
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,
	
	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn't find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': function _catch(onRejection) {
	    return this.then(null, onRejection);
	  }
	};
	
	function polyfill() {
	    var local = undefined;
	
	    if (typeof global !== 'undefined') {
	        local = global;
	    } else if (typeof self !== 'undefined') {
	        local = self;
	    } else {
	        try {
	            local = Function('return this')();
	        } catch (e) {
	            throw new Error('polyfill failed because global object is unavailable in this environment');
	        }
	    }
	
	    var P = local.Promise;
	
	    if (P) {
	        var promiseToString = null;
	        try {
	            promiseToString = Object.prototype.toString.call(P.resolve());
	        } catch (e) {
	            // silently ignored
	        }
	
	        if (promiseToString === '[object Promise]' && !P.cast) {
	            return;
	        }
	    }
	
	    local.Promise = Promise;
	}
	
	polyfill();
	// Strange compat..
	Promise.polyfill = polyfill;
	Promise.Promise = Promise;
	
	return Promise;
	
	})));
	//# sourceMappingURL=es6-promise.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), (function() { return this; }())))

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stringify = __webpack_require__(13);
	var Parse = __webpack_require__(15);
	
	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__(14);
	
	var arrayPrefixGenerators = {
	    brackets: function brackets(prefix) {
	        return prefix + '[]';
	    },
	    indices: function indices(prefix, key) {
	        return prefix + '[' + key + ']';
	    },
	    repeat: function repeat(prefix) {
	        return prefix;
	    }
	};
	
	var defaults = {
	    delimiter: '&',
	    strictNullHandling: false,
	    skipNulls: false,
	    encode: true,
	    encoder: Utils.encode
	};
	
	var stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots) {
	    var obj = object;
	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    } else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    } else if (obj === null) {
	        if (strictNullHandling) {
	            return encoder ? encoder(prefix) : prefix;
	        }
	
	        obj = '';
	    }
	
	    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || Utils.isBuffer(obj)) {
	        if (encoder) {
	            return [encoder(prefix) + '=' + encoder(obj)];
	        }
	        return [prefix + '=' + String(obj)];
	    }
	
	    var values = [];
	
	    if (typeof obj === 'undefined') {
	        return values;
	    }
	
	    var objKeys;
	    if (Array.isArray(filter)) {
	        objKeys = filter;
	    } else {
	        var keys = Object.keys(obj);
	        objKeys = sort ? keys.sort(sort) : keys;
	    }
	
	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];
	
	        if (skipNulls && obj[key] === null) {
	            continue;
	        }
	
	        if (Array.isArray(obj)) {
	            values = values.concat(stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots));
	        } else {
	            values = values.concat(stringify(obj[key], prefix + (allowDots ? '.' + key : '[' + key + ']'), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots));
	        }
	    }
	
	    return values;
	};
	
	module.exports = function (object, opts) {
	    var obj = object;
	    var options = opts || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
	    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
	    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
	    var encoder = encode ? (typeof options.encoder === 'function' ? options.encoder : defaults.encoder) : null;
	    var sort = typeof options.sort === 'function' ? options.sort : null;
	    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
	    var objKeys;
	    var filter;
	
	    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
	        throw new TypeError('Encoder has to be a function.');
	    }
	
	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    } else if (Array.isArray(options.filter)) {
	        objKeys = filter = options.filter;
	    }
	
	    var keys = [];
	
	    if (typeof obj !== 'object' || obj === null) {
	        return '';
	    }
	
	    var arrayFormat;
	    if (options.arrayFormat in arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    } else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    } else {
	        arrayFormat = 'indices';
	    }
	
	    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
	
	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }
	
	    if (sort) {
	        objKeys.sort(sort);
	    }
	
	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];
	
	        if (skipNulls && obj[key] === null) {
	            continue;
	        }
	
	        keys = keys.concat(stringify(obj[key], key, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots));
	    }
	
	    return keys.join(delimiter);
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	var hexTable = (function () {
	    var array = new Array(256);
	    for (var i = 0; i < 256; ++i) {
	        array[i] = '%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase();
	    }
	
	    return array;
	}());
	
	exports.arrayToObject = function (source, options) {
	    var obj = options.plainObjects ? Object.create(null) : {};
	    for (var i = 0; i < source.length; ++i) {
	        if (typeof source[i] !== 'undefined') {
	            obj[i] = source[i];
	        }
	    }
	
	    return obj;
	};
	
	exports.merge = function (target, source, options) {
	    if (!source) {
	        return target;
	    }
	
	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        } else if (typeof target === 'object') {
	            target[source] = true;
	        } else {
	            return [target, source];
	        }
	
	        return target;
	    }
	
	    if (typeof target !== 'object') {
	        return [target].concat(source);
	    }
	
	    var mergeTarget = target;
	    if (Array.isArray(target) && !Array.isArray(source)) {
	        mergeTarget = exports.arrayToObject(target, options);
	    }
	
	    return Object.keys(source).reduce(function (acc, key) {
	        var value = source[key];
	
	        if (Object.prototype.hasOwnProperty.call(acc, key)) {
	            acc[key] = exports.merge(acc[key], value, options);
	        } else {
	            acc[key] = value;
	        }
	        return acc;
	    }, mergeTarget);
	};
	
	exports.decode = function (str) {
	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};
	
	exports.encode = function (str) {
	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }
	
	    var string = typeof str === 'string' ? str : String(str);
	
	    var out = '';
	    for (var i = 0; i < string.length; ++i) {
	        var c = string.charCodeAt(i);
	
	        if (
	            c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A) // A-Z
	        ) {
	            out += string.charAt(i);
	            continue;
	        }
	
	        if (c < 0x80) {
	            out = out + hexTable[c];
	            continue;
	        }
	
	        if (c < 0x800) {
	            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }
	
	        if (c < 0xD800 || c >= 0xE000) {
	            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }
	
	        i += 1;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
	        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)];
	    }
	
	    return out;
	};
	
	exports.compact = function (obj, references) {
	    if (typeof obj !== 'object' || obj === null) {
	        return obj;
	    }
	
	    var refs = references || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }
	
	    refs.push(obj);
	
	    if (Array.isArray(obj)) {
	        var compacted = [];
	
	        for (var i = 0; i < obj.length; ++i) {
	            if (obj[i] && typeof obj[i] === 'object') {
	                compacted.push(exports.compact(obj[i], refs));
	            } else if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }
	
	        return compacted;
	    }
	
	    var keys = Object.keys(obj);
	    for (var j = 0; j < keys.length; ++j) {
	        var key = keys[j];
	        obj[key] = exports.compact(obj[key], refs);
	    }
	
	    return obj;
	};
	
	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};
	
	exports.isBuffer = function (obj) {
	    if (obj === null || typeof obj === 'undefined') {
	        return false;
	    }
	
	    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__(14);
	
	var has = Object.prototype.hasOwnProperty;
	
	var defaults = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000,
	    strictNullHandling: false,
	    plainObjects: false,
	    allowPrototypes: false,
	    allowDots: false,
	    decoder: Utils.decode
	};
	
	var parseValues = function parseValues(str, options) {
	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);
	
	    for (var i = 0; i < parts.length; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;
	
	        var key, val;
	        if (pos === -1) {
	            key = options.decoder(part);
	            val = options.strictNullHandling ? null : '';
	        } else {
	            key = options.decoder(part.slice(0, pos));
	            val = options.decoder(part.slice(pos + 1));
	        }
	        if (has.call(obj, key)) {
	            obj[key] = [].concat(obj[key]).concat(val);
	        } else {
	            obj[key] = val;
	        }
	    }
	
	    return obj;
	};
	
	var parseObject = function parseObject(chain, val, options) {
	    if (!chain.length) {
	        return val;
	    }
	
	    var root = chain.shift();
	
	    var obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(parseObject(chain, val, options));
	    } else {
	        obj = options.plainObjects ? Object.create(null) : {};
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        if (
	            !isNaN(index) &&
	            root !== cleanRoot &&
	            String(index) === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays && index <= options.arrayLimit)
	        ) {
	            obj = [];
	            obj[index] = parseObject(chain, val, options);
	        } else {
	            obj[cleanRoot] = parseObject(chain, val, options);
	        }
	    }
	
	    return obj;
	};
	
	var parseKeys = function parseKeys(givenKey, val, options) {
	    if (!givenKey) {
	        return;
	    }
	
	    // Transform dot notation to bracket notation
	    var key = options.allowDots ? givenKey.replace(/\.([^\.\[]+)/g, '[$1]') : givenKey;
	
	    // The regex chunks
	
	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;
	
	    // Get the parent
	
	    var segment = parent.exec(key);
	
	    // Stash the parent if it exists
	
	    var keys = [];
	    if (segment[1]) {
	        // If we aren't using plain objects, optionally prefix keys
	        // that would overwrite object prototype properties
	        if (!options.plainObjects && has.call(Object.prototype, segment[1])) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }
	
	        keys.push(segment[1]);
	    }
	
	    // Loop through children appending to the array until we hit depth
	
	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {
	        i += 1;
	        if (!options.plainObjects && has.call(Object.prototype, segment[1].replace(/\[|\]/g, ''))) {
	            if (!options.allowPrototypes) {
	                continue;
	            }
	        }
	        keys.push(segment[1]);
	    }
	
	    // If there's a remainder, just add whatever is left
	
	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }
	
	    return parseObject(keys, val, options);
	};
	
	module.exports = function (str, opts) {
	    var options = opts || {};
	
	    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
	        throw new TypeError('Decoder has to be a function.');
	    }
	
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
	    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
	    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
	    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	
	    if (str === '' || str === null || typeof str === 'undefined') {
	        return options.plainObjects ? Object.create(null) : {};
	    }
	
	    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
	    var obj = options.plainObjects ? Object.create(null) : {};
	
	    // Iterate over the keys and setup the new object
	
	    var keys = Object.keys(tempObj);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var newObj = parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj, options);
	    }
	
	    return Utils.compact(obj);
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*!
	 * @name JavaScript/NodeJS Merge v1.2.0
	 * @author yeikos
	 * @repository https://github.com/yeikos/js.merge
	
	 * Copyright 2014 yeikos - MIT license
	 * https://raw.github.com/yeikos/js.merge/master/LICENSE
	 */
	
	;(function(isNode) {
	
		/**
		 * Merge one or more objects 
		 * @param bool? clone
		 * @param mixed,... arguments
		 * @return object
		 */
	
		var Public = function(clone) {
	
			return merge(clone === true, false, arguments);
	
		}, publicName = 'merge';
	
		/**
		 * Merge two or more objects recursively 
		 * @param bool? clone
		 * @param mixed,... arguments
		 * @return object
		 */
	
		Public.recursive = function(clone) {
	
			return merge(clone === true, true, arguments);
	
		};
	
		/**
		 * Clone the input removing any reference
		 * @param mixed input
		 * @return mixed
		 */
	
		Public.clone = function(input) {
	
			var output = input,
				type = typeOf(input),
				index, size;
	
			if (type === 'array') {
	
				output = [];
				size = input.length;
	
				for (index=0;index<size;++index)
	
					output[index] = Public.clone(input[index]);
	
			} else if (type === 'object') {
	
				output = {};
	
				for (index in input)
	
					output[index] = Public.clone(input[index]);
	
			}
	
			return output;
	
		};
	
		/**
		 * Merge two objects recursively
		 * @param mixed input
		 * @param mixed extend
		 * @return mixed
		 */
	
		function merge_recursive(base, extend) {
	
			if (typeOf(base) !== 'object')
	
				return extend;
	
			for (var key in extend) {
	
				if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {
	
					base[key] = merge_recursive(base[key], extend[key]);
	
				} else {
	
					base[key] = extend[key];
	
				}
	
			}
	
			return base;
	
		}
	
		/**
		 * Merge two or more objects
		 * @param bool clone
		 * @param bool recursive
		 * @param array argv
		 * @return object
		 */
	
		function merge(clone, recursive, argv) {
	
			var result = argv[0],
				size = argv.length;
	
			if (clone || typeOf(result) !== 'object')
	
				result = {};
	
			for (var index=0;index<size;++index) {
	
				var item = argv[index],
	
					type = typeOf(item);
	
				if (type !== 'object') continue;
	
				for (var key in item) {
	
					var sitem = clone ? Public.clone(item[key]) : item[key];
	
					if (recursive) {
	
						result[key] = merge_recursive(result[key], sitem);
	
					} else {
	
						result[key] = sitem;
	
					}
	
				}
	
			}
	
			return result;
	
		}
	
		/**
		 * Get type of variable
		 * @param mixed input
		 * @return string
		 *
		 * @see http://jsperf.com/typeofvar
		 */
	
		function typeOf(input) {
	
			return ({}).toString.call(input).slice(8, -1).toLowerCase();
	
		}
	
		if (isNode) {
	
			module.exports = Public;
	
		} else {
	
			window[publicName] = Public;
	
		}
	
	})(typeof module === 'object' && module && typeof module.exports === 'object' && module.exports);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Form"] = __webpack_require__(19);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Form = function (_SilverStripeComponen) {
	  _inherits(Form, _SilverStripeComponen);
	
	  function Form(props) {
	    _classCallCheck(this, Form);
	
	    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
	
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }
	
	  _createClass(Form, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (typeof this.props.componentWillUnmount === 'undefined') {
	        return;
	      }
	
	      this.props.componentWillUnmount(this.props.formId);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var defaultFormProps = {
	        className: 'form',
	        onSubmit: this.handleSubmit
	      };
	      var formProps = _extends({}, defaultFormProps, this.props.attributes);
	      var fields = this.props.mapFieldsToComponents(this.props.fields);
	      var actions = this.props.mapActionsToComponents(this.props.actions);
	
	      return _react2.default.createElement(
	        'form',
	        formProps,
	        fields && _react2.default.createElement(
	          'fieldset',
	          null,
	          fields
	        ),
	        actions && _react2.default.createElement(
	          'div',
	          { className: 'btn-toolbar', role: 'group' },
	          actions
	        )
	      );
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(event) {
	      if (typeof this.props.handleSubmit === 'undefined') {
	        return;
	      }
	
	      this.props.handleSubmit(event);
	    }
	  }]);
	
	  return Form;
	}(_SilverStripeComponent2.default);
	
	Form.propTypes = {
	  actions: _react2.default.PropTypes.array,
	  attributes: _react2.default.PropTypes.shape({
	    action: _react2.default.PropTypes.string.isRequired,
	    className: _react2.default.PropTypes.string,
	    encType: _react2.default.PropTypes.string,
	    id: _react2.default.PropTypes.string,
	    method: _react2.default.PropTypes.string.isRequired
	  }),
	  componentWillUnmount: _react2.default.PropTypes.func,
	  data: _react2.default.PropTypes.array,
	  fields: _react2.default.PropTypes.array.isRequired,
	  formId: _react2.default.PropTypes.string.isRequired,
	  handleSubmit: _react2.default.PropTypes.func,
	  mapActionsToComponents: _react2.default.PropTypes.func.isRequired,
	  mapFieldsToComponents: _react2.default.PropTypes.func.isRequired
	};
	
	exports.default = Form;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = SilverStripeComponent;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["FormConstants"] = __webpack_require__(22);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  CSRF_HEADER: 'X-SecurityID' };

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["FormAction"] = __webpack_require__(24);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FormAction = function (_SilverStripeComponen) {
	  _inherits(FormAction, _SilverStripeComponen);
	
	  function FormAction(props) {
	    _classCallCheck(this, FormAction);
	
	    var _this = _possibleConstructorReturn(this, (FormAction.__proto__ || Object.getPrototypeOf(FormAction)).call(this, props));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(FormAction, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'button',
	        this.getButtonProps(),
	        this.getLoadingIcon(),
	        _react2.default.createElement(
	          'span',
	          null,
	          this.props.title
	        )
	      );
	    }
	  }, {
	    key: 'getButtonProps',
	    value: function getButtonProps() {
	      return _extends({}, typeof this.props.attributes === 'undefined' ? {} : this.props.attributes, {
	        id: this.props.id,
	        className: this.getButtonClasses(),
	        disabled: this.props.disabled,
	        onClick: this.handleClick
	      });
	    }
	  }, {
	    key: 'getButtonClasses',
	    value: function getButtonClasses() {
	      var buttonClasses = ['btn'];
	
	      var style = this.getButtonStyle();
	      if (style) {
	        buttonClasses.push('btn-' + style);
	      }
	
	      if (typeof this.props.title !== 'string') {
	        buttonClasses.push('btn--no-text');
	      }
	
	      var icon = this.getIcon();
	      if (icon) {
	        buttonClasses.push('font-icon-' + icon);
	      }
	
	      if (this.props.loading) {
	        buttonClasses.push('btn--loading');
	      }
	
	      if (this.props.disabled) {
	        buttonClasses.push('disabled');
	      }
	
	      if (typeof this.props.extraClass === 'string') {
	        buttonClasses.push(this.props.extraClass);
	      }
	
	      return buttonClasses.join(' ');
	    }
	  }, {
	    key: 'getButtonStyle',
	    value: function getButtonStyle() {
	      if (typeof this.props.data.buttonStyle !== 'undefined') {
	        return this.props.data.buttonStyle;
	      }
	
	      var extraClasses = this.props.extraClass.split(' ');
	
	      if (extraClasses.find(function (className) {
	        return className.indexOf('btn-') > -1;
	      })) {
	        return null;
	      }
	
	      if (this.props.name === 'action_save' || extraClasses.find(function (className) {
	        return className === 'ss-ui-action-constructive';
	      })) {
	        return 'primary';
	      }
	
	      return 'secondary';
	    }
	  }, {
	    key: 'getIcon',
	    value: function getIcon() {
	      return this.props.icon || this.props.data.icon || null;
	    }
	  }, {
	    key: 'getLoadingIcon',
	    value: function getLoadingIcon() {
	      if (this.props.loading) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'btn__loading-icon' },
	          _react2.default.createElement('span', { className: 'btn__circle btn__circle--1' }),
	          _react2.default.createElement('span', { className: 'btn__circle btn__circle--2' }),
	          _react2.default.createElement('span', { className: 'btn__circle btn__circle--3' })
	        );
	      }
	
	      return null;
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      if (typeof this.props.handleClick === 'function') {
	        this.props.handleClick(event, this.props.name || this.props.id);
	      }
	    }
	  }]);
	
	  return FormAction;
	}(_SilverStripeComponent2.default);
	
	FormAction.propTypes = {
	  id: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string,
	  handleClick: _react2.default.PropTypes.func,
	  title: _react2.default.PropTypes.string,
	  type: _react2.default.PropTypes.string,
	  loading: _react2.default.PropTypes.bool,
	  icon: _react2.default.PropTypes.string,
	  disabled: _react2.default.PropTypes.bool,
	  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.shape({
	    buttonStyle: _react2.default.PropTypes.string
	  })]),
	  extraClass: _react2.default.PropTypes.string,
	  attributes: _react2.default.PropTypes.object
	};
	
	FormAction.defaultProps = {
	  title: '',
	  icon: '',
	  extraClass: '',
	  attributes: {},
	  data: {},
	  disabled: false
	};
	
	exports.default = FormAction;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["FormBuilder"] = __webpack_require__(26);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FormBuilderComponent = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(27);
	
	var _redux = __webpack_require__(28);
	
	var _FormActions = __webpack_require__(29);
	
	var formActions = _interopRequireWildcard(_FormActions);
	
	var _SchemaActions = __webpack_require__(31);
	
	var schemaActions = _interopRequireWildcard(_SchemaActions);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _Form = __webpack_require__(19);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _isomorphicFetch = __webpack_require__(7);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _Backend = __webpack_require__(33);
	
	var _Backend2 = _interopRequireDefault(_Backend);
	
	var _Injector = __webpack_require__(34);
	
	var _Injector2 = _interopRequireDefault(_Injector);
	
	var _merge = __webpack_require__(16);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	var _es6Promise = __webpack_require__(9);
	
	var _es6Promise2 = _interopRequireDefault(_es6Promise);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_es6Promise2.default.polyfill();
	
	var FormBuilderComponent = exports.FormBuilderComponent = function (_SilverStripeComponen) {
	  _inherits(FormBuilderComponent, _SilverStripeComponen);
	
	  function FormBuilderComponent(props) {
	    _classCallCheck(this, FormBuilderComponent);
	
	    var _this = _possibleConstructorReturn(this, (FormBuilderComponent.__proto__ || Object.getPrototypeOf(FormBuilderComponent)).call(this, props));
	
	    _this.formSchemaPromise = null;
	    _this.state = { isFetching: false };
	
	    _this.mapActionsToComponents = _this.mapActionsToComponents.bind(_this);
	    _this.mapFieldsToComponents = _this.mapFieldsToComponents.bind(_this);
	    _this.handleFieldUpdate = _this.handleFieldUpdate.bind(_this);
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    _this.handleAction = _this.handleAction.bind(_this);
	    _this.removeForm = _this.removeForm.bind(_this);
	    _this.getFormId = _this.getFormId.bind(_this);
	    _this.getFormSchema = _this.getFormSchema.bind(_this);
	    _this.findField = _this.findField.bind(_this);
	    return _this;
	  }
	
	  _createClass(FormBuilderComponent, [{
	    key: 'getFormSchema',
	    value: function getFormSchema() {
	      return this.props.schemas[this.props.schemaUrl];
	    }
	  }, {
	    key: 'getFormId',
	    value: function getFormId() {
	      var schema = this.getFormSchema();
	      if (schema) {
	        return schema.id;
	      }
	      return null;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.fetch();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.schemaUrl !== prevProps.schemaUrl) {
	        this.fetch();
	      }
	    }
	  }, {
	    key: 'fetch',
	    value: function fetch() {
	      var _this2 = this;
	
	      var schema = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	      var state = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	      var headerValues = [];
	
	      if (this.state.isFetching === true) {
	        return this.formSchemaPromise;
	      }
	
	      if (schema === true) {
	        headerValues.push('schema');
	      }
	
	      if (state === true) {
	        headerValues.push('state');
	      }
	
	      this.formSchemaPromise = (0, _isomorphicFetch2.default)(this.props.schemaUrl, {
	        headers: { 'X-FormSchema-Request': headerValues.join() },
	        credentials: 'same-origin'
	      }).then(function (response) {
	        return response.json();
	      }).then(function (json) {
	        var formSchema = _extends({}, { id: json.id, schema: json.schema });
	        var formState = _extends({}, json.state);
	
	        if (typeof formSchema.id !== 'undefined') {
	          (function () {
	            var defaultData = {
	              SecurityID: _this2.props.config.SecurityID
	            };
	
	            _this2.submitApi = function () {
	              var endPoint = _Backend2.default.createEndpointFetcher({
	                url: formSchema.schema.attributes.action,
	                method: formSchema.schema.attributes.method,
	                defaultData: defaultData
	              });
	
	              return endPoint.apply(undefined, arguments).then(function (response) {
	                if (response.schema) {
	                  var newSchema = _extends({}, { id: response.id, schema: response.schema });
	                  _this2.props.schemaActions.setSchema(newSchema);
	                }
	                return response;
	              });
	            };
	
	            _this2.props.schemaActions.setSchema(formSchema);
	          })();
	        }
	
	        if (typeof formState.id !== 'undefined') {
	          _this2.props.formActions.addForm(formState);
	        }
	      });
	
	      return this.formSchemaPromise;
	    }
	  }, {
	    key: 'handleFieldUpdate',
	    value: function handleFieldUpdate(event, updates, fn) {
	      if (typeof fn === 'function') {
	        fn(this.getFormId(), this.props.formActions.updateField);
	      } else {
	        this.props.formActions.updateField(this.getFormId(), updates);
	      }
	    }
	  }, {
	    key: 'handleAction',
	    value: function handleAction(event, submitAction) {
	      this.props.formActions.setSubmitAction(this.getFormId(), submitAction);
	      if (typeof this.props.handleAction === 'function') {
	        this.props.handleAction(event, submitAction, this.getFieldValues());
	      }
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(event) {
	      var _this3 = this;
	
	      var fieldValues = this.getFieldValues();
	
	      var submitFn = function submitFn() {
	        return _this3.props.formActions.submitForm(_this3.submitApi, _this3.getFormId(), fieldValues);
	      };
	
	      if (typeof this.props.handleSubmit !== 'undefined') {
	        return this.props.handleSubmit(event, fieldValues, submitFn);
	      }
	
	      event.preventDefault();
	      return submitFn();
	    }
	  }, {
	    key: 'getFieldValues',
	    value: function getFieldValues() {
	      var _this4 = this;
	
	      var schema = this.props.schemas[this.props.schemaUrl];
	
	      var fields = schema.state ? schema.state.fields : schema.schema.fields;
	
	      var action = this.getSubmitAction();
	      var values = {};
	      if (action) {
	        values[action] = 1;
	      }
	
	      return this.props.form[this.getFormId()].fields.reduce(function (prev, curr) {
	        var match = _this4.findField(fields, curr.id);
	        if (!match) {
	          return prev;
	        }
	
	        return _extends({}, prev, _defineProperty({}, match.name, curr.value));
	      }, values);
	    }
	  }, {
	    key: 'getSubmitAction',
	    value: function getSubmitAction() {
	      return this.props.form[this.getFormId()].submitAction;
	    }
	  }, {
	    key: 'findField',
	    value: function findField(fields, id) {
	      var result = null;
	      if (!fields) {
	        return result;
	      }
	
	      result = fields.find(function (field) {
	        return field.id === id;
	      });
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var field = _step.value;
	
	          if (result) {
	            break;
	          }
	          result = this.findField(field.children, id);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return result;
	    }
	  }, {
	    key: 'buildComponent',
	    value: function buildComponent(field) {
	      var extraProps = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	      var Component = field.component !== null ? _Injector2.default.getComponentByName(field.component) : _Injector2.default.getComponentByDataType(field.type);
	
	      if (Component === null) {
	        return null;
	      } else if (field.component !== null && Component === undefined) {
	        throw Error('Component not found in injector: ' + field.component);
	      }
	
	      var props = _extends({}, field, extraProps);
	
	      if (props.value === null) {
	        delete props.value;
	      }
	
	      var createFn = this.props.createFn;
	      if (typeof createFn === 'function') {
	        return createFn(Component, props);
	      }
	
	      return _react2.default.createElement(Component, _extends({ key: props.id }, props));
	    }
	  }, {
	    key: 'mapFieldsToComponents',
	    value: function mapFieldsToComponents(fields) {
	      var _this5 = this;
	
	      return fields.map(function (field) {
	        var extraProps = { onChange: _this5.handleFieldUpdate };
	
	        if (field.children) {
	          extraProps.children = _this5.mapFieldsToComponents(field.children);
	        }
	
	        return _this5.buildComponent(field, extraProps);
	      });
	    }
	  }, {
	    key: 'mapActionsToComponents',
	    value: function mapActionsToComponents(actions) {
	      var _this6 = this;
	
	      var form = this.props.form[this.getFormId()];
	
	      return actions.map(function (action) {
	        var loading = form && form.submitting && form.submitAction === action.name;
	
	        var extraProps = {
	          handleClick: _this6.handleAction,
	          loading: loading,
	          disabled: loading || action.disabled
	        };
	
	        if (action.children) {
	          extraProps.children = _this6.mapActionsToComponents(action.children);
	        }
	
	        return _this6.buildComponent(action, extraProps);
	      });
	    }
	  }, {
	    key: 'mergeFieldData',
	    value: function mergeFieldData(structure, state) {
	      if (typeof state === 'undefined') {
	        return structure;
	      }
	      return _merge2.default.recursive(true, structure, {
	        data: state.data,
	        source: state.source,
	        messages: state.messages,
	        valid: state.valid,
	        value: state.value
	      });
	    }
	  }, {
	    key: 'removeForm',
	    value: function removeForm(formId) {
	      this.props.formActions.removeForm(formId);
	    }
	  }, {
	    key: 'getFieldData',
	    value: function getFieldData(formFields, formState) {
	      var _this7 = this;
	
	      if (!formFields || !formState || !formState.fields) {
	        return formFields;
	      }
	
	      return formFields.map(function (field) {
	        var state = formState.fields.find(function (item) {
	          return item.id === field.id;
	        });
	        var data = _this7.mergeFieldData(field, state);
	
	        if (field.children) {
	          return _extends({}, data, {
	            children: _this7.getFieldData(field.children, formState)
	          });
	        }
	
	        return data;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var formId = this.getFormId();
	      if (!formId) {
	        return null;
	      }
	      var formSchema = this.getFormSchema();
	      var formState = this.props.form[formId];
	
	      if (!formSchema || !formSchema.schema) {
	        return null;
	      }
	
	      var attributes = _extends({}, formSchema.schema.attributes, {
	        className: formSchema.schema.attributes.class,
	        encType: formSchema.schema.attributes.enctype
	      });
	
	      delete attributes.class;
	      delete attributes.enctype;
	
	      var fieldData = this.getFieldData(formSchema.schema.fields, formState);
	      var actionData = this.getFieldData(formSchema.schema.actions, formState);
	
	      var formProps = {
	        actions: actionData,
	        attributes: attributes,
	        componentWillUnmount: this.removeForm,
	        data: formSchema.schema.data,
	        fields: fieldData,
	        formId: formId,
	        handleSubmit: this.handleSubmit,
	        mapActionsToComponents: this.mapActionsToComponents,
	        mapFieldsToComponents: this.mapFieldsToComponents
	      };
	
	      return _react2.default.createElement(_Form2.default, formProps);
	    }
	  }]);
	
	  return FormBuilderComponent;
	}(_SilverStripeComponent2.default);
	
	FormBuilderComponent.propTypes = {
	  config: _react2.default.PropTypes.object,
	  createFn: _react2.default.PropTypes.func,
	  form: _react2.default.PropTypes.object.isRequired,
	  formActions: _react2.default.PropTypes.object.isRequired,
	  handleSubmit: _react2.default.PropTypes.func,
	  handleAction: _react2.default.PropTypes.func,
	  schemas: _react2.default.PropTypes.object.isRequired,
	  schemaActions: _react2.default.PropTypes.object.isRequired,
	  schemaUrl: _react2.default.PropTypes.string.isRequired
	};
	
	function mapStateToProps(state) {
	  return {
	    config: state.config,
	    form: state.form,
	    schemas: state.schemas
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return {
	    formActions: (0, _redux.bindActionCreators)(formActions, dispatch),
	    schemaActions: (0, _redux.bindActionCreators)(schemaActions, dispatch)
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FormBuilderComponent);

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = ReactRedux;

/***/ },
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.removeForm = removeForm;
	exports.updateField = updateField;
	exports.addForm = addForm;
	exports.submitForm = submitForm;
	exports.setSubmitAction = setSubmitAction;
	
	var _FormActionTypes = __webpack_require__(30);
	
	function removeForm(formId) {
	  return function (dispatch) {
	    dispatch({
	      type: _FormActionTypes.ACTION_TYPES.REMOVE_FORM,
	      payload: { formId: formId }
	    });
	  };
	}
	
	function updateField(formId, updates) {
	  return function (dispatch) {
	    dispatch({
	      type: _FormActionTypes.ACTION_TYPES.UPDATE_FIELD,
	      payload: { formId: formId, updates: updates }
	    });
	  };
	}
	
	function addForm(formState) {
	  return function (dispatch) {
	    dispatch({
	      type: _FormActionTypes.ACTION_TYPES.ADD_FORM,
	      payload: { formState: formState }
	    });
	  };
	}
	
	function submitForm(submitApi, formId, fieldValues) {
	  return function (dispatch) {
	    var headers = {
	      'X-Formschema-Request': 'schema,state',
	      'X-Requested-With': 'XMLHttpRequest'
	    };
	    dispatch({
	      type: _FormActionTypes.ACTION_TYPES.SUBMIT_FORM_REQUEST,
	      payload: { formId: formId }
	    });
	
	    return submitApi(_extends({ ID: formId }, fieldValues), headers).then(function (response) {
	      dispatch({
	        type: _FormActionTypes.ACTION_TYPES.SUBMIT_FORM_SUCCESS,
	        payload: { response: response }
	      });
	      return response;
	    }).catch(function (error) {
	      throw error.response.text().then(function (errorText) {
	        dispatch({
	          type: _FormActionTypes.ACTION_TYPES.SUBMIT_FORM_FAILURE,
	          payload: { formId: formId, error: errorText }
	        });
	        return errorText;
	      });
	    });
	  };
	}
	
	function setSubmitAction(formId, submitAction) {
	  return function (dispatch) {
	    dispatch({
	      type: _FormActionTypes.ACTION_TYPES.SET_SUBMIT_ACTION,
	      payload: { formId: formId, submitAction: submitAction }
	    });
	  };
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ACTION_TYPES = exports.ACTION_TYPES = {
	  ADD_FORM: 'ADD_FORM',
	  REMOVE_FORM: 'REMOVE_FORM',
	  SUBMIT_FORM_FAILURE: 'SUBMIT_FORM_FAILURE',
	  SUBMIT_FORM_REQUEST: 'SUBMIT_FORM_REQUEST',
	  SUBMIT_FORM_SUCCESS: 'SUBMIT_FORM_SUCCESS',
	  UPDATE_FIELD: 'UPDATE_FIELD',
	  SET_SUBMIT_ACTION: 'SET_SUBMIT_ACTION'
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setSchema = setSchema;
	
	var _SchemaActionTypes = __webpack_require__(32);
	
	var _SchemaActionTypes2 = _interopRequireDefault(_SchemaActionTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function setSchema(schema) {
	  return {
	    type: _SchemaActionTypes2.default.SET_SCHEMA,
	    payload: schema
	  };
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ACTION_TYPES = {
	  SET_SCHEMA: 'SET_SCHEMA'
	};
	
	exports.default = ACTION_TYPES;

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = Backend;

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Injector = function () {
	  function Injector() {
	    _classCallCheck(this, Injector);
	
	    this.components = {};
	  }
	
	  _createClass(Injector, [{
	    key: 'getComponentByName',
	    value: function getComponentByName(componentName) {
	      return this.components[componentName];
	    }
	  }, {
	    key: 'getComponentByDataType',
	    value: function getComponentByDataType(dataType) {
	      switch (dataType) {
	        case 'Text':
	        case 'DateTime':
	          return this.components.TextField;
	        case 'Hidden':
	          return this.components.HiddenField;
	        case 'SingleSelect':
	          return this.components.SingleSelectField;
	        case 'Custom':
	          return this.components.GridField;
	        case 'Structural':
	          return this.components.CompositeField;
	        case 'Boolean':
	          return this.components.CheckboxField;
	        case 'MultiSelect':
	          return this.components.CheckboxSetField;
	        default:
	          return null;
	      }
	    }
	  }, {
	    key: 'register',
	    value: function register(name, component) {
	      this.components[name] = component;
	    }
	  }]);
	
	  return Injector;
	}();
	
	window.ss = window.ss || {};
	window.ss.injector = window.ss.injector || new Injector();
	
	exports.default = window.ss.injector;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["FormBuilderModal"] = __webpack_require__(36);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrapSs = __webpack_require__(37);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _FormBuilder = __webpack_require__(38);
	
	var _FormBuilder2 = _interopRequireDefault(_FormBuilder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FormBuilderModal = function (_SilverStripeComponen) {
	  _inherits(FormBuilderModal, _SilverStripeComponen);
	
	  function FormBuilderModal(props) {
	    _classCallCheck(this, FormBuilderModal);
	
	    var _this = _possibleConstructorReturn(this, (FormBuilderModal.__proto__ || Object.getPrototypeOf(FormBuilderModal)).call(this, props));
	
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    _this.handleHide = _this.handleHide.bind(_this);
	    _this.clearResponse = _this.clearResponse.bind(_this);
	    return _this;
	  }
	
	  _createClass(FormBuilderModal, [{
	    key: 'getForm',
	    value: function getForm() {
	      return _react2.default.createElement(_FormBuilder2.default, {
	        schemaUrl: this.props.schemaUrl,
	        handleSubmit: this.handleSubmit,
	        handleAction: this.props.handleAction
	      });
	    }
	  }, {
	    key: 'getResponse',
	    value: function getResponse() {
	      if (!this.state || !this.state.response) {
	        return null;
	      }
	
	      var className = '';
	
	      if (this.state.error) {
	        className = this.props.responseClassBad || 'response error';
	      } else {
	        className = this.props.responseClassGood || 'response good';
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: className },
	        _react2.default.createElement(
	          'span',
	          null,
	          this.state.response
	        )
	      );
	    }
	  }, {
	    key: 'clearResponse',
	    value: function clearResponse() {
	      this.setState({
	        response: null
	      });
	    }
	  }, {
	    key: 'handleHide',
	    value: function handleHide() {
	      this.clearResponse();
	      if (typeof this.props.handleHide === 'function') {
	        this.props.handleHide();
	      }
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(event, fieldValues, submitFn) {
	      var _this2 = this;
	
	      var promise = null;
	      if (typeof this.props.handleSubmit === 'function') {
	        promise = this.props.handleSubmit(event, fieldValues, submitFn);
	      } else {
	        event.preventDefault();
	        promise = submitFn();
	      }
	
	      if (promise) {
	        promise.then(function (response) {
	          _this2.setState({
	            response: response.message,
	            error: false
	          });
	          return response;
	        }).catch(function (errorPromise) {
	          errorPromise.then(function (errorText) {
	            _this2.setState({
	              response: errorText,
	              error: true
	            });
	          });
	        });
	      }
	      return promise;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var form = this.getForm();
	      var response = this.getResponse();
	
	      return _react2.default.createElement(
	        _reactBootstrapSs.Modal,
	        {
	          show: this.props.show,
	          onHide: this.handleHide,
	          className: this.props.className
	        },
	        this.props.title !== false && _react2.default.createElement(
	          _reactBootstrapSs.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrapSs.Modal.Title,
	            null,
	            this.props.title
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrapSs.Modal.Body,
	          { className: this.props.bodyClassName },
	          response,
	          form,
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return FormBuilderModal;
	}(_SilverStripeComponent2.default);
	
	FormBuilderModal.propTypes = {
	  show: _react2.default.PropTypes.bool,
	  title: _react2.default.PropTypes.string,
	  className: _react2.default.PropTypes.string,
	  bodyClassName: _react2.default.PropTypes.string,
	  handleHide: _react2.default.PropTypes.func,
	  schemaUrl: _react2.default.PropTypes.string,
	  handleSubmit: _react2.default.PropTypes.func,
	  handleAction: _react2.default.PropTypes.func,
	  responseClassGood: _react2.default.PropTypes.string,
	  responseClassBad: _react2.default.PropTypes.string
	};
	
	FormBuilderModal.defaultProps = {
	  show: false,
	  title: null
	};
	
	exports.default = FormBuilderModal;

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = ReactBootstrap;

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = FormBuilder;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["GridField"] = __webpack_require__(40);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(28);
	
	var _reactRedux = __webpack_require__(27);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _GridFieldTable = __webpack_require__(41);
	
	var _GridFieldTable2 = _interopRequireDefault(_GridFieldTable);
	
	var _GridFieldHeader = __webpack_require__(42);
	
	var _GridFieldHeader2 = _interopRequireDefault(_GridFieldHeader);
	
	var _GridFieldHeaderCell = __webpack_require__(44);
	
	var _GridFieldHeaderCell2 = _interopRequireDefault(_GridFieldHeaderCell);
	
	var _GridFieldRow = __webpack_require__(43);
	
	var _GridFieldRow2 = _interopRequireDefault(_GridFieldRow);
	
	var _GridFieldCell = __webpack_require__(45);
	
	var _GridFieldCell2 = _interopRequireDefault(_GridFieldCell);
	
	var _GridFieldAction = __webpack_require__(46);
	
	var _GridFieldAction2 = _interopRequireDefault(_GridFieldAction);
	
	var _FormConstants = __webpack_require__(22);
	
	var _FormConstants2 = _interopRequireDefault(_FormConstants);
	
	var _RecordsActions = __webpack_require__(47);
	
	var actions = _interopRequireWildcard(_RecordsActions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NotYetLoaded = {};
	
	var GridField = function (_SilverStripeComponen) {
	  _inherits(GridField, _SilverStripeComponen);
	
	  function GridField(props) {
	    _classCallCheck(this, GridField);
	
	    var _this = _possibleConstructorReturn(this, (GridField.__proto__ || Object.getPrototypeOf(GridField)).call(this, props));
	
	    _this.deleteRecord = _this.deleteRecord.bind(_this);
	    _this.editRecord = _this.editRecord.bind(_this);
	    return _this;
	  }
	
	  _createClass(GridField, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _get(GridField.prototype.__proto__ || Object.getPrototypeOf(GridField.prototype), 'componentDidMount', this).call(this);
	
	      var data = this.props.data;
	
	      this.props.actions.fetchRecords(data.recordType, data.collectionReadEndpoint.method, data.collectionReadEndpoint.url);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      if (this.props.records === NotYetLoaded) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          'Loading...'
	        );
	      }
	
	      if (!Object.getOwnPropertyNames(this.props.records).length) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          'No campaigns created yet.'
	        );
	      }
	
	      var actionPlaceholder = _react2.default.createElement('th', { key: 'holder', className: 'grid-field__action-placeholder' });
	      var headerCells = this.props.data.columns.map(function (column) {
	        return _react2.default.createElement(
	          _GridFieldHeaderCell2.default,
	          { key: '' + column.name },
	          column.name
	        );
	      });
	      var header = _react2.default.createElement(
	        _GridFieldHeader2.default,
	        null,
	        headerCells.concat(actionPlaceholder)
	      );
	      var rows = Object.keys(this.props.records).map(function (key) {
	        return _this2.createRow(_this2.props.records[key]);
	      });
	
	      return _react2.default.createElement(_GridFieldTable2.default, { header: header, rows: rows });
	    }
	  }, {
	    key: 'createRowActions',
	    value: function createRowActions(record) {
	      return _react2.default.createElement(
	        _GridFieldCell2.default,
	        { className: 'grid-field__cell--actions', key: 'Actions' },
	        _react2.default.createElement(_GridFieldAction2.default, {
	          icon: 'cog',
	          handleClick: this.editRecord,
	          record: record
	        }),
	        _react2.default.createElement(_GridFieldAction2.default, {
	          icon: 'cancel',
	          handleClick: this.deleteRecord,
	          record: record
	        })
	      );
	    }
	  }, {
	    key: 'createCell',
	    value: function createCell(record, column) {
	      var handleDrillDown = this.props.data.handleDrillDown;
	      var cellProps = {
	        className: handleDrillDown ? 'grid-field__cell--drillable' : '',
	        handleDrillDown: handleDrillDown ? function (event) {
	          return handleDrillDown(event, record);
	        } : null,
	        key: '' + column.name,
	        width: column.width
	      };
	      var val = column.field.split('.').reduce(function (a, b) {
	        return a[b];
	      }, record);
	
	      return _react2.default.createElement(
	        _GridFieldCell2.default,
	        cellProps,
	        val
	      );
	    }
	  }, {
	    key: 'createRow',
	    value: function createRow(record) {
	      var _this3 = this;
	
	      var rowProps = {
	        className: this.props.data.handleDrillDown ? 'grid-field__row--drillable' : '',
	        key: '' + record.ID
	      };
	      var cells = this.props.data.columns.map(function (column) {
	        return _this3.createCell(record, column);
	      });
	      var rowActions = this.createRowActions(record);
	
	      return _react2.default.createElement(
	        _GridFieldRow2.default,
	        rowProps,
	        cells,
	        rowActions
	      );
	    }
	  }, {
	    key: 'deleteRecord',
	    value: function deleteRecord(event, id) {
	      event.preventDefault();
	      var headers = {};
	      headers[_FormConstants2.default.CSRF_HEADER] = this.props.config.SecurityID;
	
	      this.props.actions.deleteRecord(this.props.data.recordType, id, this.props.data.itemDeleteEndpoint.method, this.props.data.itemDeleteEndpoint.url, headers);
	    }
	  }, {
	    key: 'editRecord',
	    value: function editRecord(event, id) {
	      event.preventDefault();
	
	      if (typeof this.props.data === 'undefined' || typeof this.props.data.handleEditRecord === 'undefined') {
	        return;
	      }
	
	      this.props.data.handleEditRecord(event, id);
	    }
	  }]);
	
	  return GridField;
	}(_SilverStripeComponent2.default);
	
	GridField.propTypes = {
	  data: _react2.default.PropTypes.shape({
	    recordType: _react2.default.PropTypes.string.isRequired,
	    headerColumns: _react2.default.PropTypes.array,
	    collectionReadEndpoint: _react2.default.PropTypes.object,
	    handleDrillDown: _react2.default.PropTypes.func,
	    handleEditRecord: _react2.default.PropTypes.func
	  })
	};
	
	function mapStateToProps(state, ownProps) {
	  var recordType = ownProps.data ? ownProps.data.recordType : null;
	  return {
	    config: state.config,
	    records: recordType && state.records[recordType] ? state.records[recordType] : NotYetLoaded
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(actions, dispatch)
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GridField);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GridFieldTable = function (_SilverStripeComponen) {
	  _inherits(GridFieldTable, _SilverStripeComponen);
	
	  function GridFieldTable() {
	    _classCallCheck(this, GridFieldTable);
	
	    return _possibleConstructorReturn(this, (GridFieldTable.__proto__ || Object.getPrototypeOf(GridFieldTable)).apply(this, arguments));
	  }
	
	  _createClass(GridFieldTable, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'grid-field' },
	        _react2.default.createElement(
	          'table',
	          { className: 'table table-hover grid-field__table' },
	          _react2.default.createElement(
	            'thead',
	            null,
	            this.generateHeader()
	          ),
	          _react2.default.createElement(
	            'tbody',
	            null,
	            this.generateRows()
	          )
	        )
	      );
	    }
	  }, {
	    key: 'generateHeader',
	    value: function generateHeader() {
	      if (typeof this.props.header !== 'undefined') {
	        return this.props.header;
	      }
	
	      if (typeof this.props.data !== 'undefined') {}
	
	      return null;
	    }
	  }, {
	    key: 'generateRows',
	    value: function generateRows() {
	      if (typeof this.props.rows !== 'undefined') {
	        return this.props.rows;
	      }
	
	      if (typeof this.props.data !== 'undefined') {}
	
	      return null;
	    }
	  }]);
	
	  return GridFieldTable;
	}(_SilverStripeComponent2.default);
	
	GridFieldTable.propTypes = {
	  data: _react2.default.PropTypes.object,
	  header: _react2.default.PropTypes.object,
	  rows: _react2.default.PropTypes.array
	};
	
	exports.default = GridFieldTable;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _GridFieldRow = __webpack_require__(43);
	
	var _GridFieldRow2 = _interopRequireDefault(_GridFieldRow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GridFieldHeader = function (_SilverStripeComponen) {
	  _inherits(GridFieldHeader, _SilverStripeComponen);
	
	  function GridFieldHeader() {
	    _classCallCheck(this, GridFieldHeader);
	
	    return _possibleConstructorReturn(this, (GridFieldHeader.__proto__ || Object.getPrototypeOf(GridFieldHeader)).apply(this, arguments));
	  }
	
	  _createClass(GridFieldHeader, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _GridFieldRow2.default,
	        null,
	        this.props.children
	      );
	    }
	  }]);
	
	  return GridFieldHeader;
	}(_SilverStripeComponent2.default);
	
	exports.default = GridFieldHeader;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GridFieldRow = function (_SilverStripeComponen) {
	  _inherits(GridFieldRow, _SilverStripeComponen);
	
	  function GridFieldRow() {
	    _classCallCheck(this, GridFieldRow);
	
	    return _possibleConstructorReturn(this, (GridFieldRow.__proto__ || Object.getPrototypeOf(GridFieldRow)).apply(this, arguments));
	  }
	
	  _createClass(GridFieldRow, [{
	    key: 'render',
	    value: function render() {
	      var className = 'grid-field__row ' + this.props.className;
	      return _react2.default.createElement(
	        'tr',
	        { tabIndex: '0', className: className },
	        this.props.children
	      );
	    }
	  }]);
	
	  return GridFieldRow;
	}(_SilverStripeComponent2.default);
	
	exports.default = GridFieldRow;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GridFieldHeaderCell = function (_SilverStripeComponen) {
	  _inherits(GridFieldHeaderCell, _SilverStripeComponen);
	
	  function GridFieldHeaderCell() {
	    _classCallCheck(this, GridFieldHeaderCell);
	
	    return _possibleConstructorReturn(this, (GridFieldHeaderCell.__proto__ || Object.getPrototypeOf(GridFieldHeaderCell)).apply(this, arguments));
	  }
	
	  _createClass(GridFieldHeaderCell, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'th',
	        null,
	        this.props.children
	      );
	    }
	  }]);
	
	  return GridFieldHeaderCell;
	}(_SilverStripeComponent2.default);
	
	GridFieldHeaderCell.PropTypes = {
	  width: _react2.default.PropTypes.number
	};
	
	exports.default = GridFieldHeaderCell;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GridFieldCell = function (_SilverStripeComponen) {
	  _inherits(GridFieldCell, _SilverStripeComponen);
	
	  function GridFieldCell(props) {
	    _classCallCheck(this, GridFieldCell);
	
	    var _this = _possibleConstructorReturn(this, (GridFieldCell.__proto__ || Object.getPrototypeOf(GridFieldCell)).call(this, props));
	
	    _this.handleDrillDown = _this.handleDrillDown.bind(_this);
	    return _this;
	  }
	
	  _createClass(GridFieldCell, [{
	    key: 'render',
	    value: function render() {
	      var classNames = ['grid-field__cell'];
	
	      if (typeof this.props.className !== 'undefined') {
	        classNames.push(this.props.className);
	      }
	
	      var props = {
	        className: classNames.join(' '),
	        onClick: this.handleDrillDown
	      };
	
	      return _react2.default.createElement(
	        'td',
	        props,
	        this.props.children
	      );
	    }
	  }, {
	    key: 'handleDrillDown',
	    value: function handleDrillDown(event) {
	      if (typeof this.props.handleDrillDown === 'undefined') {
	        return;
	      }
	
	      this.props.handleDrillDown(event);
	    }
	  }]);
	
	  return GridFieldCell;
	}(_SilverStripeComponent2.default);
	
	GridFieldCell.PropTypes = {
	  className: _react2.default.PropTypes.string,
	  width: _react2.default.PropTypes.number,
	  handleDrillDown: _react2.default.PropTypes.func
	};
	
	exports.default = GridFieldCell;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GridFieldAction = function (_SilverStripeComponen) {
	  _inherits(GridFieldAction, _SilverStripeComponen);
	
	  function GridFieldAction(props) {
	    _classCallCheck(this, GridFieldAction);
	
	    var _this = _possibleConstructorReturn(this, (GridFieldAction.__proto__ || Object.getPrototypeOf(GridFieldAction)).call(this, props));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(GridFieldAction, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('button', {
	        className: 'grid-field__icon-action font-icon-' + this.props.icon + ' btn--icon-large',
	        onClick: this.handleClick
	      });
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      this.props.handleClick(event, this.props.record.ID);
	    }
	  }]);
	
	  return GridFieldAction;
	}(_SilverStripeComponent2.default);
	
	GridFieldAction.PropTypes = {
	  handleClick: _react2.default.PropTypes.func.isRequired
	};
	
	exports.default = GridFieldAction;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchRecords = fetchRecords;
	exports.fetchRecord = fetchRecord;
	exports.deleteRecord = deleteRecord;
	
	var _RecordsActionTypes = __webpack_require__(48);
	
	var _RecordsActionTypes2 = _interopRequireDefault(_RecordsActionTypes);
	
	var _Backend = __webpack_require__(6);
	
	var _Backend2 = _interopRequireDefault(_Backend);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function populate(str, params) {
	  var names = ['id'];
	  return names.reduce(function (acc, name) {
	    return acc.replace(':' + name, params[name]);
	  }, str);
	}
	
	function fetchRecords(recordType, method, url) {
	  var payload = { recordType: recordType };
	  var headers = { Accept: 'text/json' };
	  var methodToLowerCase = method.toLowerCase();
	
	  return function (dispatch) {
	    dispatch({
	      type: _RecordsActionTypes2.default.FETCH_RECORDS_REQUEST,
	      payload: payload
	    });
	
	    var args = methodToLowerCase === 'get' ? [populate(url, payload), headers] : [populate(url, payload), {}, headers];
	
	    return _Backend2.default[methodToLowerCase].apply(_Backend2.default, args).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      dispatch({
	        type: _RecordsActionTypes2.default.FETCH_RECORDS_SUCCESS,
	        payload: { recordType: recordType, data: json }
	      });
	    }).catch(function (err) {
	      dispatch({
	        type: _RecordsActionTypes2.default.FETCH_RECORDS_FAILURE,
	        payload: { error: err, recordType: recordType }
	      });
	      throw err;
	    });
	  };
	}
	
	function fetchRecord(recordType, method, url) {
	  var payload = { recordType: recordType };
	  var headers = { Accept: 'text/json' };
	  var methodToLowerCase = method.toLowerCase();
	
	  return function (dispatch) {
	    dispatch({
	      type: _RecordsActionTypes2.default.FETCH_RECORD_REQUEST,
	      payload: payload
	    });
	
	    var args = methodToLowerCase === 'get' ? [populate(url, payload), headers] : [populate(url, payload), {}, headers];
	
	    return _Backend2.default[methodToLowerCase].apply(_Backend2.default, args).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      dispatch({
	        type: _RecordsActionTypes2.default.FETCH_RECORD_SUCCESS,
	        payload: { recordType: recordType, data: json }
	      });
	    }).catch(function (err) {
	      dispatch({
	        type: _RecordsActionTypes2.default.FETCH_RECORD_FAILURE,
	        payload: { error: err, recordType: recordType }
	      });
	      throw err;
	    });
	  };
	}
	
	function deleteRecord(recordType, id, method, url) {
	  var headers = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];
	
	  var payload = { recordType: recordType, id: id };
	  var methodToLowerCase = method.toLowerCase();
	  var args = methodToLowerCase === 'get' ? [populate(url, payload), headers] : [populate(url, payload), {}, headers];
	
	  return function (dispatch) {
	    dispatch({
	      type: _RecordsActionTypes2.default.DELETE_RECORD_REQUEST,
	      payload: payload
	    });
	    return _Backend2.default[methodToLowerCase].apply(_Backend2.default, args).then(function () {
	      dispatch({
	        type: _RecordsActionTypes2.default.DELETE_RECORD_SUCCESS,
	        payload: { recordType: recordType, id: id }
	      });
	    }).catch(function (err) {
	      dispatch({
	        type: _RecordsActionTypes2.default.DELETE_RECORD_FAILURE,
	        payload: { error: err, recordType: recordType, id: id }
	      });
	      throw err;
	    });
	  };
	}

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  CREATE_RECORD: 'CREATE_RECORD',
	  UPDATE_RECORD: 'UPDATE_RECORD',
	  DELETE_RECORD: 'DELETE_RECORD',
	  FETCH_RECORDS_REQUEST: 'FETCH_RECORDS_REQUEST',
	  FETCH_RECORDS_FAILURE: 'FETCH_RECORDS_FAILURE',
	  FETCH_RECORDS_SUCCESS: 'FETCH_RECORDS_SUCCESS',
	  FETCH_RECORD_REQUEST: 'FETCH_RECORD_REQUEST',
	  FETCH_RECORD_FAILURE: 'FETCH_RECORD_FAILURE',
	  FETCH_RECORD_SUCCESS: 'FETCH_RECORD_SUCCESS',
	  DELETE_RECORD_REQUEST: 'DELETE_RECORD_REQUEST',
	  DELETE_RECORD_FAILURE: 'DELETE_RECORD_FAILURE',
	  DELETE_RECORD_SUCCESS: 'DELETE_RECORD_SUCCESS'
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["GridFieldCell"] = __webpack_require__(45);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["GridFieldHeader"] = __webpack_require__(42);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["GridFieldHeaderCell"] = __webpack_require__(44);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["GridFieldRow"] = __webpack_require__(43);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["GridFieldTable"] = __webpack_require__(41);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["HiddenField"] = __webpack_require__(55);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _reactBootstrapSs = __webpack_require__(37);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HiddenField = function (_SilverStripeComponen) {
	  _inherits(HiddenField, _SilverStripeComponen);
	
	  function HiddenField() {
	    _classCallCheck(this, HiddenField);
	
	    return _possibleConstructorReturn(this, (HiddenField.__proto__ || Object.getPrototypeOf(HiddenField)).apply(this, arguments));
	  }
	
	  _createClass(HiddenField, [{
	    key: 'getInputProps',
	    value: function getInputProps() {
	      return {
	        bsClass: this.props.bsClass,
	        componentClass: 'input',
	        className: this.props.className + ' ' + this.props.extraClass,
	        id: this.props.id,
	        name: this.props.name,
	        type: 'hidden',
	        value: this.props.value
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_reactBootstrapSs.FormControl, this.getInputProps());
	    }
	  }]);
	
	  return HiddenField;
	}(_SilverStripeComponent2.default);
	
	HiddenField.propTypes = {
	  id: _react2.default.PropTypes.string,
	  extraClass: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string.isRequired,
	  value: _react2.default.PropTypes.any
	};
	
	HiddenField.defaultProps = {
	  className: '',
	  extraClass: '',
	  value: ''
	};
	
	exports.default = HiddenField;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["TextField"] = __webpack_require__(57);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TextField = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _FieldHolder = __webpack_require__(58);
	
	var _FieldHolder2 = _interopRequireDefault(_FieldHolder);
	
	var _reactBootstrapSs = __webpack_require__(37);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TextField = function (_SilverStripeComponen) {
	  _inherits(TextField, _SilverStripeComponen);
	
	  function TextField(props) {
	    _classCallCheck(this, TextField);
	
	    var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));
	
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(TextField, [{
	    key: 'render',
	    value: function render() {
	      var field = null;
	
	      if (this.props.readOnly) {
	        field = _react2.default.createElement(
	          _reactBootstrapSs.FormControl.Static,
	          this.getInputProps(),
	          this.props.value
	        );
	      } else {
	        field = _react2.default.createElement(_reactBootstrapSs.FormControl, this.getInputProps());
	      }
	
	      return field;
	    }
	  }, {
	    key: 'getInputProps',
	    value: function getInputProps() {
	      var props = {
	        bsClass: this.props.bsClass,
	        className: this.props.className + ' ' + this.props.extraClass,
	        id: this.props.id,
	        name: this.props.name,
	        disabled: this.props.disabled,
	        readOnly: this.props.readOnly
	      };
	
	      if (!this.props.readOnly) {
	        _extends(props, {
	          placeholder: this.props.placeholder,
	          onChange: this.handleChange,
	          value: this.props.value
	        });
	
	        if (this.isMultiline()) {
	          _extends(props, {
	            componentClass: 'textarea',
	            rows: this.props.data.rows,
	            cols: this.props.data.columns
	          });
	        } else {
	          _extends(props, {
	            componentClass: 'input',
	            type: this.props.type
	          });
	        }
	      }
	
	      return props;
	    }
	  }, {
	    key: 'isMultiline',
	    value: function isMultiline() {
	      return this.props.data && this.props.data.rows > 1;
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      if (typeof this.props.onChange === 'function') {
	        this.props.onChange(event, { id: this.props.id, value: event.target.value });
	      }
	    }
	  }]);
	
	  return TextField;
	}(_SilverStripeComponent2.default);
	
	TextField.propTypes = {
	  extraClass: _react2.default.PropTypes.string,
	  id: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string.isRequired,
	  onChange: _react2.default.PropTypes.func,
	  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	  readOnly: _react2.default.PropTypes.bool,
	  disabled: _react2.default.PropTypes.bool,
	  placeholder: _react2.default.PropTypes.string,
	  type: _react2.default.PropTypes.string
	};
	
	TextField.defaultProps = {
	  value: '',
	  extraClass: '',
	  className: '',
	  type: 'text'
	};
	
	exports.TextField = TextField;
	exports.default = (0, _FieldHolder2.default)(TextField);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _reactBootstrapSs = __webpack_require__(37);
	
	var _castStringToElement = __webpack_require__(59);
	
	var _castStringToElement2 = _interopRequireDefault(_castStringToElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function fieldHolder(Field) {
	  var FieldHolder = function (_SilverStripeComponen) {
	    _inherits(FieldHolder, _SilverStripeComponen);
	
	    function FieldHolder() {
	      _classCallCheck(this, FieldHolder);
	
	      return _possibleConstructorReturn(this, (FieldHolder.__proto__ || Object.getPrototypeOf(FieldHolder)).apply(this, arguments));
	    }
	
	    _createClass(FieldHolder, [{
	      key: 'getDescription',
	      value: function getDescription() {
	        if (this.props.description === null) {
	          return null;
	        }
	
	        return (0, _castStringToElement2.default)('div', this.props.description, { className: 'form__field-description' });
	      }
	    }, {
	      key: 'getLeftTitle',
	      value: function getLeftTitle() {
	        var labelText = this.props.leftTitle !== null ? this.props.leftTitle : this.props.title;
	
	        if (!labelText || this.props.hideLabels) {
	          return null;
	        }
	
	        return (0, _castStringToElement2.default)(_reactBootstrapSs.ControlLabel, labelText, { className: 'form__field-label' });
	      }
	    }, {
	      key: 'getRightTitle',
	      value: function getRightTitle() {
	        if (!this.props.rightTitle || this.props.hideLabels) {
	          return null;
	        }
	
	        return (0, _castStringToElement2.default)(_reactBootstrapSs.ControlLabel, this.props.rightTitle, { className: 'form__field-label' });
	      }
	    }, {
	      key: 'getHolderProps',
	      value: function getHolderProps() {
	        var classNames = ['field', this.props.extraClass];
	        if (this.props.readOnly) {
	          classNames.push('readonly');
	        }
	
	        return {
	          bsClass: this.props.bsClass,
	          bsSize: this.props.bsSize,
	          validationState: this.props.validationState,
	          className: classNames.join(' '),
	          controlId: this.props.id,
	          id: this.props.holderId
	        };
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(
	          _reactBootstrapSs.FormGroup,
	          this.getHolderProps(),
	          this.getLeftTitle(),
	          _react2.default.createElement(
	            'div',
	            { className: 'form__field-holder' },
	            _react2.default.createElement(Field, this.props)
	          ),
	          this.getRightTitle(),
	          this.getDescription()
	        );
	      }
	    }]);
	
	    return FieldHolder;
	  }(_SilverStripeComponent2.default);
	
	  FieldHolder.propTypes = {
	    leftTitle: _react2.default.PropTypes.any,
	    rightTitle: _react2.default.PropTypes.any,
	    title: _react2.default.PropTypes.any,
	    extraClass: _react2.default.PropTypes.string,
	    holderId: _react2.default.PropTypes.string,
	    id: _react2.default.PropTypes.string,
	    description: _react2.default.PropTypes.any,
	    hideLabels: _react2.default.PropTypes.bool
	  };
	
	  FieldHolder.defaultProps = {
	    className: '',
	    extraClass: '',
	    leftTitle: null,
	    rightTitle: null
	  };
	
	  FieldHolder.defaultProps = {
	    className: '',
	    extraClass: ''
	  };
	
	  return FieldHolder;
	}
	
	exports.default = fieldHolder;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = castStringToElement;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function castStringToElement(Container, value) {
	  var props = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  if (value && typeof value.html !== 'undefined') {
	    var html = { __html: value.html };
	    return _react2.default.createElement(Container, _extends({}, props, { dangerouslySetInnerHTML: html }));
	  }
	
	  var body = null;
	  if (value && typeof value.text !== 'undefined') {
	    body = value.text;
	  } else {
	    body = value;
	  }
	
	  if (body && (typeof body === 'undefined' ? 'undefined' : _typeof(body)) === 'object') {
	    throw new Error('Unsupported string value ' + JSON.stringify(body));
	  }
	
	  return _react2.default.createElement(
	    Container,
	    props,
	    body
	  );
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Toolbar"] = __webpack_require__(61);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Toolbar = function (_SilverStripeComponen) {
	  _inherits(Toolbar, _SilverStripeComponen);
	
	  function Toolbar(props) {
	    _classCallCheck(this, Toolbar);
	
	    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props));
	
	    _this.handleBackButtonClick = _this.handleBackButtonClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Toolbar, [{
	    key: 'render',
	    value: function render() {
	      var buttonClassNames = ['btn', 'btn-secondary', 'action', 'font-icon-left-open-big', 'toolbar__back-button', 'btn--no-text'];
	      var backButtonProps = {
	        className: buttonClassNames.join(' '),
	        onClick: this.handleBackButtonClick,
	        href: '#',
	        type: 'button'
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'toolbar toolbar--north' },
	        _react2.default.createElement(
	          'div',
	          { className: 'toolbar__navigation' },
	          this.props.showBackButton && _react2.default.createElement('button', backButtonProps),
	          this.props.children
	        )
	      );
	    }
	  }, {
	    key: 'handleBackButtonClick',
	    value: function handleBackButtonClick(event) {
	      if (typeof this.props.handleBackButtonClick !== 'undefined') {
	        this.props.handleBackButtonClick(event);
	        return;
	      }
	
	      event.preventDefault();
	    }
	  }]);
	
	  return Toolbar;
	}(_SilverStripeComponent2.default);
	
	Toolbar.propTypes = {
	  handleBackButtonClick: _react2.default.PropTypes.func,
	  showBackButton: _react2.default.PropTypes.bool,
	  breadcrumbs: _react2.default.PropTypes.array
	};
	
	Toolbar.defaultProps = {
	  showBackButton: false
	};
	
	exports.default = Toolbar;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Breadcrumb"] = __webpack_require__(63);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _reactRouter = __webpack_require__(64);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Breadcrumb = function (_SilverStripeComponen) {
	  _inherits(Breadcrumb, _SilverStripeComponen);
	
	  function Breadcrumb() {
	    _classCallCheck(this, Breadcrumb);
	
	    return _possibleConstructorReturn(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).apply(this, arguments));
	  }
	
	  _createClass(Breadcrumb, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'ol',
	        { className: 'breadcrumb' },
	        this.getBreadcrumbs()
	      );
	    }
	  }, {
	    key: 'getBreadcrumbs',
	    value: function getBreadcrumbs() {
	      if (typeof this.props.crumbs === 'undefined') {
	        return null;
	      }
	
	      return [].concat(this.props.crumbs.slice(0, -1).map(function (crumb, index) {
	        return [_react2.default.createElement(
	          'li',
	          { className: 'breadcrumb__item' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { key: index, className: 'breadcrumb__item-title', to: crumb.href },
	            crumb.text
	          )
	        )];
	      }), this.props.crumbs.slice(-1).map(function (crumb, index) {
	        var iconClassNames = ['breadcrumb__icon', crumb.icon ? crumb.icon.className : ''].join(' ');
	
	        return [_react2.default.createElement(
	          'li',
	          { className: 'breadcrumb__item breadcrumb__item--last' },
	          _react2.default.createElement(
	            'h2',
	            { className: 'breadcrumb__item-title breadcrumb__item-title--last', key: index },
	            crumb.text,
	            crumb.icon && _react2.default.createElement('span', { className: iconClassNames, onClick: crumb.icon.action })
	          )
	        )];
	      }));
	    }
	  }]);
	
	  return Breadcrumb;
	}(_SilverStripeComponent2.default);
	
	Breadcrumb.propTypes = {
	  crumbs: _react2.default.PropTypes.array
	};
	
	exports.default = Breadcrumb;

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["BreadcrumbsActions"] = __webpack_require__(66);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setBreadcrumbs = setBreadcrumbs;
	
	var _BreadcrumbsActionTypes = __webpack_require__(67);
	
	var _BreadcrumbsActionTypes2 = _interopRequireDefault(_BreadcrumbsActionTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function setBreadcrumbs(breadcrumbs) {
	  return {
	    type: _BreadcrumbsActionTypes2.default.SET_BREADCRUMBS,
	    payload: { breadcrumbs: breadcrumbs }
	  };
	}

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  SET_BREADCRUMBS: 'SET_BREADCRUMBS'
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Config"] = __webpack_require__(69);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Config = function () {
	  function Config() {
	    _classCallCheck(this, Config);
	  }
	
	  _createClass(Config, null, [{
	    key: "get",
	    value: function get(key) {
	      return window.ss.config[key];
	    }
	  }, {
	    key: "getAll",
	    value: function getAll() {
	      return window.ss.config;
	    }
	  }, {
	    key: "getSection",
	    value: function getSection(key) {
	      return window.ss.config.sections[key];
	    }
	  }]);
	
	  return Config;
	}();
	
	exports.default = Config;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["ReducerRegister"] = __webpack_require__(71);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 71 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var register = {};
	
	var ReducerRegister = function () {
	  function ReducerRegister() {
	    _classCallCheck(this, ReducerRegister);
	  }
	
	  _createClass(ReducerRegister, [{
	    key: 'add',
	    value: function add(key, reducer) {
	      if (typeof register[key] !== 'undefined') {
	        throw new Error('Reducer already exists at \'' + key + '\'');
	      }
	
	      register[key] = reducer;
	    }
	  }, {
	    key: 'getAll',
	    value: function getAll() {
	      return register;
	    }
	  }, {
	    key: 'getByKey',
	    value: function getByKey(key) {
	      return register[key];
	    }
	  }, {
	    key: 'remove',
	    value: function remove(key) {
	      delete register[key];
	    }
	  }]);
	
	  return ReducerRegister;
	}();
	
	window.ss = window.ss || {};
	window.ss.reducerRegister = window.ss.reducerRegister || new ReducerRegister();
	
	exports.default = window.ss.reducerRegister;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["ReactRouteRegister"] = __webpack_require__(73);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 73 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ReactRouteRegister = function () {
	  function ReactRouteRegister() {
	    _classCallCheck(this, ReactRouteRegister);
	
	    this.reset();
	  }
	
	  _createClass(ReactRouteRegister, [{
	    key: 'reset',
	    value: function reset() {
	      var _this = this;
	
	      this.childRoutes = [];
	      this.rootRoute = {
	        path: '/',
	
	        getChildRoutes: function getChildRoutes(location, cb) {
	          cb(null, _this.childRoutes);
	        }
	      };
	    }
	  }, {
	    key: 'updateRootRoute',
	    value: function updateRootRoute(route) {
	      this.rootRoute = _extends({}, this.rootRoute, route);
	    }
	  }, {
	    key: 'add',
	    value: function add(route) {
	      var parentPaths = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	      var childRoutes = this.findChildRoute(parentPaths);
	
	      var newRoute = _extends({}, { childRoutes: [] }, route);
	
	      var splatRoute = newRoute.childRoutes[newRoute.childRoutes.length - 1];
	      if (!splatRoute || splatRoute.path !== '**') {
	        splatRoute = { path: '**' };
	        newRoute.childRoutes.push(splatRoute);
	      }
	
	      var newRouteIndex = childRoutes.findIndex(function (childRoute) {
	        return childRoute.path === route.path;
	      });
	      if (newRouteIndex >= 0) {
	        childRoutes[newRouteIndex] = newRoute;
	      } else {
	        childRoutes.unshift(newRoute);
	      }
	    }
	  }, {
	    key: 'findChildRoute',
	    value: function findChildRoute(parentPaths) {
	      var childRoutes = this.childRoutes;
	
	      if (parentPaths) {
	        parentPaths.forEach(function (path) {
	          var nextParent = childRoutes.find(function (childRoute) {
	            return childRoute.path === path;
	          });
	          if (!nextParent) {
	            throw new Error('Parent path ' + path + ' could not be found.');
	          }
	          childRoutes = nextParent.childRoutes;
	        });
	      }
	
	      return childRoutes;
	    }
	  }, {
	    key: 'getRootRoute',
	    value: function getRootRoute() {
	      return this.rootRoute;
	    }
	  }, {
	    key: 'getChildRoutes',
	    value: function getChildRoutes() {
	      return this.childRoutes;
	    }
	  }, {
	    key: 'remove',
	    value: function remove(path) {
	      var parentPaths = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	      var childRoutes = this.findChildRoute(parentPaths);
	      var routeIndex = childRoutes.findIndex(function (childRoute) {
	        return childRoute.path === path;
	      });
	      if (routeIndex < 0) {
	        return null;
	      }
	
	      return childRoutes.splice(routeIndex, 1)[0];
	    }
	  }]);
	
	  return ReactRouteRegister;
	}();
	
	window.ss = window.ss || {};
	window.ss.routeRegister = window.ss.routeRegister || new ReactRouteRegister();
	
	exports.default = window.ss.routeRegister;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Injector"] = __webpack_require__(34);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Router"] = __webpack_require__(76);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _page = __webpack_require__(77);
	
	var _page2 = _interopRequireDefault(_page);
	
	var _url = __webpack_require__(78);
	
	var _url2 = _interopRequireDefault(_url);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function resolveURLToBase(path) {
	  var absoluteBase = _page2.default.getAbsoluteBase();
	  var absolutePath = _url2.default.resolve(absoluteBase, path);
	
	  if (absolutePath.indexOf(absoluteBase) !== 0) {
	    return absolutePath;
	  }
	
	  return absolutePath.substring(absoluteBase.length - 1);
	}
	
	function show(pageShow) {
	  return function (path, state, dispatch, push) {
	    return pageShow(_page2.default.resolveURLToBase(path), state, dispatch, push);
	  };
	}
	
	function routeAppliesToCurrentLocation(route) {
	  var r = new _page2.default.Route(route);
	  return r.match(_page2.default.current, {});
	}
	
	function getAbsoluteBase() {
	  return _page2.default.absoluteBaseURL;
	}
	
	function setAbsoluteBase(base) {
	  _page2.default.absoluteBaseURL = base;
	
	  var a = document.createElement('a');
	  a.href = base;
	  var basePath = a.pathname;
	
	  basePath = basePath.replace(/\/$/, '');
	  if (basePath.match(/^[^\/]/)) {
	    basePath = '/' + basePath;
	  }
	  _page2.default.base(basePath);
	}
	
	if (!_page2.default.oldshow) {
	  _page2.default.oldshow = _page2.default.show;
	}
	_page2.default.setAbsoluteBase = setAbsoluteBase.bind(_page2.default);
	_page2.default.getAbsoluteBase = getAbsoluteBase.bind(_page2.default);
	_page2.default.resolveURLToBase = resolveURLToBase.bind(_page2.default);
	_page2.default.show = show(_page2.default.oldshow);
	_page2.default.routeAppliesToCurrentLocation = routeAppliesToCurrentLocation;
	
	window.ss = window.ss || {};
	window.ss.router = window.ss.router || _page2.default;
	
	exports.default = window.ss.router;

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = Page;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var punycode = __webpack_require__(79);
	var util = __webpack_require__(80);
	
	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;
	
	exports.Url = Url;
	
	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}
	
	// Reference: RFC 3986, RFC 1808, RFC 2396
	
	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,
	
	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
	
	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
	
	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
	
	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(81);
	
	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;
	
	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}
	
	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }
	
	  // Copy chrome, IE, opera backslash-handling behavior.
	  // Back slashes before the query string get converted to forward slashes
	  // See: https://code.google.com/p/chromium/issues/detail?id=25916
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);
	
	  var rest = url;
	
	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();
	
	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }
	
	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }
	
	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }
	
	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {
	
	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c
	
	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.
	
	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	
	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }
	
	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }
	
	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;
	
	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);
	
	    // pull out port.
	    this.parseHost();
	
	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';
	
	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';
	
	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }
	
	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }
	
	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a punycoded representation of "domain".
	      // It only converts parts of the domain name that
	      // have non-ASCII characters, i.e. it doesn't matter if
	      // you call it with a domain that already is ASCII-only.
	      this.hostname = punycode.toASCII(this.hostname);
	    }
	
	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;
	
	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }
	
	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {
	
	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      if (rest.indexOf(ae) === -1)
	        continue;
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }
	
	
	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }
	
	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }
	
	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};
	
	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (util.isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}
	
	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }
	
	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';
	
	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }
	
	  if (this.query &&
	      util.isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }
	
	  var search = this.search || (query && ('?' + query)) || '';
	
	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
	
	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }
	
	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;
	
	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');
	
	  return protocol + host + pathname + search + hash;
	};
	
	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}
	
	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};
	
	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}
	
	Url.prototype.resolveObject = function(relative) {
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }
	
	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }
	
	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;
	
	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }
	
	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }
	
	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }
	
	    result.href = result.format();
	    return result;
	  }
	
	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
	      result.href = result.format();
	      return result;
	    }
	
	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }
	
	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];
	
	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }
	
	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especially happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }
	
	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }
	
	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');
	
	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }
	
	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }
	
	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }
	
	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }
	
	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');
	
	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especially happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }
	
	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);
	
	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }
	
	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }
	
	  //to support request.http
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};
	
	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {
	
		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}
	
		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,
	
		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1
	
		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'
	
		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators
	
		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},
	
		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,
	
		/** Temporary variable */
		key;
	
		/*--------------------------------------------------------------------------*/
	
		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}
	
		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}
	
		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}
	
		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
	
		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}
	
		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}
	
		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}
	
		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}
	
		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;
	
			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.
	
			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}
	
			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}
	
			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.
	
			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {
	
				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {
	
					if (index >= inputLength) {
						error('invalid-input');
					}
	
					digit = basicToDigit(input.charCodeAt(index++));
	
					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}
	
					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
	
					if (digit < t) {
						break;
					}
	
					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}
	
					w *= baseMinusT;
	
				}
	
				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);
	
				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}
	
				n += floor(i / out);
				i %= out;
	
				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);
	
			}
	
			return ucs2encode(output);
		}
	
		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;
	
			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);
	
			// Cache the length
			inputLength = input.length;
	
			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;
	
			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}
	
			handledCPCount = basicLength = output.length;
	
			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.
	
			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}
	
			// Main encoding loop:
			while (handledCPCount < inputLength) {
	
				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}
	
				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}
	
				delta += (m - n) * handledCPCountPlusOne;
				n = m;
	
				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];
	
					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}
	
					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}
	
						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}
	
				++delta;
				++n;
	
			}
			return output.join('');
		}
	
		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}
	
		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}
	
		/*--------------------------------------------------------------------------*/
	
		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};
	
		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}
	
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module), (function() { return this; }())))

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(82);
	exports.encode = exports.stringify = __webpack_require__(83);


/***/ },
/* 82 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	
	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;
	
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	
	  return obj;
	};


/***/ },
/* 83 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;
	
	    case 'boolean':
	      return v ? 'true' : 'false';
	
	    case 'number':
	      return isFinite(v) ? v : '';
	
	    default:
	      return '';
	  }
	};
	
	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	
	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var i18n = function () {
		function i18n() {
			_classCallCheck(this, i18n);
	
			this.defaultLocale = 'en_US';
			this.currentLocale = this.detectLocale();
			this.lang = {};
		}
	
		_createClass(i18n, [{
			key: 'setLocale',
			value: function setLocale(locale) {
				this.currentLocale = locale;
			}
		}, {
			key: 'getLocale',
			value: function getLocale() {
				return this.currentLocale !== null ? this.currentLocale : this.defaultLocale;
			}
		}, {
			key: '_t',
			value: function _t(entity, fallbackString, priority, context) {
				var langName = this.getLocale().replace(/_[\w]+/i, '');
				var defaultlangName = this.defaultLocale.replace(/_[\w]+/i, '');
	
				if (this.lang && this.lang[this.getLocale()] && this.lang[this.getLocale()][entity]) {
					return this.lang[this.getLocale()][entity];
				} else if (this.lang && this.lang[langName] && this.lang[langName][entity]) {
					return this.lang[langName][entity];
				} else if (this.lang && this.lang[this.defaultLocale] && this.lang[this.defaultLocale][entity]) {
					return this.lang[this.defaultLocale][entity];
				} else if (this.lang && this.lang[defaultlangName] && this.lang[defaultlangName][entity]) {
					return this.lang[defaultlangName][entity];
				} else if (fallbackString) {
					return fallbackString;
				} else {
					return '';
				}
			}
		}, {
			key: 'addDictionary',
			value: function addDictionary(locale, dict) {
				if (typeof this.lang[locale] === 'undefined') {
					this.lang[locale] = {};
				}
	
				for (var entity in dict) {
					this.lang[locale][entity] = dict[entity];
				}
			}
		}, {
			key: 'getDictionary',
			value: function getDictionary(locale) {
				return this.lang[locale];
			}
		}, {
			key: 'stripStr',
			value: function stripStr(str) {
				return str.replace(/^\s*/, '').replace(/\s*$/, '');
			}
		}, {
			key: 'stripStrML',
			value: function stripStrML(str) {
				var parts = str.split('\n');
	
				for (var i = 0; i < parts.length; i += 1) {
					parts[i] = stripStr(parts[i]);
				}
	
				return stripStr(parts.join(' '));
			}
		}, {
			key: 'sprintf',
			value: function sprintf(s) {
				for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					params[_key - 1] = arguments[_key];
				}
	
				if (params.length === 0) {
					return s;
				}
	
				var regx = new RegExp('(.?)(%s)', 'g');
	
				var i = 0;
	
				return s.replace(regx, function (match, subMatch1, subMatch2, offset, string) {
					if (subMatch1 === '%') {
						return match;
					}
	
					return subMatch1 + params[i++];
				});
			}
		}, {
			key: 'inject',
			value: function inject(s, map) {
				var regx = new RegExp('\{([A-Za-z0-9_]*)\}', 'g');
	
				return s.replace(regx, function (match, key, offset, string) {
					return map[key] ? map[key] : match;
				});
			}
		}, {
			key: 'detectLocale',
			value: function detectLocale() {
				var rawLocale;
				var detectedLocale;
	
				rawLocale = document.body.getAttribute('lang');
	
				if (!rawLocale) {
					var metas = document.getElementsByTagName('meta');
	
					for (var i = 0; i < metas.length; i++) {
						if (metas[i].attributes['http-equiv'] && metas[i].attributes['http-equiv'].nodeValue.toLowerCase() == 'content-language') {
							rawLocale = metas[i].attributes['content'].nodeValue;
						}
					}
				}
	
				if (!rawLocale) {
					rawLocale = this.defaultLocale;
				}
	
				var rawLocaleParts = rawLocale.match(/([^-|_]*)[-|_](.*)/);
	
				if (rawLocale.length == 2) {
					for (var compareLocale in i18n.lang) {
						if (compareLocale.substr(0, 2).toLowerCase() == rawLocale.toLowerCase()) {
							detectedLocale = compareLocale;
							break;
						}
					}
				} else if (rawLocaleParts) {
					detectedLocale = rawLocaleParts[1].toLowerCase() + '_' + rawLocaleParts[2].toUpperCase();
				}
	
				return detectedLocale;
			}
		}, {
			key: 'addEvent',
			value: function addEvent(obj, evType, fn, useCapture) {
				if (obj.addEventListener) {
					obj.addEventListener(evType, fn, useCapture);
					return true;
				} else if (obj.attachEvent) {
					return obj.attachEvent('on' + evType, fn);
				} else {
					console.log('Handler could not be attached');
				}
			}
		}]);
	
		return i18n;
	}();
	
	var _i18n = new i18n();
	
	window.ss = typeof window.ss !== 'undefined' ? window.ss : {};
	window.ss.i18n = window.i18n = _i18n;
	
	exports.default = _i18n;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var $window = (0, _jQuery2.default)(window),
	    $html = (0, _jQuery2.default)('html'),
	    $head = (0, _jQuery2.default)('head'),
	    path = {
	  urlParseRE: /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,
	
	  parseUrl: function parseUrl(url) {
	    if (_jQuery2.default.type(url) === "object") {
	      return url;
	    }
	
	    var matches = path.urlParseRE.exec(url || "") || [];
	
	    return {
	      href: matches[0] || "",
	      hrefNoHash: matches[1] || "",
	      hrefNoSearch: matches[2] || "",
	      domain: matches[3] || "",
	      protocol: matches[4] || "",
	      doubleSlash: matches[5] || "",
	      authority: matches[6] || "",
	      username: matches[8] || "",
	      password: matches[9] || "",
	      host: matches[10] || "",
	      hostname: matches[11] || "",
	      port: matches[12] || "",
	      pathname: matches[13] || "",
	      directory: matches[14] || "",
	      filename: matches[15] || "",
	      search: matches[16] || "",
	      hash: matches[17] || ""
	    };
	  },
	
	  makePathAbsolute: function makePathAbsolute(relPath, absPath) {
	    if (relPath && relPath.charAt(0) === "/") {
	      return relPath;
	    }
	
	    relPath = relPath || "";
	    absPath = absPath ? absPath.replace(/^\/|(\/[^\/]*|[^\/]+)$/g, "") : "";
	
	    var absStack = absPath ? absPath.split("/") : [],
	        relStack = relPath.split("/");
	    for (var i = 0; i < relStack.length; i++) {
	      var d = relStack[i];
	      switch (d) {
	        case ".":
	          break;
	        case "..":
	          if (absStack.length) {
	            absStack.pop();
	          }
	          break;
	        default:
	          absStack.push(d);
	          break;
	      }
	    }
	    return "/" + absStack.join("/");
	  },
	
	  isSameDomain: function isSameDomain(absUrl1, absUrl2) {
	    return path.parseUrl(absUrl1).domain === path.parseUrl(absUrl2).domain;
	  },
	
	  isRelativeUrl: function isRelativeUrl(url) {
	    return path.parseUrl(url).protocol === "";
	  },
	
	  isAbsoluteUrl: function isAbsoluteUrl(url) {
	    return path.parseUrl(url).protocol !== "";
	  },
	
	  makeUrlAbsolute: function makeUrlAbsolute(relUrl, absUrl) {
	    if (!path.isRelativeUrl(relUrl)) {
	      return relUrl;
	    }
	
	    var relObj = path.parseUrl(relUrl),
	        absObj = path.parseUrl(absUrl),
	        protocol = relObj.protocol || absObj.protocol,
	        doubleSlash = relObj.protocol ? relObj.doubleSlash : relObj.doubleSlash || absObj.doubleSlash,
	        authority = relObj.authority || absObj.authority,
	        hasPath = relObj.pathname !== "",
	        pathname = path.makePathAbsolute(relObj.pathname || absObj.filename, absObj.pathname),
	        search = relObj.search || !hasPath && absObj.search || "",
	        hash = relObj.hash;
	
	    return protocol + doubleSlash + authority + pathname + search + hash;
	  },
	
	  addSearchParams: function addSearchParams(url, params) {
	    var u = path.parseUrl(url),
	        params = typeof params === "string" ? path.convertSearchToArray(params) : params,
	        newParams = _jQuery2.default.extend(path.convertSearchToArray(u.search), params);
	    return u.hrefNoSearch + '?' + _jQuery2.default.param(newParams) + (u.hash || "");
	  },
	
	  getSearchParams: function getSearchParams(url) {
	    var u = path.parseUrl(url);
	    return path.convertSearchToArray(u.search);
	  },
	
	  convertSearchToArray: function convertSearchToArray(search) {
	    var parts,
	        i,
	        tmp,
	        params = {};
	    search = search.replace(/^\?/, '');
	    parts = search ? search.split('&') : [];
	    for (i = 0; i < parts.length; i++) {
	      tmp = parts[i].split('=');
	      params[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp[1]);
	    }
	    return params;
	  },
	
	  convertUrlToDataUrl: function convertUrlToDataUrl(absUrl) {
	    var u = path.parseUrl(absUrl);
	    if (path.isEmbeddedPage(u)) {
	      return u.hash.split(dialogHashKey)[0].replace(/^#/, "");
	    } else if (path.isSameDomain(u, document)) {
	      return u.hrefNoHash.replace(document.domain, "");
	    }
	    return absUrl;
	  },
	
	  get: function get(newPath) {
	    if (newPath === undefined) {
	      newPath = location.hash;
	    }
	    return path.stripHash(newPath).replace(/[^\/]*\.[^\/*]+$/, '');
	  },
	
	  getFilePath: function getFilePath(path) {
	    var splitkey = '&' + _jQuery2.default.mobile.subPageUrlKey;
	    return path && path.split(splitkey)[0].split(dialogHashKey)[0];
	  },
	
	  set: function set(path) {
	    location.hash = path;
	  },
	
	  isPath: function isPath(url) {
	    return (/\//.test(url)
	    );
	  },
	
	  clean: function clean(url) {
	    return url.replace(document.domain, "");
	  },
	
	  stripHash: function stripHash(url) {
	    return url.replace(/^#/, "");
	  },
	
	  cleanHash: function cleanHash(hash) {
	    return path.stripHash(hash.replace(/\?.*$/, "").replace(dialogHashKey, ""));
	  },
	
	  isExternal: function isExternal(url) {
	    var u = path.parseUrl(url);
	    return u.protocol && u.domain !== document.domain ? true : false;
	  },
	
	  hasProtocol: function hasProtocol(url) {
	    return (/^(:?\w+:)/.test(url)
	    );
	  }
	};
	
	_jQuery2.default.path = path;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(87);
	
	_jQuery2.default.widget('ssui.button', _jQuery2.default.ui.button, {
	  options: {
	    alternate: {
	      icon: null,
	      text: null
	    },
	    showingAlternate: false
	  },
	
	  toggleAlternate: function toggleAlternate() {
	    if (this._trigger('ontogglealternate') === false) return;
	
	    if (!this.options.alternate.icon && !this.options.alternate.text) return;
	
	    this.options.showingAlternate = !this.options.showingAlternate;
	    this.refresh();
	  },
	
	  _refreshAlternate: function _refreshAlternate() {
	    this._trigger('beforerefreshalternate');
	
	    if (!this.options.alternate.icon && !this.options.alternate.text) return;
	
	    if (this.options.showingAlternate) {
	      this.element.find('.ui-button-icon-primary').hide();
	      this.element.find('.ui-button-text').hide();
	      this.element.find('.ui-button-icon-alternate').show();
	      this.element.find('.ui-button-text-alternate').show();
	    } else {
	      this.element.find('.ui-button-icon-primary').show();
	      this.element.find('.ui-button-text').show();
	      this.element.find('.ui-button-icon-alternate').hide();
	      this.element.find('.ui-button-text-alternate').hide();
	    }
	
	    this._trigger('afterrefreshalternate');
	  },
	
	  _resetButton: function _resetButton() {
	    var iconPrimary = this.element.data('icon-primary'),
	        iconSecondary = this.element.data('icon-secondary');
	
	    if (!iconPrimary) iconPrimary = this.element.data('icon');
	
	    if (iconPrimary) this.options.icons.primary = 'btn-icon-' + iconPrimary;
	    if (iconSecondary) this.options.icons.secondary = 'btn-icon-' + iconSecondary;
	
	    _jQuery2.default.ui.button.prototype._resetButton.call(this);
	
	    if (!this.options.alternate.text) {
	      this.options.alternate.text = this.element.data('text-alternate');
	    }
	    if (!this.options.alternate.icon) {
	      this.options.alternate.icon = this.element.data('icon-alternate');
	    }
	    if (!this.options.showingAlternate) {
	      this.options.showingAlternate = this.element.hasClass('ss-ui-alternate');
	    }
	
	    if (this.options.alternate.icon) {
	      this.buttonElement.append("<span class='ui-button-icon-alternate ui-button-icon-primary ui-icon btn-icon-" + this.options.alternate.icon + "'></span>");
	    }
	    if (this.options.alternate.text) {
	      this.buttonElement.append("<span class='ui-button-text-alternate ui-button-text'>" + this.options.alternate.text + "</span>");
	    }
	
	    this._refreshAlternate();
	  },
	
	  refresh: function refresh() {
	    _jQuery2.default.ui.button.prototype.refresh.call(this);
	
	    this._refreshAlternate();
	  },
	
	  destroy: function destroy() {
	    this.element.find('.ui-button-text-alternate').remove();
	    this.element.find('.ui-button-icon-alternate').remove();
	
	    _jQuery2.default.ui.button.prototype.destroy.call(this);
	  }
	});
	
	_jQuery2.default.widget("ssui.ssdialog", _jQuery2.default.ui.dialog, {
	  options: {
	    iframeUrl: '',
	    reloadOnOpen: true,
	    dialogExtraClass: '',
	
	    modal: true,
	    bgiframe: true,
	    autoOpen: false,
	    autoPosition: true,
	    minWidth: 500,
	    maxWidth: 800,
	    minHeight: 300,
	    maxHeight: 700,
	    widthRatio: 0.8,
	    heightRatio: 0.8,
	    resizable: false
	  },
	  _create: function _create() {
	    _jQuery2.default.ui.dialog.prototype._create.call(this);
	
	    var self = this;
	
	    var iframe = (0, _jQuery2.default)('<iframe marginWidth="0" marginHeight="0" frameBorder="0" scrolling="auto"></iframe>');
	    iframe.bind('load', function (e) {
	      if ((0, _jQuery2.default)(this).attr('src') == 'about:blank') return;
	
	      iframe.addClass('loaded').show();
	      self._resizeIframe();
	      self.uiDialog.removeClass('loading');
	    }).hide();
	
	    if (this.options.dialogExtraClass) this.uiDialog.addClass(this.options.dialogExtraClass);
	    this.element.append(iframe);
	
	    if (this.options.iframeUrl) this.element.css('overflow', 'hidden');
	  },
	  open: function open() {
	    _jQuery2.default.ui.dialog.prototype.open.call(this);
	
	    var self = this,
	        iframe = this.element.children('iframe');
	
	    if (this.options.iframeUrl && (!iframe.hasClass('loaded') || this.options.reloadOnOpen)) {
	      iframe.hide();
	      iframe.attr('src', this.options.iframeUrl);
	      this.uiDialog.addClass('loading');
	    }
	
	    (0, _jQuery2.default)(window).bind('resize.ssdialog', function () {
	      self._resizeIframe();
	    });
	  },
	  close: function close() {
	    _jQuery2.default.ui.dialog.prototype.close.call(this);
	
	    this.uiDialog.unbind('resize.ssdialog');
	    (0, _jQuery2.default)(window).unbind('resize.ssdialog');
	  },
	  _resizeIframe: function _resizeIframe() {
	    var opts = {},
	        newWidth,
	        newHeight,
	        iframe = this.element.children('iframe');;
	    if (this.options.widthRatio) {
	      newWidth = (0, _jQuery2.default)(window).width() * this.options.widthRatio;
	      if (this.options.minWidth && newWidth < this.options.minWidth) {
	        opts.width = this.options.minWidth;
	      } else if (this.options.maxWidth && newWidth > this.options.maxWidth) {
	        opts.width = this.options.maxWidth;
	      } else {
	        opts.width = newWidth;
	      }
	    }
	    if (this.options.heightRatio) {
	      newHeight = (0, _jQuery2.default)(window).height() * this.options.heightRatio;
	      if (this.options.minHeight && newHeight < this.options.minHeight) {
	        opts.height = this.options.minHeight;
	      } else if (this.options.maxHeight && newHeight > this.options.maxHeight) {
	        opts.height = this.options.maxHeight;
	      } else {
	        opts.height = newHeight;
	      }
	    }
	
	    if (!jQuery.isEmptyObject(opts)) {
	      this._setOptions(opts);
	
	      iframe.attr('width', opts.width - parseFloat(this.element.css('paddingLeft')) - parseFloat(this.element.css('paddingRight')));
	      iframe.attr('height', opts.height - parseFloat(this.element.css('paddingTop')) - parseFloat(this.element.css('paddingBottom')));
	
	      if (this.options.autoPosition) {
	        this._setOption("position", this.options.position);
	      }
	    }
	  }
	});
	
	_jQuery2.default.widget("ssui.titlebar", {
	  _create: function _create() {
	    this.originalTitle = this.element.attr('title');
	
	    var self = this;
	    var options = this.options;
	
	    var title = options.title || this.originalTitle || '&nbsp;';
	    var titleId = _jQuery2.default.ui.dialog.getTitleId(this.element);
	
	    this.element.parent().addClass('ui-dialog');
	
	    var uiDialogTitlebar = this.element.addClass('ui-dialog-titlebar ' + 'ui-widget-header ' + 'ui-corner-all ' + 'ui-helper-clearfix');
	
	    if (options.closeButton) {
	      var uiDialogTitlebarClose = (0, _jQuery2.default)('<a href="#"/>').addClass('ui-dialog-titlebar-close ' + 'ui-corner-all').attr('role', 'button').hover(function () {
	        uiDialogTitlebarClose.addClass('ui-state-hover');
	      }, function () {
	        uiDialogTitlebarClose.removeClass('ui-state-hover');
	      }).focus(function () {
	        uiDialogTitlebarClose.addClass('ui-state-focus');
	      }).blur(function () {
	        uiDialogTitlebarClose.removeClass('ui-state-focus');
	      }).mousedown(function (ev) {
	        ev.stopPropagation();
	      }).appendTo(uiDialogTitlebar);
	
	      var uiDialogTitlebarCloseText = (this.uiDialogTitlebarCloseText = (0, _jQuery2.default)('<span/>')).addClass('ui-icon ' + 'ui-icon-closethick').text(options.closeText).appendTo(uiDialogTitlebarClose);
	    }
	
	    var uiDialogTitle = (0, _jQuery2.default)('<span/>').addClass('ui-dialog-title').attr('id', titleId).html(title).prependTo(uiDialogTitlebar);
	
	    uiDialogTitlebar.find("*").add(uiDialogTitlebar).disableSelection();
	  },
	
	  destroy: function destroy() {
	    this.element.unbind('.dialog').removeData('dialog').removeClass('ui-dialog-content ui-widget-content').hide().appendTo('body');
	
	    this.originalTitle && this.element.attr('title', this.originalTitle);
	  }
	});
	
	_jQuery2.default.extend(_jQuery2.default.ssui.titlebar, {
	  version: "0.0.1",
	  options: {
	    title: '',
	    closeButton: false,
	    closeText: 'close'
	  },
	
	  uuid: 0,
	
	  getTitleId: function getTitleId($el) {
	    return 'ui-dialog-title-' + ($el.attr('id') || ++this.uuid);
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 87 */,
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(86);
	
	var windowWidth, windowHeight;
	
	_jQuery2.default.noConflict();
	
	window.ss = window.ss || {};
	
	window.ss.debounce = function (func, wait, immediate) {
	  var timeout, context, args;
	
	  var later = function later() {
	    timeout = null;
	    if (!immediate) func.apply(context, args);
	  };
	
	  return function () {
	    var callNow = immediate && !timeout;
	
	    context = this;
	    args = arguments;
	
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	
	    if (callNow) {
	      func.apply(context, args);
	    }
	  };
	};
	
	(0, _jQuery2.default)(window).bind('resize.leftandmain', function (e) {
	  (0, _jQuery2.default)('.cms-container').trigger('windowresize');
	});
	
	_jQuery2.default.entwine.warningLevel = _jQuery2.default.entwine.WARN_LEVEL_BESTPRACTISE;
	
	_jQuery2.default.entwine('ss', function ($) {
	  $(window).on("message", function (e) {
	    var target,
	        event = e.originalEvent,
	        data = _typeof(event.data) === 'object' ? event.data : JSON.parse(event.data);
	
	    if ($.path.parseUrl(window.location.href).domain !== $.path.parseUrl(event.origin).domain) return;
	
	    target = typeof data.target === 'undefined' ? $(window) : $(data.target);
	
	    switch (data.type) {
	      case 'event':
	        target.trigger(data.event, data.data);
	        break;
	      case 'callback':
	        target[data.callback].call(target, data.data);
	        break;
	    }
	  });
	
	  var positionLoadingSpinner = function positionLoadingSpinner() {
	    var offset = 120;
	    var spinner = $('.ss-loading-screen .loading-animation');
	    var top = ($(window).height() - spinner.height()) / 2;
	    spinner.css('top', top + offset);
	    spinner.show();
	  };
	
	  var applyChosen = function applyChosen(el) {
	    if (el.is(':visible')) {
	      el.addClass('has-chosen').chosen({
	        allow_single_deselect: true,
	        disable_search_threshold: 20,
	        display_disabled_options: true,
	        width: '100%'
	      });
	    } else {
	      setTimeout(function () {
	        el.show();
	        applyChosen(el);
	      }, 500);
	    }
	  };
	
	  var isSameUrl = function isSameUrl(url1, url2) {
	    var baseUrl = $('base').attr('href');
	    url1 = $.path.isAbsoluteUrl(url1) ? url1 : $.path.makeUrlAbsolute(url1, baseUrl), url2 = $.path.isAbsoluteUrl(url2) ? url2 : $.path.makeUrlAbsolute(url2, baseUrl);
	    var url1parts = $.path.parseUrl(url1),
	        url2parts = $.path.parseUrl(url2);
	    return url1parts.pathname.replace(/\/*$/, '') == url2parts.pathname.replace(/\/*$/, '') && url1parts.search == url2parts.search;
	  };
	
	  var ajaxCompleteEvent = window.ss.debounce(function () {
	    $(window).trigger('ajaxComplete');
	  }, 1000, true);
	
	  $(window).bind('resize', positionLoadingSpinner).trigger('resize');
	
	  $(document).ajaxComplete(function (e, xhr, settings) {
	    var origUrl = document.URL,
	        url = xhr.getResponseHeader('X-ControllerURL'),
	        destUrl = settings.url,
	        msg = xhr.getResponseHeader('X-Status') !== null ? xhr.getResponseHeader('X-Status') : xhr.statusText,
	        msgType = xhr.status < 200 || xhr.status > 399 ? 'bad' : 'good',
	        ignoredMessages = ['OK', 'success', 'HTTP/2.0 200'];
	
	    if (url !== null && (!isSameUrl(origUrl, url) || !isSameUrl(destUrl, url))) {
	      window.ss.router.show(url, {
	        id: new Date().getTime() + String(Math.random()).replace(/\D/g, ''),
	        pjax: xhr.getResponseHeader('X-Pjax') ? xhr.getResponseHeader('X-Pjax') : settings.headers['X-Pjax']
	      });
	    }
	
	    if (xhr.getResponseHeader('X-Reauthenticate')) {
	      $('.cms-container').showLoginDialog();
	      return;
	    }
	
	    if (xhr.status !== 0 && msg && $.inArray(msg, ignoredMessages) === -1) {
	      statusMessage(decodeURIComponent(msg), msgType);
	    }
	
	    ajaxCompleteEvent(this);
	  });
	
	  $('.cms-container').entwine({
	    StateChangeXHR: null,
	
	    FragmentXHR: {},
	
	    StateChangeCount: 0,
	
	    LayoutOptions: {
	      minContentWidth: 940,
	      minPreviewWidth: 400,
	      mode: 'content'
	    },
	
	    onadd: function onadd() {
	      if ($.browser.msie && parseInt($.browser.version, 10) < 8) {
	        $('.ss-loading-screen').append('<p class="ss-loading-incompat-warning"><span class="notice">' + 'Your browser is not compatible with the CMS interface. Please use Internet Explorer 8+, Google Chrome or Mozilla Firefox.' + '</span></p>').css('z-index', $('.ss-loading-screen').css('z-index') + 1);
	        $('.loading-animation').remove();
	
	        this._super();
	        return;
	      }
	
	      this.redraw();
	
	      $('.ss-loading-screen').hide();
	      $('body').removeClass('loading');
	      $(window).unbind('resize', positionLoadingSpinner);
	      this.restoreTabState();
	      this._super();
	    },
	
	    'onwindowresize': function onwindowresize() {
	      this.redraw();
	    },
	
	    'from .cms-panel': {
	      ontoggle: function ontoggle() {
	        this.redraw();
	      }
	    },
	
	    'from .cms-container': {
	      onaftersubmitform: function onaftersubmitform() {
	        this.redraw();
	      }
	    },
	
	    updateLayoutOptions: function updateLayoutOptions(newSpec) {
	      var spec = this.getLayoutOptions();
	
	      var dirty = false;
	
	      for (var k in newSpec) {
	        if (spec[k] !== newSpec[k]) {
	          spec[k] = newSpec[k];
	          dirty = true;
	        }
	      }
	
	      if (dirty) this.redraw();
	    },
	
	    clearViewMode: function clearViewMode() {
	      this.removeClass('cms-container--split-mode');
	      this.removeClass('cms-container--preview-mode');
	      this.removeClass('cms-container--content-mode');
	    },
	
	    splitViewMode: function splitViewMode() {
	      this.updateLayoutOptions({
	        mode: 'split'
	      });
	    },
	
	    contentViewMode: function contentViewMode() {
	      this.updateLayoutOptions({
	        mode: 'content'
	      });
	    },
	
	    previewMode: function previewMode() {
	      this.updateLayoutOptions({
	        mode: 'preview'
	      });
	    },
	
	    RedrawSuppression: false,
	
	    redraw: function redraw() {
	      if (this.getRedrawSuppression()) return;
	
	      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));
	
	      var changed = this.setProperMode();
	
	      if (!changed) {
	        this.find('.cms-panel-layout').redraw();
	        this.find('.cms-content-fields[data-layout-type]').redraw();
	        this.find('.cms-edit-form[data-layout-type]').redraw();
	        this.find('.cms-preview').redraw();
	        this.find('.cms-content').redraw();
	      }
	    },
	
	    setProperMode: function setProperMode() {
	      var options = this.getLayoutOptions();
	      var mode = options.mode;
	      this.clearViewMode();
	
	      var content = this.find('.cms-content');
	      var preview = this.find('.cms-preview');
	
	      content.css({ 'min-width': 0 });
	      preview.css({ 'min-width': 0 });
	
	      if (content.width() + preview.width() >= options.minContentWidth + options.minPreviewWidth) {
	        content.css({ 'min-width': options.minContentWidth });
	        preview.css({ 'min-width': options.minPreviewWidth });
	        preview.trigger('enable');
	      } else {
	        preview.trigger('disable');
	        if (mode == 'split') {
	          preview.trigger('forcecontent');
	          return true;
	        }
	      }
	
	      this.addClass('cms-container--' + mode + '-mode');
	      return false;
	    },
	
	    checkCanNavigate: function checkCanNavigate(selectors) {
	      var contentEls = this._findFragments(selectors || ['Content']),
	          trackedEls = contentEls.find(':data(changetracker)').add(contentEls.filter(':data(changetracker)')),
	          safe = true;
	
	      if (!trackedEls.length) {
	        return true;
	      }
	
	      trackedEls.each(function () {
	        if (!$(this).confirmUnsavedChanges()) {
	          safe = false;
	        }
	      });
	
	      return safe;
	    },
	
	    loadPanel: function loadPanel(url) {
	      var title = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	      var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	      var forceReload = arguments[3];
	      var forceReferer = arguments.length <= 4 || arguments[4] === undefined ? document.URL : arguments[4];
	
	      if (!this.checkCanNavigate(data.pjax ? data.pjax.split(',') : ['Content'])) {
	        return;
	      }
	
	      this.saveTabState();
	
	      data.__forceReferer = forceReferer;
	
	      if (forceReload) {
	        data.__forceReload = 1 + Math.random();
	      }
	
	      window.ss.router.show(url, data);
	    },
	
	    reloadCurrentPanel: function reloadCurrentPanel() {
	      this.loadPanel(document.URL, null, null, true);
	    },
	
	    submitForm: function submitForm(form, button, callback, ajaxOptions) {
	      var self = this;
	
	      if (!button) button = this.find('.btn-toolbar :submit[name=action_save]');
	
	      if (!button) button = this.find('.btn-toolbar :submit:first');
	
	      form.trigger('beforesubmitform');
	      this.trigger('submitform', { form: form, button: button });
	
	      $(button).addClass('loading');
	
	      var validationResult = form.validate();
	      if (typeof validationResult !== 'undefined' && !validationResult) {
	        statusMessage("Validation failed.", "bad");
	
	        $(button).removeClass('loading');
	
	        return false;
	      }
	
	      var formData = form.serializeArray();
	
	      formData.push({ name: $(button).attr('name'), value: '1' });
	
	      formData.push({ name: 'BackURL', value: document.URL.replace(/\/$/, '') });
	
	      this.saveTabState();
	
	      jQuery.ajax(jQuery.extend({
	        headers: { "X-Pjax": "CurrentForm,Breadcrumbs" },
	        url: form.attr('action'),
	        data: formData,
	        type: 'POST',
	        complete: function complete() {
	          $(button).removeClass('loading');
	        },
	        success: function success(data, status, xhr) {
	          form.removeClass('changed');
	          if (callback) callback(data, status, xhr);
	
	          var newContentEls = self.handleAjaxResponse(data, status, xhr);
	          if (!newContentEls) return;
	
	          newContentEls.filter('form').trigger('aftersubmitform', { status: status, xhr: xhr, formData: formData });
	        }
	      }, ajaxOptions));
	
	      return false;
	    },
	
	    LastState: null,
	
	    PauseState: false,
	
	    handleStateChange: function handleStateChange(event) {
	      var historyState = arguments.length <= 1 || arguments[1] === undefined ? window.history.state : arguments[1];
	
	      if (this.getPauseState()) {
	        return;
	      }
	
	      if (this.getStateChangeXHR()) {
	        this.getStateChangeXHR().abort();
	      }
	
	      var self = this,
	          fragments = historyState.pjax || 'Content',
	          headers = {},
	          fragmentsArr = fragments.split(','),
	          contentEls = this._findFragments(fragmentsArr);
	
	      this.setStateChangeCount(this.getStateChangeCount() + 1);
	
	      if (!this.checkCanNavigate()) {
	        var lastState = this.getLastState();
	
	        this.setPauseState(true);
	
	        if (lastState && lastState.path) {
	          window.ss.router.show(lastState.path);
	        } else {
	          window.ss.router.back();
	        }
	
	        this.setPauseState(false);
	
	        return;
	      }
	
	      this.setLastState(historyState);
	
	      if (contentEls.length < fragmentsArr.length) {
	        fragments = 'Content', fragmentsArr = ['Content'];
	        contentEls = this._findFragments(fragmentsArr);
	      }
	
	      this.trigger('beforestatechange', { state: historyState, element: contentEls });
	
	      headers['X-Pjax'] = fragments;
	
	      if (typeof historyState.__forceReferer !== 'undefined') {
	        var url = historyState.__forceReferer;
	
	        try {
	          url = decodeURI(url);
	        } catch (e) {} finally {
	          headers['X-Backurl'] = encodeURI(url);
	        }
	      }
	
	      contentEls.addClass('loading');
	
	      var promise = $.ajax({
	        headers: headers,
	        url: historyState.path || document.URL
	      }).done(function (data, status, xhr) {
	        var els = self.handleAjaxResponse(data, status, xhr, historyState);
	        self.trigger('afterstatechange', { data: data, status: status, xhr: xhr, element: els, state: historyState });
	      }).always(function () {
	        self.setStateChangeXHR(null);
	
	        contentEls.removeClass('loading');
	      });
	
	      this.setStateChangeXHR(promise);
	
	      return promise;
	    },
	
	    loadFragment: function loadFragment(url, pjaxFragments) {
	
	      var self = this,
	          xhr,
	          headers = {},
	          baseUrl = $('base').attr('href'),
	          fragmentXHR = this.getFragmentXHR();
	
	      if (typeof fragmentXHR[pjaxFragments] !== 'undefined' && fragmentXHR[pjaxFragments] !== null) {
	        fragmentXHR[pjaxFragments].abort();
	        fragmentXHR[pjaxFragments] = null;
	      }
	
	      url = $.path.isAbsoluteUrl(url) ? url : $.path.makeUrlAbsolute(url, baseUrl);
	      headers['X-Pjax'] = pjaxFragments;
	
	      xhr = $.ajax({
	        headers: headers,
	        url: url,
	        success: function success(data, status, xhr) {
	          var elements = self.handleAjaxResponse(data, status, xhr, null);
	
	          self.trigger('afterloadfragment', { data: data, status: status, xhr: xhr, elements: elements });
	        },
	        error: function error(xhr, status, _error) {
	          self.trigger('loadfragmenterror', { xhr: xhr, status: status, error: _error });
	        },
	        complete: function complete() {
	          var fragmentXHR = self.getFragmentXHR();
	          if (typeof fragmentXHR[pjaxFragments] !== 'undefined' && fragmentXHR[pjaxFragments] !== null) {
	            fragmentXHR[pjaxFragments] = null;
	          }
	        }
	      });
	
	      fragmentXHR[pjaxFragments] = xhr;
	
	      return xhr;
	    },
	
	    handleAjaxResponse: function handleAjaxResponse(data, status, xhr, state) {
	      var self = this,
	          url,
	          selectedTabs,
	          guessFragment,
	          fragment,
	          $data;
	
	      if (xhr.getResponseHeader('X-Reload') && xhr.getResponseHeader('X-ControllerURL')) {
	        var baseUrl = $('base').attr('href'),
	            rawURL = xhr.getResponseHeader('X-ControllerURL'),
	            url = $.path.isAbsoluteUrl(rawURL) ? rawURL : $.path.makeUrlAbsolute(rawURL, baseUrl);
	
	        document.location.href = url;
	        return;
	      }
	
	      if (!data) return;
	
	      var title = xhr.getResponseHeader('X-Title');
	      if (title) document.title = decodeURIComponent(title.replace(/\+/g, ' '));
	
	      var newFragments = {},
	          newContentEls;
	
	      if (xhr.getResponseHeader('Content-Type').match(/^((text)|(application))\/json[ \t]*;?/i)) {
	        newFragments = data;
	      } else {
	        fragment = document.createDocumentFragment();
	
	        jQuery.clean([data], document, fragment, []);
	        $data = $(jQuery.merge([], fragment.childNodes));
	
	        guessFragment = 'Content';
	        if ($data.is('form') && !$data.is('[data-pjax-fragment~=Content]')) guessFragment = 'CurrentForm';
	
	        newFragments[guessFragment] = $data;
	      }
	
	      this.setRedrawSuppression(true);
	      try {
	        $.each(newFragments, function (newFragment, html) {
	          var contentEl = $('[data-pjax-fragment]').filter(function () {
	            return $.inArray(newFragment, $(this).data('pjaxFragment').split(' ')) != -1;
	          }),
	              newContentEl = $(html);
	
	          if (newContentEls) newContentEls.add(newContentEl);else newContentEls = newContentEl;
	
	          if (newContentEl.find('.cms-container').length) {
	            throw 'Content loaded via ajax is not allowed to contain tags matching the ".cms-container" selector to avoid infinite loops';
	          }
	
	          var origStyle = contentEl.attr('style');
	          var origParent = contentEl.parent();
	          var layoutClasses = ['east', 'west', 'center', 'north', 'south', 'column-hidden'];
	          var elemClasses = contentEl.attr('class');
	          var origLayoutClasses = [];
	          if (elemClasses) {
	            origLayoutClasses = $.grep(elemClasses.split(' '), function (val) {
	              return $.inArray(val, layoutClasses) >= 0;
	            });
	          }
	
	          newContentEl.removeClass(layoutClasses.join(' ')).addClass(origLayoutClasses.join(' '));
	          if (origStyle) newContentEl.attr('style', origStyle);
	
	          var styles = newContentEl.find('style').detach();
	          if (styles.length) $(document).find('head').append(styles);
	
	          contentEl.replaceWith(newContentEl);
	        });
	
	        var newForm = newContentEls.filter('form');
	        if (newForm.hasClass('cms-tabset')) newForm.removeClass('cms-tabset').addClass('cms-tabset');
	      } finally {
	        this.setRedrawSuppression(false);
	      }
	
	      this.redraw();
	      this.restoreTabState(state && typeof state.tabState !== 'undefined' ? state.tabState : null);
	
	      return newContentEls;
	    },
	
	    _findFragments: function _findFragments(fragments) {
	      return $('[data-pjax-fragment]').filter(function () {
	        var i,
	            nodeFragments = $(this).data('pjaxFragment').split(' ');
	        for (i in fragments) {
	          if ($.inArray(fragments[i], nodeFragments) != -1) return true;
	        }
	        return false;
	      });
	    },
	
	    refresh: function refresh() {
	      $(window).trigger('statechange');
	
	      $(this).redraw();
	    },
	
	    saveTabState: function saveTabState() {
	      if (typeof window.sessionStorage == "undefined" || window.sessionStorage === null) return;
	
	      var selectedTabs = [],
	          url = this._tabStateUrl();
	      this.find('.cms-tabset,.ss-tabset').each(function (i, el) {
	        var id = $(el).attr('id');
	        if (!id) return;
	        if (!$(el).data('tabs')) return;
	        if ($(el).data('ignoreTabState') || $(el).getIgnoreTabState()) return;
	
	        selectedTabs.push({ id: id, selected: $(el).tabs('option', 'selected') });
	      });
	
	      if (selectedTabs) {
	        var tabsUrl = 'tabs-' + url;
	        try {
	          window.sessionStorage.setItem(tabsUrl, JSON.stringify(selectedTabs));
	        } catch (err) {
	          if (err.code === DOMException.QUOTA_EXCEEDED_ERR && window.sessionStorage.length === 0) {
	            return;
	          } else {
	            throw err;
	          }
	        }
	      }
	    },
	
	    restoreTabState: function restoreTabState(overrideStates) {
	      var self = this,
	          url = this._tabStateUrl(),
	          hasSessionStorage = typeof window.sessionStorage !== "undefined" && window.sessionStorage,
	          sessionData = hasSessionStorage ? window.sessionStorage.getItem('tabs-' + url) : null,
	          sessionStates = sessionData ? JSON.parse(sessionData) : false;
	
	      this.find('.cms-tabset, .ss-tabset').each(function () {
	        var index,
	            tab,
	            tabset = $(this),
	            tabsetId = tabset.attr('id'),
	            forcedTab = tabset.children('ul').children('li.ss-tabs-force-active');
	
	        if (!tabset.data('tabs')) {
	          return;
	        }
	
	        tabset.tabs('refresh');
	
	        if (forcedTab.length) {
	          index = forcedTab.first().index();
	        } else if (overrideStates && overrideStates[tabsetId]) {
	          tab = tabset.find(overrideStates[tabsetId].tabSelector);
	          if (tab.length) {
	            index = tab.index();
	          }
	        } else if (sessionStates) {
	          $.each(sessionStates, function (i, state) {
	            if (tabsetId == state.id) {
	              index = state.selected;
	            }
	          });
	        }
	        if (index !== null) {
	          tabset.tabs('option', 'active', index);
	          self.trigger('tabstaterestored');
	        }
	      });
	    },
	
	    clearTabState: function clearTabState(url) {
	      if (typeof window.sessionStorage == "undefined") return;
	
	      var s = window.sessionStorage;
	      if (url) {
	        s.removeItem('tabs-' + url);
	      } else {
	        for (var i = 0; i < s.length; i++) {
	          if (s.key(i).match(/^tabs-/)) s.removeItem(s.key(i));
	        }
	      }
	    },
	
	    clearCurrentTabState: function clearCurrentTabState() {
	      this.clearTabState(this._tabStateUrl());
	    },
	
	    _tabStateUrl: function _tabStateUrl() {
	      return window.location.href.replace(/\?.*/, '').replace(/#.*/, '').replace($('base').attr('href'), '');
	    },
	
	    showLoginDialog: function showLoginDialog() {
	      var tempid = $('body').data('member-tempid'),
	          dialog = $('.leftandmain-logindialog'),
	          url = 'CMSSecurity/login';
	
	      if (dialog.length) dialog.remove();
	
	      url = $.path.addSearchParams(url, {
	        'tempid': tempid,
	        'BackURL': window.location.href
	      });
	
	      dialog = $('<div class="leftandmain-logindialog"></div>');
	      dialog.attr('id', new Date().getTime());
	      dialog.data('url', url);
	      $('body').append(dialog);
	    }
	  });
	
	  $('.leftandmain-logindialog').entwine({
	    onmatch: function onmatch() {
	      this._super();
	
	      this.ssdialog({
	        iframeUrl: this.data('url'),
	        dialogClass: "leftandmain-logindialog-dialog",
	        autoOpen: true,
	        minWidth: 500,
	        maxWidth: 500,
	        minHeight: 370,
	        maxHeight: 400,
	        closeOnEscape: false,
	        open: function open() {
	          $('.ui-widget-overlay').addClass('leftandmain-logindialog-overlay');
	        },
	        close: function close() {
	          $('.ui-widget-overlay').removeClass('leftandmain-logindialog-overlay');
	        }
	      });
	    },
	    onunmatch: function onunmatch() {
	      this._super();
	    },
	    open: function open() {
	      this.ssdialog('open');
	    },
	    close: function close() {
	      this.ssdialog('close');
	    },
	    toggle: function toggle(bool) {
	      if (this.is(':visible')) this.close();else this.open();
	    },
	
	    reauthenticate: function reauthenticate(data) {
	      if (typeof data.SecurityID !== 'undefined') {
	        $(':input[name=SecurityID]').val(data.SecurityID);
	      }
	
	      if (typeof data.TempID !== 'undefined') {
	        $('body').data('member-tempid', data.TempID);
	      }
	      this.close();
	    }
	  });
	
	  $('form.loading,.cms-content.loading,.cms-content-fields.loading,.cms-content-view.loading').entwine({
	    onmatch: function onmatch() {
	      this.append('<div class="cms-content-loading-overlay ui-widget-overlay-light"></div><div class="cms-content-loading-spinner"></div>');
	      this._super();
	    },
	    onunmatch: function onunmatch() {
	      this.find('.cms-content-loading-overlay,.cms-content-loading-spinner').remove();
	      this._super();
	    }
	  });
	
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
	
	  $('.cms .cms-panel-link').entwine({
	    onclick: function onclick(e) {
	      if ($(this).hasClass('external-link')) {
	        e.stopPropagation();
	
	        return;
	      }
	
	      var href = this.attr('href'),
	          url = href && !href.match(/^#/) ? href : this.data('href'),
	          data = { pjax: this.data('pjaxTarget') };
	
	      $('.cms-container').loadPanel(url, null, data);
	      e.preventDefault();
	    }
	  });
	
	  $('.cms .ss-ui-button-ajax').entwine({
	    onclick: function onclick(e) {
	      $(this).removeClass('ui-button-text-only');
	      $(this).addClass('ss-ui-button-loading ui-button-text-icons');
	
	      var loading = $(this).find(".ss-ui-loading-icon");
	
	      if (loading.length < 1) {
	        loading = $("<span></span>").addClass('ss-ui-loading-icon ui-button-icon-primary ui-icon');
	
	        $(this).prepend(loading);
	      }
	
	      loading.show();
	
	      var href = this.attr('href'),
	          url = href ? href : this.data('href');
	
	      jQuery.ajax({
	        url: url,
	
	        complete: function complete(xmlhttp, status) {
	          var msg = xmlhttp.getResponseHeader('X-Status') ? xmlhttp.getResponseHeader('X-Status') : xmlhttp.responseText;
	
	          try {
	            if (typeof msg != "undefined" && msg !== null) eval(msg);
	          } catch (e) {}
	
	          loading.hide();
	
	          $(".cms-container").refresh();
	
	          $(this).removeClass('ss-ui-button-loading ui-button-text-icons');
	          $(this).addClass('ui-button-text-only');
	        },
	        dataType: 'html'
	      });
	      e.preventDefault();
	    }
	  });
	
	  $('.cms .ss-ui-dialog-link').entwine({
	    UUID: null,
	    onmatch: function onmatch() {
	      this._super();
	      this.setUUID(new Date().getTime());
	    },
	    onunmatch: function onunmatch() {
	      this._super();
	    },
	    onclick: function onclick() {
	      this._super();
	
	      var self = this,
	          id = 'ss-ui-dialog-' + this.getUUID();
	      var dialog = $('#' + id);
	      if (!dialog.length) {
	        dialog = $('<div class="ss-ui-dialog" id="' + id + '" />');
	        $('body').append(dialog);
	      }
	
	      var extraClass = this.data('popupclass') ? this.data('popupclass') : '';
	
	      dialog.ssdialog({ iframeUrl: this.attr('href'), autoOpen: true, dialogExtraClass: extraClass });
	      return false;
	    }
	  });
	
	  $('.cms-content .btn-toolbar').entwine({
	    onmatch: function onmatch() {
	      this.find('.ss-ui-button').click(function () {
	        var form = this.form;
	
	        if (form) {
	          form.clickedButton = this;
	
	          setTimeout(function () {
	            form.clickedButton = null;
	          }, 10);
	        }
	      });
	
	      this.redraw();
	      this._super();
	    },
	    onunmatch: function onunmatch() {
	      this._super();
	    },
	    redraw: function redraw() {
	      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));
	
	      this.contents().filter(function () {
	        return this.nodeType == 3 && !/\S/.test(this.nodeValue);
	      }).remove();
	
	      this.find('.ss-ui-button').each(function () {
	        if (!$(this).data('button')) $(this).button();
	      });
	
	      this.find('.ss-ui-buttonset').buttonset();
	    }
	  });
	
	  $('.cms .field.date input.text').entwine({
	    onmatch: function onmatch() {
	      var holder = $(this).parents('.field.date:first'),
	          config = holder.data();
	      if (!config.showcalendar) {
	        this._super();
	        return;
	      }
	
	      config.showOn = 'button';
	      if (config.locale && $.datepicker.regional[config.locale]) {
	        config = $.extend(config, $.datepicker.regional[config.locale], {});
	      }
	
	      if (!this.prop('disabled') && !this.prop('readonly')) {
	        $(this).datepicker(config);
	      }
	
	
	      this._super();
	    },
	    onunmatch: function onunmatch() {
	      this._super();
	    }
	  });
	
	  $('.cms .field.dropdown select, .cms .field select[multiple], .form__fieldgroup-item select.dropdown').entwine({
	    onmatch: function onmatch() {
	      if (this.is('.no-chosen')) {
	        this._super();
	        return;
	      }
	
	      if (!this.data('placeholder')) this.data('placeholder', ' ');
	
	      this.removeClass('has-chosen').chosen("destroy");
	      this.siblings('.chosen-container').remove();
	
	      applyChosen(this);
	
	      this._super();
	    },
	    onunmatch: function onunmatch() {
	      this._super();
	    }
	  });
	
	  $(".cms-panel-layout").entwine({
	    redraw: function redraw() {
	      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));
	    }
	  });
	
	  $('.cms .grid-field').entwine({
	    showDetailView: function showDetailView(url) {
	      var params = window.location.search.replace(/^\?/, '');
	      if (params) url = $.path.addSearchParams(url, params);
	      $('.cms-container').loadPanel(url);
	    }
	  });
	
	  $('.cms-search-form').entwine({
	    onsubmit: function onsubmit(e) {
	      var nonEmptyInputs, url;
	
	      nonEmptyInputs = this.find(':input:not(:submit)').filter(function () {
	        var vals = $.grep($(this).fieldValue(), function (val) {
	          return val;
	        });
	        return vals.length;
	      });
	
	      url = this.attr('action');
	
	      if (nonEmptyInputs.length) {
	        url = $.path.addSearchParams(url, nonEmptyInputs.serialize().replace('+', '%20'));
	      }
	
	      var container = this.closest('.cms-container');
	      container.find('.cms-edit-form').tabs('select', 0);
	      container.loadPanel(url, "", {}, true);
	
	      return false;
	    }
	  });
	
	  $(".cms-search-form button[type=reset], .cms-search-form input[type=reset]").entwine({
	    onclick: function onclick(e) {
	      e.preventDefault();
	
	      var form = $(this).parents('form');
	
	      form.clearForm();
	      form.find(".dropdown select").prop('selectedIndex', 0).trigger("chosen:updated");
	      form.submit();
	    }
	  });
	
	  window._panelDeferredCache = {};
	  $('.cms-panel-deferred').entwine({
	    onadd: function onadd() {
	      this._super();
	      this.redraw();
	    },
	    onremove: function onremove() {
	      if (window.debug) console.log('saving', this.data('url'), this);
	
	      if (!this.data('deferredNoCache')) window._panelDeferredCache[this.data('url')] = this.html();
	      this._super();
	    },
	    redraw: function redraw() {
	      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));
	
	      var self = this,
	          url = this.data('url');
	      if (!url) throw 'Elements of class .cms-panel-deferred need a "data-url" attribute';
	
	      this._super();
	
	      if (!this.children().length) {
	        if (!this.data('deferredNoCache') && typeof window._panelDeferredCache[url] !== 'undefined') {
	          this.html(window._panelDeferredCache[url]);
	        } else {
	          this.addClass('loading');
	          $.ajax({
	            url: url,
	            complete: function complete() {
	              self.removeClass('loading');
	            },
	            success: function success(data, status, xhr) {
	              self.html(data);
	            }
	          });
	        }
	      }
	    }
	  });
	
	  $('.cms-tabset').entwine({
	    onadd: function onadd() {
	      this.redrawTabs();
	      this._super();
	    },
	    onremove: function onremove() {
	      if (this.data('tabs')) this.tabs('destroy');
	      this._super();
	    },
	    redrawTabs: function redrawTabs() {
	      this.rewriteHashlinks();
	
	      var id = this.attr('id'),
	          activeTab = this.find('ul:first .ui-tabs-active');
	
	      if (!this.data('tabs')) this.tabs({
	        active: activeTab.index() != -1 ? activeTab.index() : 0,
	        beforeLoad: function beforeLoad(e, ui) {
	          return false;
	        },
	        beforeActivate: function beforeActivate(e, ui) {
	          var link = ui.oldTab.find('.cms-panel-link');
	
	          if (link && link.length === 1) {
	            return false;
	          }
	        },
	        activate: function activate(e, ui) {
	          var actions = $(this).closest('form').find('.btn-toolbar');
	          if ($(ui.newTab).closest('li').hasClass('readonly')) {
	            actions.fadeOut();
	          } else {
	            actions.show();
	          }
	        }
	      });
	      this.trigger('afterredrawtabs');
	    },
	
	    rewriteHashlinks: function rewriteHashlinks() {
	      $(this).find('ul a').each(function () {
	        if (!$(this).attr('href')) return;
	        var matches = $(this).attr('href').match(/#.*/);
	        if (!matches) return;
	        $(this).attr('href', document.location.href.replace(/#.*/, '') + matches[0]);
	      });
	    }
	  });
	
	  $('#filters-button').entwine({
	    onmatch: function onmatch() {
	      this._super();
	
	      this.data('collapsed', true);
	      this.data('animating', false);
	    },
	    onunmatch: function onunmatch() {
	      this._super();
	    },
	    showHide: function showHide() {
	      var self = this,
	          $filters = $('.cms-content-filters').first(),
	          collapsed = this.data('collapsed');
	
	      if (collapsed) {
	        this.addClass('active');
	        $filters.css('display', 'block');
	      } else {
	        this.removeClass('active');
	        $filters.css('display', '');
	      }
	      self.data('collapsed', !collapsed);
	    },
	    onclick: function onclick() {
	      this.showHide();
	    }
	  });
	});
	
	var statusMessage = function statusMessage(text, type) {
	  text = jQuery('<div/>').text(text).html();
	  jQuery.noticeAdd({ text: text, type: type, stayTime: 5000, inEffect: { left: '0', opacity: 'show' } });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jQuery2.default.entwine('ss', function ($) {
	  $('.ss-tabset.ss-ui-action-tabset').entwine({
	    IgnoreTabState: true,
	
	    onadd: function onadd() {
	      this._super();
	
	      this.tabs({ 'collapsible': true, 'active': false });
	    },
	
	    onremove: function onremove() {
	      var frame = $('.cms-container').find('iframe');
	      frame.each(function (index, iframe) {
	        try {
	          $(iframe).contents().off('click.ss-ui-action-tabset');
	        } catch (e) {
	          console.warn('Unable to access iframe, possible https mis-match');
	        }
	      });
	      $(document).off('click.ss-ui-action-tabset');
	
	      this._super();
	    },
	
	    'ontabsbeforeactivate': function ontabsbeforeactivate(event, ui) {
	      this.riseUp(event, ui);
	    },
	
	    onclick: function onclick(event, ui) {
	      this.attachCloseHandler(event, ui);
	    },
	
	    attachCloseHandler: function attachCloseHandler(event, ui) {
	      var that = this,
	          frame = $('.cms-container').find('iframe'),
	          _closeHandler;
	
	      _closeHandler = function closeHandler(event) {
	        var panel, frame;
	        panel = $(event.target).closest('.ss-ui-action-tabset .ui-tabs-panel');
	
	        if (!$(event.target).closest(that).length && !panel.length) {
	          that.tabs('option', 'active', false);
	          frame = $('.cms-container').find('iframe');
	          frame.each(function (index, iframe) {
	            $(iframe).contents().off('click.ss-ui-action-tabset', _closeHandler);
	          });
	          $(document).off('click.ss-ui-action-tabset', _closeHandler);
	        }
	      };
	
	      $(document).on('click.ss-ui-action-tabset', _closeHandler);
	
	      if (frame.length > 0) {
	        frame.each(function (index, iframe) {
	          $(iframe).contents().on('click.ss-ui-action-tabset', _closeHandler);
	        });
	      }
	    },
	
	    riseUp: function riseUp(event, ui) {
	      var elHeight, trigger, endOfWindow, elPos, activePanel, activeTab, topPosition, containerSouth, padding;
	
	      elHeight = $(this).find('.ui-tabs-panel').outerHeight();
	      trigger = $(this).find('.ui-tabs-nav').outerHeight();
	      endOfWindow = $(window).height() + $(document).scrollTop() - trigger;
	      elPos = $(this).find('.ui-tabs-nav').offset().top;
	
	      activePanel = ui.newPanel;
	      activeTab = ui.newTab;
	
	      if (elPos + elHeight >= endOfWindow && elPos - elHeight > 0) {
	        this.addClass('rise-up');
	
	        if (activeTab.position() !== null) {
	          topPosition = -activePanel.outerHeight();
	          containerSouth = activePanel.parents('.toolbar--south');
	          if (containerSouth) {
	            padding = activeTab.offset().top - containerSouth.offset().top;
	            topPosition = topPosition - padding;
	          }
	          $(activePanel).css('top', topPosition + "px");
	        }
	      } else {
	        this.removeClass('rise-up');
	        if (activeTab.position() !== null) {
	          $(activePanel).css('bottom', '100%');
	        }
	      }
	      return false;
	    }
	  });
	
	  $('.cms-content-actions .ss-tabset.ss-ui-action-tabset').entwine({
	    'ontabsbeforeactivate': function ontabsbeforeactivate(event, ui) {
	      this._super(event, ui);
	
	      if ($(ui.newPanel).length > 0) {
	        $(ui.newPanel).css('left', ui.newTab.position().left + "px");
	      }
	    }
	  });
	
	  $('.cms-actions-row.ss-tabset.ss-ui-action-tabset').entwine({
	    'ontabsbeforeactivate': function ontabsbeforeactivate(event, ui) {
	      this._super(event, ui);
	
	      $(this).closest('.ss-ui-action-tabset').removeClass('tabset-open tabset-open-last');
	    }
	  });
	
	  $('.cms-content-fields .ss-tabset.ss-ui-action-tabset').entwine({
	    'ontabsbeforeactivate': function ontabsbeforeactivate(event, ui) {
	      this._super(event, ui);
	      if ($(ui.newPanel).length > 0) {
	        if ($(ui.newTab).hasClass("last")) {
	          $(ui.newPanel).css({ 'left': 'auto', 'right': '0px' });
	
	          $(ui.newPanel).parent().addClass('tabset-open-last');
	        } else {
	          $(ui.newPanel).css('left', ui.newTab.position().left + "px");
	
	          if ($(ui.newTab).hasClass("first")) {
	            $(ui.newPanel).css('left', "0px");
	            $(ui.newPanel).parent().addClass('tabset-open');
	          }
	        }
	      }
	    }
	  });
	
	  $('.cms-tree-view-sidebar .cms-actions-row.ss-tabset.ss-ui-action-tabset').entwine({
	    'from .ui-tabs-nav li': {
	      onhover: function onhover(e) {
	        $(e.target).parent().find('li .active').removeClass('active');
	        $(e.target).find('a').addClass('active');
	      }
	    },
	
	    'ontabsbeforeactivate': function ontabsbeforeactivate(event, ui) {
	      this._super(event, ui);
	
	      $(ui.newPanel).css({ 'left': 'auto', 'right': 'auto' });
	
	      if ($(ui.newPanel).length > 0) {
	        $(ui.newPanel).parent().addClass('tabset-open');
	      }
	    }
	  });
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jQuery2.default.entwine('ss', function ($) {
	  $.entwine.warningLevel = $.entwine.WARN_LEVEL_BESTPRACTISE;
	
	  $('.cms-panel').entwine({
	
	    WidthExpanded: null,
	
	    WidthCollapsed: null,
	
	    canSetCookie: function canSetCookie() {
	      return $.cookie !== void 0 && this.attr('id') !== void 0;
	    },
	
	    getPersistedCollapsedState: function getPersistedCollapsedState() {
	      var isCollapsed, cookieValue;
	
	      if (this.canSetCookie()) {
	        cookieValue = $.cookie('cms-panel-collapsed-' + this.attr('id'));
	
	        if (cookieValue !== void 0 && cookieValue !== null) {
	          isCollapsed = cookieValue === 'true';
	        }
	      }
	
	      return isCollapsed;
	    },
	
	    setPersistedCollapsedState: function setPersistedCollapsedState(newState) {
	      if (this.canSetCookie()) {
	        $.cookie('cms-panel-collapsed-' + this.attr('id'), newState, { path: '/', expires: 31 });
	      }
	    },
	
	    clearPersistedCollapsedState: function clearPersistedCollapsedState() {
	      if (this.canSetCookie()) {
	        $.cookie('cms-panel-collapsed-' + this.attr('id'), '', { path: '/', expires: -1 });
	      }
	    },
	
	    getInitialCollapsedState: function getInitialCollapsedState() {
	      var isCollapsed = this.getPersistedCollapsedState();
	
	      if (isCollapsed === void 0) {
	        isCollapsed = this.hasClass('collapsed');
	      }
	
	      return isCollapsed;
	    },
	
	    onadd: function onadd() {
	      var collapsedContent, container;
	
	      if (!this.find('.cms-panel-content').length) throw new Exception('Content panel for ".cms-panel" not found');
	
	      if (!this.find('.cms-panel-toggle').length) {
	        container = $("<div class='toolbar toolbar--south cms-panel-toggle'></div>").append('<a class="toggle-expand" href="#"><span>&raquo;</span></a>').append('<a class="toggle-collapse" href="#"><span>&laquo;</span></a>');
	
	        this.append(container);
	      }
	
	      this.setWidthExpanded(this.find('.cms-panel-content').innerWidth());
	
	      collapsedContent = this.find('.cms-panel-content-collapsed');
	      this.setWidthCollapsed(collapsedContent.length ? collapsedContent.innerWidth() : this.find('.toggle-expand').innerWidth());
	
	      this.togglePanel(!this.getInitialCollapsedState(), true, false);
	
	      this._super();
	    },
	
	    togglePanel: function togglePanel(doExpand, silent, doSaveState) {
	      var newWidth, collapsedContent;
	
	      if (!silent) {
	        this.trigger('beforetoggle.sspanel', doExpand);
	        this.trigger(doExpand ? 'beforeexpand' : 'beforecollapse');
	      }
	
	      this.toggleClass('collapsed', !doExpand);
	      newWidth = doExpand ? this.getWidthExpanded() : this.getWidthCollapsed();
	
	      this.width(newWidth);
	      collapsedContent = this.find('.cms-panel-content-collapsed');
	      if (collapsedContent.length) {
	        this.find('.cms-panel-content')[doExpand ? 'show' : 'hide']();
	        this.find('.cms-panel-content-collapsed')[doExpand ? 'hide' : 'show']();
	      }
	
	      if (doSaveState !== false) {
	        this.setPersistedCollapsedState(!doExpand);
	      }
	
	      this.trigger('toggle', doExpand);
	      this.trigger(doExpand ? 'expand' : 'collapse');
	    },
	
	    expandPanel: function expandPanel(force) {
	      if (!force && !this.hasClass('collapsed')) return;
	
	      this.togglePanel(true);
	    },
	
	    collapsePanel: function collapsePanel(force) {
	      if (!force && this.hasClass('collapsed')) return;
	
	      this.togglePanel(false);
	    }
	  });
	
	  $('.cms-panel.collapsed .cms-panel-toggle').entwine({
	    onclick: function onclick(e) {
	      this.expandPanel();
	      e.preventDefault();
	    }
	  });
	
	  $('.cms-panel *').entwine({
	    getPanel: function getPanel() {
	      return this.parents('.cms-panel:first');
	    }
	  });
	
	  $('.cms-panel .toggle-expand').entwine({
	    onclick: function onclick(e) {
	      e.preventDefault();
	      e.stopPropagation();
	
	      this.getPanel().expandPanel();
	
	      this._super(e);
	    }
	  });
	
	  $('.cms-panel .toggle-collapse').entwine({
	    onclick: function onclick(e) {
	      e.preventDefault();
	      e.stopPropagation();
	
	      this.getPanel().collapsePanel();
	
	      this._super(e);
	    }
	  });
	
	  $('.cms-content-tools.collapsed').entwine({
	    onclick: function onclick(e) {
	      this.expandPanel();
	      this._super(e);
	    }
	  });
	});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jQuery2.default.entwine('ss.tree', function ($) {
	
	  $('.cms-tree').entwine({
	
	    Hints: null,
	
	    IsUpdatingTree: false,
	
	    IsLoaded: false,
	
	    onadd: function onadd() {
	      this._super();
	
	      if ($.isNumeric(this.data('jstree_instance_id'))) return;
	
	      var hints = this.attr('data-hints');
	      if (hints) this.setHints($.parseJSON(hints));
	
	      var self = this;
	      this.jstree(this.getTreeConfig()).bind('loaded.jstree', function (e, data) {
	        self.setIsLoaded(true);
	
	        data.inst._set_settings({ 'html_data': { 'ajax': {
	              'url': self.data('urlTree'),
	              'data': function data(node) {
	                var params = self.data('searchparams') || [];
	
	                params = $.grep(params, function (n, i) {
	                  return n.name != 'ID' && n.name != 'value';
	                });
	                params.push({ name: 'ID', value: $(node).data("id") ? $(node).data("id") : 0 });
	                params.push({ name: 'ajax', value: 1 });
	                return params;
	              }
	            } } });
	
	        self.updateFromEditForm();
	        self.css('visibility', 'visible');
	
	        data.inst.hide_checkboxes();
	      }).bind('before.jstree', function (e, data) {
	        if (data.func == 'start_drag') {
	          if (!self.hasClass('draggable') || self.hasClass('multiselect')) {
	            e.stopImmediatePropagation();
	            return false;
	          }
	        }
	
	        if ($.inArray(data.func, ['check_node', 'uncheck_node'])) {
	          var node = $(data.args[0]).parents('li:first');
	          var allowedChildren = node.find('li:not(.disabled)');
	
	          if (node.hasClass('disabled') && allowedChildren == 0) {
	            e.stopImmediatePropagation();
	            return false;
	          }
	        }
	      }).bind('move_node.jstree', function (e, data) {
	        if (self.getIsUpdatingTree()) return;
	
	        var movedNode = data.rslt.o,
	            newParentNode = data.rslt.np,
	            oldParentNode = data.inst._get_parent(movedNode),
	            newParentID = $(newParentNode).data('id') || 0,
	            nodeID = $(movedNode).data('id');
	        var siblingIDs = $.map($(movedNode).siblings().andSelf(), function (el) {
	          return $(el).data('id');
	        });
	
	        $.ajax({
	          'url': $.path.addSearchParams(self.data('urlSavetreenode'), self.data('extraParams')),
	          'type': 'POST',
	          'data': {
	            ID: nodeID,
	            ParentID: newParentID,
	            SiblingIDs: siblingIDs
	          },
	          success: function success() {
	            if ($('.cms-edit-form :input[name=ID]').val() == nodeID) {
	              $('.cms-edit-form :input[name=ParentID]').val(newParentID);
	            }
	            self.updateNodesFromServer([nodeID]);
	          },
	          statusCode: {
	            403: function _() {
	              $.jstree.rollback(data.rlbk);
	            }
	          }
	        });
	      }).bind('select_node.jstree check_node.jstree uncheck_node.jstree', function (e, data) {
	        $(document).triggerHandler(e, data);
	      });
	    },
	    onremove: function onremove() {
	      this.jstree('destroy');
	      this._super();
	    },
	
	    'from .cms-container': {
	      onafterstatechange: function onafterstatechange(e) {
	        this.updateFromEditForm();
	      }
	    },
	
	    'from .cms-container form': {
	      onaftersubmitform: function onaftersubmitform(e) {
	        var id = $('.cms-edit-form :input[name=ID]').val();
	
	        this.updateNodesFromServer([id]);
	      }
	    },
	
	    getTreeConfig: function getTreeConfig() {
	      var self = this;
	      return {
	        'core': {
	          'initially_open': ['record-0'],
	          'animation': 0,
	          'html_titles': true
	        },
	        'html_data': {},
	        'ui': {
	          "select_limit": 1,
	          'initially_select': [this.find('.current').attr('id')]
	        },
	        "crrm": {
	          'move': {
	            'check_move': function check_move(data) {
	              var movedNode = $(data.o),
	                  newParent = $(data.np),
	                  isMovedOntoContainer = data.ot.get_container()[0] == data.np[0],
	                  movedNodeClass = movedNode.getClassname(),
	                  newParentClass = newParent.getClassname(),
	                  hints = self.getHints(),
	                  disallowedChildren = [],
	                  hintKey = newParentClass ? newParentClass : 'Root',
	                  hint = hints && typeof hints[hintKey] != 'undefined' ? hints[hintKey] : null;
	
	              if (hint && movedNode.attr('class').match(/VirtualPage-([^\s]*)/)) movedNodeClass = RegExp.$1;
	
	              if (hint) disallowedChildren = typeof hint.disallowedChildren != 'undefined' ? hint.disallowedChildren : [];
	              var isAllowed = movedNode.data('id') !== 0 && !movedNode.hasClass('status-archived') && (!isMovedOntoContainer || data.p == 'inside') && !newParent.hasClass('nochildren') && (!disallowedChildren.length || $.inArray(movedNodeClass, disallowedChildren) == -1);
	
	              return isAllowed;
	            }
	          }
	        },
	        'dnd': {
	          "drop_target": false,
	          "drag_target": false
	        },
	        'checkbox': {
	          'two_state': true
	        },
	        'themes': {
	          'theme': 'apple',
	          'url': $('body').data('frameworkpath') + '/thirdparty/jstree/themes/apple/style.css'
	        },
	
	        'plugins': ['html_data', 'ui', 'dnd', 'crrm', 'themes', 'checkbox']
	      };
	    },
	
	    search: function search(params, callback) {
	      if (params) this.data('searchparams', params);else this.removeData('searchparams');
	      this.jstree('refresh', -1, callback);
	    },
	
	    getNodeByID: function getNodeByID(id) {
	      return this.find('*[data-id=' + id + ']');
	    },
	
	    createNode: function createNode(html, data, callback) {
	      var self = this,
	          parentNode = data.ParentID !== void 0 ? self.getNodeByID(data.ParentID) : false,
	          newNode = $(html);
	
	      var properties = { data: '' };
	      if (newNode.hasClass('jstree-open')) {
	        properties.state = 'open';
	      } else if (newNode.hasClass('jstree-closed')) {
	        properties.state = 'closed';
	      }
	      this.jstree('create_node', parentNode.length ? parentNode : -1, 'last', properties, function (node) {
	        var origClasses = node.attr('class');
	
	        for (var i = 0; i < newNode[0].attributes.length; i++) {
	          var attr = newNode[0].attributes[i];
	          node.attr(attr.name, attr.value);
	        }
	
	        node.addClass(origClasses).html(newNode.html());
	        callback(node);
	      });
	    },
	
	    updateNode: function updateNode(node, html, data) {
	      var self = this,
	          newNode = $(html);
	
	      var nextNode = data.NextID ? this.getNodeByID(data.NextID) : false;
	      var prevNode = data.PrevID ? this.getNodeByID(data.PrevID) : false;
	      var parentNode = data.ParentID ? this.getNodeByID(data.ParentID) : false;
	
	      $.each(['id', 'style', 'class', 'data-pagetype'], function (i, attrName) {
	        node.attr(attrName, newNode.attr(attrName));
	      });
	
	      var origChildren = node.children('ul').detach();
	      node.html(newNode.html()).append(origChildren);
	
	      if (nextNode && nextNode.length) {
	        this.jstree('move_node', node, nextNode, 'before');
	      } else if (prevNode && prevNode.length) {
	        this.jstree('move_node', node, prevNode, 'after');
	      } else {
	        this.jstree('move_node', node, parentNode.length ? parentNode : -1);
	      }
	    },
	
	    updateFromEditForm: function updateFromEditForm() {
	      var node,
	          id = $('.cms-edit-form :input[name=ID]').val();
	      if (id) {
	        node = this.getNodeByID(id);
	        if (node.length) {
	          this.jstree('deselect_all');
	          this.jstree('select_node', node);
	        } else {
	          this.updateNodesFromServer([id]);
	        }
	      } else {
	        this.jstree('deselect_all');
	      }
	    },
	
	    updateNodesFromServer: function updateNodesFromServer(ids) {
	      if (this.getIsUpdatingTree() || !this.getIsLoaded()) return;
	
	      var self = this,
	          i,
	          includesNewNode = false;
	      this.setIsUpdatingTree(true);
	      self.jstree('save_selected');
	
	      var correctStateFn = function correctStateFn(node) {
	        self.getNodeByID(node.data('id')).not(node).remove();
	
	        self.jstree('deselect_all');
	        self.jstree('select_node', node);
	      };
	
	      self.jstree('open_node', this.getNodeByID(0));
	      self.jstree('save_opened');
	      self.jstree('save_selected');
	
	      $.ajax({
	        url: $.path.addSearchParams(this.data('urlUpdatetreenodes'), 'ids=' + ids.join(',')),
	        dataType: 'json',
	        success: function success(data, xhr) {
	          $.each(data, function (nodeId, nodeData) {
	            var node = self.getNodeByID(nodeId);
	
	            if (!nodeData) {
	              self.jstree('delete_node', node);
	              return;
	            }
	
	            if (node.length) {
	              self.updateNode(node, nodeData.html, nodeData);
	              setTimeout(function () {
	                correctStateFn(node);
	              }, 500);
	            } else {
	              includesNewNode = true;
	
	              if (nodeData.ParentID && !self.find('li[data-id=' + nodeData.ParentID + ']').length) {
	                self.jstree('load_node', -1, function () {
	                  newNode = self.find('li[data-id=' + nodeId + ']');
	                  correctStateFn(newNode);
	                });
	              } else {
	                self.createNode(nodeData.html, nodeData, function (newNode) {
	                  correctStateFn(newNode);
	                });
	              }
	            }
	          });
	
	          if (!includesNewNode) {
	            self.jstree('deselect_all');
	            self.jstree('reselect');
	            self.jstree('reopen');
	          }
	        },
	        complete: function complete() {
	          self.setIsUpdatingTree(false);
	        }
	      });
	    }
	
	  });
	
	  $('.cms-tree.multiple').entwine({
	    onmatch: function onmatch() {
	      this._super();
	      this.jstree('show_checkboxes');
	    },
	    onunmatch: function onunmatch() {
	      this._super();
	      this.jstree('uncheck_all');
	      this.jstree('hide_checkboxes');
	    },
	
	    getSelectedIDs: function getSelectedIDs() {
	      return $(this).jstree('get_checked').not('.disabled').map(function () {
	        return $(this).data('id');
	      }).get();
	    }
	  });
	
	  $('.cms-tree li').entwine({
	    setEnabled: function setEnabled(bool) {
	      this.toggleClass('disabled', !bool);
	    },
	
	    getClassname: function getClassname() {
	      var matches = this.attr('class').match(/class-([^\s]*)/i);
	      return matches ? matches[1] : '';
	    },
	
	    getID: function getID() {
	      return this.data('id');
	    }
	  });
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jQuery2.default.entwine('ss', function ($) {
	  $('.cms-content').entwine({
	
	    onadd: function onadd() {
	      var self = this;
	
	      this.find('.cms-tabset').redrawTabs();
	      this._super();
	    },
	
	    redraw: function redraw() {
	      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));
	
	      this.add(this.find('.cms-tabset')).redrawTabs();
	      this.find('.cms-content-header').redraw();
	      this.find('.cms-content-actions').redraw();
	    }
	  });
	
	  $('.cms-content .cms-tree').entwine({
	    onadd: function onadd() {
	      var self = this;
	
	      this._super();
	
	      this.bind('select_node.jstree', function (e, data) {
	        var node = data.rslt.obj,
	            loadedNodeID = self.find(':input[name=ID]').val(),
	            origEvent = data.args[2],
	            container = $('.cms-container');
	
	        if (!origEvent) {
	          return false;
	        }
	
	        if ($(node).hasClass('disabled')) return false;
	
	        if ($(node).data('id') == loadedNodeID) return;
	
	        var url = $(node).find('a:first').attr('href');
	        if (url && url != '#') {
	          url = url.split('?')[0];
	
	          self.jstree('deselect_all');
	          self.jstree('uncheck_all');
	
	          if ($.path.isExternal($(node).find('a:first'))) url = url = $.path.makeUrlAbsolute(url, $('base').attr('href'));
	
	          if (document.location.search) url = $.path.addSearchParams(url, document.location.search.replace(/^\?/, ''));
	
	          container.loadPanel(url);
	        } else {
	          self.removeForm();
	        }
	      });
	    }
	  });
	
	  $('.cms-content .cms-content-fields').entwine({
	    redraw: function redraw() {
	      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));
	    }
	  });
	
	  $('.cms-content .cms-content-header, .cms-content .cms-content-actions').entwine({
	    redraw: function redraw() {
	      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));
	
	      this.height('auto');
	      this.height(this.innerHeight() - this.css('padding-top') - this.css('padding-bottom'));
	    }
	  });
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	var _i18n = __webpack_require__(94);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.onbeforeunload = function (e) {
	  var form = (0, _jQuery2.default)('.cms-edit-form');
	  form.trigger('beforesubmitform');
	  if (form.is('.changed') && !form.is('.discardchanges')) {
	    return _i18n2.default._t('LeftAndMain.CONFIRMUNSAVEDSHORT');
	  }
	};
	
	_jQuery2.default.entwine('ss', function ($) {
	  $('.cms-edit-form').entwine({
	    PlaceholderHtml: '',
	
	    ChangeTrackerOptions: {
	      ignoreFieldSelector: '.no-change-track, .ss-upload :input, .cms-navigator :input'
	    },
	
	    ValidationErrorShown: false,
	
	    onadd: function onadd() {
	      var self = this;
	
	      this.attr("autocomplete", "off");
	
	      this._setupChangeTracker();
	
	      for (var overrideAttr in { 'action': true, 'method': true, 'enctype': true, 'name': true }) {
	        var el = this.find(':input[name=' + '_form_' + overrideAttr + ']');
	        if (el) {
	          this.attr(overrideAttr, el.val());
	          el.remove();
	        }
	      }
	
	      this.setValidationErrorShown(false);
	
	      this._super();
	    },
	    'from .cms-tabset': {
	      onafterredrawtabs: function onafterredrawtabs() {
	        if (this.hasClass('validationerror')) {
	          var tabError = this.find('.message.validation, .message.required').first().closest('.tab');
	          $('.cms-container').clearCurrentTabState();
	          var $tabSet = tabError.closest('.ss-tabset');
	
	          if (!$tabSet.length) {
	            $tabSet = tabError.closest('.cms-tabset');
	          }
	
	          if ($tabSet.length) {
	            $tabSet.tabs('option', 'active', tabError.index('.tab'));
	          } else if (!this.getValidationErrorShown()) {
	            this.setValidationErrorShown(true);
	            errorMessage(ss.i18n._t('ModelAdmin.VALIDATIONERROR', 'Validation Error'));
	          }
	        }
	      }
	    },
	    onremove: function onremove() {
	      this.changetracker('destroy');
	      this._super();
	    },
	    onmatch: function onmatch() {
	      this._super();
	    },
	    onunmatch: function onunmatch() {
	      this._super();
	    },
	    redraw: function redraw() {
	      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));
	
	      this.add(this.find('.cms-tabset')).redrawTabs();
	      this.find('.cms-content-header').redraw();
	    },
	
	    _setupChangeTracker: function _setupChangeTracker() {
	      this.changetracker(this.getChangeTrackerOptions());
	    },
	
	    confirmUnsavedChanges: function confirmUnsavedChanges() {
	      this.trigger('beforesubmitform');
	      if (!this.is('.changed') || this.is('.discardchanges')) {
	        return true;
	      }
	      var confirmed = confirm(_i18n2.default._t('LeftAndMain.CONFIRMUNSAVED'));
	      if (confirmed) {
	        this.addClass('discardchanges');
	      }
	      return confirmed;
	    },
	
	    onsubmit: function onsubmit(e, button) {
	      if (this.prop("target") != "_blank") {
	        if (button) this.closest('.cms-container').submitForm(this, button);
	        return false;
	      }
	    },
	
	    validate: function validate() {
	      var isValid = true;
	      this.trigger('validate', { isValid: isValid });
	
	      return isValid;
	    },
	
	    'from .htmleditor': {
	      oneditorinit: function oneditorinit(e) {
	        var self = this,
	            field = $(e.target).closest('.field.htmleditor'),
	            editor = field.find('textarea.htmleditor').getEditor().getInstance();
	
	        editor.onClick.add(function (e) {
	          self.saveFieldFocus(field.attr('id'));
	        });
	      }
	    },
	
	    'from .cms-edit-form :input:not(:submit)': {
	      onclick: function onclick(e) {
	        this.saveFieldFocus($(e.target).attr('id'));
	      },
	      onfocus: function onfocus(e) {
	        this.saveFieldFocus($(e.target).attr('id'));
	      }
	    },
	
	    'from .cms-edit-form .treedropdown *': {
	      onfocusin: function onfocusin(e) {
	        var field = $(e.target).closest('.field.treedropdown');
	        this.saveFieldFocus(field.attr('id'));
	      }
	    },
	
	    'from .cms-edit-form .dropdown .chosen-container a': {
	      onfocusin: function onfocusin(e) {
	        var field = $(e.target).closest('.field.dropdown');
	        this.saveFieldFocus(field.attr('id'));
	      }
	    },
	
	    'from .cms-container': {
	      ontabstaterestored: function ontabstaterestored(e) {
	        this.restoreFieldFocus();
	      }
	    },
	
	    saveFieldFocus: function saveFieldFocus(selected) {
	      if (typeof window.sessionStorage == "undefined" || window.sessionStorage === null) return;
	
	      var id = $(this).attr('id'),
	          focusElements = [];
	
	      focusElements.push({
	        id: id,
	        selected: selected
	      });
	
	      if (focusElements) {
	        try {
	          window.sessionStorage.setItem(id, JSON.stringify(focusElements));
	        } catch (err) {
	          if (err.code === DOMException.QUOTA_EXCEEDED_ERR && window.sessionStorage.length === 0) {
	            return;
	          } else {
	            throw err;
	          }
	        }
	      }
	    },
	
	    restoreFieldFocus: function restoreFieldFocus() {
	      if (typeof window.sessionStorage == "undefined" || window.sessionStorage === null) return;
	
	      var self = this,
	          hasSessionStorage = typeof window.sessionStorage !== "undefined" && window.sessionStorage,
	          sessionData = hasSessionStorage ? window.sessionStorage.getItem(this.attr('id')) : null,
	          sessionStates = sessionData ? JSON.parse(sessionData) : false,
	          elementID,
	          tabbed = this.find('.ss-tabset').length !== 0,
	          activeTab,
	          elementTab,
	          toggleComposite,
	          scrollY;
	
	      if (hasSessionStorage && sessionStates.length > 0) {
	        $.each(sessionStates, function (i, sessionState) {
	          if (self.is('#' + sessionState.id)) {
	            elementID = $('#' + sessionState.selected);
	          }
	        });
	
	        if ($(elementID).length < 1) {
	          this.focusFirstInput();
	          return;
	        }
	
	        activeTab = $(elementID).closest('.ss-tabset').find('.ui-tabs-nav .ui-tabs-active .ui-tabs-anchor').attr('id');
	        elementTab = 'tab-' + $(elementID).closest('.ss-tabset .ui-tabs-panel').attr('id');
	
	        if (tabbed && elementTab !== activeTab) {
	          return;
	        }
	
	        toggleComposite = $(elementID).closest('.togglecomposite');
	
	        if (toggleComposite.length > 0) {
	          toggleComposite.accordion('activate', toggleComposite.find('.ui-accordion-header'));
	        }
	
	        scrollY = $(elementID).position().top;
	
	        if (!$(elementID).is(':visible')) {
	          elementID = '#' + $(elementID).closest('.field').attr('id');
	          scrollY = $(elementID).position().top;
	        }
	
	        $(elementID).focus();
	
	        if (scrollY > $(window).height() / 2) {
	          self.find('.cms-content-fields').scrollTop(scrollY);
	        }
	      } else {
	        this.focusFirstInput();
	      }
	    },
	
	    focusFirstInput: function focusFirstInput() {
	      this.find(':input:not(:submit)[data-skip-autofocus!="true"]').filter(':visible:first').focus();
	    }
	  });
	
	  $('.cms-edit-form .btn-toolbar input.action[type=submit], .cms-edit-form .btn-toolbar button.action').entwine({
	    onclick: function onclick(e) {
	      if (this.hasClass('gridfield-button-delete') && !confirm(_i18n2.default._t('TABLEFIELD.DELETECONFIRMMESSAGE'))) {
	        e.preventDefault();
	        return false;
	      }
	
	      if (!this.is(':disabled')) {
	        this.parents('form').trigger('submit', [this]);
	      }
	      e.preventDefault();
	      return false;
	    }
	  });
	
	  $('.cms-edit-form .btn-toolbar input.action[type=submit].ss-ui-action-cancel, .cms-edit-form .btn-toolbar button.action.ss-ui-action-cancel').entwine({
	    onclick: function onclick(e) {
	      if (window.history.length > 1) {
	        window.history.back();
	      } else {
	        this.parents('form').trigger('submit', [this]);
	      }
	      e.preventDefault();
	    }
	  });
	
	  $('.cms-edit-form .ss-tabset').entwine({
	    onmatch: function onmatch() {
	      if (!this.hasClass('ss-ui-action-tabset')) {
	        var tabs = this.find("> ul:first");
	
	        if (tabs.children("li").length == 1) {
	          tabs.hide().parent().addClass("ss-tabset-tabshidden");
	        }
	      }
	
	      this._super();
	    },
	    onunmatch: function onunmatch() {
	      this._super();
	    }
	  });
	});
	
	var errorMessage = function errorMessage(text) {
	  jQuery.noticeAdd({ text: text, type: 'error', stayTime: 5000, inEffect: { left: '0', opacity: 'show' } });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = i18n;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jQuery2.default.entwine('ss', function ($) {
	  $('.cms-panel.cms-menu').entwine({
	    togglePanel: function togglePanel(doExpand, silent, doSaveState) {
	      $('.cms-menu-list').children('li').each(function () {
	        if (doExpand) {
	          $(this).children('ul').each(function () {
	            $(this).removeClass('collapsed-flyout');
	            if ($(this).data('collapse')) {
	              $(this).removeData('collapse');
	              $(this).addClass('collapse');
	            }
	          });
	        } else {
	          $(this).children('ul').each(function () {
	            $(this).addClass('collapsed-flyout');
	            $(this).hasClass('collapse');
	            $(this).removeClass('collapse');
	            $(this).data('collapse', true);
	          });
	        }
	      });
	
	      this.toggleFlyoutState(doExpand);
	
	      this._super(doExpand, silent, doSaveState);
	    },
	    toggleFlyoutState: function toggleFlyoutState(bool) {
	      if (bool) {
	        $('.collapsed').find('li').show();
	
	        $('.cms-menu-list').find('.child-flyout-indicator').hide();
	      } else {
	        $('.collapsed-flyout').find('li').each(function () {
	          $(this).hide();
	        });
	
	        var par = $('.cms-menu-list ul.collapsed-flyout').parent();
	        if (par.children('.child-flyout-indicator').length === 0) par.append('<span class="child-flyout-indicator"></span>').fadeIn();
	        par.children('.child-flyout-indicator').fadeIn();
	      }
	    },
	    siteTreePresent: function siteTreePresent() {
	      return $('#cms-content-tools-CMSMain').length > 0;
	    },
	
	    getPersistedStickyState: function getPersistedStickyState() {
	      var persistedState, cookieValue;
	
	      if ($.cookie !== void 0) {
	        cookieValue = $.cookie('cms-menu-sticky');
	
	        if (cookieValue !== void 0 && cookieValue !== null) {
	          persistedState = cookieValue === 'true';
	        }
	      }
	
	      return persistedState;
	    },
	
	    setPersistedStickyState: function setPersistedStickyState(isSticky) {
	      if ($.cookie !== void 0) {
	        $.cookie('cms-menu-sticky', isSticky, { path: '/', expires: 31 });
	      }
	    },
	
	    getEvaluatedCollapsedState: function getEvaluatedCollapsedState() {
	      var shouldCollapse,
	          manualState = this.getPersistedCollapsedState(),
	          menuIsSticky = $('.cms-menu').getPersistedStickyState(),
	          automaticState = this.siteTreePresent();
	
	      if (manualState === void 0) {
	        shouldCollapse = automaticState;
	      } else if (manualState !== automaticState && menuIsSticky) {
	        shouldCollapse = manualState;
	      } else {
	        shouldCollapse = automaticState;
	      }
	
	      return shouldCollapse;
	    },
	
	    onadd: function onadd() {
	      var self = this;
	
	      setTimeout(function () {
	        self.togglePanel(!self.getEvaluatedCollapsedState(), false, false);
	      }, 0);
	
	      $(window).on('ajaxComplete', function (e) {
	        setTimeout(function () {
	          self.togglePanel(!self.getEvaluatedCollapsedState(), false, false);
	        }, 0);
	      });
	
	      this._super();
	    }
	  });
	
	  $('.cms-menu-list').entwine({
	    onmatch: function onmatch() {
	      var self = this;
	
	      this.find('li.current').select();
	
	      this.updateItems();
	
	      this._super();
	    },
	    onunmatch: function onunmatch() {
	      this._super();
	    },
	
	    updateMenuFromResponse: function updateMenuFromResponse(xhr) {
	      var controller = xhr.getResponseHeader('X-Controller');
	      if (controller) {
	        var item = this.find('li#Menu-' + controller.replace(/\\/g, '-').replace(/[^a-zA-Z0-9\-_:.]+/, ''));
	        if (!item.hasClass('current')) item.select();
	      }
	      this.updateItems();
	    },
	
	    'from .cms-container': {
	      onafterstatechange: function onafterstatechange(e, data) {
	        this.updateMenuFromResponse(data.xhr);
	      },
	      onaftersubmitform: function onaftersubmitform(e, data) {
	        this.updateMenuFromResponse(data.xhr);
	      }
	    },
	
	    'from .cms-edit-form': {
	      onrelodeditform: function onrelodeditform(e, data) {
	        this.updateMenuFromResponse(data.xmlhttp);
	      }
	    },
	
	    getContainingPanel: function getContainingPanel() {
	      return this.closest('.cms-panel');
	    },
	
	    fromContainingPanel: {
	      ontoggle: function ontoggle(e) {
	        this.toggleClass('collapsed', $(e.target).hasClass('collapsed'));
	
	        $('.cms-container').trigger('windowresize');
	
	        if (this.hasClass('collapsed')) this.find('li.children.opened').removeClass('opened');
	
	        if (!this.hasClass('collapsed')) {
	          $('.toggle-children.opened').closest('li').addClass('opened');
	        }
	      }
	    },
	
	    updateItems: function updateItems() {
	      var editPageItem = this.find('#Menu-CMSMain');
	
	      editPageItem[editPageItem.is('.current') ? 'show' : 'hide']();
	
	      var currentID = $('.cms-content input[name=ID]').val();
	      if (currentID) {
	        this.find('li').each(function () {
	          if ($.isFunction($(this).setRecordID)) $(this).setRecordID(currentID);
	        });
	      }
	    }
	  });
	
	  $('.cms-menu-list li').entwine({
	    toggleFlyout: function toggleFlyout(bool) {
	      var fly = $(this);
	
	      if (fly.children('ul').first().hasClass('collapsed-flyout')) {
	        if (bool) {
	          if (!fly.children('ul').first().children('li').first().hasClass('clone')) {
	
	            var li = fly.clone();
	            li.addClass('clone').css({});
	
	            li.children('ul').first().remove();
	
	            li.find('span').not('.text').remove();
	
	            li.find('a').first().unbind('click');
	
	            fly.children('ul').prepend(li);
	          }
	
	          $('.collapsed-flyout').show();
	          fly.addClass('opened');
	          fly.children('ul').find('li').fadeIn('fast');
	        } else {
	          if (li) {
	            li.remove();
	          }
	          $('.collapsed-flyout').hide();
	          fly.removeClass('opened');
	          fly.find('toggle-children').removeClass('opened');
	          fly.children('ul').find('li').hide();
	        }
	      }
	    }
	  });
	
	  $('.cms-menu-list li').hoverIntent(function () {
	    $(this).toggleFlyout(true);
	  }, function () {
	    $(this).toggleFlyout(false);
	  });
	
	  $('.cms-menu-list .toggle').entwine({
	    onclick: function onclick(e) {
	      e.preventDefault();
	      $(this).toogleFlyout(true);
	    }
	  });
	
	  $('.cms-menu-list li').entwine({
	    onmatch: function onmatch() {
	      if (this.find('ul').length) {
	        this.find('a:first').append('<span class="toggle-children"><span class="toggle-children-icon"></span></span>');
	      }
	      this._super();
	    },
	    onunmatch: function onunmatch() {
	      this._super();
	    },
	    toggle: function toggle() {
	      this[this.hasClass('opened') ? 'close' : 'open']();
	    },
	
	    open: function open() {
	      var parent = this.getMenuItem();
	      if (parent) parent.open();
	      if (this.find('li.clone')) {
	        this.find('li.clone').remove();
	      }
	      this.addClass('opened').find('ul').show();
	      this.find('.toggle-children').addClass('opened');
	    },
	    close: function close() {
	      this.removeClass('opened').find('ul').hide();
	      this.find('.toggle-children').removeClass('opened');
	    },
	    select: function select() {
	      var parent = this.getMenuItem();
	      this.addClass('current').open();
	
	      this.siblings().removeClass('current').close();
	      this.siblings().find('li').removeClass('current');
	      if (parent) {
	        var parentSiblings = parent.siblings();
	        parent.addClass('current');
	        parentSiblings.removeClass('current').close();
	        parentSiblings.find('li').removeClass('current').close();
	      }
	
	      this.getMenu().updateItems();
	
	      this.trigger('select');
	    }
	  });
	
	  $('.cms-menu-list *').entwine({
	    getMenu: function getMenu() {
	      return this.parents('.cms-menu-list:first');
	    }
	  });
	
	  $('.cms-menu-list li *').entwine({
	    getMenuItem: function getMenuItem() {
	      return this.parents('li:first');
	    }
	  });
	
	  $('.cms-menu-list li a').entwine({
	    onclick: function onclick(e) {
	      var isExternal = $.path.isExternal(this.attr('href'));
	      if (e.which > 1 || isExternal) return;
	
	      if (this.attr('target') == "_blank") {
	        return;
	      }
	
	      e.preventDefault();
	
	      var item = this.getMenuItem();
	
	      var url = this.attr('href');
	      if (!isExternal) url = $('base').attr('href') + url;
	
	      var children = item.find('li');
	      if (children.length) {
	        children.first().find('a').click();
	      } else {
	        document.location.href = url;
	      }
	
	      item.select();
	    }
	  });
	
	  $('.cms-menu-list li .toggle-children').entwine({
	    onclick: function onclick(e) {
	      var li = this.closest('li');
	      li.toggle();
	      return false;
	    }
	  });
	
	  $('.cms .profile-link').entwine({
	    onclick: function onclick() {
	      $('.cms-container').loadPanel(this.attr('href'));
	      $('.cms-menu-list li').removeClass('current').close();
	      return false;
	    }
	  });
	
	  $('.cms-menu .sticky-toggle').entwine({
	
	    onadd: function onadd() {
	      var isSticky = $('.cms-menu').getPersistedStickyState() ? true : false;
	
	      this.toggleCSS(isSticky);
	      this.toggleIndicator(isSticky);
	
	      this._super();
	    },
	
	    toggleCSS: function toggleCSS(isSticky) {
	      this[isSticky ? 'addClass' : 'removeClass']('active');
	    },
	
	    toggleIndicator: function toggleIndicator(isSticky) {
	      this.next('.sticky-status-indicator').text(isSticky ? 'fixed' : 'auto');
	    },
	
	    onclick: function onclick() {
	      var $menu = this.closest('.cms-menu'),
	          persistedCollapsedState = $menu.getPersistedCollapsedState(),
	          persistedStickyState = $menu.getPersistedStickyState(),
	          newStickyState = persistedStickyState === void 0 ? !this.hasClass('active') : !persistedStickyState;
	
	      if (persistedCollapsedState === void 0) {
	        $menu.setPersistedCollapsedState($menu.hasClass('collapsed'));
	      } else if (persistedCollapsedState !== void 0 && newStickyState === false) {
	        $menu.clearPersistedCollapsedState();
	      }
	
	      $menu.setPersistedStickyState(newStickyState);
	
	      this.toggleCSS(newStickyState);
	      this.toggleIndicator(newStickyState);
	
	      this._super();
	    }
	  });
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	var _i18n = __webpack_require__(94);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jQuery2.default.entwine('ss.preview', function ($) {
	  $('.cms-preview').entwine({
	    AllowedStates: ['StageLink', 'LiveLink', 'ArchiveLink'],
	
	    CurrentStateName: null,
	
	    CurrentSizeName: 'auto',
	
	    IsPreviewEnabled: false,
	
	    DefaultMode: 'split',
	
	    Sizes: {
	      auto: {
	        width: '100%',
	        height: '100%'
	      },
	      mobile: {
	        width: '335px',
	        height: '568px'
	      },
	      mobileLandscape: {
	        width: '583px',
	        height: '320px'
	      },
	      tablet: {
	        width: '783px',
	        height: '1024px'
	      },
	      tabletLandscape: {
	        width: '1039px',
	        height: '768px'
	      },
	      desktop: {
	        width: '1024px',
	        height: '800px'
	      }
	    },
	
	    changeState: function changeState(stateName, save) {
	      var self = this,
	          states = this._getNavigatorStates();
	      if (save !== false) {
	        $.each(states, function (index, state) {
	          self.saveState('state', stateName);
	        });
	      }
	
	      this.setCurrentStateName(stateName);
	      this._loadCurrentState();
	      this.redraw();
	
	      return this;
	    },
	
	    changeMode: function changeMode(modeName, save) {
	      var container = $('.cms-container').entwine('.ss');
	
	      if (modeName == 'split') {
	        container.splitViewMode();
	        this.setIsPreviewEnabled(true);
	        this._loadCurrentState();
	      } else if (modeName == 'content') {
	        container.contentViewMode();
	        this.setIsPreviewEnabled(false);
	      } else if (modeName == 'preview') {
	        container.previewMode();
	        this.setIsPreviewEnabled(true);
	        this._loadCurrentState();
	      } else {
	        throw 'Invalid mode: ' + modeName;
	      }
	
	      if (save !== false) this.saveState('mode', modeName);
	
	      this.redraw();
	
	      return this;
	    },
	
	    changeSize: function changeSize(sizeName) {
	      var sizes = this.getSizes();
	
	      this.setCurrentSizeName(sizeName);
	      this.removeClass('auto desktop tablet mobile').addClass(sizeName);
	      this.find('.preview-device-outer').width(sizes[sizeName].width).height(sizes[sizeName].height);
	      this.find('.preview-device-inner').width(sizes[sizeName].width);
	
	      this.saveState('size', sizeName);
	
	      this.redraw();
	
	      return this;
	    },
	
	    redraw: function redraw() {
	
	      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));
	
	      var currentStateName = this.getCurrentStateName();
	      if (currentStateName) {
	        this.find('.cms-preview-states').changeVisibleState(currentStateName);
	      }
	
	      var layoutOptions = $('.cms-container').entwine('.ss').getLayoutOptions();
	      if (layoutOptions) {
	        $('.preview-mode-selector').changeVisibleMode(layoutOptions.mode);
	      }
	
	      var currentSizeName = this.getCurrentSizeName();
	      if (currentSizeName) {
	        this.find('.preview-size-selector').changeVisibleSize(this.getCurrentSizeName());
	      }
	
	      return this;
	    },
	
	    saveState: function saveState(name, value) {
	      if (this._supportsLocalStorage()) window.localStorage.setItem('cms-preview-state-' + name, value);
	    },
	
	    loadState: function loadState(name) {
	      if (this._supportsLocalStorage()) return window.localStorage.getItem('cms-preview-state-' + name);
	    },
	
	    disablePreview: function disablePreview() {
	      this.setPendingURL(null);
	      this._loadUrl('about:blank');
	      this._block();
	      this.changeMode('content', false);
	      this.setIsPreviewEnabled(false);
	      return this;
	    },
	
	    enablePreview: function enablePreview() {
	      if (!this.getIsPreviewEnabled()) {
	        this.setIsPreviewEnabled(true);
	
	        if ($.browser.msie && $.browser.version.slice(0, 3) <= 7) {
	          this.changeMode('content');
	        } else {
	          this.changeMode(this.getDefaultMode(), false);
	        }
	      }
	      return this;
	    },
	
	    getOrAppendFontFixStyleElement: function getOrAppendFontFixStyleElement() {
	      var style = $('#FontFixStyleElement');
	      if (!style.length) {
	        style = $('<style type="text/css" id="FontFixStyleElement" disabled="disabled">' + ':before,:after{content:none !important}' + '</style>').appendTo('head');
	      }
	
	      return style;
	    },
	
	    onadd: function onadd() {
	      var self = this,
	          iframe = this.find('iframe');
	
	      iframe.addClass('center');
	      iframe.bind('load', function () {
	        self._adjustIframeForPreview();
	
	        self._loadCurrentPage();
	
	        $(this).removeClass('loading');
	      });
	
	      if ($.browser.msie && 8 === parseInt($.browser.version, 10)) {
	        iframe.bind('readystatechange', function (e) {
	          if (iframe[0].readyState == 'interactive') {
	            self.getOrAppendFontFixStyleElement().removeAttr('disabled');
	            setTimeout(function () {
	              self.getOrAppendFontFixStyleElement().attr('disabled', 'disabled');
	            }, 0);
	          }
	        });
	      }
	
	      this._unblock();
	
	      this.disablePreview();
	
	      this._super();
	    },
	
	    _supportsLocalStorage: function _supportsLocalStorage() {
	      var uid = new Date();
	      var storage;
	      var result;
	      try {
	        (storage = window.localStorage).setItem(uid, uid);
	        result = storage.getItem(uid) == uid;
	        storage.removeItem(uid);
	        return result && storage;
	      } catch (exception) {
	        console.warn('localStorge is not available due to current browser / system settings.');
	      }
	    },
	
	    onforcecontent: function onforcecontent() {
	      this.changeMode('content', false);
	    },
	
	    onenable: function onenable() {
	      var $viewModeSelector = $('.preview-mode-selector');
	
	      $viewModeSelector.removeClass('split-disabled');
	      $viewModeSelector.find('.disabled-tooltip').hide();
	    },
	
	    ondisable: function ondisable() {
	      var $viewModeSelector = $('.preview-mode-selector');
	
	      $viewModeSelector.addClass('split-disabled');
	      $viewModeSelector.find('.disabled-tooltip').show();
	    },
	
	    _block: function _block() {
	      this.find('.preview-note').show();
	      this.find('.cms-preview-overlay').show();
	      return this;
	    },
	
	    _unblock: function _unblock() {
	      this.find('.preview-note').hide();
	      this.find('.cms-preview-overlay').hide();
	      return this;
	    },
	
	    _initialiseFromContent: function _initialiseFromContent() {
	      var mode, size;
	
	      if (!$('.cms-previewable').length) {
	        this.disablePreview();
	      } else {
	        mode = this.loadState('mode');
	        size = this.loadState('size');
	
	        this._moveNavigator();
	        if (!mode || mode != 'content') {
	          this.enablePreview();
	          this._loadCurrentState();
	        }
	        this.redraw();
	
	        if (mode) this.changeMode(mode);
	        if (size) this.changeSize(size);
	      }
	      return this;
	    },
	
	    'from .cms-container': {
	      onafterstatechange: function onafterstatechange(e, data) {
	        if (data.xhr.getResponseHeader('X-ControllerURL')) return;
	
	        this._initialiseFromContent();
	      }
	    },
	
	    PendingURL: null,
	
	    oncolumnvisibilitychanged: function oncolumnvisibilitychanged() {
	      var url = this.getPendingURL();
	      if (url && !this.is('.column-hidden')) {
	        this.setPendingURL(null);
	        this._loadUrl(url);
	        this._unblock();
	      }
	    },
	
	    'from .cms-container .cms-edit-form': {
	      onaftersubmitform: function onaftersubmitform() {
	        this._initialiseFromContent();
	      }
	    },
	
	    _loadUrl: function _loadUrl(url) {
	      this.find('iframe').addClass('loading').attr('src', url);
	      return this;
	    },
	
	    _getNavigatorStates: function _getNavigatorStates() {
	      var urlMap = $.map(this.getAllowedStates(), function (name) {
	        var stateLink = $('.cms-preview-states .state-name[data-name=' + name + ']');
	        if (stateLink.length) {
	          return {
	            name: name,
	            url: stateLink.attr('href'),
	            active: stateLink.hasClass('active')
	          };
	        } else {
	          return null;
	        }
	      });
	
	      return urlMap;
	    },
	
	    _loadCurrentState: function _loadCurrentState() {
	      if (!this.getIsPreviewEnabled()) return this;
	
	      var states = this._getNavigatorStates();
	      var currentStateName = this.getCurrentStateName();
	      var currentState = null;
	
	      if (states) {
	        currentState = $.grep(states, function (state, index) {
	          return currentStateName === state.name || !currentStateName && state.active;
	        });
	      }
	
	      var url = null;
	
	      if (currentState[0]) {
	        url = currentState[0].url;
	      } else if (states.length) {
	        this.setCurrentStateName(states[0].name);
	        url = states[0].url;
	      } else {
	        this.setCurrentStateName(null);
	      }
	
	      if (url) {
	        url += (url.indexOf('?') === -1 ? '?' : '&') + 'CMSPreview=1';
	      }
	
	      if (this.is('.column-hidden')) {
	        this.setPendingURL(url);
	        this._loadUrl('about:blank');
	        this._block();
	      } else {
	        this.setPendingURL(null);
	
	        if (url) {
	          this._loadUrl(url);
	          this._unblock();
	        } else {
	          this._block();
	        }
	      }
	
	      return this;
	    },
	
	    _moveNavigator: function _moveNavigator() {
	      var previewEl = $('.cms-preview .cms-preview-controls');
	      var navigatorEl = $('.cms-edit-form .cms-navigator');
	
	      if (navigatorEl.length && previewEl.length) {
	        previewEl.html($('.cms-edit-form .cms-navigator').detach());
	      } else {
	        this._block();
	      }
	    },
	
	    _loadCurrentPage: function _loadCurrentPage() {
	      if (!this.getIsPreviewEnabled()) return;
	
	      var doc,
	          containerEl = $('.cms-container');
	      try {
	        doc = this.find('iframe')[0].contentDocument;
	      } catch (e) {
	        console.warn('Unable to access iframe, possible https mis-match');
	      }
	      if (!doc) {
	        return;
	      }
	
	      var id = $(doc).find('meta[name=x-page-id]').attr('content');
	      var editLink = $(doc).find('meta[name=x-cms-edit-link]').attr('content');
	      var contentPanel = $('.cms-content');
	
	      if (id && contentPanel.find(':input[name=ID]').val() != id) {
	        $('.cms-container').entwine('.ss').loadPanel(editLink);
	      }
	    },
	
	    _adjustIframeForPreview: function _adjustIframeForPreview() {
	      var iframe = this.find('iframe')[0],
	          doc;
	      if (!iframe) {
	        return;
	      }
	
	      try {
	        doc = iframe.contentDocument;
	      } catch (e) {
	        console.warn('Unable to access iframe, possible https mis-match');
	      }
	      if (!doc) {
	        return;
	      }
	
	      var links = doc.getElementsByTagName('A');
	      for (var i = 0; i < links.length; i++) {
	        var href = links[i].getAttribute('href');
	        if (!href) continue;
	
	        if (href.match(/^http:\/\//)) links[i].setAttribute('target', '_blank');
	      }
	
	      var navi = doc.getElementById('SilverStripeNavigator');
	      if (navi) navi.style.display = 'none';
	      var naviMsg = doc.getElementById('SilverStripeNavigatorMessage');
	      if (naviMsg) naviMsg.style.display = 'none';
	
	      this.trigger('afterIframeAdjustedForPreview', [doc]);
	    }
	  });
	
	  $('.cms-edit-form').entwine({
	    onadd: function onadd() {
	      this._super();
	      $('.cms-preview')._initialiseFromContent();
	    }
	  });
	
	  $('.cms-preview-states').entwine({
	    changeVisibleState: function changeVisibleState(state) {
	      this.find('[data-name="' + state + '"]').addClass('active').siblings().removeClass('active');
	    }
	  });
	
	  $('.cms-preview-states .state-name').entwine({
	    onclick: function onclick(e) {
	      if (e.which == 1) {
	        var targetStateName = $(this).attr('data-name');
	
	        this.addClass('active').siblings().removeClass('active');
	
	        $('.cms-preview').changeState(targetStateName);
	
	        e.preventDefault();
	      }
	    }
	  });
	
	  $('.preview-mode-selector').entwine({
	    changeVisibleMode: function changeVisibleMode(mode) {
	      this.find('select').val(mode).trigger('chosen:updated')._addIcon();
	    }
	  });
	
	  $('.preview-mode-selector select').entwine({
	    onchange: function onchange(e) {
	      this._super(e);
	      e.preventDefault();
	
	      var targetStateName = $(this).val();
	      $('.cms-preview').changeMode(targetStateName);
	    }
	  });
	
	  $('.cms-container--content-mode').entwine({
	    onmatch: function onmatch() {
	      if ($('.cms-preview .result-selected').hasClass('font-icon-columns')) {
	        statusMessage(_i18n2.default._t('LeftAndMain.DISABLESPLITVIEW', "Screen too small to show site preview in split mode"), "error");
	      }
	      this._super();
	    }
	  });
	
	  $('.preview-size-selector').entwine({
	    changeVisibleSize: function changeVisibleSize(size) {
	      this.find('select').val(size).trigger('chosen:updated')._addIcon();
	    }
	  });
	
	  $('.preview-size-selector select').entwine({
	    onchange: function onchange(e) {
	      e.preventDefault();
	
	      var targetSizeName = $(this).val();
	      $('.cms-preview').changeSize(targetSizeName);
	    }
	  });
	
	  $('.preview-selector select.preview-dropdown').entwine({
	    'onchosen:ready': function onchosenReady() {
	      this._super();
	      this._addIcon();
	    },
	
	    _addIcon: function _addIcon() {
	      var selected = this.find(':selected');
	      var iconClass = selected.attr('data-icon');
	
	      var target = this.parent().find('.chosen-container a.chosen-single');
	      var oldIcon = target.attr('data-icon');
	      if (typeof oldIcon !== 'undefined') {
	        target.removeClass(oldIcon);
	      }
	      target.addClass(iconClass);
	      target.attr('data-icon', iconClass);
	
	      return this;
	    }
	  });
	
	  $('.preview-mode-selector .chosen-drop li:last-child').entwine({
	    onmatch: function onmatch() {
	      if ($('.preview-mode-selector').hasClass('split-disabled')) {
	        this.parent().append('<div class="disabled-tooltip"></div>');
	      } else {
	        this.parent().append('<div class="disabled-tooltip" style="display: none;"></div>');
	      }
	    }
	  });
	
	  $('.preview-device-outer').entwine({
	    onclick: function onclick() {
	      this.toggleClass('rotate');
	    }
	  });
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	var _i18n = __webpack_require__(94);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jQuery2.default.entwine('ss.tree', function ($) {
	  $('#Form_BatchActionsForm').entwine({
	    Actions: [],
	
	    getTree: function getTree() {
	      return $('.cms-tree');
	    },
	
	    fromTree: {
	      oncheck_node: function oncheck_node(e, data) {
	        this.serializeFromTree();
	      },
	      onuncheck_node: function onuncheck_node(e, data) {
	        this.serializeFromTree();
	      }
	    },
	
	    onmatch: function onmatch() {
	      var self = this;
	
	      self.getTree().bind('load_node.jstree', function (e, data) {
	        self.refreshSelected();
	      });
	    },
	
	    onunmatch: function onunmatch() {
	      var self = this;
	
	      self.getTree().unbind('load_node.jstree');
	    },
	
	    registerDefault: function registerDefault() {
	      this.register(ss.config.adminUrl + 'pages/batchactions/publish', function (ids) {
	        var confirmed = confirm(_i18n2.default.inject(_i18n2.default._t("CMSMAIN.BATCH_PUBLISH_PROMPT", "You have {num} page(s) selected.\n\nDo you really want to publish?"), { 'num': ids.length }));
	        return confirmed ? ids : false;
	      });
	
	      this.register(ss.config.adminUrl + 'pages/batchactions/unpublish', function (ids) {
	        var confirmed = confirm(_i18n2.default.inject(_i18n2.default._t("CMSMAIN.BATCH_UNPUBLISH_PROMPT", "You have {num} page(s) selected.\n\nDo you really want to unpublish"), { 'num': ids.length }));
	        return confirmed ? ids : false;
	      });
	
	      this.register(ss.config.adminUrl + 'pages/batchactions/delete', function (ids) {
	        var confirmed = confirm(_i18n2.default.inject(_i18n2.default._t("CMSMAIN.BATCH_DELETE_PROMPT", "You have {num} page(s) selected.\n\nDo you really want to delete?"), { 'num': ids.length }));
	        return confirmed ? ids : false;
	      });
	
	      this.register(ss.config.adminUrl + 'pages/batchactions/archive', function (ids) {
	        var confirmed = confirm(_i18n2.default.inject(_i18n2.default._t("CMSMAIN.BATCH_ARCHIVE_PROMPT", "You have {num} page(s) selected.\n\nAre you sure you want to archive these pages?\n\nThese pages and all of their children pages will be unpublished and sent to the archive."), { 'num': ids.length }));
	        return confirmed ? ids : false;
	      });
	
	      this.register(ss.config.adminUrl + 'pages/batchactions/restore', function (ids) {
	        var confirmed = confirm(_i18n2.default.inject(_i18n2.default._t("CMSMAIN.BATCH_RESTORE_PROMPT", "You have {num} page(s) selected.\n\nDo you really want to restore to stage?\n\nChildren of archived pages will be restored to the root level, unless those pages are also being restored."), { 'num': ids.length }));
	        return confirmed ? ids : false;
	      });
	
	      this.register(ss.config.adminUrl + 'pages/batchactions/deletefromlive', function (ids) {
	        var confirmed = confirm(_i18n2.default.inject(_i18n2.default._t("CMSMAIN.BATCH_DELETELIVE_PROMPT", "You have {num} page(s) selected.\n\nDo you really want to delete these pages from live?"), { 'num': ids.length }));
	        return confirmed ? ids : false;
	      });
	    },
	
	    onadd: function onadd() {
	      this.registerDefault();
	      this._super();
	    },
	
	    register: function register(type, callback) {
	      this.trigger('register', { type: type, callback: callback });
	      var actions = this.getActions();
	      actions[type] = callback;
	      this.setActions(actions);
	    },
	
	    unregister: function unregister(type) {
	      this.trigger('unregister', { type: type });
	
	      var actions = this.getActions();
	      if (actions[type]) delete actions[type];
	      this.setActions(actions);
	    },
	
	    refreshSelected: function refreshSelected(rootNode) {
	      var self = this,
	          st = this.getTree(),
	          ids = this.getIDs(),
	          allIds = [],
	          viewMode = $('.cms-content-batchactions-button'),
	          actionUrl = this.find(':input[name=Action]').val();
	
	      if (rootNode == null) rootNode = st;
	
	      for (var idx in ids) {
	        $($(st).getNodeByID(idx)).addClass('selected').attr('selected', 'selected');
	      }
	
	      if (!actionUrl || actionUrl == -1 || !viewMode.hasClass('active')) {
	        $(rootNode).find('li').each(function () {
	          $(this).setEnabled(true);
	        });
	        return;
	      }
	
	      $(rootNode).find('li').each(function () {
	        allIds.push($(this).data('id'));
	        $(this).addClass('treeloading').setEnabled(false);
	      });
	
	      var actionUrlParts = $.path.parseUrl(actionUrl);
	      var applicablePagesUrl = actionUrlParts.hrefNoSearch + '/applicablepages/';
	      applicablePagesUrl = $.path.addSearchParams(applicablePagesUrl, actionUrlParts.search);
	      applicablePagesUrl = $.path.addSearchParams(applicablePagesUrl, { csvIDs: allIds.join(',') });
	      jQuery.getJSON(applicablePagesUrl, function (applicableIDs) {
	        jQuery(rootNode).find('li').each(function () {
	          $(this).removeClass('treeloading');
	
	          var id = $(this).data('id');
	          if (id == 0 || $.inArray(id, applicableIDs) >= 0) {
	            $(this).setEnabled(true);
	          } else {
	            $(this).removeClass('selected').setEnabled(false);
	            $(this).prop('selected', false);
	          }
	        });
	
	        self.serializeFromTree();
	      });
	    },
	
	    serializeFromTree: function serializeFromTree() {
	      var tree = this.getTree(),
	          ids = tree.getSelectedIDs();
	
	      this.setIDs(ids);
	
	      return true;
	    },
	
	    setIDs: function setIDs(ids) {
	      this.find(':input[name=csvIDs]').val(ids ? ids.join(',') : null);
	    },
	
	    getIDs: function getIDs() {
	      var value = this.find(':input[name=csvIDs]').val();
	      return value ? value.split(',') : [];
	    },
	
	    onsubmit: function onsubmit(e) {
	      var self = this,
	          ids = this.getIDs(),
	          tree = this.getTree(),
	          actions = this.getActions();
	
	      if (!ids || !ids.length) {
	        alert(_i18n2.default._t('CMSMAIN.SELECTONEPAGE', 'Please select at least one page'));
	        e.preventDefault();
	        return false;
	      }
	
	      var type = this.find(':input[name=Action]').val();
	      if (actions[type]) {
	        ids = this.getActions()[type].apply(this, [ids]);
	      }
	
	      if (!ids || !ids.length) {
	        e.preventDefault();
	        return false;
	      }
	
	      this.setIDs(ids);
	
	      tree.find('li').removeClass('failed');
	
	      var button = this.find(':submit:first');
	      button.addClass('loading');
	
	      jQuery.ajax({
	        url: type,
	        type: 'POST',
	        data: this.serializeArray(),
	        complete: function complete(xmlhttp, status) {
	          button.removeClass('loading');
	
	          tree.jstree('refresh', -1);
	          self.setIDs([]);
	
	          self.find(':input[name=Action]').val('').change();
	
	          var msg = xmlhttp.getResponseHeader('X-Status');
	          if (msg) statusMessage(decodeURIComponent(msg), status == 'success' ? 'good' : 'bad');
	        },
	        success: function success(data, status) {
	          var id, node;
	
	          if (data.modified) {
	            var modifiedNodes = [];
	            for (id in data.modified) {
	              node = tree.getNodeByID(id);
	              tree.jstree('set_text', node, data.modified[id]['TreeTitle']);
	              modifiedNodes.push(node);
	            }
	            $(modifiedNodes).effect('highlight');
	          }
	          if (data.deleted) {
	            for (id in data.deleted) {
	              node = tree.getNodeByID(id);
	              if (node.length) tree.jstree('delete_node', node);
	            }
	          }
	          if (data.error) {
	            for (id in data.error) {
	              node = tree.getNodeByID(id);
	              $(node).addClass('failed');
	            }
	          }
	        },
	        dataType: 'json'
	      });
	
	      e.preventDefault();
	      return false;
	    }
	
	  });
	
	  $('.cms-content-batchactions-button').entwine({
	    onmatch: function onmatch() {
	      this._super();
	      this.updateTree();
	    },
	    onunmatch: function onunmatch() {
	      this._super();
	    },
	    onclick: function onclick(e) {
	      this.updateTree();
	    },
	    updateTree: function updateTree() {
	      var tree = $('.cms-tree'),
	          form = $('#Form_BatchActionsForm');
	
	      this._super();
	
	      if (this.data('active')) {
	        tree.addClass('multiple');
	        tree.removeClass('draggable');
	        form.serializeFromTree();
	      } else {
	        tree.removeClass('multiple');
	        tree.addClass('draggable');
	      }
	
	      $('#Form_BatchActionsForm').refreshSelected();
	    }
	  });
	
	  $('#Form_BatchActionsForm select[name=Action]').entwine({
	    onchange: function onchange(e) {
	      var form = $(e.target.form),
	          btn = form.find(':submit'),
	          selected = $(e.target).val();
	      if (!selected || selected == -1) {
	        btn.attr('disabled', 'disabled').button('refresh');
	      } else {
	        btn.removeAttr('disabled').button('refresh');
	      }
	
	      $('#Form_BatchActionsForm').refreshSelected();
	
	      this.trigger("chosen:updated");
	
	      this._super(e);
	    }
	  });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jQuery2.default.entwine('ss', function ($) {
	  $(".cms .field.cms-description-tooltip").entwine({
	    onmatch: function onmatch() {
	      this._super();
	
	      var descriptionEl = this.find('.description'),
	          inputEl,
	          tooltipEl;
	      if (descriptionEl.length) {
	        this.attr('title', descriptionEl.text()).tooltip({ content: descriptionEl.html() });
	        descriptionEl.remove();
	      }
	    }
	  });
	
	  $(".cms .field.cms-description-tooltip :input").entwine({
	    onfocusin: function onfocusin(e) {
	      this.closest('.field').tooltip('open');
	    },
	    onfocusout: function onfocusout(e) {
	      this.closest('.field').tooltip('close');
	    }
	  });
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jQuery2.default.entwine('ss', function ($) {
	
	  $('.cms-description-toggle').entwine({
	    onadd: function onadd() {
	      var shown = false,
	          fieldId = this.prop('id').substr(0, this.prop('id').indexOf('_Holder')),
	          $trigger = this.find('.cms-description-trigger'),
	          $description = this.find('.description');
	
	      if (this.hasClass('description-toggle-enabled')) {
	        return;
	      }
	
	      if ($trigger.length === 0) {
	        $trigger = this.find('.middleColumn').first().after('<label class="right" for="' + fieldId + '"><a class="cms-description-trigger" href="javascript:void(0)"><span class="btn-icon-information"></span></a></label>').next();
	      }
	
	      this.addClass('description-toggle-enabled');
	
	      $trigger.on('click', function () {
	        $description[shown ? 'hide' : 'show']();
	        shown = !shown;
	      });
	
	      $description.hide();
	    }
	  });
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jQuery2.default.entwine('ss', function ($) {
	  $('.TreeDropdownField').entwine({
	    'from .cms-container form': {
	      onaftersubmitform: function onaftersubmitform(e) {
	        this.find('.tree-holder').empty();
	        this._super();
	      }
	    }
	  });
	});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	var _i18n = __webpack_require__(94);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(102);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(27);
	
	var _FormBuilderModal = __webpack_require__(103);
	
	var _FormBuilderModal2 = _interopRequireDefault(_FormBuilderModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jQuery2.default.entwine('ss', function ($) {
	  $('.cms-content-actions .add-to-campaign-action,' + '#add-to-campaign__action').entwine({
	    onclick: function onclick() {
	      var dialog = $('#add-to-campaign__dialog-wrapper');
	
	      if (!dialog.length) {
	        dialog = $('<div id="add-to-campaign__dialog-wrapper" />');
	        $('body').append(dialog);
	      }
	
	      dialog.open();
	
	      return false;
	    }
	  });
	
	  $('#add-to-campaign__dialog-wrapper').entwine({
	    open: function open() {
	      this._renderModal();
	    },
	    close: function close() {
	      this._clearModal();
	    },
	    _renderModal: function _renderModal() {
	      var _this = this;
	
	      var handleHide = function handleHide() {
	        return _this._clearModal();
	      };
	      var handleSubmit = function handleSubmit() {
	        return _this._handleSubmitModal.apply(_this, arguments);
	      };
	      var id = $('form.cms-edit-form :input[name=ID]').val();
	      var store = window.ss.store;
	      var sectionConfig = store.getState().config.sections['SilverStripe\\CMS\\Controllers\\CMSPageEditController'];
	      var modalSchemaUrl = sectionConfig.form.AddToCampaignForm.schemaUrl + '/' + id;
	
	      _reactDom2.default.render(_react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2.default.createElement(_FormBuilderModal2.default, {
	          show: true,
	          handleSubmit: handleSubmit,
	          handleHide: handleHide,
	          schemaUrl: modalSchemaUrl,
	          bodyClassName: 'modal__dialog',
	          responseClassBad: 'modal__response modal__response--error',
	          responseClassGood: 'modal__response modal__response--good'
	        })
	      ), this[0]);
	    },
	    _clearModal: function _clearModal() {
	      _reactDom2.default.unmountComponentAtNode(this[0]);
	    },
	    _handleSubmitModal: function _handleSubmitModal(event, fieldValues, submitFn) {
	      event.preventDefault();
	
	      if (!fieldValues.Campaign) {
	        alert(_i18n2.default._t('AddToCampaigns.ErrorCampaignNotSelected', 'There was no campaign selected to be added to'));
	        return null;
	      }
	      return submitFn();
	    }
	  });
	});

/***/ },
/* 102 */,
/* 103 */
/***/ function(module, exports) {

	module.exports = FormBuilderModal;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(88);
	__webpack_require__(105);
	
	var refreshAfterImport = function refreshAfterImport(e) {
	  var existingFormMessage = (0, _jQuery2.default)((0, _jQuery2.default)(this).contents()).find('.message');
	  if (existingFormMessage && existingFormMessage.html()) {
	    var memberTableField = (0, _jQuery2.default)(window.parent.document).find('#Form_EditForm_Members').get(0);
	    if (memberTableField) memberTableField.refresh();
	
	    var tree = (0, _jQuery2.default)(window.parent.document).find('.cms-tree').get(0);
	    if (tree) tree.reload();
	  }
	};
	
	(0, _jQuery2.default)('#MemberImportFormIframe, #GroupImportFormIframe').entwine({
	  onadd: function onadd() {
	    this._super();
	
	    (0, _jQuery2.default)(this).bind('load', refreshAfterImport);
	  }
	});
	
	_jQuery2.default.entwine('ss', function ($) {
	  $('.permissioncheckboxset .checkbox[value=ADMIN]').entwine({
	    onmatch: function onmatch() {
	      this.toggleCheckboxes();
	
	      this._super();
	    },
	    onunmatch: function onunmatch() {
	      this._super();
	    },
	
	    onclick: function onclick(e) {
	      this.toggleCheckboxes();
	    },
	
	    toggleCheckboxes: function toggleCheckboxes() {
	      var self = this,
	          checkboxes = this.parents('.field:eq(0)').find('.checkbox').not(this);
	
	      if (this.is(':checked')) {
	        checkboxes.each(function () {
	          $(this).data('SecurityAdmin.oldChecked', $(this).is(':checked'));
	          $(this).data('SecurityAdmin.oldDisabled', $(this).is(':disabled'));
	          $(this).prop('disabled', true);
	          $(this).prop('checked', true);
	        });
	      } else {
	        checkboxes.each(function () {
	          $(this).prop('checked', $(this).data('SecurityAdmin.oldChecked'));
	          $(this).prop('disabled', $(this).data('SecurityAdmin.oldDisabled'));
	        });
	      }
	    }
	  });
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jQuery2.default.entwine('ss', function ($) {
		$('.permissioncheckboxset .valADMIN input').entwine({
			onmatch: function onmatch() {
				this._super();
			},
			onunmatch: function onunmatch() {
				this._super();
			},
			onclick: function onclick(e) {
				this.toggleCheckboxes();
			},
			toggleCheckboxes: function toggleCheckboxes() {
				var checkboxes = $(this).parents('.field:eq(0)').find('.checkbox').not(this);
	
				if ($(this).is(':checked')) {
					checkboxes.each(function () {
						$(this).data('SecurityAdmin.oldChecked', $(this).attr('checked'));
						$(this).data('SecurityAdmin.oldDisabled', $(this).attr('disabled'));
						$(this).attr('disabled', 'disabled');
						$(this).attr('checked', 'checked');
					});
				} else {
					checkboxes.each(function () {
						var oldChecked = $(this).data('SecurityAdmin.oldChecked');
						var oldDisabled = $(this).data('SecurityAdmin.oldDisabled');
						if (oldChecked !== null) $(this).attr('checked', oldChecked);
						if (oldDisabled !== null) $(this).attr('disabled', oldDisabled);
					});
				}
			}
		});
	
		$('.permissioncheckboxset .valCMS_ACCESS_LeftAndMain input').entwine({
			getCheckboxesExceptThisOne: function getCheckboxesExceptThisOne() {
				return $(this).parents('.field:eq(0)').find('li').filter(function (i) {
					var klass = $(this).attr('class');
					return klass ? klass.match(/CMS_ACCESS_/) : false;
				}).find('.checkbox').not(this);
			},
			onmatch: function onmatch() {
				this.toggleCheckboxes();
	
				this._super();
			},
			onunmatch: function onunmatch() {
				this._super();
			},
			onclick: function onclick(e) {
				this.toggleCheckboxes();
			},
			toggleCheckboxes: function toggleCheckboxes() {
				var checkboxes = this.getCheckboxesExceptThisOne();
				if ($(this).is(':checked')) {
					checkboxes.each(function () {
						$(this).data('PermissionCheckboxSetField.oldChecked', $(this).is(':checked'));
						$(this).data('PermissionCheckboxSetField.oldDisabled', $(this).is(':disabled'));
						$(this).prop('disabled', 'disabled');
						$(this).prop('checked', 'checked');
					});
				} else {
					checkboxes.each(function () {
						$(this).prop('checked', $(this).data('PermissionCheckboxSetField.oldChecked'));
						$(this).prop('disabled', $(this).data('PermissionCheckboxSetField.oldDisabled'));
					});
				}
			}
		});
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(88);
	
	_jQuery2.default.entwine('ss', function ($) {
	  $('.cms-content-tools #Form_SearchForm').entwine({
	    onsubmit: function onsubmit(e) {
	      this.trigger('beforeSubmit');
	    }
	  });
	
	  $('.importSpec').entwine({
	    onmatch: function onmatch() {
	      this.find('div.details').hide();
	      this.find('a.detailsLink').click(function () {
	        $('#' + $(this).attr('href').replace(/.*#/, '')).slideToggle();
	        return false;
	      });
	
	      this._super();
	    },
	    onunmatch: function onunmatch() {
	      this._super();
	    }
	  });
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jQuery2.default)('.ss-assetuploadfield').entwine({
		onmatch: function onmatch() {
			this._super();
	
			this.find('.ss-uploadfield-editandorganize').hide();
		},
		onunmatch: function onunmatch() {
			this._super();
		},
		onfileuploadadd: function onfileuploadadd(e) {
			this.find('.ss-uploadfield-editandorganize').show();
		},
		onfileuploadstart: function onfileuploadstart(e) {
			this.find('.ss-uploadfield-editandorganize').show();
		}
	});
	
	(0, _jQuery2.default)('.ss-uploadfield-view-allowed-extensions .toggle').entwine({
		onclick: function onclick(e) {
			var allowedExt = this.closest('.ss-uploadfield-view-allowed-extensions'),
			    minHeightVal = this.closest('.ui-tabs-panel').height() + 20;
	
			allowedExt.toggleClass('active');
			allowedExt.find('.toggle-content').css('minHeight', minHeightVal);
		}
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jQuery2.default)(document).on('click', '.confirmedpassword .showOnClick a', function () {
		var $container = (0, _jQuery2.default)('.showOnClickContainer', (0, _jQuery2.default)(this).parent());
	
		$container.toggle('fast', function () {
			$container.find('input[type="hidden"]').val($container.is(":visible") ? 1 : 0);
		});
	
		return false;
	});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	var _i18n = __webpack_require__(94);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.tmpl = __webpack_require__(110);
	
	__webpack_require__(111);
	__webpack_require__(112);
	
	_jQuery2.default.widget('blueimpUIX.fileupload', _jQuery2.default.blueimpUI.fileupload, {
		_initTemplates: function _initTemplates() {
			this.options.templateContainer = document.createElement(this._files.prop('nodeName'));
			this.options.uploadTemplate = window.tmpl(this.options.uploadTemplateName);
			this.options.downloadTemplate = window.tmpl(this.options.downloadTemplateName);
		},
		_enableFileInputButton: function _enableFileInputButton() {
			_jQuery2.default.blueimpUI.fileupload.prototype._enableFileInputButton.call(this);
			this.element.find('.ss-uploadfield-addfile').show();
		},
		_disableFileInputButton: function _disableFileInputButton() {
			_jQuery2.default.blueimpUI.fileupload.prototype._disableFileInputButton.call(this);
			this.element.find('.ss-uploadfield-addfile').hide();
		},
		_onAdd: function _onAdd(e, data) {
			var result = _jQuery2.default.blueimpUI.fileupload.prototype._onAdd.call(this, e, data);
			var firstNewFile = this._files.find('.ss-uploadfield-item').slice(data.files.length * -1).first();
			var top = '+=' + (firstNewFile.position().top - parseInt(firstNewFile.css('marginTop'), 10) || 0 - parseInt(firstNewFile.css('borderTopWidth'), 10) || 0);
			firstNewFile.offsetParent().animate({ scrollTop: top }, 1000);
	
			var fSize = 0;
			for (var i = 0; i < data.files.length; i++) {
				if (typeof data.files[i].size === 'number') {
					fSize = fSize + data.files[i].size;
				}
			}
	
			(0, _jQuery2.default)('.fileOverview .uploadStatus .details .total').text(data.files.length);
			if (typeof fSize === 'number' && fSize > 0) {
				fSize = this._formatFileSize(fSize);
				(0, _jQuery2.default)('.fileOverview .uploadStatus .details .fileSize').text(fSize);
			}
	
			if (data.files.length == 1 && data.files[0].error !== null) {
				(0, _jQuery2.default)('.fileOverview .uploadStatus .state').text(_i18n2.default._t('AssetUploadField.UploadField.UPLOADFAIL', 'Sorry your upload failed'));
				(0, _jQuery2.default)('.fileOverview .uploadStatus').addClass("bad").removeClass("good").removeClass("notice");
			} else {
				(0, _jQuery2.default)('.fileOverview .uploadStatus .state').text(_i18n2.default._t('AssetUploadField.UPLOADINPROGRESS', 'Please wait… upload in progress'));
				(0, _jQuery2.default)('.ss-uploadfield-item-edit-all').hide();
				(0, _jQuery2.default)('.fileOverview .uploadStatus').addClass("notice").removeClass("good").removeClass("bad");
			}
	
			return result;
		},
		_onDone: function _onDone(result, textStatus, jqXHR, options) {
			if (this.options.changeDetection) {
				this.element.closest('form').trigger('dirty');
			}
	
			_jQuery2.default.blueimpUI.fileupload.prototype._onDone.call(this, result, textStatus, jqXHR, options);
		},
		_onSend: function _onSend(e, data) {
			var that = this;
			var config = this.options;
			if (config.overwriteWarning && config.replaceFile) {
				_jQuery2.default.get(config['urlFileExists'], { 'filename': data.files[0].name }, function (response, status, xhr) {
					if (response.exists) {
						data.context.find('.ss-uploadfield-item-status').text(config.errorMessages.overwriteWarning).addClass('ui-state-warning-text');
						data.context.find('.ss-uploadfield-item-progress').hide();
						data.context.find('.ss-uploadfield-item-overwrite').show();
						data.context.find('.ss-uploadfield-item-overwrite-warning').on('click', function (e) {
							data.context.find('.ss-uploadfield-item-progress').show();
							data.context.find('.ss-uploadfield-item-overwrite').hide();
							data.context.find('.ss-uploadfield-item-status').removeClass('ui-state-warning-text');
	
							_jQuery2.default.blueimpUI.fileupload.prototype._onSend.call(that, e, data);
	
							e.preventDefault();
							return false;
						});
					} else {
						return _jQuery2.default.blueimpUI.fileupload.prototype._onSend.call(that, e, data);
					}
				});
			} else {
				return _jQuery2.default.blueimpUI.fileupload.prototype._onSend.call(that, e, data);
			}
		},
		_onAlways: function _onAlways(jqXHRorResult, textStatus, jqXHRorError, options) {
			_jQuery2.default.blueimpUI.fileupload.prototype._onAlways.call(this, jqXHRorResult, textStatus, jqXHRorError, options);
	
			if (typeof jqXHRorError === 'string') {
				(0, _jQuery2.default)('.fileOverview .uploadStatus .state').text(_i18n2.default._t('AssetUploadField.UploadField.UPLOADFAIL', 'Sorry your upload failed'));
				(0, _jQuery2.default)('.fileOverview .uploadStatus').addClass("bad").removeClass("good").removeClass("notice");
			} else if (jqXHRorError.status === 200) {
				(0, _jQuery2.default)('.fileOverview .uploadStatus .state').text(_i18n2.default._t('AssetUploadField.FILEUPLOADCOMPLETED', 'File upload completed!'));
				(0, _jQuery2.default)('.ss-uploadfield-item-edit-all').show();
				(0, _jQuery2.default)('.fileOverview .uploadStatus').addClass("good").removeClass("notice").removeClass("bad");
			}
		},
		_create: function _create() {
			_jQuery2.default.blueimpUI.fileupload.prototype._create.call(this);
	
			this._adjustMaxNumberOfFiles(0);
		},
		attach: function attach(data) {
			if (this.options.changeDetection) {
				this.element.closest('form').trigger('dirty');
			}
	
			var self = this,
			    files = data.files,
			    replaceFileID = data.replaceFileID,
			    valid = true;
	
			var replacedElement = null;
			if (replaceFileID) {
				replacedElement = (0, _jQuery2.default)(".ss-uploadfield-item[data-fileid='" + replaceFileID + "']");
				if (replacedElement.length === 0) {
					replacedElement = null;
				} else {
					self._adjustMaxNumberOfFiles(1);
				}
			}
	
			_jQuery2.default.each(files, function (index, file) {
				self._adjustMaxNumberOfFiles(-1);
				valid = self._validate([file]) && valid;
			});
			data.isAdjusted = true;
			data.files.valid = data.isValidated = valid;
	
			data.context = this._renderDownload(files);
			if (replacedElement) {
				replacedElement.replaceWith(data.context);
			} else {
				data.context.appendTo(this._files);
			}
			data.context.data('data', data);
	
			this._reflow = this._transition && data.context[0].offsetWidth;
			data.context.addClass('in');
		}
	});
	
	_jQuery2.default.entwine('ss', function ($) {
	
		$('div.ss-upload').entwine({
	
			Config: null,
	
			onmatch: function onmatch() {
	
				if (this.is('.readonly,.disabled')) {
					return;
				}
	
				var $fileInput = this.find('.ss-uploadfield-fromcomputer-fileinput'),
				    $dropZone = $('.ss-uploadfield-dropzone'),
				    config = $fileInput.data('config');
	
				$dropZone.on('dragover', function (e) {
					e.preventDefault();
				});
	
				$dropZone.on('dragenter', function (e) {
					$dropZone.addClass('hover active');
				});
	
				$dropZone.on('dragleave', function (e) {
					if (e.target === $dropZone[0]) {
						$dropZone.removeClass('hover active');
					}
				});
	
				$dropZone.on('drop', function (e) {
					$dropZone.removeClass('hover active');
	
					if (e.target !== $dropZone[0]) {
						return false;
					}
				});
	
				this.setConfig(config);
				this.fileupload($.extend(true, {
					formData: function formData(form) {
						var idVal = $(form).find(':input[name=ID]').val();
						var data = [{ name: 'SecurityID', value: $(form).find(':input[name=SecurityID]').val() }];
						if (idVal) data.push({ name: 'ID', value: idVal });
	
						return data;
					},
					errorMessages: {
						1: _i18n2.default._t('UploadField.PHP_MAXFILESIZE'),
						2: _i18n2.default._t('UploadField.HTML_MAXFILESIZE'),
						3: _i18n2.default._t('UploadField.ONLYPARTIALUPLOADED'),
						4: _i18n2.default._t('UploadField.NOFILEUPLOADED'),
						5: _i18n2.default._t('UploadField.NOTMPFOLDER'),
						6: _i18n2.default._t('UploadField.WRITEFAILED'),
						7: _i18n2.default._t('UploadField.STOPEDBYEXTENSION'),
						maxFileSize: _i18n2.default._t('UploadField.TOOLARGESHORT'),
						minFileSize: _i18n2.default._t('UploadField.TOOSMALL'),
						acceptFileTypes: _i18n2.default._t('UploadField.INVALIDEXTENSIONSHORT'),
						maxNumberOfFiles: _i18n2.default._t('UploadField.MAXNUMBEROFFILESSHORT'),
						uploadedBytes: _i18n2.default._t('UploadField.UPLOADEDBYTES'),
						emptyResult: _i18n2.default._t('UploadField.EMPTYRESULT')
					},
					send: function send(e, data) {
						if (data.context && data.dataType && data.dataType.substr(0, 6) === 'iframe') {
							data.total = 1;
							data.loaded = 1;
							$(this).data('fileupload').options.progress(e, data);
						}
					},
					progress: function progress(e, data) {
						if (data.context) {
							var value = parseInt(data.loaded / data.total * 100, 10) + '%';
							data.context.find('.ss-uploadfield-item-status').html(data.total == 1 ? _i18n2.default._t('UploadField.LOADING') : value);
							data.context.find('.ss-uploadfield-item-progressbarvalue').css('width', value);
						}
					}
				}, config, {
					fileInput: $fileInput,
					dropZone: $dropZone,
					form: $fileInput.closest('form'),
					previewAsCanvas: false,
					acceptFileTypes: new RegExp(config.acceptFileTypes, 'i')
				}));
	
				if (this.data('fileupload')._isXHRUpload({ multipart: true })) {
					$('.ss-uploadfield-item-uploador').hide().show();
				}
	
				this._super();
			},
			onunmatch: function onunmatch() {
				$('.ss-uploadfield-dropzone').off('dragover dragenter dragleave drop');
				this._super();
			},
			openSelectDialog: function openSelectDialog(uploadedFile) {
				var self = this,
				    config = this.getConfig(),
				    dialogId = 'ss-uploadfield-dialog-' + this.attr('id'),
				    dialog = $('#' + dialogId);
				if (!dialog.length) dialog = $('<div class="ss-uploadfield-dialog" id="' + dialogId + '" />');
	
				var iframeUrl = config['urlSelectDialog'];
				var uploadedFileId = null;
				if (uploadedFile && uploadedFile.attr('data-fileid') > 0) {
					uploadedFileId = uploadedFile.attr('data-fileid');
				}
	
				dialog.ssdialog({ iframeUrl: iframeUrl, height: 550 });
	
				dialog.find('iframe').bind('load', function (e) {
					var contents = $(this).contents(),
					    gridField = contents.find('.grid-field');
	
					contents.find('table.grid-field').css('margin-top', 0);
	
					contents.find('input[name=action_doAttach]').unbind('click.openSelectDialog').bind('click.openSelectDialog', function () {
						var ids = $.map(gridField.find('.ss-gridfield-item.ui-selected'), function (el) {
							return $(el).data('id');
						});
						if (ids && ids.length) self.attachFiles(ids, uploadedFileId);
	
						dialog.ssdialog('close');
						return false;
					});
				});
				dialog.ssdialog('open');
			},
			attachFiles: function attachFiles(ids, uploadedFileId) {
				var self = this,
				    config = this.getConfig(),
				    indicator = $('<div class="loader" />'),
				    target = uploadedFileId ? this.find(".ss-uploadfield-item[data-fileid='" + uploadedFileId + "']") : this.find('.ss-uploadfield-addfile');
	
				target.children().hide();
				target.append(indicator);
	
				$.ajax({
					type: "POST",
					url: config['urlAttach'],
					data: { 'ids': ids },
					complete: function complete(xhr, status) {
						target.children().show();
						indicator.remove();
					},
					success: function success(data, status, xhr) {
						if (!data || $.isEmptyObject(data)) return;
	
						self.fileupload('attach', {
							files: data,
							options: self.fileupload('option'),
							replaceFileID: uploadedFileId
						});
					}
				});
			}
		});
		$('div.ss-upload *').entwine({
			getUploadField: function getUploadField() {
	
				return this.parents('div.ss-upload:first');
			}
		});
		$('div.ss-upload .ss-uploadfield-files .ss-uploadfield-item').entwine({
			onadd: function onadd() {
				this._super();
				this.closest('.ss-upload').find('.ss-uploadfield-addfile').addClass('borderTop');
			},
			onremove: function onremove() {
				$('.ss-uploadfield-files:not(:has(.ss-uploadfield-item))').closest('.ss-upload').find('.ss-uploadfield-addfile').removeClass('borderTop');
				this._super();
			}
		});
		$('div.ss-upload .ss-uploadfield-startall').entwine({
			onclick: function onclick(e) {
				this.closest('.ss-upload').find('.ss-uploadfield-item-start button').click();
				e.preventDefault();
				return false;
			}
		});
		$('div.ss-upload .ss-uploadfield-item-cancelfailed').entwine({
			onclick: function onclick(e) {
				this.closest('.ss-uploadfield-item').remove();
				e.preventDefault();
				return false;
			}
		});
	
		$('div.ss-upload .ss-uploadfield-item-remove:not(.ui-state-disabled), .ss-uploadfield-item-delete:not(.ui-state-disabled)').entwine({
			onclick: function onclick(e) {
				var field = this.closest('div.ss-upload'),
				    config = field.getConfig('changeDetection'),
				    fileupload = field.data('fileupload'),
				    item = this.closest('.ss-uploadfield-item'),
				    msg = '';
	
				if (this.is('.ss-uploadfield-item-delete')) {
					if (confirm(_i18n2.default._t('UploadField.ConfirmDelete'))) {
						if (config.changeDetection) {
							this.closest('form').trigger('dirty');
						}
	
						if (fileupload) {
							fileupload._trigger('destroy', e, {
								context: item,
								url: this.data('href'),
								type: 'get',
								dataType: fileupload.options.dataType
							});
						}
					}
				} else {
					if (config.changeDetection) {
						this.closest('form').trigger('dirty');
					}
	
					if (fileupload) {
						fileupload._trigger('destroy', e, { context: item });
					}
				}
	
				e.preventDefault();
				return false;
			}
		});
	
		$('div.ss-upload .ss-uploadfield-item-edit-all').entwine({
			onclick: function onclick(e) {
	
				if ($(this).hasClass('opened')) {
					$('.ss-uploadfield-item .ss-uploadfield-item-edit .toggle-details-icon.opened').each(function (i) {
						$(this).closest('.ss-uploadfield-item-edit').click();
					});
					$(this).removeClass('opened').find('.toggle-details-icon').removeClass('opened');
				} else {
					$('.ss-uploadfield-item .ss-uploadfield-item-edit .toggle-details-icon').each(function (i) {
						if (!$(this).hasClass('opened')) {
							$(this).closest('.ss-uploadfield-item-edit').click();
						}
					});
					$(this).addClass('opened').find('.toggle-details-icon').addClass('opened');
				}
	
				e.preventDefault();
				return false;
			}
		});
		$('div.ss-upload:not(.disabled):not(.readonly) .ss-uploadfield-item-edit').entwine({
			onclick: function onclick(e) {
				var self = this,
				    editform = self.closest('.ss-uploadfield-item').find('.ss-uploadfield-item-editform'),
				    itemInfo = editform.prev('.ss-uploadfield-item-info'),
				    iframe = editform.find('iframe');
	
				if (iframe.parent().hasClass('loading')) {
					e.preventDefault();
					return false;
				}
	
				if (iframe.attr('src') == 'about:blank') {
					var disabled = this.siblings();
	
					iframe.attr('src', iframe.data('src'));
	
					iframe.parent().addClass('loading');
					disabled.addClass('ui-state-disabled');
					disabled.attr('disabled', 'disabled');
	
					iframe.on('load', function () {
						iframe.parent().removeClass('loading');
	
						if (iframe.data('src')) {
							self._prepareIframe(iframe, editform, itemInfo);
							iframe.data('src', '');
						}
					});
				} else {
					self._prepareIframe(iframe, editform, itemInfo);
				}
	
				e.preventDefault();
				return false;
			},
			_prepareIframe: function _prepareIframe(iframe, editform, itemInfo) {
				var disabled;
	
				iframe.contents().ready(function () {
					var iframe_jQuery = iframe.get(0).contentWindow.jQuery;
					iframe_jQuery(iframe_jQuery.find(':input')).bind('change', function (e) {
						editform.removeClass('edited');
						editform.addClass('edited');
					});
				});
	
				if (editform.hasClass('loading')) {} else {
					if (this.hasClass('ss-uploadfield-item-edit')) {
						disabled = this.siblings();
					} else {
						disabled = this.find('ss-uploadfield-item-edit').siblings();
					}
					editform.parent('.ss-uploadfield-item').removeClass('ui-state-warning');
					editform.toggleEditForm();
	
					if (itemInfo.find('.toggle-details-icon').hasClass('opened')) {
						disabled.addClass('ui-state-disabled');
						disabled.attr('disabled', 'disabled');
					} else {
						disabled.removeClass('ui-state-disabled');
						disabled.removeAttr('disabled');
					}
				}
			}
		});
	
		$('div.ss-upload .ss-uploadfield-item-editform').entwine({
			fitHeight: function fitHeight() {
				var iframe = this.find('iframe'),
				    contents = iframe.contents().find('body'),
				    bodyH = contents.find('form').outerHeight(true),
				    iframeH = bodyH + (iframe.outerHeight(true) - iframe.height()),
				    containerH = iframeH + (this.outerHeight(true) - this.height());
				if (!$.browser.msie && $.browser.version.slice(0, 3) != "8.0") {
					contents.find('body').css({ 'height': bodyH });
				}
	
				iframe.height(iframeH);
				this.animate({ height: containerH }, 500);
			},
			toggleEditForm: function toggleEditForm() {
				var itemInfo = this.prev('.ss-uploadfield-item-info'),
				    status = itemInfo.find('.ss-uploadfield-item-status');
	
				var iframe = this.find('iframe').contents(),
				    saved = iframe.find('#Form_EditForm_error');
	
				var text = "";
	
				if (this.height() === 0) {
					text = _i18n2.default._t('UploadField.Editing', "Editing ...");
					this.fitHeight();
					this.addClass('opened');
					itemInfo.find('.toggle-details-icon').addClass('opened');
					status.removeClass('ui-state-success-text').removeClass('ui-state-warning-text');
					iframe.find('#Form_EditForm_action_doEdit').click(function () {
						itemInfo.find('label .name').text(iframe.find('#Name input').val());
					});
					if ($('div.ss-upload  .ss-uploadfield-files .ss-uploadfield-item-actions .toggle-details-icon:not(.opened)').index() < 0) {
						$('div.ss-upload .ss-uploadfield-item-edit-all').addClass('opened').find('.toggle-details-icon').addClass('opened');
					}
				} else {
					this.animate({ height: 0 }, 500);
					this.removeClass('opened');
					itemInfo.find('.toggle-details-icon').removeClass('opened');
					$('div.ss-upload .ss-uploadfield-item-edit-all').removeClass('opened').find('.toggle-details-icon').removeClass('opened');
					if (!this.hasClass('edited')) {
						text = _i18n2.default._t('UploadField.NOCHANGES', 'No Changes');
						status.addClass('ui-state-success-text');
					} else {
						if (saved.hasClass('good')) {
							text = _i18n2.default._t('UploadField.CHANGESSAVED', 'Changes Saved');
							this.removeClass('edited').parent('.ss-uploadfield-item').removeClass('ui-state-warning');
							status.addClass('ui-state-success-text');
						} else {
							text = _i18n2.default._t('UploadField.UNSAVEDCHANGES', 'Unsaved Changes');
							this.parent('.ss-uploadfield-item').addClass('ui-state-warning');
							status.addClass('ui-state-warning-text');
						}
					}
					saved.removeClass('good').hide();
				}
				status.attr('title', text).text(text);
			}
		});
		$('div.ss-upload .ss-uploadfield-fromfiles').entwine({
			onclick: function onclick(e) {
				this.getUploadField().openSelectDialog(this.closest('.ss-uploadfield-item'));
				e.preventDefault();
				return false;
			}
		});
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * JavaScript Templates 1.0.2
	 * https://github.com/blueimp/JavaScript-Templates
	 *
	 * Copyright 2011, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Licensed under the MIT license:
	 * http://www.opensource.org/licenses/MIT
	 *
	 * Inspired by John Resig's JavaScript Micro-Templating:
	 * http://ejohn.org/blog/javascript-micro-templating/
	 */
	
	/*jslint evil: true, regexp: true */
	/*global document, define */
	
	(function ($) {
	    "use strict";
	    var tmpl = function (str, data) {
	        var f = !/[^\-\w]/.test(str) ? tmpl.cache[str] = tmpl.cache[str] ||
	                tmpl(tmpl.load(str)) :
	                    new Function(
	                        tmpl.arg,
	                        ("var _s=''" + tmpl.helper + ";_s+='" +
	                            str.replace(tmpl.regexp, tmpl.func) +
	                            "';return _s;").split("_s+='';").join("")
	                    );
	        f.tmpl = f.tmpl || tmpl;
	        return data ? f(data) : f;
	    };
	    tmpl.cache = {};
	    tmpl.load = function (id) {
	        return document.getElementById(id).innerHTML;
	    };
	    tmpl.regexp = /(\s+)|('|\\)(?![^%]*%\})|(?:\{%(=|#)(.+?)%\})|(\{%)|(%\})/g;
	    tmpl.func = function (s, p1, p2, p3, p4, p5, p6, o, str) {
	        if (p1) { // whitespace
	            return o && o + s.length !== str.length ? " " : "";
	        }
	        if (p2) { // single quote or backslash
	            return "\\" + s;
	        }
	        if (p3) { // interpolation: {%=prop%}, or unescaped: {%#prop%}
	            if (p3 === "=") {
	                return "'+_e(" + p4 + ")+'";
	            }
	            return "'+(" + p4 + "||'')+'";
	        }
	        if (p5) { // evaluation start tag: {%
	            return "';";
	        }
	        if (p6) { // evaluation end tag: %}
	            return "_s+='";
	        }
	    };
	    tmpl.encReg = /[<>&"\x00]/g;
	    tmpl.encMap = {
	        "<": "&lt;",
	        ">": "&gt;",
	        "&": "&amp;",
	        "\"": "&quot;",
	        "\x00": ""
	    };
	    tmpl.encode = function (s) {
	        return String(s || "").replace(
	            tmpl.encReg,
	            function (c) {
	                return tmpl.encMap[c];
	            }
	        );
	    };
	    tmpl.arg = "o";
	    tmpl.helper = ",_t=arguments.callee.tmpl,_e=_t.encode" +
	        ",print=function(s,e){_s+=e&&(s||'')||_e(s);}" +
	        ",include=function(s,d){_s+=_t(s,d);}";
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return tmpl;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        $.tmpl = tmpl;
	    }
	}(this));


/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';
	
	window.tmpl.cache['ss-uploadfield-uploadtemplate'] = window.tmpl('{% for (var i=0, files=o.files, l=files.length, file=files[0]; i<l; file=files[++i]) { %}' + '<li class="ss-uploadfield-item template-upload{% if (file.error) { %} ui-state-error{% } %}">' + '<div class="ss-uploadfield-item-preview preview"><span></span></div>' + '<div class="ss-uploadfield-item-info">' + '<label class="ss-uploadfield-item-name">' + '<span class="name" title="{% if (file.name) { %}{%=file.name%}{% } else { %}' + ss.i18n._t('UploadField.NOFILENAME', 'Untitled') + '{% } %}">' + '{% if (file.name) { %}{%=file.name%}{% } else { %}' + ss.i18n._t('UploadField.NOFILENAME', 'Untitled') + '{% } %}</span> ' + '{% if (!file.error) { %}' + '<div class="ss-uploadfield-item-status">0%</div>' + '{% } else {  %}' + '<div class="ss-uploadfield-item-status ui-state-error-text" title="{%=o.options.errorMessages[file.error] || file.error%}">{%=o.options.errorMessages[file.error] || file.error%}</div>' + '{% } %}' + '<div class="clear"><!-- --></div>' + '</label>' + '<div class="ss-uploadfield-item-actions">' + '{% if (!file.error) { %}' + '<div class="ss-uploadfield-item-progress"><div class="ss-uploadfield-item-progressbar"><div class="ss-uploadfield-item-progressbarvalue"></div></div></div>' + '{% if (!o.options.autoUpload) { %}' + '<div class="ss-uploadfield-item-start start"><button type="button" class="icon icon-16" data-icon="navigation">' + ss.i18n._t('UploadField.START', 'Start') + '</button></div>' + '{% } %}' + '{% } %}' + '<div class="ss-uploadfield-item-cancel cancel">' + '<button type="button" class="icon icon-16" data-icon="minus-circle" title="' + ss.i18n._t('UploadField.CANCELREMOVE', 'Cancel/Remove') + '">' + ss.i18n._t('UploadField.CANCELREMOVE', 'Cancel/Remove') + '</button>' + '</div>' + '<div class="ss-uploadfield-item-overwrite hide ">' + '<button type="button" data-icon="drive-upload" class="ss-uploadfield-item-overwrite-warning" title="' + ss.i18n._t('UploadField.OVERWRITE', 'Overwrite') + '">' + ss.i18n._t('UploadField.OVERWRITE', 'Overwrite') + '</button>' + '</div>' + '</div>' + '</div>' + '</li>' + '{% } %}');

/***/ },
/* 112 */
/***/ function(module, exports) {

	'use strict';
	
	tmpl.cache['ss-uploadfield-downloadtemplate'] = tmpl('{% for (var i=0, files=o.files, l=files.length, file=files[0]; i<l; file=files[++i]) { %}' + '<li class="ss-uploadfield-item template-download{% if (file.error) { %} ui-state-error{% } %}" data-fileid="{%=file.id%}">' + '{% if (file.thumbnail_url) { %}' + '<div class="ss-uploadfield-item-preview preview"><span>' + '<img src="{%=file.thumbnail_url%}" alt="" />' + '</span></div>' + '{% } %}' + '<div class="ss-uploadfield-item-info">' + '{% if (!file.error && file.id) { %}' + '<input type="hidden" name="{%=file.fieldname%}[Files][]" value="{%=file.id%}" />' + '{% } %}' + '{% if (!file.error && file.filename) { %}' + '<input type="hidden" value="{%=file.filename%}" name="{%=file.fieldname%}[Filename]" />' + '<input type="hidden" value="{%=file.hash%}" name="{%=file.fieldname%}[Hash]" />' + '<input type="hidden" value="{%=file.variant%}" name="{%=file.fieldname%}[Variant]" />' + '{% } %}' + '<label class="ss-uploadfield-item-name">' + '<span class="name" title="{%=file.name%}">{%=file.name%}</span> ' + '<span class="size">{%=o.formatFileSize(file.size)%}</span>' + '{% if (!file.error) { %}' + '<div class="ss-uploadfield-item-status ui-state-success-text" title="' + ss.i18n._t('UploadField.Uploaded', 'Uploaded') + '">' + ss.i18n._t('UploadField.Uploaded', 'Uploaded') + '</div>' + '{% } else {  %}' + '<div class="ss-uploadfield-item-status ui-state-error-text" title="{%=o.options.errorMessages[file.error] || file.error%}">{%=o.options.errorMessages[file.error] || file.error%}</div>' + '{% } %}' + '<div class="clear"><!-- --></div>' + '</label>' + '{% if (file.error) { %}' + '<div class="ss-uploadfield-item-actions">' + '<div class="ss-uploadfield-item-cancel ss-uploadfield-item-cancelfailed delete"><button type="button" class="icon icon-16" data-icon="delete" title="' + ss.i18n._t('UploadField.CANCELREMOVE', 'Cancel/Remove') + '">' + ss.i18n._t('UploadField.CANCELREMOVE', 'Cancel/Remove') + '</button></div>' + '</div>' + '{% } else { %}' + '<div class="ss-uploadfield-item-actions">{% print(file.buttons, true); %}</div>' + '{% } %}' + '</div>' + '{% if (!file.error) { %}' + '<div class="ss-uploadfield-item-editform"><iframe frameborder="0" data-src="{%=file.edit_url%}" src="about:blank"></iframe></div>' + '{% } %}' + '</li>' + '{% } %}');

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jQuery2.default)(document).ready(function () {
	  (0, _jQuery2.default)('ul.SelectionGroup input.selector, ul.selection-group input.selector').live('click', function () {
	    var li = (0, _jQuery2.default)(this).closest('li');
	    li.addClass('selected');
	
	    var prev = li.prevAll('li.selected');
	    if (prev.length) {
	      prev.removeClass('selected');
	    }
	    var next = li.nextAll('li.selected');
	    if (next.length) {
	      next.removeClass('selected');
	    }
	
	    (0, _jQuery2.default)(this).focus();
	  });
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(87);
	
	_jQuery2.default.fn.extend({
		ssDatepicker: function ssDatepicker(opts) {
			return (0, _jQuery2.default)(this).each(function () {
				if ((0, _jQuery2.default)(this).prop('disabled') || (0, _jQuery2.default)(this).prop('readonly') || (0, _jQuery2.default)(this).data('datepicker')) return;
	
				(0, _jQuery2.default)(this).siblings("button").addClass("ui-icon ui-icon-calendar");
	
				var holder = (0, _jQuery2.default)(this).closest('.field.date'),
				    config = _jQuery2.default.extend(opts || {}, (0, _jQuery2.default)(this).data(), (0, _jQuery2.default)(this).data('jqueryuiconfig'), {});
				if (!config.showcalendar) return;
	
				if (config.locale && _jQuery2.default.datepicker.regional[config.locale]) {
					config = _jQuery2.default.extend(config, _jQuery2.default.datepicker.regional[config.locale], {});
				}
	
				if (config.min) config.minDate = _jQuery2.default.datepicker.parseDate('yy-mm-dd', config.min);
				if (config.max) config.maxDate = _jQuery2.default.datepicker.parseDate('yy-mm-dd', config.max);
	
				config.dateFormat = config.jquerydateformat;
				(0, _jQuery2.default)(this).datepicker(config);
			});
		}
	});
	
	(0, _jQuery2.default)(document).on("click", ".field.date input.text,input.text.date", function () {
		(0, _jQuery2.default)(this).ssDatepicker();
	
		if ((0, _jQuery2.default)(this).data('datepicker')) {
			(0, _jQuery2.default)(this).datepicker('show');
		}
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(87);
	
	_jQuery2.default.entwine('ss', function ($) {
		$('.ss-toggle').entwine({
			onadd: function onadd() {
				this._super();
	
				this.accordion({
					heightStyle: "content",
					collapsible: true,
					active: this.hasClass("ss-toggle-start-closed") ? false : 0
				});
			},
			onremove: function onremove() {
				if (this.data('accordion')) this.accordion('destroy');
				this._super();
			},
	
			getTabSet: function getTabSet() {
				return this.closest(".ss-tabset");
			},
	
			fromTabSet: {
				ontabsshow: function ontabsshow() {
					this.accordion("resize");
				}
			}
		});
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jQuery2.default.entwine('ss', function ($) {
	
		$('.memberdatetimeoptionset').entwine({
			onmatch: function onmatch() {
				this.find('.toggle-content').hide();
				this._super();
			}
		});
	
		$('.memberdatetimeoptionset .toggle').entwine({
			onclick: function onclick(e) {
				jQuery(this).closest('.form__field-description').parent().find('.toggle-content').toggle();
				return false;
			}
		});
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	var _i18n = __webpack_require__(94);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(118);
	__webpack_require__(119);
	
	_jQuery2.default.entwine('ss', function ($) {
		var windowWidth, windowHeight;
		$(window).bind('resize.treedropdownfield', function () {
			var cb = function cb() {
				$('.TreeDropdownField').closePanel();
			};
	
			if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
				var newWindowWidth = $(window).width(),
				    newWindowHeight = $(window).height();
				if (newWindowWidth != windowWidth || newWindowHeight != windowHeight) {
					windowWidth = newWindowWidth;
					windowHeight = newWindowHeight;
					cb();
				}
			} else {
				cb();
			}
		});
	
		var strings = {
			'openlink': _i18n2.default._t('TreeDropdownField.OpenLink'),
			'fieldTitle': '(' + _i18n2.default._t('TreeDropdownField.FieldTitle') + ')',
			'searchFieldTitle': '(' + _i18n2.default._t('TreeDropdownField.SearchFieldTitle') + ')'
		};
	
		var _clickTestFn = function _clickTestFn(e) {
			if (!$(e.target).parents('.TreeDropdownField').length) $('.TreeDropdownField').closePanel();
		};
	
		$('.TreeDropdownField').entwine({
			CurrentXhr: null,
	
			onadd: function onadd() {
				this.append('<span class="treedropdownfield-title"></span>' + '<div class="treedropdownfield-toggle-panel-link"><a href="#" class="ui-icon ui-icon-triangle-1-s"></a></div>' + '<div class="treedropdownfield-panel"><div class="tree-holder"></div></div>');
	
				var linkTitle = strings.openLink;
				if (linkTitle) this.find("treedropdownfield-toggle-panel-link a").attr('title', linkTitle);
				if (this.data('title')) this.setTitle(this.data('title'));
	
				this.getPanel().hide();
				this._super();
			},
			getPanel: function getPanel() {
				return this.find('.treedropdownfield-panel');
			},
			openPanel: function openPanel() {
				$('.TreeDropdownField').closePanel();
	
				$('body').bind('click', _clickTestFn);
	
				var panel = this.getPanel(),
				    tree = this.find('.tree-holder');
	
				panel.css('width', this.width());
	
				panel.show();
	
				var toggle = this.find(".treedropdownfield-toggle-panel-link");
				toggle.addClass('treedropdownfield-open-tree');
				this.addClass("treedropdownfield-open-tree");
	
				toggle.find("a").removeClass('ui-icon-triangle-1-s').addClass('ui-icon-triangle-1-n');
	
				if (tree.is(':empty') && !panel.hasClass('loading')) {
					this.loadTree(null, this._riseUp);
				} else {
					this._riseUp();
				}
	
				this.trigger('panelshow');
			},
			_riseUp: function _riseUp() {
				var container = this,
				    dropdown = this.getPanel(),
				    toggle = this.find(".treedropdownfield-toggle-panel-link"),
				    offsetTop = toggle.innerHeight(),
				    elHeight,
				    elPos,
				    endOfWindow;
	
				if (toggle.length > 0) {
					endOfWindow = $(window).height() + $(document).scrollTop() - toggle.innerHeight();
					elPos = toggle.offset().top;
					elHeight = dropdown.innerHeight();
	
					if (elPos + elHeight > endOfWindow && elPos - elHeight > 0) {
						container.addClass('treedropdownfield-with-rise');
						offsetTop = -dropdown.outerHeight();
					} else {
						container.removeClass('treedropdownfield-with-rise');
					}
				}
				dropdown.css({ "top": offsetTop + "px" });
			},
			closePanel: function closePanel() {
				jQuery('body').unbind('click', _clickTestFn);
	
				var toggle = this.find(".treedropdownfield-toggle-panel-link");
				toggle.removeClass('treedropdownfield-open-tree');
				this.removeClass('treedropdownfield-open-tree treedropdownfield-with-rise');
	
				toggle.find("a").removeClass('ui-icon-triangle-1-n').addClass('ui-icon-triangle-1-s');
	
				this.getPanel().hide();
				this.trigger('panelhide');
			},
			togglePanel: function togglePanel() {
				this[this.getPanel().is(':visible') ? 'closePanel' : 'openPanel']();
			},
			setTitle: function setTitle(title) {
				title = title || this.data('title') || strings.fieldTitle;
	
				this.find('.treedropdownfield-title').html(title);
				this.data('title', title);
			},
			getTitle: function getTitle() {
				return this.find('.treedropdownfield-title').text();
			},
	
			updateTitle: function updateTitle() {
				var self = this,
				    tree = self.find('.tree-holder'),
				    val = this.getValue();
				var updateFn = function updateFn() {
					var val = self.getValue();
					if (val) {
	
						var node = tree.find('*[data-id="' + val + '"]'),
						    title = node.children('a').find("span.jstree_pageicon") ? node.children('a').find("span.item").html() : null;
						if (!title) title = node.length > 0 ? tree.jstree('get_text', node[0]) : null;
	
						if (title) {
							self.setTitle(title);
							self.data('title', title);
						}
						if (node) tree.jstree('select_node', node);
					} else {
						self.setTitle(self.data('empty-title'));
						self.removeData('title');
					}
				};
	
				if (!tree.is(':empty') || !val) updateFn();else this.loadTree({ forceValue: val }, updateFn);
			},
			setValue: function setValue(val) {
				this.data('metadata', $.extend(this.data('metadata'), { id: val }));
				this.find(':input:hidden').val(val).trigger('valueupdated').trigger('change');
			},
			getValue: function getValue() {
				return this.find(':input:hidden').val();
			},
			loadTree: function loadTree(params, callback) {
				var self = this,
				    panel = this.getPanel(),
				    treeHolder = $(panel).find('.tree-holder'),
				    params = params ? $.extend({}, this.getRequestParams(), params) : this.getRequestParams(),
				    xhr;
	
				if (this.getCurrentXhr()) this.getCurrentXhr().abort();
				panel.addClass('loading');
				xhr = $.ajax({
					url: this.data('urlTree'),
					data: params,
					complete: function complete(xhr, status) {
						panel.removeClass('loading');
					},
					success: function success(html, status, xhr) {
						treeHolder.html(html);
						var firstLoad = true;
						treeHolder.jstree('destroy').bind('loaded.jstree', function (e, data) {
							var val = self.getValue(),
							    selectNode = treeHolder.find('*[data-id="' + val + '"]'),
							    currentNode = data.inst.get_selected();
							if (val && selectNode != currentNode) data.inst.select_node(selectNode);
							firstLoad = false;
							if (callback) callback.apply(self);
						}).jstree(self.getTreeConfig()).bind('select_node.jstree', function (e, data) {
							var node = data.rslt.obj,
							    id = $(node).data('id');
							if (!firstLoad && self.getValue() == id) {
								self.data('metadata', null);
								self.setTitle(null);
								self.setValue(null);
								data.inst.deselect_node(node);
							} else {
								self.data('metadata', $.extend({ id: id }, $(node).getMetaData()));
								self.setTitle(data.inst.get_text(node));
								self.setValue(id);
							}
	
							if (!firstLoad) self.closePanel();
							firstLoad = false;
						});
	
						self.setCurrentXhr(null);
					}
				});
				this.setCurrentXhr(xhr);
			},
			getTreeConfig: function getTreeConfig() {
				var self = this;
				return {
					'core': {
						'html_titles': true,
	
						'animation': 0
					},
					'html_data': {
						'data': this.getPanel().find('.tree-holder').html(),
						'ajax': {
							'url': function url(node) {
								var url = $.path.parseUrl(self.data('urlTree')).hrefNoSearch;
								return url + '/' + ($(node).data("id") ? $(node).data("id") : 0);
							},
							'data': function data(node) {
								var query = $.query.load(self.data('urlTree')).keys;
								var params = self.getRequestParams();
								params = $.extend({}, query, params, { ajax: 1 });
								return params;
							}
						}
					},
					'ui': {
						"select_limit": 1,
						'initially_select': [this.getPanel().find('.current').attr('id')]
					},
					'themes': {
						'theme': 'apple'
					},
					'types': {
						'types': {
							'default': {
								'check_node': function check_node(node) {
									return !node.hasClass('disabled');
								},
								'uncheck_node': function uncheck_node(node) {
									return !node.hasClass('disabled');
								},
								'select_node': function select_node(node) {
									return !node.hasClass('disabled');
								},
								'deselect_node': function deselect_node(node) {
									return !node.hasClass('disabled');
								}
							}
						}
					},
					'plugins': ['html_data', 'ui', 'themes', 'types']
				};
			},
	
			getRequestParams: function getRequestParams() {
				return {};
			}
		});
	
		$('.TreeDropdownField .tree-holder li').entwine({
			getMetaData: function getMetaData() {
				var matches = this.attr('class').match(/class-([^\s]*)/i);
				var klass = matches ? matches[1] : '';
				return { ClassName: klass };
			}
		});
	
		$('.TreeDropdownField *').entwine({
			getField: function getField() {
				return this.parents('.TreeDropdownField:first');
			}
		});
	
		$('.TreeDropdownField').entwine({
			onclick: function onclick(e) {
				this.togglePanel();
	
				return false;
			}
		});
	
		$('.TreeDropdownField .treedropdownfield-panel').entwine({
			onclick: function onclick(e) {
				return false;
			}
		});
	
		$('.TreeDropdownField.searchable').entwine({
			onadd: function onadd() {
				this._super();
				var title = _i18n2.default._t('TreeDropdownField.ENTERTOSEARCH');
				this.find('.treedropdownfield-panel').prepend($('<input type="text" class="search treedropdownfield-search" data-skip-autofocus="true" placeholder="' + title + '" value="" />'));
			},
			search: function search(str, callback) {
				this.openPanel();
				this.loadTree({ search: str }, callback);
			},
			cancelSearch: function cancelSearch() {
				this.closePanel();
				this.loadTree();
			}
		});
	
		$('.TreeDropdownField.searchable input.search').entwine({
			onkeydown: function onkeydown(e) {
				var field = this.getField();
				if (e.keyCode == 13) {
					field.search(this.val());
					return false;
				} else if (e.keyCode == 27) {
					field.cancelSearch();
				}
			}
		});
	
		$('.TreeDropdownField.multiple').entwine({
			getTreeConfig: function getTreeConfig() {
				var cfg = this._super();
				cfg.checkbox = { override_ui: true, two_state: true };
				cfg.plugins.push('checkbox');
				cfg.ui.select_limit = -1;
				return cfg;
			},
			loadTree: function loadTree(params, callback) {
				var self = this,
				    panel = this.getPanel(),
				    treeHolder = $(panel).find('.tree-holder');
				var params = params ? $.extend({}, this.getRequestParams(), params) : this.getRequestParams(),
				    xhr;
	
				if (this.getCurrentXhr()) this.getCurrentXhr().abort();
				panel.addClass('loading');
				xhr = $.ajax({
					url: this.data('urlTree'),
					data: params,
					complete: function complete(xhr, status) {
						panel.removeClass('loading');
					},
					success: function success(html, status, xhr) {
						treeHolder.html(html);
						var firstLoad = true;
						self.setCurrentXhr(null);
						treeHolder.jstree('destroy').bind('loaded.jstree', function (e, data) {
							$.each(self.getValue(), function (i, val) {
								data.inst.check_node(treeHolder.find('*[data-id=' + val + ']'));
							});
							firstLoad = false;
							if (callback) callback.apply(self);
						}).jstree(self.getTreeConfig()).bind('uncheck_node.jstree check_node.jstree', function (e, data) {
							var nodes = data.inst.get_checked(null, true);
							self.setValue($.map(nodes, function (el, i) {
								return $(el).data('id');
							}));
							self.setTitle($.map(nodes, function (el, i) {
								return data.inst.get_text(el);
							}));
							self.data('metadata', $.map(nodes, function (el, i) {
								return { id: $(el).data('id'), metadata: $(el).getMetaData() };
							}));
						});
					}
				});
				this.setCurrentXhr(xhr);
			},
			getValue: function getValue() {
				var val = this._super();
				return val.split(/ *, */);
			},
			setValue: function setValue(val) {
				this._super($.isArray(val) ? val.join(',') : val);
			},
			setTitle: function setTitle(title) {
				this._super($.isArray(title) ? title.join(', ') : title);
			},
			updateTitle: function updateTitle() {}
		});
	
		$('.TreeDropdownField input[type=hidden]').entwine({
			onadd: function onadd() {
				this._super();
				this.bind('change.TreeDropdownField', function () {
					$(this).getField().updateTitle();
				});
			},
			onremove: function onremove() {
				this._super();
				this.unbind('.TreeDropdownField');
			}
		});
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 118 */,
/* 119 */,
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	var _i18n = __webpack_require__(94);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ss = typeof window.ss !== 'undefined' ? window.ss : {};
	
	ss.editorWrappers = {};
	ss.editorWrappers.tinyMCE = function () {
		var editorID;
	
		return {
			init: function init(ID) {
				editorID = ID;
	
				this.create();
			},
	
			destroy: function destroy() {
				tinymce.EditorManager.execCommand('mceRemoveEditor', false, editorID);
			},
	
			getInstance: function getInstance() {
				return tinymce.EditorManager.get(editorID);
			},
	
			onopen: function onopen() {},
	
			onclose: function onclose() {},
	
			getConfig: function getConfig() {
				var selector = "#" + editorID,
				    config = (0, _jQuery2.default)(selector).data('config'),
				    self = this;
	
				config.selector = selector;
	
				config.setup = function (ed) {
					ed.on('change', function () {
						self.save();
					});
				};
				return config;
			},
	
			save: function save() {
				var instance = this.getInstance();
				instance.save();
	
				(0, _jQuery2.default)(instance.getElement()).trigger("change");
			},
	
			create: function create() {
				var config = this.getConfig();
	
				if (typeof config.baseURL !== 'undefined') {
					tinymce.EditorManager.baseURL = config.baseURL;
				}
				tinymce.init(config);
			},
	
			repaint: function repaint() {},
	
			isDirty: function isDirty() {
				return this.getInstance().isDirty();
			},
	
			getContent: function getContent() {
				return this.getInstance().getContent();
			},
	
			getDOM: function getDOM() {
				return this.getInstance().getElement();
			},
	
			getContainer: function getContainer() {
				return this.getInstance().getContainer();
			},
	
			getSelectedNode: function getSelectedNode() {
				return this.getInstance().selection.getNode();
			},
	
			selectNode: function selectNode(node) {
				this.getInstance().selection.select(node);
			},
	
			setContent: function setContent(html, opts) {
				this.getInstance().setContent(html, opts);
			},
	
			insertContent: function insertContent(html, opts) {
				this.getInstance().insertContent(html, opts);
			},
	
			replaceContent: function replaceContent(html, opts) {
				this.getInstance().execCommand('mceReplaceContent', false, html, opts);
			},
	
			insertLink: function insertLink(attrs, opts) {
				this.getInstance().execCommand("mceInsertLink", false, attrs, opts);
			},
	
			removeLink: function removeLink() {
				this.getInstance().execCommand('unlink', false);
			},
	
			cleanLink: function cleanLink(href, node) {
				var settings = this.getConfig,
				    cb = settings['urlconverter_callback'];
				if (cb) href = eval(cb + "(href, node, true);");
	
				if (href.match(new RegExp('^' + tinyMCE.settings['document_base_url'] + '(.*)$'))) {
					href = RegExp.$1;
				}
	
				if (href.match(/^javascript:\s*mctmp/)) href = '';
	
				return href;
			},
	
			createBookmark: function createBookmark() {
				return this.getInstance().selection.getBookmark();
			},
	
			moveToBookmark: function moveToBookmark(bookmark) {
				this.getInstance().selection.moveToBookmark(bookmark);
				this.getInstance().focus();
			},
	
			blur: function blur() {
				this.getInstance().selection.collapse();
			},
	
			addUndo: function addUndo() {
				this.getInstance().undoManager.add();
			}
		};
	};
	
	ss.editorWrappers['default'] = ss.editorWrappers.tinyMCE;
	
	_jQuery2.default.entwine('ss', function ($) {
		$('textarea.htmleditor').entwine({
	
			Editor: null,
	
			onadd: function onadd() {
				var edClass = this.data('editor') || 'default',
				    ed = ss.editorWrappers[edClass]();
				this.setEditor(ed);
	
				ed.init(this.attr('id'));
	
				this._super();
			},
	
			onremove: function onremove() {
				this.getEditor().destroy();
				this._super();
			},
	
			'from .cms-edit-form': {
				onbeforesubmitform: function onbeforesubmitform() {
					this.getEditor().save();
					this._super();
				}
			},
	
			openLinkDialog: function openLinkDialog() {
				this.openDialog('link');
			},
	
			openMediaDialog: function openMediaDialog() {
				this.openDialog('media');
			},
	
			openDialog: function openDialog(type) {
				var capitalize = function capitalize(text) {
					return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
				};
	
				var self = this,
				    url = $('#cms-editor-dialogs').data('url' + capitalize(type) + 'form'),
				    dialog = $('.htmleditorfield-' + type + 'dialog');
	
				if (dialog.length) {
					dialog.getForm().setElement(this);
					dialog.html('');
					dialog.addClass('loading');
					dialog.open();
				} else {
					dialog = $('<div class="htmleditorfield-dialog htmleditorfield-' + type + 'dialog loading">');
					$('body').append(dialog);
				}
	
				$.ajax({
					url: url,
					complete: function complete() {
						dialog.removeClass('loading');
					},
					success: function success(html) {
						dialog.html(html);
						dialog.getForm().setElement(self);
						dialog.trigger('ssdialogopen');
					}
				});
			}
		});
	
		$('.htmleditorfield-dialog').entwine({
			onadd: function onadd() {
				if (!this.is('.ui-dialog-content')) {
					this.ssdialog({
						autoOpen: true,
						buttons: {
							'insert': {
								text: _i18n2.default._t('HtmlEditorField.INSERT', 'Insert'),
								'data-icon': 'accept',
								class: 'ss-ui-action-constructive media-insert',
								click: function click() {
									$(this).find('form').submit();
								}
							}
						}
					});
				}
	
				this._super();
			},
	
			getForm: function getForm() {
				return this.find('form');
			},
			open: function open() {
				this.ssdialog('open');
			},
			close: function close() {
				this.ssdialog('close');
			},
			toggle: function toggle(bool) {
				if (this.is(':visible')) this.close();else this.open();
			},
			onscroll: function onscroll() {
				this.animate({
					scrollTop: this.find('form').height()
				}, 500);
			}
		});
	
		$('form.htmleditorfield-form').entwine({
			Selection: null,
	
			Bookmark: null,
	
			Element: null,
	
			setSelection: function setSelection(node) {
				return this._super($(node));
			},
	
			onadd: function onadd() {
				var titleEl = this.find(':header:first');
				this.getDialog().attr('title', titleEl.text());
	
				this._super();
			},
			onremove: function onremove() {
				this.setSelection(null);
				this.setBookmark(null);
				this.setElement(null);
	
				this._super();
			},
	
			getDialog: function getDialog() {
				return this.closest('.htmleditorfield-dialog');
			},
	
			fromDialog: {
				onssdialogopen: function onssdialogopen() {
					var ed = this.getEditor();
	
					this.setSelection(ed.getSelectedNode());
					this.setBookmark(ed.createBookmark());
	
					ed.blur();
	
					this.find(':input:not(:submit)[data-skip-autofocus!="true"]').filter(':visible:enabled').eq(0).focus();
	
					this.redraw();
					this.updateFromEditor();
				},
	
				onssdialogclose: function onssdialogclose() {
					var ed = this.getEditor();
	
					ed.moveToBookmark(this.getBookmark());
	
					this.setSelection(null);
					this.setBookmark(null);
	
					this.resetFields();
				}
			},
	
			getEditor: function getEditor() {
				return this.getElement().getEditor();
			},
	
			modifySelection: function modifySelection(callback) {
				var ed = this.getEditor();
	
				ed.moveToBookmark(this.getBookmark());
				callback.call(this, ed);
	
				this.setSelection(ed.getSelectedNode());
				this.setBookmark(ed.createBookmark());
	
				ed.blur();
			},
	
			updateFromEditor: function updateFromEditor() {},
			redraw: function redraw() {},
			resetFields: function resetFields() {
				this.find('.tree-holder').empty();
			}
		});
	
		$('form.htmleditorfield-linkform').entwine({
			onsubmit: function onsubmit(e) {
				this.insertLink();
				this.getDialog().close();
				return false;
			},
			resetFields: function resetFields() {
				this._super();
	
				this[0].reset();
			},
			redraw: function redraw() {
				this._super();
	
				var linkType = this.find(':input[name=LinkType]:checked').val();
	
				this.addAnchorSelector();
	
				this.resetFileField();
	
				this.find('.step2').nextAll('.field').not('.field[id$="' + linkType + '_Holder"]').hide();
				this.find('.field[id$="LinkType_Holder"]').attr('style', 'display: -webkit-flex; display: flex');
				this.find('.field[id$="' + linkType + '_Holder"]').attr('style', 'display: -webkit-flex; display: flex');
	
				if (linkType == 'internal' || linkType == 'anchor') {
					this.find('.field[id$="Anchor_Holder"]').attr('style', 'display: -webkit-flex; display: flex');
				}
	
				if (linkType == 'email') {
					this.find('.field[id$="Subject_Holder"]').attr('style', 'display: -webkit-flex; display: flex');
				} else {
					this.find('.field[id$="TargetBlank_Holder"]').attr('style', 'display: -webkit-flex; display: flex');
				}
	
				if (linkType == 'anchor') {
					this.find('.field[id$="AnchorSelector_Holder"]').attr('style', 'display: -webkit-flex; display: flex');
				}
				this.find('.field[id$="Description_Holder"]').attr('style', 'display: -webkit-flex; display: flex');
			},
	
			getLinkAttributes: function getLinkAttributes() {
				var href,
				    target = null,
				    subject = this.find(':input[name=Subject]').val(),
				    anchor = this.find(':input[name=Anchor]').val();
	
				if (this.find(':input[name=TargetBlank]').is(':checked')) {
					target = '_blank';
				}
	
				switch (this.find(':input[name=LinkType]:checked').val()) {
					case 'internal':
						href = '[sitetree_link,id=' + this.find(':input[name=internal]').val() + ']';
	
						if (anchor) {
							href += '#' + anchor;
						}
	
						break;
	
					case 'anchor':
						href = '#' + anchor;
						break;
	
					case 'file':
						var fileid = this.find('.ss-uploadfield .ss-uploadfield-item').attr('data-fileid');
						href = fileid ? '[file_link,id=' + fileid + ']' : '';
						break;
	
					case 'email':
						href = 'mailto:' + this.find(':input[name=email]').val();
						if (subject) {
							href += '?subject=' + encodeURIComponent(subject);
						}
						target = null;
						break;
	
					default:
						href = this.find(':input[name=external]').val();
	
						if (href.indexOf('://') == -1) href = 'http://' + href;
						break;
				}
	
				return {
					href: href,
					target: target,
					title: this.find(':input[name=Description]').val()
				};
			},
			insertLink: function insertLink() {
				this.modifySelection(function (ed) {
					ed.insertLink(this.getLinkAttributes());
				});
			},
			removeLink: function removeLink() {
				this.modifySelection(function (ed) {
					ed.removeLink();
				});
	
				this.resetFileField();
				this.close();
			},
	
			resetFileField: function resetFileField() {
				var fileField = this.find('.ss-uploadfield[id$="file_Holder"]'),
				    fileUpload = fileField.data('fileupload'),
				    currentItem = fileField.find('.ss-uploadfield-item[data-fileid]');
	
				if (currentItem.length) {
					fileUpload._trigger('destroy', null, { context: currentItem });
					fileField.find('.ss-uploadfield-addfile').removeClass('borderTop');
				}
			},
	
			addAnchorSelector: function addAnchorSelector() {
				if (this.find(':input[name=AnchorSelector]').length) return;
	
				var self = this;
				var anchorSelector = $('<select id="Form_EditorToolbarLinkForm_AnchorSelector" name="AnchorSelector"></select>');
				this.find(':input[name=Anchor]').parent().append(anchorSelector);
	
				this.updateAnchorSelector();
	
				anchorSelector.change(function (e) {
					self.find(':input[name="Anchor"]').val($(this).val());
				});
			},
	
			getAnchors: function getAnchors() {
				var linkType = this.find(':input[name=LinkType]:checked').val();
				var dfdAnchors = $.Deferred();
	
				switch (linkType) {
					case 'anchor':
						var collectedAnchors = [];
						var ed = this.getEditor();
	
	
						if (ed) {
							var raw = ed.getContent().match(/\s+(name|id)\s*=\s*(["'])([^\2\s>]*?)\2|\s+(name|id)\s*=\s*([^"']+)[\s +>]/gim);
							if (raw && raw.length) {
								for (var i = 0; i < raw.length; i++) {
									var indexStart = raw[i].indexOf('id=') == -1 ? 7 : 5;
									collectedAnchors.push(raw[i].substr(indexStart).replace(/"$/, ''));
								}
							}
						}
	
						dfdAnchors.resolve(collectedAnchors);
						break;
	
					case 'internal':
						var pageId = this.find(':input[name=internal]').val();
	
						if (pageId) {
							$.ajax({
								url: $.path.addSearchParams(this.attr('action').replace('LinkForm', 'getanchors'), { 'PageID': parseInt(pageId) }),
								success: function success(body, status, xhr) {
									dfdAnchors.resolve($.parseJSON(body));
								},
								error: function error(xhr, status) {
									dfdAnchors.reject(xhr.responseText);
								}
							});
						} else {
							dfdAnchors.resolve([]);
						}
						break;
	
					default:
						dfdAnchors.reject(_i18n2.default._t('HtmlEditorField.ANCHORSNOTSUPPORTED', 'Anchors are not supported for this link type.'));
						break;
				}
	
				return dfdAnchors.promise();
			},
	
			updateAnchorSelector: function updateAnchorSelector() {
				var self = this;
				var selector = this.find(':input[name=AnchorSelector]');
				var dfdAnchors = this.getAnchors();
	
				selector.empty();
				selector.append($('<option value="" selected="1">' + _i18n2.default._t('HtmlEditorField.LOOKINGFORANCHORS', 'Looking for anchors...') + '</option>'));
	
				dfdAnchors.done(function (anchors) {
					selector.empty();
					selector.append($('<option value="" selected="1">' + _i18n2.default._t('HtmlEditorField.SelectAnchor') + '</option>'));
	
					if (anchors) {
						for (var j = 0; j < anchors.length; j++) {
							selector.append($('<option value="' + anchors[j] + '">' + anchors[j] + '</option>'));
						}
					}
				}).fail(function (message) {
					selector.empty();
					selector.append($('<option value="" selected="1">' + message + '</option>'));
				});
	
				if ($.browser.msie) selector.hide().show();
			},
	
			updateFromEditor: function updateFromEditor() {
				var htmlTagPattern = /<\S[^><]*>/g,
				    fieldName,
				    data = this.getCurrentLink();
	
				if (data) {
					for (fieldName in data) {
						var el = this.find(':input[name=' + fieldName + ']'),
						    selected = data[fieldName];
	
						if (typeof selected == 'string') selected = selected.replace(htmlTagPattern, '');
	
						if (el.is(':checkbox')) {
							el.prop('checked', selected).change();
						} else if (el.is(':radio')) {
							el.val([selected]).change();
						} else if (fieldName == 'file') {
							el = this.find(':input[name="' + fieldName + '[Uploads][]"]');
	
							el = el.parents('.ss-uploadfield');
	
							(function attach(el, selected) {
								if (!el.getConfig()) {
									setTimeout(function () {
										attach(el, selected);
									}, 50);
								} else {
									el.attachFiles([selected]);
								}
							})(el, selected);
						} else {
							el.val(selected).change();
						}
					}
				}
			},
	
			getCurrentLink: function getCurrentLink() {
				var selectedEl = this.getSelection(),
				    href = "",
				    target = "",
				    title = "",
				    action = "insert",
				    style_class = "";
	
				var linkDataSource = null;
				if (selectedEl.length) {
					if (selectedEl.is('a')) {
						linkDataSource = selectedEl;
					} else {
						linkDataSource = selectedEl = selectedEl.parents('a:first');
					}
				}
				if (linkDataSource && linkDataSource.length) this.modifySelection(function (ed) {
					ed.selectNode(linkDataSource[0]);
				});
	
				if (!linkDataSource.attr('href')) linkDataSource = null;
	
				if (linkDataSource) {
					href = linkDataSource.attr('href');
					target = linkDataSource.attr('target');
					title = linkDataSource.attr('title');
					style_class = linkDataSource.attr('class');
					href = this.getEditor().cleanLink(href, linkDataSource);
					action = "update";
				}
	
				if (href.match(/^mailto:(.*)$/)) {
					return {
						LinkType: 'email',
						email: RegExp.$1,
						Description: title
					};
				} else if (href.match(/^(assets\/.*)$/) || href.match(/^\[file_link\s*(?:\s*|%20|,)?id=([0-9]+)\]?(#.*)?$/)) {
					return {
						LinkType: 'file',
						file: RegExp.$1,
						Description: title,
						TargetBlank: target ? true : false
					};
				} else if (href.match(/^#(.*)$/)) {
					return {
						LinkType: 'anchor',
						Anchor: RegExp.$1,
						Description: title,
						TargetBlank: target ? true : false
					};
				} else if (href.match(/^\[sitetree_link(?:\s*|%20|,)?id=([0-9]+)\]?(#.*)?$/i)) {
					return {
						LinkType: 'internal',
						internal: RegExp.$1,
						Anchor: RegExp.$2 ? RegExp.$2.substr(1) : '',
						Description: title,
						TargetBlank: target ? true : false
					};
				} else if (href) {
					return {
						LinkType: 'external',
						external: href,
						Description: title,
						TargetBlank: target ? true : false
					};
				} else {
					return null;
				}
			}
		});
	
		$('form.htmleditorfield-linkform input[name=LinkType]').entwine({
			onclick: function onclick(e) {
				this.parents('form:first').redraw();
				this._super();
			},
			onchange: function onchange() {
				this.parents('form:first').redraw();
	
				var linkType = this.parent().find(':checked').val();
				if (linkType === 'anchor' || linkType === 'internal') {
					this.parents('form.htmleditorfield-linkform').updateAnchorSelector();
				}
				this._super();
			}
		});
	
		$('form.htmleditorfield-linkform input[name=internal]').entwine({
			onvalueupdated: function onvalueupdated() {
				this.parents('form.htmleditorfield-linkform').updateAnchorSelector();
				this._super();
			}
		});
	
		$('form.htmleditorfield-linkform :submit[name=action_remove]').entwine({
			onclick: function onclick(e) {
				this.parents('form:first').removeLink();
				this._super();
				return false;
			}
		});
	
		$('form.htmleditorfield-mediaform').entwine({
			toggleCloseButton: function toggleCloseButton() {
				var updateExisting = Boolean(this.find('.ss-htmleditorfield-file').length);
				this.find('.overview .action-delete')[updateExisting ? 'hide' : 'show']();
			},
			onsubmit: function onsubmit() {
				this.modifySelection(function (ed) {
					this.find('.ss-htmleditorfield-file').each(function () {
						$(this).insertHTML(ed);
					});
				});
	
				this.getDialog().close();
				return false;
			},
			updateFromEditor: function updateFromEditor() {
				var self = this,
				    node = this.getSelection();
	
				if (node.is('img')) {
					var idOrUrl = node.data('id') || node.data('url') || node.attr('src');
					this.showFileView(idOrUrl).done(function (filefield) {
						filefield.updateFromNode(node);
						self.toggleCloseButton();
						self.redraw();
					});
				}
				this.redraw();
			},
			redraw: function redraw(updateExisting) {
				this._super();
	
				var node = this.getSelection(),
				    hasItems = Boolean(this.find('.ss-htmleditorfield-file').length),
				    editingSelected = node.is('img'),
				    insertingURL = this.hasClass('insertingURL'),
				    header = this.find('.header-edit');
	
				header[hasItems ? 'show' : 'hide']();
	
				this.closest('ui-dialog').find('ui-dialog-buttonpane .media-insert').button(hasItems ? 'enable' : 'disable').toggleClass('ui-state-disabled', !hasItems);
	
				this.find('.htmleditorfield-default-panel')[editingSelected || insertingURL ? 'hide' : 'show']();
				this.find('.htmleditorfield-web-panel')[editingSelected || !insertingURL ? 'hide' : 'show']();
	
				var mediaFormHeading = this.find('.htmleditorfield-mediaform-heading.insert');
	
				if (editingSelected) {
					mediaFormHeading.hide();
				} else if (insertingURL) {
					mediaFormHeading.show().text(_i18n2.default._t("HtmlEditorField.INSERTURL")).prepend('<button class="back-button font-icon-left-open no-text" title="' + _i18n2.default._t("HtmlEditorField.BACK") + '"></button>');
	
					this.find('.htmleditorfield-web-panel input.remoteurl').focus();
				} else {
					mediaFormHeading.show().text(_i18n2.default._t("HtmlEditorField.INSERTFROM")).find('.back-button').remove();
				}
	
				this.find('.htmleditorfield-mediaform-heading.update')[editingSelected ? 'show' : 'hide']();
				this.find('.ss-uploadfield-item-actions')[editingSelected ? 'hide' : 'show']();
				this.find('.ss-uploadfield-item-name')[editingSelected ? 'hide' : 'show']();
				this.find('.ss-uploadfield-item-preview')[editingSelected ? 'hide' : 'show']();
				this.find('.btn-toolbar .media-update')[editingSelected ? 'show' : 'hide']();
				this.find('.ss-uploadfield-item-editform').toggleEditForm(editingSelected);
				this.find('.htmleditorfield-from-cms .field.treedropdown').css('left', $('.htmleditorfield-mediaform-heading:visible').outerWidth());
				this.closest('.ui-dialog').addClass('ss-uploadfield-dropzone');
				this.closest('.ui-dialog').find('.ui-dialog-buttonpane .media-insert .ui-button-text').text([editingSelected ? _i18n2.default._t('HtmlEditorField.UPDATE', 'Update') : _i18n2.default._t('HtmlEditorField.INSERT', 'Insert')]);
			},
			resetFields: function resetFields() {
				this.find('.ss-htmleditorfield-file').remove();
				this.find('.ss-gridfield-items .ui-selected').removeClass('ui-selected');
				this.find('li.ss-uploadfield-item').remove();
				this.redraw();
	
				this._super();
			},
			getFileView: function getFileView(idOrUrl) {
				return this.find('.ss-htmleditorfield-file[data-id=' + idOrUrl + ']');
			},
			showFileView: function showFileView(idOrUrl) {
				var self = this,
				    params = Number(idOrUrl) == idOrUrl ? { ID: idOrUrl } : { FileURL: idOrUrl };
	
				var item = $('<div class="ss-htmleditorfield-file loading" />');
				this.find('.content-edit').prepend(item);
	
				var dfr = $.Deferred();
	
				$.ajax({
					url: $.path.addSearchParams(this.attr('action').replace(/MediaForm/, 'viewfile'), params),
					success: function success(html, status, xhr) {
						var newItem = $(html).filter('.ss-htmleditorfield-file');
						item.replaceWith(newItem);
						self.redraw();
						dfr.resolve(newItem);
					},
					error: function error() {
						item.remove();
						dfr.reject();
					}
				});
	
				return dfr.promise();
			}
		});
	
		$('form.htmleditorfield-mediaform div.ss-upload .upload-url').entwine({
			onclick: function onclick() {
				var form = this.closest('form');
	
				form.addClass('insertingURL');
				form.redraw();
			}
		});
	
		$('form.htmleditorfield-mediaform .htmleditorfield-mediaform-heading .back-button').entwine({
			onclick: function onclick() {
				var form = this.closest('form');
	
				form.removeClass('insertingURL');
				form.redraw();
			}
		});
	
		$('form.htmleditorfield-mediaform .ss-gridfield-items').entwine({
			onselectableselected: function onselectableselected(e, ui) {
				var form = this.closest('form'),
				    item = $(ui.selected);
				if (!item.is('.ss-gridfield-item')) return;
				form.closest('form').showFileView(item.data('id'));
				form.redraw();
	
				form.parent().trigger('scroll');
			},
			onselectableunselected: function onselectableunselected(e, ui) {
				var form = this.closest('form'),
				    item = $(ui.unselected);
				if (!item.is('.ss-gridfield-item')) return;
				form.getFileView(item.data('id')).remove();
				form.redraw();
			}
		});
	
		$('form.htmleditorfield-form.htmleditorfield-mediaform div.ss-assetuploadfield').entwine({
			onfileuploadstop: function onfileuploadstop(e) {
				var form = this.closest('form');
	
				var editFieldIDs = [];
				form.find('div.content-edit').find('div.ss-htmleditorfield-file').each(function () {
					editFieldIDs.push($(this).data('id'));
				});
	
				var uploadedFiles = $('.ss-uploadfield-files', this).children('.ss-uploadfield-item');
				uploadedFiles.each(function () {
					var uploadedID = $(this).data('fileid');
					if (uploadedID && $.inArray(uploadedID, editFieldIDs) == -1) {
						$(this).remove();
						form.showFileView(uploadedID);
					}
				});
	
				form.parent().trigger('scroll');
	
				form.redraw();
			}
	
		});
	
		$('form.htmleditorfield-form.htmleditorfield-mediaform input.remoteurl').entwine({
			onadd: function onadd() {
				this._super();
				this.validate();
			},
	
			onkeyup: function onkeyup() {
				this.validate();
			},
	
			onchange: function onchange() {
				this.validate();
			},
	
			getAddButton: function getAddButton() {
				return this.closest('.CompositeField').find('button.add-url');
			},
	
			validate: function validate() {
				var val = this.val(),
				    orig = val;
	
				val = $.trim(val);
				val = val.replace(/^https?:\/\//i, '');
				if (orig !== val) this.val(val);
	
				this.getAddButton().button(!!val ? 'enable' : 'disable');
				return !!val;
			}
		});
	
		$('form.htmleditorfield-form.htmleditorfield-mediaform .add-url').entwine({
			getURLField: function getURLField() {
				return this.closest('.CompositeField').find('input.remoteurl');
			},
	
			onclick: function onclick(e) {
				var urlField = this.getURLField(),
				    container = this.closest('.CompositeField'),
				    form = this.closest('form');
	
				if (urlField.validate()) {
					container.addClass('loading');
					form.showFileView('http://' + urlField.val()).done(function () {
						container.removeClass('loading');
	
						form.parent().trigger('scroll');
					});
					form.redraw();
				}
	
				return false;
			}
		});
	
		$('form.htmleditorfield-mediaform .ss-htmleditorfield-file').entwine({
			getAttributes: function getAttributes() {},
	
			getExtraData: function getExtraData() {},
	
			getHTML: function getHTML() {
				return $('<div>').append($('<a/>').attr({ href: this.data('url') }).text(this.find('.name').text())).html();
			},
	
			insertHTML: function insertHTML(ed) {
				ed.replaceContent(this.getHTML());
			},
	
			updateFromNode: function updateFromNode(node) {},
	
			updateDimensions: function updateDimensions(constrainBy, maxW, maxH) {
				var widthEl = this.find(':input[name=Width]'),
				    heightEl = this.find(':input[name=Height]'),
				    w = widthEl.val(),
				    h = heightEl.val(),
				    aspect;
	
				if (w && h) {
					if (constrainBy) {
						aspect = heightEl.getOrigVal() / widthEl.getOrigVal();
	
						if (constrainBy == 'Width') {
							if (maxW && w > maxW) w = maxW;
							h = Math.floor(w * aspect);
						} else if (constrainBy == 'Height') {
							if (maxH && h > maxH) h = maxH;
							w = Math.ceil(h / aspect);
						}
					} else {
						if (maxW && w > maxW) w = maxW;
						if (maxH && h > maxH) h = maxH;
					}
	
					widthEl.val(w);
					heightEl.val(h);
				}
			}
		});
	
		$('form.htmleditorfield-mediaform .ss-htmleditorfield-file.image').entwine({
			getAttributes: function getAttributes() {
				var width = this.find(':input[name=Width]').val(),
				    height = this.find(':input[name=Height]').val();
				return {
					'src': this.find(':input[name=URL]').val(),
					'alt': this.find(':input[name=AltText]').val(),
					'width': width ? parseInt(width, 10) : null,
					'height': height ? parseInt(height, 10) : null,
					'title': this.find(':input[name=Title]').val(),
					'class': this.find(':input[name=CSSClass]').val(),
					'data-id': this.find(':input[name=FileID]').val()
				};
			},
			getExtraData: function getExtraData() {
				return {
					'CaptionText': this.find(':input[name=CaptionText]').val()
				};
			},
			getHTML: function getHTML() {},
	
			insertHTML: function insertHTML(ed) {
				var form = this.closest('form');
				var node = form.getSelection();
				if (!ed) ed = form.getEditor();
	
				var attrs = this.getAttributes(),
				    extraData = this.getExtraData();
	
				var replacee = node && node.is('img') ? node : null;
				if (replacee && replacee.parent().is('.captionImage')) replacee = replacee.parent();
	
				var img = node && node.is('img') ? node : $('<img />');
				img.attr(attrs);
	
				var container = img.parent('.captionImage'),
				    caption = container.find('.caption');
	
				if (extraData.CaptionText) {
					if (!container.length) {
						container = $('<div></div>');
					}
	
					container.attr('class', 'captionImage ' + attrs['class']).css('width', attrs.width);
	
					if (!caption.length) {
						caption = $('<p class="caption"></p>').appendTo(container);
					}
	
					caption.attr('class', 'caption ' + attrs['class']).text(extraData.CaptionText);
				} else {
						container = caption = null;
					}
	
				var replacer = container ? container : img;
	
				if (replacee && replacee.not(replacer).length) {
					replacee.replaceWith(replacer);
				}
	
				if (container) {
					container.prepend(img);
				}
	
				if (!replacee) {
					ed.repaint();
					ed.insertContent($('<div />').append(replacer).html(), { skip_undo: 1 });
				}
	
				ed.addUndo();
				ed.repaint();
			},
			updateFromNode: function updateFromNode(node) {
				this.find(':input[name=AltText]').val(node.attr('alt'));
				this.find(':input[name=Title]').val(node.attr('title'));
				this.find(':input[name=CSSClass]').val(node.attr('class'));
				this.find(':input[name=Width]').val(node.width());
				this.find(':input[name=Height]').val(node.height());
				this.find(':input[name=CaptionText]').val(node.siblings('.caption:first').text());
				this.find(':input[name=FileID]').val(node.data('id'));
			}
		});
	
		$('form.htmleditorfield-mediaform .ss-htmleditorfield-file.flash').entwine({
			getAttributes: function getAttributes() {
				var width = this.find(':input[name=Width]').val(),
				    height = this.find(':input[name=Height]').val();
				return {
					'src': this.find(':input[name=URL]').val(),
					'width': width ? parseInt(width, 10) : null,
					'height': height ? parseInt(height, 10) : null,
					'data-fileid': this.find(':input[name=FileID]').val()
				};
			},
			getHTML: function getHTML() {
				var attrs = this.getAttributes();
	
				var el = tinyMCE.activeEditor.plugins.media.dataToImg({
					'type': 'flash',
					'width': attrs.width,
					'height': attrs.height,
					'params': { 'src': attrs.src },
					'video': { 'sources': [] }
				});
	
				return $('<div />').append(el).html();
			},
			updateFromNode: function updateFromNode(node) {}
		});
	
		$('form.htmleditorfield-mediaform .ss-htmleditorfield-file.embed').entwine({
			getAttributes: function getAttributes() {
				var width = this.find(':input[name=Width]').val(),
				    height = this.find(':input[name=Height]').val();
				return {
					'src': this.find('.thumbnail-preview').attr('src'),
					'width': width ? parseInt(width, 10) : null,
					'height': height ? parseInt(height, 10) : null,
					'class': this.find(':input[name=CSSClass]').val(),
					'alt': this.find(':input[name=AltText]').val(),
					'title': this.find(':input[name=Title]').val(),
					'data-fileid': this.find(':input[name=FileID]').val()
				};
			},
			getExtraData: function getExtraData() {
				var width = this.find(':input[name=Width]').val(),
				    height = this.find(':input[name=Height]').val();
				return {
					'CaptionText': this.find(':input[name=CaptionText]').val(),
					'Url': this.find(':input[name=URL]').val(),
					'thumbnail': this.find('.thumbnail-preview').attr('src'),
					'width': width ? parseInt(width, 10) : null,
					'height': height ? parseInt(height, 10) : null,
					'cssclass': this.find(':input[name=CSSClass]').val()
				};
			},
			getHTML: function getHTML() {
				var el,
				    attrs = this.getAttributes(),
				    extraData = this.getExtraData(),
				    imgEl = $('<img />').attr(attrs).addClass('ss-htmleditorfield-file embed');
	
				$.each(extraData, function (key, value) {
					imgEl.attr('data-' + key, value);
				});
	
				if (extraData.CaptionText) {
					el = $('<div style="width: ' + attrs['width'] + 'px;" class="captionImage ' + attrs['class'] + '"><p class="caption">' + extraData.CaptionText + '</p></div>').prepend(imgEl);
				} else {
					el = imgEl;
				}
				return $('<div />').append(el).html();
			},
			updateFromNode: function updateFromNode(node) {
				this.find(':input[name=AltText]').val(node.attr('alt'));
				this.find(':input[name=Title]').val(node.attr('title'));
				this.find(':input[name=Width]').val(node.width());
				this.find(':input[name=Height]').val(node.height());
				this.find(':input[name=Title]').val(node.attr('title'));
				this.find(':input[name=CSSClass]').val(node.data('cssclass'));
				this.find(':input[name=FileID]').val(node.data('fileid'));
			}
		});
	
		$('form.htmleditorfield-mediaform .ss-htmleditorfield-file .dimensions :input').entwine({
			OrigVal: null,
			onmatch: function onmatch() {
				this._super();
	
				this.setOrigVal(parseInt(this.val(), 10));
			},
			onunmatch: function onunmatch() {
				this._super();
			},
			onfocusout: function onfocusout(e) {
				this.closest('.ss-htmleditorfield-file').updateDimensions(this.attr('name'));
			}
		});
	
		$('form.htmleditorfield-mediaform .ss-uploadfield-item .ss-uploadfield-item-cancel').entwine({
			onclick: function onclick(e) {
				var form = this.closest('form'),
				    file = this.closest('ss-uploadfield-item');
				form.find('.ss-gridfield-item[data-id=' + file.data('id') + ']').removeClass('ui-selected');
				this.closest('.ss-uploadfield-item').remove();
				form.redraw();
				e.preventDefault();
			}
		});
	
		$('div.ss-assetuploadfield .ss-uploadfield-item-edit, div.ss-assetuploadfield .ss-uploadfield-item-name').entwine({
			getEditForm: function getEditForm() {
				return this.closest('.ss-uploadfield-item').find('.ss-uploadfield-item-editform');
			},
	
			fromEditForm: {
				onchange: function onchange(e) {
					var form = $(e.target);
					form.removeClass('edited');
					form.addClass('edited');
				}
			},
	
			onclick: function onclick(e) {
				var editForm = this.getEditForm();
	
				if (this.closest('.ss-uploadfield-item').hasClass('ss-htmleditorfield-file')) {
					editForm.parent('ss-uploadfield-item').removeClass('ui-state-warning');
	
					editForm.toggleEditForm();
	
					e.preventDefault();
	
					return false;
				}
	
				this._super(e);
			}
		});
	
		$('div.ss-assetuploadfield .ss-uploadfield-item-editform').entwine({
			toggleEditForm: function toggleEditForm(bool) {
				var itemInfo = this.prev('.ss-uploadfield-item-info'),
				    status = itemInfo.find('.ss-uploadfield-item-status');
				var text = "";
	
				if (bool === true || bool !== false && this.height() === 0) {
					text = _i18n2.default._t('UploadField.Editing', "Editing ...");
					this.height('auto');
					itemInfo.find('.toggle-details-icon').addClass('opened');
					status.removeClass('ui-state-success-text').removeClass('ui-state-warning-text');
				} else {
					this.height(0);
					itemInfo.find('.toggle-details-icon').removeClass('opened');
					if (!this.hasClass('edited')) {
						text = _i18n2.default._t('UploadField.NOCHANGES', 'No Changes');
						status.addClass('ui-state-success-text');
					} else {
						text = _i18n2.default._t('UploadField.CHANGESSAVED', 'Changes Made');
						this.removeClass('edited');
						status.addClass('ui-state-success-text');
					}
				}
				status.attr('title', text).text(text);
			}
		});
	
		$('form.htmleditorfield-mediaform .field[id$="ParentID_Holder"] .TreeDropdownField').entwine({
			onadd: function onadd() {
				this._super();
	
				var self = this;
				this.bind('change', function () {
					var fileList = self.closest('form').find('.grid-field');
					fileList.setState('ParentID', self.getValue());
					fileList.reload();
				});
			}
		});
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(87);
	__webpack_require__(122);
	__webpack_require__(118);
	
	_jQuery2.default.entwine('ss', function ($) {
		$('.ss-tabset').entwine({
			IgnoreTabState: false,
	
			onadd: function onadd() {
				var hash = window.location.hash;
	
				this.redrawTabs();
	
				if (hash !== '') {
					this.openTabFromURL(hash);
				}
	
				this._super();
			},
	
			onremove: function onremove() {
				if (this.data('tabs')) this.tabs('destroy');
				this._super();
			},
	
			redrawTabs: function redrawTabs() {
				this.rewriteHashlinks();
				this.tabs();
			},
	
			openTabFromURL: function openTabFromURL(hash) {
				var $trigger;
	
				$.each(this.find('.ui-tabs-anchor'), function () {
					if (this.href.indexOf(hash) !== -1 && $(hash).length === 1) {
						$trigger = $(this);
						return false;
					}
				});
	
				if ($trigger === void 0) {
					return;
				}
	
				$(document).ready('ajaxComplete', function () {
					$trigger.click();
				});
			},
	
			rewriteHashlinks: function rewriteHashlinks() {
				$(this).find('ul a').each(function () {
					if (!$(this).attr('href')) return;
	
					var matches = $(this).attr('href').match(/#.*/);
					if (!matches) return;
					$(this).attr('href', document.location.href.replace(/#.*/, '') + matches[0]);
				});
			}
		});
	
		$('.ui-tabs-active .ui-tabs-anchor').entwine({
			onmatch: function onmatch() {
				this.addClass('nav-link active');
			},
			onunmatch: function onunmatch() {
				this.removeClass('active');
			}
		});
	});

/***/ },
/* 122 */,
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	var _i18n = __webpack_require__(94);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(87);
	__webpack_require__(118);
	
	_jQuery2.default.entwine('ss', function ($) {
		$('.grid-field').entwine({
	
			reload: function reload(ajaxOpts, successCallback) {
				var self = this,
				    form = this.closest('form'),
				    focusedElName = this.find(':input:focus').attr('name'),
				    data = form.find(':input').serializeArray();
	
				if (!ajaxOpts) ajaxOpts = {};
				if (!ajaxOpts.data) ajaxOpts.data = [];
				ajaxOpts.data = ajaxOpts.data.concat(data);
	
				if (window.location.search) {
					ajaxOpts.data = window.location.search.replace(/^\?/, '') + '&' + $.param(ajaxOpts.data);
				}
	
				form.addClass('loading');
	
				$.ajax($.extend({}, {
					headers: { "X-Pjax": 'CurrentField' },
					type: "POST",
					url: this.data('url'),
					dataType: 'html',
					success: function success(data) {
						self.empty().append($(data).children());
	
						if (focusedElName) self.find(':input[name="' + focusedElName + '"]').focus();
	
						if (self.find('.filter-header').length) {
							var content;
							if (ajaxOpts.data[0].filter == "show") {
								content = '<span class="non-sortable"></span>';
								self.addClass('show-filter').find('.filter-header').show();
							} else {
								content = '<button type="button" name="showFilter" class="btn font-icon-search btn--no-text btn--icon-large grid-field__filter-open ss-gridfield-button-filter trigger"></button>';
								self.removeClass('show-filter').find('.filter-header').hide();
							}
	
							self.find('.sortable-header th:last').html(content);
						}
	
						form.removeClass('loading');
						if (successCallback) successCallback.apply(this, arguments);
						self.trigger('reload', self);
					},
					error: function error(e) {
						alert(_i18n2.default._t('GRIDFIELD.ERRORINTRANSACTION'));
						form.removeClass('loading');
					}
				}, ajaxOpts));
			},
			showDetailView: function showDetailView(url) {
				window.location.href = url;
			},
			getItems: function getItems() {
				return this.find('.ss-gridfield-item');
			},
	
			setState: function setState(k, v) {
				var state = this.getState();
				state[k] = v;
				this.find(':input[name="' + this.data('name') + '[GridState]"]').val(JSON.stringify(state));
			},
	
			getState: function getState() {
				return JSON.parse(this.find(':input[name="' + this.data('name') + '[GridState]"]').val());
			}
		});
	
		$('.grid-field *').entwine({
			getGridField: function getGridField() {
				return this.closest('.grid-field');
			}
		});
	
		$('.grid-field :button[name=showFilter]').entwine({
			onclick: function onclick(e) {
				$('.filter-header').show('slow').find(':input:first').focus();
				this.closest('.grid-field').addClass('show-filter');
				this.parent().html('<span class="non-sortable"></span>');
				e.preventDefault();
			}
		});
	
		$('.grid-field .ss-gridfield-item').entwine({
			onclick: function onclick(e) {
				if ($(e.target).closest('.action').length) {
					this._super(e);
					return false;
				}
	
				var editLink = this.find('.edit-link');
				if (editLink.length) this.getGridField().showDetailView(editLink.prop('href'));
			},
			onmouseover: function onmouseover() {
				if (this.find('.edit-link').length) this.css('cursor', 'pointer');
			},
			onmouseout: function onmouseout() {
				this.css('cursor', 'default');
			}
		});
	
		$('.grid-field .action:button').entwine({
			onclick: function onclick(e) {
				var filterState = 'show';
				if (this.button('option', 'disabled')) {
					e.preventDefault();
					return;
				}
	
				if (this.hasClass('ss-gridfield-button-close') || !this.closest('.grid-field').hasClass('show-filter')) {
					filterState = 'hidden';
				}
	
				this.getGridField().reload({ data: [{ name: this.attr('name'), value: this.val(), filter: filterState }] });
				e.preventDefault();
			},
	
			actionurl: function actionurl() {
				var btn = this.closest(':button'),
				    grid = this.getGridField(),
				    form = this.closest('form'),
				    data = form.find(':input.gridstate').serialize(),
				    csrf = form.find('input[name="SecurityID"]').val();
	
				data += "&" + encodeURIComponent(btn.attr('name')) + '=' + encodeURIComponent(btn.val());
	
				if (csrf) {
					data += "&SecurityID=" + encodeURIComponent(csrf);
				}
	
				if (window.location.search) {
					data = window.location.search.replace(/^\?/, '') + '&' + data;
				}
	
				var connector = grid.data('url').indexOf('?') == -1 ? '?' : '&';
	
				return $.path.makeUrlAbsolute(grid.data('url') + connector + data, $('base').attr('href'));
			}
	
		});
	
		$('.grid-field .add-existing-autocompleter').entwine({
			onbuttoncreate: function onbuttoncreate() {
				var self = this;
	
				this.toggleDisabled();
	
				this.find('input[type="text"]').on('keyup', function () {
					self.toggleDisabled();
				});
			},
			onunmatch: function onunmatch() {
				this.find('input[type="text"]').off('keyup');
			},
			toggleDisabled: function toggleDisabled() {
				var $button = this.find('.ss-ui-button'),
				    $input = this.find('input[type="text"]'),
				    inputHasValue = $input.val() !== '',
				    buttonDisabled = $button.is(':disabled');
	
				if (inputHasValue && buttonDisabled || !inputHasValue && !buttonDisabled) {
					$button.button("option", "disabled", !buttonDisabled);
				}
			}
		});
	
		$('.grid-field .grid-field__col-compact .action.gridfield-button-delete, .cms-edit-form .btn-toolbar button.action.action-delete').entwine({
			onclick: function onclick(e) {
				if (!confirm(_i18n2.default._t('TABLEFIELD.DELETECONFIRMMESSAGE'))) {
					e.preventDefault();
					return false;
				} else {
					this._super(e);
				}
			}
		});
	
		$('.grid-field .action.gridfield-button-print').entwine({
			UUID: null,
			onmatch: function onmatch() {
				this._super();
				this.setUUID(new Date().getTime());
			},
			onunmatch: function onunmatch() {
				this._super();
			},
			onclick: function onclick(e) {
				var url = this.actionurl();
				window.open(url);
				e.preventDefault();
				return false;
			}
		});
	
		$('.ss-gridfield-print-iframe').entwine({
			onmatch: function onmatch() {
				this._super();
	
				this.hide().bind('load', function () {
					this.focus();
					var ifWin = this.contentWindow || this;
					ifWin.print();
				});
			},
			onunmatch: function onunmatch() {
				this._super();
			}
		});
	
		$('.grid-field .action.no-ajax').entwine({
			onclick: function onclick(e) {
				window.location.href = this.actionurl();
				e.preventDefault();
				return false;
			}
		});
	
		$('.grid-field .action-detail').entwine({
			onclick: function onclick() {
				this.getGridField().showDetailView($(this).prop('href'));
				return false;
			}
		});
	
		$('.grid-field[data-selectable]').entwine({
			getSelectedItems: function getSelectedItems() {
				return this.find('.ss-gridfield-item.ui-selected');
			},
	
			getSelectedIDs: function getSelectedIDs() {
				return $.map(this.getSelectedItems(), function (el) {
					return $(el).data('id');
				});
			}
		});
		$('.grid-field[data-selectable] .ss-gridfield-items').entwine({
			onadd: function onadd() {
				this._super();
	
				this.selectable();
			},
			onremove: function onremove() {
				this._super();
				if (this.data('selectable')) this.selectable('destroy');
			}
		});
	
		$('.grid-field .filter-header :input').entwine({
			onmatch: function onmatch() {
				var filterbtn = this.closest('.extra').find('.ss-gridfield-button-filter'),
				    resetbtn = this.closest('.extra').find('.ss-gridfield-button-reset');
	
				if (this.val()) {
					filterbtn.addClass('filtered');
					resetbtn.addClass('filtered');
				}
				this._super();
			},
			onunmatch: function onunmatch() {
				this._super();
			},
			onkeydown: function onkeydown(e) {
				if (this.closest('.ss-gridfield-button-reset').length) return;
	
				var filterbtn = this.closest('.extra').find('.ss-gridfield-button-filter'),
				    resetbtn = this.closest('.extra').find('.ss-gridfield-button-reset');
	
				if (e.keyCode == '13') {
					var btns = this.closest('.filter-header').find('.ss-gridfield-button-filter');
					var filterState = 'show';
					if (this.hasClass('ss-gridfield-button-close') || !this.closest('.grid-field').hasClass('show-filter')) {
						filterState = 'hidden';
					}
	
					this.getGridField().reload({ data: [{ name: btns.attr('name'), value: btns.val(), filter: filterState }] });
					return false;
				} else {
					filterbtn.addClass('hover-alike');
					resetbtn.addClass('hover-alike');
				}
			}
		});
	
		$(".grid-field .relation-search").entwine({
			onfocusin: function onfocusin(event) {
				this.autocomplete({
					source: function source(request, response) {
						var searchField = $(this.element);
						var form = $(this.element).closest("form");
						$.ajax({
							headers: {
								"X-Pjax": 'Partial'
							},
							dataType: 'json',
							type: "GET",
							url: $(searchField).data('searchUrl'),
							data: encodeURIComponent(searchField.attr('name')) + '=' + encodeURIComponent(searchField.val()),
							success: response,
							error: function error(e) {
								alert(_i18n2.default._t('GRIDFIELD.ERRORINTRANSACTION', 'An error occured while fetching data from the server\n Please try again later.'));
							}
						});
					},
					select: function select(event, ui) {
						var hiddenField = $('<input type="hidden" name="relationID" class="action_gridfield_relationfind" />');
						hiddenField.val(ui.item.id);
						$(this).closest(".grid-field").find(".action_gridfield_relationfind").replaceWith(hiddenField);
						var addbutton = $(this).closest(".grid-field").find(".action_gridfield_relationadd");
						if (addbutton.data('button')) {
							addbutton.button('enable');
						} else {
							addbutton.removeAttr('disabled');
						}
					}
				});
			}
		});
	
		$(".grid-field .pagination-page-number input").entwine({
			onkeydown: function onkeydown(event) {
				if (event.keyCode == 13) {
					var newpage = parseInt($(this).val(), 10);
	
					var gridfield = $(this).getGridField();
					gridfield.setState('GridFieldPaginator', { currentPage: newpage });
					gridfield.reload();
	
					return false;
				}
			}
		});
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _BootRoutes = __webpack_require__(125);
	
	var _BootRoutes2 = _interopRequireDefault(_BootRoutes);
	
	var _redux = __webpack_require__(28);
	
	var _reduxThunk = __webpack_require__(346);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _Config = __webpack_require__(69);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	var _ReducerRegister = __webpack_require__(347);
	
	var _ReducerRegister2 = _interopRequireDefault(_ReducerRegister);
	
	var _ConfigActions = __webpack_require__(348);
	
	var configActions = _interopRequireWildcard(_ConfigActions);
	
	var _ConfigReducer = __webpack_require__(350);
	
	var _ConfigReducer2 = _interopRequireDefault(_ConfigReducer);
	
	var _FormReducer = __webpack_require__(352);
	
	var _FormReducer2 = _interopRequireDefault(_FormReducer);
	
	var _SchemaReducer = __webpack_require__(353);
	
	var _SchemaReducer2 = _interopRequireDefault(_SchemaReducer);
	
	var _RecordsReducer = __webpack_require__(354);
	
	var _RecordsReducer2 = _interopRequireDefault(_RecordsReducer);
	
	var _CampaignReducer = __webpack_require__(355);
	
	var _CampaignReducer2 = _interopRequireDefault(_CampaignReducer);
	
	var _BreadcrumbsReducer = __webpack_require__(357);
	
	var _BreadcrumbsReducer2 = _interopRequireDefault(_BreadcrumbsReducer);
	
	var _reactRouterRedux = __webpack_require__(358);
	
	var _BootInjector = __webpack_require__(359);
	
	var _BootInjector2 = _interopRequireDefault(_BootInjector);
	
	var _controller = __webpack_require__(375);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function appBoot() {
	  _ReducerRegister2.default.add('config', _ConfigReducer2.default);
	  _ReducerRegister2.default.add('form', _FormReducer2.default);
	  _ReducerRegister2.default.add('schemas', _SchemaReducer2.default);
	  _ReducerRegister2.default.add('records', _RecordsReducer2.default);
	  _ReducerRegister2.default.add('campaign', _CampaignReducer2.default);
	  _ReducerRegister2.default.add('breadcrumbs', _BreadcrumbsReducer2.default);
	  _ReducerRegister2.default.add('routing', _reactRouterRedux.routerReducer);
	
	  _BootInjector2.default.start();
	
	  var initialState = {};
	  var rootReducer = (0, _redux.combineReducers)(_ReducerRegister2.default.getAll());
	  var middleware = [_reduxThunk2.default];
	
	  var env = _Config2.default.get('environment');
	  var debugging = _Config2.default.get('debugging');
	  var runMiddleware = _redux.applyMiddleware.apply(undefined, middleware);
	  var devTools = window.devToolsExtension;
	
	  if (env === 'dev' && debugging && typeof devTools === 'function') {
	    runMiddleware = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), devTools());
	  }
	
	  var createStoreWithMiddleware = runMiddleware(_redux.createStore);
	  var store = createStoreWithMiddleware(rootReducer, initialState);
	
	  store.dispatch(configActions.setConfig(_Config2.default.getAll()));
	
	  window.ss = window.ss || {};
	  window.ss.store = store;
	
	  var routes = new _BootRoutes2.default(store);
	  routes.start(window.location.pathname);
	}
	
	window.onload = appBoot;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jQuery = __webpack_require__(1);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(102);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(27);
	
	var _reactRouter = __webpack_require__(64);
	
	var _reactRelay = __webpack_require__(126);
	
	var _reactRelay2 = _interopRequireDefault(_reactRelay);
	
	var _reactRouterRelay = __webpack_require__(127);
	
	var _reactRouterRelay2 = _interopRequireDefault(_reactRouterRelay);
	
	var _createBrowserHistory = __webpack_require__(326);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _Config = __webpack_require__(69);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	var _Router = __webpack_require__(343);
	
	var _Router2 = _interopRequireDefault(_Router);
	
	var _ReactRouteRegister = __webpack_require__(344);
	
	var _ReactRouteRegister2 = _interopRequireDefault(_ReactRouteRegister);
	
	var _App = __webpack_require__(345);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BootRoutes = function () {
	  function BootRoutes(store, client) {
	    _classCallCheck(this, BootRoutes);
	
	    this.store = store;
	    this.client = client;
	
	    var base = _Config2.default.get('absoluteBaseUrl');
	    _Router2.default.setAbsoluteBase(base);
	  }
	
	  _createClass(BootRoutes, [{
	    key: 'start',
	    value: function start(location) {
	      if (this.matchesLegacyRoute(location)) {
	        this.initLegacyRouter();
	      } else {
	        this.initReactRouter();
	      }
	    }
	  }, {
	    key: 'matchesLegacyRoute',
	    value: function matchesLegacyRoute(location) {
	      var sections = _Config2.default.get('sections');
	      var currentPath = _Router2.default.resolveURLToBase(location).replace(/\/$/, '');
	
	      return !!Object.keys(sections).find(function (key) {
	        var section = sections[key];
	        var route = _Router2.default.resolveURLToBase(section.url).replace(/\/$/, '');
	
	        if (section.reactRouter) {
	          return false;
	        }
	
	        return currentPath.match(route);
	      });
	    }
	  }, {
	    key: 'initReactRouter',
	    value: function initReactRouter() {
	      _ReactRouteRegister2.default.updateRootRoute({
	        component: _App2.default
	      });
	      var history = (0, _reactRouter.useRouterHistory)(_createBrowserHistory2.default)({
	        basename: _Config2.default.get('baseUrl')
	      });
	
	      _reactRelay2.default.injectNetworkLayer(new _reactRelay2.default.DefaultNetworkLayer('http://localhost/master/graphql'));
	      _reactDom2.default.render(_react2.default.createElement(
	        _reactRedux.Provider,
	        { store: this.store },
	        _react2.default.createElement(_reactRouter.Router, {
	          history: history,
	          routes: _ReactRouteRegister2.default.getRootRoute(),
	          render: (0, _reactRouter.applyRouterMiddleware)(_reactRouterRelay2.default),
	          environment: _reactRelay2.default.Store
	        }),
	        ','
	      ), document.getElementsByClassName('cms-content')[0]);
	    }
	  }, {
	    key: 'initLegacyRouter',
	    value: function initLegacyRouter() {
	      var sections = _Config2.default.get('sections');
	      var store = this.store;
	
	      (0, _Router2.default)('*', function (ctx, next) {
	        ctx.store = store;
	        next();
	      });
	
	      var lastPath = null;
	      Object.keys(sections).forEach(function (key) {
	        var route = _Router2.default.resolveURLToBase(sections[key].url);
	        route = route.replace(/\/$/, '');
	        route = route + '(/*?)?';
	        (0, _Router2.default)(route, function (ctx, next) {
	          if (document.readyState !== 'complete' || ctx.init) {
	            next();
	            return;
	          }
	
	          if (!lastPath) {
	            lastPath = window.location.pathname;
	          }
	
	          var forceReload = ctx.data && ctx.data.__forceReload;
	          if (ctx.path !== lastPath || forceReload) {
	            lastPath = ctx.path.replace(/#.*$/, '');
	            (0, _jQuery2.default)('.cms-container').entwine('ss').handleStateChange(null, ctx.state);
	          }
	        });
	      });
	
	      _Router2.default.start();
	    }
	  }]);
	
	  return BootRoutes;
	}();
	
	exports.default = BootRoutes;

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = ReactRelay;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RelayRouterContext = __webpack_require__(128);
	
	var _RelayRouterContext2 = _interopRequireDefault(_RelayRouterContext);
	
	var _RouteContainer = __webpack_require__(323);
	
	var _RouteContainer2 = _interopRequireDefault(_RouteContainer);
	
	var _getRouteQueries = __webpack_require__(318);
	
	var _getRouteQueries2 = _interopRequireDefault(_getRouteQueries);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  renderRouterContext: function renderRouterContext(child, props) {
	    return _react2.default.createElement(
	      _RelayRouterContext2.default,
	      props,
	      child
	    );
	  },
	
	  renderRouteComponent: function renderRouteComponent(child, props) {
	    /* eslint-disable react/prop-types */
	    var key = props.key;
	    var route = props.route;
	    /* eslint-enable react/prop-types */
	
	    var routeQueries = (0, _getRouteQueries2.default)(route, props);
	    var queries = key ? routeQueries && routeQueries[key] : routeQueries;
	    if (!queries) {
	      return child;
	    }
	
	    return _react2.default.createElement(
	      _RouteContainer2.default,
	      { queries: queries, routerProps: props },
	      child
	    );
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(129);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(167);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(168);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(204);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRelay = __webpack_require__(126);
	
	var _reactRelay2 = _interopRequireDefault(_reactRelay);
	
	var _QueryAggregator = __webpack_require__(212);
	
	var _QueryAggregator2 = _interopRequireDefault(_QueryAggregator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RelayRouterContext = function (_React$Component) {
	  (0, _inherits3.default)(RelayRouterContext, _React$Component);
	
	  function RelayRouterContext(props, context) {
	    (0, _classCallCheck3.default)(this, RelayRouterContext);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context));
	
	    _this.renderCallback = function (renderArgs) {
	      _this.queryAggregator.setRenderArgs(renderArgs);
	      return _this.props.children;
	    };
	
	    _this.queryAggregator = new _QueryAggregator2.default(props);
	    return _this;
	  }
	
	  RelayRouterContext.prototype.getChildContext = function getChildContext() {
	    return {
	      queryAggregator: this.queryAggregator
	    };
	  };
	
	  RelayRouterContext.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps.location === this.props.location) {
	      return;
	    }
	
	    this.queryAggregator.updateQueryConfig(nextProps);
	  };
	
	  RelayRouterContext.prototype.render = function render() {
	    return _react2.default.createElement(_reactRelay2.default.Renderer, (0, _extends3.default)({}, this.props, {
	      Container: this.queryAggregator,
	      render: this.renderCallback,
	      queryConfig: this.queryAggregator.queryConfig
	    }));
	  };
	
	  return RelayRouterContext;
	}(_react2.default.Component);
	
	RelayRouterContext.propTypes = {
	  location: _react2.default.PropTypes.object.isRequired,
	  children: _react2.default.PropTypes.element.isRequired
	};
	RelayRouterContext.childContextTypes = {
	  queryAggregator: _react2.default.PropTypes.object.isRequired
	};
	exports.default = RelayRouterContext;
	module.exports = exports['default'];

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(130);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(131), __esModule: true };

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(132);
	module.exports = __webpack_require__(135).Object.assign;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(133);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(148)});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(134)
	  , core      = __webpack_require__(135)
	  , ctx       = __webpack_require__(136)
	  , hide      = __webpack_require__(138)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 134 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 135 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(137);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(139)
	  , createDesc = __webpack_require__(147);
	module.exports = __webpack_require__(143) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(140)
	  , IE8_DOM_DEFINE = __webpack_require__(142)
	  , toPrimitive    = __webpack_require__(146)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(143) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(141);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(143) && !__webpack_require__(144)(function(){
	  return Object.defineProperty(__webpack_require__(145)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(144)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(141)
	  , document = __webpack_require__(134).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(141);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(149)
	  , gOPS     = __webpack_require__(164)
	  , pIE      = __webpack_require__(165)
	  , toObject = __webpack_require__(166)
	  , IObject  = __webpack_require__(153)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(144)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(150)
	  , enumBugKeys = __webpack_require__(163);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(151)
	  , toIObject    = __webpack_require__(152)
	  , arrayIndexOf = __webpack_require__(156)(false)
	  , IE_PROTO     = __webpack_require__(160)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 151 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(153)
	  , defined = __webpack_require__(155);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(154);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 154 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 155 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(152)
	  , toLength  = __webpack_require__(157)
	  , toIndex   = __webpack_require__(159);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(158)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 158 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(158)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(161)('keys')
	  , uid    = __webpack_require__(162);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(134)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 162 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 163 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 164 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 165 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(155);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 167 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(169);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(170);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(190);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(171), __esModule: true };

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(172);
	__webpack_require__(185);
	module.exports = __webpack_require__(189).f('iterator');

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(173)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(174)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(158)
	  , defined   = __webpack_require__(155);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(175)
	  , $export        = __webpack_require__(133)
	  , redefine       = __webpack_require__(176)
	  , hide           = __webpack_require__(138)
	  , has            = __webpack_require__(151)
	  , Iterators      = __webpack_require__(177)
	  , $iterCreate    = __webpack_require__(178)
	  , setToStringTag = __webpack_require__(182)
	  , getPrototypeOf = __webpack_require__(184)
	  , ITERATOR       = __webpack_require__(183)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(138);

/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(179)
	  , descriptor     = __webpack_require__(147)
	  , setToStringTag = __webpack_require__(182)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(138)(IteratorPrototype, __webpack_require__(183)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(140)
	  , dPs         = __webpack_require__(180)
	  , enumBugKeys = __webpack_require__(163)
	  , IE_PROTO    = __webpack_require__(160)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(145)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(181).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(139)
	  , anObject = __webpack_require__(140)
	  , getKeys  = __webpack_require__(149);
	
	module.exports = __webpack_require__(143) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(134).document && document.documentElement;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(139).f
	  , has = __webpack_require__(151)
	  , TAG = __webpack_require__(183)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(161)('wks')
	  , uid        = __webpack_require__(162)
	  , Symbol     = __webpack_require__(134).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(151)
	  , toObject    = __webpack_require__(166)
	  , IE_PROTO    = __webpack_require__(160)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(186);
	var global        = __webpack_require__(134)
	  , hide          = __webpack_require__(138)
	  , Iterators     = __webpack_require__(177)
	  , TO_STRING_TAG = __webpack_require__(183)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(187)
	  , step             = __webpack_require__(188)
	  , Iterators        = __webpack_require__(177)
	  , toIObject        = __webpack_require__(152);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(174)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 188 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(183);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(191), __esModule: true };

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(192);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	module.exports = __webpack_require__(135).Symbol;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(134)
	  , has            = __webpack_require__(151)
	  , DESCRIPTORS    = __webpack_require__(143)
	  , $export        = __webpack_require__(133)
	  , redefine       = __webpack_require__(176)
	  , META           = __webpack_require__(193).KEY
	  , $fails         = __webpack_require__(144)
	  , shared         = __webpack_require__(161)
	  , setToStringTag = __webpack_require__(182)
	  , uid            = __webpack_require__(162)
	  , wks            = __webpack_require__(183)
	  , wksExt         = __webpack_require__(189)
	  , wksDefine      = __webpack_require__(194)
	  , keyOf          = __webpack_require__(195)
	  , enumKeys       = __webpack_require__(196)
	  , isArray        = __webpack_require__(197)
	  , anObject       = __webpack_require__(140)
	  , toIObject      = __webpack_require__(152)
	  , toPrimitive    = __webpack_require__(146)
	  , createDesc     = __webpack_require__(147)
	  , _create        = __webpack_require__(179)
	  , gOPNExt        = __webpack_require__(198)
	  , $GOPD          = __webpack_require__(200)
	  , $DP            = __webpack_require__(139)
	  , $keys          = __webpack_require__(149)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(199).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(165).f  = $propertyIsEnumerable;
	  __webpack_require__(164).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(175)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(138)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(162)('meta')
	  , isObject = __webpack_require__(141)
	  , has      = __webpack_require__(151)
	  , setDesc  = __webpack_require__(139).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(144)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(134)
	  , core           = __webpack_require__(135)
	  , LIBRARY        = __webpack_require__(175)
	  , wksExt         = __webpack_require__(189)
	  , defineProperty = __webpack_require__(139).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(149)
	  , toIObject = __webpack_require__(152);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(149)
	  , gOPS    = __webpack_require__(164)
	  , pIE     = __webpack_require__(165);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(154);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(152)
	  , gOPN      = __webpack_require__(199).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(150)
	  , hiddenKeys = __webpack_require__(163).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(165)
	  , createDesc     = __webpack_require__(147)
	  , toIObject      = __webpack_require__(152)
	  , toPrimitive    = __webpack_require__(146)
	  , has            = __webpack_require__(151)
	  , IE8_DOM_DEFINE = __webpack_require__(142)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(143) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 201 */
/***/ function(module, exports) {



/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(194)('asyncIterator');

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(194)('observable');

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(205);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(209);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(169);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(206), __esModule: true };

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(207);
	module.exports = __webpack_require__(135).Object.setPrototypeOf;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(133);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(208).set});

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(141)
	  , anObject = __webpack_require__(140);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(136)(Function.call, __webpack_require__(200).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(210), __esModule: true };

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(211);
	var $Object = __webpack_require__(135).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(133)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(179)});

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _getIterator2 = __webpack_require__(213);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _extends2 = __webpack_require__(129);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(218);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _keys = __webpack_require__(219);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(169);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _weakMap = __webpack_require__(223);
	
	var _weakMap2 = _interopRequireDefault(_weakMap);
	
	var _classCallCheck2 = __webpack_require__(167);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _invariant = __webpack_require__(236);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _isEqual = __webpack_require__(237);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _reactRelay = __webpack_require__(126);
	
	var _reactRelay2 = _interopRequireDefault(_reactRelay);
	
	var _getRouteQueries = __webpack_require__(318);
	
	var _getRouteQueries2 = _interopRequireDefault(_getRouteQueries);
	
	var _mergeRouteParams = __webpack_require__(319);
	
	var _mergeRouteParams2 = _interopRequireDefault(_mergeRouteParams);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_KEY = '_default';
	
	var QueryAggregator = function () {
	  function QueryAggregator(routerProps) {
	    (0, _classCallCheck3.default)(this, QueryAggregator);
	
	    // We need to use a map to track route indices instead of throwing them on
	    // the route itself with a Symbol to ensure that, when rendering on the
	    // server, each request generates route indices independently.
	    this.routeIndices = new _weakMap2.default();
	    this.lastRouteIndex = 0;
	
	    this.queryConfig = null;
	    this.fragmentSpecs = null;
	
	    this.props = {};
	    this.readyState = null;
	
	    this.updateQueryConfig(routerProps);
	  }
	
	  QueryAggregator.prototype.updateQueryConfig = function updateQueryConfig(routerProps) {
	    var _this = this;
	
	    var routes = routerProps.routes;
	    var components = routerProps.components;
	
	
	    var queryConfig = {
	      name: null,
	      queries: {},
	      params: {}
	    };
	    var fragmentSpecs = {};
	
	    routes.forEach(function (route, i) {
	      // We need to merge in the route params regardless of whether the route
	      // actually has queries, in case its children depend on its path params.
	      queryConfig.params = (0, _mergeRouteParams2.default)(queryConfig.params, route, routerProps);
	
	      var routeQueries = (0, _getRouteQueries2.default)(route, routerProps);
	      if (!routeQueries) {
	        return;
	      }
	
	      var routeComponent = components[i];
	
	      var componentMap = void 0;
	      var queryMap = void 0;
	      if ((typeof routeComponent === 'undefined' ? 'undefined' : (0, _typeof3.default)(routeComponent)) === 'object') {
	        componentMap = routeComponent;
	        queryMap = routeQueries;
	      } else {
	        var _componentMap, _queryMap;
	
	        componentMap = (_componentMap = {}, _componentMap[DEFAULT_KEY] = routeComponent, _componentMap);
	        queryMap = (_queryMap = {}, _queryMap[DEFAULT_KEY] = routeQueries, _queryMap);
	      }
	
	      (0, _keys2.default)(componentMap).forEach(function (key) {
	        var component = componentMap[key];
	        var queries = queryMap[key];
	
	        if (!queries) {
	          return;
	        }
	
	        // In principle not all container component routes have to specify
	        // queries, because some of them might somehow receive fragments from
	        // their parents, but it would definitely be wrong to specify queries
	        // for a component that isn't a container.
	        !_reactRelay2.default.isContainer(component) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'relay-router-relay: Route with queries specifies component `%s` ' + 'that is not a Relay container.', component && (component.displayName || component.name)) : (0, _invariant2.default)(false) : void 0;
	
	        (0, _keys2.default)(queries).forEach(function (queryName) {
	          var query = queries[queryName];
	          var uniqueQueryName = _this.getUniqueQueryName(route, key, queryName);
	
	          // Relay depends on the argument count of the query function, so try
	          // to preserve it as well as possible.
	          var wrappedQuery = void 0;
	          if (query.length === 0) {
	            // Relay doesn't like using the exact same query in multiple
	            // places, so wrap it to prevent that when sharing queries between
	            // routes.
	            wrappedQuery = function wrappedQuery() {
	              return query();
	            };
	          } else {
	            (function () {
	              // When not using the shorthand, we can control the injected
	              // params, so restrict them to just the ones for the current route
	              // and its ancestors.
	              var paramsForRoute = queryConfig.params;
	
	              // We need the query function to have > 0 arguments to hit the code
	              // path for non-shorthand queries.
	              /* eslint-disable no-unused-vars */
	              wrappedQuery = function wrappedQuery(_) {
	                return query(component, paramsForRoute);
	              };
	              /* eslint-enable */
	            })();
	          }
	
	          queryConfig.queries[uniqueQueryName] = wrappedQuery;
	          fragmentSpecs[uniqueQueryName] = { component: component, queryName: queryName };
	        });
	      });
	    });
	
	    queryConfig.name = ['_aggregated'].concat((0, _keys2.default)(queryConfig.queries)).join('_');
	
	    // RootContainer uses referential equality to check for route change, so
	    // replace the route object entirely.
	    this.queryConfig = queryConfig;
	    this.fragmentSpecs = fragmentSpecs;
	  };
	
	  QueryAggregator.prototype.getUniqueQueryName = function getUniqueQueryName(route, key, queryName) {
	    // There might be some edge case here where the query changes but the route
	    // object does not, in which case we'll keep using the old unique name.
	    // Anybody who does that deserves whatever they get, though.
	
	    // Prefer an explicit route name if specified.
	    if (route.name) {
	      // The slightly different template here ensures that we can't have
	      // collisions with the below template.
	      return '_' + route.name + '_' + key + '_' + queryName;
	    }
	
	    // Otherwise, use referential equality on the route name to generate a
	    // unique index.
	    var routeIndex = this.routeIndices.get(route);
	    if (routeIndex === undefined) {
	      routeIndex = ++this.lastRouteIndex;
	      this.routeIndices.set(route, routeIndex);
	    }
	
	    return '__route_' + routeIndex + '_' + key + '_' + queryName;
	  };
	
	  QueryAggregator.prototype.setRenderArgs = function setRenderArgs(_ref) {
	    var props = _ref.props;
	    var readyState = (0, _objectWithoutProperties3.default)(_ref, ['props']);
	
	    if (props) {
	      this.props = props;
	    }
	
	    this.readyState = readyState;
	  };
	
	  QueryAggregator.prototype.getRenderArgs = function getRenderArgs(route, key, queries, params) {
	    return (0, _extends3.default)({}, this.readyState, {
	      props: this.getProps(route, key, queries, params)
	    });
	  };
	
	  QueryAggregator.prototype.getProps = function getProps(route) {
	    var key = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_KEY : arguments[1];
	    var queries = arguments[2];
	    var params = arguments[3];
	
	    // Check that the subset of parameters used for this route match those used
	    // for the fetched data.
	    for (var _iterator = (0, _keys2.default)(params), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref2;
	
	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref2 = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref2 = _i.value;
	      }
	
	      var paramName = _ref2;
	
	      if (!(0, _isEqual2.default)(this.props[paramName], params[paramName])) {
	        return null;
	      }
	    }
	
	    var props = {};
	    for (var _iterator2 = (0, _keys2.default)(queries), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	      var _ref3;
	
	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref3 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref3 = _i2.value;
	      }
	
	      var queryName = _ref3;
	
	      var uniqueQueryName = this.getUniqueQueryName(route, key, queryName);
	
	      var value = this.props[uniqueQueryName];
	      if (!value) {
	        return null;
	      }
	
	      props[queryName] = value;
	    }
	
	    // Only return the props for the route if the query config params match and
	    // all requested props are available. Otherwise, by assumption, the ready
	    // state will have the correct "not ready" state.
	    return props;
	  };
	
	  // The below methods are required to satisfy the Relay container contract.
	
	  QueryAggregator.prototype.getFragmentNames = function getFragmentNames() {
	    return (0, _keys2.default)(this.fragmentSpecs);
	  };
	
	  QueryAggregator.prototype.getFragment = function getFragment(fragmentName, variableMapping) {
	    var _fragmentSpecs$fragme = this.fragmentSpecs[fragmentName];
	    var component = _fragmentSpecs$fragme.component;
	    var queryName = _fragmentSpecs$fragme.queryName;
	
	    return component.getFragment(queryName, variableMapping);
	  };
	
	  QueryAggregator.prototype.hasFragment = function hasFragment(fragmentName) {
	    return this.fragmentSpecs[fragmentName] !== undefined;
	  };
	
	  QueryAggregator.prototype.hasVariable = function hasVariable(variableName) {
	    // It doesn't matter what the component variables are. The only variables
	    // we're going to pass down are the ones defined from our route parameters.
	    return Object.prototype.hasOwnProperty.call(this.queryConfig.params, variableName);
	  };
	
	  return QueryAggregator;
	}();
	
	exports.default = QueryAggregator;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(214), __esModule: true };

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(185);
	__webpack_require__(172);
	module.exports = __webpack_require__(215);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(140)
	  , get      = __webpack_require__(216);
	module.exports = __webpack_require__(135).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(217)
	  , ITERATOR  = __webpack_require__(183)('iterator')
	  , Iterators = __webpack_require__(177);
	module.exports = __webpack_require__(135).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(154)
	  , TAG = __webpack_require__(183)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 218 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(220), __esModule: true };

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(221);
	module.exports = __webpack_require__(135).Object.keys;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(166)
	  , $keys    = __webpack_require__(149);
	
	__webpack_require__(222)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(133)
	  , core    = __webpack_require__(135)
	  , fails   = __webpack_require__(144);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(224), __esModule: true };

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(201);
	__webpack_require__(185);
	__webpack_require__(225);
	module.exports = __webpack_require__(135).WeakMap;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(226)(0)
	  , redefine     = __webpack_require__(176)
	  , meta         = __webpack_require__(193)
	  , assign       = __webpack_require__(148)
	  , weak         = __webpack_require__(229)
	  , isObject     = __webpack_require__(141)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(235)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(136)
	  , IObject  = __webpack_require__(153)
	  , toObject = __webpack_require__(166)
	  , toLength = __webpack_require__(157)
	  , asc      = __webpack_require__(227);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(228);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(141)
	  , isArray  = __webpack_require__(197)
	  , SPECIES  = __webpack_require__(183)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(230)
	  , getWeak           = __webpack_require__(193).getWeak
	  , anObject          = __webpack_require__(140)
	  , isObject          = __webpack_require__(141)
	  , anInstance        = __webpack_require__(231)
	  , forOf             = __webpack_require__(232)
	  , createArrayMethod = __webpack_require__(226)
	  , $has              = __webpack_require__(151)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(138);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 231 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(136)
	  , call        = __webpack_require__(233)
	  , isArrayIter = __webpack_require__(234)
	  , anObject    = __webpack_require__(140)
	  , toLength    = __webpack_require__(157)
	  , getIterFn   = __webpack_require__(216)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(140);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(177)
	  , ITERATOR   = __webpack_require__(183)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(134)
	  , $export        = __webpack_require__(133)
	  , meta           = __webpack_require__(193)
	  , fails          = __webpack_require__(144)
	  , hide           = __webpack_require__(138)
	  , redefineAll    = __webpack_require__(230)
	  , forOf          = __webpack_require__(232)
	  , anInstance     = __webpack_require__(231)
	  , isObject       = __webpack_require__(141)
	  , setToStringTag = __webpack_require__(182)
	  , dP             = __webpack_require__(139).f
	  , each           = __webpack_require__(226)(0)
	  , DESCRIPTORS    = __webpack_require__(143);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(238);
	
	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are **not** supported.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}
	
	module.exports = isEqual;


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(239),
	    isObject = __webpack_require__(258),
	    isObjectLike = __webpack_require__(297);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(240),
	    equalArrays = __webpack_require__(280),
	    equalByTag = __webpack_require__(286),
	    equalObjects = __webpack_require__(291),
	    getTag = __webpack_require__(312),
	    isArray = __webpack_require__(298),
	    isBuffer = __webpack_require__(299),
	    isTypedArray = __webpack_require__(302);
	
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(241),
	    stackClear = __webpack_require__(249),
	    stackDelete = __webpack_require__(250),
	    stackGet = __webpack_require__(251),
	    stackHas = __webpack_require__(252),
	    stackSet = __webpack_require__(253);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(242),
	    listCacheDelete = __webpack_require__(243),
	    listCacheGet = __webpack_require__(246),
	    listCacheHas = __webpack_require__(247),
	    listCacheSet = __webpack_require__(248);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ },
/* 242 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(244);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(245);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ },
/* 245 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(244);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(244);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(244);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(241);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}
	
	module.exports = stackClear;


/***/ },
/* 250 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	module.exports = stackDelete;


/***/ },
/* 251 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ },
/* 252 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(241),
	    Map = __webpack_require__(254),
	    MapCache = __webpack_require__(265);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	module.exports = stackSet;


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(255),
	    root = __webpack_require__(261);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(256),
	    getValue = __webpack_require__(264);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(257),
	    isMasked = __webpack_require__(259),
	    isObject = __webpack_require__(258),
	    toSource = __webpack_require__(263);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(258);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 258 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(260);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(261);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(262);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 262 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 263 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ },
/* 264 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(266),
	    mapCacheDelete = __webpack_require__(274),
	    mapCacheGet = __webpack_require__(277),
	    mapCacheHas = __webpack_require__(278),
	    mapCacheSet = __webpack_require__(279);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(267),
	    ListCache = __webpack_require__(241),
	    Map = __webpack_require__(254);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(268),
	    hashDelete = __webpack_require__(270),
	    hashGet = __webpack_require__(271),
	    hashHas = __webpack_require__(272),
	    hashSet = __webpack_require__(273);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(269);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(255);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ },
/* 270 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(269);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(269);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(269);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(275);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(276);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ },
/* 276 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(275);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(275);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(275);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(281),
	    arraySome = __webpack_require__(284),
	    cacheHas = __webpack_require__(285);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(265),
	    setCacheAdd = __webpack_require__(282),
	    setCacheHas = __webpack_require__(283);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;


/***/ },
/* 282 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;


/***/ },
/* 283 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;


/***/ },
/* 284 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 285 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	module.exports = cacheHas;


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(287),
	    Uint8Array = __webpack_require__(288),
	    eq = __webpack_require__(245),
	    equalArrays = __webpack_require__(280),
	    mapToArray = __webpack_require__(289),
	    setToArray = __webpack_require__(290);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(261);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(261);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ },
/* 289 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ },
/* 290 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(292);
	
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(293),
	    baseKeys = __webpack_require__(307),
	    isArrayLike = __webpack_require__(311);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(294),
	    isArguments = __webpack_require__(295),
	    isArray = __webpack_require__(298),
	    isBuffer = __webpack_require__(299),
	    isIndex = __webpack_require__(301),
	    isTypedArray = __webpack_require__(302);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ },
/* 294 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(296),
	    isObjectLike = __webpack_require__(297);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(297);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && objectToString.call(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ },
/* 297 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 298 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(261),
	    stubFalse = __webpack_require__(300);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ },
/* 300 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 301 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(303),
	    baseUnary = __webpack_require__(305),
	    nodeUtil = __webpack_require__(306);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(304),
	    isObjectLike = __webpack_require__(297);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ },
/* 304 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 305 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(262);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(308),
	    nativeKeys = __webpack_require__(309);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ },
/* 308 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(310);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 310 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(257),
	    isLength = __webpack_require__(304);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(313),
	    Map = __webpack_require__(254),
	    Promise = __webpack_require__(314),
	    Set = __webpack_require__(315),
	    WeakMap = __webpack_require__(316),
	    baseGetTag = __webpack_require__(317),
	    toSource = __webpack_require__(263);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(255),
	    root = __webpack_require__(261);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(255),
	    root = __webpack_require__(261);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(255),
	    root = __webpack_require__(261);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(255),
	    root = __webpack_require__(261);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ },
/* 317 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 318 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = getRouteQueries;
	function getRouteQueries(route, routerProps) {
	  if (route.queries) {
	    return route.queries;
	  }
	
	  if (route.getQueries) {
	    // Depending on how we get here, routerProps won't always be the same, but
	    // it will always have location, params, and routes, which are all that
	    // could possibly be relevant here. Anybody using anything else from
	    // routerProps deserves whatever they get.
	    return route.getQueries(routerProps);
	  }
	
	  return null;
	}
	module.exports = exports["default"];

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(129);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports.default = mergeRouteParams;
	
	var _getRouteParams = __webpack_require__(320);
	
	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function mergeRouteParams(prevParams, route, routerProps) {
	  var params = (0, _extends3.default)({}, prevParams, (0, _getRouteParams2.default)(route, routerProps.params));
	
	  if (!route.prepareParams) {
	    return params;
	  }
	
	  // Depending on how we get here, routerProps won't always be the same, but it
	  // will always have location, params, and routes, which are all that could
	  // possibly be relevant here. Anybody using anything else from routerProps
	  // deserves whatever they get.
	  return route.prepareParams(params, routerProps);
	}
	module.exports = exports['default'];

/***/ },
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _getIterator2 = __webpack_require__(213);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _extends2 = __webpack_require__(129);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _typeof2 = __webpack_require__(169);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _objectWithoutProperties2 = __webpack_require__(218);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactStaticContainer = __webpack_require__(324);
	
	var _reactStaticContainer2 = _interopRequireDefault(_reactStaticContainer);
	
	var _mergeRouteParams = __webpack_require__(319);
	
	var _mergeRouteParams2 = _interopRequireDefault(_mergeRouteParams);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  queries: _react2.default.PropTypes.object.isRequired,
	  routerProps: _react2.default.PropTypes.object.isRequired,
	  children: _react2.default.PropTypes.element.isRequired
	};
	
	var contextTypes = {
	  queryAggregator: _react2.default.PropTypes.object.isRequired
	};
	
	function RouteContainer(_ref, _ref2) {
	  var queries = _ref.queries;
	  var routerProps = _ref.routerProps;
	  var children = _ref.children;
	  var extraProps = (0, _objectWithoutProperties3.default)(_ref, ['queries', 'routerProps', 'children']);
	  var queryAggregator = _ref2.queryAggregator;
	  var key = routerProps.key;
	  var route = routerProps.route;
	  var routes = routerProps.routes;
	
	
	  var params = {};
	  for (var _iterator = routes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	    var _ref3;
	
	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref3 = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref3 = _i.value;
	    }
	
	    var ancestorRoute = _ref3;
	
	    params = (0, _mergeRouteParams2.default)(params, ancestorRoute, routerProps);
	
	    if (ancestorRoute === route) {
	      break;
	    }
	  }
	
	  var renderArgs = queryAggregator.getRenderArgs(route, key, queries, params);
	
	  var props = renderArgs.props;
	  var render = route.render;
	
	  if (render && (typeof render === 'undefined' ? 'undefined' : (0, _typeof3.default)(render)) === 'object') {
	    render = render[key];
	  }
	
	  // The below is largely copied from RelayReadyStateRenderer.
	
	  var element = void 0;
	  if (render) {
	    element = render.call(route, (0, _extends3.default)({}, renderArgs, {
	      props: props && (0, _extends3.default)({}, routerProps, extraProps, params, props),
	      routerProps: (0, _extends3.default)({}, routerProps, extraProps),
	      element: children
	    }));
	  } else if (props) {
	    // The child already has routerProps, so just inject the additional props.
	    element = _react2.default.cloneElement(children, (0, _extends3.default)({}, extraProps, params, props));
	  }
	
	  var shouldUpdate = void 0;
	  if (element === undefined) {
	    element = null;
	    shouldUpdate = false;
	  } else {
	    shouldUpdate = true;
	  }
	
	  return _react2.default.createElement(
	    _reactStaticContainer2.default,
	    { shouldUpdate: shouldUpdate },
	    element
	  );
	}
	
	RouteContainer.propTypes = propTypes;
	RouteContainer.contextTypes = contextTypes;
	
	exports.default = RouteContainer;
	module.exports = exports['default'];

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	module.exports = __webpack_require__(325);


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule StaticContainer.react
	 * @typechecks
	 * 
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(4);
	
	/**
	 * Renders static content efficiently by allowing React to short-circuit the
	 * reconciliation process. This component should be used when you know that a
	 * subtree of components will never need to be updated.
	 *
	 *   var someValue = ...; // We know for certain this value will never change.
	 *   return (
	 *     <StaticContainer>
	 *       <MyComponent value={someValue} />
	 *     </StaticContainer>
	 *   );
	 *
	 * Typically, you will not need to use this component and should opt for normal
	 * React reconciliation.
	 */
	
	var StaticContainer = (function (_React$Component) {
	  _inherits(StaticContainer, _React$Component);
	
	  function StaticContainer() {
	    _classCallCheck(this, StaticContainer);
	
	    _get(Object.getPrototypeOf(StaticContainer.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(StaticContainer, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return !!nextProps.shouldUpdate;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var child = this.props.children;
	      if (child === null || child === false) {
	        return null;
	      }
	      return React.Children.only(child);
	    }
	  }]);
	
	  return StaticContainer;
	})(React.Component);
	
	module.exports = StaticContainer;

/***/ },
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */
/***/ function(module, exports) {

	module.exports = Router;

/***/ },
/* 344 */
/***/ function(module, exports) {

	module.exports = ReactRouteRegister;

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_SilverStripeComponen) {
	  _inherits(App, _SilverStripeComponen);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      var Child = _react2.default.Children.only(this.props.children);
	      return Child;
	    }
	  }]);
	
	  return App;
	}(_SilverStripeComponent2.default);
	
	exports.default = App;

/***/ },
/* 346 */
/***/ function(module, exports) {

	module.exports = ReduxThunk;

/***/ },
/* 347 */
/***/ function(module, exports) {

	module.exports = ReducerRegister;

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setConfig = setConfig;
	
	var _ConfigActionTypes = __webpack_require__(349);
	
	var _ConfigActionTypes2 = _interopRequireDefault(_ConfigActionTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function setConfig(config) {
	  return {
	    type: _ConfigActionTypes2.default.SET_CONFIG,
	    payload: { config: config }
	  };
	}

/***/ },
/* 349 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  SET_CONFIG: 'SET_CONFIG'
	};

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _deepFreezeStrict = __webpack_require__(351);
	
	var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);
	
	var _ConfigActionTypes = __webpack_require__(349);
	
	var _ConfigActionTypes2 = _interopRequireDefault(_ConfigActionTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function configReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	
	    case _ConfigActionTypes2.default.SET_CONFIG:
	      return (0, _deepFreezeStrict2.default)(_extends({}, state, action.payload.config));
	
	    default:
	      return state;
	
	  }
	}
	
	exports.default = configReducer;

/***/ },
/* 351 */
/***/ function(module, exports) {

	module.exports = DeepFreezeStrict;

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _deepFreezeStrict = __webpack_require__(351);
	
	var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);
	
	var _FormActionTypes = __webpack_require__(30);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var initialState = (0, _deepFreezeStrict2.default)({});
	
	function formReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];
	
	  var updateForm = function updateForm(formId, data) {
	    return _extends({}, state, _defineProperty({}, formId, _extends({}, state[formId], data)));
	  };
	
	  switch (action.type) {
	
	    case _FormActionTypes.ACTION_TYPES.SUBMIT_FORM_REQUEST:
	      return (0, _deepFreezeStrict2.default)(updateForm(action.payload.formId, {
	        error: false,
	        submitting: true
	      }));
	
	    case _FormActionTypes.ACTION_TYPES.REMOVE_FORM:
	      return (0, _deepFreezeStrict2.default)(Object.keys(state).reduce(function (previous, current) {
	        if (current === action.payload.formId) {
	          return previous;
	        }
	        return _extends({}, previous, _defineProperty({}, current, state[current]));
	      }, {}));
	
	    case _FormActionTypes.ACTION_TYPES.ADD_FORM:
	      return (0, _deepFreezeStrict2.default)(_extends({}, state, _defineProperty({}, action.payload.formState.id, {
	        fields: action.payload.formState.fields,
	        error: false,
	        submitting: false
	      })));
	
	    case _FormActionTypes.ACTION_TYPES.UPDATE_FIELD:
	      return (0, _deepFreezeStrict2.default)(updateForm(action.payload.formId, {
	        fields: state[action.payload.formId].fields.map(function (field) {
	          if (field.id === action.payload.updates.id) {
	            return _extends({}, field, action.payload.updates);
	          }
	          return field;
	        })
	      }));
	
	    case _FormActionTypes.ACTION_TYPES.SUBMIT_FORM_SUCCESS:
	      return (0, _deepFreezeStrict2.default)(updateForm(action.payload.response.id, {
	        fields: action.payload.response.state.fields,
	        error: false,
	        messages: action.payload.response.state.messages,
	        submitting: false
	      }));
	
	    case _FormActionTypes.ACTION_TYPES.SUBMIT_FORM_FAILURE:
	      return (0, _deepFreezeStrict2.default)(updateForm(action.payload.formId, {
	        error: true,
	        messages: action.payload.error,
	        submitting: false
	      }));
	
	    case _FormActionTypes.ACTION_TYPES.SET_SUBMIT_ACTION:
	      return (0, _deepFreezeStrict2.default)(updateForm(action.payload.formId, {
	        submitAction: action.payload.submitAction
	      }));
	
	    default:
	      return state;
	
	  }
	}
	
	exports.default = formReducer;

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = schemaReducer;
	
	var _deepFreezeStrict = __webpack_require__(351);
	
	var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);
	
	var _SchemaActionTypes = __webpack_require__(32);
	
	var _SchemaActionTypes2 = _interopRequireDefault(_SchemaActionTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var initialState = (0, _deepFreezeStrict2.default)({});
	
	function schemaReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	  switch (action.type) {
	
	    case _SchemaActionTypes2.default.SET_SCHEMA:
	      {
	        var id = action.payload.schema.schema_url;
	        return (0, _deepFreezeStrict2.default)(_extends({}, state, _defineProperty({}, id, action.payload)));
	      }
	
	    default:
	      return state;
	  }
	}

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _deepFreezeStrict = __webpack_require__(351);
	
	var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);
	
	var _RecordsActionTypes = __webpack_require__(48);
	
	var _RecordsActionTypes2 = _interopRequireDefault(_RecordsActionTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var initialState = {};
	
	function recordsReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];
	
	  var records = null;
	  var recordType = null;
	  var record = null;
	
	  switch (action.type) {
	
	    case _RecordsActionTypes2.default.CREATE_RECORD:
	      return (0, _deepFreezeStrict2.default)(_extends({}, state, {}));
	
	    case _RecordsActionTypes2.default.UPDATE_RECORD:
	      return (0, _deepFreezeStrict2.default)(_extends({}, state, {}));
	
	    case _RecordsActionTypes2.default.DELETE_RECORD:
	      return (0, _deepFreezeStrict2.default)(_extends({}, state, {}));
	
	    case _RecordsActionTypes2.default.FETCH_RECORDS_REQUEST:
	      return state;
	
	    case _RecordsActionTypes2.default.FETCH_RECORDS_FAILURE:
	      return state;
	
	    case _RecordsActionTypes2.default.FETCH_RECORDS_SUCCESS:
	      recordType = action.payload.recordType;
	      if (!recordType) {
	        throw new Error('Undefined record type');
	      }
	      records = action.payload.data._embedded[recordType] || {};
	      records = records.reduce(function (prev, val) {
	        return _extends({}, prev, _defineProperty({}, val.ID, val));
	      }, {});
	      return (0, _deepFreezeStrict2.default)(_extends({}, state, _defineProperty({}, recordType, records)));
	
	    case _RecordsActionTypes2.default.FETCH_RECORD_REQUEST:
	      return state;
	
	    case _RecordsActionTypes2.default.FETCH_RECORD_FAILURE:
	      return state;
	
	    case _RecordsActionTypes2.default.FETCH_RECORD_SUCCESS:
	      recordType = action.payload.recordType;
	      record = action.payload.data;
	
	      if (!recordType) {
	        throw new Error('Undefined record type');
	      }
	      return (0, _deepFreezeStrict2.default)(_extends({}, state, _defineProperty({}, recordType, _extends({}, state[recordType], _defineProperty({}, record.ID, record)))));
	
	    case _RecordsActionTypes2.default.DELETE_RECORD_REQUEST:
	      return state;
	
	    case _RecordsActionTypes2.default.DELETE_RECORD_FAILURE:
	      return state;
	
	    case _RecordsActionTypes2.default.DELETE_RECORD_SUCCESS:
	      recordType = action.payload.recordType;
	      records = state[recordType];
	      records = Object.keys(records).reduce(function (result, key) {
	        if (parseInt(key, 10) !== parseInt(action.payload.id, 10)) {
	          return _extends({}, result, _defineProperty({}, key, records[key]));
	        }
	        return result;
	      }, {});
	
	      return (0, _deepFreezeStrict2.default)(_extends({}, state, _defineProperty({}, recordType, records)));
	
	    default:
	      return state;
	  }
	}
	
	exports.default = recordsReducer;

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _deepFreezeStrict = __webpack_require__(351);
	
	var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);
	
	var _CampaignActionTypes = __webpack_require__(356);
	
	var _CampaignActionTypes2 = _interopRequireDefault(_CampaignActionTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initialState = (0, _deepFreezeStrict2.default)({
	  campaignId: null,
	  changeSetItemId: null,
	  isPublishing: false,
	  view: null
	});
	
	function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	
	    case _CampaignActionTypes2.default.SET_CAMPAIGN_SELECTED_CHANGESETITEM:
	      return (0, _deepFreezeStrict2.default)(_extends({}, state, {
	        changeSetItemId: action.payload.changeSetItemId
	      }));
	
	    case _CampaignActionTypes2.default.SET_CAMPAIGN_ACTIVE_CHANGESET:
	      return (0, _deepFreezeStrict2.default)(_extends({}, state, {
	        campaignId: action.payload.campaignId,
	        view: action.payload.view,
	        changeSetItemId: null
	      }));
	
	    case _CampaignActionTypes2.default.PUBLISH_CAMPAIGN_REQUEST:
	      return (0, _deepFreezeStrict2.default)(_extends({}, state, {
	        isPublishing: true
	      }));
	
	    case _CampaignActionTypes2.default.PUBLISH_CAMPAIGN_SUCCESS:
	    case _CampaignActionTypes2.default.PUBLISH_CAMPAIGN_FAILURE:
	      return (0, _deepFreezeStrict2.default)(_extends({}, state, {
	        isPublishing: false
	      }));
	
	    default:
	      return state;
	
	  }
	}
	
	exports.default = reducer;

/***/ },
/* 356 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  SET_CAMPAIGN_ACTIVE_CHANGESET: 'SET_CAMPAIGN_ACTIVE_CHANGESET',
	  SET_CAMPAIGN_SELECTED_CHANGESETITEM: 'SET_CAMPAIGN_SELECTED_CHANGESETITEM',
	  PUBLISH_CAMPAIGN_REQUEST: 'PUBLISH_CAMPAIGN_REQUEST',
	  PUBLISH_CAMPAIGN_SUCCESS: 'PUBLISH_CAMPAIGN_SUCCESS',
	  PUBLISH_CAMPAIGN_FAILURE: 'PUBLISH_CAMPAIGN_FAILURE'
	};

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _deepFreezeStrict = __webpack_require__(351);
	
	var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);
	
	var _BreadcrumbsActionTypes = __webpack_require__(67);
	
	var _BreadcrumbsActionTypes2 = _interopRequireDefault(_BreadcrumbsActionTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initialState = (0, _deepFreezeStrict2.default)([]);
	
	function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	
	    case _BreadcrumbsActionTypes2.default.SET_BREADCRUMBS:
	      return (0, _deepFreezeStrict2.default)(_extends([], action.payload.breadcrumbs));
	
	    default:
	      return state;
	
	  }
	}
	
	exports.default = reducer;

/***/ },
/* 358 */
/***/ function(module, exports) {

	module.exports = ReactRouterRedux;

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Injector = __webpack_require__(34);
	
	var _Injector2 = _interopRequireDefault(_Injector);
	
	var _TextField = __webpack_require__(57);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _HiddenField = __webpack_require__(55);
	
	var _HiddenField2 = _interopRequireDefault(_HiddenField);
	
	var _CheckboxField = __webpack_require__(360);
	
	var _CheckboxField2 = _interopRequireDefault(_CheckboxField);
	
	var _CheckboxSetField = __webpack_require__(362);
	
	var _CheckboxSetField2 = _interopRequireDefault(_CheckboxSetField);
	
	var _OptionsetField = __webpack_require__(363);
	
	var _OptionsetField2 = _interopRequireDefault(_OptionsetField);
	
	var _GridField = __webpack_require__(364);
	
	var _GridField2 = _interopRequireDefault(_GridField);
	
	var _SingleSelectField = __webpack_require__(365);
	
	var _SingleSelectField2 = _interopRequireDefault(_SingleSelectField);
	
	var _PopoverField = __webpack_require__(366);
	
	var _PopoverField2 = _interopRequireDefault(_PopoverField);
	
	var _HeaderField = __webpack_require__(367);
	
	var _HeaderField2 = _interopRequireDefault(_HeaderField);
	
	var _LiteralField = __webpack_require__(368);
	
	var _LiteralField2 = _interopRequireDefault(_LiteralField);
	
	var _HtmlReadonlyField = __webpack_require__(369);
	
	var _HtmlReadonlyField2 = _interopRequireDefault(_HtmlReadonlyField);
	
	var _LookupField = __webpack_require__(370);
	
	var _LookupField2 = _interopRequireDefault(_LookupField);
	
	var _CompositeField = __webpack_require__(371);
	
	var _CompositeField2 = _interopRequireDefault(_CompositeField);
	
	var _Tabs = __webpack_require__(372);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _TabItem = __webpack_require__(373);
	
	var _TabItem2 = _interopRequireDefault(_TabItem);
	
	var _FormAction = __webpack_require__(374);
	
	var _FormAction2 = _interopRequireDefault(_FormAction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BootInjector = function () {
	  function BootInjector() {
	    _classCallCheck(this, BootInjector);
	  }
	
	  _createClass(BootInjector, [{
	    key: 'start',
	    value: function start() {
	      _Injector2.default.register('TextField', _TextField2.default);
	      _Injector2.default.register('HiddenField', _HiddenField2.default);
	      _Injector2.default.register('CheckboxField', _CheckboxField2.default);
	      _Injector2.default.register('CheckboxSetField', _CheckboxSetField2.default);
	      _Injector2.default.register('OptionsetField', _OptionsetField2.default);
	      _Injector2.default.register('GridField', _GridField2.default);
	      _Injector2.default.register('SingleSelectField', _SingleSelectField2.default);
	      _Injector2.default.register('PopoverField', _PopoverField2.default);
	      _Injector2.default.register('HeaderField', _HeaderField2.default);
	      _Injector2.default.register('LiteralField', _LiteralField2.default);
	      _Injector2.default.register('HtmlReadonlyField', _HtmlReadonlyField2.default);
	      _Injector2.default.register('LookupField', _LookupField2.default);
	      _Injector2.default.register('CompositeField', _CompositeField2.default);
	      _Injector2.default.register('Tabs', _Tabs2.default);
	      _Injector2.default.register('TabItem', _TabItem2.default);
	      _Injector2.default.register('FormAction', _FormAction2.default);
	    }
	  }]);
	
	  return BootInjector;
	}();
	
	exports.default = new BootInjector();

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _OptionField = __webpack_require__(361);
	
	var _OptionField2 = _interopRequireDefault(_OptionField);
	
	var _FieldHolder = __webpack_require__(58);
	
	var _FieldHolder2 = _interopRequireDefault(_FieldHolder);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CheckboxField = function (_SilverStripeComponen) {
	  _inherits(CheckboxField, _SilverStripeComponen);
	
	  function CheckboxField() {
	    _classCallCheck(this, CheckboxField);
	
	    return _possibleConstructorReturn(this, (CheckboxField.__proto__ || Object.getPrototypeOf(CheckboxField)).apply(this, arguments));
	  }
	
	  _createClass(CheckboxField, [{
	    key: 'render',
	    value: function render() {
	      var FieldHolder = (0, _FieldHolder2.default)(_OptionField2.default);
	
	      return _react2.default.createElement(FieldHolder, _extends({}, this.props, { type: 'checkbox', hideLabels: true }));
	    }
	  }]);
	
	  return CheckboxField;
	}(_SilverStripeComponent2.default);
	
	exports.default = CheckboxField;

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _castStringToElement = __webpack_require__(59);
	
	var _castStringToElement2 = _interopRequireDefault(_castStringToElement);
	
	var _reactBootstrapSs = __webpack_require__(37);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OptionField = function (_SilverStripeComponen) {
	  _inherits(OptionField, _SilverStripeComponen);
	
	  function OptionField(props) {
	    _classCallCheck(this, OptionField);
	
	    var _this = _possibleConstructorReturn(this, (OptionField.__proto__ || Object.getPrototypeOf(OptionField)).call(this, props));
	
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(OptionField, [{
	    key: 'handleChange',
	    value: function handleChange(event) {
	      if (typeof this.props.onChange === 'function') {
	        this.props.onChange(event, {
	          id: this.props.id,
	          value: event.target.checked ? 1 : 0
	        });
	      } else if (typeof this.props.onClick === 'function') {
	        this.props.onClick(event, {
	          id: this.props.id,
	          value: event.target.checked ? 1 : 0
	        });
	      }
	    }
	  }, {
	    key: 'getInputProps',
	    value: function getInputProps() {
	      return {
	        id: this.props.id,
	        name: this.props.name,
	        disabled: this.props.disabled,
	        readOnly: this.props.readOnly,
	        className: this.props.className + ' ' + this.props.extraClass,
	        onChange: this.handleChange,
	        checked: !!this.props.value,
	        value: 1
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var labelText = this.props.leftTitle !== null ? this.props.leftTitle : this.props.title;
	
	      var Option = null;
	
	      switch (this.props.type) {
	        case 'checkbox':
	          Option = _reactBootstrapSs.Checkbox;
	          break;
	        case 'radio':
	          Option = _reactBootstrapSs.Radio;
	          break;
	        default:
	          throw new Error('Invalid OptionField type: ' + this.props.type);
	      }
	
	      return (0, _castStringToElement2.default)(Option, labelText, this.getInputProps());
	    }
	  }]);
	
	  return OptionField;
	}(_SilverStripeComponent2.default);
	
	OptionField.propTypes = {
	  type: _react2.default.PropTypes.oneOf(['checkbox', 'radio']),
	  leftTitle: _react2.default.PropTypes.any,
	  title: _react2.default.PropTypes.any,
	  extraClass: _react2.default.PropTypes.string,
	  id: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string.isRequired,
	  onChange: _react2.default.PropTypes.func,
	  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	  readOnly: _react2.default.PropTypes.bool,
	  disabled: _react2.default.PropTypes.bool
	};
	
	OptionField.defaultProps = {
	  extraClass: '',
	  className: '',
	  type: 'radio',
	  leftTitle: null
	};
	
	exports.default = OptionField;

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CheckboxSetField = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _OptionField = __webpack_require__(361);
	
	var _OptionField2 = _interopRequireDefault(_OptionField);
	
	var _FieldHolder = __webpack_require__(58);
	
	var _FieldHolder2 = _interopRequireDefault(_FieldHolder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CheckboxSetField = function (_SilverStripeComponen) {
	  _inherits(CheckboxSetField, _SilverStripeComponen);
	
	  function CheckboxSetField(props) {
	    _classCallCheck(this, CheckboxSetField);
	
	    var _this = _possibleConstructorReturn(this, (CheckboxSetField.__proto__ || Object.getPrototypeOf(CheckboxSetField)).call(this, props));
	
	    _this.getItemKey = _this.getItemKey.bind(_this);
	    _this.getOptionProps = _this.getOptionProps.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.getValues = _this.getValues.bind(_this);
	    return _this;
	  }
	
	  _createClass(CheckboxSetField, [{
	    key: 'getItemKey',
	    value: function getItemKey(item, index) {
	      return this.props.id + '-' + (item.value || 'empty' + index);
	    }
	  }, {
	    key: 'getValues',
	    value: function getValues() {
	      var values = this.props.value;
	
	      if (!Array.isArray(values) && (values || typeof values === 'string' || typeof values === 'number')) {
	        values = [values];
	      }
	
	      if (values) {
	        return values.map(function (value) {
	          return '' + value;
	        });
	      }
	      return [];
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event, field) {
	      var _this2 = this;
	
	      if (typeof this.props.onChange === 'function') {
	        (function () {
	          var oldValue = _this2.getValues();
	          var newValue = _this2.props.source.filter(function (item, index) {
	            if (_this2.getItemKey(item, index) === field.id) {
	              return field.value === 1;
	            }
	            return oldValue.indexOf('' + item.value) > -1;
	          }).map(function (item) {
	            return '' + item.value;
	          });
	
	          _this2.props.onChange(event, { id: _this2.props.id, value: newValue });
	        })();
	      }
	    }
	  }, {
	    key: 'getOptionProps',
	    value: function getOptionProps(item, index) {
	      var oldValue = this.getValues();
	      var key = this.getItemKey(item, index);
	
	      return {
	        key: key,
	        id: key,
	        name: this.props.name,
	        className: this.props.itemClass,
	        disabled: item.disabled || this.props.disabled,
	        readOnly: this.props.readOnly,
	        onChange: this.handleChange,
	        value: oldValue.indexOf('' + item.value) > -1,
	        title: item.title,
	        type: 'checkbox'
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      if (!this.props.source) {
	        return null;
	      }
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.source.map(function (item, index) {
	          return _react2.default.createElement(_OptionField2.default, _this3.getOptionProps(item, index));
	        })
	      );
	    }
	  }]);
	
	  return CheckboxSetField;
	}(_SilverStripeComponent2.default);
	
	CheckboxSetField.propTypes = {
	  className: _react2.default.PropTypes.string,
	  extraClass: _react2.default.PropTypes.string,
	  itemClass: _react2.default.PropTypes.string,
	  id: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string.isRequired,
	  source: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	    title: _react2.default.PropTypes.any,
	    disabled: _react2.default.PropTypes.bool
	  })),
	  onChange: _react2.default.PropTypes.func,
	  value: _react2.default.PropTypes.any,
	  readOnly: _react2.default.PropTypes.bool,
	  disabled: _react2.default.PropTypes.bool
	};
	
	CheckboxSetField.defaultProps = {
	  extraClass: '',
	  className: '',
	  value: []
	};
	
	exports.CheckboxSetField = CheckboxSetField;
	exports.default = (0, _FieldHolder2.default)(CheckboxSetField);

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.OptionsetField = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _OptionField = __webpack_require__(361);
	
	var _OptionField2 = _interopRequireDefault(_OptionField);
	
	var _FieldHolder = __webpack_require__(58);
	
	var _FieldHolder2 = _interopRequireDefault(_FieldHolder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OptionsetField = function (_SilverStripeComponen) {
	  _inherits(OptionsetField, _SilverStripeComponen);
	
	  function OptionsetField(props) {
	    _classCallCheck(this, OptionsetField);
	
	    var _this = _possibleConstructorReturn(this, (OptionsetField.__proto__ || Object.getPrototypeOf(OptionsetField)).call(this, props));
	
	    _this.getItemKey = _this.getItemKey.bind(_this);
	    _this.getOptionProps = _this.getOptionProps.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(OptionsetField, [{
	    key: 'getItemKey',
	    value: function getItemKey(item, index) {
	      return this.props.id + '-' + (item.value || 'empty' + index);
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event, field) {
	      var _this2 = this;
	
	      if (typeof this.props.onChange === 'function') {
	        if (field.value === 1) {
	          var sourceItem = this.props.source.find(function (item, index) {
	            return _this2.getItemKey(item, index) === field.id;
	          });
	
	          this.props.onChange(event, { id: this.props.id, value: '' + sourceItem.value });
	        }
	      }
	    }
	  }, {
	    key: 'getOptionProps',
	    value: function getOptionProps(item, index) {
	      var key = this.getItemKey(item, index);
	
	      return {
	        key: key,
	        id: key,
	        name: this.props.name,
	        className: this.props.itemClass,
	        disabled: item.disabled || this.props.disabled,
	        readOnly: this.props.readOnly,
	        onChange: this.handleChange,
	        value: '' + this.props.value === '' + item.value,
	        title: item.title,
	        type: 'radio'
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      if (!this.props.source) {
	        return null;
	      }
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.source.map(function (item, index) {
	          return _react2.default.createElement(_OptionField2.default, _this3.getOptionProps(item, index));
	        })
	      );
	    }
	  }]);
	
	  return OptionsetField;
	}(_SilverStripeComponent2.default);
	
	OptionsetField.propTypes = {
	  extraClass: _react2.default.PropTypes.string,
	  itemClass: _react2.default.PropTypes.string,
	  id: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string.isRequired,
	  source: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	    title: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	    disabled: _react2.default.PropTypes.bool
	  })),
	  onChange: _react2.default.PropTypes.func,
	  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	  readOnly: _react2.default.PropTypes.bool,
	  disabled: _react2.default.PropTypes.bool
	};
	
	OptionsetField.defaultProps = {
	  extraClass: '',
	  className: ''
	};
	
	exports.OptionsetField = OptionsetField;
	exports.default = (0, _FieldHolder2.default)(OptionsetField);

/***/ },
/* 364 */
/***/ function(module, exports) {

	module.exports = GridField;

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SingleSelectField = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _FieldHolder = __webpack_require__(58);
	
	var _FieldHolder2 = _interopRequireDefault(_FieldHolder);
	
	var _i18n = __webpack_require__(94);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	var _reactBootstrapSs = __webpack_require__(37);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SingleSelectField = function (_SilverStripeComponen) {
	  _inherits(SingleSelectField, _SilverStripeComponen);
	
	  function SingleSelectField(props) {
	    _classCallCheck(this, SingleSelectField);
	
	    var _this = _possibleConstructorReturn(this, (SingleSelectField.__proto__ || Object.getPrototypeOf(SingleSelectField)).call(this, props));
	
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(SingleSelectField, [{
	    key: 'render',
	    value: function render() {
	      var field = null;
	      if (this.props.readOnly) {
	        field = this.getReadonlyField();
	      } else {
	        field = this.getSelectField();
	      }
	
	      return field;
	    }
	  }, {
	    key: 'getReadonlyField',
	    value: function getReadonlyField() {
	      var _this2 = this;
	
	      var label = this.props.source && this.props.source.find(function (item) {
	        return item.value === _this2.props.value;
	      });
	
	      label = typeof label === 'string' ? label : this.props.value;
	
	      return _react2.default.createElement(
	        _reactBootstrapSs.FormControl.Static,
	        this.getInputProps(),
	        label
	      );
	    }
	  }, {
	    key: 'getSelectField',
	    value: function getSelectField() {
	      var _this3 = this;
	
	      var options = this.props.source ? this.props.source.slice() : [];
	
	      if (this.props.data.hasEmptyDefault && !options.find(function (item) {
	        return !item.value;
	      })) {
	        options.unshift({
	          value: '',
	          title: this.props.data.emptyString,
	          disabled: false
	        });
	      }
	
	      return _react2.default.createElement(
	        _reactBootstrapSs.FormControl,
	        this.getInputProps(),
	        options.map(function (item, index) {
	          var key = _this3.props.name + '-' + (item.value || 'empty' + index);
	
	          return _react2.default.createElement(
	            'option',
	            { key: key, value: item.value, disabled: item.disabled },
	            item.title
	          );
	        })
	      );
	    }
	  }, {
	    key: 'getInputProps',
	    value: function getInputProps() {
	      var props = {
	        bsClass: this.props.bsClass,
	        className: this.props.className + ' ' + this.props.extraClass,
	        id: this.props.id,
	        name: this.props.name,
	        disabled: this.props.disabled
	      };
	
	      if (!this.props.readOnly) {
	        _extends(props, {
	          onChange: this.handleChange,
	          value: this.props.value,
	          componentClass: 'select'
	        });
	      }
	
	      return props;
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      if (typeof this.props.onChange === 'function') {
	        this.props.onChange(event, { id: this.props.id, value: event.target.value });
	      }
	    }
	  }]);
	
	  return SingleSelectField;
	}(_SilverStripeComponent2.default);
	
	SingleSelectField.propTypes = {
	  id: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string.isRequired,
	  onChange: _react2.default.PropTypes.func,
	  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	  readOnly: _react2.default.PropTypes.bool,
	  disabled: _react2.default.PropTypes.bool,
	  source: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	    title: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	    disabled: _react2.default.PropTypes.bool
	  })),
	  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.shape({
	    hasEmptyDefault: _react2.default.PropTypes.bool,
	    emptyString: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
	  })])
	};
	
	SingleSelectField.defaultProps = {
	  source: [],
	  extraClass: '',
	  className: '',
	  data: {
	    emptyString: _i18n2.default._t('Boolean.ANY', 'Any')
	  }
	};
	
	exports.SingleSelectField = SingleSelectField;
	exports.default = (0, _FieldHolder2.default)(SingleSelectField);

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrapSs = __webpack_require__(37);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PopoverField = function (_SilverStripeComponen) {
	  _inherits(PopoverField, _SilverStripeComponen);
	
	  function PopoverField(props) {
	    _classCallCheck(this, PopoverField);
	
	    var _this = _possibleConstructorReturn(this, (PopoverField.__proto__ || Object.getPrototypeOf(PopoverField)).call(this, props));
	
	    _this.handleShow = _this.handleShow.bind(_this);
	    _this.handleHide = _this.handleHide.bind(_this);
	
	    _this.state = {
	      showing: false
	    };
	    return _this;
	  }
	
	  _createClass(PopoverField, [{
	    key: 'handleShow',
	    value: function handleShow() {
	      this.setState({
	        showing: true
	      });
	    }
	  }, {
	    key: 'handleHide',
	    value: function handleHide() {
	      this.setState({
	        showing: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var placement = this.getPlacement();
	      var overlay = _react2.default.createElement(
	        _reactBootstrapSs.Popover,
	        { id: this.props.id + '_Popover', className: 'fade in popover-' + placement,
	          title: this.props.data.popoverTitle
	        },
	        this.props.children
	      );
	
	      var buttonClasses = ['btn', 'btn-secondary'];
	      if (this.state.showing) {
	        buttonClasses.push('btn--no-focus');
	      }
	
	      if (!this.props.title) {
	        buttonClasses.push('font-icon-dot-3 btn--no-text btn--icon-xl');
	      }
	      return _react2.default.createElement(
	        _reactBootstrapSs.OverlayTrigger,
	        { rootClose: true, trigger: 'click', container: this,
	          placement: placement, overlay: overlay,
	          onEnter: this.handleShow,
	          onExited: this.handleHide
	        },
	        _react2.default.createElement(
	          'button',
	          { id: this.props.id, type: 'button', className: buttonClasses.join(' ') },
	          this.props.title
	        )
	      );
	    }
	  }, {
	    key: 'getPlacement',
	    value: function getPlacement() {
	      var placement = this.props.data.placement;
	      return placement || 'bottom';
	    }
	  }]);
	
	  return PopoverField;
	}(_SilverStripeComponent2.default);
	
	PopoverField.propTypes = {
	  id: _react2.default.PropTypes.string,
	  title: _react2.default.PropTypes.any,
	  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.shape({
	    popoverTitle: _react2.default.PropTypes.string,
	    placement: _react2.default.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
	  })])
	};
	
	exports.default = PopoverField;

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HeaderField = function (_SilverStripeComponen) {
	  _inherits(HeaderField, _SilverStripeComponen);
	
	  function HeaderField() {
	    _classCallCheck(this, HeaderField);
	
	    return _possibleConstructorReturn(this, (HeaderField.__proto__ || Object.getPrototypeOf(HeaderField)).apply(this, arguments));
	  }
	
	  _createClass(HeaderField, [{
	    key: 'render',
	    value: function render() {
	      var Heading = 'h' + (this.props.data.headingLevel || 3);
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'field' },
	        _react2.default.createElement(
	          Heading,
	          this.getInputProps(),
	          this.props.data.title
	        )
	      );
	    }
	  }, {
	    key: 'getInputProps',
	    value: function getInputProps() {
	      return {
	        className: this.props.className + ' ' + this.props.extraClass,
	        id: this.props.id
	      };
	    }
	  }]);
	
	  return HeaderField;
	}(_SilverStripeComponent2.default);
	
	HeaderField.propTypes = {
	  extraClass: _react2.default.PropTypes.string,
	  id: _react2.default.PropTypes.string,
	  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.shape({
	    headingLevel: _react2.default.PropTypes.number,
	    title: _react2.default.PropTypes.string.isRequired
	  })]).isRequired
	};
	
	HeaderField.defaultProps = {
	  className: '',
	  extraClass: ''
	};
	
	exports.default = HeaderField;

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LiteralField = function (_SilverStripeComponen) {
	  _inherits(LiteralField, _SilverStripeComponen);
	
	  function LiteralField() {
	    _classCallCheck(this, LiteralField);
	
	    return _possibleConstructorReturn(this, (LiteralField.__proto__ || Object.getPrototypeOf(LiteralField)).apply(this, arguments));
	  }
	
	  _createClass(LiteralField, [{
	    key: 'getContent',
	    value: function getContent() {
	      return { __html: this.props.data.content };
	    }
	  }, {
	    key: 'getInputProps',
	    value: function getInputProps() {
	      return {
	        className: this.props.className + ' ' + this.props.extraClass,
	        id: this.props.id,
	        name: this.props.name
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', _extends({}, this.getInputProps(), {
	        dangerouslySetInnerHTML: this.getContent()
	      }));
	    }
	  }]);
	
	  return LiteralField;
	}(_SilverStripeComponent2.default);
	
	LiteralField.propTypes = {
	  id: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string.isRequired,
	  extraClass: _react2.default.PropTypes.string,
	  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.shape({
	    content: _react2.default.PropTypes.string.isRequired
	  })]).isRequired
	};
	
	LiteralField.defaultProps = {
	  extraClass: '',
	  className: ''
	};
	
	exports.default = LiteralField;

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HtmlReadonlyField = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _FieldHolder = __webpack_require__(58);
	
	var _FieldHolder2 = _interopRequireDefault(_FieldHolder);
	
	var _reactBootstrapSs = __webpack_require__(37);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HtmlReadonlyField = function (_SilverStripeComponen) {
	  _inherits(HtmlReadonlyField, _SilverStripeComponen);
	
	  function HtmlReadonlyField(props) {
	    _classCallCheck(this, HtmlReadonlyField);
	
	    var _this = _possibleConstructorReturn(this, (HtmlReadonlyField.__proto__ || Object.getPrototypeOf(HtmlReadonlyField)).call(this, props));
	
	    _this.getContent = _this.getContent.bind(_this);
	    return _this;
	  }
	
	  _createClass(HtmlReadonlyField, [{
	    key: 'getContent',
	    value: function getContent() {
	      return { __html: this.props.value };
	    }
	  }, {
	    key: 'getInputProps',
	    value: function getInputProps() {
	      return {
	        bsClass: this.props.bsClass,
	        componentClass: this.props.componentClass,
	
	        className: this.props.className + ' ' + this.props.extraClass,
	        id: this.props.id,
	        name: this.props.name
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_reactBootstrapSs.FormControl.Static, _extends({}, this.getInputProps(), { dangerouslySetInnerHTML: this.getContent() }));
	    }
	  }]);
	
	  return HtmlReadonlyField;
	}(_SilverStripeComponent2.default);
	
	HtmlReadonlyField.propTypes = {
	  id: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string.isRequired,
	  extraClass: _react2.default.PropTypes.string,
	  value: _react2.default.PropTypes.string
	};
	
	HtmlReadonlyField.defaultProps = {
	  extraClass: '',
	  className: ''
	};
	
	exports.HtmlReadonlyField = HtmlReadonlyField;
	exports.default = (0, _FieldHolder2.default)(HtmlReadonlyField);

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LookupField = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _reactBootstrapSs = __webpack_require__(37);
	
	var _FieldHolder = __webpack_require__(58);
	
	var _FieldHolder2 = _interopRequireDefault(_FieldHolder);
	
	var _i18n = __webpack_require__(94);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LookupField = function (_SilverStripeComponen) {
	  _inherits(LookupField, _SilverStripeComponen);
	
	  function LookupField(props) {
	    _classCallCheck(this, LookupField);
	
	    var _this = _possibleConstructorReturn(this, (LookupField.__proto__ || Object.getPrototypeOf(LookupField)).call(this, props));
	
	    _this.getValueCSV = _this.getValueCSV.bind(_this);
	    return _this;
	  }
	
	  _createClass(LookupField, [{
	    key: 'getValueCSV',
	    value: function getValueCSV() {
	      var _this2 = this;
	
	      var values = this.props.value;
	
	      if (!Array.isArray(values) && (values || typeof values === 'string' || typeof values === 'number')) {
	        var item = this.props.source.find(function (next) {
	          return next.value === values;
	        });
	        if (item) {
	          return item.title;
	        }
	        return '';
	      }
	
	      if (!values || !values.length) {
	        return '';
	      }
	      return values.map(function (value) {
	        var item = _this2.props.source.find(function (next) {
	          return next.value === value;
	        });
	        return item && item.title;
	      }).filter(function (value) {
	        return ('' + value).length;
	      }).join(', ');
	    }
	  }, {
	    key: 'getFieldProps',
	    value: function getFieldProps() {
	      return {
	        id: this.props.id,
	        name: this.props.name,
	        className: this.props.className + ' ' + this.props.extraClass
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.source) {
	        return null;
	      }
	      var none = '(\'' + _i18n2.default._t('FormField.NONE', 'None') + '\')';
	
	      return _react2.default.createElement(
	        _reactBootstrapSs.FormControl.Static,
	        this.getFieldProps(),
	        this.getValueCSV() || none
	      );
	    }
	  }]);
	
	  return LookupField;
	}(_SilverStripeComponent2.default);
	
	LookupField.propTypes = {
	  extraClass: _react2.default.PropTypes.string,
	  id: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string.isRequired,
	  source: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	    title: _react2.default.PropTypes.any,
	    disabled: _react2.default.PropTypes.bool
	  })),
	  value: _react2.default.PropTypes.any
	};
	
	LookupField.defaultProps = {
	  extraClass: '',
	  className: '',
	  value: []
	};
	
	exports.LookupField = LookupField;
	exports.default = (0, _FieldHolder2.default)(LookupField);

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _castStringToElement = __webpack_require__(59);
	
	var _castStringToElement2 = _interopRequireDefault(_castStringToElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CompositeField = function (_SilverStripeComponen) {
	  _inherits(CompositeField, _SilverStripeComponen);
	
	  function CompositeField() {
	    _classCallCheck(this, CompositeField);
	
	    return _possibleConstructorReturn(this, (CompositeField.__proto__ || Object.getPrototypeOf(CompositeField)).apply(this, arguments));
	  }
	
	  _createClass(CompositeField, [{
	    key: 'getLegend',
	    value: function getLegend() {
	      if (this.props.data.tag === 'fieldset' && this.props.data.legend) {
	        return (0, _castStringToElement2.default)('legend', this.props.data.legend);
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var legend = this.getLegend();
	      var Tag = this.props.data.tag || 'div';
	      var className = this.props.className + ' ' + this.props.extraClass;
	
	      return _react2.default.createElement(
	        Tag,
	        { className: className },
	        legend,
	        this.props.children
	      );
	    }
	  }]);
	
	  return CompositeField;
	}(_SilverStripeComponent2.default);
	
	CompositeField.propTypes = {
	  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.shape({
	    tag: _react2.default.PropTypes.string,
	    legend: _react2.default.PropTypes.string
	  })]),
	  extraClass: _react2.default.PropTypes.string
	};
	
	CompositeField.defaultProps = {
	  className: '',
	  extraClass: ''
	};
	
	exports.default = CompositeField;

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _reactBootstrapSs = __webpack_require__(37);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tabs = function (_SilverStripeComponen) {
	  _inherits(Tabs, _SilverStripeComponen);
	
	  function Tabs() {
	    _classCallCheck(this, Tabs);
	
	    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
	  }
	
	  _createClass(Tabs, [{
	    key: 'getContainerProps',
	    value: function getContainerProps() {
	      var _props = this.props;
	      var activeKey = _props.activeKey;
	      var onSelect = _props.onSelect;
	      var className = _props.className;
	      var extraClass = _props.extraClass;
	      var id = _props.id;
	
	      var combinedClassName = className + ' ' + extraClass;
	
	      return {
	        activeKey: activeKey,
	        className: combinedClassName,
	        defaultActiveKey: this.getDefaultActiveKey(),
	        onSelect: onSelect,
	        id: id
	      };
	    }
	  }, {
	    key: 'getDefaultActiveKey',
	    value: function getDefaultActiveKey() {
	      var _this2 = this;
	
	      var active = null;
	
	      if (typeof this.props.defaultActiveKey === 'string') {
	        var activeChild = _react2.default.Children.toArray(this.props.children).find(function (child) {
	          return child.props.name === _this2.props.defaultActiveKey;
	        });
	
	        if (activeChild) {
	          active = activeChild.props.name;
	        }
	      }
	
	      if (typeof active !== 'string') {
	        _react2.default.Children.forEach(this.props.children, function (child) {
	          if (typeof active !== 'string') {
	            active = child.props.name;
	          }
	        });
	      }
	
	      return active;
	    }
	  }, {
	    key: 'renderTab',
	    value: function renderTab(child) {
	      if (child.props.title === null) {
	        return null;
	      }
	      return _react2.default.createElement(
	        _reactBootstrapSs.NavItem,
	        { eventKey: child.props.name,
	          disabled: child.props.disabled,
	          className: child.props.tabClassName
	        },
	        child.props.title
	      );
	    }
	  }, {
	    key: 'renderNav',
	    value: function renderNav() {
	      var tabs = _react2.default.Children.map(this.props.children, this.renderTab);
	
	      if (tabs.length <= 1) {
	        return null;
	      }
	
	      return _react2.default.createElement(
	        _reactBootstrapSs.Nav,
	        { bsStyle: this.props.bsStyle, role: 'tablist' },
	        tabs
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var containerProps = this.getContainerProps();
	      var nav = this.renderNav();
	
	      return _react2.default.createElement(
	        _reactBootstrapSs.Tab.Container,
	        containerProps,
	        _react2.default.createElement(
	          'div',
	          { className: 'wrapper' },
	          nav,
	          _react2.default.createElement(
	            _reactBootstrapSs.Tab.Content,
	            { animation: this.props.animation },
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);
	
	  return Tabs;
	}(_SilverStripeComponent2.default);
	
	Tabs.propTypes = {
	  id: _react2.default.PropTypes.string.isRequired,
	  defaultActiveKey: _react2.default.PropTypes.string,
	  extraClass: _react2.default.PropTypes.string
	};
	
	Tabs.defaultProps = {
	  bsStyle: 'tabs',
	  className: '',
	  extraClass: ''
	};
	
	exports.default = Tabs;

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _reactBootstrapSs = __webpack_require__(37);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TabItem = function (_SilverStripeComponen) {
	  _inherits(TabItem, _SilverStripeComponen);
	
	  function TabItem() {
	    _classCallCheck(this, TabItem);
	
	    return _possibleConstructorReturn(this, (TabItem.__proto__ || Object.getPrototypeOf(TabItem)).apply(this, arguments));
	  }
	
	  _createClass(TabItem, [{
	    key: 'getTabProps',
	    value: function getTabProps() {
	      var _props = this.props;
	      var name = _props.name;
	      var className = _props.className;
	      var extraClass = _props.extraClass;
	      var disabled = _props.disabled;
	      var bsClass = _props.bsClass;
	      var onEnter = _props.onEnter;
	      var onEntering = _props.onEntering;
	      var onEntered = _props.onEntered;
	      var onExit = _props.onExit;
	      var onExiting = _props.onExiting;
	      var onExited = _props.onExited;
	      var animation = _props.animation;
	      var unmountOnExit = _props.unmountOnExit;
	
	
	      return {
	        eventKey: name,
	        className: className + ' ' + extraClass,
	        disabled: disabled,
	        bsClass: bsClass,
	        onEnter: onEnter,
	        onEntering: onEntering,
	        onEntered: onEntered,
	        onExit: onExit,
	        onExiting: onExiting,
	        onExited: onExited,
	        animation: animation,
	        unmountOnExit: unmountOnExit
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var tabProps = this.getTabProps();
	      return _react2.default.createElement(
	        _reactBootstrapSs.Tab.Pane,
	        tabProps,
	        this.props.children
	      );
	    }
	  }]);
	
	  return TabItem;
	}(_SilverStripeComponent2.default);
	
	TabItem.propTypes = {
	  name: _react2.default.PropTypes.string.isRequired,
	  extraClass: _react2.default.PropTypes.string,
	  tabClassName: _react2.default.PropTypes.string
	};
	
	TabItem.defaultProps = {
	  className: '',
	  extraClass: ''
	};
	
	exports.default = TabItem;

/***/ },
/* 374 */
/***/ function(module, exports) {

	module.exports = FormAction;

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactRouter = __webpack_require__(64);
	
	var _Config = __webpack_require__(69);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	var _ReactRouteRegister = __webpack_require__(344);
	
	var _ReactRouteRegister2 = _interopRequireDefault(_ReactRouteRegister);
	
	var _CampaignAdmin = __webpack_require__(376);
	
	var _CampaignAdmin2 = _interopRequireDefault(_CampaignAdmin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', function () {
	  var sectionConfig = _Config2.default.getSection('SilverStripe\\Admin\\CampaignAdmin');
	
	  _ReactRouteRegister2.default.add({
	    path: sectionConfig.url,
	    component: (0, _reactRouter.withRouter)(_CampaignAdmin2.default),
	    childRoutes: [{ path: ':type/:id/:view', component: _CampaignAdmin2.default }, { path: 'set/:id/:view', component: _CampaignAdmin2.default }]
	  });
	});

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(27);
	
	var _redux = __webpack_require__(28);
	
	var _reactRouter = __webpack_require__(64);
	
	var _Backend = __webpack_require__(33);
	
	var _Backend2 = _interopRequireDefault(_Backend);
	
	var _BreadcrumbsActions = __webpack_require__(377);
	
	var breadcrumbsActions = _interopRequireWildcard(_BreadcrumbsActions);
	
	var _Breadcrumb = __webpack_require__(378);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _FormAction = __webpack_require__(374);
	
	var _FormAction2 = _interopRequireDefault(_FormAction);
	
	var _i18n = __webpack_require__(94);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	var _Toolbar = __webpack_require__(379);
	
	var _Toolbar2 = _interopRequireDefault(_Toolbar);
	
	var _FormBuilder = __webpack_require__(38);
	
	var _FormBuilder2 = _interopRequireDefault(_FormBuilder);
	
	var _CampaignAdminList = __webpack_require__(380);
	
	var _CampaignAdminList2 = _interopRequireDefault(_CampaignAdminList);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CampaignAdmin = function (_SilverStripeComponen) {
	  _inherits(CampaignAdmin, _SilverStripeComponen);
	
	  function CampaignAdmin(props) {
	    _classCallCheck(this, CampaignAdmin);
	
	    var _this = _possibleConstructorReturn(this, (CampaignAdmin.__proto__ || Object.getPrototypeOf(CampaignAdmin)).call(this, props));
	
	    _this.publishApi = _Backend2.default.createEndpointFetcher({
	      url: _this.props.sectionConfig.publishEndpoint.url,
	      method: _this.props.sectionConfig.publishEndpoint.method,
	      defaultData: { SecurityID: _this.props.securityId },
	      payloadSchema: {
	        id: { urlReplacement: ':id', remove: true }
	      }
	    });
	    _this.handleBackButtonClick = _this.handleBackButtonClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(CampaignAdmin, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (this.props.breadcrumbs.length === 0) {
	        this.setBreadcrumbs(this.props.params.view, this.props.params.id);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      var hasChangedRoute = this.props.params.id !== props.params.id || this.props.params.view !== props.params.view;
	      if (hasChangedRoute) {
	        this.setBreadcrumbs(props.params.view, props.params.id);
	      }
	    }
	  }, {
	    key: 'setBreadcrumbs',
	    value: function setBreadcrumbs(view, id) {
	      var breadcrumbs = [{
	        text: _i18n2.default._t('Campaigns.CAMPAIGN', 'Campaigns'),
	        href: this.props.sectionConfig.url
	      }];
	      switch (view) {
	        case 'show':
	          break;
	        case 'edit':
	          breadcrumbs.push({
	            text: _i18n2.default._t('Campaigns.EDIT_CAMPAIGN', 'Editing Campaign'),
	            href: this.getActionRoute(id, view)
	          });
	          break;
	        case 'create':
	          breadcrumbs.push({
	            text: _i18n2.default._t('Campaigns.ADD_CAMPAIGN', 'Add Campaign'),
	            href: this.getActionRoute(id, view)
	          });
	          break;
	        default:
	          break;
	      }
	
	      this.props.breadcrumbsActions.setBreadcrumbs(breadcrumbs);
	    }
	  }, {
	    key: 'handleBackButtonClick',
	    value: function handleBackButtonClick(event) {
	      if (this.props.breadcrumbs.length > 1) {
	        var last = this.props.breadcrumbs[this.props.breadcrumbs.length - 2];
	        if (last && last.href) {
	          event.preventDefault();
	          this.props.router.push(last.href);
	          return;
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var view = null;
	
	      switch (this.props.params.view) {
	        case 'show':
	          view = this.renderItemListView();
	          break;
	        case 'edit':
	          view = this.renderDetailEditView();
	          break;
	        case 'create':
	          view = this.renderCreateView();
	          break;
	        default:
	          view = this.renderIndexView();
	      }
	
	      return view;
	    }
	  }, {
	    key: 'renderIndexView',
	    value: function renderIndexView() {
	      var schemaUrl = this.props.sectionConfig.form.EditForm.schemaUrl;
	      var formActionProps = {
	        title: _i18n2.default._t('Campaigns.ADDCAMPAIGN'),
	        icon: 'plus',
	        handleClick: this.addCampaign.bind(this)
	      };
	      var formBuilderProps = {
	        createFn: this.campaignListCreateFn.bind(this),
	        schemaUrl: schemaUrl
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'fill-height cms-campaigns', 'aria-expanded': 'true' },
	        _react2.default.createElement(
	          _Toolbar2.default,
	          null,
	          _react2.default.createElement(_Breadcrumb2.default, { multiline: true, crumbs: this.props.breadcrumbs })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'panel panel--padded panel--scrollable flexbox-area-grow' },
	          _react2.default.createElement(
	            'div',
	            { className: 'toolbar toolbar--content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'btn-toolbar' },
	              _react2.default.createElement(_FormAction2.default, formActionProps)
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'campaign-admin' },
	            _react2.default.createElement(_FormBuilder2.default, formBuilderProps)
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderItemListView',
	    value: function renderItemListView() {
	      var props = {
	        sectionConfig: this.props.sectionConfig,
	        campaignId: this.props.params.id,
	        itemListViewEndpoint: this.props.sectionConfig.itemListViewEndpoint,
	        publishApi: this.publishApi,
	        handleBackButtonClick: this.handleBackButtonClick.bind(this)
	      };
	
	      return _react2.default.createElement(_CampaignAdminList2.default, props);
	    }
	  }, {
	    key: 'renderDetailEditView',
	    value: function renderDetailEditView() {
	      var baseSchemaUrl = this.props.sectionConfig.form.DetailEditForm.schemaUrl;
	      var schemaUrl = baseSchemaUrl;
	      if (this.props.params.id > 0) {
	        schemaUrl = baseSchemaUrl + '/' + this.props.params.id;
	      }
	      var formBuilderProps = {
	        createFn: this.campaignEditCreateFn.bind(this),
	        schemaUrl: schemaUrl
	      };
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Toolbar2.default,
	          { showBackButton: true, handleBackButtonClick: this.handleBackButtonClick },
	          _react2.default.createElement(_Breadcrumb2.default, { multiline: true, crumbs: this.props.breadcrumbs })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'panel panel--padded panel--scrollable flexbox-area-grow form--inline' },
	          _react2.default.createElement(_FormBuilder2.default, formBuilderProps)
	        )
	      );
	    }
	  }, {
	    key: 'renderCreateView',
	    value: function renderCreateView() {
	      var baseSchemaUrl = this.props.sectionConfig.form.DetailEditForm.schemaUrl;
	      var schemaUrl = baseSchemaUrl;
	      if (this.props.params.id > 0) {
	        schemaUrl = baseSchemaUrl + '/' + this.props.params.id;
	      }
	      var formBuilderProps = {
	        createFn: this.campaignAddCreateFn.bind(this),
	        schemaUrl: schemaUrl
	      };
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Toolbar2.default,
	          { showBackButton: true, handleBackButtonClick: this.handleBackButtonClick },
	          _react2.default.createElement(_Breadcrumb2.default, { multiline: true, crumbs: this.props.breadcrumbs })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'panel panel--padded panel--scrollable flexbox-area-grow form--inline' },
	          _react2.default.createElement(_FormBuilder2.default, formBuilderProps)
	        )
	      );
	    }
	  }, {
	    key: 'campaignEditCreateFn',
	    value: function campaignEditCreateFn(Component, props) {
	      var _this2 = this;
	
	      var url = this.props.sectionConfig.url;
	
	      if (props.name === 'action_cancel') {
	        var extendedProps = _extends({}, props, {
	          handleClick: function handleClick(event) {
	            event.preventDefault();
	            _this2.props.router.push(url);
	          }
	        });
	
	        return _react2.default.createElement(Component, _extends({ key: props.id }, extendedProps));
	      }
	
	      return _react2.default.createElement(Component, _extends({ key: props.id }, props));
	    }
	  }, {
	    key: 'campaignAddCreateFn',
	    value: function campaignAddCreateFn(Component, props) {
	      var _this3 = this;
	
	      var url = this.props.sectionConfig.url;
	
	      if (props.name === 'action_cancel') {
	        var extendedProps = _extends({}, props, {
	          handleClick: function handleClick(event) {
	            event.preventDefault();
	            _this3.props.router.push(url);
	          }
	        });
	
	        return _react2.default.createElement(Component, _extends({ key: props.name }, extendedProps));
	      }
	
	      return _react2.default.createElement(Component, _extends({ key: props.name }, props));
	    }
	  }, {
	    key: 'campaignListCreateFn',
	    value: function campaignListCreateFn(Component, props) {
	      var _this4 = this;
	
	      var sectionUrl = this.props.sectionConfig.url;
	      var typeUrlParam = 'set';
	
	      if (props.component === 'GridField') {
	        var extendedProps = _extends({}, props, {
	          data: _extends({}, props.data, {
	            handleDrillDown: function handleDrillDown(event, record) {
	              _this4.props.router.push(sectionUrl + '/' + typeUrlParam + '/' + record.ID + '/show');
	            },
	            handleEditRecord: function handleEditRecord(event, id) {
	              _this4.props.router.push(sectionUrl + '/' + typeUrlParam + '/' + id + '/edit');
	            }
	          })
	        });
	
	        return _react2.default.createElement(Component, _extends({ key: extendedProps.name }, extendedProps));
	      }
	
	      return _react2.default.createElement(Component, _extends({ key: props.name }, props));
	    }
	  }, {
	    key: 'addCampaign',
	    value: function addCampaign() {
	      var path = this.getActionRoute(0, 'create');
	      this.props.router.push(path);
	    }
	  }, {
	    key: 'getActionRoute',
	    value: function getActionRoute(id, view) {
	      return this.props.sectionConfig.url + '/set/' + id + '/' + view;
	    }
	  }]);
	
	  return CampaignAdmin;
	}(_SilverStripeComponent2.default);
	
	CampaignAdmin.propTypes = {
	  breadcrumbsActions: _react2.default.PropTypes.object.isRequired,
	  campaignId: _react2.default.PropTypes.string,
	  sectionConfig: _react2.default.PropTypes.object.isRequired,
	  securityId: _react2.default.PropTypes.string.isRequired,
	  view: _react2.default.PropTypes.string
	};
	
	function mapStateToProps(state) {
	  return {
	    config: state.config,
	    campaignId: state.campaign.campaignId,
	    view: state.campaign.view,
	    breadcrumbs: state.breadcrumbs,
	    sectionConfig: state.config.sections['SilverStripe\\Admin\\CampaignAdmin'],
	    securityId: state.config.SecurityID
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return {
	    breadcrumbsActions: (0, _redux.bindActionCreators)(breadcrumbsActions, dispatch)
	  };
	}
	
	exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CampaignAdmin));

/***/ },
/* 377 */
/***/ function(module, exports) {

	module.exports = BreadcrumbsActions;

/***/ },
/* 378 */
/***/ function(module, exports) {

	module.exports = Breadcrumb;

/***/ },
/* 379 */
/***/ function(module, exports) {

	module.exports = Toolbar;

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(28);
	
	var _reactRedux = __webpack_require__(27);
	
	var _BreadcrumbsActions = __webpack_require__(377);
	
	var breadcrumbsActions = _interopRequireWildcard(_BreadcrumbsActions);
	
	var _RecordsActions = __webpack_require__(47);
	
	var recordActions = _interopRequireWildcard(_RecordsActions);
	
	var _CampaignActions = __webpack_require__(381);
	
	var campaignActions = _interopRequireWildcard(_CampaignActions);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _Accordion = __webpack_require__(382);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _AccordionBlock = __webpack_require__(383);
	
	var _AccordionBlock2 = _interopRequireDefault(_AccordionBlock);
	
	var _ListGroupItem = __webpack_require__(385);
	
	var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);
	
	var _Toolbar = __webpack_require__(379);
	
	var _Toolbar2 = _interopRequireDefault(_Toolbar);
	
	var _FormAction = __webpack_require__(374);
	
	var _FormAction2 = _interopRequireDefault(_FormAction);
	
	var _CampaignAdminItem = __webpack_require__(386);
	
	var _CampaignAdminItem2 = _interopRequireDefault(_CampaignAdminItem);
	
	var _Breadcrumb = __webpack_require__(378);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _Preview = __webpack_require__(387);
	
	var _Preview2 = _interopRequireDefault(_Preview);
	
	var _i18n = __webpack_require__(94);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CampaignAdminList = function (_SilverStripeComponen) {
	  _inherits(CampaignAdminList, _SilverStripeComponen);
	
	  function CampaignAdminList(props) {
	    _classCallCheck(this, CampaignAdminList);
	
	    var _this = _possibleConstructorReturn(this, (CampaignAdminList.__proto__ || Object.getPrototypeOf(CampaignAdminList)).call(this, props));
	
	    _this.handlePublish = _this.handlePublish.bind(_this);
	    _this.handleItemSelected = _this.handleItemSelected.bind(_this);
	    _this.setBreadcrumbs = _this.setBreadcrumbs.bind(_this);
	    return _this;
	  }
	
	  _createClass(CampaignAdminList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var fetchURL = this.props.itemListViewEndpoint.url.replace(/:id/, this.props.campaignId);
	      _get(CampaignAdminList.prototype.__proto__ || Object.getPrototypeOf(CampaignAdminList.prototype), 'componentDidMount', this).call(this);
	      this.setBreadcrumbs();
	
	      if (!Object.keys(this.props.record).length) {
	        this.props.recordActions.fetchRecord(this.props.treeClass, 'get', fetchURL).then(this.setBreadcrumbs);
	      }
	    }
	  }, {
	    key: 'setBreadcrumbs',
	    value: function setBreadcrumbs() {
	      if (!this.props.record) {
	        return;
	      }
	
	      var breadcrumbs = [{
	        text: _i18n2.default._t('Campaigns.CAMPAIGN', 'Campaigns'),
	        href: this.props.sectionConfig.url
	      }];
	      breadcrumbs.push({
	        text: this.props.record.Name,
	        href: this.props.sectionConfig.url + '/set/' + this.props.campaignId + '/show'
	      });
	
	      this.props.breadcrumbsActions.setBreadcrumbs(breadcrumbs);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var itemId = this.props.campaign.changeSetItemId;
	      var itemLinks = null;
	      var campaignId = this.props.campaignId;
	      var campaign = this.props.record;
	
	      var itemGroups = this.groupItemsForSet();
	
	      var accordionBlocks = [];
	
	      Object.keys(itemGroups).forEach(function (className) {
	        var group = itemGroups[className];
	        var groupCount = group.items.length;
	
	        var listGroupItems = [];
	        var title = groupCount + ' ' + (groupCount === 1 ? group.singular : group.plural);
	        var groupid = 'Set_' + campaignId + '_Group_' + className;
	
	        group.items.forEach(function (item) {
	          if (!itemId) {
	            itemId = item.ID;
	          }
	          var selected = itemId === item.ID;
	
	          if (selected && item._links) {
	            itemLinks = item._links;
	          }
	
	          var itemClassNames = [];
	          if (item.ChangeType === 'none' || campaign.State === 'published') {
	            itemClassNames.push('list-group-item--inactive');
	          }
	          if (selected) {
	            itemClassNames.push('active');
	          }
	
	          listGroupItems.push(_react2.default.createElement(
	            _ListGroupItem2.default,
	            {
	              key: item.ID,
	              className: itemClassNames.join(' '),
	              handleClick: _this2.handleItemSelected,
	              handleClickArg: item.ID
	            },
	            _react2.default.createElement(_CampaignAdminItem2.default, { item: item, campaign: _this2.props.record })
	          ));
	        });
	
	        accordionBlocks.push(_react2.default.createElement(
	          _AccordionBlock2.default,
	          { key: groupid, groupid: groupid, title: title },
	          listGroupItems
	        ));
	      });
	
	      var pagesLink = [this.props.config.baseUrl, this.props.config.sections['SilverStripe\\CMS\\Controllers\\CMSPagesController'].url].join('/');
	      var body = accordionBlocks.length ? _react2.default.createElement(
	        _Accordion2.default,
	        null,
	        accordionBlocks
	      ) : _react2.default.createElement(
	        'div',
	        { className: 'alert alert-warning', role: 'alert' },
	        _react2.default.createElement(
	          'strong',
	          null,
	          'This campaign is empty.'
	        ),
	        ' You can add pages by selecting',
	        ' ',
	        _react2.default.createElement(
	          'em',
	          null,
	          'Add to campaign'
	        ),
	        ' from within the ',
	        _react2.default.createElement(
	          'em',
	          null,
	          'More Options'
	        ),
	        ' popup on',
	        ' ',
	        'the ',
	        _react2.default.createElement(
	          'a',
	          { href: pagesLink },
	          'edit page screen'
	        ),
	        '.'
	      );
	      var bodyClass = ['panel', 'panel--padded', 'panel--scrollable', 'flexbox-area-grow', 'campaign-items'];
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'fill-width campaigns' },
	        _react2.default.createElement(
	          'div',
	          { className: 'fill-height campaign-items cms-content__left cms-campaigns',
	            'aria-expanded': 'true'
	          },
	          _react2.default.createElement(
	            _Toolbar2.default,
	            { showBackButton: true, handleBackButtonClick: this.props.handleBackButtonClick },
	            _react2.default.createElement(_Breadcrumb2.default, { multiline: true, crumbs: this.props.breadcrumbs })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: bodyClass.join(' ') },
	            body
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'toolbar toolbar--south' },
	            this.renderButtonToolbar()
	          )
	        ),
	        _react2.default.createElement(_Preview2.default, { itemLinks: itemLinks, itemId: itemId })
	      );
	    }
	  }, {
	    key: 'handleItemSelected',
	    value: function handleItemSelected(event, itemId) {
	      this.props.campaignActions.selectChangeSetItem(itemId);
	    }
	  }, {
	    key: 'renderButtonToolbar',
	    value: function renderButtonToolbar() {
	      var items = this.getItems();
	
	      if (!items || !items.length) {
	        return _react2.default.createElement('div', { className: 'btn-toolbar' });
	      }
	
	      var actionProps = {};
	
	      if (this.props.record.State === 'open') {
	        actionProps = _extends(actionProps, {
	          title: _i18n2.default._t('Campaigns.PUBLISHCAMPAIGN'),
	          bootstrapButtonStyle: 'primary',
	          loading: this.props.campaign.isPublishing,
	          handleClick: this.handlePublish,
	          icon: 'rocket'
	        });
	      } else if (this.props.record.State === 'published') {
	        actionProps = _extends(actionProps, {
	          title: _i18n2.default._t('Campaigns.REVERTCAMPAIGN'),
	          bootstrapButtonStyle: 'default',
	          icon: 'back-in-time',
	          disabled: true
	        });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'btn-toolbar' },
	        _react2.default.createElement(_FormAction2.default, actionProps)
	      );
	    }
	  }, {
	    key: 'getItems',
	    value: function getItems() {
	      if (this.props.record && this.props.record._embedded) {
	        return this.props.record._embedded.items;
	      }
	
	      return null;
	    }
	  }, {
	    key: 'groupItemsForSet',
	    value: function groupItemsForSet() {
	      var groups = {};
	      var items = this.getItems();
	      if (!items) {
	        return groups;
	      }
	
	      items.forEach(function (item) {
	        var classname = item.BaseClass;
	
	        if (!groups[classname]) {
	          groups[classname] = {
	            singular: item.Singular,
	            plural: item.Plural,
	            items: []
	          };
	        }
	
	        groups[classname].items.push(item);
	      });
	
	      return groups;
	    }
	  }, {
	    key: 'handlePublish',
	    value: function handlePublish(e) {
	      e.preventDefault();
	      this.props.campaignActions.publishCampaign(this.props.publishApi, this.props.treeClass, this.props.campaignId);
	    }
	  }]);
	
	  return CampaignAdminList;
	}(_SilverStripeComponent2.default);
	
	CampaignAdminList.propTypes = {
	  campaign: _react2.default.PropTypes.shape({
	    isPublishing: _react2.default.PropTypes.bool.isRequired,
	    changeSetItemId: _react2.default.PropTypes.number
	  }),
	  breadcrumbsActions: _react2.default.PropTypes.object.isRequired,
	  campaignActions: _react2.default.PropTypes.object.isRequired,
	  publishApi: _react2.default.PropTypes.func.isRequired,
	  record: _react2.default.PropTypes.object.isRequired,
	  recordActions: _react2.default.PropTypes.object.isRequired,
	  sectionConfig: _react2.default.PropTypes.object.isRequired,
	  handleBackButtonClick: _react2.default.PropTypes.func
	};
	
	function mapStateToProps(state, ownProps) {
	  var record = null;
	  var treeClass = ownProps.sectionConfig.treeClass;
	  if (state.records && state.records[treeClass] && ownProps.campaignId) {
	    record = state.records[treeClass][parseInt(ownProps.campaignId, 10)];
	  }
	  return {
	    config: state.config,
	    record: record || {},
	    campaign: state.campaign,
	    treeClass: treeClass,
	    breadcrumbs: state.breadcrumbs
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return {
	    breadcrumbsActions: (0, _redux.bindActionCreators)(breadcrumbsActions, dispatch),
	    recordActions: (0, _redux.bindActionCreators)(recordActions, dispatch),
	    campaignActions: (0, _redux.bindActionCreators)(campaignActions, dispatch)
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CampaignAdminList);

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.selectChangeSetItem = selectChangeSetItem;
	exports.showCampaignView = showCampaignView;
	exports.publishCampaign = publishCampaign;
	
	var _CampaignActionTypes = __webpack_require__(356);
	
	var _CampaignActionTypes2 = _interopRequireDefault(_CampaignActionTypes);
	
	var _RecordsActionTypes = __webpack_require__(48);
	
	var _RecordsActionTypes2 = _interopRequireDefault(_RecordsActionTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function selectChangeSetItem(changeSetItemId) {
	  return {
	    type: _CampaignActionTypes2.default.SET_CAMPAIGN_SELECTED_CHANGESETITEM,
	    payload: { changeSetItemId: changeSetItemId }
	  };
	}
	
	function showCampaignView(campaignId, view) {
	  return function (dispatch) {
	    dispatch({
	      type: _CampaignActionTypes2.default.SET_CAMPAIGN_ACTIVE_CHANGESET,
	      payload: { campaignId: campaignId, view: view }
	    });
	  };
	}
	
	function publishCampaign(publishApi, recordType, campaignId) {
	  return function (dispatch) {
	    dispatch({
	      type: _CampaignActionTypes2.default.PUBLISH_CAMPAIGN_REQUEST,
	      payload: { campaignId: campaignId }
	    });
	
	    publishApi({ id: campaignId }).then(function (data) {
	      dispatch({
	        type: _CampaignActionTypes2.default.PUBLISH_CAMPAIGN_SUCCESS,
	        payload: { campaignId: campaignId }
	      });
	      dispatch({
	        type: _RecordsActionTypes2.default.FETCH_RECORD_SUCCESS,
	        payload: { recordType: recordType, data: data }
	      });
	    }).catch(function (error) {
	      dispatch({
	        type: _CampaignActionTypes2.default.PUBLISH_CAMPAIGN_FAILURE,
	        payload: { error: error }
	      });
	    });
	  };
	}

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Accordion = function (_SilverStripeComponen) {
	  _inherits(Accordion, _SilverStripeComponen);
	
	  function Accordion() {
	    _classCallCheck(this, Accordion);
	
	    return _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
	  }
	
	  _createClass(Accordion, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'accordion',
	          role: 'tablist',
	          'aria-multiselectable': 'true'
	        },
	        this.props.children
	      );
	    }
	  }]);
	
	  return Accordion;
	}(_SilverStripeComponent2.default);
	
	exports.default = Accordion;

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	__webpack_require__(384);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AccordionBlock = function (_SilverStripeComponen) {
	  _inherits(AccordionBlock, _SilverStripeComponen);
	
	  function AccordionBlock() {
	    _classCallCheck(this, AccordionBlock);
	
	    return _possibleConstructorReturn(this, (AccordionBlock.__proto__ || Object.getPrototypeOf(AccordionBlock)).apply(this, arguments));
	  }
	
	  _createClass(AccordionBlock, [{
	    key: 'render',
	    value: function render() {
	      var headerID = this.props.groupid + '_Header';
	      var listID = this.props.groupid + '_Items';
	      var href = '#' + listID;
	      var groupProps = {
	        id: listID,
	        'aria-expanded': true,
	        className: 'list-group list-group-flush collapse in',
	        role: 'tabpanel',
	        'aria-labelledby': headerID
	      };
	      return _react2.default.createElement(
	        'div',
	        { className: 'accordion__block' },
	        _react2.default.createElement(
	          'a',
	          { className: 'accordion__title',
	            'data-toggle': 'collapse',
	            href: href,
	            'aria-expanded': 'true',
	            'aria-controls': listID,
	            id: headerID,
	            role: 'tab'
	          },
	          this.props.title
	        ),
	        _react2.default.createElement(
	          'div',
	          groupProps,
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return AccordionBlock;
	}(_SilverStripeComponent2.default);
	
	exports.default = AccordionBlock;

/***/ },
/* 384 */
/***/ function(module, exports) {

	module.exports = BootstrapCollapse;

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ListGroupItem = function (_SilverStripeComponen) {
	  _inherits(ListGroupItem, _SilverStripeComponen);
	
	  function ListGroupItem(props) {
	    _classCallCheck(this, ListGroupItem);
	
	    var _this = _possibleConstructorReturn(this, (ListGroupItem.__proto__ || Object.getPrototypeOf(ListGroupItem)).call(this, props));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(ListGroupItem, [{
	    key: 'render',
	    value: function render() {
	      var className = 'list-group-item ' + this.props.className;
	      return _react2.default.createElement(
	        'a',
	        { tabIndex: '0', className: className, onClick: this.handleClick },
	        this.props.children
	      );
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      if (this.props.handleClick) {
	        this.props.handleClick(event, this.props.handleClickArg);
	      }
	    }
	  }]);
	
	  return ListGroupItem;
	}(_SilverStripeComponent2.default);
	
	ListGroupItem.propTypes = {
	  handleClickArg: _react2.default.PropTypes.any,
	  handleClick: _react2.default.PropTypes.func
	};
	
	exports.default = ListGroupItem;

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	var _i18n = __webpack_require__(94);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CampaignAdminItem = function (_SilverStripeComponen) {
	  _inherits(CampaignAdminItem, _SilverStripeComponen);
	
	  function CampaignAdminItem() {
	    _classCallCheck(this, CampaignAdminItem);
	
	    return _possibleConstructorReturn(this, (CampaignAdminItem.__proto__ || Object.getPrototypeOf(CampaignAdminItem)).apply(this, arguments));
	  }
	
	  _createClass(CampaignAdminItem, [{
	    key: 'render',
	    value: function render() {
	      var thumbnail = null;
	      var badge = {};
	      var item = this.props.item;
	      var campaign = this.props.campaign;
	
	      if (campaign.State === 'open') {
	        switch (item.ChangeType) {
	          case 'created':
	            badge.className = 'label label-warning list-group-item__status';
	            badge.Title = _i18n2.default._t('CampaignItem.DRAFT', 'Draft');
	            break;
	          case 'modified':
	            badge.className = 'label label-warning list-group-item__status';
	            badge.Title = _i18n2.default._t('CampaignItem.MODIFIED', 'Modified');
	            break;
	          case 'deleted':
	            badge.className = 'label label-error list-group-item__status';
	            badge.Title = _i18n2.default._t('CampaignItem.REMOVED', 'Removed');
	            break;
	          case 'none':
	          default:
	            badge.className = 'label label-success list-group-item__status';
	            badge.Title = _i18n2.default._t('CampaignItem.NO_CHANGES', 'No changes');
	            break;
	        }
	      }
	
	      var links = _react2.default.createElement(
	        'span',
	        {
	          className: 'list-group-item__info campaign-admin__item-links--has-links font-icon-link'
	        },
	        '3 linked items'
	      );
	
	      if (item.Thumbnail) {
	        thumbnail = _react2.default.createElement(
	          'span',
	          { className: 'list-group-item__thumbnail' },
	          _react2.default.createElement('img', { alt: item.Title, src: item.Thumbnail })
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        thumbnail,
	        _react2.default.createElement(
	          'h4',
	          { className: 'list-group-item-heading' },
	          item.Title
	        ),
	        _react2.default.createElement('span', {
	          className: 'list-group-item__info campaign-admin__item-links--is-linked font-icon-link'
	        }),
	        links,
	        badge.className && badge.Title && _react2.default.createElement(
	          'span',
	          { className: badge.className },
	          badge.Title
	        )
	      );
	    }
	  }]);
	
	  return CampaignAdminItem;
	}(_SilverStripeComponent2.default);
	
	CampaignAdminItem.propTypes = {
	  campaign: _react2.default.PropTypes.object.isRequired,
	  item: _react2.default.PropTypes.object.isRequired
	};
	
	exports.default = CampaignAdminItem;

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _i18n = __webpack_require__(94);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	var _SilverStripeComponent = __webpack_require__(20);
	
	var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Preview = function (_SilverStripeComponen) {
	  _inherits(Preview, _SilverStripeComponen);
	
	  function Preview() {
	    _classCallCheck(this, Preview);
	
	    return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(this, arguments));
	  }
	
	  _createClass(Preview, [{
	    key: 'render',
	    value: function render() {
	      var body = null;
	      var previewUrl = null;
	      var previewType = '';
	
	      if (this.props.itemLinks && this.props.itemLinks.preview) {
	        if (this.props.itemLinks.preview.Stage) {
	          previewUrl = this.props.itemLinks.preview.Stage.href;
	          previewType = this.props.itemLinks.preview.Stage.type;
	        } else if (this.props.itemLinks.preview.Live) {
	          previewUrl = this.props.itemLinks.preview.Live.href;
	          previewType = this.props.itemLinks.preview.Live.type;
	        }
	      }
	
	      var editUrl = null;
	      var editKey = 'edit';
	      var toolbarButtons = [];
	      if (this.props.itemLinks && this.props.itemLinks.edit) {
	        editUrl = this.props.itemLinks.edit.href;
	        toolbarButtons.push(_react2.default.createElement(
	          'a',
	          { key: editKey, href: editUrl, className: 'btn btn-secondary-outline font-icon-edit' },
	          _react2.default.createElement(
	            'span',
	            { className: 'btn__title' },
	            _i18n2.default._t('Preview.EDIT', 'Edit')
	          )
	        ));
	      }
	
	      if (!this.props.itemId) {
	        body = _react2.default.createElement(
	          'div',
	          { className: 'preview__overlay' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'preview__overlay-text' },
	            'No preview available.'
	          )
	        );
	      } else if (!previewUrl) {
	        body = _react2.default.createElement(
	          'div',
	          { className: 'preview__overlay' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'preview__overlay-text' },
	            'There is no preview available for this item.'
	          )
	        );
	      } else if (previewType && previewType.indexOf('image/') === 0) {
	        body = _react2.default.createElement(
	          'div',
	          { className: 'preview__file-container panel--scrollable' },
	          _react2.default.createElement('img', { alt: previewUrl, className: 'preview__file--fits-space', src: previewUrl })
	        );
	      } else {
	        body = _react2.default.createElement('iframe', { className: 'flexbox-area-grow preview__iframe', src: previewUrl });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'flexbox-area-grow fill-height cms-content__right preview' },
	        body,
	        _react2.default.createElement('a', { href: '', className: 'cms-content__back-btn font-icon-left-open-big' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'toolbar toolbar--south' },
	          _react2.default.createElement(
	            'div',
	            { className: 'btn-toolbar' },
	            toolbarButtons
	          )
	        )
	      );
	    }
	  }]);
	
	  return Preview;
	}(_SilverStripeComponent2.default);
	
	Preview.propTypes = {
	  itemLinks: _react2.default.PropTypes.object,
	  itemId: _react2.default.PropTypes.number
	};
	
	exports.default = Preview;

/***/ }
]);
//# sourceMappingURL=bundle.js.map