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
        return d.children ? "#654321" : "#fff";
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
      nodeUpdate.select('.branches').attr('r', 7).style("fill", function (d) {
        return d.children ? "#503316" : "#fff";
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
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }

        update(d);
      };
    }; // root.children[0].children.forEach(collapse);
    // root.children[0].children.forEach((child => { 
    //   child.children = child._children;
    //   child._children = null;
    // }));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnZlcnRfZmV0Y2hlZF9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NyZWF0ZV90cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kIiwiY3JlYXRlVHJlZSIsImZldGNoZWREYXRhIiwiaGllcmFyY2hpY2FsRGF0YSIsImQzIiwibmVzdCIsImtleSIsImQiLCJob21lIiwiY29sbGVjdGlvbiIsImdlbnVzIiwiZW50cmllcyIsInNoYXBlZEhpZXJhcmNoaWNhbERhdGEiLCJtYXAiLCJ2YWx1ZXMiLCJzcGVjaW1lbiIsInNwZWNpZXMiLCJjb21tb25OYW1lIiwiZmFtaWx5IiwiYWNjZXNzaW9uIiwicHJvdmVuYW5jZSIsImtsYXNzIiwiZGF0YSIsIm5hbWUiLCJkZXB0aCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0Iiwib3JpZW50YXRpb25zIiwic2l6ZSIsIngiLCJ5Iiwic3ZnIiwic2VsZWN0IiwiYXR0ciIsImNzdiIsInRoZW4iLCJiYmdfZGF0YSIsImNvbnZlcnRGZXRjaGVkRGF0YSIsInRyZWVtYXAiLCJ0cmVlIiwicm9vdCIsImhpZXJhcmNoeSIsImNoaWxkcmVuIiwieDAiLCJ5MCIsImNvbGxhcHNlIiwiX2NoaWxkcmVuIiwiZm9yRWFjaCIsInVwZGF0ZSIsInNvdXJjZSIsIm5vZGVzIiwibGlua3MiLCJkZXNjZW5kYW50cyIsInNsaWNlIiwiaSIsImR1cmF0aW9uIiwibm9kZSIsInNlbGVjdEFsbCIsImlkIiwibm9kZUVudGVyIiwiZW50ZXIiLCJvbiIsImNsaWNrIiwic3R5bGUiLCJ0ZXh0Iiwibm9kZVVwZGF0ZSIsIm1lcmdlIiwidHJhbnNpdGlvbiIsIm5vZGVFeGl0IiwiZXhpdCIsInJlbW92ZSIsImRpYWdvbmFsIiwic3RhcnQiLCJkZWx0YSIsImxpbmsiLCJsaW5rRW50ZXIiLCJpbnNlcnQiLCJsaW5rVXBkYXRlIiwicGFyZW50IiwibGlua0V4aXQiLCJvIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2hEQyxVQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBZCxDQUFxQixhQUFyQjtBQUNBQyxzRUFBVTtBQUNYLENBSEQsRTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBZSx5RUFBQ0MsV0FBRCxFQUFpQjtBQUM5QjtBQUNFLE1BQU1DLGdCQUFnQixHQUFHQyxFQUFFLENBQUNDLElBQUgsR0FD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QUFFb0IsTUFBTSxDQUFDcEIsQ0FBWDtBQUFjQyxXQUFDLEVBQUVtQixNQUFNLENBQUNuQjtBQUF4QixTQUFWO0FBQ0E7QUFDQSxlQUFPeUMsUUFBUSxDQUFDUyxDQUFELEVBQUlBLENBQUosQ0FBZjtBQUNELE9BTmMsRUFPZFYsTUFQYyxFQUFqQixDQWhIdUIsQ0F5SHZCOztBQUNBcEIsV0FBSyxDQUFDRSxXQUFOLEdBQW9CTCxPQUFwQixDQUE0QixVQUFTN0MsQ0FBVCxFQUFXO0FBQ3JDQSxTQUFDLENBQUN5QyxFQUFGLEdBQU96QyxDQUFDLENBQUMyQixDQUFUO0FBQ0EzQixTQUFDLENBQUMwQyxFQUFGLEdBQU8xQyxDQUFDLENBQUM0QixDQUFUO0FBQ0QsT0FIRCxFQTFIdUIsQ0ErSHZCOztBQUNBLFVBQU1nQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBNUQsQ0FBQyxFQUFJO0FBQ2pCLFlBQUlBLENBQUMsQ0FBQ3dDLFFBQU4sRUFBZ0I7QUFDZHhDLFdBQUMsQ0FBQzRDLFNBQUYsR0FBYzVDLENBQUMsQ0FBQ3dDLFFBQWhCO0FBQ0F4QyxXQUFDLENBQUN3QyxRQUFGLEdBQWEsSUFBYjtBQUNELFNBSEQsTUFHTztBQUNMeEMsV0FBQyxDQUFDd0MsUUFBRixHQUFheEMsQ0FBQyxDQUFDNEMsU0FBZjtBQUNBNUMsV0FBQyxDQUFDNEMsU0FBRixHQUFjLElBQWQ7QUFDRDs7QUFDREUsY0FBTSxDQUFDOUMsQ0FBRCxDQUFOO0FBQ0QsT0FURDtBQVVELEtBMUlELENBeEJ3RCxDQW9LeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE4QyxVQUFNLENBQUNSLElBQUQsQ0FBTjtBQUNELEdBM0tEO0FBNEtELENBdk1ELEU7Ozs7Ozs7Ozs7O0FDaEJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBjcmVhdGVUcmVlIGZyb20gXCIuL3NjcmlwdHMvY3JlYXRlX3RyZWVcIjtcblxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKFwiSGVsbG8gV29ybGRcIilcbiAgY3JlYXRlVHJlZSgpO1xufSkiLCJleHBvcnQgZGVmYXVsdCAoZmV0Y2hlZERhdGEpID0+IHtcbiAgLy8gQ29udmVydCBkYXRhIHRvIGhpZXJhcmNoaWNhbCBzdHJ1Y3R1cmVcbiAgICBjb25zdCBoaWVyYXJjaGljYWxEYXRhID0gZDMubmVzdCgpXG4gICAgICAua2V5KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaG9tZTtcbiAgICAgIH0pXG4gICAgICAua2V5KGZ1bmN0aW9uKGQpIHsgXG4gICAgICAgIHJldHVybiBkLmNvbGxlY3Rpb247IFxuICAgICAgfSlcbiAgICAgIC5rZXkoZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgcmV0dXJuIGQuZ2VudXM7IFxuICAgICAgfSlcbiAgICAgIC5lbnRyaWVzKGZldGNoZWREYXRhKVxuXG4gICAgLy8gQ29ycmVjdCBrZXkvdmFsdWUgZm9ybWF0IGZvciBkMy5oaWVyYXJjaHkgYW5kIC50cmVlXG4gICAgY29uc3Qgc2hhcGVkSGllcmFyY2hpY2FsRGF0YSA9IHtcbiAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBoaWVyYXJjaGljYWxEYXRhLm1hcChob21lID0+IHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFwibmFtZVwiOiBob21lLmtleSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IGhvbWUudmFsdWVzLm1hcChjb2xsZWN0aW9uID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IGNvbGxlY3Rpb24ua2V5LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IGNvbGxlY3Rpb24udmFsdWVzLm1hcChnZW51cyA9PiB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IGdlbnVzLmtleSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogZ2VudXMudmFsdWVzLm1hcChzcGVjaW1lbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtjb2xsZWN0aW9uLGdlbnVzLHNwZWNpZXMsY29tbW9uTmFtZSxmYW1pbHksYWNjZXNzaW9uLHByb3ZlbmFuY2V9ID0gc3BlY2ltZW47XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOiBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogZmFtaWx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYXRpbk5hbWVcIjogYCR7Z2VudXN9ICR7c3BlY2llc31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21tb25OYW1lXCI6IGNvbW1vbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFjY2Vzc2lvblwiOiBhY2Nlc3Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb3ZlbmFuY2VcIjogcHJvdmVuYW5jZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBjb2xsZWN0aW9uLGdlbnVzLHNwZWNpZXMsY29tbW9uTmFtZSxmYW1pbHksYWNjZXNzaW9uLHByb3ZlbmFuY2VcbiAgICAvLyBoaWVyYXJjaGljYWxEYXRhLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgIC8vICAgZC5uYW1lID0gZC5rZXk7XG4gICAgLy8gICBkLmNoaWxkcmVuID0gZC52YWx1ZXM7XG4gICAgLy8gICBkLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpe1xuICAgIC8vICAgICBjaGlsZC5uYW1lID0gY2hpbGQua2V5O1xuICAgIC8vICAgICBjaGlsZC5jaGlsZHJlbiA9IGNoaWxkLnZhbHVlcztcbiAgICAvLyAgICAgY2hpbGQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihncmFuZGNoaWxkKSB7XG4gICAgLy8gICAgICAgZ3JhbmRjaGlsZC5uYW1lID0gZ3JhbmRjaGlsZC5rZXk7XG4gICAgLy8gICAgICAgZ3JhbmRjaGlsZC5jaGlsZHJlbiA9IGdyYW5kY2hpbGQudmFsdWVzO1xuICAgIC8vICAgICAgIGdyYW5kY2hpbGQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihncmVhdGdyYW5kY2hpbGQpIHtcbiAgICAvLyAgICAgICAgIGdyZWF0Z3JhbmRjaGlsZC5uYW1lID0gZ3JlYXRncmFuZGNoaWxkLmtleTtcbiAgICAvLyAgICAgICAgIGdyZWF0Z3JhbmRjaGlsZC5jaGlsZHJlbiA9IGdyZWF0Z3JhbmRjaGlsZC52YWx1ZXM7XG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH0pXG4gICAgLy8gfSlcblxuICByZXR1cm4gc2hhcGVkSGllcmFyY2hpY2FsRGF0YTtcbn0iLCJpbXBvcnQgY29udmVydEZldGNoZWREYXRhIGZyb20gXCIuL2NvbnZlcnRfZmV0Y2hlZF9kYXRhXCI7XG5cbmNvbnN0IGtsYXNzID0gKGQpID0+IHtcbiAgaWYgKGQuZGF0YS5uYW1lLmNvbW1vbk5hbWUpIHtcbiAgICByZXR1cm4gXCJsZWF2ZXNcIlxuICB9IGVsc2UgaWYgKGQuZGVwdGggPT09IDQpIHtcbiAgICByZXR1cm4gXCJ1cHBlciBicmFuY2hlc1wiXG4gIH0gZWxzZSBpZiAoZC5kZXB0aCA9PT0gMykge1xuICAgIHJldHVybiBcIm1pZGRsZSBicmFuY2hlc1wiXG4gIH0gZWxzZSBpZiAoZC5kZXB0aCA9PT0gMikge1xuICAgIHJldHVybiBcImxvd2VyIGJyYW5jaGVzXCJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJ0cnVua1wiXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMjUsIHJpZ2h0OiAyNSwgYm90dG9tOiAyNSwgbGVmdDogMjUgfSxcbiAgICB3aWR0aCA9IDE0MDAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCxcbiAgICBoZWlnaHQgPSA2MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICBjb25zdCBvcmllbnRhdGlvbnMgPSB7XG4gICAgXCJncm93LXVwXCI6IHtcbiAgICAgIHNpemU6IFt3aWR0aCwgaGVpZ2h0XSxcbiAgICAgIHg6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQueDtcbiAgICAgIH0sXG4gICAgICB5OiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBoZWlnaHQgLSBkLnk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIC5kYXRhKGQzLmVudHJpZXMob3JpZW50YXRpb25zKSlcbiAgbGV0IHN2ZyA9IGQzXG4gICAgLnNlbGVjdChcImJvZHlcIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gIC8vIExvYWQgYW5kIGNvbnZlcnQgY3N2IGRhdGEgPT4gZWFjaCByb3cgYmVjb21lcyBhbiBvYmplY3Qgd2l0aCBjb2x1bW5zIGFzIGtleXNcbiAgZDMuY3N2KFwic3JjL2RhdGEvYmJnX2RhdGExOTEyMDQuY3N2XCIpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgIFxuICAgIC8vIENvbnZlcnQgZGF0YSB0byBoaWVyYXJjaGljYWwgc3RydWN0dXJlXG4gICAgbGV0IGJiZ19kYXRhID0gY29udmVydEZldGNoZWREYXRhKGRhdGEpO1xuXG4gICAgLy8gQ3JlYXRlIHRyZWUgYW5kIGFzc2lnbiBzaXplIGZyb20gb3JpZW50YXRpb25zXG4gICAgbGV0IHRyZWVtYXAgPSBkMy50cmVlKCkuc2l6ZShbaGVpZ2h0LCB3aWR0aF0pO1xuXG4gICAgLy8gQXNzaWduIHJvb3Qgbm9kZVxuICAgIGxldCByb290ID0gZDMuaGllcmFyY2h5KGJiZ19kYXRhLCBkID0+IHsgcmV0dXJuIGQuY2hpbGRyZW4gfSk7XG4gICAgcm9vdC54MCA9IGhlaWdodCAvIDI7XG4gICAgcm9vdC55MCA9IDA7XG5cbiAgICAvLyBDb2xsYXBzZSBub2RlIGFuZCByZWN1cnNpdmVseSBjb2xsYXBzZSBhbGwgY2hpbGRyZW5cbiAgICBjb25zdCBjb2xsYXBzZSA9IGQgPT4ge1xuICAgICAgaWYoZC5jaGlsZHJlbikge1xuICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW5cbiAgICAgICAgZC5fY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSlcbiAgICAgICAgZC5jaGlsZHJlbiA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb2xsYXBzZSBhZnRlciBjb2xsZWN0aW9uc1xuICAgIFxuICAgIGNvbnN0IHVwZGF0ZSA9IHNvdXJjZSA9PiB7XG4gICAgICAvLyBDYXRlZ29yaXplIG5vZGVzIGFuZCBsaW5rc1xuICAgICAgbGV0IG5vZGVzID0gdHJlZW1hcChyb290KTtcbiAgICAgIGNvbnN0IGxpbmtzID0gbm9kZXMuZGVzY2VuZGFudHMoKS5zbGljZSgxKTtcblxuICAgICAgLy8gRGVjbGFyZSB2YXJpYWJsZXMgdXNlZCBmb3IgYW5pbWF0aW9uIHRocm91Z2hvdXRcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gMTUwMDtcblxuICAgICAgLy8gTm9ybWFsaXplIGRlcHRoXG4gICAgICBub2Rlcy5kZXNjZW5kYW50cygpLmZvckVhY2goZCA9PiB7ZC55ID0gZC5kZXB0aCAqIDE1MH0pO1xuICAgICAgLy8vLy8vLy8vIE5vZGVzIC8vLy8vLy8vL1xuICAgICAgLy8gVXBkYXRlIHRoZSBub2Rlc1xuICAgICAgbGV0IG5vZGUgPSBzdmdcbiAgICAgICAgLnNlbGVjdEFsbChcImcubm9kZVwiKVxuICAgICAgICAuZGF0YShub2Rlcy5kZXNjZW5kYW50cygpLCBkID0+IHsgcmV0dXJuIGQuaWQgfHwgKGQuaWQgPSArK2kpOyB9KVxuXG4gICAgICAvLyBDcmVhdGUgbm9kZXNcbiAgICAgIGxldCBub2RlRW50ZXIgPSBub2RlXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJub2RlXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4geyByZXR1cm4gYHRyYW5zbGF0ZSgke3NvdXJjZS55MH0sICR7c291cmNlLngwfSlgOyB9KVxuICAgICAgICAub24oJ2NsaWNrJywgKGQpID0+IGNsaWNrKGQpKTtcbiAgICAgICAgXG4gICAgICAvLyBBZGQgQ2lyY2xlIHRvIG5vZGVzXG4gICAgICBub2RlRW50ZXJcbiAgICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4ge1xuICAgICAgICAgIHJldHVybiBgJHtrbGFzcyhkKX1gO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcInJcIiwgNylcbiAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgICByZXR1cm4gZC5jaGlsZHJlbiA/IFwiIzY1NDMyMVwiIDogXCIjZmZmXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBOb2RlIGxhYmVsc1xuICAgICAgbm9kZUVudGVyXG4gICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC50ZXh0KGQgPT4ge1xuICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZS5jb21tb25OYW1lXG4gICAgICAgICAgICA/IGAtICR7ZC5kYXRhLm5hbWUuY29tbW9uTmFtZX0gLWBcbiAgICAgICAgICAgIDogYC0gJHtkLmRhdGEubmFtZX0gLWA7IFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcInhcIiwgZCA9PiB7IHJldHVybiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gLTEzIDogMTM7IH0pXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgXCIuMzVlbVwiKVxuICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIGQgPT4geyByZXR1cm4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/IFwiZW5kXCIgOiBcInN0YXJ0XCI7IH0pXG5cbiAgICAgIC8vIEV4ZWN1dGUgdXBkYXRpbmcgbm9kZXNcbiAgICAgIGNvbnN0IG5vZGVVcGRhdGUgPSBub2RlRW50ZXIubWVyZ2Uobm9kZSk7XG5cbiAgICAgIC8vIFRyYW5zaXRpb24gdG8gcHJvcGVyIG5vZGUgcG9zaXRpb25cbiAgICAgIG5vZGVVcGRhdGUudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZCA9PiB7IFxuICAgICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7ZC55fSwgJHtkLnh9KWA7IH0pO1xuICAgICAgXG4gICAgICBub2RlVXBkYXRlLnNlbGVjdCgnLmJyYW5jaGVzJylcbiAgICAgICAgLmF0dHIoJ3InLCA3KVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4geyBcbiAgICAgICAgICByZXR1cm4gZC5jaGlsZHJlbiA/IFwiIzUwMzMxNlwiIDogXCIjZmZmXCI7IFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignY3Vyc29yJywgJ3BvaW50ZXInKTtcblxuICAgICAgLy8gUmVtb3ZlIGFueSBleGl0aW5nIG5vZGVzXG4gICAgICBsZXQgbm9kZUV4aXQgPSBub2RlLmV4aXQoKS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBkID0+IHsgcmV0dXJuIGB0cmFuc2xhdGUoJHtzb3VyY2UueX0sICR7c291cmNlLnh9KWA7IH0pXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gUmVkdWNlIGV4aXRpbmcgY2lyY2xlcyBzaXplIHRvIDBcbiAgICAgIG5vZGVFeGl0LnNlbGVjdCgnLmJyYW5jaGVzJylcbiAgICAgICAgLmF0dHIoJ3InLCAxZS02KTtcblxuICAgICAgLy8gUmVkdWNlIGxhYmVsIG9wYWNpdHlcbiAgICAgIG5vZGVFeGl0LnNlbGVjdCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMWUtNik7XG4gICAgXG4gICAgICAvLy8vLy8vLy8gTGlua3MgLy8vLy8vLy8vXG4gICAgICAvLyBDcmVhdGUgcGF0aCBiZXR3ZWVuIHBhcmVudCBhbmQgY2hpbGRcbiAgICAgIGNvbnN0IGRpYWdvbmFsID0gKHN0YXJ0LCBkZWx0YSkgPT4ge1xuICAgICAgICByZXR1cm4gYE0gJHtzdGFydC55fSAke3N0YXJ0Lnh9IFxuICAgICAgICAgICAgQyAkeyhzdGFydC55ICsgZGVsdGEueSkgLyAyfSAke3N0YXJ0Lnh9LFxuICAgICAgICAgICAgJHsoc3RhcnQueSArIGRlbHRhLnkpIC8gMn0gJHtkZWx0YS54fSxcbiAgICAgICAgICAgICR7ZGVsdGEueX0gJHtkZWx0YS54fWA7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBsaW5rc1xuICAgICAgbGV0IGxpbmsgPSBzdmcuc2VsZWN0QWxsKFwiLmxpbmtcIilcbiAgICAgICAgLmRhdGEobGlua3MsIGQgPT4geyByZXR1cm4gZC5pZCB9KTtcblxuICAgICAgLy8gVXBkYXRlICdyZXZlYWxlZCcgbGlua3NcbiAgICAgIGxldCBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKClcbiAgICAgICAgLmluc2VydChcInBhdGhcIiwgXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiB7IHJldHVybiBgbGluayAke2tsYXNzKGQpfWA7IH0pXG4gICAgICAgIC5hdHRyKFwiZFwiLCBkID0+IHsgXG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSB7eDogc291cmNlLngwLCB5OiBzb3VyY2UueTB9XG4gICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwoc3RhcnQsIHN0YXJ0KSBcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIFVwZGF0ZVxuICAgICAgY29uc3QgbGlua1VwZGF0ZSA9IGxpbmtFbnRlci5tZXJnZShsaW5rKTtcblxuICAgICAgLy8gQWRkIHRyYW5zaXRpb24gdG8gcGFyZW50IGVsZW1lbnRcbiAgICAgIGxpbmtVcGRhdGUudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ2QnLCBkID0+IHsgXG4gICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwoZCwgZC5wYXJlbnQpOyB9KVxuXG4gICAgICAvLyBSZW1vdmUgYW55IGV4aXRpbmcgbGlua3NcbiAgICAgIGNvbnN0IGxpbmtFeGl0ID0gbGluay5leGl0KCkudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ2QnLCBkID0+IHsgXG4gICAgICAgICAgY29uc3QgbyA9IHt4OiBzb3VyY2UueCwgeTogc291cmNlLnl9XG4gICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbykgXG4gICAgICAgIH0pXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gU3RvcmUgb2xkIHBvc2l0aW9ucyBmb3IgdHJhbnNpdGlvblxuICAgICAgbm9kZXMuZGVzY2VuZGFudHMoKS5mb3JFYWNoKGZ1bmN0aW9uKGQpe1xuICAgICAgICBkLngwID0gZC54O1xuICAgICAgICBkLnkwID0gZC55O1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEhhbmRsZSBjbGljayAtIHNldCB2aXNpYmlsaXR5IHByb3BlcnR5XG4gICAgICBjb25zdCBjbGljayA9IGQgPT4ge1xuICAgICAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZShkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByb290LmNoaWxkcmVuWzBdLmNoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpO1xuICAgIC8vIHJvb3QuY2hpbGRyZW5bMF0uY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQgPT4geyBcbiAgICAvLyAgIGNoaWxkLmNoaWxkcmVuID0gY2hpbGQuX2NoaWxkcmVuO1xuICAgIC8vICAgY2hpbGQuX2NoaWxkcmVuID0gbnVsbDtcbiAgICAvLyB9KSk7XG4gICAgXG4gICAgdXBkYXRlKHJvb3QpOyAgICBcbiAgfSk7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==