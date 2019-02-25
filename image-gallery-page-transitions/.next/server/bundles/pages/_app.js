module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_transition_group__ = __webpack_require__("react-transition-group");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_gsap__ = __webpack_require__("gsap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_gsap__);

var _jsxFileName = "/Users/jamesgood/Desktop/dev-learning/web-dev-learning/react-experimentation/image-gallery-page-transitions/pages/_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




 // import { CSSPlugin } from "gsap/src/uncompressed/plugins/CSSPlugin";

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        currentRoute: null,
        currentPage: null,
        clickedProduct: null,
        currentlyHoveredElement: null,
        prevNodeClassName: null,
        imageReel: null
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "componentDidMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        console.log("THIS COMPONENTS PROPS: ", _this.props);

        var _assertThisInitialize = _assertThisInitialized(_this),
            setCurrentlyHoveredElement = _assertThisInitialize.setCurrentlyHoveredElement; // Will give this a shot for attempting to maintain the reference of the div
        // that needs to be repositioned to the product display image's position


        document.addEventListener("mouseover", setCurrentlyHoveredElement); // All right this will work, and then
        // you can just reset it inside of the transitionElementToNewLocation func
        // for any routes that need it.

        var removeIt = function removeIt(e) {
          console.log("THE E TARGET: ", e.target);
          document.removeEventListener("mouseover", setCurrentlyHoveredElement); // this.setState({
          //   clickedProduct:
          // })
        };

        document.addEventListener("click", removeIt);

        _this.setState({
          currentRoute: _this.props.router.route,
          currentPage: _this.comp.childNodes[0].childNodes[0]
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "componentDidUpdate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(prevProps, prevState) {
        console.log("THE NEW PROPS: ", _this.props);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "setCurrentlyHoveredElement", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (e.target.classList[0] === "product-listing-image") {
          var node = e.target.parentNode.parentNode;
          console.log("THE NODE'S CLASSNAME: ", node.className);
          console.log("THE TARGET ID: ", e.target.id);
          console.log("end");

          _this.setState({
            currentlyHoveredElement: node,
            prevNodeClassName: node.className,
            imageReel: node.parentNode
          });
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "transitionElementToNewLocation", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(enteringNode, exitingNode, imageReel) {
        console.log("transitionElementToNewLocation running"); // index div's x and y where index page is being navigated to
        // (239.109375, 267.59375)
        // about div's x and y where about page is being exited
        // (640.875, 35.1875)
        // So in the calculating of enteringTop and enteringLeft
        // Always subtract the entering page's elements from the exiting pages elements
        // to obtain the position which the exiting page's elements should move to.
        // const imageReel = exitingNode.querySelector(".image-reel");

        if (imageReel) {
          var keys = Object.keys(imageReel.childNodes);
          keys.map(function (key) {
            imageReel.childNodes[key].className !== exitingNode.className && __WEBPACK_IMPORTED_MODULE_5_gsap__["TweenMax"].set(imageReel.childNodes[key], {
              autoAlpha: 0
            });
          });
        }

        console.log("THE ENTERING NODE: ", enteringNode);

        if (enteringNode === null) {
          __WEBPACK_IMPORTED_MODULE_5_gsap__["TweenMax"].set(exitingNode, {
            autoAlpha: 0
          });
        } else {
          var tl = new __WEBPACK_IMPORTED_MODULE_5_gsap__["TimelineMax"]();
          var enteringNodeBoundingRect = enteringNode.getBoundingClientRect();
          var exitingNodeBoundingRect = exitingNode.getBoundingClientRect();
          console.log("ENTERING NODE'S X: ", enteringNodeBoundingRect.x);
          console.log("ENTERING NODE'S Y: ", enteringNodeBoundingRect.y);
          var enteringTop = enteringNodeBoundingRect.x - exitingNodeBoundingRect.x;
          var enteringLeft = enteringNodeBoundingRect.y - exitingNodeBoundingRect.y;
          console.log("THE ENTERING TOP: ", enteringTop);
          console.log("THE ENTERING LEFT: ", enteringLeft);
          console.dir(exitingNode);
          console.log(exitingNode.style);
          __WEBPACK_IMPORTED_MODULE_5_gsap__["TweenMax"].set(exitingNode, {
            clearProps: "transform"
          }); // TweenMax.set(exitingNode, { clearProps: "all" });

          __WEBPACK_IMPORTED_MODULE_5_gsap__["TweenMax"].set(enteringNode, {
            autoAlpha: 0
          });
          tl.to(exitingNode, 1, {
            x: enteringTop,
            y: enteringLeft
          });
          tl.to(enteringNode, 0, {
            autoAlpha: 1
          });
          tl.play();
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "enterTransition", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(node) {
          var _this$state, currentRoute, currentPage, currentlyHoveredElement, enteringNodeImage, exitingNodeImage;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this$state = _this.state, currentRoute = _this$state.currentRoute, currentPage = _this$state.currentPage, currentlyHoveredElement = _this$state.currentlyHoveredElement;

                  if (currentRoute === "/") {
                    // console.log("THE CURRENT PAGE / : ", currentPage);
                    // console.log("THE NODE / : ", node);
                    // console.dir(currentPage.childNodes);
                    // console.log("getting ById", node.querySelector(".product-display-image"));
                    exitingNodeImage = currentlyHoveredElement;
                    console.log("EXITING NODE: ", exitingNodeImage); // console.log("CURRENTLY HOVERED PRODUCT ON /", exitingNodeImage);

                    enteringNodeImage = node.querySelector(".product-display-image"); // Now just need to do the hover thing to get the image that was clicked

                    _this.transitionElementToNewLocation(enteringNodeImage, exitingNodeImage, _this.state.imageReel);
                  } else if (currentRoute === "/product-display") {
                    document.addEventListener("mouseover", _this.setCurrentlyHoveredElement);
                    enteringNodeImage = node.querySelector("." + _this.state.prevNodeClassName);
                    exitingNodeImage = currentPage.querySelector(".product-display-image");

                    _this.transitionElementToNewLocation(enteringNodeImage, exitingNodeImage);
                  }

                  _this.setState({
                    currentRoute: _this.props.router.route,
                    currentPage: node
                  });

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps;
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        ref: function ref(x) {
          return _this2.comp = x;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        className: "jsx-4236310025"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_transition_group__["TransitionGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_transition_group__["Transition"], {
        "in": this.props.in,
        key: this.props.router.route,
        timeout: {
          enter: 1000,
          exit: 1000
        },
        mountOnEnter: false,
        unmountOnExit: true,
        onEnter: this.enterTransition,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }))))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "4236310025",
        css: "body{margin:0;padding:0;background:#99e1d9;}*,*::after,*::before{box-sizing:border-box;border:0;}img{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUwyQixBQUdzQixBQVFhLEFBS0EsU0FaWixVQUNTLEdBT1YsQUFLWCxTQUpBLE9BUEEiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamFtZXNnb29kL0Rlc2t0b3AvZGV2LWxlYXJuaW5nL3dlYi1kZXYtbGVhcm5pbmcvcmVhY3QtZXhwZXJpbWVudGF0aW9uL2ltYWdlLWdhbGxlcnktcGFnZS10cmFuc2l0aW9ucyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uR3JvdXAsIFRyYW5zaXRpb24gfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xuaW1wb3J0IHsgVHdlZW5NYXgsIFRpbWVsaW5lTWF4IH0gZnJvbSBcImdzYXBcIjtcbi8vIGltcG9ydCB7IENTU1BsdWdpbiB9IGZyb20gXCJnc2FwL3NyYy91bmNvbXByZXNzZWQvcGx1Z2lucy9DU1NQbHVnaW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCByb3V0ZXIsIGN0eCB9KSB7XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGN1cnJlbnRSb3V0ZTogbnVsbCxcbiAgICBjdXJyZW50UGFnZTogbnVsbCxcbiAgICBjbGlja2VkUHJvZHVjdDogbnVsbCxcbiAgICBjdXJyZW50bHlIb3ZlcmVkRWxlbWVudDogbnVsbCxcbiAgICBwcmV2Tm9kZUNsYXNzTmFtZTogbnVsbCxcbiAgICBpbWFnZVJlZWw6IG51bGxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlRISVMgQ09NUE9ORU5UUyBQUk9QUzogXCIsIHRoaXMucHJvcHMpO1xuICAgIGNvbnN0IHsgc2V0Q3VycmVudGx5SG92ZXJlZEVsZW1lbnQgfSA9IHRoaXM7XG4gICAgLy8gV2lsbCBnaXZlIHRoaXMgYSBzaG90IGZvciBhdHRlbXB0aW5nIHRvIG1haW50YWluIHRoZSByZWZlcmVuY2Ugb2YgdGhlIGRpdlxuICAgIC8vIHRoYXQgbmVlZHMgdG8gYmUgcmVwb3NpdGlvbmVkIHRvIHRoZSBwcm9kdWN0IGRpc3BsYXkgaW1hZ2UncyBwb3NpdGlvblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgc2V0Q3VycmVudGx5SG92ZXJlZEVsZW1lbnQpO1xuICAgIC8vIEFsbCByaWdodCB0aGlzIHdpbGwgd29yaywgYW5kIHRoZW5cbiAgICAvLyB5b3UgY2FuIGp1c3QgcmVzZXQgaXQgaW5zaWRlIG9mIHRoZSB0cmFuc2l0aW9uRWxlbWVudFRvTmV3TG9jYXRpb24gZnVuY1xuICAgIC8vIGZvciBhbnkgcm91dGVzIHRoYXQgbmVlZCBpdC5cbiAgICBjb25zdCByZW1vdmVJdCA9IGUgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJUSEUgRSBUQVJHRVQ6IFwiLCBlLnRhcmdldCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHNldEN1cnJlbnRseUhvdmVyZWRFbGVtZW50KTtcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLy8gICBjbGlja2VkUHJvZHVjdDpcbiAgICAgIC8vIH0pXG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlSXQpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50Um91dGU6IHRoaXMucHJvcHMucm91dGVyLnJvdXRlLFxuICAgICAgY3VycmVudFBhZ2U6IHRoaXMuY29tcC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF1cbiAgICB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRVcGRhdGUgPSAocHJldlByb3BzLCBwcmV2U3RhdGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlRIRSBORVcgUFJPUFM6IFwiLCB0aGlzLnByb3BzKTtcbiAgfTtcblxuICBzZXRDdXJyZW50bHlIb3ZlcmVkRWxlbWVudCA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwicHJvZHVjdC1saXN0aW5nLWltYWdlXCIpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBjb25zb2xlLmxvZyhcIlRIRSBOT0RFJ1MgQ0xBU1NOQU1FOiBcIiwgbm9kZS5jbGFzc05hbWUpO1xuICAgICAgY29uc29sZS5sb2coXCJUSEUgVEFSR0VUIElEOiBcIiwgZS50YXJnZXQuaWQpO1xuICAgICAgY29uc29sZS5sb2coXCJlbmRcIik7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudGx5SG92ZXJlZEVsZW1lbnQ6IG5vZGUsXG4gICAgICAgIHByZXZOb2RlQ2xhc3NOYW1lOiBub2RlLmNsYXNzTmFtZSxcbiAgICAgICAgaW1hZ2VSZWVsOiBub2RlLnBhcmVudE5vZGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBTdGlsbCBuZWVkIHRvIGdldCB0aGUgcHJvZHVjdC1kaXNwbGF5IGltYWdlIHRvIHRyYW5zaXRpb24gdG8gdGhlIGFwcHJvcHJpYXRlXG4gIC8vIHBvc2l0aW9uIG9uIG5hdmlnYXRpbmcgYmFja3dhcmRzLlxuICAvLyBTaG91bGQgYmUgYWJsZSB0byBqc3V0IHVzZSBjdXJyZW50bHlIb3ZlcmVkRWxlbWVudCBub3cgdGhhdFxuICAvLyBJJ20gcmVtb3ZpbmcgdGhlIG1vdXNlb3ZlciBldmVudCBsaXN0ZW5lci5cbiAgLy8gTmV2ZXJtaW5kLCBzZXQgdGhlIHNlbGVjdGVkSW1hZ2UgdXNlZCB0byBuYXZpZ2F0ZSB0byAvcHJvZHVjdC1kaXNwbGF5XG4gIC8vIG9uIHRoZSBjbGljayBldmVudC5cbiAgdHJhbnNpdGlvbkVsZW1lbnRUb05ld0xvY2F0aW9uID0gKGVudGVyaW5nTm9kZSwgZXhpdGluZ05vZGUsIGltYWdlUmVlbCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwidHJhbnNpdGlvbkVsZW1lbnRUb05ld0xvY2F0aW9uIHJ1bm5pbmdcIik7XG4gICAgLy8gaW5kZXggZGl2J3MgeCBhbmQgeSB3aGVyZSBpbmRleCBwYWdlIGlzIGJlaW5nIG5hdmlnYXRlZCB0b1xuICAgIC8vICgyMzkuMTA5Mzc1LCAyNjcuNTkzNzUpXG4gICAgLy8gYWJvdXQgZGl2J3MgeCBhbmQgeSB3aGVyZSBhYm91dCBwYWdlIGlzIGJlaW5nIGV4aXRlZFxuICAgIC8vICg2NDAuODc1LCAzNS4xODc1KVxuICAgIC8vIFNvIGluIHRoZSBjYWxjdWxhdGluZyBvZiBlbnRlcmluZ1RvcCBhbmQgZW50ZXJpbmdMZWZ0XG4gICAgLy8gQWx3YXlzIHN1YnRyYWN0IHRoZSBlbnRlcmluZyBwYWdlJ3MgZWxlbWVudHMgZnJvbSB0aGUgZXhpdGluZyBwYWdlcyBlbGVtZW50c1xuICAgIC8vIHRvIG9idGFpbiB0aGUgcG9zaXRpb24gd2hpY2ggdGhlIGV4aXRpbmcgcGFnZSdzIGVsZW1lbnRzIHNob3VsZCBtb3ZlIHRvLlxuICAgIC8vIGNvbnN0IGltYWdlUmVlbCA9IGV4aXRpbmdOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2UtcmVlbFwiKTtcbiAgICBpZiAoaW1hZ2VSZWVsKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoaW1hZ2VSZWVsLmNoaWxkTm9kZXMpO1xuICAgICAga2V5cy5tYXAoa2V5ID0+IHtcbiAgICAgICAgaW1hZ2VSZWVsLmNoaWxkTm9kZXNba2V5XS5jbGFzc05hbWUgIT09IGV4aXRpbmdOb2RlLmNsYXNzTmFtZSAmJlxuICAgICAgICAgIFR3ZWVuTWF4LnNldChpbWFnZVJlZWwuY2hpbGROb2Rlc1trZXldLCB7IGF1dG9BbHBoYTogMCB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIlRIRSBFTlRFUklORyBOT0RFOiBcIiwgZW50ZXJpbmdOb2RlKTtcbiAgICBpZiAoZW50ZXJpbmdOb2RlID09PSBudWxsKSB7XG4gICAgICBUd2Vlbk1heC5zZXQoZXhpdGluZ05vZGUsIHsgYXV0b0FscGhhOiAwIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgICAgY29uc3QgZW50ZXJpbmdOb2RlQm91bmRpbmdSZWN0ID0gZW50ZXJpbmdOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgZXhpdGluZ05vZGVCb3VuZGluZ1JlY3QgPSBleGl0aW5nTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRU5URVJJTkcgTk9ERSdTIFg6IFwiLCBlbnRlcmluZ05vZGVCb3VuZGluZ1JlY3QueCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkVOVEVSSU5HIE5PREUnUyBZOiBcIiwgZW50ZXJpbmdOb2RlQm91bmRpbmdSZWN0LnkpO1xuICAgICAgY29uc3QgZW50ZXJpbmdUb3AgPVxuICAgICAgICBlbnRlcmluZ05vZGVCb3VuZGluZ1JlY3QueCAtIGV4aXRpbmdOb2RlQm91bmRpbmdSZWN0Lng7XG4gICAgICBjb25zdCBlbnRlcmluZ0xlZnQgPVxuICAgICAgICBlbnRlcmluZ05vZGVCb3VuZGluZ1JlY3QueSAtIGV4aXRpbmdOb2RlQm91bmRpbmdSZWN0Lnk7XG4gICAgICBjb25zb2xlLmxvZyhcIlRIRSBFTlRFUklORyBUT1A6IFwiLCBlbnRlcmluZ1RvcCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlRIRSBFTlRFUklORyBMRUZUOiBcIiwgZW50ZXJpbmdMZWZ0KTtcbiAgICAgIGNvbnNvbGUuZGlyKGV4aXRpbmdOb2RlKTtcbiAgICAgIGNvbnNvbGUubG9nKGV4aXRpbmdOb2RlLnN0eWxlKTtcbiAgICAgIFR3ZWVuTWF4LnNldChleGl0aW5nTm9kZSwge1xuICAgICAgICBjbGVhclByb3BzOiBcInRyYW5zZm9ybVwiXG4gICAgICB9KTtcbiAgICAgIC8vIFR3ZWVuTWF4LnNldChleGl0aW5nTm9kZSwgeyBjbGVhclByb3BzOiBcImFsbFwiIH0pO1xuICAgICAgVHdlZW5NYXguc2V0KGVudGVyaW5nTm9kZSwgeyBhdXRvQWxwaGE6IDAgfSk7XG4gICAgICB0bC50byhleGl0aW5nTm9kZSwgMSwge1xuICAgICAgICB4OiBlbnRlcmluZ1RvcCxcbiAgICAgICAgeTogZW50ZXJpbmdMZWZ0XG4gICAgICB9KTtcbiAgICAgIHRsLnRvKGVudGVyaW5nTm9kZSwgMCwgeyBhdXRvQWxwaGE6IDEgfSk7XG4gICAgICB0bC5wbGF5KCk7XG4gICAgfVxuICB9O1xuXG4gIGVudGVyVHJhbnNpdGlvbiA9IGFzeW5jIG5vZGUgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudFJvdXRlLCBjdXJyZW50UGFnZSwgY3VycmVudGx5SG92ZXJlZEVsZW1lbnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGVudGVyaW5nTm9kZUltYWdlO1xuICAgIGxldCBleGl0aW5nTm9kZUltYWdlO1xuXG4gICAgaWYgKGN1cnJlbnRSb3V0ZSA9PT0gXCIvXCIpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiVEhFIENVUlJFTlQgUEFHRSAvIDogXCIsIGN1cnJlbnRQYWdlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiVEhFIE5PREUgLyA6IFwiLCBub2RlKTtcbiAgICAgIC8vIGNvbnNvbGUuZGlyKGN1cnJlbnRQYWdlLmNoaWxkTm9kZXMpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJnZXR0aW5nIEJ5SWRcIiwgbm9kZS5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3QtZGlzcGxheS1pbWFnZVwiKSk7XG4gICAgICBleGl0aW5nTm9kZUltYWdlID0gY3VycmVudGx5SG92ZXJlZEVsZW1lbnQ7XG4gICAgICBjb25zb2xlLmxvZyhcIkVYSVRJTkcgTk9ERTogXCIsIGV4aXRpbmdOb2RlSW1hZ2UpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJDVVJSRU5UTFkgSE9WRVJFRCBQUk9EVUNUIE9OIC9cIiwgZXhpdGluZ05vZGVJbWFnZSk7XG4gICAgICBlbnRlcmluZ05vZGVJbWFnZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0LWRpc3BsYXktaW1hZ2VcIik7XG4gICAgICAvLyBOb3cganVzdCBuZWVkIHRvIGRvIHRoZSBob3ZlciB0aGluZyB0byBnZXQgdGhlIGltYWdlIHRoYXQgd2FzIGNsaWNrZWRcbiAgICAgIHRoaXMudHJhbnNpdGlvbkVsZW1lbnRUb05ld0xvY2F0aW9uKFxuICAgICAgICBlbnRlcmluZ05vZGVJbWFnZSxcbiAgICAgICAgZXhpdGluZ05vZGVJbWFnZSxcbiAgICAgICAgdGhpcy5zdGF0ZS5pbWFnZVJlZWxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50Um91dGUgPT09IFwiL3Byb2R1Y3QtZGlzcGxheVwiKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHRoaXMuc2V0Q3VycmVudGx5SG92ZXJlZEVsZW1lbnQpO1xuICAgICAgZW50ZXJpbmdOb2RlSW1hZ2UgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLlwiICsgdGhpcy5zdGF0ZS5wcmV2Tm9kZUNsYXNzTmFtZVxuICAgICAgKTtcbiAgICAgIGV4aXRpbmdOb2RlSW1hZ2UgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3QtZGlzcGxheS1pbWFnZVwiKTtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkVsZW1lbnRUb05ld0xvY2F0aW9uKGVudGVyaW5nTm9kZUltYWdlLCBleGl0aW5nTm9kZUltYWdlKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50Um91dGU6IHRoaXMucHJvcHMucm91dGVyLnJvdXRlLFxuICAgICAgY3VycmVudFBhZ2U6IG5vZGVcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGRpdiByZWY9e3ggPT4gKHRoaXMuY29tcCA9IHgpfT5cbiAgICAgICAgICA8VHJhbnNpdGlvbkdyb3VwPlxuICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgaW49e3RoaXMucHJvcHMuaW59XG4gICAgICAgICAgICAgIGtleT17dGhpcy5wcm9wcy5yb3V0ZXIucm91dGV9XG4gICAgICAgICAgICAgIHRpbWVvdXQ9e3tcbiAgICAgICAgICAgICAgICBlbnRlcjogMTAwMCxcbiAgICAgICAgICAgICAgICBleGl0OiAxMDAwXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG1vdW50T25FbnRlcj17ZmFsc2V9XG4gICAgICAgICAgICAgIHVubW91bnRPbkV4aXQ9e3RydWV9XG4gICAgICAgICAgICAgIG9uRW50ZXI9e3RoaXMuZW50ZXJUcmFuc2l0aW9ufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5OWUxZDk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgKixcbiAgICAgICAgICAqOjphZnRlcixcbiAgICAgICAgICAqOjpiZWZvcmUge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/_app.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(_ref2) {
        var Component, router, ctx, pageProps;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                Component = _ref2.Component, router = _ref2.router, ctx = _ref2.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context2.sent;

              case 6:
                return _context2.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getInitialProps(_x2) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_2_next_app___default.a);



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "gsap":
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-transition-group":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map