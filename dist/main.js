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
  if (d.depth === 4) {
    return "upper branches";
  } else if (d.depth === 3) {
    return "middle branches";
  } else if (d.depth === 2) {
    return "lower branches";
  } else if (d.depth === 4) {
    return "leaves";
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
    var bbg_data = Object(_convert_fetched_data__WEBPACK_IMPORTED_MODULE_0__["default"])(data); // svg.each(() => {
    //   const svg = d3.select(this)
    // Create tree and assign size from orientations

    var treemap = d3.tree().size([height, width]); // Assign root node

    var root = d3.hierarchy(bbg_data, function (d) {
      return d.children;
    });
    root.x0 = height / 2;
    root.y0 = 0; // Collapse node and recursively collapse all children

    var collapse = function collapse(d) {
      if (d.children) {
        d._children = d.children;

        d._children.forEach(collapse);

        d.children = null;
      }
    }; // Collapse after collections


    var update = function update(source) {
      // Categorize nodes and links
      var nodes = treemap(root);
      var links = nodes.descendants().slice(1); // Declare variables used for animation throughout

      var i = 0;
      var duration = 750; // Normalize depth

      nodes.descendants().forEach(function (d) {
        d.y = d.depth * 180;
      }); ///////// Nodes /////////
      // Update the nodes

      var node = svg.selectAll(".node").data(nodes.descendants(), function (d) {
        return d.id || (d.id = ++i);
      }); // Create node circles

      var nodeEnter = node.enter().append("g").attr("class", function (d) {
        return "node ".concat(klass(d));
      }).attr("transform", function (d) {
        return "translate(".concat(source.y0, ", ").concat(source.x0, ")");
      }).on('click', function (d) {
        return click(d);
      }); // Add Circle to nodes

      nodeEnter.append("circle").attr("r", 7).style("fill", function (d) {
        return d.children ? "#654321" : "#fff";
      }); // Node labels

      nodeEnter.append("text").text(function (d) {
        return d.data.name;
      }).attr("x", function (d) {
        return d.children || d._children ? -13 : 13;
      }).attr("dy", ".35em").attr("text-anchor", function (d) {
        return d.children || d._children ? "end" : "start";
      }); // Execute updating nodes

      var nodeUpdate = nodeEnter.merge(node); // Transition to proper node position

      nodeUpdate.transition().duration(duration).attr("transform", function (d) {
        return "translate(".concat(d.y, ", ").concat(d.x, ")");
      });
      nodeUpdate.select('.node').attr('r', 7).style("fill", function (d) {
        debugger;
        return d.children ? "forestgreen" : "#fff";
      }).attr('cursor', 'pointer'); // Remove any exiting nodes

      var nodeExit = node.exit().transition().duration(duration).attr("transform", function (d) {
        return "translate(".concat(source.y, ", ").concat(source.x, ")");
      }).remove(); // Reduce exiting circles size to 0

      nodeExit.select('.node').attr('r', 1e-6); // Reduce label opacity

      nodeExit.select('text').style('fill-opacity', 1e-6); ///////// Links /////////
      // Create path between parent and child

      var diagonal = function diagonal(s, d) {
        return "M ".concat(s.y, " ").concat(s.x, " \n              C ").concat((s.y + d.y) / 2, " ").concat(s.x, ",\n              ").concat((s.y + d.y) / 2, " ").concat(d.x, ",\n              ").concat(d.y, " ").concat(d.x);
      }; // Update links


      var link = svg.selectAll(".link").data(links, function (d) {
        return d.id;
      }); // Update 'revealed' links

      var linkEnter = link.enter().insert("path", "g").attr("class", function (d) {
        return "link ".concat(klass(d));
      }).attr("d", function (d) {
        var o = {
          x: source.x0,
          y: source.y0
        };
        return diagonal(o, o);
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
      }); // Handle click - set visibility property

      var click = function click(d) {
        if (d.children) {
          debugger;
          d._children = d.children;
          d.children = null;
        } else {
          debugger;
          d.children = d._children;
          d._children = null;
        }

        debugger;
        update(d);
      };
    };

    root.children[0].children.forEach(collapse); // root.children[0].children.forEach((child => { 
    //   // child.children = child._children;
    //   child._children = null;
    // }));

    update(root); // })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnZlcnRfZmV0Y2hlZF9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NyZWF0ZV90cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kIiwiY3JlYXRlVHJlZSIsImZldGNoZWREYXRhIiwiaGllcmFyY2hpY2FsRGF0YSIsImQzIiwibmVzdCIsImtleSIsImQiLCJob21lIiwiY29sbGVjdGlvbiIsImdlbnVzIiwiZW50cmllcyIsInNoYXBlZEhpZXJhcmNoaWNhbERhdGEiLCJtYXAiLCJ2YWx1ZXMiLCJzcGVjaW1lbiIsInNwZWNpZXMiLCJjb21tb25OYW1lIiwiZmFtaWx5IiwiYWNjZXNzaW9uIiwicHJvdmVuYW5jZSIsImtsYXNzIiwiZGVwdGgiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9yaWVudGF0aW9ucyIsInNpemUiLCJ4IiwieSIsInN2ZyIsInNlbGVjdCIsImF0dHIiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsImJiZ19kYXRhIiwiY29udmVydEZldGNoZWREYXRhIiwidHJlZW1hcCIsInRyZWUiLCJyb290IiwiaGllcmFyY2h5IiwiY2hpbGRyZW4iLCJ4MCIsInkwIiwiY29sbGFwc2UiLCJfY2hpbGRyZW4iLCJmb3JFYWNoIiwidXBkYXRlIiwic291cmNlIiwibm9kZXMiLCJsaW5rcyIsImRlc2NlbmRhbnRzIiwic2xpY2UiLCJpIiwiZHVyYXRpb24iLCJub2RlIiwic2VsZWN0QWxsIiwiaWQiLCJub2RlRW50ZXIiLCJlbnRlciIsIm9uIiwiY2xpY2siLCJzdHlsZSIsInRleHQiLCJuYW1lIiwibm9kZVVwZGF0ZSIsIm1lcmdlIiwidHJhbnNpdGlvbiIsIm5vZGVFeGl0IiwiZXhpdCIsInJlbW92ZSIsImRpYWdvbmFsIiwicyIsImxpbmsiLCJsaW5rRW50ZXIiLCJpbnNlcnQiLCJvIiwibGlua1VwZGF0ZSIsInBhcmVudCIsImxpbmtFeGl0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2hEQyxVQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBZCxDQUFxQixhQUFyQjtBQUNBQyxzRUFBVTtBQUNYLENBSEQsRTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBZSx5RUFBQ0MsV0FBRCxFQUFpQjtBQUM5QjtBQUNFLE1BQU1DLGdCQUFnQixHQUFHQyxFQUFFLENBQUNDLElBQUgsR0FDdEJDLEdBRHNCLENB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Q0FyQixXQUFLLENBQUNFLFdBQU4sR0FBb0JMLE9BQXBCLENBQTRCLFVBQVM1QyxDQUFULEVBQVc7QUFDckNBLFNBQUMsQ0FBQ3dDLEVBQUYsR0FBT3hDLENBQUMsQ0FBQ3lCLENBQVQ7QUFDQXpCLFNBQUMsQ0FBQ3lDLEVBQUYsR0FBT3pDLENBQUMsQ0FBQzBCLENBQVQ7QUFDRCxPQUhELEVBaEh1QixDQXFIdkI7O0FBQ0EsVUFBTWlDLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUEzRCxDQUFDLEVBQUk7QUFDakIsWUFBSUEsQ0FBQyxDQUFDdUMsUUFBTixFQUFnQjtBQUNkO0FBQ0F2QyxXQUFDLENBQUMyQyxTQUFGLEdBQWMzQyxDQUFDLENBQUN1QyxRQUFoQjtBQUNBdkMsV0FBQyxDQUFDdUMsUUFBRixHQUFhLElBQWI7QUFDRCxTQUpELE1BSU87QUFDTDtBQUNBdkMsV0FBQyxDQUFDdUMsUUFBRixHQUFhdkMsQ0FBQyxDQUFDMkMsU0FBZjtBQUNBM0MsV0FBQyxDQUFDMkMsU0FBRixHQUFjLElBQWQ7QUFDRDs7QUFDRDtBQUNBRSxjQUFNLENBQUM3QyxDQUFELENBQU47QUFDRCxPQVpEO0FBYUQsS0FuSUQ7O0FBcUlBcUMsUUFBSSxDQUFDRSxRQUFMLENBQWMsQ0FBZCxFQUFpQkEsUUFBakIsQ0FBMEJLLE9BQTFCLENBQWtDRixRQUFsQyxFQWpLc0QsQ0FrS3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBRyxVQUFNLENBQUNSLElBQUQsQ0FBTixDQXZLc0QsQ0F3S3hEO0FBRUQsR0ExS0Q7QUEyS0QsQ0F0TUQsRTs7Ozs7Ozs7Ozs7QUNoQkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGNyZWF0ZVRyZWUgZnJvbSBcIi4vc2NyaXB0cy9jcmVhdGVfdHJlZVwiO1xuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoXCJIZWxsbyBXb3JsZFwiKVxuICBjcmVhdGVUcmVlKCk7XG59KSIsImV4cG9ydCBkZWZhdWx0IChmZXRjaGVkRGF0YSkgPT4ge1xuICAvLyBDb252ZXJ0IGRhdGEgdG8gaGllcmFyY2hpY2FsIHN0cnVjdHVyZVxuICAgIGNvbnN0IGhpZXJhcmNoaWNhbERhdGEgPSBkMy5uZXN0KClcbiAgICAgIC5rZXkoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5ob21lO1xuICAgICAgfSlcbiAgICAgIC5rZXkoZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgcmV0dXJuIGQuY29sbGVjdGlvbjsgXG4gICAgICB9KVxuICAgICAgLmtleShmdW5jdGlvbihkKSB7IFxuICAgICAgICByZXR1cm4gZC5nZW51czsgXG4gICAgICB9KVxuICAgICAgLmVudHJpZXMoZmV0Y2hlZERhdGEpXG5cbiAgICAvLyBDb3JyZWN0IGtleS92YWx1ZSBmb3JtYXQgZm9yIGQzLmhpZXJhcmNoeSBhbmQgLnRyZWVcbiAgICBjb25zdCBzaGFwZWRIaWVyYXJjaGljYWxEYXRhID0ge1xuICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IGhpZXJhcmNoaWNhbERhdGEubWFwKGhvbWUgPT4ge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXCJuYW1lXCI6IGhvbWUua2V5LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogaG9tZS52YWx1ZXMubWFwKGNvbGxlY3Rpb24gPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogY29sbGVjdGlvbi5rZXksXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogY29sbGVjdGlvbi52YWx1ZXMubWFwKGdlbnVzID0+IHtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogZ2VudXMua2V5LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBnZW51cy52YWx1ZXMubWFwKHNwZWNpbWVuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2NvbGxlY3Rpb24sZ2VudXMsc3BlY2llcyxjb21tb25OYW1lLGZhbWlseSxhY2Nlc3Npb24scHJvdmVuYW5jZX0gPSBzcGVjaW1lbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xsZWN0aW9uXCI6IGNvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBmYW1pbHksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhdGluTmFtZVwiOiBgJHtnZW51c30gJHtzcGVjaWVzfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbW1vbk5hbWVcIjogY29tbW9uTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWNjZXNzaW9uXCI6IGFjY2Vzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvdmVuYW5jZVwiOiBwcm92ZW5hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGNvbGxlY3Rpb24sZ2VudXMsc3BlY2llcyxjb21tb25OYW1lLGZhbWlseSxhY2Nlc3Npb24scHJvdmVuYW5jZVxuICAgIC8vIGhpZXJhcmNoaWNhbERhdGEuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgLy8gICBkLm5hbWUgPSBkLmtleTtcbiAgICAvLyAgIGQuY2hpbGRyZW4gPSBkLnZhbHVlcztcbiAgICAvLyAgIGQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCl7XG4gICAgLy8gICAgIGNoaWxkLm5hbWUgPSBjaGlsZC5rZXk7XG4gICAgLy8gICAgIGNoaWxkLmNoaWxkcmVuID0gY2hpbGQudmFsdWVzO1xuICAgIC8vICAgICBjaGlsZC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGdyYW5kY2hpbGQpIHtcbiAgICAvLyAgICAgICBncmFuZGNoaWxkLm5hbWUgPSBncmFuZGNoaWxkLmtleTtcbiAgICAvLyAgICAgICBncmFuZGNoaWxkLmNoaWxkcmVuID0gZ3JhbmRjaGlsZC52YWx1ZXM7XG4gICAgLy8gICAgICAgZ3JhbmRjaGlsZC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGdyZWF0Z3JhbmRjaGlsZCkge1xuICAgIC8vICAgICAgICAgZ3JlYXRncmFuZGNoaWxkLm5hbWUgPSBncmVhdGdyYW5kY2hpbGQua2V5O1xuICAgIC8vICAgICAgICAgZ3JlYXRncmFuZGNoaWxkLmNoaWxkcmVuID0gZ3JlYXRncmFuZGNoaWxkLnZhbHVlcztcbiAgICAvLyAgICAgICB9KVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuXG4gIHJldHVybiBzaGFwZWRIaWVyYXJjaGljYWxEYXRhO1xufSIsImltcG9ydCBjb252ZXJ0RmV0Y2hlZERhdGEgZnJvbSBcIi4vY29udmVydF9mZXRjaGVkX2RhdGFcIjtcblxuY29uc3Qga2xhc3MgPSAoZCkgPT4ge1xuICBpZiAoZC5kZXB0aCA9PT0gNCkge1xuICAgIHJldHVybiBcInVwcGVyIGJyYW5jaGVzXCJcbiAgfSBlbHNlIGlmIChkLmRlcHRoID09PSAzKSB7XG4gICAgcmV0dXJuIFwibWlkZGxlIGJyYW5jaGVzXCJcbiAgfSBlbHNlIGlmIChkLmRlcHRoID09PSAyKSB7XG4gICAgcmV0dXJuIFwibG93ZXIgYnJhbmNoZXNcIlxuICB9IGVsc2UgaWYgKGQuZGVwdGggPT09IDQpIHtcbiAgICByZXR1cm4gXCJsZWF2ZXNcIlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBcInRydW5rXCJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAyNSwgcmlnaHQ6IDI1LCBib3R0b206IDI1LCBsZWZ0OiAyNSB9LFxuICAgIHdpZHRoID0gMTQwMCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuICAgIGhlaWdodCA9IDYwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gIGNvbnN0IG9yaWVudGF0aW9ucyA9IHtcbiAgICBcImdyb3ctdXBcIjoge1xuICAgICAgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLFxuICAgICAgeDogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC54O1xuICAgICAgfSxcbiAgICAgIHk6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGhlaWdodCAtIGQueTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gLmRhdGEoZDMuZW50cmllcyhvcmllbnRhdGlvbnMpKVxuICBsZXQgc3ZnID0gZDNcbiAgICAuc2VsZWN0KFwiYm9keVwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4ucmlnaHQpXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgLy8gTG9hZCBhbmQgY29udmVydCBjc3YgZGF0YSA9PiBlYWNoIHJvdyBiZWNvbWVzIGFuIG9iamVjdCB3aXRoIGNvbHVtbnMgYXMga2V5c1xuICBkMy5jc3YoXCJzcmMvZGF0YS9iYmdfZGF0YTE5MTIwNC5jc3ZcIikudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgXG4gICAgLy8gQ29udmVydCBkYXRhIHRvIGhpZXJhcmNoaWNhbCBzdHJ1Y3R1cmVcbiAgICBsZXQgYmJnX2RhdGEgPSBjb252ZXJ0RmV0Y2hlZERhdGEoZGF0YSk7XG5cbiAgICAvLyBzdmcuZWFjaCgoKSA9PiB7XG4gICAgLy8gICBjb25zdCBzdmcgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgIFxuXG4gICAgICAvLyBDcmVhdGUgdHJlZSBhbmQgYXNzaWduIHNpemUgZnJvbSBvcmllbnRhdGlvbnNcbiAgICAgIGxldCB0cmVlbWFwID0gZDMudHJlZSgpLnNpemUoW2hlaWdodCwgd2lkdGhdKTtcblxuICAgICAgLy8gQXNzaWduIHJvb3Qgbm9kZVxuICAgICAgbGV0IHJvb3QgPSBkMy5oaWVyYXJjaHkoYmJnX2RhdGEsIGQgPT4geyByZXR1cm4gZC5jaGlsZHJlbiB9KTtcbiAgICAgIHJvb3QueDAgPSBoZWlnaHQgLyAyO1xuICAgICAgcm9vdC55MCA9IDA7XG5cbiAgICAgIC8vIENvbGxhcHNlIG5vZGUgYW5kIHJlY3Vyc2l2ZWx5IGNvbGxhcHNlIGFsbCBjaGlsZHJlblxuICAgICAgY29uc3QgY29sbGFwc2UgPSBkID0+IHtcbiAgICAgICAgaWYoZC5jaGlsZHJlbikge1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlblxuICAgICAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpXG4gICAgICAgICAgZC5jaGlsZHJlbiA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDb2xsYXBzZSBhZnRlciBjb2xsZWN0aW9uc1xuICAgICAgXG4gICAgICBjb25zdCB1cGRhdGUgPSBzb3VyY2UgPT4ge1xuICAgICAgICAvLyBDYXRlZ29yaXplIG5vZGVzIGFuZCBsaW5rc1xuICAgICAgICBsZXQgbm9kZXMgPSB0cmVlbWFwKHJvb3QpO1xuICAgICAgICBjb25zdCBsaW5rcyA9IG5vZGVzLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSk7XG5cbiAgICAgICAgLy8gRGVjbGFyZSB2YXJpYWJsZXMgdXNlZCBmb3IgYW5pbWF0aW9uIHRocm91Z2hvdXRcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IDc1MDtcblxuICAgICAgICAvLyBOb3JtYWxpemUgZGVwdGhcbiAgICAgICAgbm9kZXMuZGVzY2VuZGFudHMoKS5mb3JFYWNoKGQgPT4ge2QueSA9IGQuZGVwdGggKiAxODB9KTtcbiAgICAgICAgLy8vLy8vLy8vIE5vZGVzIC8vLy8vLy8vL1xuICAgICAgICAvLyBVcGRhdGUgdGhlIG5vZGVzXG4gICAgICAgIGxldCBub2RlID0gc3ZnXG4gICAgICAgICAgLnNlbGVjdEFsbChcIi5ub2RlXCIpXG4gICAgICAgICAgLmRhdGEobm9kZXMuZGVzY2VuZGFudHMoKSwgZCA9PiB7IHJldHVybiBkLmlkIHx8IChkLmlkID0gKytpKTsgfSlcblxuICAgICAgICAvLyBDcmVhdGUgbm9kZSBjaXJjbGVzXG4gICAgICAgIGxldCBub2RlRW50ZXIgPSBub2RlXG4gICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiB7IFxuICAgICAgICAgICAgcmV0dXJuIGBub2RlICR7a2xhc3MoZCl9YDsgfSlcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBkID0+IHsgcmV0dXJuIGB0cmFuc2xhdGUoJHtzb3VyY2UueTB9LCAke3NvdXJjZS54MH0pYDsgfSlcbiAgICAgICAgICAub24oJ2NsaWNrJywgKGQpID0+IGNsaWNrKGQpKTtcbiAgICAgICAgICBcbiAgICAgICAgLy8gQWRkIENpcmNsZSB0byBub2Rlc1xuICAgICAgICBub2RlRW50ZXJcbiAgICAgICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgLmF0dHIoXCJyXCIsIDcpXG4gICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkLmNoaWxkcmVuID8gXCIjNjU0MzIxXCIgOiBcIiNmZmZcIjtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBOb2RlIGxhYmVsc1xuICAgICAgICBub2RlRW50ZXJcbiAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgIC50ZXh0KGQgPT4geyByZXR1cm4gZC5kYXRhLm5hbWU7IH0pXG4gICAgICAgICAgLmF0dHIoXCJ4XCIsIGQgPT4geyByZXR1cm4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/IC0xMyA6IDEzOyB9KVxuICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIuMzVlbVwiKVxuICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgZCA9PiB7IHJldHVybiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gXCJlbmRcIiA6IFwic3RhcnRcIjsgfSlcblxuICAgICAgICAvLyBFeGVjdXRlIHVwZGF0aW5nIG5vZGVzXG4gICAgICAgIGNvbnN0IG5vZGVVcGRhdGUgPSBub2RlRW50ZXIubWVyZ2Uobm9kZSk7XG5cbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byBwcm9wZXIgbm9kZSBwb3NpdGlvblxuICAgICAgICBub2RlVXBkYXRlLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBkID0+IHsgcmV0dXJuIGB0cmFuc2xhdGUoJHtkLnl9LCAke2QueH0pYDsgfSlcbiAgICAgICAgXG4gICAgICAgIG5vZGVVcGRhdGUuc2VsZWN0KCcubm9kZScpXG4gICAgICAgICAgLmF0dHIoJ3InLCA3KVxuICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiB7IFxuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHJldHVybiBkLmNoaWxkcmVuID8gXCJmb3Jlc3RncmVlblwiIDogXCIjZmZmXCI7IFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmF0dHIoJ2N1cnNvcicsICdwb2ludGVyJyk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBleGl0aW5nIG5vZGVzXG4gICAgICAgIGxldCBub2RlRXhpdCA9IG5vZGUuZXhpdCgpLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBkID0+IHsgcmV0dXJuIGB0cmFuc2xhdGUoJHtzb3VyY2UueX0sICR7c291cmNlLnh9KWA7IH0pXG4gICAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vIFJlZHVjZSBleGl0aW5nIGNpcmNsZXMgc2l6ZSB0byAwXG4gICAgICAgIG5vZGVFeGl0LnNlbGVjdCgnLm5vZGUnKVxuICAgICAgICAgIC5hdHRyKCdyJywgMWUtNik7XG5cbiAgICAgICAgLy8gUmVkdWNlIGxhYmVsIG9wYWNpdHlcbiAgICAgICAgbm9kZUV4aXQuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDFlLTYpO1xuICAgICAgXG4gICAgICAgIC8vLy8vLy8vLyBMaW5rcyAvLy8vLy8vLy9cbiAgICAgICAgLy8gQ3JlYXRlIHBhdGggYmV0d2VlbiBwYXJlbnQgYW5kIGNoaWxkXG4gICAgICAgIGNvbnN0IGRpYWdvbmFsID0gKHMsIGQpID0+IHtcbiAgICAgICAgICByZXR1cm4gYE0gJHtzLnl9ICR7cy54fSBcbiAgICAgICAgICAgICAgQyAkeyhzLnkgKyBkLnkpIC8gMn0gJHtzLnh9LFxuICAgICAgICAgICAgICAkeyhzLnkgKyBkLnkpIC8gMn0gJHtkLnh9LFxuICAgICAgICAgICAgICAke2QueX0gJHtkLnh9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBsaW5rc1xuICAgICAgICBsZXQgbGluayA9IHN2Zy5zZWxlY3RBbGwoXCIubGlua1wiKVxuICAgICAgICAgIC5kYXRhKGxpbmtzLCBkID0+IHsgcmV0dXJuIGQuaWQgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlICdyZXZlYWxlZCcgbGlua3NcbiAgICAgICAgbGV0IGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKVxuICAgICAgICAgIC5pbnNlcnQoXCJwYXRoXCIsIFwiZ1wiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiB7IHJldHVybiBgbGluayAke2tsYXNzKGQpfWA7IH0pXG4gICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4geyBcbiAgICAgICAgICAgIGNvbnN0IG8gPSB7eDogc291cmNlLngwLCB5OiBzb3VyY2UueTB9XG4gICAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbykgXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlXG4gICAgICAgIGNvbnN0IGxpbmtVcGRhdGUgPSBsaW5rRW50ZXIubWVyZ2UobGluayk7XG5cbiAgICAgICAgLy8gQWRkIHRyYW5zaXRpb24gdG8gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgbGlua1VwZGF0ZS50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgICAgLmF0dHIoJ2QnLCBkID0+IHsgcmV0dXJuIGRpYWdvbmFsKGQsIGQucGFyZW50KTsgfSlcblxuICAgICAgICAvLyBSZW1vdmUgYW55IGV4aXRpbmcgbGlua3NcbiAgICAgICAgY29uc3QgbGlua0V4aXQgPSBsaW5rLmV4aXQoKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgICAgLmF0dHIoJ2QnLCBkID0+IHsgXG4gICAgICAgICAgICBjb25zdCBvID0ge3g6IHNvdXJjZS54LCB5OiBzb3VyY2UueX1cbiAgICAgICAgICAgIHJldHVybiBkaWFnb25hbChvLCBvKSBcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgICAvLyBTdG9yZSBvbGQgcG9zaXRpb25zIGZvciB0cmFuc2l0aW9uXG4gICAgICAgIG5vZGVzLmRlc2NlbmRhbnRzKCkuZm9yRWFjaChmdW5jdGlvbihkKXtcbiAgICAgICAgICBkLngwID0gZC54O1xuICAgICAgICAgIGQueTAgPSBkLnk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEhhbmRsZSBjbGljayAtIHNldCB2aXNpYmlsaXR5IHByb3BlcnR5XG4gICAgICAgIGNvbnN0IGNsaWNrID0gZCA9PiB7XG4gICAgICAgICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIGQuY2hpbGRyZW4gPSBkLl9jaGlsZHJlbjtcbiAgICAgICAgICAgIGQuX2NoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICB1cGRhdGUoZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcm9vdC5jaGlsZHJlblswXS5jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKTtcbiAgICAgIC8vIHJvb3QuY2hpbGRyZW5bMF0uY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQgPT4geyBcbiAgICAgIC8vICAgLy8gY2hpbGQuY2hpbGRyZW4gPSBjaGlsZC5fY2hpbGRyZW47XG4gICAgICAvLyAgIGNoaWxkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgICAvLyB9KSk7XG4gICAgICBcbiAgICAgIHVwZGF0ZShyb290KTtcbiAgICAvLyB9KVxuICAgIFxuICB9KTtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9