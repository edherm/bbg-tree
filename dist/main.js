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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NyZWF0ZV90cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9kYzJhIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmQiLCJjcmVhdGVUcmVlIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJvcmllbnRhdGlvbnMiLCJzaXplIiwieCIsImQiLCJ5Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZW50cmllcyIsImVudGVyIiwiYXR0ciIsImNzdiIsInRoZW4iLCJiYmdfZGF0YSIsIm5lc3QiLCJrZXkiLCJob21lIiwiY29sbGVjdGlvbiIsImdlbnVzIiwiZm9yRWFjaCIsIm5hbWUiLCJjaGlsZHJlbiIsInZhbHVlcyIsImNoaWxkIiwiZ3JhbmRjaGlsZCIsImdyZWF0Z3JhbmRjaGlsZCIsImhpZXJhcmNoaWNhbF9kYXRhIiwibWFwIiwiZWFjaCIsIm9yaWVudGF0aW9uIiwibyIsInZhbHVlIiwidHJlZW1hcCIsInRyZWUiLCJub2RlcyIsImhpZXJhcmNoeSIsImxpbmtzIiwiZGVzY2VuZGFudHMiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJwYXJlbnQiLCJub2RlIiwidGV4dCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztR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QWVBOEIsQ0FBQyxDQUFDNUIsQ0FBRixDQUFJRCxDQUFDLENBQUN3QyxNQUFOLENBaEJGO0FBbUJELE9BekJILEVBbEI2QixDQTRDM0I7O0FBQ0EsVUFBSUMsSUFBSSxHQUFHdkMsR0FBRyxDQUNYRyxTQURRLENBQ0UsT0FERixFQUVSQyxJQUZRLENBRUgyQixLQUFLLENBQUNHLFdBQU4sRUFGRyxFQUdSNUIsS0FIUSxHQUlScEIsTUFKUSxDQUlELEdBSkMsQ0FBWDtBQUtBcUQsVUFBSSxDQUNEckQsTUFESCxDQUNVLFFBRFYsRUFFR3FCLElBRkgsQ0FFUSxPQUZSLEVBRWlCLE1BRmpCLEVBR0dBLElBSEgsQ0FHUSxHQUhSLEVBR2EsR0FIYixFQUlHQSxJQUpILENBSVEsSUFKUixFQUljb0IsQ0FBQyxDQUFDOUIsQ0FKaEIsRUFLR1UsSUFMSCxDQUtRLElBTFIsRUFLY29CLENBQUMsQ0FBQzVCLENBTGhCO0FBT0F3QyxVQUFJLENBQ0RyRCxNQURILENBQ1UsTUFEVixFQUVHc0QsSUFGSCxDQUVRLFVBQVMxQyxDQUFULEVBQVk7QUFDaEIsZUFBT0EsQ0FBQyxDQUFDTSxJQUFGLENBQU9RLEdBQWQ7QUFDRCxPQUpILEVBS0dMLElBTEgsQ0FLUSxHQUxSLEVBS2FvQixDQUFDLENBQUM5QixDQUxmLEVBTUdVLElBTkgsQ0FNUSxJQU5SLEVBTWMsQ0FOZCxFQU9HQSxJQVBILENBT1EsR0FQUixFQU9hb0IsQ0FBQyxDQUFDNUIsQ0FQZjtBQVFILEtBakVEO0FBbUVELEdBekdEO0FBMEdELENBdklELEU7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGNyZWF0ZVRyZWUgZnJvbSBcIi4vc2NyaXB0cy9jcmVhdGVfdHJlZVwiO1xuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoXCJIZWxsbyBXb3JsZFwiKVxuICBjcmVhdGVUcmVlKCk7XG59KSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgbWFyZ2luID0geyB0b3A6IDc1LCByaWdodDogNzUsIGJvdHRvbTogNzUsIGxlZnQ6IDc1IH0sXG4gICAgd2lkdGggPSAxNDAwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0ID0gNjAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgY29uc3Qgb3JpZW50YXRpb25zID0ge1xuICAgIFwiZ3Jvdy11cFwiOiB7XG4gICAgICBzaXplOiBbd2lkdGgsIGhlaWdodF0sXG4gICAgICB4OiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLng7XG4gICAgICB9LFxuICAgICAgeTogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gaGVpZ2h0IC0gZC55O1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdmcgPSBkM1xuICAgIC5zZWxlY3QoXCJib2R5XCIpXG4gICAgLnNlbGVjdEFsbChcInN2Z1wiKVxuICAgIC5kYXRhKGQzLmVudHJpZXMob3JpZW50YXRpb25zKSlcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5yaWdodClcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgLy8gTG9hZCBhbmQgY29udmVydCBjc3YgZGF0YSA9PiBlYWNoIHJvdyBiZWNvbWVzIGFuIG9iamVjdCB3aXRoIGNvbHVtbnMgYXMga2V5c1xuICBkMy5jc3YoXCJzcmMvZGF0YS9iYmdfZGF0YTE5MTIwNC5jc3ZcIikudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgXG4gICAgLy8gQ29udmVydCBkYXRhIHRvIGhpZXJhcmNoaWNhbCBzdHJ1Y3R1cmVcbiAgICBsZXQgYmJnX2RhdGEgPSBkMy5uZXN0KClcbiAgICAgIC5rZXkoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgfSlcbiAgICAgIC5rZXkoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5ob21lO1xuICAgICAgfSlcbiAgICAgIC5rZXkoZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgcmV0dXJuIGQuY29sbGVjdGlvbjsgXG4gICAgICB9KVxuICAgICAgLmtleShmdW5jdGlvbihkKSB7IFxuICAgICAgICByZXR1cm4gZC5nZW51czsgXG4gICAgICB9KVxuICAgICAgLmVudHJpZXMoZGF0YSlcblxuICAgIC8vIEZvcmNlIGRhdGEgaW50byBjb3JyZWN0IGZvcm1hdCBmb3IgZDMuaGllcmFyY2h5IGFuZCAudHJlZVxuICAgIGJiZ19kYXRhLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgZC5uYW1lID0gZC5rZXk7XG4gICAgICBkLmNoaWxkcmVuID0gZC52YWx1ZXM7XG4gICAgICBkLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpe1xuICAgICAgICBjaGlsZC5uYW1lID0gY2hpbGQua2V5O1xuICAgICAgICBjaGlsZC5jaGlsZHJlbiA9IGNoaWxkLnZhbHVlcztcbiAgICAgICAgY2hpbGQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihncmFuZGNoaWxkKSB7XG4gICAgICAgICAgZ3JhbmRjaGlsZC5uYW1lID0gZ3JhbmRjaGlsZC5rZXk7XG4gICAgICAgICAgZ3JhbmRjaGlsZC5jaGlsZHJlbiA9IGdyYW5kY2hpbGQudmFsdWVzO1xuICAgICAgICAgIGdyYW5kY2hpbGQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihncmVhdGdyYW5kY2hpbGQpIHtcbiAgICAgICAgICAgIGdyZWF0Z3JhbmRjaGlsZC5uYW1lID0gZ3JlYXRncmFuZGNoaWxkLmtleTtcbiAgICAgICAgICAgIGdyZWF0Z3JhbmRjaGlsZC5jaGlsZHJlbiA9IGdyZWF0Z3JhbmRjaGlsZC52YWx1ZXM7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IGhpZXJhcmNoaWNhbF9kYXRhID0gYmJnX2RhdGEubWFwXG5cbiAgICBzdmcuZWFjaChmdW5jdGlvbihvcmllbnRhdGlvbikge1xuICAgICAgXG4gICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QodGhpcyksXG4gICAgICAgIG8gPSBvcmllbnRhdGlvbi52YWx1ZTtcblxuICAgICAgLy8gQ3JlYXRlIGEgdHJlZVxuICAgICAgbGV0IHRyZWVtYXAgPSBkMy50cmVlKCkuc2l6ZShvLnNpemUpO1xuXG4gICAgICBsZXQgbm9kZXMgPSBkMy5oaWVyYXJjaHkoLi4uYmJnX2RhdGEpO1xuICAgICAgXG4gICAgICBub2RlcyA9IHRyZWVtYXAobm9kZXMpO1xuXG4gICAgICBkZWJ1Z2dlclxuICAgICAgbGV0IGxpbmtzID0gbm9kZXMuZGVzY2VuZGFudHMoKS5zbGljZSgxKTtcblxuICAgICAgY29uc29sZS5sb2cobGlua3MpXG5cbiAgICAgIC8vIExpbmsgbGluZXNcbiAgICAgIHN2Zy5zZWxlY3RBbGwoXCIubGlua1wiKVxuICAgICAgICAuZGF0YShsaW5rcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmtcIilcbiAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgXCJNXCIgK1xuICAgICAgICAgICAgZC54ICtcbiAgICAgICAgICAgIFwiLFwiICtcbiAgICAgICAgICAgIG8ueShkKSArXG4gICAgICAgICAgICBcIkNcIiArXG4gICAgICAgICAgICBkLnggK1xuICAgICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgICAgKG8ueShkKSArIG8ueShkLnBhcmVudCkpIC8gMiArXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICBkLnBhcmVudC54ICtcbiAgICAgICAgICAgIFwiLFwiICtcbiAgICAgICAgICAgIChvLnkoZCkgKyBvLnkoZC5wYXJlbnQpKSAvIDIgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgZC5wYXJlbnQueCArXG4gICAgICAgICAgICBcIixcIiArXG4gICAgICAgICAgICBvLnkoZC5wYXJlbnQpXG4gICAgICAgICAgKTtcblxuICAgICAgICB9KVxuICAgICAgICAvLyBDcmVhdGUgbm9kZSBjaXJjbGVzXG4gICAgICAgIHZhciBub2RlID0gc3ZnXG4gICAgICAgICAgLnNlbGVjdEFsbChcIi5ub2RlXCIpXG4gICAgICAgICAgLmRhdGEobm9kZXMuZGVzY2VuZGFudHMoKSlcbiAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgIC5hcHBlbmQoXCJnXCIpO1xuICAgICAgICBub2RlXG4gICAgICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJub2RlXCIpXG4gICAgICAgICAgLmF0dHIoXCJyXCIsIDQuNSlcbiAgICAgICAgICAuYXR0cihcImN4XCIsIG8ueClcbiAgICAgICAgICAuYXR0cihcImN5XCIsIG8ueSk7XG5cbiAgICAgICAgbm9kZVxuICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQuZGF0YS5rZXk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuYXR0cihcInhcIiwgby54KVxuICAgICAgICAgIC5hdHRyKFwiZHhcIiwgNSlcbiAgICAgICAgICAuYXR0cihcInlcIiwgby55KTtcbiAgICB9KVxuICAgIFxuICB9KTtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9