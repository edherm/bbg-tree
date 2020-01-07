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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_create_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/create_tree */ "./src/scripts/create_tree.js");


window.addEventListener("DOMContentLoaded", function () {
  document.body.append("Hello World");
  Object(_scripts_create_tree__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./src/scripts/convert_data.js":
/*!*************************************!*\
  !*** ./src/scripts/convert_data.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var bbg_data;
d3.csv("src/data/bbg_data191204.csv").then(function (data) {
  bbg_data = d3.nest().key(function (d) {
    return d[0];
  }).key(function (d) {
    return d[1];
  }).entries(data);
});
/* harmony default export */ __webpack_exports__["default"] = (bbg_data);

/***/ }),

/***/ "./src/scripts/create_tree.js":
/*!************************************!*\
  !*** ./src/scripts/create_tree.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _convert_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert_data */ "./src/scripts/convert_data.js");
 // import {bbgData} from "./data/bbg_data_test_slice.csv";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var margin = {
    top: 75,
    right: 75,
    bottom: 75,
    left: 75
  },
      width = 600 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;
  var orientation = {
    "grow-up": {
      size: [width, height],
      x: function x(d) {
        return d.x;
      },
      y: function y(d) {
        return height - d.y;
      }
    }
  };
  var svg = d3.select("body").selectAll("svg").data(d3.entries(orientation)).enter().append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.right).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // Convert csv data => each row becomes an object with columns as keys

  d3.csv("src/data/bbg_data191204.csv").then(function (data) {
    // Convert data to hierarchical structure
    var bbg_data = d3.nest().key(function (d) {
      return "root";
    }).key(function (d) {
      return d.home;
    }).key(function (d) {
      return d.collection;
    }).key(function (d) {
      return d.genus;
    }).entries(data); // Test the data structure
    // console.log(data);

    console.log(bbg_data);
    svg.each(function (orientation) {
      var svg = d3.select(this),
          o = orientation.value; // Layout the tree

      var treemap = d3.tree().size(o.size);
      var nodes = d3.hierarchy(bbg_data);
      nodes = treemap(nodes);
      var links = nodes.descendants().slice(1);
    });
  });
});

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnZlcnRfZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jcmVhdGVfdHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZCIsImNyZWF0ZVRyZWUiLCJiYmdfZGF0YSIsImQzIiwiY3N2IiwidGhlbiIsImRhdGEiLCJuZXN0Iiwia2V5IiwiZCIsImVudHJpZXMiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9yaWVudGF0aW9uIiwic2l6ZSIsIngiLCJ5Iiwic3ZnIiwic2VsZWN0Iiwic2VsZWN0QWxsIiwiZW50ZXIiLCJhdHRyIiwiaG9tZSIsImNvbGxlY3Rpb24iLCJnZW51cyIsImNvbnNvbGUiLCJsb2ciLCJlYWNoIiwibyIsInZhbHVlIiwidHJlZW1hcCIsInRyZWUiLCJub2RlcyIsImhpZXJhcmNoeSIsImxpbmtzIiwiZGVzY2VuZGFudHMiLCJzbGljZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUNoREMsVUFBUSxDQUFDQyxJQUFULENBQWNDLE1BQWQsQ0FBcUIsYUFBckI7QUFDQUMsc0VBQVU7QUFDWCxDQUhELEU7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUEsSUFBSUMsUUFBSjtBQUNBQyxFQUFFLENBQUNDLEdBQUgsQ0FBTyw2QkFBUCxFQUFzQ0MsSUFBdEMsQ0FBMkMsVUFBU0MsSUFBVCxFQUFlO0FBQ3hESixVQUFRLEdBQUdDLEVBQUUsQ0FBQ0ksSUFBSCxHQUNSQyxHQURRLENBQ0osVUFBU0MsQ0FBVCxFQUFZO0FBQUUsV0FBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBUjtBQUFjLEdBRHhCLEVBRVJELEdBRlEsQ0FFSixVQUFTQyxDQUFULEVBQVk7QUFBRSxXQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFSO0FBQWMsR0FGeEIsRUFHUkMsT0FIUSxDQUdBSixJQUhBLENBQVg7QUFJRCxDQUxEO0FBT2VKLHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7Q0FFQTs7QUFFZSwyRUFBTTtBQUNuQixNQUFNUyxNQUFNLEdBQUc7QUFBRUMsT0FBRyxFQUFFLEVBQVA7QUFBV0MsU0FBSyxFQUFFLEVBQWxCO0FBQXNCQyxVQUFNLEVBQUUsRUFBOUI7QUFBa0NDLFFBQUksRUFBRTtBQUF4QyxHQUFmO0FBQUEsTUFDRUMsS0FBSyxHQUFHLE1BQU1MLE1BQU0sQ0FBQ0ksSUFBYixHQUFvQkosTUFBTSxDQUFDRSxLQURyQztBQUFBLE1BRUVJLE1BQU0sR0FBRyxNQUFNTixNQUFNLENBQUNDLEdBQWIsR0FBbUJELE1BQU0sQ0FBQ0csTUFGckM7QUFJQSxNQUFNSSxXQUFXLEdBQUc7QUFDbEIsZUFBVztBQUNUQyxVQUFJLEVBQUUsQ0FBQ0gsS0FBRCxFQUFRQyxNQUFSLENBREc7QUFFVEcsT0FBQyxFQUFFLFdBQVNYLENBQVQsRUFBWTtBQUNiLGVBQU9BLENBQUMsQ0FBQ1csQ0FBVDtBQUNELE9BSlE7QUFLVEMsT0FBQyxFQUFFLFdBQVNaLENBQVQsRUFBWTtBQUNiLGVBQU9RLE1BQU0sR0FBR1IsQ0FBQyxDQUFDWSxDQUFsQjtBQUNEO0FBUFE7QUFETyxHQUFwQjtBQVlBLE1BQU1DLEdBQUcsR0FBR25CLEVBQUUsQ0FDWG9CLE1BRFMsQ0FDRixNQURFLEVBRVRDLFNBRlMsQ0FFQyxLQUZELEVBR1RsQixJQUhTLENBR0pILEVBQUUsQ0FBQ08sT0FBSCxDQUFXUSxXQUFYLENBSEksRUFJVE8sS0FKUyxHQUtUekIsTUFMUyxDQUtGLEtBTEUsRUFNVDBCLElBTlMsQ0FNSixPQU5JLEVBTUtWLEtBQUssR0FBR0wsTUFBTSxDQUFDSSxJQUFmLEdBQXNCSixNQUFNLENBQUNFLEtBTmxDLEVBT1RhLElBUFMsQ0FPSixRQVBJLEVBT01ULE1BQU0sR0FBR04sTUFBTSxDQUFDQyxHQUFoQixHQUFzQkQsTUFBTSxDQUFDRSxLQVBuQyxFQVFUYixNQVJTLENBUUYsR0FSRSxFQVNUMEIsSUFUUyxDQVNKLFdBVEksRUFTUyxlQUFlZixNQUFNLENBQUNJLElBQXRCLEdBQTZCLEdBQTdCLEdBQW1DSixNQUFNLENBQUNDLEdBQTFDLEdBQWdELEdBVHpELENBQVosQ0FqQm1CLENBNEJuQjs7QUFDQVQsSUFBRSxDQUFDQyxHQUFILENBQU8sNkJBQVAsRUFBc0NDLElBQXRDLENBQTJDLFVBQVNDLElBQVQsRUFBZTtBQUV4RDtBQUNBLFFBQUlKLFFBQVEsR0FBR0MsRUFBRSxDQUFDSSxJQUFILEdBQ1pDLEdBRFksQ0FDUixVQUFTQyxDQUFULEVBQVk7QUFBRSxhQUFPLE1BQVA7QUFBZSxLQURyQixFQUVaRCxHQUZZLENBRVIsVUFBU0MsQ0FBVCxFQUFZO0FBQUUsYUFBT0EsQ0FBQyxDQUFDa0IsSUFBVDtBQUFnQixLQUZ0QixFQUdabkIsR0FIWSxDQUdSLFVBQVNDLENBQVQsRUFBWTtBQUFFLGFBQU9BLENBQUMsQ0FBQ21CLFVBQVQ7QUFBc0IsS0FINUIsRUFJWnBCLEdBSlksQ0FJUixVQUFTQyxDQUFULEVBQVk7QUFBRSxhQUFPQSxDQUFDLENBQUNvQixLQUFUO0FBQWlCLEtBSnZCLEVBS1puQixPQUxZLENBS0pKLElBTEksQ0FBZixDQUh3RCxDQVV4RDtBQUNBOztBQUNBd0IsV0FBTyxDQUFDQyxHQUFSLENBQVk3QixRQUFaO0FBRUFvQixPQUFHLENBQUNVLElBQUosQ0FBUyxVQUFTZCxXQUFULEVBQXNCO0FBQzdCLFVBQUlJLEdBQUcsR0FBR25CLEVBQUUsQ0FBQ29CLE1BQUgsQ0FBVSxJQUFWLENBQVY7QUFBQSxVQUNFVSxDQUFDLEdBQUdmLFdBQVcsQ0FBQ2dCLEtBRGxCLENBRDZCLENBSTdCOztBQUNBLFVBQUlDLE9BQU8sR0FBR2hDLEVBQUUsQ0FBQ2lDLElBQUgsR0FBVWpCLElBQVYsQ0FBZWMsQ0FBQyxDQUFDZCxJQUFqQixDQUFkO0FBRUEsVUFBSWtCLEtBQUssR0FBR2xDLEVBQUUsQ0FBQ21DLFNBQUgsQ0FBYXBDLFFBQWIsQ0FBWjtBQUVBbUMsV0FBSyxHQUFHRixPQUFPLENBQUNFLEtBQUQsQ0FBZjtBQUVBLFVBQUlFLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxXQUFOLEdBQW9CQyxLQUFwQixDQUEwQixDQUExQixDQUFaO0FBQ0QsS0FaRDtBQWFELEdBM0JEO0FBNEJELENBekRELEU7Ozs7Ozs7Ozs7O0FDSkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGNyZWF0ZVRyZWUgZnJvbSBcIi4vc2NyaXB0cy9jcmVhdGVfdHJlZVwiO1xuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoXCJIZWxsbyBXb3JsZFwiKVxuICBjcmVhdGVUcmVlKCk7XG59KSIsImxldCBiYmdfZGF0YTtcbmQzLmNzdihcInNyYy9kYXRhL2JiZ19kYXRhMTkxMjA0LmNzdlwiKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgYmJnX2RhdGEgPSBkMy5uZXN0KClcbiAgICAua2V5KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGRbMF07IH0pXG4gICAgLmtleShmdW5jdGlvbihkKSB7IHJldHVybiBkWzFdOyB9KVxuICAgIC5lbnRyaWVzKGRhdGEpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYmJnX2RhdGE7XG4iLCJpbXBvcnQgYmJnX2RhdGEgZnJvbSBcIi4vY29udmVydF9kYXRhXCI7XG5cbi8vIGltcG9ydCB7YmJnRGF0YX0gZnJvbSBcIi4vZGF0YS9iYmdfZGF0YV90ZXN0X3NsaWNlLmNzdlwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiA3NSwgcmlnaHQ6IDc1LCBib3R0b206IDc1LCBsZWZ0OiA3NSB9LFxuICAgIHdpZHRoID0gNjAwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0ID0gNjAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgY29uc3Qgb3JpZW50YXRpb24gPSB7XG4gICAgXCJncm93LXVwXCI6IHtcbiAgICAgIHNpemU6IFt3aWR0aCwgaGVpZ2h0XSxcbiAgICAgIHg6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQueDtcbiAgICAgIH0sXG4gICAgICB5OiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBoZWlnaHQgLSBkLnk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN2ZyA9IGQzXG4gICAgLnNlbGVjdChcImJvZHlcIilcbiAgICAuc2VsZWN0QWxsKFwic3ZnXCIpXG4gICAgLmRhdGEoZDMuZW50cmllcyhvcmllbnRhdGlvbikpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4ucmlnaHQpXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gIC8vIENvbnZlcnQgY3N2IGRhdGEgPT4gZWFjaCByb3cgYmVjb21lcyBhbiBvYmplY3Qgd2l0aCBjb2x1bW5zIGFzIGtleXNcbiAgZDMuY3N2KFwic3JjL2RhdGEvYmJnX2RhdGExOTEyMDQuY3N2XCIpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgIFxuICAgIC8vIENvbnZlcnQgZGF0YSB0byBoaWVyYXJjaGljYWwgc3RydWN0dXJlXG4gICAgbGV0IGJiZ19kYXRhID0gZDMubmVzdCgpXG4gICAgICAua2V5KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwicm9vdFwiIH0pXG4gICAgICAua2V5KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuaG9tZTsgfSlcbiAgICAgIC5rZXkoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5jb2xsZWN0aW9uOyB9KVxuICAgICAgLmtleShmdW5jdGlvbihkKSB7IHJldHVybiBkLmdlbnVzOyB9KVxuICAgICAgLmVudHJpZXMoZGF0YSlcblxuICAgIC8vIFRlc3QgdGhlIGRhdGEgc3RydWN0dXJlXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc29sZS5sb2coYmJnX2RhdGEpO1xuXG4gICAgc3ZnLmVhY2goZnVuY3Rpb24ob3JpZW50YXRpb24pIHtcbiAgICAgIGxldCBzdmcgPSBkMy5zZWxlY3QodGhpcyksXG4gICAgICAgIG8gPSBvcmllbnRhdGlvbi52YWx1ZTtcblxuICAgICAgLy8gTGF5b3V0IHRoZSB0cmVlXG4gICAgICBsZXQgdHJlZW1hcCA9IGQzLnRyZWUoKS5zaXplKG8uc2l6ZSk7XG5cbiAgICAgIGxldCBub2RlcyA9IGQzLmhpZXJhcmNoeShiYmdfZGF0YSk7XG5cbiAgICAgIG5vZGVzID0gdHJlZW1hcChub2Rlcyk7XG5cbiAgICAgIGxldCBsaW5rcyA9IG5vZGVzLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSlcbiAgICB9KVxuICB9KTtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9