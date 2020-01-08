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

/***/ "./src/scripts/convert_fetched_data.js":
/*!*********************************************!*\
  !*** ./src/scripts/convert_fetched_data.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (fetchedData) {
  // Convert data to hierarchical structure
  var hierarchicalData = d3.nest().key(function (d) {
    return d.home;
  }).key(function (d) {
    return d.collection;
  }).key(function (d) {
    return d.genus;
  }).entries(fetchedData); // Correct key/value format for d3.hierarchy and .tree

  var shapedHierarchicalData = {
    "name": "",
    "children": hierarchicalData.map(function (home) {
      return {
        "name": home.key,
        "children": home.values.map(function (collection) {
          return {
            "name": collection.key,
            "children": collection.values.map(function (genus) {
              return {
                "name": genus.key,
                "children": genus.values.map(function (specimen) {
                  var collection = specimen.collection,
                      genus = specimen.genus,
                      species = specimen.species,
                      commonName = specimen.commonName,
                      family = specimen.family,
                      accession = specimen.accession,
                      provenance = specimen.provenance;
                  return {
                    "name": {
                      "collection": collection,
                      "family": family,
                      "latinName": "".concat(genus, " ").concat(species),
                      "commonName": commonName,
                      "accession": accession,
                      "provenance": provenance
                    }
                  };
                })
              };
            })
          };
        })
      };
    })
  }; // collection,genus,species,commonName,family,accession,provenance
  // hierarchicalData.forEach(function(d) {
  //   d.name = d.key;
  //   d.children = d.values;
  //   d.children.forEach(function(child){
  //     child.name = child.key;
  //     child.children = child.values;
  //     child.children.forEach(function(grandchild) {
  //       grandchild.name = grandchild.key;
  //       grandchild.children = grandchild.values;
  //       grandchild.children.forEach(function(greatgrandchild) {
  //         greatgrandchild.name = greatgrandchild.key;
  //         greatgrandchild.children = greatgrandchild.values;
  //       })
  //     })
  //   })
  // })

  return shapedHierarchicalData;
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
/* harmony import */ var _convert_fetched_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert_fetched_data */ "./src/scripts/convert_fetched_data.js");


