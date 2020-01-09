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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnZlcnRfZmV0Y2hlZF9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NyZWF0ZV90cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kIiwiY3JlYXRlVHJlZSIsImZldGNoZWREYXRhIiwiaGllcmFyY2hpY2FsRGF0YSIsImQzIiwibmVzdCIsImtleSIsImQiLCJob21lIiwiY29sbGVjdGlvbiIsImdlbnVzIiwiZW50cmllcyIsInNoYXBlZEhpZXJhcmNoaWNhbERhdGEiLCJtYXAiLCJ2YWx1ZXMiLCJzcGVjaW1lbiIsInNwZWNpZXMiLCJjb21tb25OYW1lIiwiZmFtaWx5IiwiYWNjZXNzaW9uIiwicHJvdmVuYW5jZSIsImtsYXNzIiwiZGF0YSIsIm5hbWUiLCJkZXB0aCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0Iiwib3JpZW50YXRpb25zIiwic2l6ZSIsIngiLCJ5Iiwic3ZnIiwic2VsZWN0IiwiYXR0ciIsImNzdiIsInRoZW4iLCJiYmdfZGF0YSIsImNvbnZlcnRGZXRjaGVkRGF0YSIsInRyZWVtYXAiLCJ0cmVlIiwicm9vdCIsImhpZXJhcmNoeSIsImNoaWxkcmVuIiwieDAiLCJ5MCIsInVwZGF0ZSIsInNvdXJjZSIsIm5vZGVzIiwibGlua3MiLCJkZXNjZW5kYW50cyIsInNsaWNlIiwiaSIsImR1cmF0aW9uIiwiZm9yRWFjaCIsIm5vZGUiLCJzZWxlY3RBbGwiLCJpZCIsIm5vZGVFbnRlciIsImVudGVyIiwib24iLCJjbGljayIsInN0eWxlIiwidGV4dCIsIl9jaGlsZHJlbiIsIm5vZGVVcGRhdGUiLCJtZXJnZSIsInRyYW5zaXRpb24iLCJub2RlRXhpdCIsImV4aXQiLCJyZW1vdmUiLCJkaWFnb25hbCIsInN0YXJ0IiwiZGVsdGEiLCJsaW5rIiwibGlua0VudGVyIiwiaW5zZXJ0IiwibGlua1VwZGF0ZSIsInBhcmVudCIsImxpbmtFeGl0IiwibyIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUNoREMsVUFBUSxDQUFDQyxJQUFULENBQWNDLE1BQWQsQ0FBcUIsYUFBckI7QUFDQUMsc0VBQVU7QUFDWCxDQUhELEU7Ozs7Ozs7Ozs7OztBQ0xBO0FBQWUseUVBQUNDLFdBQUQsRUFBaUI7QUFDOUI7QUFDRSxNQUFNQyxnQkFBZ0IsR0FBR0MsRUFBRSxD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MU1ELEU7Ozs7Ozs7Ozs7O0FDaEJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBjcmVhdGVUcmVlIGZyb20gXCIuL3NjcmlwdHMvY3JlYXRlX3RyZWVcIjtcblxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKFwiSGVsbG8gV29ybGRcIilcbiAgY3JlYXRlVHJlZSgpO1xufSkiLCJleHBvcnQgZGVmYXVsdCAoZmV0Y2hlZERhdGEpID0+IHtcbiAgLy8gQ29udmVydCBkYXRhIHRvIGhpZXJhcmNoaWNhbCBzdHJ1Y3R1cmVcbiAgICBjb25zdCBoaWVyYXJjaGljYWxEYXRhID0gZDMubmVzdCgpXG4gICAgICAua2V5KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaG9tZTtcbiAgICAgIH0pXG4gICAgICAua2V5KGZ1bmN0aW9uKGQpIHsgXG4gICAgICAgIHJldHVybiBkLmNvbGxlY3Rpb247IFxuICAgICAgfSlcbiAgICAgIC5rZXkoZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgcmV0dXJuIGQuZ2VudXM7IFxuICAgICAgfSlcbiAgICAgIC5lbnRyaWVzKGZldGNoZWREYXRhKVxuXG4gICAgLy8gQ29ycmVjdCBrZXkvdmFsdWUgZm9ybWF0IGZvciBkMy5oaWVyYXJjaHkgYW5kIC50cmVlXG4gICAgY29uc3Qgc2hhcGVkSGllcmFyY2hpY2FsRGF0YSA9IHtcbiAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBoaWVyYXJjaGljYWxEYXRhLm1hcChob21lID0+IHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFwibmFtZVwiOiBob21lLmtleSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IGhvbWUudmFsdWVzLm1hcChjb2xsZWN0aW9uID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IGNvbGxlY3Rpb24ua2V5LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IGNvbGxlY3Rpb24udmFsdWVzLm1hcChnZW51cyA9PiB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IGdlbnVzLmtleSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogZ2VudXMudmFsdWVzLm1hcChzcGVjaW1lbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtjb2xsZWN0aW9uLGdlbnVzLHNwZWNpZXMsY29tbW9uTmFtZSxmYW1pbHksYWNjZXNzaW9uLHByb3ZlbmFuY2V9ID0gc3BlY2ltZW47XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOiBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogZmFtaWx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYXRpbk5hbWVcIjogYCR7Z2VudXN9ICR7c3BlY2llc31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21tb25OYW1lXCI6IGNvbW1vbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFjY2Vzc2lvblwiOiBhY2Nlc3Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb3ZlbmFuY2VcIjogcHJvdmVuYW5jZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBjb2xsZWN0aW9uLGdlbnVzLHNwZWNpZXMsY29tbW9uTmFtZSxmYW1pbHksYWNjZXNzaW9uLHByb3ZlbmFuY2VcbiAgICAvLyBoaWVyYXJjaGljYWxEYXRhLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgIC8vICAgZC5uYW1lID0gZC5rZXk7XG4gICAgLy8gICBkLmNoaWxkcmVuID0gZC52YWx1ZXM7XG4gICAgLy8gICBkLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpe1xuICAgIC8vICAgICBjaGlsZC5uYW1lID0gY2hpbGQua2V5O1xuICAgIC8vICAgICBjaGlsZC5jaGlsZHJlbiA9IGNoaWxkLnZhbHVlcztcbiAgICAvLyAgICAgY2hpbGQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihncmFuZGNoaWxkKSB7XG4gICAgLy8gICAgICAgZ3JhbmRjaGlsZC5uYW1lID0gZ3JhbmRjaGlsZC5rZXk7XG4gICAgLy8gICAgICAgZ3JhbmRjaGlsZC5jaGlsZHJlbiA9IGdyYW5kY2hpbGQudmFsdWVzO1xuICAgIC8vICAgICAgIGdyYW5kY2hpbGQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihncmVhdGdyYW5kY2hpbGQpIHtcbiAgICAvLyAgICAgICAgIGdyZWF0Z3JhbmRjaGlsZC5uYW1lID0gZ3JlYXRncmFuZGNoaWxkLmtleTtcbiAgICAvLyAgICAgICAgIGdyZWF0Z3JhbmRjaGlsZC5jaGlsZHJlbiA9IGdyZWF0Z3JhbmRjaGlsZC52YWx1ZXM7XG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH0pXG4gICAgLy8gfSlcblxuICByZXR1cm4gc2hhcGVkSGllcmFyY2hpY2FsRGF0YTtcbn0iLCJpbXBvcnQgY29udmVydEZldGNoZWREYXRhIGZyb20gXCIuL2NvbnZlcnRfZmV0Y2hlZF9kYXRhXCI7XG5cbmNvbnN0IGtsYXNzID0gKGQpID0+IHtcbiAgaWYgKGQuZGF0YS5uYW1lLmNvbW1vbk5hbWUpIHtcbiAgICByZXR1cm4gXCJsZWF2ZXNcIlxuICB9IGVsc2UgaWYgKGQuZGVwdGggPT09IDQpIHtcbiAgICByZXR1cm4gXCJ1cHBlciBicmFuY2hlc1wiXG4gIH0gZWxzZSBpZiAoZC5kZXB0aCA9PT0gMykge1xuICAgIHJldHVybiBcIm1pZGRsZSBicmFuY2hlc1wiXG4gIH0gZWxzZSBpZiAoZC5kZXB0aCA9PT0gMikge1xuICAgIHJldHVybiBcImxvd2VyIGJyYW5jaGVzXCJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJ0cnVua1wiXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMjUsIHJpZ2h0OiAyNSwgYm90dG9tOiAyNSwgbGVmdDogMjUgfSxcbiAgICB3aWR0aCA9IDE0MDAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCxcbiAgICBoZWlnaHQgPSA2MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICBjb25zdCBvcmllbnRhdGlvbnMgPSB7XG4gICAgXCJncm93LXVwXCI6IHtcbiAgICAgIHNpemU6IFt3aWR0aCwgaGVpZ2h0XSxcbiAgICAgIHg6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQueDtcbiAgICAgIH0sXG4gICAgICB5OiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBoZWlnaHQgLSBkLnk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIC5kYXRhKGQzLmVudHJpZXMob3JpZW50YXRpb25zKSlcbiAgbGV0IHN2ZyA9IGQzXG4gICAgLnNlbGVjdChcImJvZHlcIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gIC8vIExvYWQgYW5kIGNvbnZlcnQgY3N2IGRhdGEgPT4gZWFjaCByb3cgYmVjb21lcyBhbiBvYmplY3Qgd2l0aCBjb2x1bW5zIGFzIGtleXNcbiAgZDMuY3N2KFwic3JjL2RhdGEvYmJnX2RhdGExOTEyMDQuY3N2XCIpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgIFxuICAgIC8vIENvbnZlcnQgZGF0YSB0byBoaWVyYXJjaGljYWwgc3RydWN0dXJlXG4gICAgbGV0IGJiZ19kYXRhID0gY29udmVydEZldGNoZWREYXRhKGRhdGEpO1xuXG4gICAgLy8gQ3JlYXRlIHRyZWUgYW5kIGFzc2lnbiBzaXplIGZyb20gb3JpZW50YXRpb25zXG4gICAgbGV0IHRyZWVtYXAgPSBkMy50cmVlKCkuc2l6ZShbaGVpZ2h0LCB3aWR0aF0pO1xuXG4gICAgLy8gQXNzaWduIHJvb3Qgbm9kZVxuICAgIGxldCByb290ID0gZDMuaGllcmFyY2h5KGJiZ19kYXRhLCBkID0+IHsgcmV0dXJuIGQuY2hpbGRyZW4gfSk7XG4gICAgcm9vdC54MCA9IGhlaWdodCAvIDI7XG4gICAgcm9vdC55MCA9IDA7XG5cbiAgICAvLyBDb2xsYXBzZSBub2RlIGFuZCByZWN1cnNpdmVseSBjb2xsYXBzZSBhbGwgY2hpbGRyZW5cbiAgICAvLyBjb25zdCBjb2xsYXBzZSA9IGQgPT4ge1xuICAgIC8vICAgaWYoZC5jaGlsZHJlbikge1xuICAgIC8vICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW5cbiAgICAvLyAgICAgZC5fY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSlcbiAgICAvLyAgICAgZC5jaGlsZHJlbiA9IG51bGxcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICBjb25zdCB1cGRhdGUgPSBzb3VyY2UgPT4ge1xuICAgICAgLy8gQ2F0ZWdvcml6ZSBub2RlcyBhbmQgbGlua3NcbiAgICAgIGxldCBub2RlcyA9IHRyZWVtYXAocm9vdCk7XG4gICAgICBjb25zdCBsaW5rcyA9IG5vZGVzLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSk7XG5cbiAgICAgIC8vIERlY2xhcmUgdmFyaWFibGVzIHVzZWQgZm9yIGFuaW1hdGlvbiB0aHJvdWdob3V0XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IDE1MDA7XG5cbiAgICAgIC8vIE5vcm1hbGl6ZSBkZXB0aFxuICAgICAgbm9kZXMuZGVzY2VuZGFudHMoKS5mb3JFYWNoKGQgPT4ge2QueSA9IGQuZGVwdGggKiAxNTB9KTtcbiAgICAgIC8vLy8vLy8vLyBOb2RlcyAvLy8vLy8vLy9cbiAgICAgIC8vIFVwZGF0ZSB0aGUgbm9kZXNcbiAgICAgIGxldCBub2RlID0gc3ZnXG4gICAgICAgIC5zZWxlY3RBbGwoXCJnLm5vZGVcIilcbiAgICAgICAgLmRhdGEobm9kZXMuZGVzY2VuZGFudHMoKSwgZCA9PiB7IHJldHVybiBkLmlkIHx8IChkLmlkID0gKytpKTsgfSlcblxuICAgICAgLy8gQ3JlYXRlIG5vZGVzXG4gICAgICBsZXQgbm9kZUVudGVyID0gbm9kZVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibm9kZVwiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBkID0+IHsgcmV0dXJuIGB0cmFuc2xhdGUoJHtzb3VyY2UueTB9LCAke3NvdXJjZS54MH0pYDsgfSlcbiAgICAgICAgLm9uKCdjbGljaycsIChkKSA9PiBjbGljayhkKSk7XG4gICAgICAgIFxuICAgICAgLy8gQWRkIENpcmNsZSB0byBub2Rlc1xuICAgICAgbm9kZUVudGVyXG4gICAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBkID0+IHtcbiAgICAgICAgICByZXR1cm4gYCR7a2xhc3MoZCl9YDtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJyXCIsIDcpXG4gICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIGQuY2hpbGRyZW4gPyBcInJnYig4OSwgNjYsIDU0KVwiIDogXCJyZ2IoNjQsIDEyNSwgMTk0KVwiO1xuICAgICAgICB9KTtcblxuICAgICAgLy8gTm9kZSBsYWJlbHNcbiAgICAgIG5vZGVFbnRlclxuICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAudGV4dChkID0+IHtcbiAgICAgICAgICByZXR1cm4gZC5kYXRhLm5hbWUuY29tbW9uTmFtZVxuICAgICAgICAgICAgPyBgLSAke2QuZGF0YS5uYW1lLmNvbW1vbk5hbWV9IC1gXG4gICAgICAgICAgICA6IGAtICR7ZC5kYXRhLm5hbWV9IC1gOyBcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJ4XCIsIGQgPT4geyByZXR1cm4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/IC0xMyA6IDEzOyB9KVxuICAgICAgICAuYXR0cihcImR5XCIsIFwiLjM1ZW1cIilcbiAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBkID0+IHsgcmV0dXJuIGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyBcImVuZFwiIDogXCJzdGFydFwiOyB9KVxuXG4gICAgICAvLyBFeGVjdXRlIHVwZGF0aW5nIG5vZGVzXG4gICAgICBjb25zdCBub2RlVXBkYXRlID0gbm9kZUVudGVyLm1lcmdlKG5vZGUpO1xuXG4gICAgICAvLyBUcmFuc2l0aW9uIHRvIHByb3BlciBub2RlIHBvc2l0aW9uXG4gICAgICBub2RlVXBkYXRlLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4geyBcbiAgICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke2QueX0sICR7ZC54fSlgOyB9KTtcbiAgICAgIFxuICAgICAgbm9kZVVwZGF0ZS5zZWxlY3QoJ2NpcmNsZS5icmFuY2hlcycpXG4gICAgICAgIC5hdHRyKCdyJywgNylcbiAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IHsgXG4gICAgICAgICAgcmV0dXJuIGQuY2hpbGRyZW4gPyBcInJnYig4OSwgNjYsIDU0KVwiIDogXCJyZ2IoNjQsIDEyNSwgMTk0KVwiOyBcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2N1cnNvcicsICdwb2ludGVyJyk7XG5cbiAgICAgIC8vIFJlbW92ZSBhbnkgZXhpdGluZyBub2Rlc1xuICAgICAgbGV0IG5vZGVFeGl0ID0gbm9kZS5leGl0KCkudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZCA9PiB7IHJldHVybiBgdHJhbnNsYXRlKCR7c291cmNlLnl9LCAke3NvdXJjZS54fSlgOyB9KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIFJlZHVjZSBleGl0aW5nIGNpcmNsZXMgc2l6ZSB0byAwXG4gICAgICBub2RlRXhpdC5zZWxlY3QoJy5icmFuY2hlcycpXG4gICAgICAgIC5hdHRyKCdyJywgMWUtNik7XG5cbiAgICAgIC8vIFJlZHVjZSBsYWJlbCBvcGFjaXR5XG4gICAgICBub2RlRXhpdC5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDFlLTYpO1xuICAgIFxuICAgICAgLy8vLy8vLy8vIExpbmtzIC8vLy8vLy8vL1xuICAgICAgLy8gQ3JlYXRlIHBhdGggYmV0d2VlbiBwYXJlbnQgYW5kIGNoaWxkXG4gICAgICBjb25zdCBkaWFnb25hbCA9IChzdGFydCwgZGVsdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGBNICR7c3RhcnQueX0gJHtzdGFydC54fSBcbiAgICAgICAgICAgIEMgJHsoc3RhcnQueSArIGRlbHRhLnkpIC8gMn0gJHtzdGFydC54fSxcbiAgICAgICAgICAgICR7KHN0YXJ0LnkgKyBkZWx0YS55KSAvIDJ9ICR7ZGVsdGEueH0sXG4gICAgICAgICAgICAke2RlbHRhLnl9ICR7ZGVsdGEueH1gO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgbGlua3NcbiAgICAgIGxldCBsaW5rID0gc3ZnLnNlbGVjdEFsbChcIi5saW5rXCIpXG4gICAgICAgIC5kYXRhKGxpbmtzLCBkID0+IHsgcmV0dXJuIGQuaWQgfSk7XG5cbiAgICAgIC8vIFVwZGF0ZSAncmV2ZWFsZWQnIGxpbmtzXG4gICAgICBsZXQgbGlua0VudGVyID0gbGluay5lbnRlcigpXG4gICAgICAgIC5pbnNlcnQoXCJwYXRoXCIsIFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4geyByZXR1cm4gYGxpbmsgJHtrbGFzcyhkKX1gOyB9KVxuICAgICAgICAuYXR0cihcImRcIiwgZCA9PiB7IFxuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0ge3g6IHNvdXJjZS54MCwgeTogc291cmNlLnkwfVxuICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKHN0YXJ0LCBzdGFydCkgXG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBVcGRhdGVcbiAgICAgIGNvbnN0IGxpbmtVcGRhdGUgPSBsaW5rRW50ZXIubWVyZ2UobGluayk7XG5cbiAgICAgIC8vIEFkZCB0cmFuc2l0aW9uIHRvIHBhcmVudCBlbGVtZW50XG4gICAgICBsaW5rVXBkYXRlLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCdkJywgZCA9PiB7IFxuICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKGQsIGQucGFyZW50KTsgfSlcblxuICAgICAgLy8gUmVtb3ZlIGFueSBleGl0aW5nIGxpbmtzXG4gICAgICBjb25zdCBsaW5rRXhpdCA9IGxpbmsuZXhpdCgpLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCdkJywgZCA9PiB7IFxuICAgICAgICAgIGNvbnN0IG8gPSB7eDogc291cmNlLngsIHk6IHNvdXJjZS55fVxuICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pIFxuICAgICAgICB9KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIFN0b3JlIG9sZCBwb3NpdGlvbnMgZm9yIHRyYW5zaXRpb25cbiAgICAgIG5vZGVzLmRlc2NlbmRhbnRzKCkuZm9yRWFjaChmdW5jdGlvbihkKXtcbiAgICAgICAgZC54MCA9IGQueDtcbiAgICAgICAgZC55MCA9IGQueTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBIYW5kbGUgY2xpY2sgLSBzZXQgdmlzaWJpbGl0eSBwcm9wZXJ0eVxuICAgICAgY29uc3QgY2xpY2sgPSBkID0+IHtcbiAgICAgICAgaWYgKGQuZGVwdGggPT09IDQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImxlYWYgbm9kZSFcIilcbiAgICAgICAgfSBlbHNlIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBkLl9jaGlsZHJlbjtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlKGQpO1xuICAgICAgICBjb25zb2xlLmxvZyhkKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbGxhcHNlIGFsbCBub2RlcyBlYWNoIGNvbGxlY3Rpb24gY29udGFpbnNcbiAgICByb290LmNoaWxkcmVuWzBdLmNoaWxkcmVuLmZvckVhY2goY29sbGVjdGlvbiA9PiB7XG4gICAgICBjb2xsZWN0aW9uLmRlc2NlbmRhbnRzKCkuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNoaWxkLl9jaGlsZHJlbiA9IGNoaWxkLmNoaWxkcmVuO1xuICAgICAgICBjaGlsZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZShyb290KTsgICAgXG4gIH0pO1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=