(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(global) {'use strict';

  global.React = __webpack_require__(1);
  global.ReactDOM = __webpack_require__(38);
  global.ReactDOMServer = __webpack_require__(39);

  var Components = __webpack_require__(19);
  /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  if (true) {
    module.exports = __webpack_require__(41);
  } else {
    module.exports = require('./cjs/react.development.js');
  }


/***/ },
/* 2 */
/***/ function(module, exports) {

  "use strict";

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

  function makeEmptyFunction(arg) {
    return function () {
      return arg;
    };
  }

  /**
   * This function accepts and discards inputs; it has no side effects. This is
   * primarily useful idiomatically for overridable function endpoints which
   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
   */
  var emptyFunction = function emptyFunction() {};

  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function () {
    return this;
  };
  emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
  };

  module.exports = emptyFunction;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
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

  var validateFormat = function validateFormat(format) {};

  if (false) {
    validateFormat = function validateFormat(format) {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    };
  }

  function invariant(condition, format, a, b, c, d, e, f) {
    validateFormat(format);

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  }

  module.exports = invariant;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  if (false) {
    var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
      Symbol.for &&
      Symbol.for('react.element')) ||
      0xeac7;

    var isValidElement = function(object) {
      return typeof object === 'object' &&
        object !== null &&
        object.$$typeof === REACT_ELEMENT_TYPE;
    };

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = __webpack_require__(34)();
  }


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.events = undefined;
  exports.debounce = debounce;

  var _EventChannel = __webpack_require__(15);

  var _EventChannel2 = _interopRequireDefault(_EventChannel);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var events = exports.events = new _EventChannel2.default();

  function debounce(callback, delay, context) {
      var timeout = null;
      return function () {
          if (timeout) clearTimeout(timeout);

          var args = arguments;
          timeout = setTimeout(function () {
              callback.apply(context || null, args);
              timeout = null;
          }, delay | 0);
      };
  }

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  'use strict';

  var emptyObject = {};

  if (false) {
    Object.freeze(emptyObject);
  }

  module.exports = emptyObject;

/***/ },
/* 7 */
/***/ function(module, exports) {

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */

  'use strict';
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };


/***/ },
/* 8 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = api;
  var APIActions = exports.APIActions = Object.freeze({
      SEARCH: 'Search',
      GET_USER: 'GetUser'
  });

  function api(action, data) {

      var xhr = new XMLHttpRequest();

      // Default method
      var method = 'GET';

      // Default expected status
      var expectedStatus = 200;

      // Default request header
      var requestHeaderKey = 'Content-type';
      var requestHeaderValue = 'application/json';

      var params = null;
      var url = void 0;

      switch (action) {

          case APIActions.SEARCH:
              url = '/Home/Search/?text=' + data;
              break;

          case APIActions.GET_USER:
              url = '/Home/User/?userName=' + data;
              break;
      }

      return new Promise(function (resolve, reject) {
          xhr.open(method, url, true);
          xhr.setRequestHeader(requestHeaderKey, requestHeaderValue);
          xhr.onload = function () {
              if (this.status === expectedStatus) {
                  resolve(this.response);
              } else {
                  var error = new Error(this.statusText);
                  error.code = this.status;
                  reject(error);
              }
          };

          xhr.onerror = function () {
              reject(new Error('Network Error'));
          };
          xhr.send(params);
      });
  }

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
      value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _propTypes = __webpack_require__(4);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Avatar = function (_PureComponent) {
      _inherits(Avatar, _PureComponent);

      function Avatar() {
          _classCallCheck(this, Avatar);

          return _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
      }

      _createClass(Avatar, [{
          key: 'render',
          value: function render() {
              return _react2.default.createElement('img', {
                  src: this.props.picUrl,
                  alt: 'Photo of ' + this.props.name,
                  width: 50,
                  height: 50,
                  className: 'commentPhoto'
              });
          }
      }]);

      return Avatar;
  }(_react.PureComponent);

  exports.default = Avatar;


  Avatar.propTypes = {
      picUrl: _propTypes2.default.string.isRequired,
      name: _propTypes2.default.string.isRequired
  };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
      value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _propTypes = __webpack_require__(4);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Avatar = __webpack_require__(9);

  var _Avatar2 = _interopRequireDefault(_Avatar);

  var _utils = __webpack_require__(5);

  var _api = __webpack_require__(8);

  var _api2 = _interopRequireDefault(_api);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var User = function (_Component) {
      _inherits(User, _Component);

      function User() {
          var _ref;

          var _temp, _this, _ret;

          _classCallCheck(this, User);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {

              (0, _api2.default)(_api.APIActions.GET_USER, _this.props.username).then(function (response) {
                  var data = JSON.parse(response);

                  _utils.events.publish('OpenPhotos', data.items);
              }, function (error) {
                  console.log(error);
              });
          }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(User, [{
          key: 'render',
          value: function render() {
              return _react2.default.createElement(
                  'li',
                  { onClick: this.handleClick },
                  _react2.default.createElement(_Avatar2.default, { picUrl: this.props.profile_pic_url, name: this.props.full_name }),
                  _react2.default.createElement(
                      'p',
                      null,
                      this.props.username
                  ),
                  _react2.default.createElement(
                      'p',
                      null,
                      this.props.byline
                  ),
                  this.props.is_private && _react2.default.createElement(
                      'h3',
                      null,
                      ' Private '
                  ),
                  _react2.default.createElement(
                      'strong',
                      null,
                      this.props.full_name
                  )
              );
          }
      }]);

      return User;
  }(_react.Component);

  exports.default = User;


  User.propTypes = {
      full_name: _propTypes2.default.string.isRequired,
      profile_pic_url: _propTypes2.default.string.isRequired,
      username: _propTypes2.default.string.isRequired,
      byline: _propTypes2.default.string.isRequired,
      is_private: _propTypes2.default.bool.isRequired
  };

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
    Copyright (c) 2016 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {
  	'use strict';

  	var hasOwn = {}.hasOwnProperty;

  	function classNames () {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg)) {
  				classes.push(classNames.apply(null, arg));
  			} else if (argType === 'object') {
  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes.push(key);
  					}
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if (typeof module !== 'undefined' && module.exports) {
  		module.exports = classNames;
  	} else if (true) {
  		// register as 'classnames', consistent with npm package name
  		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
  			return classNames;
  		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  	} else {
  		window.classNames = classNames;
  	}
  }());


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _propTypes = __webpack_require__(4);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _photoswipe = __webpack_require__(33);

  var _photoswipe2 = _interopRequireDefault(_photoswipe);

  var _photoswipeUiDefault = __webpack_require__(32);

  var _photoswipeUiDefault2 = _interopRequireDefault(_photoswipeUiDefault);

  var _classnames = __webpack_require__(11);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _events = __webpack_require__(13);

  var _events2 = _interopRequireDefault(_events);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var PhotoSwipe = function (_React$Component) {
    _inherits(PhotoSwipe, _React$Component);

    function PhotoSwipe() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, PhotoSwipe);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhotoSwipe.__proto__ || Object.getPrototypeOf(PhotoSwipe)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PhotoSwipe, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var id = this.props.id;
        var className = this.props.className;

        className = (0, _classnames2.default)(['pswp', className]).trim();
        return _react2.default.createElement(
          'div',
          {
            id: id,
            className: className,
            tabIndex: '-1',
            role: 'dialog',
            'aria-hidden': 'true',
            ref: function ref(node) {
              _this2.pswpElement = node;
            }
          },
          _react2.default.createElement('div', { className: 'pswp__bg' }),
          _react2.default.createElement(
            'div',
            { className: 'pswp__scroll-wrap' },
            _react2.default.createElement(
              'div',
              { className: 'pswp__container' },
              _react2.default.createElement('div', { className: 'pswp__item' }),
              _react2.default.createElement('div', { className: 'pswp__item' }),
              _react2.default.createElement('div', { className: 'pswp__item' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'pswp__ui pswp__ui--hidden' },
              _react2.default.createElement(
                'div',
                { className: 'pswp__top-bar' },
                _react2.default.createElement('div', { className: 'pswp__counter' }),
                _react2.default.createElement('button', {
                  className: 'pswp__button pswp__button--close',
                  title: 'Close (Esc)'
                }),
                _react2.default.createElement('button', {
                  className: 'pswp__button pswp__button--share',
                  title: 'Share'
                }),
                _react2.default.createElement('button', {
                  className: 'pswp__button pswp__button--fs',
                  title: 'Toggle fullscreen'
                }),
                _react2.default.createElement('button', { className: 'pswp__button pswp__button--zoom', title: 'Zoom in/out' }),
                _react2.default.createElement(
                  'div',
                  { className: 'pswp__preloader' },
                  _react2.default.createElement(
                    'div',
                    { className: 'pswp__preloader__icn' },
                    _react2.default.createElement(
                      'div',
                      { className: 'pswp__preloader__cut' },
                      _react2.default.createElement('div', { className: 'pswp__preloader__donut' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'pswp__share-modal pswp__share-modal--hidden pswp__single-tap' },
                _react2.default.createElement('div', { className: 'pswp__share-tooltip' })
              ),
              _react2.default.createElement('button', {
                className: 'pswp__button pswp__button--arrow--left',
                title: 'Previous (arrow left)'
              }),
              _react2.default.createElement('button', {
                className: 'pswp__button pswp__button--arrow--right',
                title: 'Next (arrow right)'
              }),
              _react2.default.createElement(
                'div',
                { className: 'pswp__caption' },
                _react2.default.createElement('div', { className: 'pswp__caption__center' })
              )
            )
          )
        );
      }
    }]);

    return PhotoSwipe;
  }(_react2.default.Component);

  PhotoSwipe.propTypes = {
    isOpen: _propTypes2.default.bool.isRequired,
    items: _propTypes2.default.array.isRequired,
    options: _propTypes2.default.object,
    onClose: _propTypes2.default.func,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string
  };
  PhotoSwipe.defaultProps = {
    options: {},
    onClose: function onClose() {},
    id: '',
    className: ''
  };

  var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.state = {
      isOpen: this.props.isOpen
    };

    this.componentDidMount = function () {
      var isOpen = _this3.state.isOpen;

      if (isOpen) {
        _this3.openPhotoSwipe(_this3.props);
      }
    };

    this.componentWillReceiveProps = function (nextProps) {
      var isOpen = _this3.state.isOpen;

      if (nextProps.isOpen) {
        if (!isOpen) {
          _this3.openPhotoSwipe(nextProps);
        } else {
          _this3.updateItems(nextProps.items);
        }
      } else if (isOpen) {
        _this3.closePhotoSwipe();
      }
    };

    this.componentWillUnmount = function () {
      _this3.closePhotoSwipe();
    };

    this.openPhotoSwipe = function (props) {
      var items = props.items,
          options = props.options;

      var pswpElement = _this3.pswpElement;
      _this3.photoSwipe = new _photoswipe2.default(pswpElement, _photoswipeUiDefault2.default, items, options);
      _events2.default.forEach(function (event) {
        var callback = props[event];
        if (callback || event === 'destroy') {
          var self = _this3;
          _this3.photoSwipe.listen(event, function () {
            if (callback) {
              for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              args.unshift(this);
              callback.apply(undefined, args);
            }
            if (event === 'destroy') {
              self.handleClose();
            }
          });
        }
      });
      _this3.setState({
        isOpen: true
      }, function () {
        _this3.photoSwipe.init();
      });
    };

    this.updateItems = function () {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      _this3.photoSwipe.items.length = 0;
      items.forEach(function (item) {
        _this3.photoSwipe.items.push(item);
      });
      _this3.photoSwipe.invalidateCurrItems();
      _this3.photoSwipe.updateSize(true);
    };

    this.closePhotoSwipe = function () {
      if (!_this3.photoSwipe) {
        return;
      }
      _this3.photoSwipe.close();
    };

    this.handleClose = function () {
      var onClose = _this3.props.onClose;

      _this3.setState({
        isOpen: false
      }, function () {
        if (onClose) {
          onClose();
        }
      });
    };
  };

  exports.default = PhotoSwipe;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = ['beforeChange', 'afterChange', 'imageLoadComplete', 'resize', 'gettingData', 'mouseUsed', 'initialZoomIn', 'initialZoomInEnd', 'initialZoomOut', 'initialZoomOutEnd', 'parseVerticalMargin', 'close', 'unbindEvents', 'destroy', 'updateScrollOffset', 'preventDragEvent', 'shareLinkClick'];
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PhotoSwipeGallery = exports.PhotoSwipe = undefined;

  var _PhotoSwipe = __webpack_require__(12);

  var _PhotoSwipe2 = _interopRequireDefault(_PhotoSwipe);

  var _PhotoSwipeGallery = __webpack_require__(40);

  var _PhotoSwipeGallery2 = _interopRequireDefault(_PhotoSwipeGallery);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _PhotoSwipe2.default;
  exports.PhotoSwipe = _PhotoSwipe2.default;
  exports.PhotoSwipeGallery = _PhotoSwipeGallery2.default;

/***/ },
/* 15 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var EventChannel = function () {
    function EventChannel() {
      _classCallCheck(this, EventChannel);

      this.handlers = {};
      this.history = [];
    }

    _createClass(EventChannel, [{
      key: "subscribe",
      value: function subscribe(event, handler) {
        if (!this.handlers[event]) this.handlers[event] = new Set();
        this.handlers[event].add(handler);

        return this.unsubscribe.bind(this, event, handler);
      }
    }, {
      key: "unsubscribe",
      value: function unsubscribe(event, handler) {
        this.handlers[event] && this.handlers[event].delete(handler);
      }
    }, {
      key: "publish",
      value: function publish(event, payload) {

        this.history.push({ name: event, payload: payload });

        var handlers = this.handlers[event];
        handlers && handlers.forEach(function (handler) {
          return handler(payload);
        });
      }
    }, {
      key: "getAll",
      value: function getAll() {
        return this.history.slice(0);
      }
    }]);

    return EventChannel;
  }();

  exports.default = EventChannel;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
      value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _utils = __webpack_require__(5);

  var _reactPhotoswipe = __webpack_require__(14);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Gallery = function (_Component) {
      _inherits(Gallery, _Component);

      function Gallery() {
          var _ref;

          var _temp, _this, _ret;

          _classCallCheck(this, Gallery);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
              isOpen: false,
              items: []
          }, _this.handleOpen = function (payload) {

              var items = payload.map(function (item) {
                  var image = item.images.standard_resolution;

                  return {
                      w: image.width,
                      h: image.height,
                      src: image.url
                  };
              });

              _this.setState({
                  isOpen: true,
                  items: items
              });
          }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(Gallery, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.unsubscribe = _utils.events.subscribe('OpenPhotos', this.handleOpen);
          }
      }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
              this.unsubscribe();
          }
      }, {
          key: 'render',
          value: function render() {
              var photoSwipeOptions = {
                  index: 0,
                  closeOnVerticalDrag: false
              };

              return _react2.default.createElement(_reactPhotoswipe.PhotoSwipe, {
                  isOpen: this.state.isOpen,
                  items: this.state.items
                  // onClose={this.hidePhotoSwipe}
                  , options: photoSwipeOptions
              });
          }
      }]);

      return Gallery;
  }(_react.Component);

  exports.default = Gallery;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
      value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _User = __webpack_require__(10);

  var _User2 = _interopRequireDefault(_User);

  var _reactPhotoswipe = __webpack_require__(14);

  var _api = __webpack_require__(8);

  var _api2 = _interopRequireDefault(_api);

  var _utils = __webpack_require__(5);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Instagram = function (_Component) {
      _inherits(Instagram, _Component);

      function Instagram() {
          var _ref;

          var _temp, _this, _ret;

          _classCallCheck(this, Instagram);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Instagram.__proto__ || Object.getPrototypeOf(Instagram)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
              users: _this.props.search.users,
              searchText: _this.props.search.text,
              loading: false
          }, _this.request = (0, _utils.debounce)(function (searchText) {
              _this.setState({
                  loading: true
              });

              (0, _api2.default)(_api.APIActions.SEARCH, searchText).then(function (response) {
                  var data = JSON.parse(response);
                  _this.setState({
                      users: data.users,
                      loading: false
                  });
              }, function (error) {
                  console.log(error);
              });
          }, 200), _this.handleChange = function (evt) {
              _this.setState({
                  searchText: evt.target.value
              });
          }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(Instagram, [{
          key: 'componentWillUpdate',
          value: function componentWillUpdate(nextProps, nextState) {
              var oldSearchText = this.state.searchText;

              if (nextState.searchText !== oldSearchText && nextState.searchText) {
                  this.request(nextState.searchText);
              }
          }
      }, {
          key: 'render',
          value: function render() {

              var userNodes = this.state.users.map(function (user) {
                  return _react2.default.createElement(_User2.default, _extends({}, user.user, { key: user.user.pk }));
              });

              return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('input', {
                      type: 'text',
                      value: this.state.searchText,
                      onChange: this.handleChange
                  }),
                  _react2.default.createElement(
                      'h1',
                      null,
                      'Users'
                  ),
                  _react2.default.createElement(
                      'ol',
                      { className: 'userList' },
                      userNodes
                  )
              );
          }
      }]);

      return Instagram;
  }(_react.Component);

  exports.default = Instagram;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _User = __webpack_require__(10);

  var _User2 = _interopRequireDefault(_User);

  var _Instagram = __webpack_require__(17);

  var _Instagram2 = _interopRequireDefault(_Instagram);

  var _Avatar = __webpack_require__(9);

  var _Avatar2 = _interopRequireDefault(_Avatar);

  var _Gallery = __webpack_require__(16);

  var _Gallery2 = _interopRequireDefault(_Gallery);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  module.exports = {
      User: _User2.default,
      Instagram: _Instagram2.default,
      Avatar: _Avatar2.default,
      Gallery: _Gallery2.default
  };

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Components"] = __webpack_require__(18);
  /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   */

  var emptyFunction = __webpack_require__(2);

  /**
   * Upstream version of event listener. Does not take into account specific
   * nature of platform.
   */
  var EventListener = {
    /**
     * Listen to DOM events during the bubble phase.
     *
     * @param {DOMEventTarget} target DOM element to register listener on.
     * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
     * @param {function} callback Callback function.
     * @return {object} Object with a `remove` method.
     */
    listen: function listen(target, eventType, callback) {
      if (target.addEventListener) {
        target.addEventListener(eventType, callback, false);
        return {
          remove: function remove() {
            target.removeEventListener(eventType, callback, false);
          }
        };
      } else if (target.attachEvent) {
        target.attachEvent('on' + eventType, callback);
        return {
          remove: function remove() {
            target.detachEvent('on' + eventType, callback);
          }
        };
      }
    },

    /**
     * Listen to DOM events during the capture phase.
     *
     * @param {DOMEventTarget} target DOM element to register listener on.
     * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
     * @param {function} callback Callback function.
     * @return {object} Object with a `remove` method.
     */
    capture: function capture(target, eventType, callback) {
      if (target.addEventListener) {
        target.addEventListener(eventType, callback, true);
        return {
          remove: function remove() {
            target.removeEventListener(eventType, callback, true);
          }
        };
      } else {
        if (false) {
          console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
        }
        return {
          remove: emptyFunction
        };
      }
    },

    registerDefault: function registerDefault() {}
  };

  module.exports = EventListener;

/***/ },
/* 21 */
/***/ function(module, exports) {

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  'use strict';

  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  /**
   * Simple, lightweight module assisting with the detection and context of
   * Worker. Helps avoid circular dependencies and allows code to reason about
   * whether or not they are in a Worker, even if they never include the main
   * `ReactWorker` dependency.
   */
  var ExecutionEnvironment = {

    canUseDOM: canUseDOM,

    canUseWorkers: typeof Worker !== 'undefined',

    canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

    canUseViewport: canUseDOM && !!window.screen,

    isInWorker: !canUseDOM // For now, this is true - might change in the future.

  };

  module.exports = ExecutionEnvironment;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

  var isTextNode = __webpack_require__(28);

  /*eslint-disable no-bitwise */

  /**
   * Checks if a given DOM node contains or is another DOM node.
   */
  function containsNode(outerNode, innerNode) {
    if (!outerNode || !innerNode) {
      return false;
    } else if (outerNode === innerNode) {
      return true;
    } else if (isTextNode(outerNode)) {
      return false;
    } else if (isTextNode(innerNode)) {
      return containsNode(outerNode, innerNode.parentNode);
    } else if ('contains' in outerNode) {
      return outerNode.contains(innerNode);
    } else if (outerNode.compareDocumentPosition) {
      return !!(outerNode.compareDocumentPosition(innerNode) & 16);
    } else {
      return false;
    }
  }

  module.exports = containsNode;

/***/ },
/* 23 */
/***/ function(module, exports) {

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  'use strict';

  /**
   * @param {DOMElement} node input/textarea to focus
   */

  function focusNode(node) {
    // IE8 can throw "Can't move focus to the control because it is invisible,
    // not enabled, or of a type that does not accept the focus." for all kinds of
    // reasons that are too expensive and fragile to test.
    try {
      node.focus();
    } catch (e) {}
  }

  module.exports = focusNode;

/***/ },
/* 24 */
/***/ function(module, exports) {

  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   */

  /* eslint-disable fb-www/typeof-undefined */

  /**
   * Same as document.activeElement but wraps in a try-catch block. In IE it is
   * not safe to call document.activeElement if there is nothing focused.
   *
   * The activeElement will be null only if the document or document body is not
   * yet defined.
   *
   * @param {?DOMDocument} doc Defaults to current document.
   * @return {?DOMElement}
   */
  function getActiveElement(doc) /*?DOMElement*/{
    doc = doc || (typeof document !== 'undefined' ? document : undefined);
    if (typeof doc === 'undefined') {
      return null;
    }
    try {
      return doc.activeElement || doc.body;
    } catch (e) {
      return doc.body;
    }
  }

  module.exports = getActiveElement;

/***/ },
/* 25 */
/***/ function(module, exports) {

  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   */

  var _uppercasePattern = /([A-Z])/g;

  /**
   * Hyphenates a camelcased string, for example:
   *
   *   > hyphenate('backgroundColor')
   *   < "background-color"
   *
   * For CSS style names, use `hyphenateStyleName` instead which works properly
   * with all vendor prefixes, including `ms`.
   *
   * @param {string} string
   * @return {string}
   */
  function hyphenate(string) {
    return string.replace(_uppercasePattern, '-$1').toLowerCase();
  }

  module.exports = hyphenate;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   */

  'use strict';

  var hyphenate = __webpack_require__(25);

  var msPattern = /^ms-/;

  /**
   * Hyphenates a camelcased CSS property name, for example:
   *
   *   > hyphenateStyleName('backgroundColor')
   *   < "background-color"
   *   > hyphenateStyleName('MozTransition')
   *   < "-moz-transition"
   *   > hyphenateStyleName('msTransition')
   *   < "-ms-transition"
   *
   * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
   * is converted to `-ms-`.
   *
   * @param {string} string
   * @return {string}
   */
  function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, '-ms-');
  }

  module.exports = hyphenateStyleName;

/***/ },
/* 27 */
/***/ function(module, exports) {

  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   */

  /**
   * @param {*} object The object to check.
   * @return {boolean} Whether or not the object is a DOM node.
   */
  function isNode(object) {
    var doc = object ? object.ownerDocument || object : document;
    var defaultView = doc.defaultView || window;
    return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
  }

  module.exports = isNode;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   */

  var isNode = __webpack_require__(27);

  /**
   * @param {*} object The object to check.
   * @return {boolean} Whether or not the object is a DOM text node.
   */
  function isTextNode(object) {
    return isNode(object) && object.nodeType == 3;
  }

  module.exports = isTextNode;

/***/ },
/* 29 */
/***/ function(module, exports) {

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   * @typechecks static-only
   */

  'use strict';

  /**
   * Memoizes the return value of a function that accepts one string argument.
   */

  function memoizeStringOnly(callback) {
    var cache = {};
    return function (string) {
      if (!cache.hasOwnProperty(string)) {
        cache[string] = callback.call(this, string);
      }
      return cache[string];
    };
  }

  module.exports = memoizeStringOnly;

/***/ },
/* 30 */
/***/ function(module, exports) {

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   * 
   */

  /*eslint-disable no-self-compare */

  'use strict';

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      // Added the nonzero y check to make Flow happy, but it is redundant
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }

  /**
   * Performs equality by iterating through keys on an object and returning false
   * when any key has values which are not strictly equal between the arguments.
   * Returns true when the values of all keys are strictly equal.
   */
  function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
      return true;
    }

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
      return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    // Test for A's keys different from B.
    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }

    return true;
  }

  module.exports = shallowEqual;

