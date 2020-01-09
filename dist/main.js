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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnZlcnRfZmV0Y2hlZF9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NyZWF0ZV90cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9kYzJhIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmQiLCJjcmVhdGVUcmVlIiwiZmV0Y2hlZERhdGEiLCJoaWVyYXJjaGljYWxEYXRhIiwiZDMiLCJuZXN0Iiwia2V5IiwiZCIsImhvbWUiLCJjb2xsZWN0aW9uIiwiZ2VudXMiLCJlbnRyaWVzIiwic2hhcGVkSGllcmFyY2hpY2FsRGF0YSIsIm1hcCIsInZhbHVlcyIsInNwZWNpbWVuIiwic3BlY2llcyIsImNvbW1vbk5hbWUiLCJmYW1pbHkiLCJhY2Nlc3Npb24iLCJwcm92ZW5hbmNlIiwia2xhc3MiLCJkYXRhIiwibmFtZSIsImRlcHRoIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJvcmllbnRhdGlvbnMiLCJzaXplIiwieCIsInkiLCJzdmciLCJzZWxlY3QiLCJhdHRyIiwiY3N2IiwidGhlbiIsImJiZ19kYXRhIiwiY29udmVydEZldGNoZWREYXRhIiwidHJlZW1hcCIsInRyZWUiLCJyb290IiwiaGllcmFyY2h5IiwiY2hpbGRyZW4iLCJ4MCIsInkwIiwidXBkYXRlIiwic291cmNlIiwibm9kZXMiLCJsaW5rcyIsImRlc2NlbmRhbnRzIiwic2xpY2UiLCJpIiwiZHVyYXRpb24iLCJmb3JFYWNoIiwibm9kZSIsInNlbGVjdEFsbCIsImlkIiwibm9kZUVudGVyIiwiZW50ZXIiLCJvbiIsImNsaWNrIiwic3R5bGUiLCJ0ZXh0IiwiX2NoaWxkcmVuIiwibm9kZVVwZGF0ZSIsIm1lcmdlIiwidHJhbnNpdGlvbiIsIm5vZGVFeGl0IiwiZXhpdCIsInJlbW92ZSIsImRpYWdvbmFsIiwic3RhcnQiLCJkZWx0YSIsImxpbmsiLCJsaW5rRW50ZXIiLCJpbnNlcnQiLCJsaW5rVXBkYXRlIiwicGFyZW50IiwibGlua0V4aXQiLCJvIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUNoREMsVUFBUSxDQUFDQyxJQUFULENBQWNDLE1BQWQsQ0FBcUIsYUFBckI7QUFDQUMsc0VBQVU7QUFDWCxDQUhELEU7Ozs7Ozs7Ozs7OztBQ0xBO0FBQWUseUVBQUNDLFdBQUQsRUFBaUI7QUFDOUI7QUFDRSxNQUFNQyxnQkFBZ0IsR0FBR0MsRUFBRSxDQUFD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VUFBU25ELENBQVQsRUFBVztBQUNyQ0EsU0FBQyxDQUFDeUMsRUFBRixHQUFPekMsQ0FBQyxDQUFDMkIsQ0FBVDtBQUNBM0IsU0FBQyxDQUFDMEMsRUFBRixHQUFPMUMsQ0FBQyxDQUFDNEIsQ0FBVDtBQUNELE9BSEQsRUExSHVCLENBK0h2Qjs7QUFDQSxVQUFNOEIsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQTFELENBQUMsRUFBSTtBQUNqQixZQUFJQSxDQUFDLENBQUNpQixLQUFGLEtBQVksQ0FBaEIsRUFBbUI7QUFDakI2RCxpQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNELFNBRkQsTUFFTyxJQUFJL0UsQ0FBQyxDQUFDd0MsUUFBTixFQUFnQjtBQUNyQnhDLFdBQUMsQ0FBQzZELFNBQUYsR0FBYzdELENBQUMsQ0FBQ3dDLFFBQWhCO0FBQ0F4QyxXQUFDLENBQUN3QyxRQUFGLEdBQWEsSUFBYjtBQUNELFNBSE0sTUFHQTtBQUNMeEMsV0FBQyxDQUFDd0MsUUFBRixHQUFheEMsQ0FBQyxDQUFDNkQsU0FBZjtBQUNBN0QsV0FBQyxDQUFDNkQsU0FBRixHQUFjLElBQWQ7QUFDRDs7QUFDRGxCLGNBQU0sQ0FBQzNDLENBQUQsQ0FBTjtBQUNBOEUsZUFBTyxDQUFDQyxHQUFSLENBQVkvRSxDQUFaO0FBQ0QsT0FaRDtBQWFELEtBN0lELENBdEJ3RCxDQXFLeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBMkMsVUFBTSxDQUFDTCxJQUFELENBQU47QUFDRCxHQTlLRDtBQStLRCxDQTFNRCxFOzs7Ozs7Ozs7OztBQ2hCQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgY3JlYXRlVHJlZSBmcm9tIFwiLi9zY3JpcHRzL2NyZWF0ZV90cmVlXCI7XG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChcIkhlbGxvIFdvcmxkXCIpXG4gIGNyZWF0ZVRyZWUoKTtcbn0pIiwiZXhwb3J0IGRlZmF1bHQgKGZldGNoZWREYXRhKSA9PiB7XG4gIC8vIENvbnZlcnQgZGF0YSB0byBoaWVyYXJjaGljYWwgc3RydWN0dXJlXG4gICAgY29uc3QgaGllcmFyY2hpY2FsRGF0YSA9IGQzLm5lc3QoKVxuICAgICAgLmtleShmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLmhvbWU7XG4gICAgICB9KVxuICAgICAgLmtleShmdW5jdGlvbihkKSB7IFxuICAgICAgICByZXR1cm4gZC5jb2xsZWN0aW9uOyBcbiAgICAgIH0pXG4gICAgICAua2V5KGZ1bmN0aW9uKGQpIHsgXG4gICAgICAgIHJldHVybiBkLmdlbnVzOyBcbiAgICAgIH0pXG4gICAgICAuZW50cmllcyhmZXRjaGVkRGF0YSlcblxuICAgIC8vIENvcnJlY3Qga2V5L3ZhbHVlIGZvcm1hdCBmb3IgZDMuaGllcmFyY2h5IGFuZCAudHJlZVxuICAgIGNvbnN0IHNoYXBlZEhpZXJhcmNoaWNhbERhdGEgPSB7XG4gICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogaGllcmFyY2hpY2FsRGF0YS5tYXAoaG9tZSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcIm5hbWVcIjogaG9tZS5rZXksXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBob21lLnZhbHVlcy5tYXAoY29sbGVjdGlvbiA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBjb2xsZWN0aW9uLmtleSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBjb2xsZWN0aW9uLnZhbHVlcy5tYXAoZ2VudXMgPT4ge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBnZW51cy5rZXksXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IGdlbnVzLnZhbHVlcy5tYXAoc3BlY2ltZW4gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7Y29sbGVjdGlvbixnZW51cyxzcGVjaWVzLGNvbW1vbk5hbWUsZmFtaWx5LGFjY2Vzc2lvbixwcm92ZW5hbmNlfSA9IHNwZWNpbWVuO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbGxlY3Rpb25cIjogY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IGZhbWlseSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGF0aW5OYW1lXCI6IGAke2dlbnVzfSAke3NwZWNpZXN9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tbW9uTmFtZVwiOiBjb21tb25OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2Nlc3Npb25cIjogYWNjZXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm92ZW5hbmNlXCI6IHByb3ZlbmFuY2VcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gY29sbGVjdGlvbixnZW51cyxzcGVjaWVzLGNvbW1vbk5hbWUsZmFtaWx5LGFjY2Vzc2lvbixwcm92ZW5hbmNlXG4gICAgLy8gaGllcmFyY2hpY2FsRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAvLyAgIGQubmFtZSA9IGQua2V5O1xuICAgIC8vICAgZC5jaGlsZHJlbiA9IGQudmFsdWVzO1xuICAgIC8vICAgZC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKXtcbiAgICAvLyAgICAgY2hpbGQubmFtZSA9IGNoaWxkLmtleTtcbiAgICAvLyAgICAgY2hpbGQuY2hpbGRyZW4gPSBjaGlsZC52YWx1ZXM7XG4gICAgLy8gICAgIGNoaWxkLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oZ3JhbmRjaGlsZCkge1xuICAgIC8vICAgICAgIGdyYW5kY2hpbGQubmFtZSA9IGdyYW5kY2hpbGQua2V5O1xuICAgIC8vICAgICAgIGdyYW5kY2hpbGQuY2hpbGRyZW4gPSBncmFuZGNoaWxkLnZhbHVlcztcbiAgICAvLyAgICAgICBncmFuZGNoaWxkLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oZ3JlYXRncmFuZGNoaWxkKSB7XG4gICAgLy8gICAgICAgICBncmVhdGdyYW5kY2hpbGQubmFtZSA9IGdyZWF0Z3JhbmRjaGlsZC5rZXk7XG4gICAgLy8gICAgICAgICBncmVhdGdyYW5kY2hpbGQuY2hpbGRyZW4gPSBncmVhdGdyYW5kY2hpbGQudmFsdWVzO1xuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgIH0pXG4gICAgLy8gICB9KVxuICAgIC8vIH0pXG5cbiAgcmV0dXJuIHNoYXBlZEhpZXJhcmNoaWNhbERhdGE7XG59IiwiaW1wb3J0IGNvbnZlcnRGZXRjaGVkRGF0YSBmcm9tIFwiLi9jb252ZXJ0X2ZldGNoZWRfZGF0YVwiO1xuXG5jb25zdCBrbGFzcyA9IChkKSA9PiB7XG4gIGlmIChkLmRhdGEubmFtZS5jb21tb25OYW1lKSB7XG4gICAgcmV0dXJuIFwibGVhdmVzXCJcbiAgfSBlbHNlIGlmIChkLmRlcHRoID09PSA0KSB7XG4gICAgcmV0dXJuIFwidXBwZXIgYnJhbmNoZXNcIlxuICB9IGVsc2UgaWYgKGQuZGVwdGggPT09IDMpIHtcbiAgICByZXR1cm4gXCJtaWRkbGUgYnJhbmNoZXNcIlxuICB9IGVsc2UgaWYgKGQuZGVwdGggPT09IDIpIHtcbiAgICByZXR1cm4gXCJsb3dlciBicmFuY2hlc1wiXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwidHJ1bmtcIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgbWFyZ2luID0geyB0b3A6IDI1LCByaWdodDogMjUsIGJvdHRvbTogMjUsIGxlZnQ6IDI1IH0sXG4gICAgd2lkdGggPSAxNDAwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0ID0gNjAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgY29uc3Qgb3JpZW50YXRpb25zID0ge1xuICAgIFwiZ3Jvdy11cFwiOiB7XG4gICAgICBzaXplOiBbd2lkdGgsIGhlaWdodF0sXG4gICAgICB4OiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLng7XG4gICAgICB9LFxuICAgICAgeTogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gaGVpZ2h0IC0gZC55O1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyAuZGF0YShkMy5lbnRyaWVzKG9yaWVudGF0aW9ucykpXG4gIGxldCBzdmcgPSBkM1xuICAgIC5zZWxlY3QoXCJib2R5XCIpXG4gICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5yaWdodClcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAvLyBMb2FkIGFuZCBjb252ZXJ0IGNzdiBkYXRhID0+IGVhY2ggcm93IGJlY29tZXMgYW4gb2JqZWN0IHdpdGggY29sdW1ucyBhcyBrZXlzXG4gIGQzLmNzdihcInNyYy9kYXRhL2JiZ19kYXRhMTkxMjA0LmNzdlwiKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBcbiAgICAvLyBDb252ZXJ0IGRhdGEgdG8gaGllcmFyY2hpY2FsIHN0cnVjdHVyZVxuICAgIGxldCBiYmdfZGF0YSA9IGNvbnZlcnRGZXRjaGVkRGF0YShkYXRhKTtcblxuICAgIC8vIENyZWF0ZSB0cmVlIGFuZCBhc3NpZ24gc2l6ZSBmcm9tIG9yaWVudGF0aW9uc1xuICAgIGxldCB0cmVlbWFwID0gZDMudHJlZSgpLnNpemUoW2hlaWdodCwgd2lkdGhdKTtcblxuICAgIC8vIEFzc2lnbiByb290IG5vZGVcbiAgICBsZXQgcm9vdCA9IGQzLmhpZXJhcmNoeShiYmdfZGF0YSwgZCA9PiB7IHJldHVybiBkLmNoaWxkcmVuIH0pO1xuICAgIHJvb3QueDAgPSBoZWlnaHQgLyAyO1xuICAgIHJvb3QueTAgPSAwO1xuXG4gICAgLy8gQ29sbGFwc2Ugbm9kZSBhbmQgcmVjdXJzaXZlbHkgY29sbGFwc2UgYWxsIGNoaWxkcmVuXG4gICAgLy8gY29uc3QgY29sbGFwc2UgPSBkID0+IHtcbiAgICAvLyAgIGlmKGQuY2hpbGRyZW4pIHtcbiAgICAvLyAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuXG4gICAgLy8gICAgIGQuX2NoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpXG4gICAgLy8gICAgIGQuY2hpbGRyZW4gPSBudWxsXG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgY29uc3QgdXBkYXRlID0gc291cmNlID0+IHtcbiAgICAgIC8vIENhdGVnb3JpemUgbm9kZXMgYW5kIGxpbmtzXG4gICAgICBsZXQgbm9kZXMgPSB0cmVlbWFwKHJvb3QpO1xuICAgICAgY29uc3QgbGlua3MgPSBub2Rlcy5kZXNjZW5kYW50cygpLnNsaWNlKDEpO1xuXG4gICAgICAvLyBEZWNsYXJlIHZhcmlhYmxlcyB1c2VkIGZvciBhbmltYXRpb24gdGhyb3VnaG91dFxuICAgICAgbGV0IGkgPSAwO1xuICAgICAgY29uc3QgZHVyYXRpb24gPSAxNTAwO1xuXG4gICAgICAvLyBOb3JtYWxpemUgZGVwdGhcbiAgICAgIG5vZGVzLmRlc2NlbmRhbnRzKCkuZm9yRWFjaChkID0+IHtkLnkgPSBkLmRlcHRoICogMTUwfSk7XG4gICAgICAvLy8vLy8vLy8gTm9kZXMgLy8vLy8vLy8vXG4gICAgICAvLyBVcGRhdGUgdGhlIG5vZGVzXG4gICAgICBsZXQgbm9kZSA9IHN2Z1xuICAgICAgICAuc2VsZWN0QWxsKFwiZy5ub2RlXCIpXG4gICAgICAgIC5kYXRhKG5vZGVzLmRlc2NlbmRhbnRzKCksIGQgPT4geyByZXR1cm4gZC5pZCB8fCAoZC5pZCA9ICsraSk7IH0pXG5cbiAgICAgIC8vIENyZWF0ZSBub2Rlc1xuICAgICAgbGV0IG5vZGVFbnRlciA9IG5vZGVcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGVcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZCA9PiB7IHJldHVybiBgdHJhbnNsYXRlKCR7c291cmNlLnkwfSwgJHtzb3VyY2UueDB9KWA7IH0pXG4gICAgICAgIC5vbignY2xpY2snLCAoZCkgPT4gY2xpY2soZCkpO1xuICAgICAgICBcbiAgICAgIC8vIEFkZCBDaXJjbGUgdG8gbm9kZXNcbiAgICAgIG5vZGVFbnRlclxuICAgICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIGAke2tsYXNzKGQpfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiclwiLCA3KVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4ge1xuICAgICAgICAgIHJldHVybiBkLmNoaWxkcmVuID8gXCJyZ2IoODksIDY2LCA1NClcIiA6IFwicmdiKDY0LCAxMjUsIDE5NClcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIE5vZGUgbGFiZWxzXG4gICAgICBub2RlRW50ZXJcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnRleHQoZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIGQuZGF0YS5uYW1lLmNvbW1vbk5hbWVcbiAgICAgICAgICAgID8gYC0gJHtkLmRhdGEubmFtZS5jb21tb25OYW1lfSAtYFxuICAgICAgICAgICAgOiBgLSAke2QuZGF0YS5uYW1lfSAtYDsgXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwieFwiLCBkID0+IHsgcmV0dXJuIGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAtMTMgOiAxMzsgfSlcbiAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgZCA9PiB7IHJldHVybiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gXCJlbmRcIiA6IFwic3RhcnRcIjsgfSlcblxuICAgICAgLy8gRXhlY3V0ZSB1cGRhdGluZyBub2Rlc1xuICAgICAgY29uc3Qgbm9kZVVwZGF0ZSA9IG5vZGVFbnRlci5tZXJnZShub2RlKTtcblxuICAgICAgLy8gVHJhbnNpdGlvbiB0byBwcm9wZXIgbm9kZSBwb3NpdGlvblxuICAgICAgbm9kZVVwZGF0ZS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBkID0+IHsgXG4gICAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHtkLnl9LCAke2QueH0pYDsgfSk7XG4gICAgICBcbiAgICAgIG5vZGVVcGRhdGUuc2VsZWN0KCdjaXJjbGUuYnJhbmNoZXMnKVxuICAgICAgICAuYXR0cigncicsIDcpXG4gICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiB7IFxuICAgICAgICAgIHJldHVybiBkLmNoaWxkcmVuID8gXCJyZ2IoODksIDY2LCA1NClcIiA6IFwicmdiKDY0LCAxMjUsIDE5NClcIjsgXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpO1xuXG4gICAgICAvLyBSZW1vdmUgYW55IGV4aXRpbmcgbm9kZXNcbiAgICAgIGxldCBub2RlRXhpdCA9IG5vZGUuZXhpdCgpLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4geyByZXR1cm4gYHRyYW5zbGF0ZSgke3NvdXJjZS55fSwgJHtzb3VyY2UueH0pYDsgfSlcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBSZWR1Y2UgZXhpdGluZyBjaXJjbGVzIHNpemUgdG8gMFxuICAgICAgbm9kZUV4aXQuc2VsZWN0KCcuYnJhbmNoZXMnKVxuICAgICAgICAuYXR0cigncicsIDFlLTYpO1xuXG4gICAgICAvLyBSZWR1Y2UgbGFiZWwgb3BhY2l0eVxuICAgICAgbm9kZUV4aXQuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxZS02KTtcbiAgICBcbiAgICAgIC8vLy8vLy8vLyBMaW5rcyAvLy8vLy8vLy9cbiAgICAgIC8vIENyZWF0ZSBwYXRoIGJldHdlZW4gcGFyZW50IGFuZCBjaGlsZFxuICAgICAgY29uc3QgZGlhZ29uYWwgPSAoc3RhcnQsIGRlbHRhKSA9PiB7XG4gICAgICAgIHJldHVybiBgTSAke3N0YXJ0Lnl9ICR7c3RhcnQueH0gXG4gICAgICAgICAgICBDICR7KHN0YXJ0LnkgKyBkZWx0YS55KSAvIDJ9ICR7c3RhcnQueH0sXG4gICAgICAgICAgICAkeyhzdGFydC55ICsgZGVsdGEueSkgLyAyfSAke2RlbHRhLnh9LFxuICAgICAgICAgICAgJHtkZWx0YS55fSAke2RlbHRhLnh9YDtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIGxpbmtzXG4gICAgICBsZXQgbGluayA9IHN2Zy5zZWxlY3RBbGwoXCIubGlua1wiKVxuICAgICAgICAuZGF0YShsaW5rcywgZCA9PiB7IHJldHVybiBkLmlkIH0pO1xuXG4gICAgICAvLyBVcGRhdGUgJ3JldmVhbGVkJyBsaW5rc1xuICAgICAgbGV0IGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKVxuICAgICAgICAuaW5zZXJ0KFwicGF0aFwiLCBcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBkID0+IHsgcmV0dXJuIGBsaW5rICR7a2xhc3MoZCl9YDsgfSlcbiAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4geyBcbiAgICAgICAgICBjb25zdCBzdGFydCA9IHt4OiBzb3VyY2UueDAsIHk6IHNvdXJjZS55MH1cbiAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgIHJldHVybiBkaWFnb25hbChzdGFydCwgc3RhcnQpIFxuICAgICAgICB9KTtcblxuICAgICAgLy8gVXBkYXRlXG4gICAgICBjb25zdCBsaW5rVXBkYXRlID0gbGlua0VudGVyLm1lcmdlKGxpbmspO1xuXG4gICAgICAvLyBBZGQgdHJhbnNpdGlvbiB0byBwYXJlbnQgZWxlbWVudFxuICAgICAgbGlua1VwZGF0ZS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgICAuYXR0cignZCcsIGQgPT4geyBcbiAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgIHJldHVybiBkaWFnb25hbChkLCBkLnBhcmVudCk7IH0pXG5cbiAgICAgIC8vIFJlbW92ZSBhbnkgZXhpdGluZyBsaW5rc1xuICAgICAgY29uc3QgbGlua0V4aXQgPSBsaW5rLmV4aXQoKS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgICAuYXR0cignZCcsIGQgPT4geyBcbiAgICAgICAgICBjb25zdCBvID0ge3g6IHNvdXJjZS54LCB5OiBzb3VyY2UueX1cbiAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgIHJldHVybiBkaWFnb25hbChvLCBvKSBcbiAgICAgICAgfSlcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBTdG9yZSBvbGQgcG9zaXRpb25zIGZvciB0cmFuc2l0aW9uXG4gICAgICBub2Rlcy5kZXNjZW5kYW50cygpLmZvckVhY2goZnVuY3Rpb24oZCl7XG4gICAgICAgIGQueDAgPSBkLng7XG4gICAgICAgIGQueTAgPSBkLnk7XG4gICAgICB9KTtcblxuICAgICAgLy8gSGFuZGxlIGNsaWNrIC0gc2V0IHZpc2liaWxpdHkgcHJvcGVydHlcbiAgICAgIGNvbnN0IGNsaWNrID0gZCA9PiB7XG4gICAgICAgIGlmIChkLmRlcHRoID09PSA0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJsZWFmIG5vZGUhXCIpXG4gICAgICAgIH0gZWxzZSBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZShkKTtcbiAgICAgICAgY29uc29sZS5sb2coZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZWN1cnNpdmVseSBjb2xsYXBzZSBhbGwgbm9kZXMgZWFjaCBjb2xsZWN0aW9uIGNvbnRhaW5zXG4gICAgLy8gcm9vdC5jaGlsZHJlblswXS5jaGlsZHJlbi5mb3JFYWNoKGNvbGxlY3Rpb24gPT4ge1xuICAgIC8vICAgY29sbGVjdGlvbi5kZXNjZW5kYW50cygpLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIC8vICAgICBjaGlsZC5fY2hpbGRyZW4gPSBjaGlsZC5jaGlsZHJlbjtcbiAgICAvLyAgICAgY2hpbGQuY2hpbGRyZW4gPSBudWxsO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG5cbiAgICB1cGRhdGUocm9vdCk7ICAgIFxuICB9KTtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9