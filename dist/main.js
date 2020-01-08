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
          o = orientation.value; // Create tree and assign size from orientations

      var treemap = d3.tree().size(o.size); // Assign root node

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
          d.y = d.height * 90;
        }); ///////// Nodes /////////
        // Update the nodes
        // const node = svg.selectAll(".node")
        //   .data(nodes, d => { return d.id || (d.id = ++i); })
        // Group branch and leaf nodes

        var branchNodes = [];
        var leafNodes = [];
        nodes.descendants().forEach(function (node) {
          if (node.depth === 4) {
            leafNodes.push(node);
          } else {
            branchNodes.push(node);
          }
        }); // Create branchNode circles

        var branchNode = svg.selectAll(".branchNode").data(branchNodes, function (d) {
          return d.id || (d.id = ++i);
        });
        var branchNodeEnter = branchNode.enter().append("g").attr("class", "branchNode").on('click', function (d) {
          return click(d);
        }).attr("transform", function (d) {
          return "translate(".concat(d.y, ", ").concat(d.x, ")");
        }); // Add Circle to branchNodes

        branchNodeEnter.append("circle").attr("r", 4.5).attr("cx", o.x).attr("cy", o.y).style("fill", function (d) {
          return d._children ? "#654321" : "#fff";
        }); // Update LeafNodes

        var leafNode = svg.selectAll(".leafNode").data(leafNodes, function (d) {
          return d.id || (d.id = ++i);
        });
        var leafNodeEnter = leafNode.enter().append("g").attr("class", ".leafNode").on('click', function (d) {
          return click(d);
        }).attr("transform", function (d) {
          return "translate(".concat(o.y, ", ").concat(o.x, ")");
        }); // Add Circle to leafNodes

        leafNodeEnter.append("circle").attr("r", 4.5).attr("cx", o.x).attr("cy", o.y).style("fill", function (d) {
          return d._children ? "forestgreen" : "#fff";
        });
        branchNode.append("text").text(function (d) {
          return d.data.name;
        }).attr("x", o.x).attr("dx", 5).attr("y", o.y); ///////// Links /////////
        // Create path between parent and child

        var diagonal = function diagonal(d) {
          return "M ".concat(d.x, " ").concat(o.y(d), " \n              C ").concat(d.x, ",\n              ").concat((o.y(d) + o.y(d.parent)) / 2, " ").concat(d.parent.x, ",\n              ").concat((o.y(d) + o.y(d.parent)) / 2, " ").concat(d.parent.x, ",\n              ").concat(o.y(d.parent));
        }; // Update links


        var link = svg.selectAll(".link").data(links, function (d) {
          return d.id;
        }); // Update 'revealed' links

        var linkEnter = link.enter().append("path").attr("class", function (d) {
          return branchLvl(d);
        }).attr("d", function (d) {
          return diagonal(d);
        }); // Update

        var linkUpdate = linkEnter.merge(link); // Add transition to parent element

        linkUpdate.transition().duration(duration).attr('d', function (d) {
          return diagonal(d);
        }); // Remove any exiting links

        var linkExit = link.exit().transition().duration(duration).attr('d', function (d) {
          return diagonal(d);
        }).remove(); // Store old positions for transition

        nodes.descendants().forEach(function (d) {
          d.x0 = d.x;
          d.y0 = d.y;
        }); // Handle click

        var click = function click(d) {
          if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }

          update(d);
        };
      };

      debugger;
      root.children[0].children.forEach(collapse);
      update(root);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnZlcnRfZmV0Y2hlZF9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NyZWF0ZV90cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kIiwiY3JlYXRlVHJlZSIsImZldGNoZWREYXRhIiwiaGllcmFyY2hpY2FsRGF0YSIsImQzIiwibmVzdCIsImtleSIsImQiLCJob21lIiwiY29sbGVjdGlvbiIsImdlbnVzIiwiZW50cmllcyIsInNoYXBlZEhpZXJhcmNoaWNhbERhdGEiLCJtYXAiLCJ2YWx1ZXMiLCJzcGVjaW1lbiIsInNwZWNpZXMiLCJjb21tb25OYW1lIiwiZmFtaWx5IiwiYWNjZXNzaW9uIiwicHJvdmVuYW5jZSIsImJyYW5jaEx2bCIsImRlcHRoIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJvcmllbnRhdGlvbnMiLCJzaXplIiwieCIsInkiLCJzdmciLCJzZWxlY3QiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZW50ZXIiLCJhdHRyIiwiY3N2IiwidGhlbiIsImJiZ19kYXRhIiwiY29udmVydEZldGNoZWREYXRhIiwiZWFjaCIsIm9yaWVudGF0aW9uIiwibyIsInZhbHVlIiwidHJlZW1hcCIsInRyZWUiLCJyb290IiwiaGllcmFyY2h5IiwiY2hpbGRyZW4iLCJ4MCIsInkwIiwiY29sbGFwc2UiLCJfY2hpbGRyZW4iLCJmb3JFYWNoIiwidXBkYXRlIiwic291cmNlIiwibm9kZXMiLCJsaW5rcyIsImRlc2NlbmRhbnRzIiwic2xpY2UiLCJpIiwiZHVyYXRpb24iLCJicmFuY2hOb2RlcyIsImxlYWZOb2RlcyIsIm5vZGUiLCJwdXNoIiwiYnJhbmNoTm9kZSIsImlkIiwiYnJhbmNoTm9kZUVudGVyIiwib24iLCJjbGljayIsInN0eWxlIiwibGVhZk5vZGUiLCJsZWFmTm9kZUVudGVyIiwidGV4dCIsIm5hbWUiLCJkaWFnb25hbCIsInBhcmVudCIsImxpbmsiLCJsaW5rRW50ZXIiLCJsaW5rVXBkYXRlIiwibWVyZ2UiLCJ0cmFuc2l0aW9uIiwibGlua0V4aXQiLCJleGl0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2hEQyxVQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBZCxDQUFxQixhQUFyQjtBQUNBQyxzRUFBVTtBQUNYLENBSEQsRTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBZSx5RUFB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Q0FDTEEsUUFESyxFQUVkMUIsSUFGYyxDQUVULEdBRlMsRUFFSixVQUFBaEMsQ0FBQyxFQUFJO0FBQUUsaUJBQU95RSxRQUFRLENBQUN6RSxDQUFELENBQWY7QUFBb0IsU0FGdkIsRUFHZGtGLE1BSGMsRUFBakIsQ0FqSHVCLENBc0h2Qjs7QUFDQTdCLGFBQUssQ0FBQ0UsV0FBTixHQUFvQkwsT0FBcEIsQ0FBNEIsVUFBU2xELENBQVQsRUFBVztBQUNyQ0EsV0FBQyxDQUFDOEMsRUFBRixHQUFPOUMsQ0FBQyxDQUFDeUIsQ0FBVDtBQUNBekIsV0FBQyxDQUFDK0MsRUFBRixHQUFPL0MsQ0FBQyxDQUFDMEIsQ0FBVDtBQUNELFNBSEQsRUF2SHVCLENBNEh2Qjs7QUFDQSxZQUFNeUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQW5FLENBQUMsRUFBSTtBQUNqQixjQUFJQSxDQUFDLENBQUM2QyxRQUFOLEVBQWdCO0FBQ2Q3QyxhQUFDLENBQUNpRCxTQUFGLEdBQWNqRCxDQUFDLENBQUM2QyxRQUFoQjtBQUNBN0MsYUFBQyxDQUFDNkMsUUFBRixHQUFhLElBQWI7QUFDRCxXQUhELE1BR087QUFDTDdDLGFBQUMsQ0FBQzZDLFFBQUYsR0FBYTdDLENBQUMsQ0FBQ2lELFNBQWY7QUFDQWpELGFBQUMsQ0FBQ2lELFNBQUYsR0FBYyxJQUFkO0FBQ0Q7O0FBQ0RFLGdCQUFNLENBQUNuRCxDQUFELENBQU47QUFDRCxTQVREO0FBVUQsT0F2SUQ7O0FBeUlBO0FBQ0EyQyxVQUFJLENBQUNFLFFBQUwsQ0FBYyxDQUFkLEVBQWlCQSxRQUFqQixDQUEwQkssT0FBMUIsQ0FBa0NGLFFBQWxDO0FBQ0FHLFlBQU0sQ0FBQ1IsSUFBRCxDQUFOO0FBQ0QsS0FuS0Q7QUFxS0QsR0ExS0Q7QUEyS0QsQ0F4TUQsRTs7Ozs7Ozs7Ozs7QUNkQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgY3JlYXRlVHJlZSBmcm9tIFwiLi9zY3JpcHRzL2NyZWF0ZV90cmVlXCI7XG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChcIkhlbGxvIFdvcmxkXCIpXG4gIGNyZWF0ZVRyZWUoKTtcbn0pIiwiZXhwb3J0IGRlZmF1bHQgKGZldGNoZWREYXRhKSA9PiB7XG4gIC8vIENvbnZlcnQgZGF0YSB0byBoaWVyYXJjaGljYWwgc3RydWN0dXJlXG4gICAgY29uc3QgaGllcmFyY2hpY2FsRGF0YSA9IGQzLm5lc3QoKVxuICAgICAgLmtleShmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLmhvbWU7XG4gICAgICB9KVxuICAgICAgLmtleShmdW5jdGlvbihkKSB7IFxuICAgICAgICByZXR1cm4gZC5jb2xsZWN0aW9uOyBcbiAgICAgIH0pXG4gICAgICAua2V5KGZ1bmN0aW9uKGQpIHsgXG4gICAgICAgIHJldHVybiBkLmdlbnVzOyBcbiAgICAgIH0pXG4gICAgICAuZW50cmllcyhmZXRjaGVkRGF0YSlcblxuICAgIC8vIENvcnJlY3Qga2V5L3ZhbHVlIGZvcm1hdCBmb3IgZDMuaGllcmFyY2h5IGFuZCAudHJlZVxuICAgIGNvbnN0IHNoYXBlZEhpZXJhcmNoaWNhbERhdGEgPSB7XG4gICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogaGllcmFyY2hpY2FsRGF0YS5tYXAoaG9tZSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcIm5hbWVcIjogaG9tZS5rZXksXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBob21lLnZhbHVlcy5tYXAoY29sbGVjdGlvbiA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBjb2xsZWN0aW9uLmtleSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBjb2xsZWN0aW9uLnZhbHVlcy5tYXAoZ2VudXMgPT4ge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBnZW51cy5rZXksXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IGdlbnVzLnZhbHVlcy5tYXAoc3BlY2ltZW4gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7Y29sbGVjdGlvbixnZW51cyxzcGVjaWVzLGNvbW1vbk5hbWUsZmFtaWx5LGFjY2Vzc2lvbixwcm92ZW5hbmNlfSA9IHNwZWNpbWVuO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbGxlY3Rpb25cIjogY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IGZhbWlseSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGF0aW5OYW1lXCI6IGAke2dlbnVzfSAke3NwZWNpZXN9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tbW9uTmFtZVwiOiBjb21tb25OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2Nlc3Npb25cIjogYWNjZXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm92ZW5hbmNlXCI6IHByb3ZlbmFuY2VcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gY29sbGVjdGlvbixnZW51cyxzcGVjaWVzLGNvbW1vbk5hbWUsZmFtaWx5LGFjY2Vzc2lvbixwcm92ZW5hbmNlXG4gICAgLy8gaGllcmFyY2hpY2FsRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAvLyAgIGQubmFtZSA9IGQua2V5O1xuICAgIC8vICAgZC5jaGlsZHJlbiA9IGQudmFsdWVzO1xuICAgIC8vICAgZC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKXtcbiAgICAvLyAgICAgY2hpbGQubmFtZSA9IGNoaWxkLmtleTtcbiAgICAvLyAgICAgY2hpbGQuY2hpbGRyZW4gPSBjaGlsZC52YWx1ZXM7XG4gICAgLy8gICAgIGNoaWxkLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oZ3JhbmRjaGlsZCkge1xuICAgIC8vICAgICAgIGdyYW5kY2hpbGQubmFtZSA9IGdyYW5kY2hpbGQua2V5O1xuICAgIC8vICAgICAgIGdyYW5kY2hpbGQuY2hpbGRyZW4gPSBncmFuZGNoaWxkLnZhbHVlcztcbiAgICAvLyAgICAgICBncmFuZGNoaWxkLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oZ3JlYXRncmFuZGNoaWxkKSB7XG4gICAgLy8gICAgICAgICBncmVhdGdyYW5kY2hpbGQubmFtZSA9IGdyZWF0Z3JhbmRjaGlsZC5rZXk7XG4gICAgLy8gICAgICAgICBncmVhdGdyYW5kY2hpbGQuY2hpbGRyZW4gPSBncmVhdGdyYW5kY2hpbGQudmFsdWVzO1xuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgIH0pXG4gICAgLy8gICB9KVxuICAgIC8vIH0pXG5cbiAgcmV0dXJuIHNoYXBlZEhpZXJhcmNoaWNhbERhdGE7XG59IiwiaW1wb3J0IGNvbnZlcnRGZXRjaGVkRGF0YSBmcm9tIFwiLi9jb252ZXJ0X2ZldGNoZWRfZGF0YVwiO1xuXG5jb25zdCBicmFuY2hMdmwgPSAoZCkgPT4ge1xuICBpZiAoZC5kZXB0aCA9PT0gNCkge1xuICAgIHJldHVybiBcImxpbmsgdXBwZXJCcmFuY2hlc1wiXG4gIH0gZWxzZSBpZiAoZC5kZXB0aCA9PT0gMykge1xuICAgIHJldHVybiBcImxpbmsgbWlkZGxlQnJhbmNoZXNcIlxuICB9IGVsc2UgaWYgKGQuZGVwdGggPT09IDIpIHtcbiAgICByZXR1cm4gXCJsaW5rIGxvd2VyQnJhbmNoZXNcIlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBcImxpbmsgdHJ1bmtcIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgbWFyZ2luID0geyB0b3A6IDI1LCByaWdodDogMjUsIGJvdHRvbTogMjUsIGxlZnQ6IDI1IH0sXG4gICAgd2lkdGggPSAxNDAwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0ID0gNjAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgY29uc3Qgb3JpZW50YXRpb25zID0ge1xuICAgIFwiZ3Jvdy11cFwiOiB7XG4gICAgICBzaXplOiBbd2lkdGgsIGhlaWdodF0sXG4gICAgICB4OiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLng7XG4gICAgICB9LFxuICAgICAgeTogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gaGVpZ2h0IC0gZC55O1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdmcgPSBkM1xuICAgIC5zZWxlY3QoXCJib2R5XCIpXG4gICAgLnNlbGVjdEFsbChcInN2Z1wiKVxuICAgIC5kYXRhKGQzLmVudHJpZXMob3JpZW50YXRpb25zKSlcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5yaWdodClcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgLy8gTG9hZCBhbmQgY29udmVydCBjc3YgZGF0YSA9PiBlYWNoIHJvdyBiZWNvbWVzIGFuIG9iamVjdCB3aXRoIGNvbHVtbnMgYXMga2V5c1xuICBkMy5jc3YoXCJzcmMvZGF0YS9iYmdfZGF0YTE5MTIwNC5jc3ZcIikudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgXG4gICAgLy8gQ29udmVydCBkYXRhIHRvIGhpZXJhcmNoaWNhbCBzdHJ1Y3R1cmVcbiAgICBsZXQgYmJnX2RhdGEgPSBjb252ZXJ0RmV0Y2hlZERhdGEoZGF0YSk7XG5cbiAgICBzdmcuZWFjaChmdW5jdGlvbihvcmllbnRhdGlvbikge1xuICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHRoaXMpLFxuICAgICAgICBvID0gb3JpZW50YXRpb24udmFsdWU7XG5cbiAgICAgIC8vIENyZWF0ZSB0cmVlIGFuZCBhc3NpZ24gc2l6ZSBmcm9tIG9yaWVudGF0aW9uc1xuICAgICAgbGV0IHRyZWVtYXAgPSBkMy50cmVlKCkuc2l6ZShvLnNpemUpO1xuXG4gICAgICAvLyBBc3NpZ24gcm9vdCBub2RlXG4gICAgICBsZXQgcm9vdCA9IGQzLmhpZXJhcmNoeShiYmdfZGF0YSwgZCA9PiB7IHJldHVybiBkLmNoaWxkcmVuIH0pO1xuICAgICAgcm9vdC54MCA9IGhlaWdodCAvIDI7XG4gICAgICByb290LnkwID0gMDtcblxuICAgICAgLy8gQ29sbGFwc2Ugbm9kZSBhbmQgcmVjdXJzaXZlbHkgY29sbGFwc2UgYWxsIGNoaWxkcmVuXG4gICAgICBjb25zdCBjb2xsYXBzZSA9IGQgPT4ge1xuICAgICAgICBpZihkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuXG4gICAgICAgICAgZC5fY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSlcbiAgICAgICAgICBkLmNoaWxkcmVuID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENvbGxhcHNlIGFmdGVyIGNvbGxlY3Rpb25zXG4gICAgICBcbiAgICAgIGNvbnN0IHVwZGF0ZSA9IHNvdXJjZSA9PiB7XG4gICAgICAgIC8vIENhdGVnb3JpemUgbm9kZXMgYW5kIGxpbmtzXG4gICAgICAgIGxldCBub2RlcyA9IHRyZWVtYXAocm9vdCk7XG4gICAgICAgIGNvbnN0IGxpbmtzID0gbm9kZXMuZGVzY2VuZGFudHMoKS5zbGljZSgxKTtcblxuICAgICAgICAvLyBEZWNsYXJlIHZhcmlhYmxlcyB1c2VkIGZvciBhbmltYXRpb24gdGhyb3VnaG91dFxuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gNzUwO1xuXG4gICAgICAgIC8vIE5vcm1hbGl6ZSBkZXB0aFxuICAgICAgICBub2Rlcy5kZXNjZW5kYW50cygpLmZvckVhY2goZCA9PiB7ZC55ID0gZC5oZWlnaHQgKiA5MH0pO1xuXG4gICAgICAgIC8vLy8vLy8vLyBOb2RlcyAvLy8vLy8vLy9cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBub2Rlc1xuICAgICAgICAvLyBjb25zdCBub2RlID0gc3ZnLnNlbGVjdEFsbChcIi5ub2RlXCIpXG4gICAgICAgIC8vICAgLmRhdGEobm9kZXMsIGQgPT4geyByZXR1cm4gZC5pZCB8fCAoZC5pZCA9ICsraSk7IH0pXG5cbiAgICAgICAgLy8gR3JvdXAgYnJhbmNoIGFuZCBsZWFmIG5vZGVzXG4gICAgICAgIGxldCBicmFuY2hOb2RlcyA9IFtdO1xuICAgICAgICBsZXQgbGVhZk5vZGVzID0gW107XG5cbiAgICAgICAgbm9kZXMuZGVzY2VuZGFudHMoKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgIGlmIChub2RlLmRlcHRoID09PSA0KXtcbiAgICAgICAgICAgIGxlYWZOb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmFuY2hOb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBDcmVhdGUgYnJhbmNoTm9kZSBjaXJjbGVzXG4gICAgICAgIGxldCBicmFuY2hOb2RlID0gc3ZnXG4gICAgICAgICAgLnNlbGVjdEFsbChcIi5icmFuY2hOb2RlXCIpXG4gICAgICAgICAgLmRhdGEoYnJhbmNoTm9kZXMsIGQgPT4geyByZXR1cm4gZC5pZCB8fCAoZC5pZCA9ICsraSk7IH0pXG5cbiAgICAgICAgbGV0IGJyYW5jaE5vZGVFbnRlciA9IGJyYW5jaE5vZGVcbiAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJyYW5jaE5vZGVcIilcbiAgICAgICAgICAub24oJ2NsaWNrJywgKGQpID0+IGNsaWNrKGQpKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4geyByZXR1cm4gYHRyYW5zbGF0ZSgke2QueX0sICR7ZC54fSlgOyB9KTtcbiAgICAgICAgICBcbiAgICAgICAgLy8gQWRkIENpcmNsZSB0byBicmFuY2hOb2Rlc1xuICAgICAgICBicmFuY2hOb2RlRW50ZXJcbiAgICAgICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgLmF0dHIoXCJyXCIsIDQuNSlcbiAgICAgICAgICAuYXR0cihcImN4XCIsIG8ueClcbiAgICAgICAgICAuYXR0cihcImN5XCIsIG8ueSlcbiAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGQuX2NoaWxkcmVuID8gXCIjNjU0MzIxXCIgOiBcIiNmZmZcIjtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgTGVhZk5vZGVzXG4gICAgICAgIGxldCBsZWFmTm9kZSA9IHN2Z1xuICAgICAgICAgIC5zZWxlY3RBbGwoXCIubGVhZk5vZGVcIilcbiAgICAgICAgICAuZGF0YShsZWFmTm9kZXMsIGQgPT4geyByZXR1cm4gZC5pZCB8fCAoZC5pZCA9ICsraSk7IH0pXG4gICAgICAgICAgXG4gICAgICAgIGxldCBsZWFmTm9kZUVudGVyID0gbGVhZk5vZGUgIFxuICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiLmxlYWZOb2RlXCIpXG4gICAgICAgICAgLm9uKCdjbGljaycsIGQgPT4gY2xpY2soZCkpXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZCA9PiB7IHJldHVybiBgdHJhbnNsYXRlKCR7by55fSwgJHtvLnh9KWA7IH0pO1xuXG4gICAgICAgIC8vIEFkZCBDaXJjbGUgdG8gbGVhZk5vZGVzXG4gICAgICAgIGxlYWZOb2RlRW50ZXJcbiAgICAgICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgLmF0dHIoXCJyXCIsIDQuNSlcbiAgICAgICAgICAuYXR0cihcImN4XCIsIG8ueClcbiAgICAgICAgICAuYXR0cihcImN5XCIsIG8ueSlcbiAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGQuX2NoaWxkcmVuID8gXCJmb3Jlc3RncmVlblwiIDogXCIjZmZmXCI7XG4gICAgICAgICAgfSlcblxuICAgICAgICBicmFuY2hOb2RlXG4gICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5kYXRhLm5hbWU7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuYXR0cihcInhcIiwgby54KVxuICAgICAgICAgIC5hdHRyKFwiZHhcIiwgNSlcbiAgICAgICAgICAuYXR0cihcInlcIiwgby55KTtcblxuICAgICAgICAvLy8vLy8vLy8gTGlua3MgLy8vLy8vLy8vXG5cblxuICAgICAgICAvLyBDcmVhdGUgcGF0aCBiZXR3ZWVuIHBhcmVudCBhbmQgY2hpbGRcbiAgICAgICAgY29uc3QgZGlhZ29uYWwgPSAoZCkgPT4ge1xuICAgICAgICAgIHJldHVybiBgTSAke2QueH0gJHtvLnkoZCl9IFxuICAgICAgICAgICAgICBDICR7ZC54fSxcbiAgICAgICAgICAgICAgJHsoby55KGQpICsgby55KGQucGFyZW50KSkgLyAyfSAke2QucGFyZW50Lnh9LFxuICAgICAgICAgICAgICAkeyhvLnkoZCkgKyBvLnkoZC5wYXJlbnQpKSAvIDJ9ICR7ZC5wYXJlbnQueH0sXG4gICAgICAgICAgICAgICR7by55KGQucGFyZW50KX1gXG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgbGlua3NcbiAgICAgICAgbGV0IGxpbmsgPSBzdmcuc2VsZWN0QWxsKFwiLmxpbmtcIilcbiAgICAgICAgICAuZGF0YShsaW5rcywgZCA9PiB7IHJldHVybiBkLmlkIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSAncmV2ZWFsZWQnIGxpbmtzXG4gICAgICAgIGxldCBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKClcbiAgICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiB7IHJldHVybiBicmFuY2hMdmwoZCk7IH0pXG4gICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4geyByZXR1cm4gZGlhZ29uYWwoZCkgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlXG4gICAgICAgIGNvbnN0IGxpbmtVcGRhdGUgPSBsaW5rRW50ZXIubWVyZ2UobGluayk7XG5cbiAgICAgICAgLy8gQWRkIHRyYW5zaXRpb24gdG8gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgbGlua1VwZGF0ZS50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgICAgLmF0dHIoJ2QnLCBkID0+IHsgcmV0dXJuIGRpYWdvbmFsKGQpfSlcblxuICAgICAgICAvLyBSZW1vdmUgYW55IGV4aXRpbmcgbGlua3NcbiAgICAgICAgY29uc3QgbGlua0V4aXQgPSBsaW5rLmV4aXQoKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgICAgLmF0dHIoJ2QnLCBkID0+IHsgcmV0dXJuIGRpYWdvbmFsKGQpIH0pXG4gICAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vIFN0b3JlIG9sZCBwb3NpdGlvbnMgZm9yIHRyYW5zaXRpb25cbiAgICAgICAgbm9kZXMuZGVzY2VuZGFudHMoKS5mb3JFYWNoKGZ1bmN0aW9uKGQpe1xuICAgICAgICAgIGQueDAgPSBkLng7XG4gICAgICAgICAgZC55MCA9IGQueTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSGFuZGxlIGNsaWNrXG4gICAgICAgIGNvbnN0IGNsaWNrID0gZCA9PiB7XG4gICAgICAgICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XG4gICAgICAgICAgICBkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVwZGF0ZShkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZWJ1Z2dlclxuICAgICAgcm9vdC5jaGlsZHJlblswXS5jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKTtcbiAgICAgIHVwZGF0ZShyb290KTtcbiAgICB9KVxuICAgIFxuICB9KTtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9