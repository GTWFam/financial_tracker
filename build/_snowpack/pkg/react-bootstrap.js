import { c as createCommonjsModule, r as react } from './common/index-ae389540.js';
import { r as reactDom } from './common/index-e30e5fe3.js';

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = react.useRef(propValue !== undefined);

  var _useState = react.useState(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, react.useCallback(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}
function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = _objectWithoutPropertiesLoose(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

var reactJsxRuntime_production_min = createCommonjsModule(function (module, exports) {
var g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment");}var m=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;
});

var jsxRuntime = createCommonjsModule(function (module) {

{
  module.exports = reactJsxRuntime_production_min;
}
});

const ThemeContext = /*#__PURE__*/react.createContext({
  prefixes: {}
});

function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = react.useContext(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */

function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */

function getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}

var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
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
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var config = {
  disabled: false
};

var TransitionGroupContext = react.createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [reactDom.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : reactDom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : reactDom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
    );
  };

  return Transition;
}(react.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes =  {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/* eslint-disable no-return-assign */
var optionsSupported = false;
var onceSupported = false;

try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },

    get once() {
      // eslint-disable-next-line no-multi-assign
      return onceSupported = optionsSupported = true;
    }

  };

  if (canUseDOM) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
        capture = options.capture;
    var wrappedHandler = handler;

    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };

      handler.__once = wrappedHandler;
    }

    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }

  node.addEventListener(eventName, handler, options);
}

/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);

  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

function listen(node, eventName, handler, options) {
  addEventListener(node, eventName, handler, options);
  return function () {
    removeEventListener(node, eventName, handler, options);
  };
}

/**
 * Triggers an event on a given element.
 * 
 * @param node the element
 * @param eventName the event name to trigger
 * @param bubbles whether the event should bubble up
 * @param cancelable whether the event should be cancelable
 */
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (bubbles === void 0) {
    bubbles = false;
  }

  if (cancelable === void 0) {
    cancelable = true;
  }

  if (node) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}

function parseDuration(node) {
  var str = style(node, 'transitionDuration') || '';
  var mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }

  var called = false;
  var handle = setTimeout(function () {
    if (!called) triggerEvent(element, 'transitionend', true);
  }, duration + padding);
  var remove = listen(element, 'transitionend', function () {
    called = true;
  }, {
    once: true
  });
  return function () {
    clearTimeout(handle);
    remove();
  };
}

function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = listen(element, 'transitionend', handler);
  return function () {
    removeEmulate();
    remove();
  };
}