/***/ },
/* 31 */
/***/ function(module, exports) {

  /* WEBPACK VAR INJECTION */(function(global) {/**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      symbolTag = '[object Symbol]';

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array ? array.length : 0,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /** Built-in value references. */
  var Symbol = root.Symbol,
      propertyIsEnumerable = objectProto.propertyIsEnumerable,
      spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * The base implementation of `_.flatten` with support for restricting flattening.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {number} depth The maximum recursion depth.
   * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
   * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
        length = array.length;

    predicate || (predicate = isFlattenable);
    result || (result = []);

    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.pick` without support for individual
   * property identifiers.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} props The property identifiers to pick.
   * @returns {Object} Returns the new object.
   */
  function basePick(object, props) {
    object = Object(object);
    return basePickBy(object, props, function(value, key) {
      return key in object;
    });
  }

  /**
   * The base implementation of  `_.pickBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} props The property identifiers to pick from.
   * @param {Function} predicate The function invoked per property.
   * @returns {Object} Returns the new object.
   */
  function basePickBy(object, props, predicate) {
    var index = -1,
        length = props.length,
        result = {};

    while (++index < length) {
      var key = props[index],
          value = object[key];

      if (predicate(value, key)) {
        result[key] = value;
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = array;
      return apply(func, this, otherArgs);
    };
  }

  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */
  function isFlattenable(value) {
    return isArray(value) || isArguments(value) ||
      !!(spreadableSymbol && value && value[spreadableSymbol]);
  }

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

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
  function isArguments(value) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
      (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
  }

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

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }

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
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }

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
    return !!value && (type == 'object' || type == 'function');
  }

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
    return !!value && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }

  /**
   * Creates an object composed of the picked `object` properties.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [props] The property identifiers to pick.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.pick(object, ['a', 'c']);
   * // => { 'a': 1, 'c': 3 }
   */
  var pick = baseRest(function(object, props) {
    return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
  });

  module.exports = pick;

  /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
  * http://photoswipe.com
  * Copyright (c) 2017 Dmitry Semenov; */
  /**
  *
  * UI on top of main sliding area (caption, arrows, close button, etc.).
  * Built just using public methods/properties of PhotoSwipe.
  * 
  */
  (function (root, factory) { 
  	if (true) {
  		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  	} else if (typeof exports === 'object') {
  		module.exports = factory();
  	} else {
  		root.PhotoSwipeUI_Default = factory();
  	}
  })(this, function () {

  	'use strict';



  var PhotoSwipeUI_Default =
   function(pswp, framework) {

  	var ui = this;
  	var _overlayUIUpdated = false,
  		_controlsVisible = true,
  		_fullscrenAPI,
  		_controls,
  		_captionContainer,
  		_fakeCaptionContainer,
  		_indexIndicator,
  		_shareButton,
  		_shareModal,
  		_shareModalHidden = true,
  		_initalCloseOnScrollValue,
  		_isIdle,
  		_listen,

  		_loadingIndicator,
  		_loadingIndicatorHidden,
  		_loadingIndicatorTimeout,

  		_galleryHasOneSlide,

  		_options,
  		_defaultUIOptions = {
  			barsSize: {top:44, bottom:'auto'},
  			closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'], 
  			timeToIdle: 4000, 
  			timeToIdleOutside: 1000,
  			loadingIndicatorDelay: 1000, // 2s
  			
  			addCaptionHTMLFn: function(item, captionEl /*, isFake */) {
  				if(!item.title) {
  					captionEl.children[0].innerHTML = '';
  					return false;
  				}
  				captionEl.children[0].innerHTML = item.title;
  				return true;
  			},

  			closeEl:true,
  			captionEl: true,
  			fullscreenEl: true,
  			zoomEl: true,
  			shareEl: true,
  			counterEl: true,
  			arrowEl: true,
  			preloaderEl: true,

  			tapToClose: false,
  			tapToToggleControls: true,

  			clickToCloseNonZoomable: true,

  			shareButtons: [
  				{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
  				{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
  				{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/'+
  													'?url={{url}}&media={{image_url}}&description={{text}}'},
  				{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
  			],
  			getImageURLForShare: function( /* shareButtonData */ ) {
  				return pswp.currItem.src || '';
  			},
  			getPageURLForShare: function( /* shareButtonData */ ) {
  				return window.location.href;
  			},
  			getTextForShare: function( /* shareButtonData */ ) {
  				return pswp.currItem.title || '';
  			},
  				
  			indexIndicatorSep: ' / ',
  			fitControlsWidth: 1200

  		},
  		_blockControlsTap,
  		_blockControlsTapTimeout;



  	var _onControlsTap = function(e) {
  			if(_blockControlsTap) {
  				return true;
  			}


  			e = e || window.event;

  			if(_options.timeToIdle && _options.mouseUsed && !_isIdle) {
  				// reset idle timer
  				_onIdleMouseMove();
  			}


  			var target = e.target || e.srcElement,
  				uiElement,
  				clickedClass = target.getAttribute('class') || '',
  				found;

  			for(var i = 0; i < _uiElements.length; i++) {
  				uiElement = _uiElements[i];
  				if(uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name ) > -1 ) {
  					uiElement.onTap();
  					found = true;

  				}
  			}

  			if(found) {
  				if(e.stopPropagation) {
  					e.stopPropagation();
  				}
  				_blockControlsTap = true;

  				// Some versions of Android don't prevent ghost click event 
  				// when preventDefault() was called on touchstart and/or touchend.
  				// 
  				// This happens on v4.3, 4.2, 4.1, 
  				// older versions strangely work correctly, 
  				// but just in case we add delay on all of them)	
  				var tapDelay = framework.features.isOldAndroid ? 600 : 30;
  				_blockControlsTapTimeout = setTimeout(function() {
  					_blockControlsTap = false;
  				}, tapDelay);
  			}

  		},
  		_fitControlsInViewport = function() {
  			return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
  		},
  		_togglePswpClass = function(el, cName, add) {
  			framework[ (add ? 'add' : 'remove') + 'Class' ](el, 'pswp__' + cName);
  		},

  		// add class when there is just one item in the gallery
  		// (by default it hides left/right arrows and 1ofX counter)
  		_countNumItems = function() {
  			var hasOneSlide = (_options.getNumItemsFn() === 1);

  			if(hasOneSlide !== _galleryHasOneSlide) {
  				_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
  				_galleryHasOneSlide = hasOneSlide;
  			}
  		},
  		_toggleShareModalClass = function() {
  			_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
  		},
  		_toggleShareModal = function() {

  			_shareModalHidden = !_shareModalHidden;
  			
  			
  			if(!_shareModalHidden) {
  				_toggleShareModalClass();
  				setTimeout(function() {
  					if(!_shareModalHidden) {
  						framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
  					}
  				}, 30);
  			} else {
  				framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
  				setTimeout(function() {
  					if(_shareModalHidden) {
  						_toggleShareModalClass();
  					}
  				}, 300);
  			}
  			
  			if(!_shareModalHidden) {
  				_updateShareURLs();
  			}
  			return false;
  		},

  		_openWindowPopup = function(e) {
  			e = e || window.event;
  			var target = e.target || e.srcElement;

  			pswp.shout('shareLinkClick', e, target);

  			if(!target.href) {
  				return false;
  			}

  			if( target.hasAttribute('download') ) {
  				return true;
  			}

  			window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,'+
  										'location=yes,width=550,height=420,top=100,left=' + 
  										(window.screen ? Math.round(screen.width / 2 - 275) : 100)  );

  			if(!_shareModalHidden) {
  				_toggleShareModal();
  			}
  			
  			return false;
  		},
  		_updateShareURLs = function() {
  			var shareButtonOut = '',
  				shareButtonData,
  				shareURL,
  				image_url,
  				page_url,
  				share_text;

  			for(var i = 0; i < _options.shareButtons.length; i++) {
  				shareButtonData = _options.shareButtons[i];

  				image_url = _options.getImageURLForShare(shareButtonData);
  				page_url = _options.getPageURLForShare(shareButtonData);
  				share_text = _options.getTextForShare(shareButtonData);

  				shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url) )
  									.replace('{{image_url}}', encodeURIComponent(image_url) )
  									.replace('{{raw_image_url}}', image_url )
  									.replace('{{text}}', encodeURIComponent(share_text) );

  				shareButtonOut += '<a href="' + shareURL + '" target="_blank" '+
  									'class="pswp__share--' + shareButtonData.id + '"' +
  									(shareButtonData.download ? 'download' : '') + '>' + 
  									shareButtonData.label + '</a>';

  				if(_options.parseShareButtonOut) {
  					shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
  				}
  			}
  			_shareModal.children[0].innerHTML = shareButtonOut;
  			_shareModal.children[0].onclick = _openWindowPopup;

  		},
  		_hasCloseClass = function(target) {
  			for(var  i = 0; i < _options.closeElClasses.length; i++) {
  				if( framework.hasClass(target, 'pswp__' + _options.closeElClasses[i]) ) {
  					return true;
  				}
  			}
  		},
  		_idleInterval,
  		_idleTimer,
  		_idleIncrement = 0,
  		_onIdleMouseMove = function() {
  			clearTimeout(_idleTimer);
  			_idleIncrement = 0;
  			if(_isIdle) {
  				ui.setIdle(false);
  			}
  		},
  		_onMouseLeaveWindow = function(e) {
  			e = e ? e : window.event;
  			var from = e.relatedTarget || e.toElement;
  			if (!from || from.nodeName === 'HTML') {
  				clearTimeout(_idleTimer);
  				_idleTimer = setTimeout(function() {
  					ui.setIdle(true);
  				}, _options.timeToIdleOutside);
  			}
  		},
  		_setupFullscreenAPI = function() {
  			if(_options.fullscreenEl && !framework.features.isOldAndroid) {
  				if(!_fullscrenAPI) {
  					_fullscrenAPI = ui.getFullscreenAPI();
  				}
  				if(_fullscrenAPI) {
  					framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
  					ui.updateFullscreen();
  					framework.addClass(pswp.template, 'pswp--supports-fs');
  				} else {
  					framework.removeClass(pswp.template, 'pswp--supports-fs');
  				}
  			}
  		},
  		_setupLoadingIndicator = function() {
  			// Setup loading indicator
  			if(_options.preloaderEl) {
  			
  				_toggleLoadingIndicator(true);

  				_listen('beforeChange', function() {

  					clearTimeout(_loadingIndicatorTimeout);

  					// display loading indicator with delay
  					_loadingIndicatorTimeout = setTimeout(function() {

  						if(pswp.currItem && pswp.currItem.loading) {

  							if( !pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)  ) {
  								// show preloader if progressive loading is not enabled, 
  								// or image width is not defined yet (because of slow connection)
  								_toggleLoadingIndicator(false); 
  								// items-controller.js function allowProgressiveImg
  							}
  							
  						} else {
  							_toggleLoadingIndicator(true); // hide preloader
  						}

  					}, _options.loadingIndicatorDelay);
  					
  				});
  				_listen('imageLoadComplete', function(index, item) {
  					if(pswp.currItem === item) {
  						_toggleLoadingIndicator(true);
  					}
  				});

  			}
  		},
  		_toggleLoadingIndicator = function(hide) {
  			if( _loadingIndicatorHidden !== hide ) {
  				_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
  				_loadingIndicatorHidden = hide;
  			}
  		},
  		_applyNavBarGaps = function(item) {
  			var gap = item.vGap;

  			if( _fitControlsInViewport() ) {
  				
  				var bars = _options.barsSize; 
  				if(_options.captionEl && bars.bottom === 'auto') {
  					if(!_fakeCaptionContainer) {
  						_fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
  						_fakeCaptionContainer.appendChild( framework.createEl('pswp__caption__center') );
  						_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
  						framework.addClass(_controls, 'pswp__ui--fit');
  					}
  					if( _options.addCaptionHTMLFn(item, _fakeCaptionContainer, true) ) {

  						var captionSize = _fakeCaptionContainer.clientHeight;
  						gap.bottom = parseInt(captionSize,10) || 44;
  					} else {
  						gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
  					}
  				} else {
  					gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
  				}
  				
  				// height of top bar is static, no need to calculate it
  				gap.top = bars.top;
  			} else {
  				gap.top = gap.bottom = 0;
  			}
  		},
  		_setupIdle = function() {
  			// Hide controls when mouse is used
  			if(_options.timeToIdle) {
  				_listen('mouseUsed', function() {
  					
  					framework.bind(document, 'mousemove', _onIdleMouseMove);
  					framework.bind(document, 'mouseout', _onMouseLeaveWindow);

  					_idleInterval = setInterval(function() {
  						_idleIncrement++;
  						if(_idleIncrement === 2) {
  							ui.setIdle(true);
  						}
  					}, _options.timeToIdle / 2);
  				});
  			}
  		},
  		_setupHidingControlsDuringGestures = function() {

  			// Hide controls on vertical drag
  			_listen('onVerticalDrag', function(now) {
  				if(_controlsVisible && now < 0.95) {
  					ui.hideControls();
  				} else if(!_controlsVisible && now >= 0.95) {
  					ui.showControls();
  				}
  			});

  			// Hide controls when pinching to close
  			var pinchControlsHidden;
  			_listen('onPinchClose' , function(now) {
  				if(_controlsVisible && now < 0.9) {
  					ui.hideControls();
  					pinchControlsHidden = true;
  				} else if(pinchControlsHidden && !_controlsVisible && now > 0.9) {
  					ui.showControls();
  				}
  			});

  			_listen('zoomGestureEnded', function() {
  				pinchControlsHidden = false;
  				if(pinchControlsHidden && !_controlsVisible) {
  					ui.showControls();
  				}
  			});

  		};



  	var _uiElements = [
  		{ 
  			name: 'caption', 
  			option: 'captionEl',
  			onInit: function(el) {  
  				_captionContainer = el; 
  			} 
  		},
  		{ 
  			name: 'share-modal', 
  			option: 'shareEl',
  			onInit: function(el) {  
  				_shareModal = el;
  			},
  			onTap: function() {
  				_toggleShareModal();
  			} 
  		},
  		{ 
  			name: 'button--share', 
  			option: 'shareEl',
  			onInit: function(el) { 
  				_shareButton = el;
  			},
  			onTap: function() {
  				_toggleShareModal();
  			} 
  		},
  		{ 
  			name: 'button--zoom', 
  			option: 'zoomEl',
  			onTap: pswp.toggleDesktopZoom
  		},
  		{ 
  			name: 'counter', 
  			option: 'counterEl',
  			onInit: function(el) {  
  				_indexIndicator = el;
  			} 
  		},
  		{ 
  			name: 'button--close', 
  			option: 'closeEl',
  			onTap: pswp.close
  		},
  		{ 
  			name: 'button--arrow--left', 
  			option: 'arrowEl',
  			onTap: pswp.prev
  		},
  		{ 
  			name: 'button--arrow--right', 
  			option: 'arrowEl',
  			onTap: pswp.next
  		},
  		{ 
  			name: 'button--fs', 
  			option: 'fullscreenEl',
  			onTap: function() {  
  				if(_fullscrenAPI.isFullscreen()) {
  					_fullscrenAPI.exit();
  				} else {
  					_fullscrenAPI.enter();
  				}
  			} 
  		},
  		{ 
  			name: 'preloader', 
  			option: 'preloaderEl',
  			onInit: function(el) {  
  				_loadingIndicator = el;
  			} 
  		}

  	];

  	var _setupUIElements = function() {
  		var item,
  			classAttr,
  			uiElement;

  		var loopThroughChildElements = function(sChildren) {
  			if(!sChildren) {
  				return;
  			}

  			var l = sChildren.length;
  			for(var i = 0; i < l; i++) {
  				item = sChildren[i];
  				classAttr = item.className;

  				for(var a = 0; a < _uiElements.length; a++) {
  					uiElement = _uiElements[a];

  					if(classAttr.indexOf('pswp__' + uiElement.name) > -1  ) {

  						if( _options[uiElement.option] ) { // if element is not disabled from options
  							
  							framework.removeClass(item, 'pswp__element--disabled');
  							if(uiElement.onInit) {
  								uiElement.onInit(item);
  							}
  							
  							//item.style.display = 'block';
  						} else {
  							framework.addClass(item, 'pswp__element--disabled');
  							//item.style.display = 'none';
  						}
  					}
  				}
  			}
  		};
  		loopThroughChildElements(_controls.children);

  		var topBar =  framework.getChildByClass(_controls, 'pswp__top-bar');
  		if(topBar) {
  			loopThroughChildElements( topBar.children );
  		}
  	};


  	

  	ui.init = function() {

  		// extend options
  		framework.extend(pswp.options, _defaultUIOptions, true);

  		// create local link for fast access
  		_options = pswp.options;

  		// find pswp__ui element
  		_controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

  		// create local link
  		_listen = pswp.listen;


  		_setupHidingControlsDuringGestures();

  		// update controls when slides change
  		_listen('beforeChange', ui.update);

  		// toggle zoom on double-tap
  		_listen('doubleTap', function(point) {
  			var initialZoomLevel = pswp.currItem.initialZoomLevel;
  			if(pswp.getZoomLevel() !== initialZoomLevel) {
  				pswp.zoomTo(initialZoomLevel, point, 333);
  			} else {
  				pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
  			}
  		});

  		// Allow text selection in caption
  		_listen('preventDragEvent', function(e, isDown, preventObj) {
  			var t = e.target || e.srcElement;
  			if(
  				t && 
  				t.getAttribute('class') && e.type.indexOf('mouse') > -1 && 
  				( t.getAttribute('class').indexOf('__caption') > 0 || (/(SMALL|STRONG|EM)/i).test(t.tagName) ) 
  			) {
  				preventObj.prevent = false;
  			}
  		});

  		// bind events for UI
  		_listen('bindEvents', function() {
  			framework.bind(_controls, 'pswpTap click', _onControlsTap);
  			framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

  			if(!pswp.likelyTouchDevice) {
  				framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
  			}
  		});

  		// unbind events for UI
  		_listen('unbindEvents', function() {
  			if(!_shareModalHidden) {
  				_toggleShareModal();
  			}

  			if(_idleInterval) {
  				clearInterval(_idleInterval);
  			}
  			framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
  			framework.unbind(document, 'mousemove', _onIdleMouseMove);
  			framework.unbind(_controls, 'pswpTap click', _onControlsTap);
  			framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
  			framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

  			if(_fullscrenAPI) {
  				framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
  				if(_fullscrenAPI.isFullscreen()) {
  					_options.hideAnimationDuration = 0;
  					_fullscrenAPI.exit();
  				}
  				_fullscrenAPI = null;
  			}
  		});


  		// clean up things when gallery is destroyed
  		_listen('destroy', function() {
  			if(_options.captionEl) {
  				if(_fakeCaptionContainer) {
  					_controls.removeChild(_fakeCaptionContainer);
  				}
  				framework.removeClass(_captionContainer, 'pswp__caption--empty');
  			}

  			if(_shareModal) {
  				_shareModal.children[0].onclick = null;
  			}
  			framework.removeClass(_controls, 'pswp__ui--over-close');
  			framework.addClass( _controls, 'pswp__ui--hidden');
  			ui.setIdle(false);
  		});
  		

  		if(!_options.showAnimationDuration) {
  			framework.removeClass( _controls, 'pswp__ui--hidden');
  		}
  		_listen('initialZoomIn', function() {
  			if(_options.showAnimationDuration) {
  				framework.removeClass( _controls, 'pswp__ui--hidden');
  			}
  		});
  		_listen('initialZoomOut', function() {
  			framework.addClass( _controls, 'pswp__ui--hidden');
  		});

  		_listen('parseVerticalMargin', _applyNavBarGaps);
  		
  		_setupUIElements();

  		if(_options.shareEl && _shareButton && _shareModal) {
  			_shareModalHidden = true;
  		}

  		_countNumItems();

  		_setupIdle();

  		_setupFullscreenAPI();

  		_setupLoadingIndicator();
  	};

  	ui.setIdle = function(isIdle) {
  		_isIdle = isIdle;
  		_togglePswpClass(_controls, 'ui--idle', isIdle);
  	};

  	ui.update = function() {
  		// Don't update UI if it's hidden
  		if(_controlsVisible && pswp.currItem) {
  			
  			ui.updateIndexIndicator();

  			if(_options.captionEl) {
  				_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

  				_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
  			}

  			_overlayUIUpdated = true;

  		} else {
  			_overlayUIUpdated = false;
  		}

  		if(!_shareModalHidden) {
  			_toggleShareModal();
  		}

  		_countNumItems();
  	};

  	ui.updateFullscreen = function(e) {

  		if(e) {
  			// some browsers change window scroll position during the fullscreen
  			// so PhotoSwipe updates it just in case
  			setTimeout(function() {
  				pswp.setScrollOffset( 0, framework.getScrollY() );
  			}, 50);
  		}
  		
  		// toogle pswp--fs class on root element
  		framework[ (_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class' ](pswp.template, 'pswp--fs');
  	};

  	ui.updateIndexIndicator = function() {
  		if(_options.counterEl) {
  			_indexIndicator.innerHTML = (pswp.getCurrentIndex()+1) + 
  										_options.indexIndicatorSep + 
  										_options.getNumItemsFn();
  		}
  	};
  	
  	ui.onGlobalTap = function(e) {
  		e = e || window.event;
  		var target = e.target || e.srcElement;

  		if(_blockControlsTap) {
  			return;
  		}

  		if(e.detail && e.detail.pointerType === 'mouse') {

  			// close gallery if clicked outside of the image
  			if(_hasCloseClass(target)) {
  				pswp.close();
  				return;
  			}

  			if(framework.hasClass(target, 'pswp__img')) {
  				if(pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
  					if(_options.clickToCloseNonZoomable) {
  						pswp.close();
  					}
  				} else {
  					pswp.toggleDesktopZoom(e.detail.releasePoint);
  				}
  			}
  			
  		} else {

  			// tap anywhere (except buttons) to toggle visibility of controls
  			if(_options.tapToToggleControls) {
  				if(_controlsVisible) {
  					ui.hideControls();
  				} else {
  					ui.showControls();
  				}
  			}

  			// tap to close gallery
  			if(_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target)) ) {
  				pswp.close();
  				return;
  			}
  			
  		}
  	};
  	ui.onMouseOver = function(e) {
  		e = e || window.event;
  		var target = e.target || e.srcElement;

  		// add class when mouse is over an element that should close the gallery
  		_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
  	};

  	ui.hideControls = function() {
  		framework.addClass(_controls,'pswp__ui--hidden');
  		_controlsVisible = false;
  	};

  	ui.showControls = function() {
  		_controlsVisible = true;
  		if(!_overlayUIUpdated) {
  			ui.update();
  		}
  		framework.removeClass(_controls,'pswp__ui--hidden');
  	};

  	ui.supportsFullscreen = function() {
  		var d = document;
  		return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
  	};

  	ui.getFullscreenAPI = function() {
  		var dE = document.documentElement,
  			api,
  			tF = 'fullscreenchange';

  		if (dE.requestFullscreen) {
  			api = {
  				enterK: 'requestFullscreen',
  				exitK: 'exitFullscreen',
  				elementK: 'fullscreenElement',
  				eventK: tF
  			};

  		} else if(dE.mozRequestFullScreen ) {
  			api = {
  				enterK: 'mozRequestFullScreen',
  				exitK: 'mozCancelFullScreen',
  				elementK: 'mozFullScreenElement',
  				eventK: 'moz' + tF
  			};

  			

  		} else if(dE.webkitRequestFullscreen) {
  			api = {
  				enterK: 'webkitRequestFullscreen',
  				exitK: 'webkitExitFullscreen',
  				elementK: 'webkitFullscreenElement',
  				eventK: 'webkit' + tF
  			};

  		} else if(dE.msRequestFullscreen) {
  			api = {
  				enterK: 'msRequestFullscreen',
  				exitK: 'msExitFullscreen',
  				elementK: 'msFullscreenElement',
  				eventK: 'MSFullscreenChange'
  			};
  		}

  		if(api) {
  			api.enter = function() { 
  				// disable close-on-scroll in fullscreen
  				_initalCloseOnScrollValue = _options.closeOnScroll; 
  				_options.closeOnScroll = false; 

  				if(this.enterK === 'webkitRequestFullscreen') {
  					pswp.template[this.enterK]( Element.ALLOW_KEYBOARD_INPUT );
  				} else {
  					return pswp.template[this.enterK](); 
  				}
  			};
  			api.exit = function() { 
  				_options.closeOnScroll = _initalCloseOnScrollValue;

  				return document[this.exitK](); 

  			};
  			api.isFullscreen = function() { return document[this.elementK]; };
  		}

  		return api;
  	};



  };
  return PhotoSwipeUI_Default;


  });


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe - v4.1.2 - 2017-04-05
  * http://photoswipe.com
  * Copyright (c) 2017 Dmitry Semenov; */
  (function (root, factory) { 
  	if (true) {
  		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  	} else if (typeof exports === 'object') {
  		module.exports = factory();
  	} else {
  		root.PhotoSwipe = factory();
  	}
  })(this, function () {

  	'use strict';
  	var PhotoSwipe = function(template, UiClass, items, options){

  /*>>framework-bridge*/
  /**
   *
   * Set of generic functions used by gallery.
   * 
   * You're free to modify anything here as long as functionality is kept.
   * 
   */
  var framework = {
  	features: null,
  	bind: function(target, type, listener, unbind) {
  		var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
  		type = type.split(' ');
  		for(var i = 0; i < type.length; i++) {
  			if(type[i]) {
  				target[methodName]( type[i], listener, false);
  			}
  		}
  	},
  	isArray: function(obj) {
  		return (obj instanceof Array);
  	},
  	createEl: function(classes, tag) {
  		var el = document.createElement(tag || 'div');
  		if(classes) {
  			el.className = classes;
  		}
  		return el;
  	},
  	getScrollY: function() {
  		var yOffset = window.pageYOffset;
  		return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
  	},
  	unbind: function(target, type, listener) {
  		framework.bind(target,type,listener,true);
  	},
  	removeClass: function(el, className) {
  		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
  		el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, ''); 
  	},
  	addClass: function(el, className) {
  		if( !framework.hasClass(el,className) ) {
  			el.className += (el.className ? ' ' : '') + className;
  		}
  	},
  	hasClass: function(el, className) {
  		return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
  	},
  	getChildByClass: function(parentEl, childClassName) {
  		var node = parentEl.firstChild;
  		while(node) {
  			if( framework.hasClass(node, childClassName) ) {
  				return node;
  			}
  			node = node.nextSibling;
  		}
  	},
  	arraySearch: function(array, value, key) {
  		var i = array.length;
  		while(i--) {
  			if(array[i][key] === value) {
  				return i;
  			} 
  		}
  		return -1;
  	},
  	extend: function(o1, o2, preventOverwrite) {
  		for (var prop in o2) {
  			if (o2.hasOwnProperty(prop)) {
  				if(preventOverwrite && o1.hasOwnProperty(prop)) {
  					continue;
  				}
  				o1[prop] = o2[prop];
  			}
  		}
  	},
  	easing: {
  		sine: {
  			out: function(k) {
  				return Math.sin(k * (Math.PI / 2));
  			},
  			inOut: function(k) {
  				return - (Math.cos(Math.PI * k) - 1) / 2;
  			}
  		},
  		cubic: {
  			out: function(k) {
  				return --k * k * k + 1;
  			}
  		}
  		/*
  			elastic: {
  				out: function ( k ) {

  					var s, a = 0.1, p = 0.4;
  					if ( k === 0 ) return 0;
  					if ( k === 1 ) return 1;
  					if ( !a || a < 1 ) { a = 1; s = p / 4; }
  					else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
  					return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

  				},
  			},
  			back: {
  				out: function ( k ) {
  					var s = 1.70158;
  					return --k * k * ( ( s + 1 ) * k + s ) + 1;
  				}
  			}
  		*/
  	},

  	/**
  	 * 
  	 * @return {object}
  	 * 
  	 * {
  	 *  raf : request animation frame function
  	 *  caf : cancel animation frame function
  	 *  transfrom : transform property key (with vendor), or null if not supported
  	 *  oldIE : IE8 or below
  	 * }
  	 * 
  	 */
  	detectFeatures: function() {
  		if(framework.features) {
  			return framework.features;
  		}
  		var helperEl = framework.createEl(),
  			helperStyle = helperEl.style,
  			vendor = '',
  			features = {};

  		// IE8 and below
  		features.oldIE = document.all && !document.addEventListener;

  		features.touch = 'ontouchstart' in window;

  		if(window.requestAnimationFrame) {
  			features.raf = window.requestAnimationFrame;
  			features.caf = window.cancelAnimationFrame;
  		}

  		features.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled;

  		// fix false-positive detection of old Android in new IE
  		// (IE11 ua string contains "Android 4.0")
  		
  		if(!features.pointerEvent) { 

  			var ua = navigator.userAgent;

  			// Detect if device is iPhone or iPod and if it's older than iOS 8
  			// http://stackoverflow.com/a/14223920
  			// 
  			// This detection is made because of buggy top/bottom toolbars
  			// that don't trigger window.resize event.
  			// For more info refer to _isFixedPosition variable in core.js

  			if (/iP(hone|od)/.test(navigator.platform)) {
  				var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
  				if(v && v.length > 0) {
  					v = parseInt(v[1], 10);
  					if(v >= 1 && v < 8 ) {
  						features.isOldIOSPhone = true;
  					}
  				}
  			}

  			// Detect old Android (before KitKat)
  			// due to bugs related to position:fixed
  			// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript
  			
  			var match = ua.match(/Android\s([0-9\.]*)/);
  			var androidversion =  match ? match[1] : 0;
  			androidversion = parseFloat(androidversion);
  			if(androidversion >= 1 ) {
  				if(androidversion < 4.4) {
  					features.isOldAndroid = true; // for fixed position bug & performance
  				}
  				features.androidVersion = androidversion; // for touchend bug
  			}	
  			features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

  			// p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
  		}
  		
  		var styleChecks = ['transform', 'perspective', 'animationName'],
  			vendors = ['', 'webkit','Moz','ms','O'],
  			styleCheckItem,
  			styleName;

  		for(var i = 0; i < 4; i++) {
  			vendor = vendors[i];

  			for(var a = 0; a < 3; a++) {
  				styleCheckItem = styleChecks[a];

  				// uppercase first letter of property name, if vendor is present
  				styleName = vendor + (vendor ? 
  										styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : 
  										styleCheckItem);
  			
  				if(!features[styleCheckItem] && styleName in helperStyle ) {
  					features[styleCheckItem] = styleName;
  				}
  			}

  			if(vendor && !features.raf) {
  				vendor = vendor.toLowerCase();
  				features.raf = window[vendor+'RequestAnimationFrame'];
  				if(features.raf) {
  					features.caf = window[vendor+'CancelAnimationFrame'] || 
  									window[vendor+'CancelRequestAnimationFrame'];
  				}
  			}
  		}
  			
  		if(!features.raf) {
  			var lastTime = 0;
  			features.raf = function(fn) {
  				var currTime = new Date().getTime();
  				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
  				var id = window.setTimeout(function() { fn(currTime + timeToCall); }, timeToCall);
  				lastTime = currTime + timeToCall;
  				return id;
  			};
  			features.caf = function(id) { clearTimeout(id); };
  		}

  		// Detect SVG support
  		features.svg = !!document.createElementNS && 
  						!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

  		framework.features = features;

  		return features;
  	}
  };

  framework.detectFeatures();

  // Override addEventListener for old versions of IE
  if(framework.features.oldIE) {

  	framework.bind = function(target, type, listener, unbind) {
  		
  		type = type.split(' ');

  		var methodName = (unbind ? 'detach' : 'attach') + 'Event',
  			evName,
  			_handleEv = function() {
  				listener.handleEvent.call(listener);
  			};

  		for(var i = 0; i < type.length; i++) {
  			evName = type[i];
  			if(evName) {

  				if(typeof listener === 'object' && listener.handleEvent) {
  					if(!unbind) {
  						listener['oldIE' + evName] = _handleEv;
  					} else {
  						if(!listener['oldIE' + evName]) {
  							return false;
  						}
  					}

  					target[methodName]( 'on' + evName, listener['oldIE' + evName]);
  				} else {
  					target[methodName]( 'on' + evName, listener);
  				}

  			}
  		}
  	};
  	
  }

  /*>>framework-bridge*/

  /*>>core*/
  //function(template, UiClass, items, options)

  var self = this;

  /**
   * Static vars, don't change unless you know what you're doing.
   */
  var DOUBLE_TAP_RADIUS = 25, 
  	NUM_HOLDERS = 3;

  /**
   * Options
   */
  var _options = {
  	allowPanToNext:true,
  	spacing: 0.12,
  	bgOpacity: 1,
  	mouseUsed: false,
  	loop: true,
  	pinchToClose: true,
  	closeOnScroll: true,
  	closeOnVerticalDrag: true,
  	verticalDragRange: 0.75,
  	hideAnimationDuration: 333,
  	showAnimationDuration: 333,
  	showHideOpacity: false,
  	focus: true,
  	escKey: true,
  	arrowKeys: true,
  	mainScrollEndFriction: 0.35,
  	panEndFriction: 0.35,
  	isClickableElement: function(el) {
          return el.tagName === 'A';
      },
      getDoubleTapZoom: function(isMouseClick, item) {
      	if(isMouseClick) {
      		return 1;
      	} else {
      		return item.initialZoomLevel < 0.7 ? 1 : 1.33;
      	}
      },
      maxSpreadZoom: 1.33,
  	modal: true,

  	// not fully implemented yet
  	scaleMode: 'fit' // TODO
  };
  framework.extend(_options, options);


  /**
   * Private helper variables & functions
   */

  var _getEmptyPoint = function() { 
  		return {x:0,y:0}; 
  	};

  var _isOpen,
  	_isDestroying,
  	_closedByScroll,
  	_currentItemIndex,
  	_containerStyle,
  	_containerShiftIndex,
  	_currPanDist = _getEmptyPoint(),
  	_startPanOffset = _getEmptyPoint(),
  	_panOffset = _getEmptyPoint(),
  	_upMoveEvents, // drag move, drag end & drag cancel events array
  	_downEvents, // drag start events array
  	_globalEventHandlers,
  	_viewportSize = {},
  	_currZoomLevel,
  	_startZoomLevel,
  	_translatePrefix,
  	_translateSufix,
  	_updateSizeInterval,
  	_itemsNeedUpdate,
  	_currPositionIndex = 0,
  	_offset = {},
  	_slideSize = _getEmptyPoint(), // size of slide area, including spacing
  	_itemHolders,
  	_prevItemIndex,
  	_indexDiff = 0, // difference of indexes since last content update
  	_dragStartEvent,
  	_dragMoveEvent,
  	_dragEndEvent,
  	_dragCancelEvent,
  	_transformKey,
  	_pointerEventEnabled,
  	_isFixedPosition = true,
  	_likelyTouchDevice,
  	_modules = [],
  	_requestAF,
  	_cancelAF,
  	_initalClassName,
  	_initalWindowScrollY,
  	_oldIE,
  	_currentWindowScrollY,
  	_features,
  	_windowVisibleSize = {},
  	_renderMaxResolution = false,
  	_orientationChangeTimeout,


  	// Registers PhotoSWipe module (History, Controller ...)
  	_registerModule = function(name, module) {
  		framework.extend(self, module.publicMethods);
  		_modules.push(name);
  	},

  	_getLoopedId = function(index) {
  		var numSlides = _getNumItems();
  		if(index > numSlides - 1) {
  			return index - numSlides;
  		} else  if(index < 0) {
  			return numSlides + index;
  		}
  		return index;
  	},
  	
  	// Micro bind/trigger
  	_listeners = {},
  	_listen = function(name, fn) {
  		if(!_listeners[name]) {
  			_listeners[name] = [];
  		}
  		return _listeners[name].push(fn);
  	},
  	_shout = function(name) {
  		var listeners = _listeners[name];

  		if(listeners) {
  			var args = Array.prototype.slice.call(arguments);
  			args.shift();

  			for(var i = 0; i < listeners.length; i++) {
  				listeners[i].apply(self, args);
  			}
  		}
  	},

  	_getCurrentTime = function() {
  		return new Date().getTime();
  	},
  	_applyBgOpacity = function(opacity) {
  		_bgOpacity = opacity;
  		self.bg.style.opacity = opacity * _options.bgOpacity;
  	},

  	_applyZoomTransform = function(styleObj,x,y,zoom,item) {
  		if(!_renderMaxResolution || (item && item !== self.currItem) ) {
  			zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);	
  		}
  			
  		styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
  	},
  	_applyCurrentZoomPan = function( allowRenderResolution ) {
  		if(_currZoomElementStyle) {

  			if(allowRenderResolution) {
  				if(_currZoomLevel > self.currItem.fitRatio) {
  					if(!_renderMaxResolution) {
  						_setImageSize(self.currItem, false, true);
  						_renderMaxResolution = true;
  					}
  				} else {
  					if(_renderMaxResolution) {
  						_setImageSize(self.currItem);
  						_renderMaxResolution = false;
  					}
  				}
  			}
  			

  			_applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
  		}
  	},
  	_applyZoomPanToItem = function(item) {
  		if(item.container) {

  			_applyZoomTransform(item.container.style, 
  								item.initialPosition.x, 
  								item.initialPosition.y, 
  								item.initialZoomLevel,
  								item);
  		}
  	},
  	_setTranslateX = function(x, elStyle) {
  		elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
  	},
  	_moveMainScroll = function(x, dragging) {

  		if(!_options.loop && dragging) {
  			var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
  				delta = Math.round(x - _mainScrollPos.x);

  			if( (newSlideIndexOffset < 0 && delta > 0) || 
  				(newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
  				x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
  			} 
  		}
  		
  		_mainScrollPos.x = x;
  		_setTranslateX(x, _containerStyle);
  	},
  	_calculatePanOffset = function(axis, zoomLevel) {
  		var m = _midZoomPoint[axis] - _offset[axis];
  		return _startPanOffset[axis] + _currPanDist[axis] + m - m * ( zoomLevel / _startZoomLevel );
  	},
  	
  	_equalizePoints = function(p1, p2) {
  		p1.x = p2.x;
  		p1.y = p2.y;
  		if(p2.id) {
  			p1.id = p2.id;
  		}
  	},
  	_roundPoint = function(p) {
  		p.x = Math.round(p.x);
  		p.y = Math.round(p.y);
  	},

  	_mouseMoveTimeout = null,
  	_onFirstMouseMove = function() {
  		// Wait until mouse move event is fired at least twice during 100ms
  		// We do this, because some mobile browsers trigger it on touchstart
  		if(_mouseMoveTimeout ) { 
  			framework.unbind(document, 'mousemove', _onFirstMouseMove);
  			framework.addClass(template, 'pswp--has_mouse');
  			_options.mouseUsed = true;
  			_shout('mouseUsed');
  		}
  		_mouseMoveTimeout = setTimeout(function() {
  			_mouseMoveTimeout = null;
  		}, 100);
  	},

  	_bindEvents = function() {
  		framework.bind(document, 'keydown', self);

  		if(_features.transform) {
  			// don't bind click event in browsers that don't support transform (mostly IE8)
  			framework.bind(self.scrollWrap, 'click', self);
  		}
  		

  		if(!_options.mouseUsed) {
  			framework.bind(document, 'mousemove', _onFirstMouseMove);
  		}

  		framework.bind(window, 'resize scroll orientationchange', self);

  		_shout('bindEvents');
  	},

  	_unbindEvents = function() {
  		framework.unbind(window, 'resize scroll orientationchange', self);
  		framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
  		framework.unbind(document, 'keydown', self);
  		framework.unbind(document, 'mousemove', _onFirstMouseMove);

  		if(_features.transform) {
  			framework.unbind(self.scrollWrap, 'click', self);
  		}

  		if(_isDragging) {
  			framework.unbind(window, _upMoveEvents, self);
  		}

  		clearTimeout(_orientationChangeTimeout);

  		_shout('unbindEvents');
  	},
  	
  	_calculatePanBounds = function(zoomLevel, update) {
  		var bounds = _calculateItemSize( self.currItem, _viewportSize, zoomLevel );
  		if(update) {
  			_currPanBounds = bounds;
  		}
  		return bounds;
  	},
  	
  	_getMinZoomLevel = function(item) {
  		if(!item) {
  			item = self.currItem;
  		}
  		return item.initialZoomLevel;
  	},
  	_getMaxZoomLevel = function(item) {
  		if(!item) {
  			item = self.currItem;
  		}
  		return item.w > 0 ? _options.maxSpreadZoom : 1;
  	},

  	// Return true if offset is out of the bounds
  	_modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
  		if(destZoomLevel === self.currItem.initialZoomLevel) {
  			destPanOffset[axis] = self.currItem.initialPosition[axis];
  			return true;
  		} else {
  			destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel); 

  			if(destPanOffset[axis] > destPanBounds.min[axis]) {
  				destPanOffset[axis] = destPanBounds.min[axis];
  				return true;
  			} else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
  				destPanOffset[axis] = destPanBounds.max[axis];
  				return true;
  			}
  		}
  		return false;
  	},

  	_setupTransforms = function() {

  		if(_transformKey) {
  			// setup 3d transforms
  			var allow3dTransform = _features.perspective && !_likelyTouchDevice;
  			_translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
  			_translateSufix = _features.perspective ? ', 0px)' : ')';	
  			return;
  		}

  		// Override zoom/pan/move functions in case old browser is used (most likely IE)
  		// (so they use left/top/width/height, instead of CSS transform)
  	
  		_transformKey = 'left';
  		framework.addClass(template, 'pswp--ie');

  		_setTranslateX = function(x, elStyle) {
  			elStyle.left = x + 'px';
  		};
  		_applyZoomPanToItem = function(item) {

  			var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
  				s = item.container.style,
  				w = zoomRatio * item.w,
  				h = zoomRatio * item.h;

  			s.width = w + 'px';
  			s.height = h + 'px';
  			s.left = item.initialPosition.x + 'px';
  			s.top = item.initialPosition.y + 'px';

  		};
  		_applyCurrentZoomPan = function() {
  			if(_currZoomElementStyle) {

  				var s = _currZoomElementStyle,
  					item = self.currItem,
  					zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
  					w = zoomRatio * item.w,
  					h = zoomRatio * item.h;

  				s.width = w + 'px';
  				s.height = h + 'px';


  				s.left = _panOffset.x + 'px';
  				s.top = _panOffset.y + 'px';
  			}
  			
  		};
  	},

  	_onKeyDown = function(e) {
  		var keydownAction = '';
  		if(_options.escKey && e.keyCode === 27) { 
  			keydownAction = 'close';
  		} else if(_options.arrowKeys) {
  			if(e.keyCode === 37) {
  				keydownAction = 'prev';
  			} else if(e.keyCode === 39) { 
  				keydownAction = 'next';
  			}
  		}

  		if(keydownAction) {
  			// don't do anything if special key pressed to prevent from overriding default browser actions
  			// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
  			if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
  				if(e.preventDefault) {
  					e.preventDefault();
  				} else {
  					e.returnValue = false;
  				} 
  				self[keydownAction]();
  			}
  		}
  	},

  	_onGlobalClick = function(e) {
  		if(!e) {
  			return;
  		}

  		// don't allow click event to pass through when triggering after drag or some other gesture
  		if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
  			e.preventDefault();
  			e.stopPropagation();
  		}
  	},

  	_updatePageScrollOffset = function() {
  		self.setScrollOffset(0, framework.getScrollY());		
  	};
  	


  	



  // Micro animation engine
  var _animations = {},
  	_numAnimations = 0,
  	_stopAnimation = function(name) {
  		if(_animations[name]) {
  			if(_animations[name].raf) {
  				_cancelAF( _animations[name].raf );
  			}
  			_numAnimations--;
  			delete _animations[name];
  		}
  	},
  	_registerStartAnimation = function(name) {
  		if(_animations[name]) {
  			_stopAnimation(name);
  		}
  		if(!_animations[name]) {
  			_numAnimations++;
  			_animations[name] = {};
  		}
  	},
  	_stopAllAnimations = function() {
  		for (var prop in _animations) {

  			if( _animations.hasOwnProperty( prop ) ) {
  				_stopAnimation(prop);
  			} 
  			
  		}
  	},
  	_animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
  		var startAnimTime = _getCurrentTime(), t;
  		_registerStartAnimation(name);

  		var animloop = function(){
  			if ( _animations[name] ) {
  				
  				t = _getCurrentTime() - startAnimTime; // time diff
  				//b - beginning (start prop)
  				//d - anim duration

  				if ( t >= d ) {
  					_stopAnimation(name);
  					onUpdate(endProp);
  					if(onComplete) {
  						onComplete();
  					}
  					return;
  				}
  				onUpdate( (endProp - b) * easingFn(t/d) + b );

  				_animations[name].raf = _requestAF(animloop);
  			}
  		};
  		animloop();
  	};
  	


  var publicMethods = {

  	// make a few local variables and functions public
  	shout: _shout,
  	listen: _listen,
  	viewportSize: _viewportSize,
  	options: _options,

  	isMainScrollAnimating: function() {
  		return _mainScrollAnimating;
  	},
  	getZoomLevel: function() {
  		return _currZoomLevel;
  	},
  	getCurrentIndex: function() {
  		return _currentItemIndex;
  	},
  	isDragging: function() {
  		return _isDragging;
  	},	
  	isZooming: function() {
  		return _isZooming;
  	},
  	setScrollOffset: function(x,y) {
  		_offset.x = x;
  		_currentWindowScrollY = _offset.y = y;
  		_shout('updateScrollOffset', _offset);
  	},
  	applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
  		_panOffset.x = panX;
  		_panOffset.y = panY;
  		_currZoomLevel = zoomLevel;
  		_applyCurrentZoomPan( allowRenderResolution );
  	},

  	init: function() {

  		if(_isOpen || _isDestroying) {
  			return;
  		}

  		var i;

  		self.framework = framework; // basic functionality
  		self.template = template; // root DOM element of PhotoSwipe
  		self.bg = framework.getChildByClass(template, 'pswp__bg');

  		_initalClassName = template.className;
  		_isOpen = true;
  				
  		_features = framework.detectFeatures();
  		_requestAF = _features.raf;
  		_cancelAF = _features.caf;
  		_transformKey = _features.transform;
  		_oldIE = _features.oldIE;
  		
  		self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
  		self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

  		_containerStyle = self.container.style; // for fast access

  		// Objects that hold slides (there are only 3 in DOM)
  		self.itemHolders = _itemHolders = [
  			{el:self.container.children[0] , wrap:0, index: -1},
  			{el:self.container.children[1] , wrap:0, index: -1},
  			{el:self.container.children[2] , wrap:0, index: -1}
  		];

  		// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
  		_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

  		_setupTransforms();

  		// Setup global events
  		_globalEventHandlers = {
  			resize: self.updateSize,

  			// Fixes: iOS 10.3 resize event
  			// does not update scrollWrap.clientWidth instantly after resize
  			// https://github.com/dimsemenov/PhotoSwipe/issues/1315
  			orientationchange: function() {
  				clearTimeout(_orientationChangeTimeout);
  				_orientationChangeTimeout = setTimeout(function() {
  					if(_viewportSize.x !== self.scrollWrap.clientWidth) {
  						self.updateSize();
  					}
  				}, 500);
  			},
  			scroll: _updatePageScrollOffset,
  			keydown: _onKeyDown,
  			click: _onGlobalClick
  		};

  		// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
  		// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
  		var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
  		if(!_features.animationName || !_features.transform || oldPhone) {
  			_options.showAnimationDuration = _options.hideAnimationDuration = 0;
  		}

  		// init modules
  		for(i = 0; i < _modules.length; i++) {
  			self['init' + _modules[i]]();
  		}
  		
  		// init
  		if(UiClass) {
  			var ui = self.ui = new UiClass(self, framework);
  			ui.init();
  		}

  		_shout('firstUpdate');
  		_currentItemIndex = _currentItemIndex || _options.index || 0;
  		// validate index
  		if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
  			_currentItemIndex = 0;
  		}
  		self.currItem = _getItemAt( _currentItemIndex );

  		
  		if(_features.isOldIOSPhone || _features.isOldAndroid) {
  			_isFixedPosition = false;
  		}
  		
  		template.setAttribute('aria-hidden', 'false');
  		if(_options.modal) {
  			if(!_isFixedPosition) {
  				template.style.position = 'absolute';
  				template.style.top = framework.getScrollY() + 'px';
  			} else {
  				template.style.position = 'fixed';
  			}
  		}

  		if(_currentWindowScrollY === undefined) {
  			_shout('initialLayout');
  			_currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
  		}
  		
  		// add classes to root element of PhotoSwipe
  		var rootClasses = 'pswp--open ';
  		if(_options.mainClass) {
  			rootClasses += _options.mainClass + ' ';
  		}
  		if(_options.showHideOpacity) {
  			rootClasses += 'pswp--animate_opacity ';
  		}
  		rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
  		rootClasses += _features.animationName ? ' pswp--css_animation' : '';
  		rootClasses += _features.svg ? ' pswp--svg' : '';
  		framework.addClass(template, rootClasses);

  		self.updateSize();

  		// initial update
  		_containerShiftIndex = -1;
  		_indexDiff = null;
  		for(i = 0; i < NUM_HOLDERS; i++) {
  			_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
  		}

  		if(!_oldIE) {
  			framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
  		}	

  		_listen('initialZoomInEnd', function() {
  			self.setContent(_itemHolders[0], _currentItemIndex-1);
  			self.setContent(_itemHolders[2], _currentItemIndex+1);

  			_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

  			if(_options.focus) {
  				// focus causes layout, 
  				// which causes lag during the animation, 
  				// that's why we delay it untill the initial zoom transition ends
  				template.focus();
  			}
  			 

  			_bindEvents();
  		});

  		// set content for center slide (first time)
  		self.setContent(_itemHolders[1], _currentItemIndex);
  		
  		self.updateCurrItem();

  		_shout('afterInit');

  		if(!_isFixedPosition) {

  			// On all versions of iOS lower than 8.0, we check size of viewport every second.
  			// 
  			// This is done to detect when Safari top & bottom bars appear, 
  			// as this action doesn't trigger any events (like resize). 
  			// 
  			// On iOS8 they fixed this.
  			// 
  			// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
  			
  			_updateSizeInterval = setInterval(function() {
  				if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)  ) {
  					self.updateSize();
  				}
  			}, 1000);
  		}

  		framework.addClass(template, 'pswp--visible');
  	},

  	// Close the gallery, then destroy it
  	close: function() {
  		if(!_isOpen) {
  			return;
  		}

  		_isOpen = false;
  		_isDestroying = true;
  		_shout('close');
  		_unbindEvents();

  		_showOrHide(self.currItem, null, true, self.destroy);
  	},

  	// destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
  	destroy: function() {
  		_shout('destroy');

  		if(_showOrHideTimeout) {
  			clearTimeout(_showOrHideTimeout);
  		}
  		
  		template.setAttribute('aria-hidden', 'true');
  		template.className = _initalClassName;

  		if(_updateSizeInterval) {
  			clearInterval(_updateSizeInterval);
  		}

  		framework.unbind(self.scrollWrap, _downEvents, self);

  		// we unbind scroll event at the end, as closing animation may depend on it
  		framework.unbind(window, 'scroll', self);

  		_stopDragUpdateLoop();

  		_stopAllAnimations();

  		_listeners = null;
  	},

  	/**
  	 * Pan image to position
  	 * @param {Number} x     
  	 * @param {Number} y     
  	 * @param {Boolean} force Will ignore bounds if set to true.
  	 */
  	panTo: function(x,y,force) {
  		if(!force) {
  			if(x > _currPanBounds.min.x) {
  				x = _currPanBounds.min.x;
  			} else if(x < _currPanBounds.max.x) {
  				x = _currPanBounds.max.x;
  			}

  			if(y > _currPanBounds.min.y) {
  				y = _currPanBounds.min.y;
  			} else if(y < _currPanBounds.max.y) {
  				y = _currPanBounds.max.y;
  			}
  		}
  		
  		_panOffset.x = x;
  		_panOffset.y = y;
  		_applyCurrentZoomPan();
  	},
  	
  	handleEvent: function (e) {
  		e = e || window.event;
  		if(_globalEventHandlers[e.type]) {
  			_globalEventHandlers[e.type](e);
  		}
  	},


  	goTo: function(index) {

  		index = _getLoopedId(index);

  		var diff = index - _currentItemIndex;
  		_indexDiff = diff;

  		_currentItemIndex = index;
  		self.currItem = _getItemAt( _currentItemIndex );
  		_currPositionIndex -= diff;
  		
  		_moveMainScroll(_slideSize.x * _currPositionIndex);
  		

  		_stopAllAnimations();
  		_mainScrollAnimating = false;

  		self.updateCurrItem();
  	},
  	next: function() {
  		self.goTo( _currentItemIndex + 1);
  	},
  	prev: function() {
  		self.goTo( _currentItemIndex - 1);
  	},

  	// update current zoom/pan objects
  	updateCurrZoomItem: function(emulateSetContent) {
  		if(emulateSetContent) {
  			_shout('beforeChange', 0);
  		}

  		// itemHolder[1] is middle (current) item
  		if(_itemHolders[1].el.children.length) {
  			var zoomElement = _itemHolders[1].el.children[0];
  			if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
  				_currZoomElementStyle = zoomElement.style;
  			} else {
  				_currZoomElementStyle = null;
  			}
  		} else {
  			_currZoomElementStyle = null;
  		}
  		
  		_currPanBounds = self.currItem.bounds;	
  		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

  		_panOffset.x = _currPanBounds.center.x;
  		_panOffset.y = _currPanBounds.center.y;

  		if(emulateSetContent) {
  			_shout('afterChange');
  		}
  	},


  	invalidateCurrItems: function() {
  		_itemsNeedUpdate = true;
  		for(var i = 0; i < NUM_HOLDERS; i++) {
  			if( _itemHolders[i].item ) {
  				_itemHolders[i].item.needsUpdate = true;
  			}
  		}
  	},

  	updateCurrItem: function(beforeAnimation) {

  		if(_indexDiff === 0) {
  			return;
  		}

  		var diffAbs = Math.abs(_indexDiff),
  			tempHolder;

  		if(beforeAnimation && diffAbs < 2) {
  			return;
  		}


  		self.currItem = _getItemAt( _currentItemIndex );
  		_renderMaxResolution = false;
  		
  		_shout('beforeChange', _indexDiff);

  		if(diffAbs >= NUM_HOLDERS) {
  			_containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
  			diffAbs = NUM_HOLDERS;
  		}
  		for(var i = 0; i < diffAbs; i++) {
  			if(_indexDiff > 0) {
  				tempHolder = _itemHolders.shift();
  				_itemHolders[NUM_HOLDERS-1] = tempHolder; // move first to last

  				_containerShiftIndex++;
  				_setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
  				self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
  			} else {
  				tempHolder = _itemHolders.pop();
  				_itemHolders.unshift( tempHolder ); // move last to first

  				_containerShiftIndex--;
  				_setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
  				self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
  			}
  			
  		}

  		// reset zoom/pan on previous item
  		if(_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

  			var prevItem = _getItemAt(_prevItemIndex);
  			if(prevItem.initialZoomLevel !== _currZoomLevel) {
  				_calculateItemSize(prevItem , _viewportSize );
  				_setImageSize(prevItem);
  				_applyZoomPanToItem( prevItem ); 				
  			}

  		}

  		// reset diff after update
  		_indexDiff = 0;

  		self.updateCurrZoomItem();

  		_prevItemIndex = _currentItemIndex;

  		_shout('afterChange');
  		
  	},



  	updateSize: function(force) {
  		
  		if(!_isFixedPosition && _options.modal) {
  			var windowScrollY = framework.getScrollY();
  			if(_currentWindowScrollY !== windowScrollY) {
  				template.style.top = windowScrollY + 'px';
  				_currentWindowScrollY = windowScrollY;
  			}
  			if(!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
  				return;
  			}
  			_windowVisibleSize.x = window.innerWidth;
  			_windowVisibleSize.y = window.innerHeight;

  			//template.style.width = _windowVisibleSize.x + 'px';
  			template.style.height = _windowVisibleSize.y + 'px';
  		}



  		_viewportSize.x = self.scrollWrap.clientWidth;
  		_viewportSize.y = self.scrollWrap.clientHeight;

  		_updatePageScrollOffset();

  		_slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
  		_slideSize.y = _viewportSize.y;

  		_moveMainScroll(_slideSize.x * _currPositionIndex);

  		_shout('beforeResize'); // even may be used for example to switch image sources


  		// don't re-calculate size on inital size update
  		if(_containerShiftIndex !== undefined) {

  			var holder,
  				item,
  				hIndex;

  			for(var i = 0; i < NUM_HOLDERS; i++) {
  				holder = _itemHolders[i];
  				_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);

  				hIndex = _currentItemIndex+i-1;

  				if(_options.loop && _getNumItems() > 2) {
  					hIndex = _getLoopedId(hIndex);
  				}

  				// update zoom level on items and refresh source (if needsUpdate)
  				item = _getItemAt( hIndex );

  				// re-render gallery item if `needsUpdate`,
  				// or doesn't have `bounds` (entirely new slide object)
  				if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {

  					self.cleanSlide( item );
  					
  					self.setContent( holder, hIndex );

  					// if "center" slide
  					if(i === 1) {
  						self.currItem = item;
  						self.updateCurrZoomItem(true);
  					}

  					item.needsUpdate = false;

  				} else if(holder.index === -1 && hIndex >= 0) {
  					// add content first time
  					self.setContent( holder, hIndex );
  				}
  				if(item && item.container) {
  					_calculateItemSize(item, _viewportSize);
  					_setImageSize(item);
  					_applyZoomPanToItem( item );
  				}
  				
  			}
  			_itemsNeedUpdate = false;
  		}	

  		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
  		_currPanBounds = self.currItem.bounds;

  		if(_currPanBounds) {
  			_panOffset.x = _currPanBounds.center.x;
  			_panOffset.y = _currPanBounds.center.y;
  			_applyCurrentZoomPan( true );
  		}
  		
  		_shout('resize');
  	},
  	
  	// Zoom current item to
  	zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
  		/*
  			if(destZoomLevel === 'fit') {
  				destZoomLevel = self.currItem.fitRatio;
  			} else if(destZoomLevel === 'fill') {
  				destZoomLevel = self.currItem.fillRatio;
  			}
  		*/

  		if(centerPoint) {
  			_startZoomLevel = _currZoomLevel;
  			_midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x ;
  			_midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y ;
  			_equalizePoints(_startPanOffset, _panOffset);
  		}

  		var destPanBounds = _calculatePanBounds(destZoomLevel, false),
  			destPanOffset = {};

  		_modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
  		_modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

  		var initialZoomLevel = _currZoomLevel;
  		var initialPanOffset = {
  			x: _panOffset.x,
  			y: _panOffset.y
  		};

  		_roundPoint(destPanOffset);

  		var onUpdate = function(now) {
  			if(now === 1) {
  				_currZoomLevel = destZoomLevel;
  				_panOffset.x = destPanOffset.x;
  				_panOffset.y = destPanOffset.y;
  			} else {
  				_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
  				_panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
  				_panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
  			}

  			if(updateFn) {
  				updateFn(now);
  			}

  			_applyCurrentZoomPan( now === 1 );
  		};

  		if(speed) {
  			_animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
  		} else {
  			onUpdate(1);
  		}
  	}


  };


  /*>>core*/

  /*>>gestures*/
  /**
   * Mouse/touch/pointer event handlers.
   * 
   * separated from @core.js for readability
   */

  var MIN_SWIPE_DISTANCE = 30,
  	DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

  var _gestureStartTime,
  	_gestureCheckSpeedTime,

  	// pool of objects that are used during dragging of zooming
  	p = {}, // first point
  	p2 = {}, // second point (for zoom gesture)
  	delta = {},
  	_currPoint = {},
  	_startPoint = {},
  	_currPointers = [],
  	_startMainScrollPos = {},
  	_releaseAnimData,
  	_posPoints = [], // array of points during dragging, used to determine type of gesture
  	_tempPoint = {},

  	_isZoomingIn,
  	_verticalDragInitiated,
  	_oldAndroidTouchEndTimeout,
  	_currZoomedItemIndex = 0,
  	_centerPoint = _getEmptyPoint(),
  	_lastReleaseTime = 0,
  	_isDragging, // at least one pointer is down
  	_isMultitouch, // at least two _pointers are down
  	_zoomStarted, // zoom level changed during zoom gesture
  	_moved,
  	_dragAnimFrame,
  	_mainScrollShifted,
  	_currentPoints, // array of current touch points
  	_isZooming,
  	_currPointsDistance,
  	_startPointsDistance,
  	_currPanBounds,
  	_mainScrollPos = _getEmptyPoint(),
  	_currZoomElementStyle,
  	_mainScrollAnimating, // true, if animation after swipe gesture is running
  	_midZoomPoint = _getEmptyPoint(),
  	_currCenterPoint = _getEmptyPoint(),
  	_direction,
  	_isFirstMove,
  	_opacityChanged,
  	_bgOpacity,
  	_wasOverInitialZoom,

  	_isEqualPoints = function(p1, p2) {
  		return p1.x === p2.x && p1.y === p2.y;
  	},
  	_isNearbyPoints = function(touch0, touch1) {
  		return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
  	},
  	_calculatePointsDistance = function(p1, p2) {
  		_tempPoint.x = Math.abs( p1.x - p2.x );
  		_tempPoint.y = Math.abs( p1.y - p2.y );
  		return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
  	},
  	_stopDragUpdateLoop = function() {
  		if(_dragAnimFrame) {
  			_cancelAF(_dragAnimFrame);
  			_dragAnimFrame = null;
  		}
  	},
  	_dragUpdateLoop = function() {
  		if(_isDragging) {
  			_dragAnimFrame = _requestAF(_dragUpdateLoop);
  			_renderMovement();
  		}
  	},
  	_canPan = function() {
  		return !(_options.scaleMode === 'fit' && _currZoomLevel ===  self.currItem.initialZoomLevel);
  	},
  	
  	// find the closest parent DOM element
  	_closestElement = function(el, fn) {
  	  	if(!el || el === document) {
  	  		return false;
  	  	}

  	  	// don't search elements above pswp__scroll-wrap
  	  	if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
  	  		return false;
  	  	}

  	  	if( fn(el) ) {
  	  		return el;
  	  	}

  	  	return _closestElement(el.parentNode, fn);
  	},

  	_preventObj = {},
  	_preventDefaultEventBehaviour = function(e, isDown) {
  	    _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

  		_shout('preventDragEvent', e, isDown, _preventObj);
  		return _preventObj.prevent;

  	},
  	_convertTouchToPoint = function(touch, p) {
  		p.x = touch.pageX;
  		p.y = touch.pageY;
  		p.id = touch.identifier;
  		return p;
  	},
  	_findCenterOfPoints = function(p1, p2, pCenter) {
  		pCenter.x = (p1.x + p2.x) * 0.5;
  		pCenter.y = (p1.y + p2.y) * 0.5;
  	},
  	_pushPosPoint = function(time, x, y) {
  		if(time - _gestureCheckSpeedTime > 50) {
  			var o = _posPoints.length > 2 ? _posPoints.shift() : {};
  			o.x = x;
  			o.y = y; 
  			_posPoints.push(o);
  			_gestureCheckSpeedTime = time;
  		}
  	},

  	_calculateVerticalDragOpacityRatio = function() {
  		var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
  		return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
  	},

  	
  	// points pool, reused during touch events
  	_ePoint1 = {},
  	_ePoint2 = {},
  	_tempPointsArr = [],
  	_tempCounter,
  	_getTouchPoints = function(e) {
  		// clean up previous points, without recreating array
  		while(_tempPointsArr.length > 0) {
  			_tempPointsArr.pop();
  		}

  		if(!_pointerEventEnabled) {
  			if(e.type.indexOf('touch') > -1) {

  				if(e.touches && e.touches.length > 0) {
  					_tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
  					if(e.touches.length > 1) {
  						_tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
  					}
  				}
  				
  			} else {
  				_ePoint1.x = e.pageX;
  				_ePoint1.y = e.pageY;
  				_ePoint1.id = '';
  				_tempPointsArr[0] = _ePoint1;//_ePoint1;
  			}
  		} else {
  			_tempCounter = 0;
  			// we can use forEach, as pointer events are supported only in modern browsers
  			_currPointers.forEach(function(p) {
  				if(_tempCounter === 0) {
  					_tempPointsArr[0] = p;
  				} else if(_tempCounter === 1) {
  					_tempPointsArr[1] = p;
  				}
  				_tempCounter++;

  			});
  		}
  		return _tempPointsArr;
  	},

  	_panOrMoveMainScroll = function(axis, delta) {

  		var panFriction,
  			overDiff = 0,
  			newOffset = _panOffset[axis] + delta[axis],
  			startOverDiff,
  			dir = delta[axis] > 0,
  			newMainScrollPosition = _mainScrollPos.x + delta.x,
  			mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
  			newPanPos,
  			newMainScrollPos;

  		// calculate fdistance over the bounds and friction
  		if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
  			panFriction = _options.panEndFriction;
  			// Linear increasing of friction, so at 1/4 of viewport it's at max value. 
  			// Looks not as nice as was expected. Left for history.
  			// panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
  		} else {
  			panFriction = 1;
  		}
  		
  		newOffset = _panOffset[axis] + delta[axis] * panFriction;

  		// move main scroll or start panning
  		if(_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


  			if(!_currZoomElementStyle) {
  				
  				newMainScrollPos = newMainScrollPosition;

  			} else if(_direction === 'h' && axis === 'x' && !_zoomStarted ) {
  				
  				if(dir) {
  					if(newOffset > _currPanBounds.min[axis]) {
  						panFriction = _options.panEndFriction;
  						overDiff = _currPanBounds.min[axis] - newOffset;
  						startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
  					}
  					
  					// drag right
  					if( (startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
  						newMainScrollPos = newMainScrollPosition;
  						if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
  							newMainScrollPos = _startMainScrollPos.x;
  						}
  					} else {
  						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
  							newPanPos = newOffset;
  						}
  						
  					}

  				} else {

  					if(newOffset < _currPanBounds.max[axis] ) {
  						panFriction =_options.panEndFriction;
  						overDiff = newOffset - _currPanBounds.max[axis];
  						startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
  					}

  					if( (startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
  						newMainScrollPos = newMainScrollPosition;

  						if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
  							newMainScrollPos = _startMainScrollPos.x;
  						}

  					} else {
  						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
  							newPanPos = newOffset;
  						}
  					}

  				}


  				//
  			}

  			if(axis === 'x') {

  				if(newMainScrollPos !== undefined) {
  					_moveMainScroll(newMainScrollPos, true);
  					if(newMainScrollPos === _startMainScrollPos.x) {
  						_mainScrollShifted = false;
  					} else {
  						_mainScrollShifted = true;
  					}
  				}

  				if(_currPanBounds.min.x !== _currPanBounds.max.x) {
  					if(newPanPos !== undefined) {
  						_panOffset.x = newPanPos;
  					} else if(!_mainScrollShifted) {
  						_panOffset.x += delta.x * panFriction;
  					}
  				}

  				return newMainScrollPos !== undefined;
  			}

  		}

  		if(!_mainScrollAnimating) {
  			
  			if(!_mainScrollShifted) {
  				if(_currZoomLevel > self.currItem.fitRatio) {
  					_panOffset[axis] += delta[axis] * panFriction;
  				
  				}
  			}

  			
  		}
  		
  	},

  	// Pointerdown/touchstart/mousedown handler
  	_onDragStart = function(e) {

  		// Allow dragging only via left mouse button.
  		// As this handler is not added in IE8 - we ignore e.which
  		// 
  		// http://www.quirksmode.org/js/events_properties.html
  		// https://developer.mozilla.org/en-US/docs/Web/API/event.button
  		if(e.type === 'mousedown' && e.button > 0  ) {
  			return;
  		}

  		if(_initialZoomRunning) {
  			e.preventDefault();
  			return;
  		}

  		if(_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
  			return;
  		}

  		if(_preventDefaultEventBehaviour(e, true)) {
  			e.preventDefault();
  		}



  		_shout('pointerDown');

  		if(_pointerEventEnabled) {
  			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
  			if(pointerIndex < 0) {
  				pointerIndex = _currPointers.length;
  			}
  			_currPointers[pointerIndex] = {x:e.pageX, y:e.pageY, id: e.pointerId};
  		}
  		


  		var startPointsList = _getTouchPoints(e),
  			numPoints = startPointsList.length;

  		_currentPoints = null;

  		_stopAllAnimations();

  		// init drag
  		if(!_isDragging || numPoints === 1) {

  			

  			_isDragging = _isFirstMove = true;
  			framework.bind(window, _upMoveEvents, self);

  			_isZoomingIn = 
  				_wasOverInitialZoom = 
  				_opacityChanged = 
  				_verticalDragInitiated = 
  				_mainScrollShifted = 
  				_moved = 
  				_isMultitouch = 
  				_zoomStarted = false;

  			_direction = null;

  			_shout('firstTouchStart', startPointsList);

  			_equalizePoints(_startPanOffset, _panOffset);

  			_currPanDist.x = _currPanDist.y = 0;
  			_equalizePoints(_currPoint, startPointsList[0]);
  			_equalizePoints(_startPoint, _currPoint);

  			//_equalizePoints(_startMainScrollPos, _mainScrollPos);
  			_startMainScrollPos.x = _slideSize.x * _currPositionIndex;

  			_posPoints = [{
  				x: _currPoint.x,
  				y: _currPoint.y
  			}];

  			_gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

  			//_mainScrollAnimationEnd(true);
  			_calculatePanBounds( _currZoomLevel, true );
  			
  			// Start rendering
  			_stopDragUpdateLoop();
  			_dragUpdateLoop();
  			
  		}

  		// init zoom
  		if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
  			_startZoomLevel = _currZoomLevel;
  			_zoomStarted = false; // true if zoom changed at least once

  			_isZooming = _isMultitouch = true;
  			_currPanDist.y = _currPanDist.x = 0;

  			_equalizePoints(_startPanOffset, _panOffset);

  			_equalizePoints(p, startPointsList[0]);
  			_equalizePoints(p2, startPointsList[1]);

  			_findCenterOfPoints(p, p2, _currCenterPoint);

  			_midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
  			_midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
  			_currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
  		}


  	},

  	// Pointermove/touchmove/mousemove handler
  	_onDragMove = function(e) {

  		e.preventDefault();

  		if(_pointerEventEnabled) {
  			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
  			if(pointerIndex > -1) {
  				var p = _currPointers[pointerIndex];
  				p.x = e.pageX;
  				p.y = e.pageY; 
  			}
  		}

  		if(_isDragging) {
  			var touchesList = _getTouchPoints(e);
  			if(!_direction && !_moved && !_isZooming) {

  				if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
  					// if main scroll position is shifted – direction is always horizontal
  					_direction = 'h';
  				} else {
  					var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
  					// check the direction of movement
  					if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
  						_direction = diff > 0 ? 'h' : 'v';
  						_currentPoints = touchesList;
  					}
  				}
  				
  			} else {
  				_currentPoints = touchesList;
  			}
  		}	
  	},
  	// 
  	_renderMovement =  function() {

  		if(!_currentPoints) {
  			return;
  		}

  		var numPoints = _currentPoints.length;

  		if(numPoints === 0) {
  			return;
  		}

  		_equalizePoints(p, _currentPoints[0]);

  		delta.x = p.x - _currPoint.x;
  		delta.y = p.y - _currPoint.y;

  		if(_isZooming && numPoints > 1) {
  			// Handle behaviour for more than 1 point

  			_currPoint.x = p.x;
  			_currPoint.y = p.y;
  		
  			// check if one of two points changed
  			if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
  				return;
  			}

  			_equalizePoints(p2, _currentPoints[1]);


  			if(!_zoomStarted) {
  				_zoomStarted = true;
  				_shout('zoomGestureStarted');
  			}
  			
  			// Distance between two points
  			var pointsDistance = _calculatePointsDistance(p,p2);

  			var zoomLevel = _calculateZoomLevel(pointsDistance);

  			// slightly over the of initial zoom level
  			if(zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
  				_wasOverInitialZoom = true;
  			}

  			// Apply the friction if zoom level is out of the bounds
  			var zoomFriction = 1,
  				minZoomLevel = _getMinZoomLevel(),
  				maxZoomLevel = _getMaxZoomLevel();

  			if ( zoomLevel < minZoomLevel ) {
  				
  				if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
  					// fade out background if zooming out
  					var minusDiff = minZoomLevel - zoomLevel;
  					var percent = 1 - minusDiff / (minZoomLevel / 1.2);

  					_applyBgOpacity(percent);
  					_shout('onPinchClose', percent);
  					_opacityChanged = true;
  				} else {
  					zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
  					if(zoomFriction > 1) {
  						zoomFriction = 1;
  					}
  					zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
  				}
  				
  			} else if ( zoomLevel > maxZoomLevel ) {
  				// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
  				zoomFriction = (zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
  				if(zoomFriction > 1) {
  					zoomFriction = 1;
  				}
  				zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
  			}

  			if(zoomFriction < 0) {
  				zoomFriction = 0;
  			}

  			// distance between touch points after friction is applied
  			_currPointsDistance = pointsDistance;

  			// _centerPoint - The point in the middle of two pointers
  			_findCenterOfPoints(p, p2, _centerPoint);
  		
  			// paning with two pointers pressed
  			_currPanDist.x += _centerPoint.x - _currCenterPoint.x;
  			_currPanDist.y += _centerPoint.y - _currCenterPoint.y;
  			_equalizePoints(_currCenterPoint, _centerPoint);

  			_panOffset.x = _calculatePanOffset('x', zoomLevel);
  			_panOffset.y = _calculatePanOffset('y', zoomLevel);

  			_isZoomingIn = zoomLevel > _currZoomLevel;
  			_currZoomLevel = zoomLevel;
  			_applyCurrentZoomPan();

  		} else {

  			// handle behaviour for one point (dragging or panning)

  			if(!_direction) {
  				return;
  			}

  			if(_isFirstMove) {
  				_isFirstMove = false;

  				// subtract drag distance that was used during the detection direction  

  				if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
  					delta.x -= _currentPoints[0].x - _startPoint.x;
  				}
  				
  				if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
  					delta.y -= _currentPoints[0].y - _startPoint.y;
  				}
  			}

  			_currPoint.x = p.x;
  			_currPoint.y = p.y;

  			// do nothing if pointers position hasn't changed
  			if(delta.x === 0 && delta.y === 0) {
  				return;
  			}

  			if(_direction === 'v' && _options.closeOnVerticalDrag) {
  				if(!_canPan()) {
  					_currPanDist.y += delta.y;
  					_panOffset.y += delta.y;

  					var opacityRatio = _calculateVerticalDragOpacityRatio();

  					_verticalDragInitiated = true;
  					_shout('onVerticalDrag', opacityRatio);

  					_applyBgOpacity(opacityRatio);
  					_applyCurrentZoomPan();
  					return ;
  				}
  			}

  			_pushPosPoint(_getCurrentTime(), p.x, p.y);

  			_moved = true;
  			_currPanBounds = self.currItem.bounds;
  			
  			var mainScrollChanged = _panOrMoveMainScroll('x', delta);
  			if(!mainScrollChanged) {
  				_panOrMoveMainScroll('y', delta);

  				_roundPoint(_panOffset);
  				_applyCurrentZoomPan();
  			}

  		}

  	},
  	
  	// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
  	_onDragRelease = function(e) {

  		if(_features.isOldAndroid ) {

  			if(_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
  				return;
  			}

  			// on Android (v4.1, 4.2, 4.3 & possibly older) 
  			// ghost mousedown/up event isn't preventable via e.preventDefault,
  			// which causes fake mousedown event
  			// so we block mousedown/up for 600ms
  			if( e.type.indexOf('touch') > -1 ) {
  				clearTimeout(_oldAndroidTouchEndTimeout);
  				_oldAndroidTouchEndTimeout = setTimeout(function() {
  					_oldAndroidTouchEndTimeout = 0;
  				}, 600);
  			}
  			
  		}

  		_shout('pointerUp');

  		if(_preventDefaultEventBehaviour(e, false)) {
  			e.preventDefault();
  		}

  		var releasePoint;

  		if(_pointerEventEnabled) {
  			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
  			
  			if(pointerIndex > -1) {
  				releasePoint = _currPointers.splice(pointerIndex, 1)[0];

  				if(navigator.pointerEnabled) {
  					releasePoint.type = e.pointerType || 'mouse';
  				} else {
  					var MSPOINTER_TYPES = {
  						4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
  						2: 'touch', // event.MSPOINTER_TYPE_TOUCH 
  						3: 'pen' // event.MSPOINTER_TYPE_PEN
  					};
  					releasePoint.type = MSPOINTER_TYPES[e.pointerType];

  					if(!releasePoint.type) {
  						releasePoint.type = e.pointerType || 'mouse';
  					}
  				}

  			}
  		}

  		var touchList = _getTouchPoints(e),
  			gestureType,
  			numPoints = touchList.length;

  		if(e.type === 'mouseup') {
  			numPoints = 0;
  		}

  		// Do nothing if there were 3 touch points or more
  		if(numPoints === 2) {
  			_currentPoints = null;
  			return true;
  		}

  		// if second pointer released
  		if(numPoints === 1) {
  			_equalizePoints(_startPoint, touchList[0]);
  		}				


  		// pointer hasn't moved, send "tap release" point
  		if(numPoints === 0 && !_direction && !_mainScrollAnimating) {
  			if(!releasePoint) {
  				if(e.type === 'mouseup') {
  					releasePoint = {x: e.pageX, y: e.pageY, type:'mouse'};
  				} else if(e.changedTouches && e.changedTouches[0]) {
  					releasePoint = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
  				}		
  			}

  			_shout('touchRelease', e, releasePoint);
  		}

  		// Difference in time between releasing of two last touch points (zoom gesture)
  		var releaseTimeDiff = -1;

  		// Gesture completed, no pointers left
  		if(numPoints === 0) {
  			_isDragging = false;
  			framework.unbind(window, _upMoveEvents, self);

  			_stopDragUpdateLoop();

  			if(_isZooming) {
  				// Two points released at the same time
  				releaseTimeDiff = 0;
  			} else if(_lastReleaseTime !== -1) {
  				releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
  			}
  		}
  		_lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
  		
  		if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
  			gestureType = 'zoom';
  		} else {
  			gestureType = 'swipe';
  		}

  		if(_isZooming && numPoints < 2) {
  			_isZooming = false;

  			// Only second point released
  			if(numPoints === 1) {
  				gestureType = 'zoomPointerUp';
  			}
  			_shout('zoomGestureEnded');
  		}

  		_currentPoints = null;
  		if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
  			// nothing to animate
  			return;
  		}
  	
  		_stopAllAnimations();

  		
  		if(!_releaseAnimData) {
  			_releaseAnimData = _initDragReleaseAnimationData();
  		}
  		
  		_releaseAnimData.calculateSwipeSpeed('x');


  		if(_verticalDragInitiated) {

  			var opacityRatio = _calculateVerticalDragOpacityRatio();

  			if(opacityRatio < _options.verticalDragRange) {
  				self.close();
  			} else {
  				var initalPanY = _panOffset.y,
  					initialBgOpacity = _bgOpacity;

  				_animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {
  					
  					_panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

  					_applyBgOpacity(  (1 - initialBgOpacity) * now + initialBgOpacity );
  					_applyCurrentZoomPan();
  				});

  				_shout('onVerticalDrag', 1);
  			}

  			return;
  		}


  		// main scroll 
  		if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
  			var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
  			if(itemChanged) {
  				return;
  			}
  			gestureType = 'zoomPointerUp';
  		}

  		// prevent zoom/pan animation when main scroll animation runs
  		if(_mainScrollAnimating) {
  			return;
  		}
  		
  		// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
  		if(gestureType !== 'swipe') {
  			_completeZoomGesture();
  			return;
  		}
  	
  		// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
  		if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
  			_completePanGesture(_releaseAnimData);
  		}
  	},


  	// Returns object with data about gesture
  	// It's created only once and then reused
  	_initDragReleaseAnimationData  = function() {
  		// temp local vars
  		var lastFlickDuration,
  			tempReleasePos;

  		// s = this
  		var s = {
  			lastFlickOffset: {},
  			lastFlickDist: {},
  			lastFlickSpeed: {},
  			slowDownRatio:  {},
  			slowDownRatioReverse:  {},
  			speedDecelerationRatio:  {},
  			speedDecelerationRatioAbs:  {},
  			distanceOffset:  {},
  			backAnimDestination: {},
  			backAnimStarted: {},
  			calculateSwipeSpeed: function(axis) {
  				

  				if( _posPoints.length > 1) {
  					lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
  					tempReleasePos = _posPoints[_posPoints.length-2][axis];
  				} else {
  					lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
  					tempReleasePos = _startPoint[axis];
  				}
  				s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
  				s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
  				if(s.lastFlickDist[axis] > 20) {
  					s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
  				} else {
  					s.lastFlickSpeed[axis] = 0;
  				}
  				if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
  					s.lastFlickSpeed[axis] = 0;
  				}
  				
  				s.slowDownRatio[axis] = 0.95;
  				s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
  				s.speedDecelerationRatio[axis] = 1;
  			},

  			calculateOverBoundsAnimOffset: function(axis, speed) {
  				if(!s.backAnimStarted[axis]) {

  					if(_panOffset[axis] > _currPanBounds.min[axis]) {
  						s.backAnimDestination[axis] = _currPanBounds.min[axis];
  						
  					} else if(_panOffset[axis] < _currPanBounds.max[axis]) {
  						s.backAnimDestination[axis] = _currPanBounds.max[axis];
  					}

  					if(s.backAnimDestination[axis] !== undefined) {
  						s.slowDownRatio[axis] = 0.7;
  						s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
  						if(s.speedDecelerationRatioAbs[axis] < 0.05) {

  							s.lastFlickSpeed[axis] = 0;
  							s.backAnimStarted[axis] = true;

  							_animateProp('bounceZoomPan'+axis,_panOffset[axis], 
  								s.backAnimDestination[axis], 
  								speed || 300, 
  								framework.easing.sine.out, 
  								function(pos) {
  									_panOffset[axis] = pos;
  									_applyCurrentZoomPan();
  								}
  							);

  						}
  					}
  				}
  			},

  			// Reduces the speed by slowDownRatio (per 10ms)
  			calculateAnimOffset: function(axis) {
  				if(!s.backAnimStarted[axis]) {
  					s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + 
  												s.slowDownRatioReverse[axis] - 
  												s.slowDownRatioReverse[axis] * s.timeDiff / 10);

  					s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
  					s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
  					_panOffset[axis] += s.distanceOffset[axis];

  				}
  			},

  			panAnimLoop: function() {
  				if ( _animations.zoomPan ) {
  					_animations.zoomPan.raf = _requestAF(s.panAnimLoop);

  					s.now = _getCurrentTime();
  					s.timeDiff = s.now - s.lastNow;
  					s.lastNow = s.now;
  					
  					s.calculateAnimOffset('x');
  					s.calculateAnimOffset('y');

  					_applyCurrentZoomPan();
  					
  					s.calculateOverBoundsAnimOffset('x');
  					s.calculateOverBoundsAnimOffset('y');


  					if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

  						// round pan position
  						_panOffset.x = Math.round(_panOffset.x);
  						_panOffset.y = Math.round(_panOffset.y);
  						_applyCurrentZoomPan();
  						
  						_stopAnimation('zoomPan');
  						return;
  					}
  				}

  			}
  		};
  		return s;
  	},

  	_completePanGesture = function(animData) {
  		// calculate swipe speed for Y axis (paanning)
  		animData.calculateSwipeSpeed('y');

  		_currPanBounds = self.currItem.bounds;
  		
  		animData.backAnimDestination = {};
  		animData.backAnimStarted = {};

  		// Avoid acceleration animation if speed is too low
  		if(Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05 ) {
  			animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

  			// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
  			animData.calculateOverBoundsAnimOffset('x');
  			animData.calculateOverBoundsAnimOffset('y');
  			return true;
  		}

  		// Animation loop that controls the acceleration after pan gesture ends
  		_registerStartAnimation('zoomPan');
  		animData.lastNow = _getCurrentTime();
  		animData.panAnimLoop();
  	},


  	_finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
  		var itemChanged;
  		if(!_mainScrollAnimating) {
  			_currZoomedItemIndex = _currentItemIndex;
  		}


  		
  		var itemsDiff;

  		if(gestureType === 'swipe') {
  			var totalShiftDist = _currPoint.x - _startPoint.x,
  				isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

  			// if container is shifted for more than MIN_SWIPE_DISTANCE, 
  			// and last flick gesture was in right direction
  			if(totalShiftDist > MIN_SWIPE_DISTANCE && 
  				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
  				// go to prev item
  				itemsDiff = -1;
  			} else if(totalShiftDist < -MIN_SWIPE_DISTANCE && 
  				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
  				// go to next item
  				itemsDiff = 1;
  			}
  		}

  		var nextCircle;

  		if(itemsDiff) {
  			
  			_currentItemIndex += itemsDiff;

  			if(_currentItemIndex < 0) {
  				_currentItemIndex = _options.loop ? _getNumItems()-1 : 0;
  				nextCircle = true;
  			} else if(_currentItemIndex >= _getNumItems()) {
  				_currentItemIndex = _options.loop ? 0 : _getNumItems()-1;
  				nextCircle = true;
  			}

  			if(!nextCircle || _options.loop) {
  				_indexDiff += itemsDiff;
  				_currPositionIndex -= itemsDiff;
  				itemChanged = true;
  			}
  			

  			
  		}

  		var animateToX = _slideSize.x * _currPositionIndex;
  		var animateToDist = Math.abs( animateToX - _mainScrollPos.x );
  		var finishAnimDuration;


  		if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
  			// "return to current" duration, e.g. when dragging from slide 0 to -1
  			finishAnimDuration = 333; 
  		} else {
  			finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ? 
  									animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) : 
  									333;

  			finishAnimDuration = Math.min(finishAnimDuration, 400);
  			finishAnimDuration = Math.max(finishAnimDuration, 250);
  		}

  		if(_currZoomedItemIndex === _currentItemIndex) {
  			itemChanged = false;
  		}
  		
  		_mainScrollAnimating = true;
  		
  		_shout('mainScrollAnimStart');

  		_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, 
  			_moveMainScroll,
  			function() {
  				_stopAllAnimations();
  				_mainScrollAnimating = false;
  				_currZoomedItemIndex = -1;
  				
  				if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
  					self.updateCurrItem();
  				}
  				
  				_shout('mainScrollAnimComplete');
  			}
  		);

  		if(itemChanged) {
  			self.updateCurrItem(true);
  		}

  		return itemChanged;
  	},

  	_calculateZoomLevel = function(touchesDistance) {
  		return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
  	},

  	// Resets zoom if it's out of bounds
  	_completeZoomGesture = function() {
  		var destZoomLevel = _currZoomLevel,
  			minZoomLevel = _getMinZoomLevel(),
  			maxZoomLevel = _getMaxZoomLevel();

  		if ( _currZoomLevel < minZoomLevel ) {
  			destZoomLevel = minZoomLevel;
  		} else if ( _currZoomLevel > maxZoomLevel ) {
  			destZoomLevel = maxZoomLevel;
  		}

  		var destOpacity = 1,
  			onUpdate,
  			initialOpacity = _bgOpacity;

  		if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
  			//_closedByScroll = true;
  			self.close();
  			return true;
  		}

  		if(_opacityChanged) {
  			onUpdate = function(now) {
  				_applyBgOpacity(  (destOpacity - initialOpacity) * now + initialOpacity );
  			};
  		}

  		self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
  		return true;
  	};


  _registerModule('Gestures', {
  	publicMethods: {

  		initGestures: function() {

  			// helper function that builds touch/pointer/mouse events
  			var addEventNames = function(pref, down, move, up, cancel) {
  				_dragStartEvent = pref + down;
  				_dragMoveEvent = pref + move;
  				_dragEndEvent = pref + up;
  				if(cancel) {
  					_dragCancelEvent = pref + cancel;
  				} else {
  					_dragCancelEvent = '';
  				}
  			};

  			_pointerEventEnabled = _features.pointerEvent;
  			if(_pointerEventEnabled && _features.touch) {
  				// we don't need touch events, if browser supports pointer events
  				_features.touch = false;
  			}

  			if(_pointerEventEnabled) {
  				if(navigator.pointerEnabled) {
  					addEventNames('pointer', 'down', 'move', 'up', 'cancel');
  				} else {
  					// IE10 pointer events are case-sensitive
  					addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
  				}
  			} else if(_features.touch) {
  				addEventNames('touch', 'start', 'move', 'end', 'cancel');
  				_likelyTouchDevice = true;
  			} else {
  				addEventNames('mouse', 'down', 'move', 'up');	
  			}

  			_upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent  + ' ' +  _dragCancelEvent;
  			_downEvents = _dragStartEvent;

  			if(_pointerEventEnabled && !_likelyTouchDevice) {
  				_likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
  			}
  			// make variable public
  			self.likelyTouchDevice = _likelyTouchDevice; 
  			
  			_globalEventHandlers[_dragStartEvent] = _onDragStart;
  			_globalEventHandlers[_dragMoveEvent] = _onDragMove;
  			_globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

  			if(_dragCancelEvent) {
  				_globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
  			}

  			// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
  			if(_features.touch) {
  				_downEvents += ' mousedown';
  				_upMoveEvents += ' mousemove mouseup';
  				_globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
  				_globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
  				_globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
  			}

  			if(!_likelyTouchDevice) {
  				// don't allow pan to next slide from zoomed state on Desktop
  				_options.allowPanToNext = false;
  			}
  		}

  	}
  });


  /*>>gestures*/

  /*>>show-hide-transition*/
  /**
   * show-hide-transition.js:
   *
   * Manages initial opening or closing transition.
   *
   * If you're not planning to use transition for gallery at all,
   * you may set options hideAnimationDuration and showAnimationDuration to 0,
   * and just delete startAnimation function.
   * 
   */


  var _showOrHideTimeout,
  	_showOrHide = function(item, img, out, completeFn) {

  		if(_showOrHideTimeout) {
  			clearTimeout(_showOrHideTimeout);
  		}

  		_initialZoomRunning = true;
  		_initialContentSet = true;
  		
  		// dimensions of small thumbnail {x:,y:,w:}.
  		// Height is optional, as calculated based on large image.
  		var thumbBounds; 
  		if(item.initialLayout) {
  			thumbBounds = item.initialLayout;
  			item.initialLayout = null;
  		} else {
  			thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
  		}

  		var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

  		var onComplete = function() {
  			_stopAnimation('initialZoom');
  			if(!out) {
  				_applyBgOpacity(1);
  				if(img) {
  					img.style.display = 'block';
  				}
  				framework.addClass(template, 'pswp--animated-in');
  				_shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
  			} else {
  				self.template.removeAttribute('style');
  				self.bg.removeAttribute('style');
  			}

  			if(completeFn) {
  				completeFn();
  			}
  			_initialZoomRunning = false;
  		};

  		// if bounds aren't provided, just open gallery without animation
  		if(!duration || !thumbBounds || thumbBounds.x === undefined) {

  			_shout('initialZoom' + (out ? 'Out' : 'In') );

  			_currZoomLevel = item.initialZoomLevel;
  			_equalizePoints(_panOffset,  item.initialPosition );
  			_applyCurrentZoomPan();

  			template.style.opacity = out ? 0 : 1;
  			_applyBgOpacity(1);

  			if(duration) {
  				setTimeout(function() {
  					onComplete();
  				}, duration);
  			} else {
  				onComplete();
  			}

  			return;
  		}

  		var startAnimation = function() {
  			var closeWithRaf = _closedByScroll,
  				fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
  			
  			// apply hw-acceleration to image
  			if(item.miniImg) {
  				item.miniImg.style.webkitBackfaceVisibility = 'hidden';
  			}

  			if(!out) {
  				_currZoomLevel = thumbBounds.w / item.w;
  				_panOffset.x = thumbBounds.x;
  				_panOffset.y = thumbBounds.y - _initalWindowScrollY;

  				self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
  				_applyCurrentZoomPan();
  			}

  			_registerStartAnimation('initialZoom');
  			
  			if(out && !closeWithRaf) {
  				framework.removeClass(template, 'pswp--animated-in');
  			}

  			if(fadeEverything) {
  				if(out) {
  					framework[ (closeWithRaf ? 'remove' : 'add') + 'Class' ](template, 'pswp--animate_opacity');
  				} else {
  					setTimeout(function() {
  						framework.addClass(template, 'pswp--animate_opacity');
  					}, 30);
  				}
  			}

  			_showOrHideTimeout = setTimeout(function() {

  				_shout('initialZoom' + (out ? 'Out' : 'In') );
  				

  				if(!out) {

  					// "in" animation always uses CSS transitions (instead of rAF).
  					// CSS transition work faster here, 
  					// as developer may also want to animate other things, 
  					// like ui on top of sliding area, which can be animated just via CSS
  					
  					_currZoomLevel = item.initialZoomLevel;
  					_equalizePoints(_panOffset,  item.initialPosition );
  					_applyCurrentZoomPan();
  					_applyBgOpacity(1);

  					if(fadeEverything) {
  						template.style.opacity = 1;
  					} else {
  						_applyBgOpacity(1);
  					}

  					_showOrHideTimeout = setTimeout(onComplete, duration + 20);
  				} else {

  					// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
  					var destZoomLevel = thumbBounds.w / item.w,
  						initialPanOffset = {
  							x: _panOffset.x,
  							y: _panOffset.y
  						},
  						initialZoomLevel = _currZoomLevel,
  						initalBgOpacity = _bgOpacity,
  						onUpdate = function(now) {
  							
  							if(now === 1) {
  								_currZoomLevel = destZoomLevel;
  								_panOffset.x = thumbBounds.x;
  								_panOffset.y = thumbBounds.y  - _currentWindowScrollY;
  							} else {
  								_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
  								_panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
  								_panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
  							}
  							
  							_applyCurrentZoomPan();
  							if(fadeEverything) {
  								template.style.opacity = 1 - now;
  							} else {
  								_applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
  							}
  						};

  					if(closeWithRaf) {
  						_animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
  					} else {
  						onUpdate(1);
  						_showOrHideTimeout = setTimeout(onComplete, duration + 20);
  					}
  				}
  			
  			}, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
  					// create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
  					// Which avoids lag at the beginning of scale transition.
  		};
  		startAnimation();

  		
  	};

  /*>>show-hide-transition*/

  /*>>items-controller*/
  /**
  *
  * Controller manages gallery items, their dimensions, and their content.
  * 
  */

  var _items,
  	_tempPanAreaSize = {},
  	_imagesToAppendPool = [],
  	_initialContentSet,
  	_initialZoomRunning,
  	_controllerDefaultOptions = {
  		index: 0,
  		errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
  		forceProgressiveLoading: false, // TODO
  		preload: [1,1],
  		getNumItemsFn: function() {
  			return _items.length;
  		}
  	};


  var _getItemAt,
  	_getNumItems,
  	_initialIsLoop,
  	_getZeroBounds = function() {
  		return {
  			center:{x:0,y:0}, 
  			max:{x:0,y:0}, 
  			min:{x:0,y:0}
  		};
  	},
  	_calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH ) {
  		var bounds = item.bounds;

  		// position of element when it's centered
  		bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
  		bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

  		// maximum pan position
  		bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ? 
  							Math.round(_tempPanAreaSize.x - realPanElementW) : 
  							bounds.center.x;
  		
  		bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ? 
  							Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : 
  							bounds.center.y;
  		
  		// minimum pan position
  		bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
  		bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
  	},
  	_calculateItemSize = function(item, viewportSize, zoomLevel) {

  		if (item.src && !item.loadError) {
  			var isInitial = !zoomLevel;
  			
  			if(isInitial) {
  				if(!item.vGap) {
  					item.vGap = {top:0,bottom:0};
  				}
  				// allows overriding vertical margin for individual items
  				_shout('parseVerticalMargin', item);
  			}


  			_tempPanAreaSize.x = viewportSize.x;
  			_tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

  			if (isInitial) {
  				var hRatio = _tempPanAreaSize.x / item.w;
  				var vRatio = _tempPanAreaSize.y / item.h;

  				item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
  				//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

  				var scaleMode = _options.scaleMode;

  				if (scaleMode === 'orig') {
  					zoomLevel = 1;
  				} else if (scaleMode === 'fit') {
  					zoomLevel = item.fitRatio;
  				}

  				if (zoomLevel > 1) {
  					zoomLevel = 1;
  				}

  				item.initialZoomLevel = zoomLevel;
  				
  				if(!item.bounds) {
  					// reuse bounds object
  					item.bounds = _getZeroBounds(); 
  				}
  			}

  			if(!zoomLevel) {
  				return;
  			}

  			_calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

  			if (isInitial && zoomLevel === item.initialZoomLevel) {
  				item.initialPosition = item.bounds.center;
  			}

  			return item.bounds;
  		} else {
  			item.w = item.h = 0;
  			item.initialZoomLevel = item.fitRatio = 1;
  			item.bounds = _getZeroBounds();
  			item.initialPosition = item.bounds.center;

  			// if it's not image, we return zero bounds (content is not zoomable)
  			return item.bounds;
  		}
  		
  	},

  	


  	_appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
  		

  		if(item.loadError) {
  			return;
  		}

  		if(img) {

  			item.imageAppended = true;
  			_setImageSize(item, img, (item === self.currItem && _renderMaxResolution) );
  			
  			baseDiv.appendChild(img);

  			if(keepPlaceholder) {
  				setTimeout(function() {
  					if(item && item.loaded && item.placeholder) {
  						item.placeholder.style.display = 'none';
  						item.placeholder = null;
  					}
  				}, 500);
  			}
  		}
  	},
  	


  	_preloadImage = function(item) {
  		item.loading = true;
  		item.loaded = false;
  		var img = item.img = framework.createEl('pswp__img', 'img');
  		var onComplete = function() {
  			item.loading = false;
  			item.loaded = true;

  			if(item.loadComplete) {
  				item.loadComplete(item);
  			} else {
  				item.img = null; // no need to store image object
  			}
  			img.onload = img.onerror = null;
  			img = null;
  		};
  		img.onload = onComplete;
  		img.onerror = function() {
  			item.loadError = true;
  			onComplete();
  		};		

  		img.src = item.src;// + '?a=' + Math.random();

  		return img;
  	},
  	_checkForError = function(item, cleanUp) {
  		if(item.src && item.loadError && item.container) {

  			if(cleanUp) {
  				item.container.innerHTML = '';
  			}

  			item.container.innerHTML = _options.errorMsg.replace('%url%',  item.src );
  			return true;
  			
  		}
  	},
  	_setImageSize = function(item, img, maxRes) {
  		if(!item.src) {
  			return;
  		}

  		if(!img) {
  			img = item.container.lastChild;
  		}

  		var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
  			h = maxRes ? item.h : Math.round(item.h * item.fitRatio);
  		
  		if(item.placeholder && !item.loaded) {
  			item.placeholder.style.width = w + 'px';
  			item.placeholder.style.height = h + 'px';
  		}

  		img.style.width = w + 'px';
  		img.style.height = h + 'px';
  	},
  	_appendImagesPool = function() {

  		if(_imagesToAppendPool.length) {
  			var poolItem;

  			for(var i = 0; i < _imagesToAppendPool.length; i++) {
  				poolItem = _imagesToAppendPool[i];
  				if( poolItem.holder.index === poolItem.index ) {
  					_appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
  				}
  			}
  			_imagesToAppendPool = [];
  		}
  	};
  	


  _registerModule('Controller', {

  	publicMethods: {

  		lazyLoadItem: function(index) {
  			index = _getLoopedId(index);
  			var item = _getItemAt(index);

  			if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
  				return;
  			}

  			_shout('gettingData', index, item);

  			if (!item.src) {
  				return;
  			}

  			_preloadImage(item);
  		},
  		initController: function() {
  			framework.extend(_options, _controllerDefaultOptions, true);
  			self.items = _items = items;
  			_getItemAt = self.getItemAt;
  			_getNumItems = _options.getNumItemsFn; //self.getNumItems;



  			_initialIsLoop = _options.loop;
  			if(_getNumItems() < 3) {
  				_options.loop = false; // disable loop if less then 3 items
  			}

  			_listen('beforeChange', function(diff) {

  				var p = _options.preload,
  					isNext = diff === null ? true : (diff >= 0),
  					preloadBefore = Math.min(p[0], _getNumItems() ),
  					preloadAfter = Math.min(p[1], _getNumItems() ),
  					i;


  				for(i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
  					self.lazyLoadItem(_currentItemIndex+i);
  				}
  				for(i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
  					self.lazyLoadItem(_currentItemIndex-i);
  				}
  			});

  			_listen('initialLayout', function() {
  				self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
  			});

  			_listen('mainScrollAnimComplete', _appendImagesPool);
  			_listen('initialZoomInEnd', _appendImagesPool);



  			_listen('destroy', function() {
  				var item;
  				for(var i = 0; i < _items.length; i++) {
  					item = _items[i];
  					// remove reference to DOM elements, for GC
  					if(item.container) {
  						item.container = null; 
  					}
  					if(item.placeholder) {
  						item.placeholder = null;
  					}
  					if(item.img) {
  						item.img = null;
  					}
  					if(item.preloader) {
  						item.preloader = null;
  					}
  					if(item.loadError) {
  						item.loaded = item.loadError = false;
  					}
  				}
  				_imagesToAppendPool = null;
  			});
  		},


  		getItemAt: function(index) {
  			if (index >= 0) {
  				return _items[index] !== undefined ? _items[index] : false;
  			}
  			return false;
  		},

  		allowProgressiveImg: function() {
  			// 1. Progressive image loading isn't working on webkit/blink 
  			//    when hw-acceleration (e.g. translateZ) is applied to IMG element.
  			//    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
  			//    
  			// 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
  			//    That's why it's disabled on touch devices (mainly because of swipe transition)
  			//    
  			// 3. Progressive image loading sometimes doesn't work in IE (up to 11).

  			// Don't allow progressive loading on non-large touch devices
  			return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200; 
  			// 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
  		},

  		setContent: function(holder, index) {

  			if(_options.loop) {
  				index = _getLoopedId(index);
  			}

  			var prevItem = self.getItemAt(holder.index);
  			if(prevItem) {
  				prevItem.container = null;
  			}
  	
  			var item = self.getItemAt(index),
  				img;
  			
  			if(!item) {
  				holder.el.innerHTML = '';
  				return;
  			}

  			// allow to override data
  			_shout('gettingData', index, item);

  			holder.index = index;
  			holder.item = item;

  			// base container DIV is created only once for each of 3 holders
  			var baseDiv = item.container = framework.createEl('pswp__zoom-wrap'); 

  			

  			if(!item.src && item.html) {
  				if(item.html.tagName) {
  					baseDiv.appendChild(item.html);
  				} else {
  					baseDiv.innerHTML = item.html;
  				}
  			}

  			_checkForError(item);

  			_calculateItemSize(item, _viewportSize);
  			
  			if(item.src && !item.loadError && !item.loaded) {

  				item.loadComplete = function(item) {

  					// gallery closed before image finished loading
  					if(!_isOpen) {
  						return;
  					}

  					// check if holder hasn't changed while image was loading
  					if(holder && holder.index === index ) {
  						if( _checkForError(item, true) ) {
  							item.loadComplete = item.img = null;
  							_calculateItemSize(item, _viewportSize);
  							_applyZoomPanToItem(item);

  							if(holder.index === _currentItemIndex) {
  								// recalculate dimensions
  								self.updateCurrZoomItem();
  							}
  							return;
  						}
  						if( !item.imageAppended ) {
  							if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
  								_imagesToAppendPool.push({
  									item:item,
  									baseDiv:baseDiv,
  									img:item.img,
  									index:index,
  									holder:holder,
  									clearPlaceholder:true
  								});
  							} else {
  								_appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
  							}
  						} else {
  							// remove preloader & mini-img
  							if(!_initialZoomRunning && item.placeholder) {
  								item.placeholder.style.display = 'none';
  								item.placeholder = null;
  							}
  						}
  					}

  					item.loadComplete = null;
  					item.img = null; // no need to store image element after it's added

  					_shout('imageLoadComplete', index, item);
  				};

  				if(framework.features.transform) {
  					
  					var placeholderClassName = 'pswp__img pswp__img--placeholder'; 
  					placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

  					var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
  					if(item.msrc) {
  						placeholder.src = item.msrc;
  					}
  					
  					_setImageSize(item, placeholder);

  					baseDiv.appendChild(placeholder);
  					item.placeholder = placeholder;

  				}
  				

  				

  				if(!item.loading) {
  					_preloadImage(item);
  				}


  				if( self.allowProgressiveImg() ) {
  					// just append image
  					if(!_initialContentSet && _features.transform) {
  						_imagesToAppendPool.push({
  							item:item, 
  							baseDiv:baseDiv, 
  							img:item.img, 
  							index:index, 
  							holder:holder
  						});
  					} else {
  						_appendImage(index, item, baseDiv, item.img, true, true);
  					}
  				}
  				
  			} else if(item.src && !item.loadError) {
  				// image object is created every time, due to bugs of image loading & delay when switching images
  				img = framework.createEl('pswp__img', 'img');
  				img.style.opacity = 1;
  				img.src = item.src;
  				_setImageSize(item, img);
  				_appendImage(index, item, baseDiv, img, true);
  			}
  			

  			if(!_initialContentSet && index === _currentItemIndex) {
  				_currZoomElementStyle = baseDiv.style;
  				_showOrHide(item, (img ||item.img) );
  			} else {
  				_applyZoomPanToItem(item);
  			}

  			holder.el.innerHTML = '';
  			holder.el.appendChild(baseDiv);
  		},

  		cleanSlide: function( item ) {
  			if(item.img ) {
  				item.img.onload = item.img.onerror = null;
  			}
  			item.loaded = item.loading = item.img = item.imageAppended = false;
  		}

  	}
  });

  /*>>items-controller*/

  /*>>tap*/
  /**
   * tap.js:
   *
   * Displatches tap and double-tap events.
   * 
   */

  var tapTimer,
  	tapReleasePoint = {},
  	_dispatchTapEvent = function(origEvent, releasePoint, pointerType) {		
  		var e = document.createEvent( 'CustomEvent' ),
  			eDetail = {
  				origEvent:origEvent, 
  				target:origEvent.target, 
  				releasePoint: releasePoint, 
  				pointerType:pointerType || 'touch'
  			};

  		e.initCustomEvent( 'pswpTap', true, true, eDetail );
  		origEvent.target.dispatchEvent(e);
  	};

  _registerModule('Tap', {
  	publicMethods: {
  		initTap: function() {
  			_listen('firstTouchStart', self.onTapStart);
  			_listen('touchRelease', self.onTapRelease);
  			_listen('destroy', function() {
  				tapReleasePoint = {};
  				tapTimer = null;
  			});
  		},
  		onTapStart: function(touchList) {
  			if(touchList.length > 1) {
  				clearTimeout(tapTimer);
  				tapTimer = null;
  			}
  		},
  		onTapRelease: function(e, releasePoint) {
  			if(!releasePoint) {
  				return;
  			}

  			if(!_moved && !_isMultitouch && !_numAnimations) {
  				var p0 = releasePoint;
  				if(tapTimer) {
  					clearTimeout(tapTimer);
  					tapTimer = null;

  					// Check if taped on the same place
  					if ( _isNearbyPoints(p0, tapReleasePoint) ) {
  						_shout('doubleTap', p0);
  						return;
  					}
  				}

  				if(releasePoint.type === 'mouse') {
  					_dispatchTapEvent(e, releasePoint, 'mouse');
  					return;
  				}

  				var clickedTagName = e.target.tagName.toUpperCase();
  				// avoid double tap delay on buttons and elements that have class pswp__single-tap
  				if(clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
  					_dispatchTapEvent(e, releasePoint);
  					return;
  				}

  				_equalizePoints(tapReleasePoint, p0);

  				tapTimer = setTimeout(function() {
  					_dispatchTapEvent(e, releasePoint);
  					tapTimer = null;
  				}, 300);
  			}
  		}
  	}
  });

  /*>>tap*/

  /*>>desktop-zoom*/
  /**
   *
   * desktop-zoom.js:
   *
   * - Binds mousewheel event for paning zoomed image.
   * - Manages "dragging", "zoomed-in", "zoom-out" classes.
   *   (which are used for cursors and zoom icon)
   * - Adds toggleDesktopZoom function.
   * 
   */

  var _wheelDelta;
  	
  _registerModule('DesktopZoom', {

  	publicMethods: {

  		initDesktopZoom: function() {

  			if(_oldIE) {
  				// no zoom for old IE (<=8)
  				return;
  			}

  			if(_likelyTouchDevice) {
  				// if detected hardware touch support, we wait until mouse is used,
  				// and only then apply desktop-zoom features
  				_listen('mouseUsed', function() {
  					self.setupDesktopZoom();
  				});
  			} else {
  				self.setupDesktopZoom(true);
  			}

  		},

  		setupDesktopZoom: function(onInit) {

  			_wheelDelta = {};

  			var events = 'wheel mousewheel DOMMouseScroll';
  			
  			_listen('bindEvents', function() {
  				framework.bind(template, events,  self.handleMouseWheel);
  			});

  			_listen('unbindEvents', function() {
  				if(_wheelDelta) {
  					framework.unbind(template, events, self.handleMouseWheel);
  				}
  			});

  			self.mouseZoomedIn = false;

  			var hasDraggingClass,
  				updateZoomable = function() {
  					if(self.mouseZoomedIn) {
  						framework.removeClass(template, 'pswp--zoomed-in');
  						self.mouseZoomedIn = false;
  					}
  					if(_currZoomLevel < 1) {
  						framework.addClass(template, 'pswp--zoom-allowed');
  					} else {
  						framework.removeClass(template, 'pswp--zoom-allowed');
  					}
  					removeDraggingClass();
  				},
  				removeDraggingClass = function() {
  					if(hasDraggingClass) {
  						framework.removeClass(template, 'pswp--dragging');
  						hasDraggingClass = false;
  					}
  				};

  			_listen('resize' , updateZoomable);
  			_listen('afterChange' , updateZoomable);
  			_listen('pointerDown', function() {
  				if(self.mouseZoomedIn) {
  					hasDraggingClass = true;
  					framework.addClass(template, 'pswp--dragging');
  				}
  			});
  			_listen('pointerUp', removeDraggingClass);

  			if(!onInit) {
  				updateZoomable();
  			}
  			
  		},

  		handleMouseWheel: function(e) {

  			if(_currZoomLevel <= self.currItem.fitRatio) {
  				if( _options.modal ) {

  					if (!_options.closeOnScroll || _numAnimations || _isDragging) {
  						e.preventDefault();
  					} else if(_transformKey && Math.abs(e.deltaY) > 2) {
  						// close PhotoSwipe
  						// if browser supports transforms & scroll changed enough
  						_closedByScroll = true;
  						self.close();
  					}

  				}
  				return true;
  			}

  			// allow just one event to fire
  			e.stopPropagation();

  			// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
  			_wheelDelta.x = 0;

  			if('deltaX' in e) {
  				if(e.deltaMode === 1 /* DOM_DELTA_LINE */) {
  					// 18 - average line height
  					_wheelDelta.x = e.deltaX * 18;
  					_wheelDelta.y = e.deltaY * 18;
  				} else {
  					_wheelDelta.x = e.deltaX;
  					_wheelDelta.y = e.deltaY;
  				}
  			} else if('wheelDelta' in e) {
  				if(e.wheelDeltaX) {
  					_wheelDelta.x = -0.16 * e.wheelDeltaX;
  				}
  				if(e.wheelDeltaY) {
  					_wheelDelta.y = -0.16 * e.wheelDeltaY;
  				} else {
  					_wheelDelta.y = -0.16 * e.wheelDelta;
  				}
  			} else if('detail' in e) {
  				_wheelDelta.y = e.detail;
  			} else {
  				return;
  			}

  			_calculatePanBounds(_currZoomLevel, true);

  			var newPanX = _panOffset.x - _wheelDelta.x,
  				newPanY = _panOffset.y - _wheelDelta.y;

  			// only prevent scrolling in nonmodal mode when not at edges
  			if (_options.modal ||
  				(
  				newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
  				newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
  				) ) {
  				e.preventDefault();
  			}

  			// TODO: use rAF instead of mousewheel?
  			self.panTo(newPanX, newPanY);
  		},

  		toggleDesktopZoom: function(centerPoint) {
  			centerPoint = centerPoint || {x:_viewportSize.x/2 + _offset.x, y:_viewportSize.y/2 + _offset.y };

  			var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
  			var zoomOut = _currZoomLevel === doubleTapZoomLevel;
  			
  			self.mouseZoomedIn = !zoomOut;

  			self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
  			framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
  		}

  	}
  });


  /*>>desktop-zoom*/

  /*>>history*/
  /**
   *
   * history.js:
   *
   * - Back button to close gallery.
   * 
   * - Unique URL for each slide: example.com/&pid=1&gid=3
   *   (where PID is picture index, and GID and gallery index)
   *   
   * - Switch URL when slides change.
   * 
   */


  var _historyDefaultOptions = {
  	history: true,
  	galleryUID: 1
  };

  var _historyUpdateTimeout,
  	_hashChangeTimeout,
  	_hashAnimCheckTimeout,
  	_hashChangedByScript,
  	_hashChangedByHistory,
  	_hashReseted,
  	_initialHash,
  	_historyChanged,
  	_closedFromURL,
  	_urlChangedOnce,
  	_windowLoc,

  	_supportsPushState,

  	_getHash = function() {
  		return _windowLoc.hash.substring(1);
  	},
  	_cleanHistoryTimeouts = function() {

  		if(_historyUpdateTimeout) {
  			clearTimeout(_historyUpdateTimeout);
  		}

  		if(_hashAnimCheckTimeout) {
  			clearTimeout(_hashAnimCheckTimeout);
  		}
  	},

  	// pid - Picture index
  	// gid - Gallery index
  	_parseItemIndexFromURL = function() {
  		var hash = _getHash(),
  			params = {};

  		if(hash.length < 5) { // pid=1
  			return params;
  		}

  		var i, vars = hash.split('&');
  		for (i = 0; i < vars.length; i++) {
  			if(!vars[i]) {
  				continue;
  			}
  			var pair = vars[i].split('=');	
  			if(pair.length < 2) {
  				continue;
  			}
  			params[pair[0]] = pair[1];
  		}
  		if(_options.galleryPIDs) {
  			// detect custom pid in hash and search for it among the items collection
  			var searchfor = params.pid;
  			params.pid = 0; // if custom pid cannot be found, fallback to the first item
  			for(i = 0; i < _items.length; i++) {
  				if(_items[i].pid === searchfor) {
  					params.pid = i;
  					break;
  				}
  			}
  		} else {
  			params.pid = parseInt(params.pid,10)-1;
  		}
  		if( params.pid < 0 ) {
  			params.pid = 0;
  		}
  		return params;
  	},
  	_updateHash = function() {

  		if(_hashAnimCheckTimeout) {
  			clearTimeout(_hashAnimCheckTimeout);
  		}


  		if(_numAnimations || _isDragging) {
  			// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
  			// that's why we update hash only when no animations running
  			_hashAnimCheckTimeout = setTimeout(_updateHash, 500);
  			return;
  		}
  		
  		if(_hashChangedByScript) {
  			clearTimeout(_hashChangeTimeout);
  		} else {
  			_hashChangedByScript = true;
  		}


  		var pid = (_currentItemIndex + 1);
  		var item = _getItemAt( _currentItemIndex );
  		if(item.hasOwnProperty('pid')) {
  			// carry forward any custom pid assigned to the item
  			pid = item.pid;
  		}
  		var newHash = _initialHash + '&'  +  'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

  		if(!_historyChanged) {
  			if(_windowLoc.hash.indexOf(newHash) === -1) {
  				_urlChangedOnce = true;
  			}
  			// first time - add new hisory record, then just replace
  		}

  		var newURL = _windowLoc.href.split('#')[0] + '#' +  newHash;

  		if( _supportsPushState ) {

  			if('#' + newHash !== window.location.hash) {
  				history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
  			}

  		} else {
  			if(_historyChanged) {
  				_windowLoc.replace( newURL );
  			} else {
  				_windowLoc.hash = newHash;
  			}
  		}
  		
  		

  		_historyChanged = true;
  		_hashChangeTimeout = setTimeout(function() {
  			_hashChangedByScript = false;
  		}, 60);
  	};



  	

  _registerModule('History', {

  	

  	publicMethods: {
  		initHistory: function() {

  			framework.extend(_options, _historyDefaultOptions, true);

  			if( !_options.history ) {
  				return;
  			}


  			_windowLoc = window.location;
  			_urlChangedOnce = false;
  			_closedFromURL = false;
  			_historyChanged = false;
  			_initialHash = _getHash();
  			_supportsPushState = ('pushState' in history);


  			if(_initialHash.indexOf('gid=') > -1) {
  				_initialHash = _initialHash.split('&gid=')[0];
  				_initialHash = _initialHash.split('?gid=')[0];
  			}
  			

  			_listen('afterChange', self.updateURL);
  			_listen('unbindEvents', function() {
  				framework.unbind(window, 'hashchange', self.onHashChange);
  			});


  			var returnToOriginal = function() {
  				_hashReseted = true;
  				if(!_closedFromURL) {

  					if(_urlChangedOnce) {
  						history.back();
  					} else {

  						if(_initialHash) {
  							_windowLoc.hash = _initialHash;
  						} else {
  							if (_supportsPushState) {

  								// remove hash from url without refreshing it or scrolling to top
  								history.pushState('', document.title,  _windowLoc.pathname + _windowLoc.search );
  							} else {
  								_windowLoc.hash = '';
  							}
  						}
  					}
  					
  				}

  				_cleanHistoryTimeouts();
  			};


  			_listen('unbindEvents', function() {
  				if(_closedByScroll) {
  					// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
  					// this is done to keep the scroll position
  					returnToOriginal();
  				}
  			});
  			_listen('destroy', function() {
  				if(!_hashReseted) {
  					returnToOriginal();
  				}
  			});
  			_listen('firstUpdate', function() {
  				_currentItemIndex = _parseItemIndexFromURL().pid;
  			});

  			

  			
  			var index = _initialHash.indexOf('pid=');
  			if(index > -1) {
  				_initialHash = _initialHash.substring(0, index);
  				if(_initialHash.slice(-1) === '&') {
  					_initialHash = _initialHash.slice(0, -1);
  				}
  			}
  			

  			setTimeout(function() {
  				if(_isOpen) { // hasn't destroyed yet
  					framework.bind(window, 'hashchange', self.onHashChange);
  				}
  			}, 40);
  			
  		},
  		onHashChange: function() {

  			if(_getHash() === _initialHash) {

  				_closedFromURL = true;
  				self.close();
  				return;
  			}
  			if(!_hashChangedByScript) {

  				_hashChangedByHistory = true;
  				self.goTo( _parseItemIndexFromURL().pid );
  				_hashChangedByHistory = false;
  			}
  			
  		},
  		updateURL: function() {

  			// Delay the update of URL, to avoid lag during transition, 
  			// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
  			
  			_cleanHistoryTimeouts();
  			

  			if(_hashChangedByHistory) {
  				return;
  			}

  			if(!_historyChanged) {
  				_updateHash(); // first time
  			} else {
  				_historyUpdateTimeout = setTimeout(_updateHash, 800);
  			}
  		}
  	
  	}
  });


  /*>>history*/
  	framework.extend(self, publicMethods); };
  	return PhotoSwipe;
  });

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  'use strict';

  var emptyFunction = __webpack_require__(2);
  var invariant = __webpack_require__(3);
  var ReactPropTypesSecret = __webpack_require__(35);

  module.exports = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      invariant(
        false,
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
    };
    shim.isRequired = shim;
    function getShim() {
      return shim;
    };
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim
    };

    ReactPropTypes.checkPropTypes = emptyFunction;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };


