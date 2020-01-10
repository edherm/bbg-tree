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
/* harmony import */ var _scripts_build_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/build_page */ "./src/scripts/build_page.js");



window.addEventListener("DOMContentLoaded", function () {
  // document.body.append(
  //   "Source: <a>https://www.bbg.org/cgi/plant-records/search.cgi"
  // );
  Object(_scripts_build_page__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/scripts/build_page.js":
/*!***********************************!*\
  !*** ./src/scripts/build_page.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_tree */ "./src/scripts/create_tree.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(_create_tree__WEBPACK_IMPORTED_MODULE_0__["default"])();
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


var klass = function klass(d) {
  if (d.data.name.commonName) {
    return "leaves leaf".concat(d.parent.parent.id).concat(d.parent.id).concat(d.id);
  } else if (d.depth === 4) {
    return "upper branches";
  } else if (d.depth === 3) {
    return "middle branches";
  } else if (d.depth === 2) {
    return "lower branches";
  } else {
    return "trunk";
  }
};

var onMouseOver = function onMouseOver(d) {
  console.log("hello");
  console.log(d); // let specs = d3
  //   .selectAll(`.leaf${d.parent.parent.id}${d.parent.id}${d.id}`)
  //   .append("div")
  //   .attr("height", 20)
  //   .attr("width", 20)
  //   .attr("border", "1px solid black")
};

var onMouseOut = function onMouseOut(d) {
  console.log("goodbye");
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var margin = {
    top: 25,
    right: 25,
    bottom: 25,
    left: 25
  },
      width = 1200 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;
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
  }; // .data(d3.entries(orientations))

  var svg = d3.select("main").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.right).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // Load and convert csv data => each row becomes an object with columns as keys

  d3.csv("src/data/bbg_data191204.csv").then(function (data) {
    // Convert data to hierarchical structure
    var bbg_data = Object(_convert_fetched_data__WEBPACK_IMPORTED_MODULE_0__["default"])(data); // Create tree and assign size from orientations

    var treemap = d3.tree().size([height, width]); // Assign root node

    var root = d3.hierarchy(bbg_data, function (d) {
      return d.children;
    });
    root.x0 = height / 2;
    root.y0 = 0;

    var update = function update(source) {
      // Categorize nodes and links
      var nodes = treemap(root);
      var links = nodes.descendants().slice(1); // Variables used for animation

      var i = 0;
      var duration = 1300; // Normalize depth

      nodes.descendants().forEach(function (d) {
        d.y = d.depth * 200;
      }); ///////// Nodes /////////
      // Update the nodes

      var node = svg.selectAll("g.node").data(nodes.descendants(), function (d) {
        return d.id || (d.id = ++i);
      }); // Create nodes

      var nodeEnter = node.enter().append("g").attr("class", "node").attr("transform", function (d) {
        return "translate(".concat(source.y0, ", ").concat(source.x0, ")");
      }).on('click', function (d) {
        return click(d);
      }); // Add Circle to nodes

      nodeEnter.append("circle").attr("class", function (d) {
        return "".concat(klass(d));
      }).attr("r", 7).style("fill", function (d) {
        return d.children ? "rgb(89, 66, 54)" : "rgb(152, 199, 45)";
      }); // Node labels

      nodeEnter.append("text").text(function (d) {
        return d.data.name.commonName ? "- ".concat(d.data.name.commonName, " -") : "- ".concat(d.data.name, " -");
      }).attr("x", function (d) {
        return d.children || d._children ? -13 : 13;
      }).attr("dy", ".35em").attr("text-anchor", function (d) {
        return d.children || d._children ? "end" : "start";
      }); // Execute updating nodes

      var nodeUpdate = nodeEnter.merge(node); // Transition to proper node position

      nodeUpdate.transition().duration(duration).attr("transform", function (d) {
        return "translate(".concat(d.y, ", ").concat(d.x, ")");
      });
      nodeUpdate.select('circle.branches').attr('r', 7).style("fill", function (d) {
        return d.children ? "rgb(89, 66, 54)" : "rgb(64, 125, 194)";
      }).attr('cursor', 'pointer'); // Remove any exiting nodes

      var nodeExit = node.exit().transition().duration(duration).attr("transform", function (d) {
        return "translate(".concat(source.y, ", ").concat(source.x, ")");
      }).remove(); // Reduce exiting circles size to 0

      nodeExit.select('circle.branches', 'circle.leaves').attr('r', 1e-6); // Reduce label opacity

      nodeExit.select('text').style('fill-opacity', 1e-6); // Add event listeners to leaves for info display  

      d3.selectAll("circle.leaves").enter().on("mouseOver", function (d) {
        debugger;
        onMouseOver(d);
      }).on("mouseOut", function (d) {
        debugger;
        onMouseOut(d);
      }); ///////// Links /////////
      // Create path between parent and child

      var diagonal = function diagonal(start, delta) {
        return "M ".concat(start.y, " ").concat(start.x, " \n            C ").concat((start.y + delta.y) / 2, " ").concat(start.x, ",\n            ").concat((start.y + delta.y) / 2, " ").concat(delta.x, ",\n            ").concat(delta.y, " ").concat(delta.x);
      }; // Update links


      var link = svg.selectAll(".link").data(links, function (d) {
        return d.id;
      }); // Update 'revealed' links

      var linkEnter = link.enter().insert("path", "g").attr("class", function (d) {
        return "link ".concat(klass(d));
      }).attr("d", function (d) {
        var start = {
          x: source.x0,
          y: source.y0
        };
        return diagonal(start, start);
      }); // Update

      var linkUpdate = linkEnter.merge(link); // Add transition to parent element

      linkUpdate.transition().duration(duration).attr('d', function (d) {
        return diagonal(d, d.parent);
      }); // Remove any exiting links

      var linkExit = link.exit().transition().duration(duration).attr('d', function (d) {
        var o = {
          x: source.x,
          y: source.y
        };
        return diagonal(o, o);
      }).remove(); // Store old positions for transition

      nodes.descendants().forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
      }); // Handle click - set visibility

      var click = function click(d) {
        if (d.depth === 4) {
          console.log(d); // displaySpecs(d);
        } else if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }

        update(d);
      };
    }; // Recursively collapse all nodes each collection contains


    root.children[0].children.forEach(function (collection) {
      collection.descendants().forEach(function (child) {
        child._children = child.children;
        child.children = null;
      });
    });
    update(root);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2J1aWxkX3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29udmVydF9mZXRjaGVkX2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY3JlYXRlX3RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2RjMmEiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ1aWxkUGFnZSIsImNyZWF0ZVRyZWUiLCJmZXRjaGVkRGF0YSIsImhpZXJhcmNoaWNhbERhdGEiLCJkMyIsIm5lc3QiLCJrZXkiLCJkIiwiaG9tZSIsImNvbGxlY3Rpb24iLCJnZW51cyIsImVudHJpZXMiLCJzaGFwZWRIaWVyYXJjaGljYWxEYXRhIiwibWFwIiwidmFsdWVzIiwic3BlY2ltZW4iLCJzcGVjaWVzIiwiY29tbW9uTmFtZSIsImZhbWlseSIsImFjY2Vzc2lvbiIsInByb3ZlbmFuY2UiLCJrbGFzcyIsImRhdGEiLCJuYW1lIiwicGFyZW50IiwiaWQiLCJkZXB0aCIsIm9uTW91c2VPdmVyIiwiY29uc29sZSIsImxvZyIsIm9uTW91c2VPdXQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9yaWVudGF0aW9ucyIsInNpemUiLCJ4IiwieSIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJjc3YiLCJ0aGVuIiwiYmJnX2RhdGEiLCJjb252ZXJ0RmV0Y2hlZERhdGEiLCJ0cmVlbWFwIiwidHJlZSIsInJvb3QiLCJoaWVyYXJjaHkiLCJjaGlsZHJlbiIsIngwIiwieTAiLCJ1cGRhdGUiLCJzb3VyY2UiLCJub2RlcyIsImxpbmtzIiwiZGVzY2VuZGFudHMiLCJzbGljZSIsImkiLCJkdXJhdGlvbiIsImZvckVhY2giLCJub2RlIiwic2VsZWN0QWxsIiwibm9kZUVudGVyIiwiZW50ZXIiLCJvbiIsImNsaWNrIiwic3R5bGUiLCJ0ZXh0IiwiX2NoaWxkcmVuIiwibm9kZVVwZGF0ZSIsIm1lcmdlIiwidHJhbnNpdGlvbiIsIm5vZGVFeGl0IiwiZXhpdCIsInJlbW92ZSIsImRpYWdvbmFsIiwic3RhcnQiLCJkZWx0YSIsImxpbmsiLCJsaW5rRW50ZXIiLCJpbnNlcnQiLCJsaW5rVXBkYXRlIiwibGlua0V4aXQiLCJvIiwiY2hpbGQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBQyxxRUFBUztBQUNWLENBTEQsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FB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QUNqQkUsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZdEIsQ0FBWixFQURpQixDQUVqQjtBQUNELFNBSEQsTUFHTyxJQUFJQSxDQUFDLENBQUMrQyxRQUFOLEVBQWdCO0FBQ3JCL0MsV0FBQyxDQUFDbUUsU0FBRixHQUFjbkUsQ0FBQyxDQUFDK0MsUUFBaEI7QUFDQS9DLFdBQUMsQ0FBQytDLFFBQUYsR0FBYSxJQUFiO0FBQ0QsU0FITSxNQUdBO0FBQ0wvQyxXQUFDLENBQUMrQyxRQUFGLEdBQWEvQyxDQUFDLENBQUNtRSxTQUFmO0FBQ0FuRSxXQUFDLENBQUNtRSxTQUFGLEdBQWMsSUFBZDtBQUNEOztBQUNEakIsY0FBTSxDQUFDbEQsQ0FBRCxDQUFOO0FBQ0QsT0FaRDtBQWFELEtBdEpELENBWndELENBb0t4RDs7O0FBQ0E2QyxRQUFJLENBQUNFLFFBQUwsQ0FBYyxDQUFkLEVBQWlCQSxRQUFqQixDQUEwQlcsT0FBMUIsQ0FBa0MsVUFBQXhELFVBQVUsRUFBSTtBQUM5Q0EsZ0JBQVUsQ0FBQ29ELFdBQVgsR0FBeUJJLE9BQXpCLENBQWlDLFVBQUF5QixLQUFLLEVBQUk7QUFDeENBLGFBQUssQ0FBQ2hCLFNBQU4sR0FBa0JnQixLQUFLLENBQUNwQyxRQUF4QjtBQUNBb0MsYUFBSyxDQUFDcEMsUUFBTixHQUFpQixJQUFqQjtBQUNELE9BSEQ7QUFJRCxLQUxEO0FBT0FHLFVBQU0sQ0FBQ0wsSUFBRCxDQUFOO0FBQ0QsR0E3S0Q7QUE4S0QsQ0F6TUQsRTs7Ozs7Ozs7Ozs7QUNoQ0EsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGNyZWF0ZVRyZWUgZnJvbSBcIi4vc2NyaXB0cy9jcmVhdGVfdHJlZVwiO1xuaW1wb3J0IGJ1aWxkUGFnZSBmcm9tIFwiLi9zY3JpcHRzL2J1aWxkX3BhZ2VcIjtcblxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kKFxuICAvLyAgIFwiU291cmNlOiA8YT5odHRwczovL3d3dy5iYmcub3JnL2NnaS9wbGFudC1yZWNvcmRzL3NlYXJjaC5jZ2lcIlxuICAvLyApO1xuICBidWlsZFBhZ2UoKTtcbn0pIiwiaW1wb3J0IGNyZWF0ZVRyZWUgZnJvbSBcIi4vY3JlYXRlX3RyZWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBcbiAgY3JlYXRlVHJlZSgpO1xuXG5cbn0iLCJleHBvcnQgZGVmYXVsdCAoZmV0Y2hlZERhdGEpID0+IHtcbiAgLy8gQ29udmVydCBkYXRhIHRvIGhpZXJhcmNoaWNhbCBzdHJ1Y3R1cmVcbiAgICBjb25zdCBoaWVyYXJjaGljYWxEYXRhID0gZDMubmVzdCgpXG4gICAgICAua2V5KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaG9tZTtcbiAgICAgIH0pXG4gICAgICAua2V5KGZ1bmN0aW9uKGQpIHsgXG4gICAgICAgIHJldHVybiBkLmNvbGxlY3Rpb247IFxuICAgICAgfSlcbiAgICAgIC5rZXkoZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgcmV0dXJuIGQuZ2VudXM7IFxuICAgICAgfSlcbiAgICAgIC5lbnRyaWVzKGZldGNoZWREYXRhKVxuXG4gICAgLy8gQ29ycmVjdCBrZXkvdmFsdWUgZm9ybWF0IGZvciBkMy5oaWVyYXJjaHkgYW5kIC50cmVlXG4gICAgY29uc3Qgc2hhcGVkSGllcmFyY2hpY2FsRGF0YSA9IHtcbiAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBoaWVyYXJjaGljYWxEYXRhLm1hcChob21lID0+IHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFwibmFtZVwiOiBob21lLmtleSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IGhvbWUudmFsdWVzLm1hcChjb2xsZWN0aW9uID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IGNvbGxlY3Rpb24ua2V5LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IGNvbGxlY3Rpb24udmFsdWVzLm1hcChnZW51cyA9PiB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IGdlbnVzLmtleSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogZ2VudXMudmFsdWVzLm1hcChzcGVjaW1lbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtjb2xsZWN0aW9uLGdlbnVzLHNwZWNpZXMsY29tbW9uTmFtZSxmYW1pbHksYWNjZXNzaW9uLHByb3ZlbmFuY2V9ID0gc3BlY2ltZW47XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOiBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogZmFtaWx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYXRpbk5hbWVcIjogYCR7Z2VudXN9ICR7c3BlY2llc31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21tb25OYW1lXCI6IGNvbW1vbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFjY2Vzc2lvblwiOiBhY2Nlc3Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb3ZlbmFuY2VcIjogcHJvdmVuYW5jZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBjb2xsZWN0aW9uLGdlbnVzLHNwZWNpZXMsY29tbW9uTmFtZSxmYW1pbHksYWNjZXNzaW9uLHByb3ZlbmFuY2VcbiAgICAvLyBoaWVyYXJjaGljYWxEYXRhLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgIC8vICAgZC5uYW1lID0gZC5rZXk7XG4gICAgLy8gICBkLmNoaWxkcmVuID0gZC52YWx1ZXM7XG4gICAgLy8gICBkLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpe1xuICAgIC8vICAgICBjaGlsZC5uYW1lID0gY2hpbGQua2V5O1xuICAgIC8vICAgICBjaGlsZC5jaGlsZHJlbiA9IGNoaWxkLnZhbHVlcztcbiAgICAvLyAgICAgY2hpbGQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihncmFuZGNoaWxkKSB7XG4gICAgLy8gICAgICAgZ3JhbmRjaGlsZC5uYW1lID0gZ3JhbmRjaGlsZC5rZXk7XG4gICAgLy8gICAgICAgZ3JhbmRjaGlsZC5jaGlsZHJlbiA9IGdyYW5kY2hpbGQudmFsdWVzO1xuICAgIC8vICAgICAgIGdyYW5kY2hpbGQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihncmVhdGdyYW5kY2hpbGQpIHtcbiAgICAvLyAgICAgICAgIGdyZWF0Z3JhbmRjaGlsZC5uYW1lID0gZ3JlYXRncmFuZGNoaWxkLmtleTtcbiAgICAvLyAgICAgICAgIGdyZWF0Z3JhbmRjaGlsZC5jaGlsZHJlbiA9IGdyZWF0Z3JhbmRjaGlsZC52YWx1ZXM7XG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH0pXG4gICAgLy8gfSlcblxuICByZXR1cm4gc2hhcGVkSGllcmFyY2hpY2FsRGF0YTtcbn0iLCJpbXBvcnQgY29udmVydEZldGNoZWREYXRhIGZyb20gXCIuL2NvbnZlcnRfZmV0Y2hlZF9kYXRhXCI7XG5cbmNvbnN0IGtsYXNzID0gKGQpID0+IHtcbiAgaWYgKGQuZGF0YS5uYW1lLmNvbW1vbk5hbWUpIHtcbiAgICByZXR1cm4gYGxlYXZlcyBsZWFmJHtkLnBhcmVudC5wYXJlbnQuaWR9JHtkLnBhcmVudC5pZH0ke2QuaWR9YFxuICB9IGVsc2UgaWYgKGQuZGVwdGggPT09IDQpIHtcbiAgICByZXR1cm4gXCJ1cHBlciBicmFuY2hlc1wiXG4gIH0gZWxzZSBpZiAoZC5kZXB0aCA9PT0gMykge1xuICAgIHJldHVybiBcIm1pZGRsZSBicmFuY2hlc1wiXG4gIH0gZWxzZSBpZiAoZC5kZXB0aCA9PT0gMikge1xuICAgIHJldHVybiBcImxvd2VyIGJyYW5jaGVzXCJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJ0cnVua1wiXG4gIH1cbn1cblxuY29uc3Qgb25Nb3VzZU92ZXIgPSBkID0+IHtcbiAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICBjb25zb2xlLmxvZyhkKVxuICAvLyBsZXQgc3BlY3MgPSBkM1xuICAvLyAgIC5zZWxlY3RBbGwoYC5sZWFmJHtkLnBhcmVudC5wYXJlbnQuaWR9JHtkLnBhcmVudC5pZH0ke2QuaWR9YClcbiAgLy8gICAuYXBwZW5kKFwiZGl2XCIpXG4gIC8vICAgLmF0dHIoXCJoZWlnaHRcIiwgMjApXG4gIC8vICAgLmF0dHIoXCJ3aWR0aFwiLCAyMClcbiAgLy8gICAuYXR0cihcImJvcmRlclwiLCBcIjFweCBzb2xpZCBibGFja1wiKVxuXG59XG5cbmNvbnN0IG9uTW91c2VPdXQgPSBkID0+IHtcbiAgY29uc29sZS5sb2coXCJnb29kYnllXCIpXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgbWFyZ2luID0geyB0b3A6IDI1LCByaWdodDogMjUsIGJvdHRvbTogMjUsIGxlZnQ6IDI1IH0sXG4gICAgd2lkdGggPSAxMjAwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0ID0gODAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgY29uc3Qgb3JpZW50YXRpb25zID0ge1xuICAgIFwiZ3Jvdy11cFwiOiB7XG4gICAgICBzaXplOiBbd2lkdGgsIGhlaWdodF0sXG4gICAgICB4OiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLng7XG4gICAgICB9LFxuICAgICAgeTogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gaGVpZ2h0IC0gZC55O1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyAuZGF0YShkMy5lbnRyaWVzKG9yaWVudGF0aW9ucykpXG4gIGxldCBzdmcgPSBkM1xuICAgIC5zZWxlY3QoXCJtYWluXCIpXG4gICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5yaWdodClcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAvLyBMb2FkIGFuZCBjb252ZXJ0IGNzdiBkYXRhID0+IGVhY2ggcm93IGJlY29tZXMgYW4gb2JqZWN0IHdpdGggY29sdW1ucyBhcyBrZXlzXG4gIGQzLmNzdihcInNyYy9kYXRhL2JiZ19kYXRhMTkxMjA0LmNzdlwiKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBcbiAgICAvLyBDb252ZXJ0IGRhdGEgdG8gaGllcmFyY2hpY2FsIHN0cnVjdHVyZVxuICAgIGxldCBiYmdfZGF0YSA9IGNvbnZlcnRGZXRjaGVkRGF0YShkYXRhKTtcblxuICAgIC8vIENyZWF0ZSB0cmVlIGFuZCBhc3NpZ24gc2l6ZSBmcm9tIG9yaWVudGF0aW9uc1xuICAgIGxldCB0cmVlbWFwID0gZDMudHJlZSgpLnNpemUoW2hlaWdodCwgd2lkdGhdKTtcblxuICAgIC8vIEFzc2lnbiByb290IG5vZGVcbiAgICBsZXQgcm9vdCA9IGQzLmhpZXJhcmNoeShiYmdfZGF0YSwgZCA9PiB7IHJldHVybiBkLmNoaWxkcmVuIH0pO1xuICAgIHJvb3QueDAgPSBoZWlnaHQgLyAyO1xuICAgIHJvb3QueTAgPSAwO1xuICAgIGNvbnN0IHVwZGF0ZSA9IHNvdXJjZSA9PiB7XG4gICAgICAvLyBDYXRlZ29yaXplIG5vZGVzIGFuZCBsaW5rc1xuICAgICAgbGV0IG5vZGVzID0gdHJlZW1hcChyb290KTtcbiAgICAgIGNvbnN0IGxpbmtzID0gbm9kZXMuZGVzY2VuZGFudHMoKS5zbGljZSgxKTtcblxuICAgICAgLy8gVmFyaWFibGVzIHVzZWQgZm9yIGFuaW1hdGlvblxuICAgICAgbGV0IGkgPSAwO1xuICAgICAgY29uc3QgZHVyYXRpb24gPSAxMzAwO1xuXG4gICAgICAvLyBOb3JtYWxpemUgZGVwdGhcbiAgICAgIG5vZGVzLmRlc2NlbmRhbnRzKCkuZm9yRWFjaChkID0+IHtkLnkgPSBkLmRlcHRoICogMjAwfSk7XG4gICAgICAvLy8vLy8vLy8gTm9kZXMgLy8vLy8vLy8vXG4gICAgICAvLyBVcGRhdGUgdGhlIG5vZGVzXG4gICAgICBsZXQgbm9kZSA9IHN2Z1xuICAgICAgICAuc2VsZWN0QWxsKFwiZy5ub2RlXCIpXG4gICAgICAgIC5kYXRhKG5vZGVzLmRlc2NlbmRhbnRzKCksIGQgPT4geyByZXR1cm4gZC5pZCB8fCAoZC5pZCA9ICsraSk7IH0pXG5cbiAgICAgIC8vIENyZWF0ZSBub2Rlc1xuICAgICAgbGV0IG5vZGVFbnRlciA9IG5vZGVcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGVcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZCA9PiB7IHJldHVybiBgdHJhbnNsYXRlKCR7c291cmNlLnkwfSwgJHtzb3VyY2UueDB9KWA7IH0pXG4gICAgICAgIC5vbignY2xpY2snLCAoZCkgPT4gY2xpY2soZCkpO1xuICAgICAgICBcbiAgICAgIC8vIEFkZCBDaXJjbGUgdG8gbm9kZXNcbiAgICAgIG5vZGVFbnRlclxuICAgICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIGAke2tsYXNzKGQpfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiclwiLCA3KVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4ge1xuICAgICAgICAgIHJldHVybiBkLmNoaWxkcmVuID8gXCJyZ2IoODksIDY2LCA1NClcIiA6IFwicmdiKDE1MiwgMTk5LCA0NSlcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIE5vZGUgbGFiZWxzXG4gICAgICBub2RlRW50ZXJcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnRleHQoZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIGQuZGF0YS5uYW1lLmNvbW1vbk5hbWVcbiAgICAgICAgICAgID8gYC0gJHtkLmRhdGEubmFtZS5jb21tb25OYW1lfSAtYFxuICAgICAgICAgICAgOiBgLSAke2QuZGF0YS5uYW1lfSAtYDsgXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwieFwiLCBkID0+IHsgcmV0dXJuIGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAtMTMgOiAxMzsgfSlcbiAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgZCA9PiB7IHJldHVybiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gXCJlbmRcIiA6IFwic3RhcnRcIjsgfSlcbiAgICAgIFxuICAgICAgLy8gRXhlY3V0ZSB1cGRhdGluZyBub2Rlc1xuICAgICAgY29uc3Qgbm9kZVVwZGF0ZSA9IG5vZGVFbnRlci5tZXJnZShub2RlKTtcblxuICAgICAgLy8gVHJhbnNpdGlvbiB0byBwcm9wZXIgbm9kZSBwb3NpdGlvblxuICAgICAgbm9kZVVwZGF0ZS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBkID0+IHsgXG4gICAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHtkLnl9LCAke2QueH0pYDsgfSk7XG4gICAgICBcbiAgICAgIG5vZGVVcGRhdGUuc2VsZWN0KCdjaXJjbGUuYnJhbmNoZXMnKVxuICAgICAgICAuYXR0cigncicsIDcpXG4gICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiB7IFxuICAgICAgICAgIHJldHVybiBkLmNoaWxkcmVuID8gXCJyZ2IoODksIDY2LCA1NClcIiA6IFwicmdiKDY0LCAxMjUsIDE5NClcIjsgXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpO1xuXG4gICAgICAvLyBSZW1vdmUgYW55IGV4aXRpbmcgbm9kZXNcbiAgICAgIGxldCBub2RlRXhpdCA9IG5vZGUuZXhpdCgpLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4geyByZXR1cm4gYHRyYW5zbGF0ZSgke3NvdXJjZS55fSwgJHtzb3VyY2UueH0pYDsgfSlcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBSZWR1Y2UgZXhpdGluZyBjaXJjbGVzIHNpemUgdG8gMFxuICAgICAgbm9kZUV4aXQuc2VsZWN0KCdjaXJjbGUuYnJhbmNoZXMnLCAnY2lyY2xlLmxlYXZlcycpXG4gICAgICAgIC5hdHRyKCdyJywgMWUtNik7XG5cbiAgICAgIC8vIFJlZHVjZSBsYWJlbCBvcGFjaXR5XG4gICAgICBub2RlRXhpdC5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDFlLTYpO1xuXG4gICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGxlYXZlcyBmb3IgaW5mbyBkaXNwbGF5ICBcbiAgICAgIGQzLnNlbGVjdEFsbChcImNpcmNsZS5sZWF2ZXNcIilcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLm9uKFwibW91c2VPdmVyXCIsIGQgPT4ge1xuICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgb25Nb3VzZU92ZXIoZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlT3V0XCIsIGQgPT4ge1xuICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgb25Nb3VzZU91dChkKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAvLy8vLy8vLy8gTGlua3MgLy8vLy8vLy8vXG4gICAgICAvLyBDcmVhdGUgcGF0aCBiZXR3ZWVuIHBhcmVudCBhbmQgY2hpbGRcbiAgICAgIGNvbnN0IGRpYWdvbmFsID0gKHN0YXJ0LCBkZWx0YSkgPT4ge1xuICAgICAgICByZXR1cm4gYE0gJHtzdGFydC55fSAke3N0YXJ0Lnh9IFxuICAgICAgICAgICAgQyAkeyhzdGFydC55ICsgZGVsdGEueSkgLyAyfSAke3N0YXJ0Lnh9LFxuICAgICAgICAgICAgJHsoc3RhcnQueSArIGRlbHRhLnkpIC8gMn0gJHtkZWx0YS54fSxcbiAgICAgICAgICAgICR7ZGVsdGEueX0gJHtkZWx0YS54fWA7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBsaW5rc1xuICAgICAgbGV0IGxpbmsgPSBzdmcuc2VsZWN0QWxsKFwiLmxpbmtcIilcbiAgICAgICAgLmRhdGEobGlua3MsIGQgPT4geyByZXR1cm4gZC5pZCB9KTtcblxuICAgICAgLy8gVXBkYXRlICdyZXZlYWxlZCcgbGlua3NcbiAgICAgIGxldCBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKClcbiAgICAgICAgLmluc2VydChcInBhdGhcIiwgXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiB7IHJldHVybiBgbGluayAke2tsYXNzKGQpfWA7IH0pXG4gICAgICAgIC5hdHRyKFwiZFwiLCBkID0+IHsgXG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSB7eDogc291cmNlLngwLCB5OiBzb3VyY2UueTB9XG4gICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKHN0YXJ0LCBzdGFydCkgXG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBVcGRhdGVcbiAgICAgIGNvbnN0IGxpbmtVcGRhdGUgPSBsaW5rRW50ZXIubWVyZ2UobGluayk7XG5cbiAgICAgIC8vIEFkZCB0cmFuc2l0aW9uIHRvIHBhcmVudCBlbGVtZW50XG4gICAgICBsaW5rVXBkYXRlLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCdkJywgZCA9PiB7IFxuICAgICAgICAgIHJldHVybiBkaWFnb25hbChkLCBkLnBhcmVudCk7IH0pXG5cbiAgICAgIC8vIFJlbW92ZSBhbnkgZXhpdGluZyBsaW5rc1xuICAgICAgY29uc3QgbGlua0V4aXQgPSBsaW5rLmV4aXQoKS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgICAuYXR0cignZCcsIGQgPT4geyBcbiAgICAgICAgICBjb25zdCBvID0ge3g6IHNvdXJjZS54LCB5OiBzb3VyY2UueX1cbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbykgXG4gICAgICAgIH0pXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gU3RvcmUgb2xkIHBvc2l0aW9ucyBmb3IgdHJhbnNpdGlvblxuICAgICAgbm9kZXMuZGVzY2VuZGFudHMoKS5mb3JFYWNoKGZ1bmN0aW9uKGQpe1xuICAgICAgICBkLngwID0gZC54O1xuICAgICAgICBkLnkwID0gZC55O1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEhhbmRsZSBjbGljayAtIHNldCB2aXNpYmlsaXR5XG4gICAgICBjb25zdCBjbGljayA9IGQgPT4ge1xuICAgICAgICBpZiAoZC5kZXB0aCA9PT0gNCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICAgIC8vIGRpc3BsYXlTcGVjcyhkKTtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBkLl9jaGlsZHJlbjtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlKGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbGxhcHNlIGFsbCBub2RlcyBlYWNoIGNvbGxlY3Rpb24gY29udGFpbnNcbiAgICByb290LmNoaWxkcmVuWzBdLmNoaWxkcmVuLmZvckVhY2goY29sbGVjdGlvbiA9PiB7XG4gICAgICBjb2xsZWN0aW9uLmRlc2NlbmRhbnRzKCkuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNoaWxkLl9jaGlsZHJlbiA9IGNoaWxkLmNoaWxkcmVuO1xuICAgICAgICBjaGlsZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZShyb290KTsgICAgXG4gIH0pO1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=