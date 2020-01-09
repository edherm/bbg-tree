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


var klass = function klass(d) {
  if (d.data.name.commonName) {
    return "leaves";
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
  }; // .data(d3.entries(orientations))

  var svg = d3.select("body").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.right).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // Load and convert csv data => each row becomes an object with columns as keys

  d3.csv("src/data/bbg_data191204.csv").then(function (data) {
    // Convert data to hierarchical structure
    var bbg_data = Object(_convert_fetched_data__WEBPACK_IMPORTED_MODULE_0__["default"])(data); // Create tree and assign size from orientations

    var treemap = d3.tree().size([height, width]); // Assign root node

    var root = d3.hierarchy(bbg_data, function (d) {
      return d.children;
    });
    root.x0 = height / 2;
    root.y0 = 0; // Collapse node and recursively collapse all children
    // const collapse = d => {
    //   if(d.children) {
    //     d._children = d.children
    //     d._children.forEach(collapse)
    //     d.children = null
    //   }
    // }

    var update = function update(source) {
      // Categorize nodes and links
      var nodes = treemap(root);
      var links = nodes.descendants().slice(1); // Declare variables used for animation throughout

      var i = 0;
      var duration = 1500; // Normalize depth

      nodes.descendants().forEach(function (d) {
        d.y = d.depth * 150;
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
        return d.children ? "rgb(89, 66, 54)" : "rgb(64, 125, 194)";
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

      nodeExit.select('.branches').attr('r', 1e-6); // Reduce label opacity

      nodeExit.select('text').style('fill-opacity', 1e-6); ///////// Links /////////
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
        debugger;
        return diagonal(start, start);
      }); // Update

      var linkUpdate = linkEnter.merge(link); // Add transition to parent element

      linkUpdate.transition().duration(duration).attr('d', function (d) {
        debugger;
        return diagonal(d, d.parent);
      }); // Remove any exiting links

      var linkExit = link.exit().transition().duration(duration).attr('d', function (d) {
        var o = {
          x: source.x,
          y: source.y
        };
        debugger;
        return diagonal(o, o);
      }).remove(); // Store old positions for transition

      nodes.descendants().forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
      }); // Handle click - set visibility property

      var click = function click(d) {
        if (d.depth === 4) {
          console.log("leaf node!");
        } else if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }

        update(d);
        console.log(d);
      };
    }; // Recursively collapse all nodes each collection contains
    // root.children[0].children.forEach(collection => {
    //   collection.descendants().forEach(child => {
    //     child._children = child.children;
    //     child.children = null;
    //   });
    // });


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnZlcnRfZmV0Y2hlZF9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NyZWF0ZV90cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kIiwiY3JlYXRlVHJlZSIsImZldGNoZWREYXRhIiwiaGllcmFyY2hpY2FsRGF0YSIsImQzIiwibmVzdCIsImtleSIsImQiLCJob21lIiwiY29sbGVjdGlvbiIsImdlbnVzIiwiZW50cmllcyIsInNoYXBlZEhpZXJhcmNoaWNhbERhdGEiLCJtYXAiLCJ2YWx1ZXMiLCJzcGVjaW1lbiIsInNwZWNpZXMiLCJjb21tb25OYW1lIiwiZmFtaWx5IiwiYWNjZXNzaW9uIiwicHJvdmVuYW5jZSIsImtsYXNzIiwiZGF0YSIsIm5hbWUiLCJkZXB0aCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0Iiwib3JpZW50YXRpb25zIiwic2l6ZSIsIngiLCJ5Iiwic3ZnIiwic2VsZWN0IiwiYXR0ciIsImNzdiIsInRoZW4iLCJiYmdfZGF0YSIsImNvbnZlcnRGZXRjaGVkRGF0YSIsInRyZWVtYXAiLCJ0cmVlIiwicm9vdCIsImhpZXJhcmNoeSIsImNoaWxkcmVuIiwieDAiLCJ5MCIsInVwZGF0ZSIsInNvdXJjZSIsIm5vZGVzIiwibGlua3MiLCJkZXNjZW5kYW50cyIsInNsaWNlIiwiaSIsImR1cmF0aW9uIiwiZm9yRWFjaCIsIm5vZGUiLCJzZWxlY3RBbGwiLCJpZCIsIm5vZGVFbnRlciIsImVudGVyIiwib24iLCJjbGljayIsInN0eWxlIiwidGV4dCIsIl9jaGlsZHJlbiIsIm5vZGVVcGRhdGUiLCJtZXJnZSIsInRyYW5zaXRpb24iLCJub2RlRXhpdCIsImV4aXQiLCJyZW1vdmUiLCJkaWFnb25hbCIsInN0YXJ0IiwiZGVsdGEiLCJsaW5rIiwibGlua0VudGVyIiwiaW5zZXJ0IiwibGlua1VwZGF0ZSIsInBhcmVudCIsImxpbmtFeGl0IiwibyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFDaERDLFVBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFkLENBQXFCLGFBQXJCO0FBQ0FDLHNFQUFVO0FBQ1gsQ0FIRCxFOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFlLHlFQUFDQyxXQUFELEVBQWlCO0FBQzlCO0FBQ0UsTUFBTUMsZ0JBQWdCLEdBQUdDLEVBQUUsQ0FBQ0MsSUFB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RCxDQUFULEVBQVc7QUFDckNBLFNBQUMsQ0FBQ3lDLEVBQUYsR0FBT3pDLENBQUMsQ0FBQzJCLENBQVQ7QUFDQTNCLFNBQUMsQ0FBQzBDLEVBQUYsR0FBTzFDLENBQUMsQ0FBQzRCLENBQVQ7QUFDRCxPQUhELEVBMUh1QixDQStIdkI7O0FBQ0EsVUFBTThCLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUExRCxDQUFDLEVBQUk7QUFDakIsWUFBSUEsQ0FBQyxDQUFDaUIsS0FBRixLQUFZLENBQWhCLEVBQW1CO0FBQ2pCNkQsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDRCxTQUZELE1BRU8sSUFBSS9FLENBQUMsQ0FBQ3dDLFFBQU4sRUFBZ0I7QUFDckJ4QyxXQUFDLENBQUM2RCxTQUFGLEdBQWM3RCxDQUFDLENBQUN3QyxRQUFoQjtBQUNBeEMsV0FBQyxDQUFDd0MsUUFBRixHQUFhLElBQWI7QUFDRCxTQUhNLE1BR0E7QUFDTHhDLFdBQUMsQ0FBQ3dDLFFBQUYsR0FBYXhDLENBQUMsQ0FBQzZELFNBQWY7QUFDQTdELFdBQUMsQ0FBQzZELFNBQUYsR0FBYyxJQUFkO0FBQ0Q7O0FBQ0RsQixjQUFNLENBQUMzQyxDQUFELENBQU47QUFDQThFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZL0UsQ0FBWjtBQUNELE9BWkQ7QUFhRCxLQTdJRCxDQXRCd0QsQ0FxS3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTJDLFVBQU0sQ0FBQ0wsSUFBRCxDQUFOO0FBQ0QsR0E5S0Q7QUErS0QsQ0ExTUQsRTs7Ozs7Ozs7Ozs7QUNoQkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGNyZWF0ZVRyZWUgZnJvbSBcIi4vc2NyaXB0cy9jcmVhdGVfdHJlZVwiO1xuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoXCJIZWxsbyBXb3JsZFwiKVxuICBjcmVhdGVUcmVlKCk7XG59KSIsImV4cG9ydCBkZWZhdWx0IChmZXRjaGVkRGF0YSkgPT4ge1xuICAvLyBDb252ZXJ0IGRhdGEgdG8gaGllcmFyY2hpY2FsIHN0cnVjdHVyZVxuICAgIGNvbnN0IGhpZXJhcmNoaWNhbERhdGEgPSBkMy5uZXN0KClcbiAgICAgIC5rZXkoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5ob21lO1xuICAgICAgfSlcbiAgICAgIC5rZXkoZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgcmV0dXJuIGQuY29sbGVjdGlvbjsgXG4gICAgICB9KVxuICAgICAgLmtleShmdW5jdGlvbihkKSB7IFxuICAgICAgICByZXR1cm4gZC5nZW51czsgXG4gICAgICB9KVxuICAgICAgLmVudHJpZXMoZmV0Y2hlZERhdGEpXG5cbiAgICAvLyBDb3JyZWN0IGtleS92YWx1ZSBmb3JtYXQgZm9yIGQzLmhpZXJhcmNoeSBhbmQgLnRyZWVcbiAgICBjb25zdCBzaGFwZWRIaWVyYXJjaGljYWxEYXRhID0ge1xuICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IGhpZXJhcmNoaWNhbERhdGEubWFwKGhvbWUgPT4ge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXCJuYW1lXCI6IGhvbWUua2V5LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogaG9tZS52YWx1ZXMubWFwKGNvbGxlY3Rpb24gPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogY29sbGVjdGlvbi5rZXksXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogY29sbGVjdGlvbi52YWx1ZXMubWFwKGdlbnVzID0+IHtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogZ2VudXMua2V5LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBnZW51cy52YWx1ZXMubWFwKHNwZWNpbWVuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2NvbGxlY3Rpb24sZ2VudXMsc3BlY2llcyxjb21tb25OYW1lLGZhbWlseSxhY2Nlc3Npb24scHJvdmVuYW5jZX0gPSBzcGVjaW1lbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xsZWN0aW9uXCI6IGNvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBmYW1pbHksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhdGluTmFtZVwiOiBgJHtnZW51c30gJHtzcGVjaWVzfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbW1vbk5hbWVcIjogY29tbW9uTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWNjZXNzaW9uXCI6IGFjY2Vzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvdmVuYW5jZVwiOiBwcm92ZW5hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGNvbGxlY3Rpb24sZ2VudXMsc3BlY2llcyxjb21tb25OYW1lLGZhbWlseSxhY2Nlc3Npb24scHJvdmVuYW5jZVxuICAgIC8vIGhpZXJhcmNoaWNhbERhdGEuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgLy8gICBkLm5hbWUgPSBkLmtleTtcbiAgICAvLyAgIGQuY2hpbGRyZW4gPSBkLnZhbHVlcztcbiAgICAvLyAgIGQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCl7XG4gICAgLy8gICAgIGNoaWxkLm5hbWUgPSBjaGlsZC5rZXk7XG4gICAgLy8gICAgIGNoaWxkLmNoaWxkcmVuID0gY2hpbGQudmFsdWVzO1xuICAgIC8vICAgICBjaGlsZC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGdyYW5kY2hpbGQpIHtcbiAgICAvLyAgICAgICBncmFuZGNoaWxkLm5hbWUgPSBncmFuZGNoaWxkLmtleTtcbiAgICAvLyAgICAgICBncmFuZGNoaWxkLmNoaWxkcmVuID0gZ3JhbmRjaGlsZC52YWx1ZXM7XG4gICAgLy8gICAgICAgZ3JhbmRjaGlsZC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGdyZWF0Z3JhbmRjaGlsZCkge1xuICAgIC8vICAgICAgICAgZ3JlYXRncmFuZGNoaWxkLm5hbWUgPSBncmVhdGdyYW5kY2hpbGQua2V5O1xuICAgIC8vICAgICAgICAgZ3JlYXRncmFuZGNoaWxkLmNoaWxkcmVuID0gZ3JlYXRncmFuZGNoaWxkLnZhbHVlcztcbiAgICAvLyAgICAgICB9KVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuXG4gIHJldHVybiBzaGFwZWRIaWVyYXJjaGljYWxEYXRhO1xufSIsImltcG9ydCBjb252ZXJ0RmV0Y2hlZERhdGEgZnJvbSBcIi4vY29udmVydF9mZXRjaGVkX2RhdGFcIjtcblxuY29uc3Qga2xhc3MgPSAoZCkgPT4ge1xuICBpZiAoZC5kYXRhLm5hbWUuY29tbW9uTmFtZSkge1xuICAgIHJldHVybiBcImxlYXZlc1wiXG4gIH0gZWxzZSBpZiAoZC5kZXB0aCA9PT0gNCkge1xuICAgIHJldHVybiBcInVwcGVyIGJyYW5jaGVzXCJcbiAgfSBlbHNlIGlmIChkLmRlcHRoID09PSAzKSB7XG4gICAgcmV0dXJuIFwibWlkZGxlIGJyYW5jaGVzXCJcbiAgfSBlbHNlIGlmIChkLmRlcHRoID09PSAyKSB7XG4gICAgcmV0dXJuIFwibG93ZXIgYnJhbmNoZXNcIlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBcInRydW5rXCJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAyNSwgcmlnaHQ6IDI1LCBib3R0b206IDI1LCBsZWZ0OiAyNSB9LFxuICAgIHdpZHRoID0gMTQwMCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuICAgIGhlaWdodCA9IDYwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gIGNvbnN0IG9yaWVudGF0aW9ucyA9IHtcbiAgICBcImdyb3ctdXBcIjoge1xuICAgICAgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLFxuICAgICAgeDogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC54O1xuICAgICAgfSxcbiAgICAgIHk6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGhlaWdodCAtIGQueTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gLmRhdGEoZDMuZW50cmllcyhvcmllbnRhdGlvbnMpKVxuICBsZXQgc3ZnID0gZDNcbiAgICAuc2VsZWN0KFwiYm9keVwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4ucmlnaHQpXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgLy8gTG9hZCBhbmQgY29udmVydCBjc3YgZGF0YSA9PiBlYWNoIHJvdyBiZWNvbWVzIGFuIG9iamVjdCB3aXRoIGNvbHVtbnMgYXMga2V5c1xuICBkMy5jc3YoXCJzcmMvZGF0YS9iYmdfZGF0YTE5MTIwNC5jc3ZcIikudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgXG4gICAgLy8gQ29udmVydCBkYXRhIHRvIGhpZXJhcmNoaWNhbCBzdHJ1Y3R1cmVcbiAgICBsZXQgYmJnX2RhdGEgPSBjb252ZXJ0RmV0Y2hlZERhdGEoZGF0YSk7XG5cbiAgICAvLyBDcmVhdGUgdHJlZSBhbmQgYXNzaWduIHNpemUgZnJvbSBvcmllbnRhdGlvbnNcbiAgICBsZXQgdHJlZW1hcCA9IGQzLnRyZWUoKS5zaXplKFtoZWlnaHQsIHdpZHRoXSk7XG5cbiAgICAvLyBBc3NpZ24gcm9vdCBub2RlXG4gICAgbGV0IHJvb3QgPSBkMy5oaWVyYXJjaHkoYmJnX2RhdGEsIGQgPT4geyByZXR1cm4gZC5jaGlsZHJlbiB9KTtcbiAgICByb290LngwID0gaGVpZ2h0IC8gMjtcbiAgICByb290LnkwID0gMDtcblxuICAgIC8vIENvbGxhcHNlIG5vZGUgYW5kIHJlY3Vyc2l2ZWx5IGNvbGxhcHNlIGFsbCBjaGlsZHJlblxuICAgIC8vIGNvbnN0IGNvbGxhcHNlID0gZCA9PiB7XG4gICAgLy8gICBpZihkLmNoaWxkcmVuKSB7XG4gICAgLy8gICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlblxuICAgIC8vICAgICBkLl9jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKVxuICAgIC8vICAgICBkLmNoaWxkcmVuID0gbnVsbFxuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGNvbnN0IHVwZGF0ZSA9IHNvdXJjZSA9PiB7XG4gICAgICAvLyBDYXRlZ29yaXplIG5vZGVzIGFuZCBsaW5rc1xuICAgICAgbGV0IG5vZGVzID0gdHJlZW1hcChyb290KTtcbiAgICAgIGNvbnN0IGxpbmtzID0gbm9kZXMuZGVzY2VuZGFudHMoKS5zbGljZSgxKTtcblxuICAgICAgLy8gRGVjbGFyZSB2YXJpYWJsZXMgdXNlZCBmb3IgYW5pbWF0aW9uIHRocm91Z2hvdXRcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gMTUwMDtcblxuICAgICAgLy8gTm9ybWFsaXplIGRlcHRoXG4gICAgICBub2Rlcy5kZXNjZW5kYW50cygpLmZvckVhY2goZCA9PiB7ZC55ID0gZC5kZXB0aCAqIDE1MH0pO1xuICAgICAgLy8vLy8vLy8vIE5vZGVzIC8vLy8vLy8vL1xuICAgICAgLy8gVXBkYXRlIHRoZSBub2Rlc1xuICAgICAgbGV0IG5vZGUgPSBzdmdcbiAgICAgICAgLnNlbGVjdEFsbChcImcubm9kZVwiKVxuICAgICAgICAuZGF0YShub2Rlcy5kZXNjZW5kYW50cygpLCBkID0+IHsgcmV0dXJuIGQuaWQgfHwgKGQuaWQgPSArK2kpOyB9KVxuXG4gICAgICAvLyBDcmVhdGUgbm9kZXNcbiAgICAgIGxldCBub2RlRW50ZXIgPSBub2RlXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJub2RlXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4geyByZXR1cm4gYHRyYW5zbGF0ZSgke3NvdXJjZS55MH0sICR7c291cmNlLngwfSlgOyB9KVxuICAgICAgICAub24oJ2NsaWNrJywgKGQpID0+IGNsaWNrKGQpKTtcbiAgICAgICAgXG4gICAgICAvLyBBZGQgQ2lyY2xlIHRvIG5vZGVzXG4gICAgICBub2RlRW50ZXJcbiAgICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4ge1xuICAgICAgICAgIHJldHVybiBgJHtrbGFzcyhkKX1gO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcInJcIiwgNylcbiAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgICByZXR1cm4gZC5jaGlsZHJlbiA/IFwicmdiKDg5LCA2NiwgNTQpXCIgOiBcInJnYig2NCwgMTI1LCAxOTQpXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBOb2RlIGxhYmVsc1xuICAgICAgbm9kZUVudGVyXG4gICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC50ZXh0KGQgPT4ge1xuICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZS5jb21tb25OYW1lXG4gICAgICAgICAgICA/IGAtICR7ZC5kYXRhLm5hbWUuY29tbW9uTmFtZX0gLWBcbiAgICAgICAgICAgIDogYC0gJHtkLmRhdGEubmFtZX0gLWA7IFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcInhcIiwgZCA9PiB7IHJldHVybiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gLTEzIDogMTM7IH0pXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgXCIuMzVlbVwiKVxuICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIGQgPT4geyByZXR1cm4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/IFwiZW5kXCIgOiBcInN0YXJ0XCI7IH0pXG5cbiAgICAgIC8vIEV4ZWN1dGUgdXBkYXRpbmcgbm9kZXNcbiAgICAgIGNvbnN0IG5vZGVVcGRhdGUgPSBub2RlRW50ZXIubWVyZ2Uobm9kZSk7XG5cbiAgICAgIC8vIFRyYW5zaXRpb24gdG8gcHJvcGVyIG5vZGUgcG9zaXRpb25cbiAgICAgIG5vZGVVcGRhdGUudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZCA9PiB7IFxuICAgICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7ZC55fSwgJHtkLnh9KWA7IH0pO1xuICAgICAgXG4gICAgICBub2RlVXBkYXRlLnNlbGVjdCgnY2lyY2xlLmJyYW5jaGVzJylcbiAgICAgICAgLmF0dHIoJ3InLCA3KVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4geyBcbiAgICAgICAgICByZXR1cm4gZC5jaGlsZHJlbiA/IFwicmdiKDg5LCA2NiwgNTQpXCIgOiBcInJnYig2NCwgMTI1LCAxOTQpXCI7IFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignY3Vyc29yJywgJ3BvaW50ZXInKTtcblxuICAgICAgLy8gUmVtb3ZlIGFueSBleGl0aW5nIG5vZGVzXG4gICAgICBsZXQgbm9kZUV4aXQgPSBub2RlLmV4aXQoKS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBkID0+IHsgcmV0dXJuIGB0cmFuc2xhdGUoJHtzb3VyY2UueX0sICR7c291cmNlLnh9KWA7IH0pXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gUmVkdWNlIGV4aXRpbmcgY2lyY2xlcyBzaXplIHRvIDBcbiAgICAgIG5vZGVFeGl0LnNlbGVjdCgnLmJyYW5jaGVzJylcbiAgICAgICAgLmF0dHIoJ3InLCAxZS02KTtcblxuICAgICAgLy8gUmVkdWNlIGxhYmVsIG9wYWNpdHlcbiAgICAgIG5vZGVFeGl0LnNlbGVjdCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMWUtNik7XG4gICAgXG4gICAgICAvLy8vLy8vLy8gTGlua3MgLy8vLy8vLy8vXG4gICAgICAvLyBDcmVhdGUgcGF0aCBiZXR3ZWVuIHBhcmVudCBhbmQgY2hpbGRcbiAgICAgIGNvbnN0IGRpYWdvbmFsID0gKHN0YXJ0LCBkZWx0YSkgPT4ge1xuICAgICAgICByZXR1cm4gYE0gJHtzdGFydC55fSAke3N0YXJ0Lnh9IFxuICAgICAgICAgICAgQyAkeyhzdGFydC55ICsgZGVsdGEueSkgLyAyfSAke3N0YXJ0Lnh9LFxuICAgICAgICAgICAgJHsoc3RhcnQueSArIGRlbHRhLnkpIC8gMn0gJHtkZWx0YS54fSxcbiAgICAgICAgICAgICR7ZGVsdGEueX0gJHtkZWx0YS54fWA7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBsaW5rc1xuICAgICAgbGV0IGxpbmsgPSBzdmcuc2VsZWN0QWxsKFwiLmxpbmtcIilcbiAgICAgICAgLmRhdGEobGlua3MsIGQgPT4geyByZXR1cm4gZC5pZCB9KTtcblxuICAgICAgLy8gVXBkYXRlICdyZXZlYWxlZCcgbGlua3NcbiAgICAgIGxldCBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKClcbiAgICAgICAgLmluc2VydChcInBhdGhcIiwgXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiB7IHJldHVybiBgbGluayAke2tsYXNzKGQpfWA7IH0pXG4gICAgICAgIC5hdHRyKFwiZFwiLCBkID0+IHsgXG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSB7eDogc291cmNlLngwLCB5OiBzb3VyY2UueTB9XG4gICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwoc3RhcnQsIHN0YXJ0KSBcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIFVwZGF0ZVxuICAgICAgY29uc3QgbGlua1VwZGF0ZSA9IGxpbmtFbnRlci5tZXJnZShsaW5rKTtcblxuICAgICAgLy8gQWRkIHRyYW5zaXRpb24gdG8gcGFyZW50IGVsZW1lbnRcbiAgICAgIGxpbmtVcGRhdGUudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ2QnLCBkID0+IHsgXG4gICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwoZCwgZC5wYXJlbnQpOyB9KVxuXG4gICAgICAvLyBSZW1vdmUgYW55IGV4aXRpbmcgbGlua3NcbiAgICAgIGNvbnN0IGxpbmtFeGl0ID0gbGluay5leGl0KCkudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ2QnLCBkID0+IHsgXG4gICAgICAgICAgY29uc3QgbyA9IHt4OiBzb3VyY2UueCwgeTogc291cmNlLnl9XG4gICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbykgXG4gICAgICAgIH0pXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gU3RvcmUgb2xkIHBvc2l0aW9ucyBmb3IgdHJhbnNpdGlvblxuICAgICAgbm9kZXMuZGVzY2VuZGFudHMoKS5mb3JFYWNoKGZ1bmN0aW9uKGQpe1xuICAgICAgICBkLngwID0gZC54O1xuICAgICAgICBkLnkwID0gZC55O1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEhhbmRsZSBjbGljayAtIHNldCB2aXNpYmlsaXR5IHByb3BlcnR5XG4gICAgICBjb25zdCBjbGljayA9IGQgPT4ge1xuICAgICAgICBpZiAoZC5kZXB0aCA9PT0gNCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwibGVhZiBub2RlIVwiKVxuICAgICAgICB9IGVsc2UgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZC5jaGlsZHJlbiA9IGQuX2NoaWxkcmVuO1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGUoZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVjdXJzaXZlbHkgY29sbGFwc2UgYWxsIG5vZGVzIGVhY2ggY29sbGVjdGlvbiBjb250YWluc1xuICAgIC8vIHJvb3QuY2hpbGRyZW5bMF0uY2hpbGRyZW4uZm9yRWFjaChjb2xsZWN0aW9uID0+IHtcbiAgICAvLyAgIGNvbGxlY3Rpb24uZGVzY2VuZGFudHMoKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAvLyAgICAgY2hpbGQuX2NoaWxkcmVuID0gY2hpbGQuY2hpbGRyZW47XG4gICAgLy8gICAgIGNoaWxkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0pO1xuXG4gICAgdXBkYXRlKHJvb3QpOyAgICBcbiAgfSk7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==