var branchLvl = function branchLvl(d) {
  if (d.depth === 4) {
    return "link upperBranches";
  } else if (d.depth === 3) {
    return "link middleBranches";
  } else if (d.depth === 2) {
    return "link lowerBranches";
  } else {
    return "link trunk";
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var margin = {
    top: 25,
    right: 25,
    bottom: 25,
    left: 25
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
    var bbg_data = Object(_convert_fetched_data__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    svg.each(function (orientation) {
      var svg = d3.select(this),
          o = orientation.value; // Create tree

      var treemap = d3.tree().size(o.size);
      var nodes = d3.hierarchy(bbg_data);
      nodes = treemap(nodes); // Render and classify all links

      var links = nodes.descendants().slice(1);
      svg.selectAll(".link").data(links).enter().append("path").attr("class", function (d) {
        return branchLvl(d);
      }).attr("d", function (d) {
        return "M" + d.x + "," + o.y(d) + "C" + d.x + "," + (o.y(d) + o.y(d.parent)) / 2 + " " + d.parent.x + "," + (o.y(d) + o.y(d.parent)) / 2 + " " + d.parent.x + "," + o.y(d.parent);
      }); // Group branch and leaf nodes

      var branchNodes = [];
      var leafNodes = [];
      nodes.descendants().forEach(function (node) {
        if (node.depth === 4) {
          leafNodes.push(node);
        } else {
          branchNodes.push(node);
        }
      }); // Create leafNode diamonds

      var leafNode = svg.selectAll(".leafNode").data(leafNodes).enter().append("g");
      leafNode.append("circle").attr("class", ".leafNode").attr("r", 4.5).attr("cx", o.x).attr("cy", o.y); // Create branchNode circles

      var branchNode = svg.selectAll(".branchNode").data(branchNodes).enter().append("g");
      branchNode.append("circle").attr("class", "branchNode").attr("r", 4.5).attr("cx", o.x).attr("cy", o.y);
      branchNode.append("text").text(function (d) {
        return d.data.name;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnZlcnRfZmV0Y2hlZF9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NyZWF0ZV90cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kIiwiY3JlYXRlVHJlZSIsImZldGNoZWREYXRhIiwiaGllcmFyY2hpY2FsRGF0YSIsImQzIiwibmVzdCIsImtleSIsImQiLCJob21lIiwiY29sbGVjdGlvbiIsImdlbnVzIiwiZW50cmllcyIsInNoYXBlZEhpZXJhcmNoaWNhbERhdGEiLCJtYXAiLCJ2YWx1ZXMiLCJzcGVjaW1lbiIsInNwZWNpZXMiLCJjb21tb25OYW1lIiwiZmFtaWx5IiwiYWNjZXNzaW9uIiwicHJvdmVuYW5jZSIsImJyYW5jaEx2bCIsImRlcHRoIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJvcmllbnRhdGlvbnMiLCJzaXplIiwieCIsInkiLCJzdmciLCJzZWxlY3QiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZW50ZXIiLCJhdHRyIiwiY3N2IiwidGhlbiIsImJiZ19kYXRhIiwiY29udmVydEZldGNoZWREYXRhIiwiZWFjaCIsIm9yaWVudGF0aW9uIiwibyIsInZhbHVlIiwidHJlZW1hcCIsInRyZWUiLCJub2RlcyIsImhpZXJhcmNoeSIsImxpbmtzIiwiZGVzY2VuZGFudHMiLCJzbGljZSIsInBhcmVudCIsImJyYW5jaE5vZGVzIiwibGVhZk5vZGVzIiwiZm9yRWFjaCIsIm5vZGUiLCJwdXNoIiwibGVhZk5vZGUiLCJicmFuY2hOb2RlIiwidGV4dCIsIm5hbWUiXSwibWFwcGluZ3Mi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RUFHYSxHQUhiLEVBSUdBLElBSkgsQ0FJUSxJQUpSLEVBSWNPLENBQUMsQ0FBQ2QsQ0FKaEIsRUFLR08sSUFMSCxDQUtRLElBTFIsRUFLY08sQ0FBQyxDQUFDYixDQUxoQjtBQU9BNkIsZ0JBQVUsQ0FDUDlELE1BREgsQ0FDVSxNQURWLEVBRUcrRCxJQUZILENBRVEsVUFBU3hELENBQVQsRUFBWTtBQUNoQixlQUFPQSxDQUFDLENBQUM4QixJQUFGLENBQU8yQixJQUFkO0FBQ0QsT0FKSCxFQUtHekIsSUFMSCxDQUtRLEdBTFIsRUFLYU8sQ0FBQyxDQUFDZCxDQUxmLEVBTUdPLElBTkgsQ0FNUSxJQU5SLEVBTWMsQ0FOZCxFQU9HQSxJQVBILENBT1EsR0FQUixFQU9hTyxDQUFDLENBQUNiLENBUGY7QUFVRCxLQXZGRDtBQXlGRCxHQTlGRDtBQStGRCxDQTVIRCxFOzs7Ozs7Ozs7OztBQ2RBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBjcmVhdGVUcmVlIGZyb20gXCIuL3NjcmlwdHMvY3JlYXRlX3RyZWVcIjtcblxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKFwiSGVsbG8gV29ybGRcIilcbiAgY3JlYXRlVHJlZSgpO1xufSkiLCJleHBvcnQgZGVmYXVsdCAoZmV0Y2hlZERhdGEpID0+IHtcbiAgLy8gQ29udmVydCBkYXRhIHRvIGhpZXJhcmNoaWNhbCBzdHJ1Y3R1cmVcbiAgICBjb25zdCBoaWVyYXJjaGljYWxEYXRhID0gZDMubmVzdCgpXG4gICAgICAua2V5KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaG9tZTtcbiAgICAgIH0pXG4gICAgICAua2V5KGZ1bmN0aW9uKGQpIHsgXG4gICAgICAgIHJldHVybiBkLmNvbGxlY3Rpb247IFxuICAgICAgfSlcbiAgICAgIC5rZXkoZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgcmV0dXJuIGQuZ2VudXM7IFxuICAgICAgfSlcbiAgICAgIC5lbnRyaWVzKGZldGNoZWREYXRhKVxuXG4gICAgLy8gQ29ycmVjdCBrZXkvdmFsdWUgZm9ybWF0IGZvciBkMy5oaWVyYXJjaHkgYW5kIC50cmVlXG4gICAgY29uc3Qgc2hhcGVkSGllcmFyY2hpY2FsRGF0YSA9IHtcbiAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBoaWVyYXJjaGljYWxEYXRhLm1hcChob21lID0+IHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFwibmFtZVwiOiBob21lLmtleSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IGhvbWUudmFsdWVzLm1hcChjb2xsZWN0aW9uID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IGNvbGxlY3Rpb24ua2V5LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IGNvbGxlY3Rpb24udmFsdWVzLm1hcChnZW51cyA9PiB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IGdlbnVzLmtleSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogZ2VudXMudmFsdWVzLm1hcChzcGVjaW1lbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtjb2xsZWN0aW9uLGdlbnVzLHNwZWNpZXMsY29tbW9uTmFtZSxmYW1pbHksYWNjZXNzaW9uLHByb3ZlbmFuY2V9ID0gc3BlY2ltZW47XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOiBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogZmFtaWx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYXRpbk5hbWVcIjogYCR7Z2VudXN9ICR7c3BlY2llc31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21tb25OYW1lXCI6IGNvbW1vbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFjY2Vzc2lvblwiOiBhY2Nlc3Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb3ZlbmFuY2VcIjogcHJvdmVuYW5jZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBjb2xsZWN0aW9uLGdlbnVzLHNwZWNpZXMsY29tbW9uTmFtZSxmYW1pbHksYWNjZXNzaW9uLHByb3ZlbmFuY2VcbiAgICAvLyBoaWVyYXJjaGljYWxEYXRhLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgIC8vICAgZC5uYW1lID0gZC5rZXk7XG4gICAgLy8gICBkLmNoaWxkcmVuID0gZC52YWx1ZXM7XG4gICAgLy8gICBkLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpe1xuICAgIC8vICAgICBjaGlsZC5uYW1lID0gY2hpbGQua2V5O1xuICAgIC8vICAgICBjaGlsZC5jaGlsZHJlbiA9IGNoaWxkLnZhbHVlcztcbiAgICAvLyAgICAgY2hpbGQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihncmFuZGNoaWxkKSB7XG4gICAgLy8gICAgICAgZ3JhbmRjaGlsZC5uYW1lID0gZ3JhbmRjaGlsZC5rZXk7XG4gICAgLy8gICAgICAgZ3JhbmRjaGlsZC5jaGlsZHJlbiA9IGdyYW5kY2hpbGQudmFsdWVzO1xuICAgIC8vICAgICAgIGdyYW5kY2hpbGQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihncmVhdGdyYW5kY2hpbGQpIHtcbiAgICAvLyAgICAgICAgIGdyZWF0Z3JhbmRjaGlsZC5uYW1lID0gZ3JlYXRncmFuZGNoaWxkLmtleTtcbiAgICAvLyAgICAgICAgIGdyZWF0Z3JhbmRjaGlsZC5jaGlsZHJlbiA9IGdyZWF0Z3JhbmRjaGlsZC52YWx1ZXM7XG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH0pXG4gICAgLy8gfSlcblxuICByZXR1cm4gc2hhcGVkSGllcmFyY2hpY2FsRGF0YTtcbn0iLCJpbXBvcnQgY29udmVydEZldGNoZWREYXRhIGZyb20gXCIuL2NvbnZlcnRfZmV0Y2hlZF9kYXRhXCI7XG5cbmNvbnN0IGJyYW5jaEx2bCA9IChkKSA9PiB7XG4gIGlmIChkLmRlcHRoID09PSA0KSB7XG4gICAgcmV0dXJuIFwibGluayB1cHBlckJyYW5jaGVzXCJcbiAgfSBlbHNlIGlmIChkLmRlcHRoID09PSAzKSB7XG4gICAgcmV0dXJuIFwibGluayBtaWRkbGVCcmFuY2hlc1wiXG4gIH0gZWxzZSBpZiAoZC5kZXB0aCA9PT0gMikge1xuICAgIHJldHVybiBcImxpbmsgbG93ZXJCcmFuY2hlc1wiXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwibGluayB0cnVua1wiXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMjUsIHJpZ2h0OiAyNSwgYm90dG9tOiAyNSwgbGVmdDogMjUgfSxcbiAgICB3aWR0aCA9IDE0MDAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCxcbiAgICBoZWlnaHQgPSA2MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICBjb25zdCBvcmllbnRhdGlvbnMgPSB7XG4gICAgXCJncm93LXVwXCI6IHtcbiAgICAgIHNpemU6IFt3aWR0aCwgaGVpZ2h0XSxcbiAgICAgIHg6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQueDtcbiAgICAgIH0sXG4gICAgICB5OiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBoZWlnaHQgLSBkLnk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN2ZyA9IGQzXG4gICAgLnNlbGVjdChcImJvZHlcIilcbiAgICAuc2VsZWN0QWxsKFwic3ZnXCIpXG4gICAgLmRhdGEoZDMuZW50cmllcyhvcmllbnRhdGlvbnMpKVxuICAgIC5lbnRlcigpXG4gICAgLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAvLyBMb2FkIGFuZCBjb252ZXJ0IGNzdiBkYXRhID0+IGVhY2ggcm93IGJlY29tZXMgYW4gb2JqZWN0IHdpdGggY29sdW1ucyBhcyBrZXlzXG4gIGQzLmNzdihcInNyYy9kYXRhL2JiZ19kYXRhMTkxMjA0LmNzdlwiKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBcbiAgICAvLyBDb252ZXJ0IGRhdGEgdG8gaGllcmFyY2hpY2FsIHN0cnVjdHVyZVxuICAgIGxldCBiYmdfZGF0YSA9IGNvbnZlcnRGZXRjaGVkRGF0YShkYXRhKTtcblxuICAgIHN2Zy5lYWNoKGZ1bmN0aW9uKG9yaWVudGF0aW9uKSB7XG4gICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QodGhpcyksXG4gICAgICAgIG8gPSBvcmllbnRhdGlvbi52YWx1ZTtcblxuICAgICAgLy8gQ3JlYXRlIHRyZWVcbiAgICAgIGxldCB0cmVlbWFwID0gZDMudHJlZSgpLnNpemUoby5zaXplKTtcblxuICAgICAgbGV0IG5vZGVzID0gZDMuaGllcmFyY2h5KGJiZ19kYXRhKTtcbiAgICAgIFxuICAgICAgbm9kZXMgPSB0cmVlbWFwKG5vZGVzKTtcblxuICAgICAgLy8gUmVuZGVyIGFuZCBjbGFzc2lmeSBhbGwgbGlua3NcbiAgICAgIGNvbnN0IGxpbmtzID0gbm9kZXMuZGVzY2VuZGFudHMoKS5zbGljZSgxKTtcblxuICAgICAgc3ZnLnNlbGVjdEFsbChcIi5saW5rXCIpXG4gICAgICAgIC5kYXRhKGxpbmtzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGJyYW5jaEx2bChkKTsgfSlcbiAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgXCJNXCIgK1xuICAgICAgICAgICAgZC54ICtcbiAgICAgICAgICAgIFwiLFwiICtcbiAgICAgICAgICAgIG8ueShkKSArXG4gICAgICAgICAgICBcIkNcIiArXG4gICAgICAgICAgICBkLnggK1xuICAgICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgICAgKG8ueShkKSArIG8ueShkLnBhcmVudCkpIC8gMiArXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICBkLnBhcmVudC54ICtcbiAgICAgICAgICAgIFwiLFwiICtcbiAgICAgICAgICAgIChvLnkoZCkgKyBvLnkoZC5wYXJlbnQpKSAvIDIgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgZC5wYXJlbnQueCArXG4gICAgICAgICAgICBcIixcIiArXG4gICAgICAgICAgICBvLnkoZC5wYXJlbnQpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcblxuICAgICAgLy8gR3JvdXAgYnJhbmNoIGFuZCBsZWFmIG5vZGVzXG4gICAgICBsZXQgYnJhbmNoTm9kZXMgPSBbXTtcbiAgICAgIGxldCBsZWFmTm9kZXMgPSBbXTtcbiAgICAgIG5vZGVzLmRlc2NlbmRhbnRzKCkuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKG5vZGUuZGVwdGggPT09IDQpe1xuICAgICAgICAgIGxlYWZOb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyYW5jaE5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pICAgICAgXG5cbiAgICAgIC8vIENyZWF0ZSBsZWFmTm9kZSBkaWFtb25kc1xuICAgICAgbGV0IGxlYWZOb2RlID0gc3ZnXG4gICAgICAgIC5zZWxlY3RBbGwoXCIubGVhZk5vZGVcIilcbiAgICAgICAgLmRhdGEobGVhZk5vZGVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKTtcbiAgICAgIGxlYWZOb2RlXG4gICAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIi5sZWFmTm9kZVwiKVxuICAgICAgICAuYXR0cihcInJcIiwgNC41KVxuICAgICAgICAuYXR0cihcImN4XCIsIG8ueClcbiAgICAgICAgLmF0dHIoXCJjeVwiLCBvLnkpO1xuXG4gICAgICAvLyBDcmVhdGUgYnJhbmNoTm9kZSBjaXJjbGVzXG4gICAgICBsZXQgYnJhbmNoTm9kZSA9IHN2Z1xuICAgICAgICAuc2VsZWN0QWxsKFwiLmJyYW5jaE5vZGVcIilcbiAgICAgICAgLmRhdGEoYnJhbmNoTm9kZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpO1xuICAgICAgYnJhbmNoTm9kZVxuICAgICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJicmFuY2hOb2RlXCIpXG4gICAgICAgIC5hdHRyKFwiclwiLCA0LjUpXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgby54KVxuICAgICAgICAuYXR0cihcImN5XCIsIG8ueSk7XG5cbiAgICAgIGJyYW5jaE5vZGVcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJ4XCIsIG8ueClcbiAgICAgICAgLmF0dHIoXCJkeFwiLCA1KVxuICAgICAgICAuYXR0cihcInlcIiwgby55KTtcblxuXG4gICAgfSlcbiAgICBcbiAgfSk7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==