/***/ },
/* 35 */
/***/ function(module, exports) {

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  'use strict';

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  module.exports = ReactPropTypesSecret;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  /*
   React v16.0.0
   react-dom-server.browser.production.min.js

   Copyright (c) 2013-present, Facebook, Inc.

   This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
  */
  'use strict';var h=__webpack_require__(7);__webpack_require__(3);var m=__webpack_require__(1),n=__webpack_require__(6),aa=__webpack_require__(26),ba=__webpack_require__(29);
  function w(a){for(var b=arguments.length-1,g="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,d=0;d<b;d++)g+="\x26args[]\x3d"+encodeURIComponent(arguments[d+1]);b=Error(g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
  function x(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
  var y={Namespaces:{html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},getIntrinsicNamespace:x,getChildNamespace:function(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?x(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}},ca={children:!0,dangerouslySetInnerHTML:!0,autoFocus:!0,defaultValue:!0,defaultChecked:!0,innerHTML:!0,suppressContentEditableWarning:!0,style:!0};
  function z(a,b){return(a&b)===b}
  var C={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(a){var b=C,g=a.Properties||{},d=a.DOMAttributeNamespaces||{},k=a.DOMAttributeNames||{};a=a.DOMMutationMethods||{};for(var f in g){D.properties.hasOwnProperty(f)?w("48",f):void 0;var e=f.toLowerCase(),c=g[f];e={attributeName:e,attributeNamespace:null,propertyName:f,mutationMethod:null,mustUseProperty:z(c,b.MUST_USE_PROPERTY),
  hasBooleanValue:z(c,b.HAS_BOOLEAN_VALUE),hasNumericValue:z(c,b.HAS_NUMERIC_VALUE),hasPositiveNumericValue:z(c,b.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:z(c,b.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:z(c,b.HAS_STRING_BOOLEAN_VALUE)};1>=e.hasBooleanValue+e.hasNumericValue+e.hasOverloadedBooleanValue?void 0:w("50",f);k.hasOwnProperty(f)&&(e.attributeName=k[f]);d.hasOwnProperty(f)&&(e.attributeNamespace=d[f]);a.hasOwnProperty(f)&&(e.mutationMethod=a[f]);D.properties[f]=e}}},D=
  {ID_ATTRIBUTE_NAME:"data-reactid",ROOT_ATTRIBUTE_NAME:"data-reactroot",ATTRIBUTE_NAME_START_CHAR:":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",ATTRIBUTE_NAME_CHAR:":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
  properties:{},shouldSetAttribute:function(a,b){if(D.isReservedProp(a)||!("o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]))return!1;if(null===b)return!0;switch(typeof b){case "boolean":return D.shouldAttributeAcceptBooleanValue(a);case "undefined":case "number":case "string":case "object":return!0;default:return!1}},getPropertyInfo:function(a){return D.properties.hasOwnProperty(a)?D.properties[a]:null},shouldAttributeAcceptBooleanValue:function(a){if(D.isReservedProp(a))return!0;var b=D.getPropertyInfo(a);
  if(b)return b.hasBooleanValue||b.hasStringBooleanValue||b.hasOverloadedBooleanValue;a=a.toLowerCase().slice(0,5);return"data-"===a||"aria-"===a},isReservedProp:function(a){return ca.hasOwnProperty(a)},injection:C},E=D,da=/["'&<>]/;
  function F(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=da.exec(a);if(b){var g="",d,k=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="\x26quot;";break;case 38:b="\x26amp;";break;case 39:b="\x26#x27;";break;case 60:b="\x26lt;";break;case 62:b="\x26gt;";break;default:continue}k!==d&&(g+=a.substring(k,d));k=d+1;g+=b}a=k!==d?g+a.substring(k,d):g}return a}var ea=new RegExp("^["+E.ATTRIBUTE_NAME_START_CHAR+"]["+E.ATTRIBUTE_NAME_CHAR+"]*$"),G={},H={};
  function fa(a){if(H.hasOwnProperty(a))return!0;if(G.hasOwnProperty(a))return!1;if(ea.test(a))return H[a]=!0;G[a]=!0;return!1}
  var I={createMarkupForID:function(a){return E.ID_ATTRIBUTE_NAME+"\x3d"+('"'+F(a)+'"')},createMarkupForRoot:function(){return E.ROOT_ATTRIBUTE_NAME+'\x3d""'},createMarkupForProperty:function(a,b){var g=E.getPropertyInfo(a);if(g){if(null==b||g.hasBooleanValue&&!b||g.hasNumericValue&&isNaN(b)||g.hasPositiveNumericValue&&1>b||g.hasOverloadedBooleanValue&&!1===b)return"";var d=g.attributeName;if(g.hasBooleanValue||g.hasOverloadedBooleanValue&&!0===b)return d+'\x3d""';if("boolean"!==typeof b||E.shouldAttributeAcceptBooleanValue(a))return d+
  "\x3d"+('"'+F(b)+'"')}else if(E.shouldSetAttribute(a,b))return null==b?"":a+"\x3d"+('"'+F(b)+'"');return null},createMarkupForCustomAttribute:function(a,b){return fa(a)&&null!=b?a+"\x3d"+('"'+F(b)+'"'):""}},J={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},ha=h({menuitem:!0},J),K={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,
  columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ia=["Webkit","ms","Moz","O"];
  Object.keys(K).forEach(function(a){ia.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);K[b]=K[a]})});var L=y.Namespaces,ja=y.getIntrinsicNamespace,ka=y.getChildNamespace,M=m.Children.toArray,la={listing:!0,pre:!0,textarea:!0};function N(a){return"string"===typeof a?a:"function"===typeof a?a.displayName||a.name:null}var ma=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,O={},na=ba(function(a){return aa(a)});
  function oa(a){var b="";m.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}function pa(a,b){if(a=a.contextTypes){var g={},d;for(d in a)g[d]=b[d];b=g}else b=n;return b}var qa={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null};function P(a,b){void 0===a&&w("152",N(b)||"Component")}
  function ra(a,b){for(;m.isValidElement(a);){var g=a.type;if("function"!==typeof g)break;var d=pa(g,b),k=[],f=!1,e={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===k)return null},enqueueReplaceState:function(a,b){f=!0;k=[b]},enqueueSetState:function(a,b){if(null===k)return null;k.push(b)}};if(g.prototype&&g.prototype.isReactComponent)var c=new g(a.props,d,e);else if(c=g(a.props,d,e),null==c||null==c.render){a=c;P(a,g);continue}c.props=a.props;c.context=d;c.updater=e;e=c.state;
  void 0===e&&(c.state=e=null);if(c.componentWillMount)if(c.componentWillMount(),k.length){e=k;var q=f;k=null;f=!1;if(q&&1===e.length)c.state=e[0];else{var r=q?e[0]:c.state,l=!0;for(q=q?1:0;q<e.length;q++){var p=e[q];if(p="function"===typeof p?p.call(c,r,a.props,d):p)l?(l=!1,r=h({},r,p)):h(r,p)}c.state=r}}else k=null;a=c.render();P(a,g);if("function"===typeof c.getChildContext){d=g.childContextTypes;"object"!==typeof d?w("107",N(g)||"Unknown"):void 0;var B=c.getChildContext();for(var A in B)A in d?
  void 0:w("108",N(g)||"Unknown",A)}B&&(b=h({},b,B))}return{child:a,context:b}}
  var Q=function(){function a(b,g){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");b=m.isValidElement(b)?[b]:M(b);this.stack=[{domNamespace:L.html,children:b,childIndex:0,context:n,footer:""}];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=g}a.prototype.read=function(a){if(this.exhausted)return null;for(var b="";b.length<a;){if(0===this.stack.length){this.exhausted=!0;break}var d=this.stack[this.stack.length-1];if(d.childIndex>=
  d.children.length)b+=d.footer,this.previousWasTextNode=!1,this.stack.pop(),"select"===d.tag&&(this.currentSelectValue=null);else{var k=d.children[d.childIndex++];b+=this.render(k,d.context,d.domNamespace)}}return b};a.prototype.render=function(a,g,d){if("string"===typeof a||"number"===typeof a){d=""+a;if(""===d)return"";if(this.makeStaticMarkup)return F(d);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+F(d);this.previousWasTextNode=!0;return F(d)}g=ra(a,g);a=g.child;g=g.context;if(null===a||!1===
  a)return"";if(m.isValidElement(a))return this.renderDOM(a,g,d);a=M(a);this.stack.push({domNamespace:d,children:a,childIndex:0,context:g,footer:""});return""};a.prototype.renderDOM=function(a,g,d){var b=a.type.toLowerCase();d===L.html&&ja(b);O.hasOwnProperty(b)||(ma.test(b)?void 0:w("65",b),O[b]=!0);var f=a.props;if("input"===b)f=h({type:void 0},f,{defaultChecked:void 0,defaultValue:void 0,value:null!=f.value?f.value:f.defaultValue,checked:null!=f.checked?f.checked:f.defaultChecked});else if("textarea"===
  b){var e=f.value;if(null==e){e=f.defaultValue;var c=f.children;null!=c&&(null!=e?w("92"):void 0,Array.isArray(c)&&(1>=c.length?void 0:w("93"),c=c[0]),e=""+c);null==e&&(e="")}f=h({},f,{value:void 0,children:""+e})}else if("select"===b)this.currentSelectValue=null!=f.value?f.value:f.defaultValue,f=h({},f,{value:void 0});else if("option"===b){c=this.currentSelectValue;var q=oa(f.children);if(null!=c){var r=null!=f.value?f.value+"":q;e=!1;if(Array.isArray(c))for(var l=0;l<c.length;l++){if(""+c[l]===r){e=
  !0;break}}else e=""+c===r;f=h({selected:void 0,children:void 0},f,{selected:e,children:q})}}if(e=f)ha[b]&&(null!=e.children||null!=e.dangerouslySetInnerHTML?w("137",b,""):void 0),null!=e.dangerouslySetInnerHTML&&(null!=e.children?w("60"):void 0,"object"===typeof e.dangerouslySetInnerHTML&&"__html"in e.dangerouslySetInnerHTML?void 0:w("61")),null!=e.style&&"object"!==typeof e.style?w("62",""):void 0;e=f;c=this.makeStaticMarkup;q=1===this.stack.length;r="\x3c"+a.type;for(t in e)if(e.hasOwnProperty(t)){var p=
  e[t];if(null!=p){if("style"===t){l=void 0;var B="",A="";for(l in p)if(p.hasOwnProperty(l)){var u=0===l.indexOf("--"),v=p[l];null!=v&&(B+=A+na(l)+":",A=l,u=null==v||"boolean"===typeof v||""===v?"":u||"number"!==typeof v||0===v||K.hasOwnProperty(A)&&K[A]?(""+v).trim():v+"px",B+=u,A=";")}p=B||null}l=null;b:if(u=b,v=e,-1===u.indexOf("-"))u="string"===typeof v.is;else switch(u){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":u=
  !1;break b;default:u=!0}u?qa.hasOwnProperty(t)||(l=I.createMarkupForCustomAttribute(t,p)):l=I.createMarkupForProperty(t,p);l&&(r+=" "+l)}}c||q&&(r+=" "+I.createMarkupForRoot());var t=r;e="";J.hasOwnProperty(b)?t+="/\x3e":(t+="\x3e",e="\x3c/"+a.type+"\x3e");a:{c=f.dangerouslySetInnerHTML;if(null!=c){if(null!=c.__html){c=c.__html;break a}}else if(c=f.children,"string"===typeof c||"number"===typeof c){c=F(c);break a}c=null}null!=c?(f=[],la[b]&&"\n"===c.charAt(0)&&(t+="\n"),t+=c):f=M(f.children);a={domNamespace:ka(d,
  a.type),tag:b,children:f,childIndex:0,context:g,footer:e};this.stack.push(a);return t};return a}(),R={renderToString:function(a){return(new Q(a,!1)).read(Infinity)},renderToStaticMarkup:function(a){return(new Q(a,!0)).read(Infinity)}},S=E.injection.MUST_USE_PROPERTY,T=E.injection.HAS_BOOLEAN_VALUE,U=E.injection.HAS_NUMERIC_VALUE,V=E.injection.HAS_POSITIVE_NUMERIC_VALUE,W=E.injection.HAS_STRING_BOOLEAN_VALUE,sa={Properties:{allowFullScreen:T,allowTransparency:W,async:T,autoPlay:T,capture:T,checked:S|
  T,cols:V,contentEditable:W,controls:T,"default":T,defer:T,disabled:T,download:E.injection.HAS_OVERLOADED_BOOLEAN_VALUE,draggable:W,formNoValidate:T,hidden:T,loop:T,multiple:S|T,muted:S|T,noValidate:T,open:T,playsInline:T,readOnly:T,required:T,reversed:T,rows:V,rowSpan:U,scoped:T,seamless:T,selected:S|T,size:V,start:U,span:V,spellCheck:W,style:0,itemScope:T,acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,value:W},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},
  DOMMutationMethods:{value:function(a,b){if(null==b)return a.removeAttribute("value");"number"!==a.type||!1===a.hasAttribute("value")?a.setAttribute("value",""+b):a.validity&&!a.validity.badInput&&a.ownerDocument.activeElement!==a&&a.setAttribute("value",""+b)}}},X=E.injection.HAS_STRING_BOOLEAN_VALUE,Y={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},Z={Properties:{autoReverse:X,externalResourcesRequired:X,preserveAlpha:X},DOMAttributeNames:{autoReverse:"autoReverse",
  externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:Y.xlink,xlinkArcrole:Y.xlink,xlinkHref:Y.xlink,xlinkRole:Y.xlink,xlinkShow:Y.xlink,xlinkTitle:Y.xlink,xlinkType:Y.xlink,xmlBase:Y.xml,xmlLang:Y.xml,xmlSpace:Y.xml}},ta=/[\-\:]([a-z])/g;function ua(a){return a[1].toUpperCase()}
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(a){var b=a.replace(ta,
  ua);Z.Properties[b]=0;Z.DOMAttributeNames[b]=a});E.injection.injectDOMPropertyConfig(sa);E.injection.injectDOMPropertyConfig(Z);module.exports={renderToString:R.renderToString,renderToStaticMarkup:R.renderToStaticMarkup,renderToNodeStream:function(){w("207")},renderToStaticNodeStream:function(){w("208")},version:"16.0.0"};


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  /*
   React v16.0.0
   react-dom.production.min.js

   Copyright (c) 2013-present, Facebook, Inc.

   This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
   Modernizr 3.0.0pre (Custom Build) | MIT
  */
  'use strict';var aa=__webpack_require__(1);__webpack_require__(3);var l=__webpack_require__(21),n=__webpack_require__(7),ba=__webpack_require__(20),ca=__webpack_require__(2),da=__webpack_require__(6),ea=__webpack_require__(30),fa=__webpack_require__(22),ha=__webpack_require__(23),ia=__webpack_require__(24);
  function w(a){for(var b=arguments.length-1,c="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,d=0;d<b;d++)c+="\x26args[]\x3d"+encodeURIComponent(arguments[d+1]);b=Error(c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}aa?void 0:w("227");
  function ja(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
  var ka={Namespaces:{html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},getIntrinsicNamespace:ja,getChildNamespace:function(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ja(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}},la=null,oa={};
  function pa(){if(la)for(var a in oa){var b=oa[a],c=la.indexOf(a);-1<c?void 0:w("96",a);if(!qa.plugins[c]){b.extractEvents?void 0:w("97",a);qa.plugins[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;qa.eventNameDispatchConfigs.hasOwnProperty(h)?w("99",h):void 0;qa.eventNameDispatchConfigs[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ra(k[e],g,h);e=!0}else f.registrationName?(ra(f.registrationName,g,h),e=!0):e=!1;e?void 0:w("98",d,a)}}}}
  function ra(a,b,c){qa.registrationNameModules[a]?w("100",a):void 0;qa.registrationNameModules[a]=b;qa.registrationNameDependencies[a]=b.eventTypes[c].dependencies}
  var qa={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},possibleRegistrationNames:null,injectEventPluginOrder:function(a){la?w("101"):void 0;la=Array.prototype.slice.call(a);pa()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];oa.hasOwnProperty(c)&&oa[c]===d||(oa[c]?w("102",c):void 0,oa[c]=d,b=!0)}b&&pa()}},sa=qa,ta={children:!0,dangerouslySetInnerHTML:!0,autoFocus:!0,defaultValue:!0,defaultChecked:!0,
  innerHTML:!0,suppressContentEditableWarning:!0,style:!0};function ua(a,b){return(a&b)===b}
  var wa={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(a){var b=wa,c=a.Properties||{},d=a.DOMAttributeNamespaces||{},e=a.DOMAttributeNames||{};a=a.DOMMutationMethods||{};for(var f in c){xa.properties.hasOwnProperty(f)?w("48",f):void 0;var g=f.toLowerCase(),h=c[f];g={attributeName:g,attributeNamespace:null,propertyName:f,mutationMethod:null,mustUseProperty:ua(h,b.MUST_USE_PROPERTY),
  hasBooleanValue:ua(h,b.HAS_BOOLEAN_VALUE),hasNumericValue:ua(h,b.HAS_NUMERIC_VALUE),hasPositiveNumericValue:ua(h,b.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:ua(h,b.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:ua(h,b.HAS_STRING_BOOLEAN_VALUE)};1>=g.hasBooleanValue+g.hasNumericValue+g.hasOverloadedBooleanValue?void 0:w("50",f);e.hasOwnProperty(f)&&(g.attributeName=e[f]);d.hasOwnProperty(f)&&(g.attributeNamespace=d[f]);a.hasOwnProperty(f)&&(g.mutationMethod=a[f]);xa.properties[f]=
  g}}},xa={ID_ATTRIBUTE_NAME:"data-reactid",ROOT_ATTRIBUTE_NAME:"data-reactroot",ATTRIBUTE_NAME_START_CHAR:":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",ATTRIBUTE_NAME_CHAR:":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
  properties:{},shouldSetAttribute:function(a,b){if(xa.isReservedProp(a)||!("o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]))return!1;if(null===b)return!0;switch(typeof b){case "boolean":return xa.shouldAttributeAcceptBooleanValue(a);case "undefined":case "number":case "string":case "object":return!0;default:return!1}},getPropertyInfo:function(a){return xa.properties.hasOwnProperty(a)?xa.properties[a]:null},shouldAttributeAcceptBooleanValue:function(a){if(xa.isReservedProp(a))return!0;var b=xa.getPropertyInfo(a);
  if(b)return b.hasBooleanValue||b.hasStringBooleanValue||b.hasOverloadedBooleanValue;a=a.toLowerCase().slice(0,5);return"data-"===a||"aria-"===a},isReservedProp:function(a){return ta.hasOwnProperty(a)},injection:wa},A=xa,E={IndeterminateComponent:0,FunctionalComponent:1,ClassComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,CoroutineComponent:7,CoroutineHandlerPhase:8,YieldComponent:9,Fragment:10},F={ELEMENT_NODE:1,TEXT_NODE:3,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_FRAGMENT_NODE:11},
  ya=E.HostComponent,za=E.HostText,Aa=F.ELEMENT_NODE,Ba=F.COMMENT_NODE,Ea=A.ID_ATTRIBUTE_NAME,Fa={hasCachedChildNodes:1},Ga=Math.random().toString(36).slice(2),Ha="__reactInternalInstance$"+Ga,Ia="__reactEventHandlers$"+Ga;function La(a){for(var b;b=a._renderedComponent;)a=b;return a}function Ma(a,b){a=La(a);a._hostNode=b;b[Ha]=a}
  function Na(a,b){if(!(a._flags&Fa.hasCachedChildNodes)){var c=a._renderedChildren;b=b.firstChild;var d;a:for(d in c)if(c.hasOwnProperty(d)){var e=c[d],f=La(e)._domID;if(0!==f){for(;null!==b;b=b.nextSibling){var g=b,h=f;if(g.nodeType===Aa&&g.getAttribute(Ea)===""+h||g.nodeType===Ba&&g.nodeValue===" react-text: "+h+" "||g.nodeType===Ba&&g.nodeValue===" react-empty: "+h+" "){Ma(e,b);continue a}}w("32",f)}}a._flags|=Fa.hasCachedChildNodes}}
  function Oa(a){if(a[Ha])return a[Ha];for(var b=[];!a[Ha];)if(b.push(a),a.parentNode)a=a.parentNode;else return null;var c=a[Ha];if(c.tag===ya||c.tag===za)return c;for(;a&&(c=a[Ha]);a=b.pop()){var d=c;b.length&&Na(c,a)}return d}
  var G={getClosestInstanceFromNode:Oa,getInstanceFromNode:function(a){var b=a[Ha];if(b)return b.tag===ya||b.tag===za?b:b._hostNode===a?b:null;b=Oa(a);return null!=b&&b._hostNode===a?b:null},getNodeFromInstance:function(a){if(a.tag===ya||a.tag===za)return a.stateNode;void 0===a._hostNode?w("33"):void 0;if(a._hostNode)return a._hostNode;for(var b=[];!a._hostNode;)b.push(a),a._hostParent?void 0:w("34"),a=a._hostParent;for(;b.length;a=b.pop())Na(a,a._hostNode);return a._hostNode},precacheChildNodes:Na,
  precacheNode:Ma,uncacheNode:function(a){var b=a._hostNode;b&&(delete b[Ha],a._hostNode=null)},precacheFiberNode:function(a,b){b[Ha]=a},getFiberCurrentPropsFromNode:function(a){return a[Ia]||null},updateFiberProps:function(a,b){a[Ia]=b}},Pa={remove:function(a){a._reactInternalFiber=void 0},get:function(a){return a._reactInternalFiber},has:function(a){return void 0!==a._reactInternalFiber},set:function(a,b){a._reactInternalFiber=b}},Qa={ReactCurrentOwner:aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner};
  function Ra(a){if("function"===typeof a.getName)return a.getName();if("number"===typeof a.tag){a=a.type;if("string"===typeof a)return a;if("function"===typeof a)return a.displayName||a.name}return null}var J={NoEffect:0,PerformedWork:1,Placement:2,Update:4,PlacementAndUpdate:6,Deletion:8,ContentReset:16,Callback:32,Err:64,Ref:128},Sa=E.HostComponent,Ta=E.HostRoot,Ua=E.HostPortal,Va=E.HostText,Wa=J.NoEffect,Xa=J.Placement;
  function Za(a){var b=a;if(a.alternate)for(;b["return"];)b=b["return"];else{if((b.effectTag&Xa)!==Wa)return 1;for(;b["return"];)if(b=b["return"],(b.effectTag&Xa)!==Wa)return 1}return b.tag===Ta?2:3}function $a(a){2!==Za(a)?w("188"):void 0}
  function ab(a){var b=a.alternate;if(!b)return b=Za(a),3===b?w("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c["return"],f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return $a(e),a;if(g===d)return $a(e),b;g=g.sibling}w("188")}if(c["return"]!==d["return"])c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
  void 0:w("189")}}c.alternate!==d?w("190"):void 0}c.tag!==Ta?w("188"):void 0;return c.stateNode.current===c?a:b}
  var bb={isFiberMounted:function(a){return 2===Za(a)},isMounted:function(a){return(a=Pa.get(a))?2===Za(a):!1},findCurrentFiberUsingSlowPath:ab,findCurrentHostFiber:function(a){a=ab(a);if(!a)return null;for(var b=a;;){if(b.tag===Sa||b.tag===Va)return b;if(b.child)b.child["return"]=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b["return"]||b["return"]===a)return null;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}}return null},findCurrentHostFiberWithNoPortals:function(a){a=ab(a);
  if(!a)return null;for(var b=a;;){if(b.tag===Sa||b.tag===Va)return b;if(b.child&&b.tag!==Ua)b.child["return"]=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b["return"]||b["return"]===a)return null;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}}return null}},K={_caughtError:null,_hasCaughtError:!1,_rethrowError:null,_hasRethrowError:!1,injection:{injectErrorUtils:function(a){"function"!==typeof a.invokeGuardedCallback?w("197"):void 0;cb=a.invokeGuardedCallback}},invokeGuardedCallback:function(a,
  b,c,d,e,f,g,h,k){cb.apply(K,arguments)},invokeGuardedCallbackAndCatchFirstError:function(a,b,c,d,e,f,g,h,k){K.invokeGuardedCallback.apply(this,arguments);if(K.hasCaughtError()){var p=K.clearCaughtError();K._hasRethrowError||(K._hasRethrowError=!0,K._rethrowError=p)}},rethrowCaughtError:function(){return db.apply(K,arguments)},hasCaughtError:function(){return K._hasCaughtError},clearCaughtError:function(){if(K._hasCaughtError){var a=K._caughtError;K._caughtError=null;K._hasCaughtError=!1;return a}w("198")}};
  function cb(a,b,c,d,e,f,g,h,k){K._hasCaughtError=!1;K._caughtError=null;var p=Array.prototype.slice.call(arguments,3);try{b.apply(c,p)}catch(x){K._caughtError=x,K._hasCaughtError=!0}}function db(){if(K._hasRethrowError){var a=K._rethrowError;K._rethrowError=null;K._hasRethrowError=!1;throw a;}}var eb=K,fb;function gb(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=hb.getNodeFromInstance(d);eb.invokeGuardedCallbackAndCatchFirstError(b,c,void 0,a);a.currentTarget=null}
  var hb={isEndish:function(a){return"topMouseUp"===a||"topTouchEnd"===a||"topTouchCancel"===a},isMoveish:function(a){return"topMouseMove"===a||"topTouchMove"===a},isStartish:function(a){return"topMouseDown"===a||"topTouchStart"===a},executeDirectDispatch:function(a){var b=a._dispatchListeners,c=a._dispatchInstances;Array.isArray(b)?w("103"):void 0;a.currentTarget=b?hb.getNodeFromInstance(c):null;b=b?b(a):null;a.currentTarget=null;a._dispatchListeners=null;a._dispatchInstances=null;return b},executeDispatchesInOrder:function(a,
  b){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)gb(a,b,c[e],d[e]);else c&&gb(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null},executeDispatchesInOrderStopAtTrue:function(a){a:{var b=a._dispatchListeners;var c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++){if(b[d](a,c[d])){b=c[d];break a}}else if(b&&b(a,c)){b=c;break a}b=null}a._dispatchInstances=null;a._dispatchListeners=
  null;return b},hasDispatches:function(a){return!!a._dispatchListeners},getFiberCurrentPropsFromNode:function(a){return fb.getFiberCurrentPropsFromNode(a)},getInstanceFromNode:function(a){return fb.getInstanceFromNode(a)},getNodeFromInstance:function(a){return fb.getNodeFromInstance(a)},injection:{injectComponentTree:function(a){fb=a}}},ib=hb,jb=null,kb=null,lb=null;
  function mb(a){if(a=ib.getInstanceFromNode(a))if("number"===typeof a.tag){jb&&"function"===typeof jb.restoreControlledState?void 0:w("194");var b=ib.getFiberCurrentPropsFromNode(a.stateNode);jb.restoreControlledState(a.stateNode,a.type,b)}else"function"!==typeof a.restoreControlledState?w("195"):void 0,a.restoreControlledState()}
  var nb={injection:{injectFiberControlledHostComponent:function(a){jb=a}},enqueueStateRestore:function(a){kb?lb?lb.push(a):lb=[a]:kb=a},restoreStateIfNeeded:function(){if(kb){var a=kb,b=lb;lb=kb=null;mb(a);if(b)for(a=0;a<b.length;a++)mb(b[a])}}};function ob(a,b,c,d,e,f){return a(b,c,d,e,f)}function pb(a,b){return a(b)}function qb(a,b){return pb(a,b)}
  var rb=!1,sb={batchedUpdates:function(a,b){if(rb)return ob(qb,a,b);rb=!0;try{return ob(qb,a,b)}finally{rb=!1,nb.restoreStateIfNeeded()}},injection:{injectStackBatchedUpdates:function(a){ob=a},injectFiberBatchedUpdates:function(a){pb=a}}},tb=F.TEXT_NODE;function ub(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return a.nodeType===tb?a.parentNode:a}var vb=E.HostRoot,wb=[];
  function xb(a){var b=a.targetInst;do{if(!b){a.ancestors.push(b);break}var c=b;if("number"===typeof c.tag){for(;c["return"];)c=c["return"];c=c.tag!==vb?null:c.stateNode.containerInfo}else{for(;c._hostParent;)c=c._hostParent;c=G.getNodeFromInstance(c).parentNode}if(!c)break;a.ancestors.push(b);b=G.getClosestInstanceFromNode(c)}while(b);for(c=0;c<a.ancestors.length;c++)b=a.ancestors[c],yb._handleTopLevel(a.topLevelType,b,a.nativeEvent,ub(a.nativeEvent))}
  var yb={_enabled:!0,_handleTopLevel:null,setHandleTopLevel:function(a){yb._handleTopLevel=a},setEnabled:function(a){yb._enabled=!!a},isEnabled:function(){return yb._enabled},trapBubbledEvent:function(a,b,c){return c?ba.listen(c,b,yb.dispatchEvent.bind(null,a)):null},trapCapturedEvent:function(a,b,c){return c?ba.capture(c,b,yb.dispatchEvent.bind(null,a)):null},dispatchEvent:function(a,b){if(yb._enabled){var c=ub(b);c=G.getClosestInstanceFromNode(c);null===c||"number"!==typeof c.tag||bb.isFiberMounted(c)||
  (c=null);if(wb.length){var d=wb.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{sb.batchedUpdates(xb,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>wb.length&&wb.push(a)}}}},L=yb;function Cb(a,b){null==b?w("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
  function Db(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Eb=null;function Fb(a,b){a&&(ib.executeDispatchesInOrder(a,b),a.isPersistent()||a.constructor.release(a))}function Gb(a){return Fb(a,!0)}function Hb(a){return Fb(a,!1)}
  function Ib(a,b,c){switch(a){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":return!(!c.disabled||"button"!==b&&"input"!==b&&"select"!==b&&"textarea"!==b);default:return!1}}
  var Jb={injection:{injectEventPluginOrder:sa.injectEventPluginOrder,injectEventPluginsByName:sa.injectEventPluginsByName},getListener:function(a,b){if("number"===typeof a.tag){var c=a.stateNode;if(!c)return null;var d=ib.getFiberCurrentPropsFromNode(c);if(!d)return null;c=d[b];if(Ib(b,a.type,d))return null}else{d=a._currentElement;if("string"===typeof d||"number"===typeof d||!a._rootNodeID)return null;a=d.props;c=a[b];if(Ib(b,d.type,a))return null}c&&"function"!==typeof c?w("231",b,typeof c):void 0;
  return c},extractEvents:function(a,b,c,d){for(var e,f=sa.plugins,g=0;g<f.length;g++){var h=f[g];h&&(h=h.extractEvents(a,b,c,d))&&(e=Cb(e,h))}return e},enqueueEvents:function(a){a&&(Eb=Cb(Eb,a))},processEventQueue:function(a){var b=Eb;Eb=null;a?Db(b,Gb):Db(b,Hb);Eb?w("95"):void 0;eb.rethrowCaughtError()}},Kb;l.canUseDOM&&(Kb=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("",""));
  function Lb(a,b){if(!l.canUseDOM||b&&!("addEventListener"in document))return!1;b="on"+a;var c=b in document;c||(c=document.createElement("div"),c.setAttribute(b,"return;"),c="function"===typeof c[b]);!c&&Kb&&"wheel"===a&&(c=document.implementation.hasFeature("Events.wheel","3.0"));return c}function Mb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;c["ms"+a]="MS"+b;c["O"+a]="o"+b.toLowerCase();return c}
  var Nb={animationend:Mb("Animation","AnimationEnd"),animationiteration:Mb("Animation","AnimationIteration"),animationstart:Mb("Animation","AnimationStart"),transitionend:Mb("Transition","TransitionEnd")},Ob={},Pb={};l.canUseDOM&&(Pb=document.createElement("div").style,"AnimationEvent"in window||(delete Nb.animationend.animation,delete Nb.animationiteration.animation,delete Nb.animationstart.animation),"TransitionEvent"in window||delete Nb.transitionend.transition);
  function Qb(a){if(Ob[a])return Ob[a];if(!Nb[a])return a;var b=Nb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Pb)return Ob[a]=b[c];return""}
  var Rb={topAbort:"abort",topAnimationEnd:Qb("animationend")||"animationend",topAnimationIteration:Qb("animationiteration")||"animationiteration",topAnimationStart:Qb("animationstart")||"animationstart",topBlur:"blur",topCancel:"cancel",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topChange:"change",topClick:"click",topClose:"close",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",
  topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoadedData:"loadeddata",topLoad:"load",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",
  topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topScroll:"scroll",topSeeked:"seeked",topSeeking:"seeking",topSelectionChange:"selectionchange",topStalled:"stalled",topSuspend:"suspend",topTextInput:"textInput",topTimeUpdate:"timeupdate",topToggle:"toggle",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",
  topTouchStart:"touchstart",topTransitionEnd:Qb("transitionend")||"transitionend",topVolumeChange:"volumechange",topWaiting:"waiting",topWheel:"wheel"},Sb={},Tb=0,Ub="_reactListenersID"+(""+Math.random()).slice(2);function Vb(a){Object.prototype.hasOwnProperty.call(a,Ub)||(a[Ub]=Tb++,Sb[a[Ub]]={});return Sb[a[Ub]]}
  var M=n({},{handleTopLevel:function(a,b,c,d){a=Jb.extractEvents(a,b,c,d);Jb.enqueueEvents(a);Jb.processEventQueue(!1)}},{setEnabled:function(a){L&&L.setEnabled(a)},isEnabled:function(){return!(!L||!L.isEnabled())},listenTo:function(a,b){var c=Vb(b);a=sa.registrationNameDependencies[a];for(var d=0;d<a.length;d++){var e=a[d];c.hasOwnProperty(e)&&c[e]||("topWheel"===e?Lb("wheel")?L.trapBubbledEvent("topWheel","wheel",b):Lb("mousewheel")?L.trapBubbledEvent("topWheel","mousewheel",b):L.trapBubbledEvent("topWheel",
  "DOMMouseScroll",b):"topScroll"===e?L.trapCapturedEvent("topScroll","scroll",b):"topFocus"===e||"topBlur"===e?(L.trapCapturedEvent("topFocus","focus",b),L.trapCapturedEvent("topBlur","blur",b),c.topBlur=!0,c.topFocus=!0):"topCancel"===e?(Lb("cancel",!0)&&L.trapCapturedEvent("topCancel","cancel",b),c.topCancel=!0):"topClose"===e?(Lb("close",!0)&&L.trapCapturedEvent("topClose","close",b),c.topClose=!0):Rb.hasOwnProperty(e)&&L.trapBubbledEvent(e,Rb[e],b),c[e]=!0)}},isListeningToAllDependencies:function(a,
  b){b=Vb(b);a=sa.registrationNameDependencies[a];for(var c=0;c<a.length;c++){var d=a[c];if(!b.hasOwnProperty(d)||!b[d])return!1}return!0},trapBubbledEvent:function(a,b,c){return L.trapBubbledEvent(a,b,c)},trapCapturedEvent:function(a,b,c){return L.trapCapturedEvent(a,b,c)}}),Wb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,
  flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xb=["Webkit","ms","Moz","O"];
  Object.keys(Wb).forEach(function(a){Xb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Wb[b]=Wb[a]})});
  var Yb={isUnitlessNumber:Wb,shorthandPropertyExpansions:{background:{backgroundAttachment:!0,backgroundColor:!0,backgroundImage:!0,backgroundPositionX:!0,backgroundPositionY:!0,backgroundRepeat:!0},backgroundPosition:{backgroundPositionX:!0,backgroundPositionY:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,
  borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0},outline:{outlineWidth:!0,outlineStyle:!0,outlineColor:!0}}},Zb=Yb.isUnitlessNumber,$b=!1;if(l.canUseDOM){var ac=document.createElement("div").style;try{ac.font=""}catch(a){$b=!0}}
  var bc={createDangerousStringForStyles:function(){},setValueForStyles:function(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||Zb.hasOwnProperty(e)&&Zb[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");if(d)a.setProperty(c,e);else if(e)a[c]=e;else if(d=$b&&Yb.shorthandPropertyExpansions[c])for(var g in d)a[g]="";else a[c]=""}}},cc=new RegExp("^["+A.ATTRIBUTE_NAME_START_CHAR+
  "]["+A.ATTRIBUTE_NAME_CHAR+"]*$"),dc={},ec={};function fc(a){if(ec.hasOwnProperty(a))return!0;if(dc.hasOwnProperty(a))return!1;if(cc.test(a))return ec[a]=!0;dc[a]=!0;return!1}
  var gc={setAttributeForID:function(a,b){a.setAttribute(A.ID_ATTRIBUTE_NAME,b)},setAttributeForRoot:function(a){a.setAttribute(A.ROOT_ATTRIBUTE_NAME,"")},getValueForProperty:function(){},getValueForAttribute:function(){},setValueForProperty:function(a,b,c){var d=A.getPropertyInfo(b);if(d&&A.shouldSetAttribute(b,c)){var e=d.mutationMethod;e?e(a,c):null==c||d.hasBooleanValue&&!c||d.hasNumericValue&&isNaN(c)||d.hasPositiveNumericValue&&1>c||d.hasOverloadedBooleanValue&&!1===c?gc.deleteValueForProperty(a,
  b):d.mustUseProperty?a[d.propertyName]=c:(b=d.attributeName,(e=d.attributeNamespace)?a.setAttributeNS(e,b,""+c):d.hasBooleanValue||d.hasOverloadedBooleanValue&&!0===c?a.setAttribute(b,""):a.setAttribute(b,""+c))}else gc.setValueForAttribute(a,b,A.shouldSetAttribute(b,c)?c:null)},setValueForAttribute:function(a,b,c){fc(b)&&(null==c?a.removeAttribute(b):a.setAttribute(b,""+c))},deleteValueForAttribute:function(a,b){a.removeAttribute(b)},deleteValueForProperty:function(a,b){var c=A.getPropertyInfo(b);
  c?(b=c.mutationMethod)?b(a,void 0):c.mustUseProperty?a[c.propertyName]=c.hasBooleanValue?!1:"":a.removeAttribute(c.attributeName):a.removeAttribute(b)}},hc=gc,ic=Qa.ReactDebugCurrentFrame;function jc(){return null}
  var kc={current:null,phase:null,resetCurrentFiber:function(){ic.getCurrentStack=null;kc.current=null;kc.phase=null},setCurrentFiber:function(a,b){ic.getCurrentStack=jc;kc.current=a;kc.phase=b},getCurrentFiberOwnerName:function(){return null},getCurrentFiberStackAddendum:jc},lc=kc,mc={getHostProps:function(a,b){var c=b.value,d=b.checked;return n({type:void 0,step:void 0,min:void 0,max:void 0},b,{defaultChecked:void 0,defaultValue:void 0,value:null!=c?c:a._wrapperState.initialValue,checked:null!=d?
  d:a._wrapperState.initialChecked})},initWrapperState:function(a,b){var c=b.defaultValue;a._wrapperState={initialChecked:null!=b.checked?b.checked:b.defaultChecked,initialValue:null!=b.value?b.value:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}},updateWrapper:function(a,b){var c=b.checked;null!=c&&hc.setValueForProperty(a,"checked",c||!1);c=b.value;if(null!=c)if(0===c&&""===a.value)a.value="0";else if("number"===b.type){if(b=parseFloat(a.value)||0,c!=b||c==b&&a.value!=
  c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else null==b.value&&null!=b.defaultValue&&a.defaultValue!==""+b.defaultValue&&(a.defaultValue=""+b.defaultValue),null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)},postMountWrapper:function(a,b){switch(b.type){case "submit":case "reset":break;case "color":case "date":case "datetime":case "datetime-local":case "month":case "time":case "week":a.value="";a.value=a.defaultValue;break;default:a.value=a.value}b=a.name;""!==
  b&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!a.defaultChecked;""!==b&&(a.name=b)},restoreControlledState:function(a,b){mc.updateWrapper(a,b);var c=b.name;if("radio"===b.type&&null!=c){for(b=a;b.parentNode;)b=b.parentNode;c=b.querySelectorAll("input[name\x3d"+JSON.stringify(""+c)+'][type\x3d"radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=G.getFiberCurrentPropsFromNode(d);e?void 0:w("90");mc.updateWrapper(d,e)}}}}},qc=mc;
  function rc(a){var b="";aa.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}var sc={validateProps:function(){},postMountWrapper:function(a,b){null!=b.value&&a.setAttribute("value",b.value)},getHostProps:function(a,b){a=n({children:void 0},b);if(b=rc(b.children))a.children=b;return a}};
  function tc(a,b,c){a=a.options;if(b){b={};for(var d=0;d<c.length;d++)b["$"+c[d]]=!0;for(c=0;c<a.length;c++)d=b.hasOwnProperty("$"+a[c].value),a[c].selected!==d&&(a[c].selected=d)}else{c=""+c;b=null;for(d=0;d<a.length;d++){if(a[d].value===c){a[d].selected=!0;return}null!==b||a[d].disabled||(b=a[d])}null!==b&&(b.selected=!0)}}
  var uc={getHostProps:function(a,b){return n({},b,{value:void 0})},initWrapperState:function(a,b){var c=b.value;a._wrapperState={initialValue:null!=c?c:b.defaultValue,wasMultiple:!!b.multiple}},postMountWrapper:function(a,b){a.multiple=!!b.multiple;var c=b.value;null!=c?tc(a,!!b.multiple,c):null!=b.defaultValue&&tc(a,!!b.multiple,b.defaultValue)},postUpdateWrapper:function(a,b){a._wrapperState.initialValue=void 0;var c=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!b.multiple;var d=b.value;
  null!=d?tc(a,!!b.multiple,d):c!==!!b.multiple&&(null!=b.defaultValue?tc(a,!!b.multiple,b.defaultValue):tc(a,!!b.multiple,b.multiple?[]:""))},restoreControlledState:function(a,b){var c=b.value;null!=c&&tc(a,!!b.multiple,c)}},vc={getHostProps:function(a,b){null!=b.dangerouslySetInnerHTML?w("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})},initWrapperState:function(a,b){var c=b.value,d=c;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?
  w("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:w("93"),b=b[0]),c=""+b),null==c&&(c=""),d=c);a._wrapperState={initialValue:""+d}},updateWrapper:function(a,b){var c=b.value;null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&(a.defaultValue=c));null!=b.defaultValue&&(a.defaultValue=b.defaultValue)},postMountWrapper:function(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)},restoreControlledState:function(a,b){vc.updateWrapper(a,b)}},wc=vc,xc=n({menuitem:!0},{area:!0,
  base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yc(a,b){b&&(xc[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?w("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?w("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:w("61")),null!=b.style&&"object"!==typeof b.style?w("62",""):void 0)}
  function zc(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
  function Ac(a){var b=zc(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"function"===typeof c.get&&"function"===typeof c.set)return Object.defineProperty(a,b,{enumerable:c.enumerable,configurable:!0,get:function(){return c.get.call(this)},set:function(a){d=""+a;c.set.call(this,a)}}),{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=null;delete a[b]}}}
  var Bc={_getTrackerFromNode:function(a){return a._valueTracker},track:function(a){a._valueTracker||(a._valueTracker=Ac(a))},updateValueIfChanged:function(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=zc(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1},stopTracking:function(a){(a=a._valueTracker)&&a.stopTracking()}};
  function Cc(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
  var Dc=ka.Namespaces,Ec,Fc=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Dc.svg||"innerHTML"in a)a.innerHTML=b;else for(Ec=Ec||document.createElement("div"),Ec.innerHTML="\x3csvg\x3e"+b+"\x3c/svg\x3e",b=Ec.firstChild;b.firstChild;)a.appendChild(b.firstChild)}),Gc=/["'&<>]/,Hc=F.TEXT_NODE;
  function Ic(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&c.nodeType===Hc){c.nodeValue=b;return}}a.textContent=b}
  l.canUseDOM&&("textContent"in document.documentElement||(Ic=function(a,b){if(a.nodeType===Hc)a.nodeValue=b;else{if("boolean"===typeof b||"number"===typeof b)b=""+b;else{b=""+b;var c=Gc.exec(b);if(c){var d="",e,f=0;for(e=c.index;e<b.length;e++){switch(b.charCodeAt(e)){case 34:c="\x26quot;";break;case 38:c="\x26amp;";break;case 39:c="\x26#x27;";break;case 60:c="\x26lt;";break;case 62:c="\x26gt;";break;default:continue}f!==e&&(d+=b.substring(f,e));f=e+1;d+=c}b=f!==e?d+b.substring(f,e):d}}Fc(a,b)}}));
  var Jc=Ic,Kc=lc.getCurrentFiberOwnerName,Lc=F.DOCUMENT_NODE,Mc=F.DOCUMENT_FRAGMENT_NODE,Nc=M.listenTo,Oc=sa.registrationNameModules,Pc=ka.Namespaces.html,Qc=ka.getIntrinsicNamespace;function Rc(a,b){Nc(b,a.nodeType===Lc||a.nodeType===Mc?a:a.ownerDocument)}
  var Sc={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",
  topWaiting:"waiting"},N={createElement:function(a,b,c,d){c=c.nodeType===Lc?c:c.ownerDocument;d===Pc&&(d=Qc(a));d===Pc?"script"===a?(a=c.createElement("div"),a.innerHTML="\x3cscript\x3e\x3c/script\x3e",a=a.removeChild(a.firstChild)):a="string"===typeof b.is?c.createElement(a,{is:b.is}):c.createElement(a):a=c.createElementNS(d,a);return a},createTextNode:function(a,b){return(b.nodeType===Lc?b:b.ownerDocument).createTextNode(a)},setInitialProperties:function(a,b,c,d){var e=Cc(b,c);switch(b){case "iframe":case "object":M.trapBubbledEvent("topLoad",
  "load",a);var f=c;break;case "video":case "audio":for(f in Sc)Sc.hasOwnProperty(f)&&M.trapBubbledEvent(f,Sc[f],a);f=c;break;case "source":M.trapBubbledEvent("topError","error",a);f=c;break;case "img":case "image":M.trapBubbledEvent("topError","error",a);M.trapBubbledEvent("topLoad","load",a);f=c;break;case "form":M.trapBubbledEvent("topReset","reset",a);M.trapBubbledEvent("topSubmit","submit",a);f=c;break;case "details":M.trapBubbledEvent("topToggle","toggle",a);f=c;break;case "input":qc.initWrapperState(a,
  c);f=qc.getHostProps(a,c);M.trapBubbledEvent("topInvalid","invalid",a);Rc(d,"onChange");break;case "option":sc.validateProps(a,c);f=sc.getHostProps(a,c);break;case "select":uc.initWrapperState(a,c);f=uc.getHostProps(a,c);M.trapBubbledEvent("topInvalid","invalid",a);Rc(d,"onChange");break;case "textarea":wc.initWrapperState(a,c);f=wc.getHostProps(a,c);M.trapBubbledEvent("topInvalid","invalid",a);Rc(d,"onChange");break;default:f=c}yc(b,f,Kc);var g=f,h;for(h in g)if(g.hasOwnProperty(h)){var k=g[h];"style"===
  h?bc.setValueForStyles(a,k):"dangerouslySetInnerHTML"===h?(k=k?k.__html:void 0,null!=k&&Fc(a,k)):"children"===h?"string"===typeof k?Jc(a,k):"number"===typeof k&&Jc(a,""+k):"suppressContentEditableWarning"!==h&&(Oc.hasOwnProperty(h)?null!=k&&Rc(d,h):e?hc.setValueForAttribute(a,h,k):null!=k&&hc.setValueForProperty(a,h,k))}switch(b){case "input":Bc.track(a);qc.postMountWrapper(a,c);break;case "textarea":Bc.track(a);wc.postMountWrapper(a,c);break;case "option":sc.postMountWrapper(a,c);break;case "select":uc.postMountWrapper(a,
  c);break;default:"function"===typeof f.onClick&&(a.onclick=ca)}},diffProperties:function(a,b,c,d,e){var f=null;switch(b){case "input":c=qc.getHostProps(a,c);d=qc.getHostProps(a,d);f=[];break;case "option":c=sc.getHostProps(a,c);d=sc.getHostProps(a,d);f=[];break;case "select":c=uc.getHostProps(a,c);d=uc.getHostProps(a,d);f=[];break;case "textarea":c=wc.getHostProps(a,c);d=wc.getHostProps(a,d);f=[];break;default:"function"!==typeof c.onClick&&"function"===typeof d.onClick&&(a.onclick=ca)}yc(b,d,Kc);
  var g,h;a=null;for(g in c)if(!d.hasOwnProperty(g)&&c.hasOwnProperty(g)&&null!=c[g])if("style"===g)for(h in b=c[g],b)b.hasOwnProperty(h)&&(a||(a={}),a[h]="");else"dangerouslySetInnerHTML"!==g&&"children"!==g&&"suppressContentEditableWarning"!==g&&(Oc.hasOwnProperty(g)?f||(f=[]):(f=f||[]).push(g,null));for(g in d){var k=d[g];b=null!=c?c[g]:void 0;if(d.hasOwnProperty(g)&&k!==b&&(null!=k||null!=b))if("style"===g)if(b){for(h in b)!b.hasOwnProperty(h)||k&&k.hasOwnProperty(h)||(a||(a={}),a[h]="");for(h in k)k.hasOwnProperty(h)&&
  b[h]!==k[h]&&(a||(a={}),a[h]=k[h])}else a||(f||(f=[]),f.push(g,a)),a=k;else"dangerouslySetInnerHTML"===g?(k=k?k.__html:void 0,b=b?b.__html:void 0,null!=k&&b!==k&&(f=f||[]).push(g,""+k)):"children"===g?b===k||"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(g,""+k):"suppressContentEditableWarning"!==g&&(Oc.hasOwnProperty(g)?(null!=k&&Rc(e,g),f||b===k||(f=[])):(f=f||[]).push(g,k))}a&&(f=f||[]).push("style",a);return f},updateProperties:function(a,b,c,d,e){Cc(c,d);d=Cc(c,e);for(var f=0;f<b.length;f+=
  2){var g=b[f],h=b[f+1];"style"===g?bc.setValueForStyles(a,h):"dangerouslySetInnerHTML"===g?Fc(a,h):"children"===g?Jc(a,h):d?null!=h?hc.setValueForAttribute(a,g,h):hc.deleteValueForAttribute(a,g):null!=h?hc.setValueForProperty(a,g,h):hc.deleteValueForProperty(a,g)}switch(c){case "input":qc.updateWrapper(a,e);Bc.updateValueIfChanged(a);break;case "textarea":wc.updateWrapper(a,e);break;case "select":uc.postUpdateWrapper(a,e)}},diffHydratedProperties:function(a,b,c,d,e){switch(b){case "iframe":case "object":M.trapBubbledEvent("topLoad",
  "load",a);break;case "video":case "audio":for(var f in Sc)Sc.hasOwnProperty(f)&&M.trapBubbledEvent(f,Sc[f],a);break;case "source":M.trapBubbledEvent("topError","error",a);break;case "img":case "image":M.trapBubbledEvent("topError","error",a);M.trapBubbledEvent("topLoad","load",a);break;case "form":M.trapBubbledEvent("topReset","reset",a);M.trapBubbledEvent("topSubmit","submit",a);break;case "details":M.trapBubbledEvent("topToggle","toggle",a);break;case "input":qc.initWrapperState(a,c);M.trapBubbledEvent("topInvalid",
  "invalid",a);Rc(e,"onChange");break;case "option":sc.validateProps(a,c);break;case "select":uc.initWrapperState(a,c);M.trapBubbledEvent("topInvalid","invalid",a);Rc(e,"onChange");break;case "textarea":wc.initWrapperState(a,c),M.trapBubbledEvent("topInvalid","invalid",a),Rc(e,"onChange")}yc(b,c,Kc);d=null;for(var g in c)c.hasOwnProperty(g)&&(f=c[g],"children"===g?"string"===typeof f?a.textContent!==f&&(d=["children",f]):"number"===typeof f&&a.textContent!==""+f&&(d=["children",""+f]):Oc.hasOwnProperty(g)&&
  null!=f&&Rc(e,g));switch(b){case "input":Bc.track(a);qc.postMountWrapper(a,c);break;case "textarea":Bc.track(a);wc.postMountWrapper(a,c);break;case "select":case "option":break;default:"function"===typeof c.onClick&&(a.onclick=ca)}return d},diffHydratedText:function(a,b){return a.nodeValue!==b},warnForDeletedHydratableElement:function(){},warnForDeletedHydratableText:function(){},warnForInsertedHydratedElement:function(){},warnForInsertedHydratedText:function(){},restoreControlledState:function(a,
  b,c){switch(b){case "input":qc.restoreControlledState(a,c);break;case "textarea":wc.restoreControlledState(a,c);break;case "select":uc.restoreControlledState(a,c)}}},Tc=void 0;
  if(l.canUseDOM)if("function"!==typeof requestIdleCallback){var Uc=null,Vc=null,Wc=!1,Xc=!1,Yc=0,Zc=33,$c=33,ad={timeRemaining:"object"===typeof performance&&"function"===typeof performance.now?function(){return Yc-performance.now()}:function(){return Yc-Date.now()}},bd="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){a.source===window&&a.data===bd&&(Wc=!1,a=Vc,Vc=null,null!==a&&a(ad))},!1);var cd=function(a){Xc=!1;var b=a-Yc+$c;b<$c&&Zc<$c?(8>
  b&&(b=8),$c=b<Zc?Zc:b):Zc=b;Yc=a+$c;Wc||(Wc=!0,window.postMessage(bd,"*"));b=Uc;Uc=null;null!==b&&b(a)};Tc=function(a){Vc=a;Xc||(Xc=!0,requestAnimationFrame(cd));return 0}}else Tc=requestIdleCallback;else Tc=function(a){setTimeout(function(){a({timeRemaining:function(){return Infinity}})});return 0};
  var dd={rIC:Tc},ed={enableAsyncSubtreeAPI:!0},Q={NoWork:0,SynchronousPriority:1,TaskPriority:2,HighPriority:3,LowPriority:4,OffscreenPriority:5},fd=J.Callback,gd=Q.NoWork,hd=Q.SynchronousPriority,id=Q.TaskPriority,jd=E.ClassComponent,kd=E.HostRoot,md=void 0,nd=void 0;function od(a,b){return a!==id&&a!==hd||b!==id&&b!==hd?a===gd&&b!==gd?-255:a!==gd&&b===gd?255:a-b:0}function pd(){return{first:null,last:null,hasForceUpdate:!1,callbackList:null}}
  function qd(a,b,c,d){null!==c?c.next=b:(b.next=a.first,a.first=b);null!==d?b.next=d:a.last=b}function rd(a,b){b=b.priorityLevel;var c=null;if(null!==a.last&&0>=od(a.last.priorityLevel,b))c=a.last;else for(a=a.first;null!==a&&0>=od(a.priorityLevel,b);)c=a,a=a.next;return c}
  function sd(a,b){var c=a.alternate,d=a.updateQueue;null===d&&(d=a.updateQueue=pd());null!==c?(a=c.updateQueue,null===a&&(a=c.updateQueue=pd())):a=null;md=d;nd=a!==d?a:null;var e=md;c=nd;var f=rd(e,b),g=null!==f?f.next:e.first;if(null===c)return qd(e,b,f,g),null;d=rd(c,b);a=null!==d?d.next:c.first;qd(e,b,f,g);if(g===a&&null!==g||f===d&&null!==f)return null===d&&(c.first=b),null===a&&(c.last=null),null;b={priorityLevel:b.priorityLevel,partialState:b.partialState,callback:b.callback,isReplace:b.isReplace,
  isForced:b.isForced,isTopLevelUnmount:b.isTopLevelUnmount,next:null};qd(c,b,d,a);return b}function td(a,b,c,d){a=a.partialState;return"function"===typeof a?a.call(b,c,d):a}
  var ud={addUpdate:function(a,b,c,d){sd(a,{priorityLevel:d,partialState:b,callback:c,isReplace:!1,isForced:!1,isTopLevelUnmount:!1,next:null})},addReplaceUpdate:function(a,b,c,d){sd(a,{priorityLevel:d,partialState:b,callback:c,isReplace:!0,isForced:!1,isTopLevelUnmount:!1,next:null})},addForceUpdate:function(a,b,c){sd(a,{priorityLevel:c,partialState:null,callback:b,isReplace:!1,isForced:!0,isTopLevelUnmount:!1,next:null})},getUpdatePriority:function(a){var b=a.updateQueue;return null===b||a.tag!==
  jd&&a.tag!==kd?gd:null!==b.first?b.first.priorityLevel:gd},addTopLevelUpdate:function(a,b,c,d){var e=null===b.element;b={priorityLevel:d,partialState:b,callback:c,isReplace:!1,isForced:!1,isTopLevelUnmount:e,next:null};a=sd(a,b);e&&(e=md,c=nd,null!==e&&null!==b.next&&(b.next=null,e.last=b),null!==c&&null!==a&&null!==a.next&&(a.next=null,c.last=b))},beginUpdateQueue:function(a,b,c,d,e,f,g){null!==a&&a.updateQueue===c&&(c=b.updateQueue={first:c.first,last:c.last,callbackList:null,hasForceUpdate:!1});
  a=c.callbackList;for(var h=c.hasForceUpdate,k=!0,p=c.first;null!==p&&0>=od(p.priorityLevel,g);){c.first=p.next;null===c.first&&(c.last=null);var x;if(p.isReplace)e=td(p,d,e,f),k=!0;else if(x=td(p,d,e,f))e=k?n({},e,x):n(e,x),k=!1;p.isForced&&(h=!0);null===p.callback||p.isTopLevelUnmount&&null!==p.next||(a=null!==a?a:[],a.push(p.callback),b.effectTag|=fd);p=p.next}c.callbackList=a;c.hasForceUpdate=h;null!==c.first||null!==a||h||(b.updateQueue=null);return e},commitCallbacks:function(a,b,c){a=b.callbackList;
  if(null!==a)for(b.callbackList=null,b=0;b<a.length;b++){var d=a[b];"function"!==typeof d?w("191",d):void 0;d.call(c)}}},vd=[],wd=-1,xd={createCursor:function(a){return{current:a}},isEmpty:function(){return-1===wd},pop:function(a){0>wd||(a.current=vd[wd],vd[wd]=null,wd--)},push:function(a,b){wd++;vd[wd]=a.current;a.current=b},reset:function(){for(;-1<wd;)vd[wd]=null,wd--}},yd=bb.isFiberMounted,zd=E.ClassComponent,Ad=E.HostRoot,Bd=xd.createCursor,Cd=xd.pop,Dd=xd.push,Ed=Bd(da),Fd=Bd(!1),Ld=da;
  function Md(a,b,c){a=a.stateNode;a.__reactInternalMemoizedUnmaskedChildContext=b;a.__reactInternalMemoizedMaskedChildContext=c}function Nd(a){return a.tag===zd&&null!=a.type.childContextTypes}function Od(a,b){var c=a.stateNode,d=a.type.childContextTypes;if("function"!==typeof c.getChildContext)return b;c=c.getChildContext();for(var e in c)e in d?void 0:w("108",Ra(a)||"Unknown",e);return n({},b,c)}
  var R={getUnmaskedContext:function(a){return Nd(a)?Ld:Ed.current},cacheContext:Md,getMaskedContext:function(a,b){var c=a.type.contextTypes;if(!c)return da;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&Md(a,b,e);return e},hasContextChanged:function(){return Fd.current},isContextConsumer:function(a){return a.tag===zd&&null!=a.type.contextTypes},isContextProvider:Nd,popContextProvider:function(a){Nd(a)&&
  (Cd(Fd,a),Cd(Ed,a))},popTopLevelContextObject:function(a){Cd(Fd,a);Cd(Ed,a)},pushTopLevelContextObject:function(a,b,c){null!=Ed.cursor?w("168"):void 0;Dd(Ed,b,a);Dd(Fd,c,a)},processChildContext:Od,pushContextProvider:function(a){if(!Nd(a))return!1;var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||da;Ld=Ed.current;Dd(Ed,b,a);Dd(Fd,Fd.current,a);return!0},invalidateContextProvider:function(a,b){var c=a.stateNode;c?void 0:w("169");if(b){var d=Od(a,Ld,!0);c.__reactInternalMemoizedMergedChildContext=
  d;Cd(Fd,a);Cd(Ed,a);Dd(Ed,d,a)}else Cd(Fd,a);Dd(Fd,b,a)},resetContext:function(){Ld=da;Ed.current=da;Fd.current=!1},findCurrentUnmaskedContext:function(a){for(yd(a)&&a.tag===zd?void 0:w("170");a.tag!==Ad;){if(Nd(a))return a.stateNode.__reactInternalMemoizedMergedChildContext;(a=a["return"])?void 0:w("171")}return a.stateNode.context}},Pd={NoContext:0,AsyncUpdates:1},Qd=E.IndeterminateComponent,Rd=E.ClassComponent,Sd=E.HostRoot,Td=E.HostComponent,Ud=E.HostText,Vd=E.HostPortal,Wd=E.CoroutineComponent,
  Xd=E.YieldComponent,Yd=E.Fragment,Zd=Q.NoWork,$d=Pd.NoContext,ae=J.NoEffect;function be(a,b,c){this.tag=a;this.key=b;this.stateNode=this.type=null;this.sibling=this.child=this["return"]=null;this.index=0;this.memoizedState=this.updateQueue=this.memoizedProps=this.pendingProps=this.ref=null;this.internalContextTag=c;this.effectTag=ae;this.lastEffect=this.firstEffect=this.nextEffect=null;this.pendingWorkPriority=Zd;this.alternate=null}
  function ce(a,b,c){var d=void 0;"function"===typeof a?(d=a.prototype&&a.prototype.isReactComponent?new be(Rd,b,c):new be(Qd,b,c),d.type=a):"string"===typeof a?(d=new be(Td,b,c),d.type=a):"object"===typeof a&&null!==a&&"number"===typeof a.tag?d=a:w("130",null==a?a:typeof a,"");return d}
  var de={createWorkInProgress:function(a,b){var c=a.alternate;null===c?(c=new be(a.tag,a.key,a.internalContextTag),c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.effectTag=ae,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.pendingWorkPriority=b;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c},createHostRootFiber:function(){return new be(Sd,null,$d)},
  createFiberFromElement:function(a,b,c){b=ce(a.type,a.key,b,null);b.pendingProps=a.props;b.pendingWorkPriority=c;return b},createFiberFromFragment:function(a,b,c){b=new be(Yd,null,b);b.pendingProps=a;b.pendingWorkPriority=c;return b},createFiberFromText:function(a,b,c){b=new be(Ud,null,b);b.pendingProps=a;b.pendingWorkPriority=c;return b},createFiberFromElementType:ce,createFiberFromHostInstanceForDeletion:function(){var a=new be(Td,null,$d);a.type="DELETED";return a},createFiberFromCoroutine:function(a,
  b,c){b=new be(Wd,a.key,b);b.type=a.handler;b.pendingProps=a;b.pendingWorkPriority=c;return b},createFiberFromYield:function(a,b){return new be(Xd,null,b)},createFiberFromPortal:function(a,b,c){b=new be(Vd,a.key,b);b.pendingProps=a.children||[];b.pendingWorkPriority=c;b.stateNode={containerInfo:a.containerInfo,implementation:a.implementation};return b},largerPriority:function(a,b){return a!==Zd&&(b===Zd||b>a)?a:b}},ee=de.createHostRootFiber,fe=E.IndeterminateComponent,ge=E.FunctionalComponent,he=E.ClassComponent,
  ie=E.HostComponent,je,ke;"function"===typeof Symbol&&Symbol["for"]?(je=Symbol["for"]("react.coroutine"),ke=Symbol["for"]("react.yield")):(je=60104,ke=60105);
  var le={createCoroutine:function(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:je,key:null==d?null:""+d,children:a,handler:b,props:c}},createYield:function(a){return{$$typeof:ke,value:a}},isCoroutine:function(a){return"object"===typeof a&&null!==a&&a.$$typeof===je},isYield:function(a){return"object"===typeof a&&null!==a&&a.$$typeof===ke},REACT_YIELD_TYPE:ke,REACT_COROUTINE_TYPE:je},me="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.portal")||
  60106,ne={createPortal:function(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:me,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}},isPortal:function(a){return"object"===typeof a&&null!==a&&a.$$typeof===me},REACT_PORTAL_TYPE:me},oe=le.REACT_COROUTINE_TYPE,pe=le.REACT_YIELD_TYPE,qe=ne.REACT_PORTAL_TYPE,re=de.createWorkInProgress,se=de.createFiberFromElement,te=de.createFiberFromFragment,ue=de.createFiberFromText,ve=de.createFiberFromCoroutine,
  we=de.createFiberFromYield,xe=de.createFiberFromPortal,ye=Array.isArray,ze=E.FunctionalComponent,Ae=E.ClassComponent,Be=E.HostText,Ce=E.HostPortal,De=E.CoroutineComponent,Ee=E.YieldComponent,Fe=E.Fragment,Ge=J.NoEffect,He=J.Placement,Ie=J.Deletion,Je="function"===typeof Symbol&&Symbol.iterator,Ke="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;
  function Le(a){if(null===a||"undefined"===typeof a)return null;a=Je&&a[Je]||a["@@iterator"];return"function"===typeof a?a:null}
  function Me(a,b){var c=b.ref;if(null!==c&&"function"!==typeof c){if(b._owner){b=b._owner;var d=void 0;b&&("number"===typeof b.tag?(b.tag!==Ae?w("110"):void 0,d=b.stateNode):d=b.getPublicInstance());d?void 0:w("147",c);var e=""+c;if(null!==a&&null!==a.ref&&a.ref._stringRef===e)return a.ref;a=function(a){var b=d.refs===da?d.refs={}:d.refs;null===a?delete b[e]:b[e]=a};a._stringRef=e;return a}"string"!==typeof c?w("148"):void 0;b._owner?void 0:w("149",c)}return c}
  function Ne(a,b){"textarea"!==a.type&&w("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
  function Oe(a,b){function c(c,d){if(b){if(!a){if(null===d.alternate)return;d=d.alternate}var m=c.lastEffect;null!==m?(m.nextEffect=d,c.lastEffect=d):c.firstEffect=c.lastEffect=d;d.nextEffect=null;d.effectTag=Ie}}function d(a,d){if(!b)return null;for(;null!==d;)c(a,d),d=d.sibling;return null}function e(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function f(b,c){if(a)return b=re(b,c),b.index=0,b.sibling=null,b;b.pendingWorkPriority=c;b.effectTag=Ge;
  b.index=0;b.sibling=null;return b}function g(a,c,d){a.index=d;if(!b)return c;d=a.alternate;if(null!==d)return d=d.index,d<c?(a.effectTag=He,c):d;a.effectTag=He;return c}function h(a){b&&null===a.alternate&&(a.effectTag=He);return a}function k(a,b,c,d){if(null===b||b.tag!==Be)return c=ue(c,a.internalContextTag,d),c["return"]=a,c;b=f(b,d);b.pendingProps=c;b["return"]=a;return b}function p(a,b,c,d){if(null===b||b.type!==c.type)return d=se(c,a.internalContextTag,d),d.ref=Me(b,c),d["return"]=a,d;d=f(b,
  d);d.ref=Me(b,c);d.pendingProps=c.props;d["return"]=a;return d}function x(a,b,c,d){if(null===b||b.tag!==De)return c=ve(c,a.internalContextTag,d),c["return"]=a,c;b=f(b,d);b.pendingProps=c;b["return"]=a;return b}function S(a,b,c,d){if(null===b||b.tag!==Ee)return b=we(c,a.internalContextTag,d),b.type=c.value,b["return"]=a,b;b=f(b,d);b.type=c.value;b["return"]=a;return b}function D(a,b,c,d){if(null===b||b.tag!==Ce||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return c=
  xe(c,a.internalContextTag,d),c["return"]=a,c;b=f(b,d);b.pendingProps=c.children||[];b["return"]=a;return b}function y(a,b,c,d){if(null===b||b.tag!==Fe)return c=te(c,a.internalContextTag,d),c["return"]=a,c;b=f(b,d);b.pendingProps=c;b["return"]=a;return b}function B(a,b,c){if("string"===typeof b||"number"===typeof b)return b=ue(""+b,a.internalContextTag,c),b["return"]=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Ke:return c=se(b,a.internalContextTag,c),c.ref=Me(null,b),c["return"]=
  a,c;case oe:return b=ve(b,a.internalContextTag,c),b["return"]=a,b;case pe:return c=we(b,a.internalContextTag,c),c.type=b.value,c["return"]=a,c;case qe:return b=xe(b,a.internalContextTag,c),b["return"]=a,b}if(ye(b)||Le(b))return b=te(b,a.internalContextTag,c),b["return"]=a,b;Ne(a,b)}return null}function H(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:k(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Ke:return c.key===e?p(a,
  b,c,d):null;case oe:return c.key===e?x(a,b,c,d):null;case pe:return null===e?S(a,b,c,d):null;case qe:return c.key===e?D(a,b,c,d):null}if(ye(c)||Le(c))return null!==e?null:y(a,b,c,d);Ne(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,k(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Ke:return a=a.get(null===d.key?c:d.key)||null,p(b,a,d,e);case oe:return a=a.get(null===d.key?c:d.key)||null,x(b,a,d,e);case pe:return a=a.get(c)||
  null,S(b,a,d,e);case qe:return a=a.get(null===d.key?c:d.key)||null,D(b,a,d,e)}if(ye(d)||Le(d))return a=a.get(c)||null,y(b,a,d,e);Ne(b,d)}return null}function Ca(a,f,h,k){for(var m=null,t=null,q=f,r=f=0,p=null;null!==q&&r<h.length;r++){q.index>r?(p=q,q=null):p=q.sibling;var v=H(a,q,h[r],k);if(null===v){null===q&&(q=p);break}b&&q&&null===v.alternate&&c(a,q);f=g(v,f,r);null===t?m=v:t.sibling=v;t=v;q=p}if(r===h.length)return d(a,q),m;if(null===q){for(;r<h.length;r++)if(q=B(a,h[r],k))f=g(q,f,r),null===
  t?m=q:t.sibling=q,t=q;return m}for(q=e(a,q);r<h.length;r++)if(p=C(q,a,r,h[r],k)){if(b&&null!==p.alternate)q["delete"](null===p.key?r:p.key);f=g(p,f,r);null===t?m=p:t.sibling=p;t=p}b&&q.forEach(function(b){return c(a,b)});return m}function r(a,f,h,r){var m=Le(h);"function"!==typeof m?w("150"):void 0;h=m.call(h);null==h?w("151"):void 0;for(var t=m=null,q=f,k=f=0,p=null,v=h.next();null!==q&&!v.done;k++,v=h.next()){q.index>k?(p=q,q=null):p=q.sibling;var V=H(a,q,v.value,r);if(null===V){q||(q=p);break}b&&
  q&&null===V.alternate&&c(a,q);f=g(V,f,k);null===t?m=V:t.sibling=V;t=V;q=p}if(v.done)return d(a,q),m;if(null===q){for(;!v.done;k++,v=h.next())v=B(a,v.value,r),null!==v&&(f=g(v,f,k),null===t?m=v:t.sibling=v,t=v);return m}for(q=e(a,q);!v.done;k++,v=h.next())if(v=C(q,a,k,v.value,r),null!==v){if(b&&null!==v.alternate)q["delete"](null===v.key?k:v.key);f=g(v,f,k);null===t?m=v:t.sibling=v;t=v}b&&q.forEach(function(b){return c(a,b)});return m}return function(a,b,e,g){var m="object"===typeof e&&null!==e;if(m)switch(e.$$typeof){case Ke:a:{var C=
  e.key;for(m=b;null!==m;){if(m.key===C)if(m.type===e.type){d(a,m.sibling);b=f(m,g);b.ref=Me(m,e);b.pendingProps=e.props;b["return"]=a;a=b;break a}else{d(a,m);break}else c(a,m);m=m.sibling}g=se(e,a.internalContextTag,g);g.ref=Me(b,e);g["return"]=a;a=g}return h(a);case oe:a:{for(m=e.key;null!==b;){if(b.key===m)if(b.tag===De){d(a,b.sibling);b=f(b,g);b.pendingProps=e;b["return"]=a;a=b;break a}else{d(a,b);break}else c(a,b);b=b.sibling}e=ve(e,a.internalContextTag,g);e["return"]=a;a=e}return h(a);case pe:a:{if(null!==
  b)if(b.tag===Ee){d(a,b.sibling);b=f(b,g);b.type=e.value;b["return"]=a;a=b;break a}else d(a,b);b=we(e,a.internalContextTag,g);b.type=e.value;b["return"]=a;a=b}return h(a);case qe:a:{for(m=e.key;null!==b;){if(b.key===m)if(b.tag===Ce&&b.stateNode.containerInfo===e.containerInfo&&b.stateNode.implementation===e.implementation){d(a,b.sibling);b=f(b,g);b.pendingProps=e.children||[];b["return"]=a;a=b;break a}else{d(a,b);break}else c(a,b);b=b.sibling}e=xe(e,a.internalContextTag,g);e["return"]=a;a=e}return h(a)}if("string"===
  typeof e||"number"===typeof e)return e=""+e,null!==b&&b.tag===Be?(d(a,b.sibling),b=f(b,g),b.pendingProps=e,b["return"]=a,a=b):(d(a,b),e=ue(e,a.internalContextTag,g),e["return"]=a,a=e),h(a);if(ye(e))return Ca(a,b,e,g);if(Le(e))return r(a,b,e,g);m&&Ne(a,e);if("undefined"===typeof e)switch(a.tag){case Ae:case ze:e=a.type,w("152",e.displayName||e.name||"Component")}return d(a,b)}}
  var Pe=Oe(!0,!0),Qe=Oe(!1,!0),Re=Oe(!1,!1),Se={reconcileChildFibers:Pe,reconcileChildFibersInPlace:Qe,mountChildFibersInPlace:Re,cloneChildFibers:function(a,b){null!==a&&b.child!==a.child?w("153"):void 0;if(null!==b.child){a=b.child;var c=re(a,a.pendingWorkPriority);c.pendingProps=a.pendingProps;b.child=c;for(c["return"]=b;null!==a.sibling;)a=a.sibling,c=c.sibling=re(a,a.pendingWorkPriority),c.pendingProps=a.pendingProps,c["return"]=b;c.sibling=null}}},Te=J.Update,Ue=Pd.AsyncUpdates,Ve=R.cacheContext,
  We=R.getMaskedContext,Xe=R.getUnmaskedContext,Ye=R.isContextConsumer,Ze=ud.addUpdate,$e=ud.addReplaceUpdate,af=ud.addForceUpdate,bf=ud.beginUpdateQueue,cf=R.hasContextChanged,df=bb.isMounted;
  function ef(a,b,c,d){function e(a,b){b.updater=f;a.stateNode=b;Pa.set(b,a)}var f={isMounted:df,enqueueSetState:function(c,d,e){c=Pa.get(c);var f=b(c,!1);Ze(c,d,void 0===e?null:e,f);a(c,f)},enqueueReplaceState:function(c,d,e){c=Pa.get(c);var f=b(c,!1);$e(c,d,void 0===e?null:e,f);a(c,f)},enqueueForceUpdate:function(c,d){c=Pa.get(c);var e=b(c,!1);af(c,void 0===d?null:d,e);a(c,e)}};return{adoptClassInstance:e,constructClassInstance:function(a,b){var c=a.type,d=Xe(a),f=Ye(a),g=f?We(a,d):da;b=new c(b,g);
  e(a,b);f&&Ve(a,d,g);return b},mountClassInstance:function(a,b){var c=a.alternate,d=a.stateNode,e=d.state||null,g=a.pendingProps;g?void 0:w("158");var h=Xe(a);d.props=g;d.state=e;d.refs=da;d.context=We(a,h);ed.enableAsyncSubtreeAPI&&null!=a.type&&null!=a.type.prototype&&!0===a.type.prototype.unstable_isAsyncReactComponent&&(a.internalContextTag|=Ue);"function"===typeof d.componentWillMount&&(h=d.state,d.componentWillMount(),h!==d.state&&f.enqueueReplaceState(d,d.state,null),h=a.updateQueue,null!==
  h&&(d.state=bf(c,a,h,d,e,g,b)));"function"===typeof d.componentDidMount&&(a.effectTag|=Te)},updateClassInstance:function(a,b,e){var g=b.stateNode;g.props=b.memoizedProps;g.state=b.memoizedState;var h=b.memoizedProps,k=b.pendingProps;k||(k=h,null==k?w("159"):void 0);var D=g.context,y=Xe(b);y=We(b,y);"function"!==typeof g.componentWillReceiveProps||h===k&&D===y||(D=g.state,g.componentWillReceiveProps(k,y),g.state!==D&&f.enqueueReplaceState(g,g.state,null));D=b.memoizedState;e=null!==b.updateQueue?bf(a,
  b,b.updateQueue,g,D,k,e):D;if(!(h!==k||D!==e||cf()||null!==b.updateQueue&&b.updateQueue.hasForceUpdate))return"function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&D===a.memoizedState||(b.effectTag|=Te),!1;var B=k;if(null===h||null!==b.updateQueue&&b.updateQueue.hasForceUpdate)B=!0;else{var H=b.stateNode,C=b.type;B="function"===typeof H.shouldComponentUpdate?H.shouldComponentUpdate(B,e,y):C.prototype&&C.prototype.isPureReactComponent?!ea(h,B)||!ea(D,e):!0}B?("function"===typeof g.componentWillUpdate&&
  g.componentWillUpdate(k,e,y),"function"===typeof g.componentDidUpdate&&(b.effectTag|=Te)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&D===a.memoizedState||(b.effectTag|=Te),c(b,k),d(b,e));g.props=k;g.state=e;g.context=y;return B}}}
  var ff=Se.mountChildFibersInPlace,gf=Se.reconcileChildFibers,hf=Se.reconcileChildFibersInPlace,jf=Se.cloneChildFibers,kf=ud.beginUpdateQueue,lf=R.getMaskedContext,mf=R.getUnmaskedContext,nf=R.hasContextChanged,of=R.pushContextProvider,pf=R.pushTopLevelContextObject,qf=R.invalidateContextProvider,rf=E.IndeterminateComponent,sf=E.FunctionalComponent,tf=E.ClassComponent,uf=E.HostRoot,wf=E.HostComponent,xf=E.HostText,yf=E.HostPortal,zf=E.CoroutineComponent,Af=E.CoroutineHandlerPhase,Bf=E.YieldComponent,
  Cf=E.Fragment,Df=Q.NoWork,Ef=Q.OffscreenPriority,Ff=J.PerformedWork,Gf=J.Placement,Hf=J.ContentReset,If=J.Err,Jf=J.Ref,Kf=Qa.ReactCurrentOwner;
  function Lf(a,b,c,d,e){function f(a,b,c){g(a,b,c,b.pendingWorkPriority)}function g(a,b,c,d){b.child=null===a?ff(b,b.child,c,d):a.child===b.child?gf(b,b.child,c,d):hf(b,b.child,c,d)}function h(a,b){var c=b.ref;null===c||a&&a.ref===c||(b.effectTag|=Jf)}function k(a,b,c,d){h(a,b);if(!c)return d&&qf(b,!1),x(a,b);c=b.stateNode;Kf.current=b;var e=c.render();b.effectTag|=Ff;f(a,b,e);b.memoizedState=c.state;b.memoizedProps=c.props;d&&qf(b,!0);return b.child}function p(a){var b=a.stateNode;b.pendingContext?
  pf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&pf(a,b.context,!1);C(a,b.containerInfo)}function x(a,b){jf(a,b);return b.child}function S(a,b){switch(b.tag){case uf:p(b);break;case tf:of(b);break;case yf:C(b,b.stateNode.containerInfo)}return null}var D=a.shouldSetTextContent,y=a.useSyncScheduling,B=a.shouldDeprioritizeSubtree,H=b.pushHostContext,C=b.pushHostContainer,Ca=c.enterHydrationState,r=c.resetHydrationState,m=c.tryToClaimNextHydratableInstance;a=ef(d,e,function(a,b){a.memoizedProps=
  b},function(a,b){a.memoizedState=b});var t=a.adoptClassInstance,v=a.constructClassInstance,V=a.mountClassInstance,ld=a.updateClassInstance;return{beginWork:function(a,b,c){if(b.pendingWorkPriority===Df||b.pendingWorkPriority>c)return S(a,b);switch(b.tag){case rf:null!==a?w("155"):void 0;var d=b.type,e=b.pendingProps,g=mf(b);g=lf(b,g);d=d(e,g);b.effectTag|=Ff;"object"===typeof d&&null!==d&&"function"===typeof d.render?(b.tag=tf,e=of(b),t(b,d),V(b,c),b=k(a,b,!0,e)):(b.tag=sf,f(a,b,d),b.memoizedProps=
  e,b=b.child);return b;case sf:a:{e=b.type;c=b.pendingProps;d=b.memoizedProps;if(nf())null===c&&(c=d);else if(null===c||d===c){b=x(a,b);break a}d=mf(b);d=lf(b,d);e=e(c,d);b.effectTag|=Ff;f(a,b,e);b.memoizedProps=c;b=b.child}return b;case tf:return e=of(b),d=void 0,null===a?b.stateNode?w("153"):(v(b,b.pendingProps),V(b,c),d=!0):d=ld(a,b,c),k(a,b,d,e);case uf:return p(b),d=b.updateQueue,null!==d?(e=b.memoizedState,d=kf(a,b,d,null,e,null,c),e===d?(r(),b=x(a,b)):(e=d.element,null!==a&&null!==a.child||
  !Ca(b)?(r(),f(a,b,e)):(b.effectTag|=Gf,b.child=ff(b,b.child,e,c)),b.memoizedState=d,b=b.child)):(r(),b=x(a,b)),b;case wf:H(b);null===a&&m(b);e=b.type;var q=b.memoizedProps;d=b.pendingProps;null===d&&(d=q,null===d?w("154"):void 0);g=null!==a?a.memoizedProps:null;nf()||null!==d&&q!==d?(q=d.children,D(e,d)?q=null:g&&D(e,g)&&(b.effectTag|=Hf),h(a,b),c!==Ef&&!y&&B(e,d)?(b.pendingWorkPriority=Ef,b=null):(f(a,b,q),b.memoizedProps=d,b=b.child)):b=x(a,b);return b;case xf:return null===a&&m(b),a=b.pendingProps,
  null===a&&(a=b.memoizedProps),b.memoizedProps=a,null;case Af:b.tag=zf;case zf:c=b.pendingProps;if(nf())null===c&&(c=a&&a.memoizedProps,null===c?w("154"):void 0);else if(null===c||b.memoizedProps===c)c=b.memoizedProps;e=c.children;d=b.pendingWorkPriority;b.stateNode=null===a?ff(b,b.stateNode,e,d):a.child===b.child?gf(b,b.stateNode,e,d):hf(b,b.stateNode,e,d);b.memoizedProps=c;return b.stateNode;case Bf:return null;case yf:a:{C(b,b.stateNode.containerInfo);c=b.pendingWorkPriority;e=b.pendingProps;if(nf())null===
  e&&(e=a&&a.memoizedProps,null==e?w("154"):void 0);else if(null===e||b.memoizedProps===e){b=x(a,b);break a}null===a?b.child=hf(b,b.child,e,c):f(a,b,e);b.memoizedProps=e;b=b.child}return b;case Cf:a:{c=b.pendingProps;if(nf())null===c&&(c=b.memoizedProps);else if(null===c||b.memoizedProps===c){b=x(a,b);break a}f(a,b,c);b.memoizedProps=c;b=b.child}return b;default:w("156")}},beginFailedWork:function(a,b,c){switch(b.tag){case tf:of(b);break;case uf:p(b);break;default:w("157")}b.effectTag|=If;null===a?
  b.child=null:b.child!==a.child&&(b.child=a.child);if(b.pendingWorkPriority===Df||b.pendingWorkPriority>c)return S(a,b);b.firstEffect=null;b.lastEffect=null;g(a,b,null,c);b.tag===tf&&(a=b.stateNode,b.memoizedProps=a.props,b.memoizedState=a.state);return b.child}}}
  var Mf=Se.reconcileChildFibers,Nf=R.popContextProvider,Of=R.popTopLevelContextObject,Pf=E.IndeterminateComponent,Qf=E.FunctionalComponent,Rf=E.ClassComponent,Sf=E.HostRoot,Tf=E.HostComponent,Uf=E.HostText,Vf=E.HostPortal,Wf=E.CoroutineComponent,Xf=E.CoroutineHandlerPhase,Yf=E.YieldComponent,Zf=E.Fragment,ag=J.Placement,bg=J.Ref,cg=J.Update,dg=Q.OffscreenPriority;
  function eg(a,b,c){var d=a.createInstance,e=a.createTextInstance,f=a.appendInitialChild,g=a.finalizeInitialChildren,h=a.prepareUpdate,k=b.getRootHostContainer,p=b.popHostContext,x=b.getHostContext,S=b.popHostContainer,D=c.prepareToHydrateHostInstance,y=c.prepareToHydrateHostTextInstance,B=c.popHydrationState;return{completeWork:function(a,b,c){var r=b.pendingProps;if(null===r)r=b.memoizedProps;else if(b.pendingWorkPriority!==dg||c===dg)b.pendingProps=null;switch(b.tag){case Qf:return null;case Rf:return Nf(b),
  null;case Sf:S(b);Of(b);r=b.stateNode;r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null);if(null===a||null===a.child)B(b),b.effectTag&=~ag;return null;case Tf:p(b);c=k();var m=b.type;if(null!==a&&null!=b.stateNode){var t=a.memoizedProps,C=b.stateNode,V=x();r=h(C,m,t,r,c,V);if(b.updateQueue=r)b.effectTag|=cg;a.ref!==b.ref&&(b.effectTag|=bg)}else{if(!r)return null===b.stateNode?w("166"):void 0,null;a=x();if(B(b))D(b,c,a)&&(b.effectTag|=cg);else{a=d(m,r,c,a,b);a:for(t=b.child;null!==
  t;){if(t.tag===Tf||t.tag===Uf)f(a,t.stateNode);else if(t.tag!==Vf&&null!==t.child){t=t.child;continue}if(t===b)break a;for(;null===t.sibling;){if(null===t["return"]||t["return"]===b)break a;t=t["return"]}t=t.sibling}g(a,m,r,c)&&(b.effectTag|=cg);b.stateNode=a}null!==b.ref&&(b.effectTag|=bg)}return null;case Uf:if(a&&null!=b.stateNode)a.memoizedProps!==r&&(b.effectTag|=cg);else{if("string"!==typeof r)return null===b.stateNode?w("166"):void 0,null;a=k();c=x();B(b)?y(b)&&(b.effectTag|=cg):b.stateNode=
  e(r,a,c,b)}return null;case Wf:(r=b.memoizedProps)?void 0:w("165");b.tag=Xf;c=[];a:for((m=b.stateNode)&&(m["return"]=b);null!==m;){if(m.tag===Tf||m.tag===Uf||m.tag===Vf)w("164");else if(m.tag===Yf)c.push(m.type);else if(null!==m.child){m.child["return"]=m;m=m.child;continue}for(;null===m.sibling;){if(null===m["return"]||m["return"]===b)break a;m=m["return"]}m.sibling["return"]=m["return"];m=m.sibling}m=r.handler;r=m(r.props,c);b.child=Mf(b,null!==a?a.child:null,r,b.pendingWorkPriority);return b.child;
  case Xf:return b.tag=Wf,null;case Yf:return null;case Zf:return null;case Vf:return b.effectTag|=cg,S(b),null;case Pf:w("167");default:w("156")}}}}var fg=null,gg=null;function hg(a){return function(b){try{return a(b)}catch(c){}}}
  var ig={injectInternals:function(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!b.supportsFiber)return!0;try{var c=b.inject(a);fg=hg(function(a){return b.onCommitFiberRoot(c,a)});gg=hg(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0},onCommitRoot:function(a){"function"===typeof fg&&fg(a)},onCommitUnmount:function(a){"function"===typeof gg&&gg(a)}},jg=E.ClassComponent,kg=E.HostRoot,lg=E.HostComponent,mg=E.HostText,ng=
  E.HostPortal,og=E.CoroutineComponent,pg=ud.commitCallbacks,qg=ig.onCommitUnmount,rg=J.Placement,sg=J.Update,tg=J.Callback,ug=J.ContentReset;
  function vg(a,b){function c(a){var c=a.ref;if(null!==c)try{c(null)}catch(t){b(a,t)}}function d(a){return a.tag===lg||a.tag===kg||a.tag===ng}function e(a){for(var b=a;;)if(g(b),null!==b.child&&b.tag!==ng)b.child["return"]=b,b=b.child;else{if(b===a)break;for(;null===b.sibling;){if(null===b["return"]||b["return"]===a)return;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}}function f(a){for(var b=a,c=!1,d=void 0,f=void 0;;){if(!c){c=b["return"];a:for(;;){null===c?w("160"):void 0;switch(c.tag){case lg:d=
  c.stateNode;f=!1;break a;case kg:d=c.stateNode.containerInfo;f=!0;break a;case ng:d=c.stateNode.containerInfo;f=!0;break a}c=c["return"]}c=!0}if(b.tag===lg||b.tag===mg)e(b),f?C(d,b.stateNode):H(d,b.stateNode);else if(b.tag===ng?d=b.stateNode.containerInfo:g(b),null!==b.child){b.child["return"]=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b["return"]||b["return"]===a)return;b=b["return"];b.tag===ng&&(c=!1)}b.sibling["return"]=b["return"];b=b.sibling}}function g(a){"function"===
  typeof qg&&qg(a);switch(a.tag){case jg:c(a);var d=a.stateNode;if("function"===typeof d.componentWillUnmount)try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(t){b(a,t)}break;case lg:c(a);break;case og:e(a.stateNode);break;case ng:f(a)}}var h=a.commitMount,k=a.commitUpdate,p=a.resetTextContent,x=a.commitTextUpdate,S=a.appendChild,D=a.appendChildToContainer,y=a.insertBefore,B=a.insertInContainerBefore,H=a.removeChild,C=a.removeChildFromContainer,Ca=a.getPublicInstance;
  return{commitPlacement:function(a){a:{for(var b=a["return"];null!==b;){if(d(b)){var c=b;break a}b=b["return"]}w("160");c=void 0}var e=b=void 0;switch(c.tag){case lg:b=c.stateNode;e=!1;break;case kg:b=c.stateNode.containerInfo;e=!0;break;case ng:b=c.stateNode.containerInfo;e=!0;break;default:w("161")}c.effectTag&ug&&(p(b),c.effectTag&=~ug);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c["return"]||d(c["return"])){c=null;break a}c=c["return"]}c.sibling["return"]=c["return"];for(c=c.sibling;c.tag!==
  lg&&c.tag!==mg;){if(c.effectTag&rg)continue b;if(null===c.child||c.tag===ng)continue b;else c.child["return"]=c,c=c.child}if(!(c.effectTag&rg)){c=c.stateNode;break a}}for(var f=a;;){if(f.tag===lg||f.tag===mg)c?e?B(b,f.stateNode,c):y(b,f.stateNode,c):e?D(b,f.stateNode):S(b,f.stateNode);else if(f.tag!==ng&&null!==f.child){f.child["return"]=f;f=f.child;continue}if(f===a)break;for(;null===f.sibling;){if(null===f["return"]||f["return"]===a)return;f=f["return"]}f.sibling["return"]=f["return"];f=f.sibling}},
  commitDeletion:function(a){f(a);a["return"]=null;a.child=null;a.alternate&&(a.alternate.child=null,a.alternate["return"]=null)},commitWork:function(a,b){switch(b.tag){case jg:break;case lg:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&k(c,f,e,a,d,b)}break;case mg:null===b.stateNode?w("162"):void 0;c=b.memoizedProps;x(b.stateNode,null!==a?a.memoizedProps:c,c);break;case kg:break;case ng:break;default:w("163")}},
  commitLifeCycles:function(a,b){switch(b.tag){case jg:var c=b.stateNode;if(b.effectTag&sg)if(null===a)c.props=b.memoizedProps,c.state=b.memoizedState,c.componentDidMount();else{var d=a.memoizedProps;a=a.memoizedState;c.props=b.memoizedProps;c.state=b.memoizedState;c.componentDidUpdate(d,a)}b.effectTag&tg&&null!==b.updateQueue&&pg(b,b.updateQueue,c);break;case kg:a=b.updateQueue;null!==a&&pg(b,a,b.child&&b.child.stateNode);break;case lg:c=b.stateNode;null===a&&b.effectTag&sg&&h(c,b.type,b.memoizedProps,
  b);break;case mg:break;case ng:break;default:w("163")}},commitAttachRef:function(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case lg:b(Ca(c));break;default:b(c)}}},commitDetachRef:function(a){a=a.ref;null!==a&&a(null)}}}var wg=xd.createCursor,xg=xd.pop,yg=xd.push,zg={};
  function Ag(a){function b(a){a===zg?w("174"):void 0;return a}var c=a.getChildHostContext,d=a.getRootHostContext,e=wg(zg),f=wg(zg),g=wg(zg);return{getHostContext:function(){return b(e.current)},getRootHostContainer:function(){return b(g.current)},popHostContainer:function(a){xg(e,a);xg(f,a);xg(g,a)},popHostContext:function(a){f.current===a&&(xg(e,a),xg(f,a))},pushHostContainer:function(a,b){yg(g,b,a);b=d(b);yg(f,a,a);yg(e,b,a)},pushHostContext:function(a){var d=b(g.current),h=b(e.current);d=c(h,a.type,
  d);h!==d&&(yg(f,a,a),yg(e,d,a))},resetHostContainer:function(){e.current=zg;g.current=zg}}}var Bg=E.HostComponent,Cg=E.HostText,Dg=E.HostRoot,Eg=J.Deletion,Fg=J.Placement,Gg=de.createFiberFromHostInstanceForDeletion;
  function Hg(a){function b(a,b){var c=Gg();c.stateNode=b;c["return"]=a;c.effectTag=Eg;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function c(a,b){switch(a.tag){case Bg:return f(b,a.type,a.pendingProps);case Cg:return g(b,a.pendingProps);default:return!1}}function d(a){for(a=a["return"];null!==a&&a.tag!==Bg&&a.tag!==Dg;)a=a["return"];y=a}var e=a.shouldSetTextContent,f=a.canHydrateInstance,g=a.canHydrateTextInstance,h=a.getNextHydratableSibling,k=a.getFirstHydratableChild,
  p=a.hydrateInstance,x=a.hydrateTextInstance,S=a.didNotHydrateInstance,D=a.didNotFindHydratableInstance;a=a.didNotFindHydratableTextInstance;if(!(f&&g&&h&&k&&p&&x&&S&&D&&a))return{enterHydrationState:function(){return!1},resetHydrationState:function(){},tryToClaimNextHydratableInstance:function(){},prepareToHydrateHostInstance:function(){w("175")},prepareToHydrateHostTextInstance:function(){w("176")},popHydrationState:function(){return!1}};var y=null,B=null,H=!1;return{enterHydrationState:function(a){B=
  k(a.stateNode.containerInfo);y=a;return H=!0},resetHydrationState:function(){B=y=null;H=!1},tryToClaimNextHydratableInstance:function(a){if(H){var d=B;if(d){if(!c(a,d)){d=h(d);if(!d||!c(a,d)){a.effectTag|=Fg;H=!1;y=a;return}b(y,B)}a.stateNode=d;y=a;B=k(d)}else a.effectTag|=Fg,H=!1,y=a}},prepareToHydrateHostInstance:function(a,b,c){b=p(a.stateNode,a.type,a.memoizedProps,b,c,a);a.updateQueue=b;return null!==b?!0:!1},prepareToHydrateHostTextInstance:function(a){return x(a.stateNode,a.memoizedProps,a)},
  popHydrationState:function(a){if(a!==y)return!1;if(!H)return d(a),H=!0,!1;var c=a.type;if(a.tag!==Bg||"head"!==c&&"body"!==c&&!e(c,a.memoizedProps))for(c=B;c;)b(a,c),c=h(c);d(a);B=y?h(a.stateNode):null;return!0}}}
  var Ig=R.popContextProvider,Jg=xd.reset,Kg=Qa.ReactCurrentOwner,Lg=de.createWorkInProgress,Mg=de.largerPriority,Ng=ig.onCommitRoot,T=Q.NoWork,Og=Q.SynchronousPriority,U=Q.TaskPriority,Pg=Q.HighPriority,Qg=Q.LowPriority,Rg=Q.OffscreenPriority,Sg=Pd.AsyncUpdates,Tg=J.PerformedWork,Ug=J.Placement,Vg=J.Update,Wg=J.PlacementAndUpdate,Xg=J.Deletion,Yg=J.ContentReset,Zg=J.Callback,$g=J.Err,ah=J.Ref,bh=E.HostRoot,ch=E.HostComponent,dh=E.HostPortal,eh=E.ClassComponent,fh=ud.getUpdatePriority,gh=R.resetContext;
  function hh(a){function b(){for(;null!==ma&&ma.current.pendingWorkPriority===T;){ma.isScheduled=!1;var a=ma.nextScheduledRoot;ma.nextScheduledRoot=null;if(ma===zb)return zb=ma=null,z=T,null;ma=a}a=ma;for(var b=null,c=T;null!==a;)a.current.pendingWorkPriority!==T&&(c===T||c>a.current.pendingWorkPriority)&&(c=a.current.pendingWorkPriority,b=a),a=a.nextScheduledRoot;null!==b?(z=c,Jg(),gh(),t(),I=Lg(b.current,c),b!==nc&&(oc=0,nc=b)):(z=T,nc=I=null)}function c(c){Hd=!0;na=null;var d=c.stateNode;d.current===
  c?w("177"):void 0;z!==Og&&z!==U||oc++;Kg.current=null;if(c.effectTag>Tg)if(null!==c.lastEffect){c.lastEffect.nextEffect=c;var e=c.firstEffect}else e=c;else e=c.firstEffect;Ui();for(u=e;null!==u;){var f=!1,g=void 0;try{for(;null!==u;){var h=u.effectTag;h&Yg&&a.resetTextContent(u.stateNode);if(h&ah){var k=u.alternate;null!==k&&Ph(k)}switch(h&~(Zg|$g|Yg|ah|Tg)){case Ug:q(u);u.effectTag&=~Ug;break;case Wg:q(u);u.effectTag&=~Ug;vf(u.alternate,u);break;case Vg:vf(u.alternate,u);break;case Xg:Id=!0,Mh(u),
  Id=!1}u=u.nextEffect}}catch(Jd){f=!0,g=Jd}f&&(null===u?w("178"):void 0,x(u,g),null!==u&&(u=u.nextEffect))}Vi();d.current=c;for(u=e;null!==u;){d=!1;e=void 0;try{for(;null!==u;){var Gd=u.effectTag;Gd&(Vg|Zg)&&Nh(u.alternate,u);Gd&ah&&Oh(u);if(Gd&$g)switch(f=u,g=void 0,null!==P&&(g=P.get(f),P["delete"](f),null==g&&null!==f.alternate&&(f=f.alternate,g=P.get(f),P["delete"](f))),null==g?w("184"):void 0,f.tag){case eh:f.stateNode.componentDidCatch(g.error,{componentStack:g.componentStack});break;case bh:null===
  Ja&&(Ja=g.error);break;default:w("157")}var m=u.nextEffect;u.nextEffect=null;u=m}}catch(Jd){d=!0,e=Jd}d&&(null===u?w("178"):void 0,x(u,e),null!==u&&(u=u.nextEffect))}Hd=!1;"function"===typeof Ng&&Ng(c.stateNode);va&&(va.forEach(H),va=null);b()}function d(a){for(;;){var b=Lh(a.alternate,a,z),c=a["return"],d=a.sibling;var e=a;if(!(e.pendingWorkPriority!==T&&e.pendingWorkPriority>z)){for(var f=fh(e),g=e.child;null!==g;)f=Mg(f,g.pendingWorkPriority),g=g.sibling;e.pendingWorkPriority=f}if(null!==b)return b;
  null!==c&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),a.effectTag>Tg&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a));if(null!==d)return d;if(null!==c)a=c;else{na=a;break}}return null}function e(a){var b=V(a.alternate,a,z);null===b&&(b=d(a));Kg.current=null;return b}function f(a){var b=ld(a.alternate,a,z);null===b&&(b=d(a));Kg.current=null;return b}
  function g(a){p(Rg,a)}function h(){if(null!==P&&0<P.size&&z===U)for(;null!==I;){var a=I;I=null!==P&&(P.has(a)||null!==a.alternate&&P.has(a.alternate))?f(I):e(I);if(null===I&&(null===na?w("179"):void 0,O=U,c(na),O=z,null===P||0===P.size||z!==U))break}}function k(a,d){null!==na?(O=U,c(na),h()):null===I&&b();if(!(z===T||z>a)){O=z;a:do{if(z<=U)for(;null!==I&&!(I=e(I),null===I&&(null===na?w("179"):void 0,O=U,c(na),O=z,h(),z===T||z>a||z>U)););else if(null!==d)for(;null!==I&&!Ab;)if(1<d.timeRemaining()){if(I=
  e(I),null===I)if(null===na?w("179"):void 0,1<d.timeRemaining()){if(O=U,c(na),O=z,h(),z===T||z>a||z<Pg)break}else Ab=!0}else Ab=!0;switch(z){case Og:case U:if(z<=a)continue a;break a;case Pg:case Qg:case Rg:if(null===d)break a;if(!Ab&&z<=a)continue a;break a;case T:break a;default:w("181")}}while(1)}}function p(a,b){Da?w("182"):void 0;Da=!0;var c=O,d=!1,e=null;try{k(a,b)}catch(Kd){d=!0,e=Kd}for(;d;){if(Ya){Ja=e;break}var h=I;if(null===h)Ya=!0;else{var p=x(h,e);null===p?w("183"):void 0;if(!Ya){try{d=
  p;e=a;p=b;for(var q=d;null!==h;){switch(h.tag){case eh:Ig(h);break;case ch:m(h);break;case bh:r(h);break;case dh:r(h)}if(h===q||h.alternate===q)break;h=h["return"]}I=f(d);k(e,p)}catch(Kd){d=!0;e=Kd;continue}break}}}O=c;null!==b&&(Bb=!1);z>U&&!Bb&&($f(g),Bb=!0);a=Ja;Ya=Ab=Da=!1;nc=Ka=P=Ja=null;oc=0;if(null!==a)throw a;}function x(a,b){var c=Kg.current=null,d=!1,e=!1,f=null;if(a.tag===bh)c=a,S(a)&&(Ya=!0);else for(var g=a["return"];null!==g&&null===c;){g.tag===eh?"function"===typeof g.stateNode.componentDidCatch&&
  (d=!0,f=Ra(g),c=g,e=!0):g.tag===bh&&(c=g);if(S(g)){if(Id||null!==va&&(va.has(g)||null!==g.alternate&&va.has(g.alternate)))return null;c=null;e=!1}g=g["return"]}if(null!==c){null===Ka&&(Ka=new Set);Ka.add(c);var h="";g=a;do{a:switch(g.tag){case fe:case ge:case he:case ie:var k=g._debugOwner,m=g._debugSource;var p=Ra(g);var q=null;k&&(q=Ra(k));k=m;p="\n    in "+(p||"Unknown")+(k?" (at "+k.fileName.replace(/^.*[\\\/]/,"")+":"+k.lineNumber+")":q?" (created by "+q+")":"");break a;default:p=""}h+=p;g=g["return"]}while(g);
  g=h;a=Ra(a);null===P&&(P=new Map);b={componentName:a,componentStack:g,error:b,errorBoundary:d?c.stateNode:null,errorBoundaryFound:d,errorBoundaryName:f,willRetry:e};P.set(c,b);try{console.error(b.error)}catch(Wi){console.error(Wi)}Hd?(null===va&&(va=new Set),va.add(c)):H(c);return c}null===Ja&&(Ja=b);return null}function S(a){return null!==Ka&&(Ka.has(a)||null!==a.alternate&&Ka.has(a.alternate))}function D(a,b){return y(a,b,!1)}function y(a,b){oc>Xi&&(Ya=!0,w("185"));!Da&&b<=z&&(I=null);for(var c=
  !0;null!==a&&c;){c=!1;if(a.pendingWorkPriority===T||a.pendingWorkPriority>b)c=!0,a.pendingWorkPriority=b;null!==a.alternate&&(a.alternate.pendingWorkPriority===T||a.alternate.pendingWorkPriority>b)&&(c=!0,a.alternate.pendingWorkPriority=b);if(null===a["return"])if(a.tag===bh){var d=a.stateNode;b===T||d.isScheduled||(d.isScheduled=!0,zb?zb.nextScheduledRoot=d:ma=d,zb=d);if(!Da)switch(b){case Og:pc?p(Og,null):p(U,null);break;case U:W?void 0:w("186");break;default:Bb||($f(g),Bb=!0)}}else break;a=a["return"]}}
  function B(a,b){var c=O;c===T&&(c=!Yi||a.internalContextTag&Sg||b?Qg:Og);return c===Og&&(Da||W)?U:c}function H(a){y(a,U,!0)}var C=Ag(a),Ca=Hg(a),r=C.popHostContainer,m=C.popHostContext,t=C.resetHostContainer,v=Lf(a,C,Ca,D,B),V=v.beginWork,ld=v.beginFailedWork,Lh=eg(a,C,Ca).completeWork;C=vg(a,x);var q=C.commitPlacement,Mh=C.commitDeletion,vf=C.commitWork,Nh=C.commitLifeCycles,Oh=C.commitAttachRef,Ph=C.commitDetachRef,$f=a.scheduleDeferredCallback,Yi=a.useSyncScheduling,Ui=a.prepareForCommit,Vi=a.resetAfterCommit,
  O=T,Da=!1,Ab=!1,W=!1,pc=!1,I=null,z=T,u=null,na=null,ma=null,zb=null,Bb=!1,P=null,Ka=null,va=null,Ja=null,Ya=!1,Hd=!1,Id=!1,Xi=1E3,oc=0,nc=null;return{scheduleUpdate:D,getPriorityContext:B,batchedUpdates:function(a,b){var c=W;W=!0;try{return a(b)}finally{W=c,Da||W||p(U,null)}},unbatchedUpdates:function(a){var b=pc,c=W;pc=W;W=!1;try{return a()}finally{W=c,pc=b}},flushSync:function(a){var b=W,c=O;W=!0;O=Og;try{return a()}finally{W=b,O=c,Da?w("187"):void 0,p(U,null)}},deferredUpdates:function(a){var b=
  O;O=Qg;try{return a()}finally{O=b}}}}function ih(){w("196")}function jh(a){if(!a)return da;a=Pa.get(a);return"number"===typeof a.tag?ih(a):a._processChildContext(a._context)}jh._injectFiber=function(a){ih=a};var kh=ud.addTopLevelUpdate,lh=R.findCurrentUnmaskedContext,mh=R.isContextProvider,nh=R.processChildContext,oh=E.HostComponent,ph=bb.findCurrentHostFiber,qh=bb.findCurrentHostFiberWithNoPortals;jh._injectFiber(function(a){var b=lh(a);return mh(a)?nh(a,b,!1):b});var rh=F.TEXT_NODE;
  function sh(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function th(a,b){var c=sh(a);a=0;for(var d;c;){if(c.nodeType===rh){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=sh(c)}}var uh=null;function vh(){!uh&&l.canUseDOM&&(uh="textContent"in document.documentElement?"textContent":"innerText");return uh}
  var wh={getOffsets:function(a){var b=window.getSelection&&window.getSelection();if(!b||0===b.rangeCount)return null;var c=b.anchorNode,d=b.anchorOffset,e=b.focusNode,f=b.focusOffset,g=b.getRangeAt(0);try{g.startContainer.nodeType,g.endContainer.nodeType}catch(k){return null}b=b.anchorNode===b.focusNode&&b.anchorOffset===b.focusOffset?0:g.toString().length;var h=g.cloneRange();h.selectNodeContents(a);h.setEnd(g.startContainer,g.startOffset);a=h.startContainer===h.endContainer&&h.startOffset===h.endOffset?
  0:h.toString().length;g=a+b;b=document.createRange();b.setStart(c,d);b.setEnd(e,f);c=b.collapsed;return{start:c?g:a,end:c?a:g}},setOffsets:function(a,b){if(window.getSelection){var c=window.getSelection(),d=a[vh()].length,e=Math.min(b.start,d);b=void 0===b.end?e:Math.min(b.end,d);!c.extend&&e>b&&(d=b,b=e,e=d);d=th(a,e);a=th(a,b);if(d&&a){var f=document.createRange();f.setStart(d.node,d.offset);c.removeAllRanges();e>b?(c.addRange(f),c.extend(a.node,a.offset)):(f.setEnd(a.node,a.offset),c.addRange(f))}}}},
  xh=F.ELEMENT_NODE,yh={hasSelectionCapabilities:function(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&"text"===a.type||"textarea"===b||"true"===a.contentEditable)},getSelectionInformation:function(){var a=ia();return{focusedElem:a,selectionRange:yh.hasSelectionCapabilities(a)?yh.getSelection(a):null}},restoreSelection:function(a){var b=ia(),c=a.focusedElem;a=a.selectionRange;if(b!==c&&fa(document.documentElement,c)){yh.hasSelectionCapabilities(c)&&yh.setSelection(c,a);b=
  [];for(a=c;a=a.parentNode;)a.nodeType===xh&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});ha(c);for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}},getSelection:function(a){return("selectionStart"in a?{start:a.selectionStart,end:a.selectionEnd}:wh.getOffsets(a))||{start:0,end:0}},setSelection:function(a,b){var c=b.start,d=b.end;void 0===d&&(d=c);"selectionStart"in a?(a.selectionStart=c,a.selectionEnd=Math.min(d,a.value.length)):wh.setOffsets(a,b)}},zh=yh,
  Ah=F.ELEMENT_NODE;function Bh(){w("211")}function Ch(){w("212")}function Dh(a){if(null==a)return null;if(a.nodeType===Ah)return a;var b=Pa.get(a);if(b)return"number"===typeof b.tag?Bh(b):Ch(b);"function"===typeof a.render?w("188"):w("213",Object.keys(a))}Dh._injectFiber=function(a){Bh=a};Dh._injectStack=function(a){Ch=a};var Eh=E.HostComponent;function Fh(a){if(void 0!==a._hostParent)return a._hostParent;if("number"===typeof a.tag){do a=a["return"];while(a&&a.tag!==Eh);if(a)return a}return null}
  function Gh(a,b){for(var c=0,d=a;d;d=Fh(d))c++;d=0;for(var e=b;e;e=Fh(e))d++;for(;0<c-d;)a=Fh(a),c--;for(;0<d-c;)b=Fh(b),d--;for(;c--;){if(a===b||a===b.alternate)return a;a=Fh(a);b=Fh(b)}return null}
  var Hh={isAncestor:function(a,b){for(;b;){if(a===b||a===b.alternate)return!0;b=Fh(b)}return!1},getLowestCommonAncestor:Gh,getParentInstance:function(a){return Fh(a)},traverseTwoPhase:function(a,b,c){for(var d=[];a;)d.push(a),a=Fh(a);for(a=d.length;0<a--;)b(d[a],"captured",c);for(a=0;a<d.length;a++)b(d[a],"bubbled",c)},traverseEnterLeave:function(a,b,c,d,e){for(var f=a&&b?Gh(a,b):null,g=[];a&&a!==f;)g.push(a),a=Fh(a);for(a=[];b&&b!==f;)a.push(b),b=Fh(b);for(b=0;b<g.length;b++)c(g[b],"bubbled",d);for(b=
  a.length;0<b--;)c(a[b],"captured",e)}},Ih=Jb.getListener;function Jh(a,b,c){if(b=Ih(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=Cb(c._dispatchListeners,b),c._dispatchInstances=Cb(c._dispatchInstances,a)}function Kh(a){a&&a.dispatchConfig.phasedRegistrationNames&&Hh.traverseTwoPhase(a._targetInst,Jh,a)}function Qh(a){if(a&&a.dispatchConfig.phasedRegistrationNames){var b=a._targetInst;b=b?Hh.getParentInstance(b):null;Hh.traverseTwoPhase(b,Jh,a)}}
  function Rh(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ih(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=Cb(c._dispatchListeners,b),c._dispatchInstances=Cb(c._dispatchInstances,a))}function Sh(a){a&&a.dispatchConfig.registrationName&&Rh(a._targetInst,null,a)}
  var Th={accumulateTwoPhaseDispatches:function(a){Db(a,Kh)},accumulateTwoPhaseDispatchesSkipTarget:function(a){Db(a,Qh)},accumulateDirectDispatches:function(a){Db(a,Sh)},accumulateEnterLeaveDispatches:function(a,b,c,d){Hh.traverseEnterLeave(c,d,Rh,a,b)}},X={_root:null,_startText:null,_fallbackText:null},Uh={initialize:function(a){X._root=a;X._startText=Uh.getText();return!0},reset:function(){X._root=null;X._startText=null;X._fallbackText=null},getData:function(){if(X._fallbackText)return X._fallbackText;
  var a,b=X._startText,c=b.length,d,e=Uh.getText(),f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);X._fallbackText=e.slice(a,1<d?1-d:void 0);return X._fallbackText},getText:function(){return"value"in X._root?X._root.value:X._root[vh()]}},Vh=Uh,Wh="dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),Xh={type:null,target:null,currentTarget:ca.thatReturnsNull,eventPhase:null,bubbles:null,
  cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
  function Y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?ca.thatReturnsTrue:ca.thatReturnsFalse;this.isPropagationStopped=ca.thatReturnsFalse;return this}
  n(Y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=ca.thatReturnsTrue)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=ca.thatReturnsTrue)},persist:function(){this.isPersistent=ca.thatReturnsTrue},isPersistent:ca.thatReturnsFalse,
  destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;for(a=0;a<Wh.length;a++)this[Wh[a]]=null}});Y.Interface=Xh;Y.augmentClass=function(a,b){function c(){}c.prototype=this.prototype;var d=new c;n(d,a.prototype);a.prototype=d;a.prototype.constructor=a;a.Interface=n({},this.Interface,b);a.augmentClass=this.augmentClass;Yh(a)};Yh(Y);function Zh(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
  function $h(a){a instanceof this?void 0:w("223");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function Yh(a){a.eventPool=[];a.getPooled=Zh;a.release=$h}function ai(a,b,c,d){return Y.call(this,a,b,c,d)}Y.augmentClass(ai,{data:null});function bi(a,b,c,d){return Y.call(this,a,b,c,d)}Y.augmentClass(bi,{data:null});var ci=[9,13,27,32],di=l.canUseDOM&&"CompositionEvent"in window,ei=null;l.canUseDOM&&"documentMode"in document&&(ei=document.documentMode);var fi;
  if(fi=l.canUseDOM&&"TextEvent"in window&&!ei){var gi=window.opera;fi=!("object"===typeof gi&&"function"===typeof gi.version&&12>=parseInt(gi.version(),10))}
  var hi=fi,ii=l.canUseDOM&&(!di||ei&&8<ei&&11>=ei),ji=String.fromCharCode(32),ki={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["topCompositionEnd","topKeyPress","topTextInput","topPaste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
  captured:"onCompositionStartCapture"},dependencies:"topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")}},li=!1;
  function mi(a,b){switch(a){case "topKeyUp":return-1!==ci.indexOf(b.keyCode);case "topKeyDown":return 229!==b.keyCode;case "topKeyPress":case "topMouseDown":case "topBlur":return!0;default:return!1}}function ni(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var oi=!1;function pi(a,b){switch(a){case "topCompositionEnd":return ni(b);case "topKeyPress":if(32!==b.which)return null;li=!0;return ji;case "topTextInput":return a=b.data,a===ji&&li?null:a;default:return null}}
  function qi(a,b){if(oi)return"topCompositionEnd"===a||!di&&mi(a,b)?(a=Vh.getData(),Vh.reset(),oi=!1,a):null;switch(a){case "topPaste":return null;case "topKeyPress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "topCompositionEnd":return ii?null:b.data;default:return null}}
  var ri={eventTypes:ki,extractEvents:function(a,b,c,d){var e;if(di)b:{switch(a){case "topCompositionStart":var f=ki.compositionStart;break b;case "topCompositionEnd":f=ki.compositionEnd;break b;case "topCompositionUpdate":f=ki.compositionUpdate;break b}f=void 0}else oi?mi(a,c)&&(f=ki.compositionEnd):"topKeyDown"===a&&229===c.keyCode&&(f=ki.compositionStart);f?(ii&&(oi||f!==ki.compositionStart?f===ki.compositionEnd&&oi&&(e=Vh.getData()):oi=Vh.initialize(d)),f=ai.getPooled(f,b,c,d),e?f.data=e:(e=ni(c),
  null!==e&&(f.data=e)),Th.accumulateTwoPhaseDispatches(f),e=f):e=null;(a=hi?pi(a,c):qi(a,c))?(b=bi.getPooled(ki.beforeInput,b,c,d),b.data=a,Th.accumulateTwoPhaseDispatches(b)):b=null;return[e,b]}},si={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ti(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!si[a.type]:"textarea"===b?!0:!1}
  var ui={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(" ")}};function vi(a,b,c){a=Y.getPooled(ui.change,a,b,c);a.type="change";nb.enqueueStateRestore(c);Th.accumulateTwoPhaseDispatches(a);return a}var wi=null,xi=null;function yi(a){Jb.enqueueEvents(a);Jb.processEventQueue(!1)}
  function zi(a){var b=G.getNodeFromInstance(a);if(Bc.updateValueIfChanged(b))return a}function Ai(a,b){if("topChange"===a)return b}var Bi=!1;l.canUseDOM&&(Bi=Lb("input")&&(!document.documentMode||9<document.documentMode));function Ci(){wi&&(wi.detachEvent("onpropertychange",Di),xi=wi=null)}function Di(a){"value"===a.propertyName&&zi(xi)&&(a=vi(xi,a,ub(a)),sb.batchedUpdates(yi,a))}function Ei(a,b,c){"topFocus"===a?(Ci(),wi=b,xi=c,wi.attachEvent("onpropertychange",Di)):"topBlur"===a&&Ci()}
  function Fi(a){if("topSelectionChange"===a||"topKeyUp"===a||"topKeyDown"===a)return zi(xi)}function Gi(a,b){if("topClick"===a)return zi(b)}function Hi(a,b){if("topInput"===a||"topChange"===a)return zi(b)}
  var Ii={eventTypes:ui,_isInputEventSupported:Bi,extractEvents:function(a,b,c,d){var e=b?G.getNodeFromInstance(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ai;else if(ti(e))if(Bi)g=Hi;else{g=Fi;var h=Ei}else f=e.nodeName,!f||"input"!==f.toLowerCase()||"checkbox"!==e.type&&"radio"!==e.type||(g=Gi);if(g&&(g=g(a,b)))return vi(g,c,d);h&&h(a,e,b);"topBlur"===a&&null!=b&&(a=b._wrapperState||e._wrapperState)&&a.controlled&&"number"===e.type&&(a=""+e.value,
  e.getAttribute("value")!==a&&e.setAttribute("value",a))}};function Ji(a,b,c,d){return Y.call(this,a,b,c,d)}Y.augmentClass(Ji,{view:function(a){if(a.view)return a.view;a=ub(a);return a.window===a?a:(a=a.ownerDocument)?a.defaultView||a.parentWindow:window},detail:function(a){return a.detail||0}});var Ki={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Li(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Ki[a])?!!b[a]:!1}function Mi(){return Li}
  function Ni(a,b,c,d){return Y.call(this,a,b,c,d)}Ji.augmentClass(Ni,{screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Mi,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)}});
  var Oi={mouseEnter:{registrationName:"onMouseEnter",dependencies:["topMouseOut","topMouseOver"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["topMouseOut","topMouseOver"]}},Pi={eventTypes:Oi,extractEvents:function(a,b,c,d){if("topMouseOver"===a&&(c.relatedTarget||c.fromElement)||"topMouseOut"!==a&&"topMouseOver"!==a)return null;var e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;"topMouseOut"===a?(a=b,b=(b=c.relatedTarget||c.toElement)?G.getClosestInstanceFromNode(b):
  null):a=null;if(a===b)return null;var f=null==a?e:G.getNodeFromInstance(a);e=null==b?e:G.getNodeFromInstance(b);var g=Ni.getPooled(Oi.mouseLeave,a,c,d);g.type="mouseleave";g.target=f;g.relatedTarget=e;c=Ni.getPooled(Oi.mouseEnter,b,c,d);c.type="mouseenter";c.target=e;c.relatedTarget=f;Th.accumulateEnterLeaveDispatches(g,c,a,b);return[g,c]}},Qi=F.DOCUMENT_NODE,Ri=l.canUseDOM&&"documentMode"in document&&11>=document.documentMode,Si={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},
  dependencies:"topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(" ")}},Ti=null,Zi=null,$i=null,aj=!1,bj=M.isListeningToAllDependencies;
  function cj(a,b){if(aj||null==Ti||Ti!==ia())return null;var c=Ti;"selectionStart"in c&&zh.hasSelectionCapabilities(c)?c={start:c.selectionStart,end:c.selectionEnd}:window.getSelection?(c=window.getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}):c=void 0;return $i&&ea($i,c)?null:($i=c,a=Y.getPooled(Si.select,Zi,a,b),a.type="select",a.target=Ti,Th.accumulateTwoPhaseDispatches(a),a)}
  var dj={eventTypes:Si,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:d.nodeType===Qi?d:d.ownerDocument;if(!e||!bj("onSelect",e))return null;e=b?G.getNodeFromInstance(b):window;switch(a){case "topFocus":if(ti(e)||"true"===e.contentEditable)Ti=e,Zi=b,$i=null;break;case "topBlur":$i=Zi=Ti=null;break;case "topMouseDown":aj=!0;break;case "topContextMenu":case "topMouseUp":return aj=!1,cj(c,d);case "topSelectionChange":if(Ri)break;case "topKeyDown":case "topKeyUp":return cj(c,d)}return null}};
  function ej(a,b,c,d){return Y.call(this,a,b,c,d)}Y.augmentClass(ej,{animationName:null,elapsedTime:null,pseudoElement:null});function fj(a,b,c,d){return Y.call(this,a,b,c,d)}Y.augmentClass(fj,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}});function gj(a,b,c,d){return Y.call(this,a,b,c,d)}Ji.augmentClass(gj,{relatedTarget:null});function hj(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;return 32<=a||13===a?a:0}
  var ij={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jj={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
  116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};function kj(a,b,c,d){return Y.call(this,a,b,c,d)}
  Ji.augmentClass(kj,{key:function(a){if(a.key){var b=ij[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=hj(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?jj[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Mi,charCode:function(a){return"keypress"===a.type?hj(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
  a.type?hj(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}});function lj(a,b,c,d){return Y.call(this,a,b,c,d)}Ni.augmentClass(lj,{dataTransfer:null});function mj(a,b,c,d){return Y.call(this,a,b,c,d)}Ji.augmentClass(mj,{touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Mi});function nj(a,b,c,d){return Y.call(this,a,b,c,d)}Y.augmentClass(nj,{propertyName:null,elapsedTime:null,pseudoElement:null});
  function oj(a,b,c,d){return Y.call(this,a,b,c,d)}Ni.augmentClass(oj,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null});var pj={},qj={};
  "abort animationEnd animationIteration animationStart blur cancel canPlay canPlayThrough click close contextMenu copy cut doubleClick drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error focus input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing progress rateChange reset scroll seeked seeking stalled submit suspend timeUpdate toggle touchCancel touchEnd touchMove touchStart transitionEnd volumeChange waiting wheel".split(" ").forEach(function(a){var b=a[0].toUpperCase()+
  a.slice(1),c="on"+b;b="top"+b;c={phasedRegistrationNames:{bubbled:c,captured:c+"Capture"},dependencies:[b]};pj[a]=c;qj[b]=c});
  var rj={eventTypes:pj,extractEvents:function(a,b,c,d){var e=qj[a];if(!e)return null;switch(a){case "topAbort":case "topCancel":case "topCanPlay":case "topCanPlayThrough":case "topClose":case "topDurationChange":case "topEmptied":case "topEncrypted":case "topEnded":case "topError":case "topInput":case "topInvalid":case "topLoad":case "topLoadedData":case "topLoadedMetadata":case "topLoadStart":case "topPause":case "topPlay":case "topPlaying":case "topProgress":case "topRateChange":case "topReset":case "topSeeked":case "topSeeking":case "topStalled":case "topSubmit":case "topSuspend":case "topTimeUpdate":case "topToggle":case "topVolumeChange":case "topWaiting":var f=Y;
  break;case "topKeyPress":if(0===hj(c))return null;case "topKeyDown":case "topKeyUp":f=kj;break;case "topBlur":case "topFocus":f=gj;break;case "topClick":if(2===c.button)return null;case "topDoubleClick":case "topMouseDown":case "topMouseMove":case "topMouseUp":case "topMouseOut":case "topMouseOver":case "topContextMenu":f=Ni;break;case "topDrag":case "topDragEnd":case "topDragEnter":case "topDragExit":case "topDragLeave":case "topDragOver":case "topDragStart":case "topDrop":f=lj;break;case "topTouchCancel":case "topTouchEnd":case "topTouchMove":case "topTouchStart":f=
  mj;break;case "topAnimationEnd":case "topAnimationIteration":case "topAnimationStart":f=ej;break;case "topTransitionEnd":f=nj;break;case "topScroll":f=Ji;break;case "topWheel":f=oj;break;case "topCopy":case "topCut":case "topPaste":f=fj}f?void 0:w("86",a);a=f.getPooled(e,b,c,d);Th.accumulateTwoPhaseDispatches(a);return a}};L.setHandleTopLevel(M.handleTopLevel);Jb.injection.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
  ib.injection.injectComponentTree(G);Jb.injection.injectEventPluginsByName({SimpleEventPlugin:rj,EnterLeaveEventPlugin:Pi,ChangeEventPlugin:Ii,SelectEventPlugin:dj,BeforeInputEventPlugin:ri});
  var sj=A.injection.MUST_USE_PROPERTY,Z=A.injection.HAS_BOOLEAN_VALUE,tj=A.injection.HAS_NUMERIC_VALUE,uj=A.injection.HAS_POSITIVE_NUMERIC_VALUE,vj=A.injection.HAS_STRING_BOOLEAN_VALUE,wj={Properties:{allowFullScreen:Z,allowTransparency:vj,async:Z,autoPlay:Z,capture:Z,checked:sj|Z,cols:uj,contentEditable:vj,controls:Z,"default":Z,defer:Z,disabled:Z,download:A.injection.HAS_OVERLOADED_BOOLEAN_VALUE,draggable:vj,formNoValidate:Z,hidden:Z,loop:Z,multiple:sj|Z,muted:sj|Z,noValidate:Z,open:Z,playsInline:Z,
  readOnly:Z,required:Z,reversed:Z,rows:uj,rowSpan:tj,scoped:Z,seamless:Z,selected:sj|Z,size:uj,start:tj,span:uj,spellCheck:vj,style:0,itemScope:Z,acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,value:vj},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMMutationMethods:{value:function(a,b){if(null==b)return a.removeAttribute("value");"number"!==a.type||!1===a.hasAttribute("value")?a.setAttribute("value",""+b):a.validity&&!a.validity.badInput&&
  a.ownerDocument.activeElement!==a&&a.setAttribute("value",""+b)}}},xj=A.injection.HAS_STRING_BOOLEAN_VALUE,yj={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},zj={Properties:{autoReverse:xj,externalResourcesRequired:xj,preserveAlpha:xj},DOMAttributeNames:{autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:yj.xlink,xlinkArcrole:yj.xlink,xlinkHref:yj.xlink,xlinkRole:yj.xlink,
  xlinkShow:yj.xlink,xlinkTitle:yj.xlink,xlinkType:yj.xlink,xmlBase:yj.xml,xmlLang:yj.xml,xmlSpace:yj.xml}},Aj=/[\-\:]([a-z])/g;function Bj(a){return a[1].toUpperCase()}
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(a){var b=a.replace(Aj,
  Bj);zj.Properties[b]=0;zj.DOMAttributeNames[b]=a});A.injection.injectDOMPropertyConfig(wj);A.injection.injectDOMPropertyConfig(zj);
  var Cj=ig.injectInternals,Dj=F.ELEMENT_NODE,Ej=F.TEXT_NODE,Fj=F.COMMENT_NODE,Gj=F.DOCUMENT_NODE,Hj=F.DOCUMENT_FRAGMENT_NODE,Ij=A.ROOT_ATTRIBUTE_NAME,Jj=ka.getChildNamespace,Kj=N.createElement,Lj=N.createTextNode,Mj=N.setInitialProperties,Nj=N.diffProperties,Oj=N.updateProperties,Pj=N.diffHydratedProperties,Qj=N.diffHydratedText,Rj=N.warnForDeletedHydratableElement,Sj=N.warnForDeletedHydratableText,Tj=N.warnForInsertedHydratedElement,Uj=N.warnForInsertedHydratedText,Vj=G.precacheFiberNode,Wj=G.updateFiberProps;
  nb.injection.injectFiberControlledHostComponent(N);Dh._injectFiber(function(a){return Xj.findHostInstance(a)});var Yj=null,Zj=null;function ak(a){return!(!a||a.nodeType!==Dj&&a.nodeType!==Gj&&a.nodeType!==Hj&&(a.nodeType!==Fj||" react-mount-point-unstable "!==a.nodeValue))}function bk(a){a=a?a.nodeType===Gj?a.documentElement:a.firstChild:null;return!(!a||a.nodeType!==Dj||!a.hasAttribute(Ij))}
  var Xj=function(a){var b=a.getPublicInstance;a=hh(a);var c=a.scheduleUpdate,d=a.getPriorityContext;return{createContainer:function(a){var b=ee();a={current:b,containerInfo:a,isScheduled:!1,nextScheduledRoot:null,context:null,pendingContext:null};return b.stateNode=a},updateContainer:function(a,b,g,h){var e=b.current;g=jh(g);null===b.context?b.context=g:b.pendingContext=g;b=h;h=d(e,ed.enableAsyncSubtreeAPI&&null!=a&&null!=a.type&&null!=a.type.prototype&&!0===a.type.prototype.unstable_isAsyncReactComponent);
  a={element:a};kh(e,a,void 0===b?null:b,h);c(e,h)},batchedUpdates:a.batchedUpdates,unbatchedUpdates:a.unbatchedUpdates,deferredUpdates:a.deferredUpdates,flushSync:a.flushSync,getPublicRootInstance:function(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case oh:return b(a.child.stateNode);default:return a.child.stateNode}},findHostInstance:function(a){a=ph(a);return null===a?null:a.stateNode},findHostInstanceWithNoPortals:function(a){a=qh(a);return null===a?null:a.stateNode}}}({getRootHostContext:function(a){if(a.nodeType===
  Gj)a=(a=a.documentElement)?a.namespaceURI:Jj(null,"");else{var b=a.nodeType===Fj?a.parentNode:a;a=b.namespaceURI||null;b=b.tagName;a=Jj(a,b)}return a},getChildHostContext:function(a,b){return Jj(a,b)},getPublicInstance:function(a){return a},prepareForCommit:function(){Yj=M.isEnabled();Zj=zh.getSelectionInformation();M.setEnabled(!1)},resetAfterCommit:function(){zh.restoreSelection(Zj);Zj=null;M.setEnabled(Yj);Yj=null},createInstance:function(a,b,c,d,e){a=Kj(a,b,c,d);Vj(e,a);Wj(a,b);return a},appendInitialChild:function(a,
  b){a.appendChild(b)},finalizeInitialChildren:function(a,b,c,d){Mj(a,b,c,d);a:{switch(b){case "button":case "input":case "select":case "textarea":a=!!c.autoFocus;break a}a=!1}return a},prepareUpdate:function(a,b,c,d,e){return Nj(a,b,c,d,e)},commitMount:function(a){a.focus()},commitUpdate:function(a,b,c,d,e){Wj(a,e);Oj(a,b,c,d,e)},shouldSetTextContent:function(a,b){return"textarea"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&
  "string"===typeof b.dangerouslySetInnerHTML.__html},resetTextContent:function(a){a.textContent=""},shouldDeprioritizeSubtree:function(a,b){return!!b.hidden},createTextInstance:function(a,b,c,d){a=Lj(a,b);Vj(d,a);return a},commitTextUpdate:function(a,b,c){a.nodeValue=c},appendChild:function(a,b){a.appendChild(b)},appendChildToContainer:function(a,b){a.nodeType===Fj?a.parentNode.insertBefore(b,a):a.appendChild(b)},insertBefore:function(a,b,c){a.insertBefore(b,c)},insertInContainerBefore:function(a,
  b,c){a.nodeType===Fj?a.parentNode.insertBefore(b,c):a.insertBefore(b,c)},removeChild:function(a,b){a.removeChild(b)},removeChildFromContainer:function(a,b){a.nodeType===Fj?a.parentNode.removeChild(b):a.removeChild(b)},canHydrateInstance:function(a,b){return a.nodeType===Dj&&b===a.nodeName.toLowerCase()},canHydrateTextInstance:function(a,b){return""===b?!1:a.nodeType===Ej},getNextHydratableSibling:function(a){for(a=a.nextSibling;a&&a.nodeType!==Dj&&a.nodeType!==Ej;)a=a.nextSibling;return a},getFirstHydratableChild:function(a){for(a=
  a.firstChild;a&&a.nodeType!==Dj&&a.nodeType!==Ej;)a=a.nextSibling;return a},hydrateInstance:function(a,b,c,d,e,f){Vj(f,a);Wj(a,c);return Pj(a,b,c,e,d)},hydrateTextInstance:function(a,b,c){Vj(c,a);return Qj(a,b)},didNotHydrateInstance:function(a,b){1===b.nodeType?Rj(a,b):Sj(a,b)},didNotFindHydratableInstance:function(a,b,c){Tj(a,b,c)},didNotFindHydratableTextInstance:function(a,b){Uj(a,b)},scheduleDeferredCallback:dd.rIC,useSyncScheduling:!0});sb.injection.injectFiberBatchedUpdates(Xj.batchedUpdates);
  function ck(a,b,c,d,e){ak(c)?void 0:w("200");var f=c._reactRootContainer;if(f)Xj.updateContainer(b,f,a,e);else{if(!d&&!bk(c))for(d=void 0;d=c.lastChild;)c.removeChild(d);var g=Xj.createContainer(c);f=c._reactRootContainer=g;Xj.unbatchedUpdates(function(){Xj.updateContainer(b,g,a,e)})}return Xj.getPublicRootInstance(f)}function dk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;ak(b)?void 0:w("200");return ne.createPortal(a,b,null,c)}
  var ek={createPortal:dk,hydrate:function(a,b,c){return ck(null,a,b,!0,c)},render:function(a,b,c){return ck(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null!=a&&Pa.has(a)?void 0:w("38");return ck(a,b,c,!1,d)},unmountComponentAtNode:function(a){ak(a)?void 0:w("40");return a._reactRootContainer?(Xj.unbatchedUpdates(function(){ck(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},findDOMNode:Dh,unstable_createPortal:dk,unstable_batchedUpdates:sb.batchedUpdates,
  unstable_deferredUpdates:Xj.deferredUpdates,flushSync:Xj.flushSync,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{EventPluginHub:Jb,EventPluginRegistry:sa,EventPropagators:Th,ReactControlledComponent:nb,ReactDOMComponentTree:G,ReactDOMEventListener:L}};Cj({findFiberByHostInstance:G.getClosestInstanceFromNode,findHostInstanceByFiber:Xj.findHostInstance,bundleType:0,version:"16.0.0",rendererPackageName:"react-dom"});module.exports=ek;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  function checkDCE() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
    ) {
      return;
    }
    if (false) {
      // This branch is unreachable because this function is only called
      // in production, but the condition is true only in development.
      // Therefore if the branch is still here, dead code elimination wasn't
      // properly applied.
      // Don't change the message. React DevTools relies on it. Also make sure
      // this message doesn't occur elsewhere in this function, or it will cause
      // a false positive.
      throw new Error('^_^');
    }
    try {
      // Verify that the code above has been dead code eliminated (DCE'd).
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      // DevTools shouldn't crash React, no matter what.
      // We should still report in case we break this code.
      console.error(err);
    }
  }

  if (true) {
    // DCE check should happen before ReactDOM bundle executes so that
    // DevTools can report bad minification during injection.
    checkDCE();
    module.exports = __webpack_require__(37);
  } else {
    module.exports = require('./cjs/react-dom.development.js');
  }


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  if (true) {
    module.exports = __webpack_require__(36);
  } else {
    module.exports = require('./cjs/react-dom-server.browser.development.js');
  }


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _propTypes = __webpack_require__(4);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classnames = __webpack_require__(11);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _lodash = __webpack_require__(31);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _PhotoSwipe = __webpack_require__(12);

  var _PhotoSwipe2 = _interopRequireDefault(_PhotoSwipe);

  var _events = __webpack_require__(13);

  var _events2 = _interopRequireDefault(_events);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var PhotoSwipeGallery = function (_React$Component) {
    _inherits(PhotoSwipeGallery, _React$Component);

    function PhotoSwipeGallery() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, PhotoSwipeGallery);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhotoSwipeGallery.__proto__ || Object.getPrototypeOf(PhotoSwipeGallery)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        isOpen: _this.props.isOpen,
        options: _this.props.options
      }, _this.componentWillReceiveProps = function (nextProps) {
        var isOpen = _this.state.isOpen;

        if (nextProps.isOpen) {
          if (!isOpen) {
            _this.setState({ isOpen: true });
          }
        } else if (isOpen) {
          _this.setState({ isOpen: false });
        }
      }, _this.showPhotoSwipe = function (itemIndex) {
        return function (e) {
          e.preventDefault();
          var getThumbBoundsFn = function getThumbBoundsFn(index) {
            var thumbnail = _this.thumbnails[index];
            var img = thumbnail.getElementsByTagName('img')[0];
            var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
            var rect = img.getBoundingClientRect();
            return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
          };
          var options = _this.state.options;

          options.index = itemIndex;
          options.getThumbBoundsFn = options.getThumbBoundsFn || getThumbBoundsFn;
          _this.setState({
            isOpen: true,
            options: options
          });
        };
      }, _this.handleClose = function () {
        _this.setState({
          isOpen: false
        });
        _this.props.onClose();
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PhotoSwipeGallery, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            id = _props.id,
            items = _props.items,
            thumbnailContent = _props.thumbnailContent,
            other = _objectWithoutProperties(_props, ['id', 'items', 'thumbnailContent']);

        var className = this.props.className;

        className = (0, _classnames2.default)(['pswp-gallery', className]).trim();
        var eventProps = (0, _lodash2.default)(other, _events2.default);
        var _state = this.state,
            isOpen = _state.isOpen,
            options = _state.options;

        return _react2.default.createElement(
          'div',
          { id: id, className: className },
          _react2.default.createElement(
            'div',
            { className: 'pswp-thumbnails' },
            items.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                {
                  key: index,
                  ref: function ref(node) {
                    _this2.thumbnails = _this2.thumbnails || [];
                    _this2.thumbnails[index] = node;
                  },
                  className: 'pswp-thumbnail',
                  onClick: _this2.showPhotoSwipe(index)
                },
                thumbnailContent(item)
              );
            })
          ),
          _react2.default.createElement(_PhotoSwipe2.default, _extends({}, eventProps, {
            isOpen: isOpen,
            items: items,
            options: options,
            onClose: this.handleClose
          }))
        );
      }
    }]);

    return PhotoSwipeGallery;
  }(_react2.default.Component);

  PhotoSwipeGallery.propTypes = {
    items: _propTypes2.default.array.isRequired,
    options: _propTypes2.default.object,
    thumbnailContent: _propTypes2.default.func,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    isOpen: _propTypes2.default.bool,
    onClose: _propTypes2.default.func
  };
  PhotoSwipeGallery.defaultProps = {
    options: {},
    thumbnailContent: function thumbnailContent(item) {
      return _react2.default.createElement('img', { src: item.src, width: '100', height: '100', alt: '' });
    },
    id: '',
    className: '',
    isOpen: false,
    onClose: function onClose() {}
  };
  exports.default = PhotoSwipeGallery;
  module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  /*
   React v16.0.0
   react.production.min.js

   Copyright (c) 2013-present, Facebook, Inc.

   This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
  */
  'use strict';var f=__webpack_require__(7),p=__webpack_require__(6);__webpack_require__(3);var r=__webpack_require__(2);
  function t(a){for(var b=arguments.length-1,d="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,e=0;e<b;e++)d+="\x26args[]\x3d"+encodeURIComponent(arguments[e+1]);b=Error(d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
  var u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function v(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}v.prototype.isReactComponent={};v.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?t("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};v.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
  function w(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}function x(){}x.prototype=v.prototype;var y=w.prototype=new x;y.constructor=w;f(y,v.prototype);y.isPureReactComponent=!0;function z(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}var A=z.prototype=new x;A.constructor=z;f(A,v.prototype);A.unstable_isAsyncReactComponent=!0;A.render=function(){return this.props.children};
  var B={Component:v,PureComponent:w,AsyncComponent:z},C={current:null},D=Object.prototype.hasOwnProperty,E="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,F={key:!0,ref:!0,__self:!0,__source:!0};function G(a,b,d,e,c,g,k){return{$$typeof:E,type:a,key:b,ref:d,props:k,_owner:g}}
  G.createElement=function(a,b,d){var e,c={},g=null,k=null,m=null,q=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),m=void 0===b.__self?null:b.__self,q=void 0===b.__source?null:b.__source,b)D.call(b,e)&&!F.hasOwnProperty(e)&&(c[e]=b[e]);var l=arguments.length-2;if(1===l)c.children=d;else if(1<l){for(var h=Array(l),n=0;n<l;n++)h[n]=arguments[n+2];c.children=h}if(a&&a.defaultProps)for(e in l=a.defaultProps,l)void 0===c[e]&&(c[e]=l[e]);return G(a,g,k,m,q,C.current,c)};
  G.createFactory=function(a){var b=G.createElement.bind(null,a);b.type=a;return b};G.cloneAndReplaceKey=function(a,b){return G(a.type,b,a.ref,a._self,a._source,a._owner,a.props)};
  G.cloneElement=function(a,b,d){var e=f({},a.props),c=a.key,g=a.ref,k=a._self,m=a._source,q=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,q=C.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var l=a.type.defaultProps;for(h in b)D.call(b,h)&&!F.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==l?l[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=d;else if(1<h){l=Array(h);for(var n=0;n<h;n++)l[n]=arguments[n+2];e.children=l}return G(a.type,c,g,k,m,q,e)};
  G.isValidElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===E};var H="function"===typeof Symbol&&Symbol.iterator,I="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var J=/\/+/g,K=[];
  function L(a,b,d,e){if(K.length){var c=K.pop();c.result=a;c.keyPrefix=b;c.func=d;c.context=e;c.count=0;return c}return{result:a,keyPrefix:b,func:d,context:e,count:0}}function M(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>K.length&&K.push(a)}
  function N(a,b,d,e){var c=typeof a;if("undefined"===c||"boolean"===c)a=null;if(null===a||"string"===c||"number"===c||"object"===c&&a.$$typeof===I)return d(e,a,""===b?"."+O(a,0):b),1;var g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){c=a[k];var m=b+O(c,k);g+=N(c,m,d,e)}else if(m=H&&a[H]||a["@@iterator"],"function"===typeof m)for(a=m.call(a),k=0;!(c=a.next()).done;)c=c.value,m=b+O(c,k++),g+=N(c,m,d,e);else"object"===c&&(d=""+a,t("31","[object Object]"===d?"object with keys {"+
  Object.keys(a).join(", ")+"}":d,""));return g}function O(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function P(a,b){a.func.call(a.context,b,a.count++)}function Q(a,b,d){var e=a.result,c=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?R(a,e,d,r.thatReturnsArgument):null!=a&&(G.isValidElement(a)&&(a=G.cloneAndReplaceKey(a,c+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(J,"$\x26/")+"/")+d)),e.push(a))}
  function R(a,b,d,e,c){var g="";null!=d&&(g=(""+d).replace(J,"$\x26/")+"/");b=L(b,g,e,c);null==a||N(a,"",Q,b);M(b)}var S={forEach:function(a,b,d){if(null==a)return a;b=L(null,null,b,d);null==a||N(a,"",P,b);M(b)},map:function(a,b,d){if(null==a)return a;var e=[];R(a,e,null,b,d);return e},count:function(a){return null==a?0:N(a,"",r.thatReturnsNull,null)},toArray:function(a){var b=[];R(a,b,null,r.thatReturnsArgument);return b}};
  module.exports={Children:{map:S.map,forEach:S.forEach,count:S.count,toArray:S.toArray,only:function(a){G.isValidElement(a)?void 0:t("143");return a}},Component:B.Component,PureComponent:B.PureComponent,unstable_AsyncComponent:B.AsyncComponent,createElement:G.createElement,cloneElement:G.cloneElement,isValidElement:G.isValidElement,createFactory:G.createFactory,version:"16.0.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:C,assign:f}};


/***/ }
/******/ ])));