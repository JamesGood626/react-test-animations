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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./comps/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
var _jsxFileName = "/Users/jamesgood/Desktop/dev-learning/web-dev-learning/react-experimentation/image-gallery-page-transitions/comps/Header.js";



var linkStyle = {
  marginLeft: "1rem",
  marginTop: "1rem",
  color: "#fcfffc",
  textDecoration: "none",
  fontSize: "2rem"
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Home")));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./comps/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./comps/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
var _jsxFileName = "/Users/jamesgood/Desktop/dev-learning/web-dev-learning/react-experimentation/image-gallery-page-transitions/comps/Layout.js";



var Container = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div.withConfig({
  displayName: "Layout__Container",
  componentId: "sc-3roy29-0"
})(["position:absolute;top:0;left:0;height:100vh;width:100vw;"]);

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comps_Layout_js__ = __webpack_require__("./comps/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
var _jsxFileName = "/Users/jamesgood/Desktop/dev-learning/web-dev-learning/react-experimentation/image-gallery-page-transitions/pages/index.js";



 // import camera from "./camera.jpg";

var Container = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1opai1j-0"
})(["display:flex;justify-content:center;align-items:center;height:95vh;width:95vw;"]);
var ImageReel = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div.withConfig({
  displayName: "pages__ImageReel",
  componentId: "sc-1opai1j-1"
})(["display:flex;flex-wrap:wrap;width:90%;"]);
var Image = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.img.withConfig({
  displayName: "pages__Image",
  componentId: "sc-1opai1j-2"
})(["height:9rem;width:9rem;margin:1.4rem;"]);

var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__comps_Layout_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ImageReel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "image-one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/product-display",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, {
    id: "image-one",
    className: "product-listing-image",
    src: "/static/camera.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "image-two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/product-display",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, {
    id: "image-two",
    className: "product-listing-image",
    src: "/static/camera.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "image-three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/product-display",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, {
    className: "product-listing-image",
    src: "/static/camera.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "image-four",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/product-display",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, {
    className: "product-listing-image",
    src: "/static/camera.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "image-five",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/product-display",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, {
    className: "product-listing-image",
    src: "/static/camera.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "image-six",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/product-display",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, {
    className: "product-listing-image",
    src: "/static/camera.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "image-seven",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/product-display",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, {
    className: "product-listing-image",
    src: "/static/camera.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "image-eight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/product-display",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, {
    className: "product-listing-image",
    src: "/static/camera.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "image-nine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/product-display",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, {
    className: "product-listing-image",
    src: "/static/camera.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map