function parseDuration$1(node, property) {
  const str = style(node, property) || '';
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function transitionEndListener(element, handler) {
  const duration = parseDuration$1(element, 'transitionDuration');
  const delay = parseDuration$1(element, 'transitionDelay');
  const remove = transitionEnd(element, e => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}

var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs(refA, refB) {
  return react.useMemo(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return reactDom.findDOMNode(componentOrElement);
  }

  return componentOrElement != null ? componentOrElement : null;
}

// Normalizes Transition callbacks when nodeRef is used.
const TransitionWrapper = /*#__PURE__*/react.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = react.useRef(null);
  const mergedRef = useMergedRefs(nodeRef, childRef);

  const attachRef = r => {
    mergedRef(safeFindDOMNode(r));
  };

  const normalize = callback => param => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  /* eslint-disable react-hooks/exhaustive-deps */


  const handleEnter = react.useCallback(normalize(onEnter), [onEnter]);
  const handleEntering = react.useCallback(normalize(onEntering), [onEntering]);
  const handleEntered = react.useCallback(normalize(onEntered), [onEntered]);
  const handleExit = react.useCallback(normalize(onExit), [onExit]);
  const handleExiting = react.useCallback(normalize(onExiting), [onExiting]);
  const handleExited = react.useCallback(normalize(onExited), [onExited]);
  const handleAddEndListener = react.useCallback(normalize(addEndListener), [addEndListener]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/jsxRuntime.jsx(Transition, {
    ref: ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef: nodeRef,
    children: typeof children === 'function' ? (status, innerProps) => children(status, { ...innerProps,
      ref: attachRef
    }) : /*#__PURE__*/react.cloneElement(children, {
      ref: attachRef
    })
  });
});

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded befor being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef(value) {
  var ref = react.useRef(value);
  react.useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

function useEventCallback(fn) {
  var ref = useCommittedRef(fn);
  return react.useCallback(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

const _excluded = ["as", "disabled"];

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }

  const meta = {
    tagName
  };

  if (tagName === 'button') {
    return [{
      type: type || 'button',
      disabled
    }, meta];
  }

  const handleClick = event => {
    if (disabled || tagName === 'a' && isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    onClick == null ? void 0 : onClick(event);
  };

  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  return [{
    role: 'button',
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: undefined,
    tabIndex: disabled ? undefined : tabIndex,
    href: tagName === 'a' && disabled ? undefined : href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
const Button = /*#__PURE__*/react.forwardRef((_ref, ref) => {
  let {
    as: asProp,
    disabled
  } = _ref,
      props = _objectWithoutPropertiesLoose$1(_ref, _excluded);

  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /*#__PURE__*/jsxRuntime.jsx(Component, Object.assign({}, props, buttonProps, {
    ref: ref
  }));
});
Button.displayName = 'Button';

const _excluded$1 = ["onKeyDown"];

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function isTrivialHref$1(href) {
  return !href || href.trim() === '#';
}

/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */
const Anchor = /*#__PURE__*/react.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref,
      props = _objectWithoutPropertiesLoose$2(_ref, _excluded$1);

  const [buttonProps] = useButtonProps(Object.assign({
    tagName: 'a'
  }, props));
  const handleKeyDown = useEventCallback(e => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });

  if (isTrivialHref$1(props.href) && !props.role || props.role === 'button') {
    return /*#__PURE__*/jsxRuntime.jsx("a", Object.assign({
      ref: ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }

  return /*#__PURE__*/jsxRuntime.jsx("a", Object.assign({
    ref: ref
  }, props, {
    onKeyDown: onKeyDown
  }));
});
Anchor.displayName = 'Anchor';

const defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
const fadeStyles = {
  [ENTERING]: 'show',
  [ENTERED]: 'show'
};
const Fade = /*#__PURE__*/react.forwardRef(({
  className,
  children,
  transitionClasses = {},
  ...props
}, ref) => {
  const handleEnter = react.useCallback((node, isAppearing) => {
    triggerBrowserReflow(node);
    props.onEnter == null ? void 0 : props.onEnter(node, isAppearing);
  }, [props]);
  return /*#__PURE__*/jsxRuntime.jsx(TransitionWrapper, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    onEnter: handleEnter,
    childRef: children.ref,
    children: (status, innerProps) => /*#__PURE__*/react.cloneElement(children, { ...innerProps,
      className: classnames('fade', className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.defaultProps = defaultProps;
Fade.displayName = 'Fade';

var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

const pascalCase = str => str[0].toUpperCase() + camelize(str).slice(1);

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, {
  displayName = pascalCase(prefix),
  Component,
  defaultProps
} = {}) {
  const BsComponent = /*#__PURE__*/react.forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component || 'div',
    ...props
  }, ref) => {
    const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
    return /*#__PURE__*/jsxRuntime.jsx(Tag, {
      ref: ref,
      className: classnames(className, resolvedPrefix),
      ...props
    });
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

const defaultProps$1 = {
  variant: 'primary',
  active: false,
  disabled: false
};
const Button$1 = /*#__PURE__*/react.forwardRef(({
  as,
  bsPrefix,
  variant,
  size,
  active,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'btn');
  const [buttonProps, {
    tagName
  }] = useButtonProps({
    tagName: as,
    ...props
  });
  const Component = tagName;
  return /*#__PURE__*/jsxRuntime.jsx(Component, { ...props,
    ...buttonProps,
    ref: ref,
    className: classnames(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && props.disabled && 'disabled')
  });
});
Button$1.displayName = 'Button';
Button$1.defaultProps = defaultProps$1;

const context = /*#__PURE__*/react.createContext(null);
context.displayName = 'CardHeaderContext';

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */

function map(children, func) {
  let index = 0;
  return react.Children.map(children, child => /*#__PURE__*/react.isValidElement(child) ? func(child, index++) : child);
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */


function forEach(children, func) {
  let index = 0;
  react.Children.forEach(children, child => {
    if ( /*#__PURE__*/react.isValidElement(child)) func(child, index++);
  });
}

const DEVICE_SIZES = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'col');
  const spans = [];
  const classes = [];
  DEVICE_SIZES.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;

    if (typeof propValue === 'object' && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });
  return [{ ...props,
    className: classnames(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
const Col = /*#__PURE__*/react.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref) => {
  const [{
    className,
    ...colProps
  }, {
    as: Component = 'div',
    bsPrefix,
    spans
  }] = useCol(props);
  return /*#__PURE__*/jsxRuntime.jsx(Component, { ...colProps,
    ref: ref,
    className: classnames(className, !spans.length && bsPrefix)
  });
});
Col.displayName = 'Col';

var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
/**
 * Runs `querySelectorAll` on a given element.
 * 
 * @param element the element
 * @param selector the selector
 */

function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

/**
 * Returns a function that triggers a component update. the hook equivalent to
 * `this.forceUpdate()` in a class component. In most cases using a state value directly
 * is preferable but may be required in some advanced usages of refs for interop or
 * when direct DOM manipulation is required.
 *
 * ```ts
 * const forceUpdate = useForceUpdate();
 *
 * const updateOnClick = useCallback(() => {
 *  forceUpdate()
 * }, [forceUpdate])
 *
 * return <button type="button" onClick={updateOnClick}>Hi there</button>
 * ```
 */

function useForceUpdate() {
  // The toggling state value is designed to defeat React optimizations for skipping
  // updates when they are stricting equal to the last state value
  var _useReducer = react.useReducer(function (state) {
    return !state;
  }, false),
      dispatch = _useReducer[1];

  return dispatch;
}

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $f01a183cc7bdff77849e49ad26eb904$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 10000000000)),
  current: 0
};

const $f01a183cc7bdff77849e49ad26eb904$var$SSRContext = /*#__PURE__*/react.createContext($f01a183cc7bdff77849e49ad26eb904$var$defaultContext);
let $f01a183cc7bdff77849e49ad26eb904$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
/** @private */

function useSSRSafeId(defaultId) {
  let ctx = react.useContext($f01a183cc7bdff77849e49ad26eb904$var$SSRContext); // If we are rendering in a non-DOM environment, and there's no SSRProvider,
  // provide a warning to hint to the developer to add one.

  if (ctx === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext && !$f01a183cc7bdff77849e49ad26eb904$var$canUseDOM) {
    console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
  }

  return react.useMemo(() => defaultId || "react-aria" + ctx.prefix + "-" + ++ctx.current, [defaultId]);
}

const SelectableContext = /*#__PURE__*/react.createContext(null);
const makeEventKey = (eventKey, href = null) => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};

const NavContext = /*#__PURE__*/react.createContext(null);
NavContext.displayName = 'NavContext';

const ATTRIBUTE_PREFIX = `data-rr-ui-`;
const PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}

const context$1 = /*#__PURE__*/react.createContext(null);
context$1.displayName = 'NavbarContext';

const propTypes$1 = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: propTypes.string,

  /** Display feedback as a tooltip. */
  tooltip: propTypes.bool,
  as: propTypes.elementType
};
const Feedback = /*#__PURE__*/react.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  as: Component = 'div',
  className,
  type = 'valid',
  tooltip = false,
  ...props
}, ref) => /*#__PURE__*/jsxRuntime.jsx(Component, { ...props,
  ref: ref,
  className: classnames(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
}));
Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes$1;

const FormContext = /*#__PURE__*/react.createContext({});

const FormCheckInput = /*#__PURE__*/react.forwardRef(({
  id,
  bsPrefix,
  className,
  type = 'checkbox',
  isValid = false,
  isInvalid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = react.useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-input');
  return /*#__PURE__*/jsxRuntime.jsx(Component, { ...props,
    ref: ref,
    type: type,
    id: id || controlId,
    className: classnames(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
  });
});
FormCheckInput.displayName = 'FormCheckInput';

const FormCheckLabel = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = react.useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-label');
  return /*#__PURE__*/jsxRuntime.jsx("label", { ...props,
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: classnames(className, bsPrefix)
  });
});
FormCheckLabel.displayName = 'FormCheckLabel';

const FormCheck = /*#__PURE__*/react.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style,
  title = '',
  type = 'checkbox',
  label,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as = 'input',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check');
  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, 'form-switch');
  const {
    controlId
  } = react.useContext(FormContext);
  const innerFormContext = react.useMemo(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = label != null && label !== false && !children;

  const input = /*#__PURE__*/jsxRuntime.jsx(FormCheckInput, { ...props,
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: as
  });

  return /*#__PURE__*/jsxRuntime.jsx(FormContext.Provider, {
    value: innerFormContext,
    children: /*#__PURE__*/jsxRuntime.jsx("div", {
      style: style,
      className: classnames(className, label && bsPrefix, inline && `${bsPrefix}-inline`, type === 'switch' && bsSwitchPrefix),
      children: children || /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [input, hasLabel && /*#__PURE__*/jsxRuntime.jsx(FormCheckLabel, {
          title: title,
          children: label
        }), feedback && /*#__PURE__*/jsxRuntime.jsx(Feedback, {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = 'FormCheck';
var FormCheck$1 = Object.assign(FormCheck, {
  Input: FormCheckInput,
  Label: FormCheckLabel
});

const FormControl = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  type,
  size,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = react.useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-control');
  let classes;

  if (plaintext) {
    classes = {
      [`${bsPrefix}-plaintext`]: true
    };
  } else {
    classes = {
      [bsPrefix]: true,
      [`${bsPrefix}-${size}`]: size
    };
  }
  return /*#__PURE__*/jsxRuntime.jsx(Component, { ...props,
    type: type,
    size: htmlSize,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: classnames(className, classes, isValid && `is-valid`, isInvalid && `is-invalid`, type === 'color' && `${bsPrefix}-color`)
  });
});
FormControl.displayName = 'FormControl';
var FormControl$1 = Object.assign(FormControl, {
  Feedback
});

var FormFloating = createWithBsPrefix('form-floating');

const FormGroup = /*#__PURE__*/react.forwardRef(({
  controlId,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const context = react.useMemo(() => ({
    controlId
  }), [controlId]);
  return /*#__PURE__*/jsxRuntime.jsx(FormContext.Provider, {
    value: context,
    children: /*#__PURE__*/jsxRuntime.jsx(Component, { ...props,
      ref: ref
    })
  });
});
FormGroup.displayName = 'FormGroup';

const defaultProps$2 = {
  column: false,
  visuallyHidden: false
};
const FormLabel = /*#__PURE__*/react.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'label',
  bsPrefix,
  column,
  visuallyHidden,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = react.useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-label');
  let columnClass = 'col-form-label';
  if (typeof column === 'string') columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = classnames(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
  htmlFor = htmlFor || controlId;
  if (column) return /*#__PURE__*/jsxRuntime.jsx(Col, {
    ref: ref,
    as: "label",
    className: classes,
    htmlFor: htmlFor,
    ...props
  });
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    jsxRuntime.jsx(Component, {
      ref: ref,
      className: classes,
      htmlFor: htmlFor,
      ...props
    })
  );
});
FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = defaultProps$2;

const FormRange = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = react.useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-range');
  return /*#__PURE__*/jsxRuntime.jsx("input", { ...props,
    type: "range",
    ref: ref,
    className: classnames(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = 'FormRange';

const FormSelect = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  size,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = react.useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-select');
  return /*#__PURE__*/jsxRuntime.jsx("select", { ...props,
    size: htmlSize,
    ref: ref,
    className: classnames(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = 'FormSelect';

const FormText = /*#__PURE__*/react.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  as: Component = 'small',
  muted,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-text');
  return /*#__PURE__*/jsxRuntime.jsx(Component, { ...props,
    ref: ref,
    className: classnames(className, bsPrefix, muted && 'text-muted')
  });
});
FormText.displayName = 'FormText';

const Switch = /*#__PURE__*/react.forwardRef((props, ref) => /*#__PURE__*/jsxRuntime.jsx(FormCheck$1, { ...props,
  ref: ref,
  type: "switch"
}));
Switch.displayName = 'Switch';
var Switch$1 = Object.assign(Switch, {
  Input: FormCheck$1.Input,
  Label: FormCheck$1.Label
});

const FloatingLabel = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-floating');
  return /*#__PURE__*/jsxRuntime.jsxs(FormGroup, {
    ref: ref,
    className: classnames(className, bsPrefix),
    controlId: controlId,
    ...props,
    children: [children, /*#__PURE__*/jsxRuntime.jsx("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = 'FloatingLabel';

const propTypes$2 = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: propTypes.any,

  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: propTypes.bool,
  as: propTypes.elementType
};
const Form = /*#__PURE__*/react.forwardRef(({
  className,
  validated,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'form',
  ...props
}, ref) => /*#__PURE__*/jsxRuntime.jsx(Component, { ...props,
  ref: ref,
  className: classnames(className, validated && 'was-validated')
}));
Form.displayName = 'Form';
Form.propTypes = propTypes$2;
var Form$1 = Object.assign(Form, {
  Group: FormGroup,
  Control: FormControl$1,
  Floating: FormFloating,
  Check: FormCheck$1,
  Switch: Switch$1,
  Label: FormLabel,
  Text: FormText,
  Range: FormRange,
  Select: FormSelect,
  FloatingLabel
});

const defaultProps$3 = {
  fluid: false
};
const Container = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  fluid,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'container');
  const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';
  return /*#__PURE__*/jsxRuntime.jsx(Component, {
    ref: ref,
    ...props,
    className: classnames(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = 'Container';
Container.defaultProps = defaultProps$3;

var toFnRef$1 = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs$1(refA, refB) {
  var a = toFnRef$1(refA);
  var b = toFnRef$1(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs$1(refA, refB) {
  return react.useMemo(function () {
    return mergeRefs$1(refA, refB);
  }, [refA, refB]);
}

const TabContext = /*#__PURE__*/react.createContext(null);

const _excluded$2 = ["as", "active", "eventKey"];

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = react.useContext(SelectableContext);
  const navContext = react.useContext(NavContext);
  let isActive = active;
  const props = {
    role
  };

  if (navContext) {
    if (!role && navContext.role === 'tablist') props.role = 'tab';
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null); // @ts-ignore

    props[dataAttr('event-key')] = key;
    props.id = contextControllerId || id;
    props['aria-controls'] = contextControlledId;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
  }

  if (props.role === 'tab') {
    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    if (isActive) {
      props['aria-selected'] = isActive;
    } else {
      props.tabIndex = -1;
    }
  }

  props.onClick = useEventCallback(e => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(e);

    if (key == null) {
      return;
    }

    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
const NavItem = /*#__PURE__*/react.forwardRef((_ref, ref) => {
  let {
    as: Component = Button,
    active,
    eventKey
  } = _ref,
      options = _objectWithoutPropertiesLoose$3(_ref, _excluded$2);

  const [props, meta] = useNavItem(Object.assign({
    key: makeEventKey(eventKey, options.href),
    active
  }, options)); // @ts-ignore

  props[dataAttr('active')] = meta.isActive;
  return /*#__PURE__*/jsxRuntime.jsx(Component, Object.assign({}, options, props, {
    ref: ref
  }));
});
NavItem.displayName = 'NavItem';

const _excluded$3 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop$1 = () => {};

const EVENT_KEY_ATTR = dataAttr('event-key');
const Nav = /*#__PURE__*/react.forwardRef((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref,
      props = _objectWithoutPropertiesLoose$4(_ref, _excluded$3);

  // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect
  const forceUpdate = useForceUpdate();
  const needsRefocusRef = react.useRef(false);
  const parentOnSelect = react.useContext(SelectableContext);
  const tabContext = react.useContext(TabContext);
  let getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey; // TODO: do we need to duplicate these?

    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  const listNode = react.useRef(null);

  const getNextActiveTab = offset => {
    const currentListNode = listNode.current;
    if (!currentListNode) return null;
    const items = qsa(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector('[aria-selected=true]');
    if (!activeChild) return null;
    const index = items.indexOf(activeChild);
    if (index === -1) return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  const handleSelect = (key, event) => {
    if (key == null) return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };

  const handleKeyDown = event => {
    onKeyDown == null ? void 0 : onKeyDown(event);

    if (!tabContext) {
      return;
    }

    let nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveTab(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveTab(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[dataProp('EventKey')] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  react.useEffect(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  const mergedRef = useMergedRefs$1(ref, listNode);
  return /*#__PURE__*/jsxRuntime.jsx(SelectableContext.Provider, {
    value: handleSelect,
    children: /*#__PURE__*/jsxRuntime.jsx(NavContext.Provider, {
      value: {
        role,
        // used by NavLink to determine it's role
        activeKey: makeEventKey(activeKey),
        getControlledId: getControlledId || noop$1,
        getControllerId: getControllerId || noop$1
      },
      children: /*#__PURE__*/jsxRuntime.jsx(Component, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role: role
      }))
    })
  });
});
Nav.displayName = 'Nav';
var BaseNav = Object.assign(Nav, {
  Item: NavItem
});

var createChainableTypeChecker_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];
});

var all_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;



var _createChainableTypeChecker2 = _interopRequireDefault(createChainableTypeChecker_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];
});

var NavItem$1 = createWithBsPrefix('nav-item');

const defaultProps$4 = {
  disabled: false
};
const NavLink = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  as: Component = Anchor,
  active,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'nav-link');
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    ...props
  });
  return /*#__PURE__*/jsxRuntime.jsx(Component, { ...props,
    ...navItemProps,
    ref: ref,
    className: classnames(className, bsPrefix, props.disabled && 'disabled', meta.isActive && 'active')
  });
});
NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps$4;

const defaultProps$5 = {
  justify: false,
  fill: false
};
const Nav$1 = /*#__PURE__*/react.forwardRef((uncontrolledProps, ref) => {
  const {
    as = 'div',
    bsPrefix: initialBsPrefix,
    variant,
    fill,
    justify,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    activeKey: 'onSelect'
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'nav');
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = react.useContext(context$1);
  const cardHeaderContext = react.useContext(context);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }

  return /*#__PURE__*/jsxRuntime.jsx(BaseNav, {
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: classnames(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav$1.displayName = 'Nav';
Nav$1.defaultProps = defaultProps$5;
var Nav$2 = Object.assign(Nav$1, {
  Item: NavItem$1,
  Link: NavLink
});

const DEVICE_SIZES$1 = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const Row = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'row');
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  DEVICE_SIZES$1.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;

    if (propValue != null && typeof propValue === 'object') {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
    if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return /*#__PURE__*/jsxRuntime.jsx(Component, {
    ref: ref,
    ...props,
    className: classnames(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = 'Row';

function NoopTransition({
  children,
  in: inProp,
  mountOnEnter,
  unmountOnExit
}) {
  const hasEnteredRef = react.useRef(inProp);
  react.useEffect(() => {
    if (inProp) hasEnteredRef.current = true;
  }, [inProp]);
  if (inProp) return children; // not in
  //
  // if (!mountOnEnter && !unmountOnExit) {
  //   return children;
  // }

  if (unmountOnExit) {
    return null;
  }

  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }

  return children;
}

const _excluded$4 = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit"],
      _excluded2 = ["activeKey", "getControlledId", "getControllerId"],
      _excluded3 = ["as"];

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function useTabPanel(_ref) {
  let {
    active,
    eventKey,
    mountOnEnter,
    transition,
    unmountOnExit
  } = _ref,
      props = _objectWithoutPropertiesLoose$5(_ref, _excluded$4);

  const context = react.useContext(TabContext);
  if (!context) return [props, {
    eventKey,
    isActive: active,
    mountOnEnter,
    transition,
    unmountOnExit
  }];

  const {
    activeKey,
    getControlledId,
    getControllerId
  } = context,
        rest = _objectWithoutPropertiesLoose$5(context, _excluded2);

  const key = makeEventKey(eventKey);
  return [Object.assign({}, props, {
    id: getControlledId(eventKey),
    'aria-labelledby': getControllerId(eventKey)
  }), {
    eventKey,
    isActive: active == null && key != null ? makeEventKey(activeKey) === key : active,
    transition: transition || rest.transition,
    mountOnEnter: mountOnEnter != null ? mountOnEnter : rest.mountOnEnter,
    unmountOnExit: unmountOnExit != null ? unmountOnExit : rest.unmountOnExit
  }];
}
const TabPanel = /*#__PURE__*/react.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(_ref2, ref) => {
  let {
    as: Component = 'div'
  } = _ref2,
      props = _objectWithoutPropertiesLoose$5(_ref2, _excluded3);

  const [tabPanelProps, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = NoopTransition
  }] = useTabPanel(props); // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.

  return /*#__PURE__*/jsxRuntime.jsx(TabContext.Provider, {
    value: null,
    children: /*#__PURE__*/jsxRuntime.jsx(SelectableContext.Provider, {
      value: null,
      children: /*#__PURE__*/jsxRuntime.jsx(Transition, {
        in: isActive,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        children: /*#__PURE__*/jsxRuntime.jsx(Component, Object.assign({}, tabPanelProps, {
          ref: ref,
          role: "tabpanel",
          hidden: !isActive,
          "aria-hidden": !isActive
        }))
      })
    })
  });
});
TabPanel.displayName = 'TabPanel';

const Tabs = props => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children
  } = props;
  const [activeKey, onSelect] = useUncontrolledProp(propsActiveKey, defaultActiveKey, propsOnSelect);
  const id = useSSRSafeId(userId);
  const generateChildId = react.useMemo(() => generateCustomChildId || ((key, type) => id ? `${id}-${type}-${key}` : null), [id, generateCustomChildId]);
  const tabContext = react.useMemo(() => ({
    onSelect,
    activeKey,
    transition,
    mountOnEnter: mountOnEnter || false,
    unmountOnExit: unmountOnExit || false,
    getControlledId: key => generateChildId(key, 'tabpane'),
    getControllerId: key => generateChildId(key, 'tab')
  }), [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return /*#__PURE__*/jsxRuntime.jsx(TabContext.Provider, {
    value: tabContext,
    children: /*#__PURE__*/jsxRuntime.jsx(SelectableContext.Provider, {
      value: onSelect || null,
      children: children
    })
  });
};

Tabs.Panel = TabPanel;

function getTabTransitionComponent(transition) {
  if (typeof transition === 'boolean') {
    return transition ? Fade : undefined;
  }

  return transition;
}

const TabContainer = ({
  transition,
  ...props
}) => /*#__PURE__*/jsxRuntime.jsx(Tabs, { ...props,
  transition: getTabTransitionComponent(transition)
});

TabContainer.displayName = 'TabContainer';

var TabContent = createWithBsPrefix('tab-content');

const TabPane = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  transition,
  ...props
}, ref) => {
  const [{
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    ...rest
  }, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = NoopTransition
  }] = useTabPanel({ ...props,
    transition: getTabTransitionComponent(transition)
  });
  const prefix = useBootstrapPrefix(bsPrefix, 'tab-pane'); // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.

  return /*#__PURE__*/jsxRuntime.jsx(TabContext.Provider, {
    value: null,
    children: /*#__PURE__*/jsxRuntime.jsx(SelectableContext.Provider, {
      value: null,
      children: /*#__PURE__*/jsxRuntime.jsx(Transition, {
        in: isActive,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        children: /*#__PURE__*/jsxRuntime.jsx(Component, { ...rest,
          ref: ref,
          className: classnames(className, prefix, isActive && 'active')
        })
      })
    })
  });
});
TabPane.displayName = 'TabPane';

/* eslint-disable react/no-unused-prop-types */
const propTypes$3 = {
  eventKey: propTypes.oneOfType([propTypes.string, propTypes.number]),

  /**
   * Content for the tab title.
   */
  title: propTypes.node.isRequired,

  /**
   * The disabled state of the tab.
   */
  disabled: propTypes.bool,

  /**
   * Class to pass to the underlying nav link.
   */
  tabClassName: propTypes.string
};

const Tab = () => {
  throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly'); // Needed otherwise docs error out.
};

Tab.propTypes = propTypes$3;
var Tab$1 = Object.assign(Tab, {
  Container: TabContainer,
  Content: TabContent,
  Pane: TabPane
});

const Table = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  striped,
  bordered,
  borderless,
  hover,
  size,
  variant,
  responsive,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'table');
  const classes = classnames(className, decoratedBsPrefix, variant && `${decoratedBsPrefix}-${variant}`, size && `${decoratedBsPrefix}-${size}`, striped && `${decoratedBsPrefix}-striped`, bordered && `${decoratedBsPrefix}-bordered`, borderless && `${decoratedBsPrefix}-borderless`, hover && `${decoratedBsPrefix}-hover`);

  const table = /*#__PURE__*/jsxRuntime.jsx("table", { ...props,
    className: classes,
    ref: ref
  });

  if (responsive) {
    let responsiveClass = `${decoratedBsPrefix}-responsive`;

    if (typeof responsive === 'string') {
      responsiveClass = `${responsiveClass}-${responsive}`;
    }

    return /*#__PURE__*/jsxRuntime.jsx("div", {
      className: responsiveClass,
      children: table
    });
  }

  return table;
});

const defaultProps$6 = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  let defaultActiveKey;
  forEach(children, child => {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

function renderTab(child) {
  const {
    title,
    eventKey,
    disabled,
    tabClassName,
    id
  } = child.props;

  if (title == null) {
    return null;
  }

  return /*#__PURE__*/jsxRuntime.jsx(NavItem$1, {
    as: "li",
    role: "presentation",
    children: /*#__PURE__*/jsxRuntime.jsx(NavLink, {
      as: "button",
      type: "button",
      eventKey: eventKey,
      disabled: disabled,
      id: id,
      className: tabClassName,
      children: title
    })
  });
}

const Tabs$1 = props => {
  const {
    id,
    onSelect,
    transition,
    mountOnEnter,
    unmountOnExit,
    children,
    activeKey = getDefaultActiveKey(children),
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: 'onSelect'
  });
  return /*#__PURE__*/jsxRuntime.jsxs(Tabs, {
    id: id,
    activeKey: activeKey,
    onSelect: onSelect,
    transition: getTabTransitionComponent(transition),
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit,
    children: [/*#__PURE__*/jsxRuntime.jsx(Nav$2, { ...controlledProps,
      role: "tablist",
      as: "ul",
      children: map(children, renderTab)
    }), /*#__PURE__*/jsxRuntime.jsx(TabContent, {
      children: map(children, child => {
        const childProps = { ...child.props
        };
        delete childProps.title;
        delete childProps.disabled;
        delete childProps.tabClassName;
        return /*#__PURE__*/jsxRuntime.jsx(TabPane, { ...childProps
        });
      })
    })]
  });
};

Tabs$1.defaultProps = defaultProps$6;
Tabs$1.displayName = 'Tabs';

export { Button$1 as Button, Col, Container, Fade, Form$1 as Form, Row, Tab$1 as Tab, Table, Tabs$1 as Tabs };
