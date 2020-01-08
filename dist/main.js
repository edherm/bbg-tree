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

/***/ "./src/scripts/create_tree.js":
/*!************************************!*\
  !*** ./src/scripts/create_tree.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var margin = {
    top: 75,
    right: 75,
    bottom: 75,
    left: 75
  },
      width = 1400 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;
  var orientations = {
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
  var svg = d3.select("body").selectAll("svg").data(d3.entries(orientations)).enter().append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.right).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // Load and convert csv data => each row becomes an object with columns as keys

  d3.csv("src/data/bbg_data191204.csv").then(function (data) {
    // Convert data to hierarchical structure
    var bbg_data = d3.nest().key(function (d) {
      return "";
    }).key(function (d) {
      return d.home;
    }).key(function (d) {
      return d.collection;
    }).key(function (d) {
      return d.genus;
    }).entries(data); // Force data into correct format for d3.hierarchy and .tree

    bbg_data.forEach(function (d) {
      d.name = d.key;
      d.children = d.values;
      d.children.forEach(function (child) {
        child.name = child.key;
        child.children = child.values;
        child.children.forEach(function (grandchild) {
          grandchild.name = grandchild.key;
          grandchild.children = grandchild.values;
          grandchild.children.forEach(function (greatgrandchild) {
            greatgrandchild.name = greatgrandchild.key;
            greatgrandchild.children = greatgrandchild.values;
          });
        });
      });
    });
    var hierarchical_data = bbg_data.map;
    svg.each(function (orientation) {
      var _d;

      var svg = d3.select(this),
          o = orientation.value; // Create a tree

      var treemap = d3.tree().size(o.size);

      var nodes = (_d = d3).hierarchy.apply(_d, _toConsumableArray(bbg_data));

      nodes = treemap(nodes);
      debugger;
      var links = nodes.descendants().slice(1);
      console.log(links); // Link lines

      svg.selectAll(".link").data(links).enter().append("path").attr("class", "link").attr("d", function (d) {
        return "M" + d.x + "," + o.y(d) + "C" + d.x + "," + (o.y(d) + o.y(d.parent)) / 2 + " " + d.parent.x + "," + (o.y(d) + o.y(d.parent)) / 2 + " " + d.parent.x + "," + o.y(d.parent);
      }); // Create node circles

      var node = svg.selectAll(".node").data(nodes.descendants()).enter().append("g");
      node.append("circle").attr("class", "node").attr("r", 4.5).attr("cx", o.x).attr("cy", o.y);
      node.append("text").text(function (d) {
        return d.data.key;
      }).attr("x", o.x).attr("dx", 5).attr("y", o.y);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NyZWF0ZV90cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kIiwiY3JlYXRlVHJlZSIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0Iiwib3JpZW50YXRpb25zIiwic2l6ZSIsIngiLCJkIiwieSIsInN2ZyIsImQzIiwic2VsZWN0Iiwic2VsZWN0QWxsIiwiZGF0YSIsImVudHJpZXMiLCJlbnRlciIsImF0dHIiLCJjc3YiLCJ0aGVuIiwiYmJnX2RhdGEiLCJuZXN0Iiwia2V5IiwiaG9tZSIsImNvbGxlY3Rpb24iLCJnZW51cyIsImZvckVhY2giLCJuYW1lIiwiY2hpbGRyZW4iLCJ2YWx1ZXMiLCJjaGlsZCIsImdyYW5kY2hpbGQiLCJncmVhdGdyYW5kY2hpbGQiLCJoaWVyYXJjaGljYWxfZGF0YSIsIm1hcCIsImVhY2giLCJvcmllbnRhdGlvbiIsIm8iLCJ2YWx1ZSIsInRyZWVtYXAiLCJ0cmVlIiwibm9kZXMiLCJoaWVyYXJjaHkiLCJsaW5rcyIsImRlc2NlbmRhbnRzIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwicGFyZW50Iiwibm9kZSIsInRleHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtR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LENBQUMsQ0FBQzVCLENBQUYsQ0FBSUQsQ0FBQyxDQUFDd0MsTUFBTixDQWhCRjtBQW1CRCxPQXpCSCxFQWxCNkIsQ0E0QzNCOztBQUNBLFVBQUlDLElBQUksR0FBR3ZDLEdBQUcsQ0FDWEcsU0FEUSxDQUNFLE9BREYsRUFFUkMsSUFGUSxDQUVIMkIsS0FBSyxDQUFDRyxXQUFOLEVBRkcsRUFHUjVCLEtBSFEsR0FJUnBCLE1BSlEsQ0FJRCxHQUpDLENBQVg7QUFLQXFELFVBQUksQ0FDRHJELE1BREgsQ0FDVSxRQURWLEVBRUdxQixJQUZILENBRVEsT0FGUixFQUVpQixNQUZqQixFQUdHQSxJQUhILENBR1EsR0FIUixFQUdhLEdBSGIsRUFJR0EsSUFKSCxDQUlRLElBSlIsRUFJY29CLENBQUMsQ0FBQzlCLENBSmhCLEVBS0dVLElBTEgsQ0FLUSxJQUxSLEVBS2NvQixDQUFDLENBQUM1QixDQUxoQjtBQU9Bd0MsVUFBSSxDQUNEckQsTUFESCxDQUNVLE1BRFYsRUFFR3NELElBRkgsQ0FFUSxVQUFTMUMsQ0FBVCxFQUFZO0FBQ2hCLGVBQU9BLENBQUMsQ0FBQ00sSUFBRixDQUFPUSxHQUFkO0FBQ0QsT0FKSCxFQUtHTCxJQUxILENBS1EsR0FMUixFQUthb0IsQ0FBQyxDQUFDOUIsQ0FMZixFQU1HVSxJQU5ILENBTVEsSUFOUixFQU1jLENBTmQsRUFPR0EsSUFQSCxDQU9RLEdBUFIsRUFPYW9CLENBQUMsQ0FBQzVCLENBUGY7QUFRSCxLQWpFRDtBQW1FRCxHQXpHRDtBQTBHRCxDQXZJRCxFOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBjcmVhdGVUcmVlIGZyb20gXCIuL3NjcmlwdHMvY3JlYXRlX3RyZWVcIjtcblxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKFwiSGVsbG8gV29ybGRcIilcbiAgY3JlYXRlVHJlZSgpO1xufSkiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiA3NSwgcmlnaHQ6IDc1LCBib3R0b206IDc1LCBsZWZ0OiA3NSB9LFxuICAgIHdpZHRoID0gMTQwMCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuICAgIGhlaWdodCA9IDYwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gIGNvbnN0IG9yaWVudGF0aW9ucyA9IHtcbiAgICBcImdyb3ctdXBcIjoge1xuICAgICAgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLFxuICAgICAgeDogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC54O1xuICAgICAgfSxcbiAgICAgIHk6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGhlaWdodCAtIGQueTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3ZnID0gZDNcbiAgICAuc2VsZWN0KFwiYm9keVwiKVxuICAgIC5zZWxlY3RBbGwoXCJzdmdcIilcbiAgICAuZGF0YShkMy5lbnRyaWVzKG9yaWVudGF0aW9ucykpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4ucmlnaHQpXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gIC8vIExvYWQgYW5kIGNvbnZlcnQgY3N2IGRhdGEgPT4gZWFjaCByb3cgYmVjb21lcyBhbiBvYmplY3Qgd2l0aCBjb2x1bW5zIGFzIGtleXNcbiAgZDMuY3N2KFwic3JjL2RhdGEvYmJnX2RhdGExOTEyMDQuY3N2XCIpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgIFxuICAgIC8vIENvbnZlcnQgZGF0YSB0byBoaWVyYXJjaGljYWwgc3RydWN0dXJlXG4gICAgbGV0IGJiZ19kYXRhID0gZDMubmVzdCgpXG4gICAgICAua2V5KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgIH0pXG4gICAgICAua2V5KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaG9tZTtcbiAgICAgIH0pXG4gICAgICAua2V5KGZ1bmN0aW9uKGQpIHsgXG4gICAgICAgIHJldHVybiBkLmNvbGxlY3Rpb247IFxuICAgICAgfSlcbiAgICAgIC5rZXkoZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgcmV0dXJuIGQuZ2VudXM7IFxuICAgICAgfSlcbiAgICAgIC5lbnRyaWVzKGRhdGEpXG5cbiAgICAvLyBGb3JjZSBkYXRhIGludG8gY29ycmVjdCBmb3JtYXQgZm9yIGQzLmhpZXJhcmNoeSBhbmQgLnRyZWVcbiAgICBiYmdfZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGQubmFtZSA9IGQua2V5O1xuICAgICAgZC5jaGlsZHJlbiA9IGQudmFsdWVzO1xuICAgICAgZC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKXtcbiAgICAgICAgY2hpbGQubmFtZSA9IGNoaWxkLmtleTtcbiAgICAgICAgY2hpbGQuY2hpbGRyZW4gPSBjaGlsZC52YWx1ZXM7XG4gICAgICAgIGNoaWxkLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oZ3JhbmRjaGlsZCkge1xuICAgICAgICAgIGdyYW5kY2hpbGQubmFtZSA9IGdyYW5kY2hpbGQua2V5O1xuICAgICAgICAgIGdyYW5kY2hpbGQuY2hpbGRyZW4gPSBncmFuZGNoaWxkLnZhbHVlcztcbiAgICAgICAgICBncmFuZGNoaWxkLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oZ3JlYXRncmFuZGNoaWxkKSB7XG4gICAgICAgICAgICBncmVhdGdyYW5kY2hpbGQubmFtZSA9IGdyZWF0Z3JhbmRjaGlsZC5rZXk7XG4gICAgICAgICAgICBncmVhdGdyYW5kY2hpbGQuY2hpbGRyZW4gPSBncmVhdGdyYW5kY2hpbGQudmFsdWVzO1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBjb25zdCBoaWVyYXJjaGljYWxfZGF0YSA9IGJiZ19kYXRhLm1hcFxuXG4gICAgc3ZnLmVhY2goZnVuY3Rpb24ob3JpZW50YXRpb24pIHtcbiAgICAgIFxuICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHRoaXMpLFxuICAgICAgICBvID0gb3JpZW50YXRpb24udmFsdWU7XG5cbiAgICAgIC8vIENyZWF0ZSBhIHRyZWVcbiAgICAgIGxldCB0cmVlbWFwID0gZDMudHJlZSgpLnNpemUoby5zaXplKTtcblxuICAgICAgbGV0IG5vZGVzID0gZDMuaGllcmFyY2h5KC4uLmJiZ19kYXRhKTtcbiAgICAgIFxuICAgICAgbm9kZXMgPSB0cmVlbWFwKG5vZGVzKTtcblxuICAgICAgZGVidWdnZXJcbiAgICAgIGxldCBsaW5rcyA9IG5vZGVzLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGxpbmtzKVxuXG4gICAgICAvLyBMaW5rIGxpbmVzXG4gICAgICBzdmcuc2VsZWN0QWxsKFwiLmxpbmtcIilcbiAgICAgICAgLmRhdGEobGlua3MpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rXCIpXG4gICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFwiTVwiICtcbiAgICAgICAgICAgIGQueCArXG4gICAgICAgICAgICBcIixcIiArXG4gICAgICAgICAgICBvLnkoZCkgK1xuICAgICAgICAgICAgXCJDXCIgK1xuICAgICAgICAgICAgZC54ICtcbiAgICAgICAgICAgIFwiLFwiICtcbiAgICAgICAgICAgIChvLnkoZCkgKyBvLnkoZC5wYXJlbnQpKSAvIDIgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgZC5wYXJlbnQueCArXG4gICAgICAgICAgICBcIixcIiArXG4gICAgICAgICAgICAoby55KGQpICsgby55KGQucGFyZW50KSkgLyAyICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIGQucGFyZW50LnggK1xuICAgICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgICAgby55KGQucGFyZW50KVxuICAgICAgICAgICk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgLy8gQ3JlYXRlIG5vZGUgY2lyY2xlc1xuICAgICAgICB2YXIgbm9kZSA9IHN2Z1xuICAgICAgICAgIC5zZWxlY3RBbGwoXCIubm9kZVwiKVxuICAgICAgICAgIC5kYXRhKG5vZGVzLmRlc2NlbmRhbnRzKCkpXG4gICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAuYXBwZW5kKFwiZ1wiKTtcbiAgICAgICAgbm9kZVxuICAgICAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibm9kZVwiKVxuICAgICAgICAgIC5hdHRyKFwiclwiLCA0LjUpXG4gICAgICAgICAgLmF0dHIoXCJjeFwiLCBvLngpXG4gICAgICAgICAgLmF0dHIoXCJjeVwiLCBvLnkpO1xuXG4gICAgICAgIG5vZGVcbiAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmRhdGEua2V5O1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmF0dHIoXCJ4XCIsIG8ueClcbiAgICAgICAgICAuYXR0cihcImR4XCIsIDUpXG4gICAgICAgICAgLmF0dHIoXCJ5XCIsIG8ueSk7XG4gICAgfSlcbiAgICBcbiAgfSk7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==