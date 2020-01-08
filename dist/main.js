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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnZlcnRfZmV0Y2hlZF9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NyZWF0ZV90cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9kYzJhIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmQiLCJjcmVhdGVUcmVlIiwiZmV0Y2hlZERhdGEiLCJoaWVyYXJjaGljYWxEYXRhIiwiZDMiLCJuZXN0Iiwia2V5IiwiZCIsImhvbWUiLCJjb2xsZWN0aW9uIiwiZ2VudXMiLCJlbnRyaWVzIiwic2hhcGVkSGllcmFyY2hpY2FsRGF0YSIsIm1hcCIsInZhbHVlcyIsInNwZWNpbWVuIiwic3BlY2llcyIsImNvbW1vbk5hbWUiLCJmYW1pbHkiLCJhY2Nlc3Npb24iLCJwcm92ZW5hbmNlIiwiYnJhbmNoTHZsIiwiZGVwdGgiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9yaWVudGF0aW9ucyIsInNpemUiLCJ4IiwieSIsInN2ZyIsInNlbGVjdCIsInNlbGVjdEFsbCIsImRhdGEiLCJlbnRlciIsImF0dHIiLCJjc3YiLCJ0aGVuIiwiYmJnX2RhdGEiLCJjb252ZXJ0RmV0Y2hlZERhdGEiLCJlYWNoIiwib3JpZW50YXRpb24iLCJvIiwidmFsdWUiLCJ0cmVlbWFwIiwidHJlZSIsIm5vZGVzIiwiaGllcmFyY2h5IiwibGlua3MiLCJkZXNjZW5kYW50cyIsInNsaWNlIiwicGFyZW50IiwiYnJhbmNoTm9kZXMiLCJsZWFmTm9kZXMiLCJmb3JFYWNoIiwibm9kZSIsInB1c2giLCJsZWFmTm9kZSIsImJyYW5jaE5vZGUiLCJ0ZXh0IiwibmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUNoREMsVUFBUSxDQUFDQyxJQUFULENBQWNDLE1BQWQsQ0FBcUIsYUFBckI7QUFDQUMsc0VBQVU7QUFDWCxDQUhELEU7Ozs7Ozs7Ozs7OztBQ0xBO0FBQWUseUVBQUNDLFdBQUQsRUFBaUI7QUFDOUI7QUFDRSxNQUFNQyxnQkFBZ0IsR0FBR0MsRUFBRSxDQUFDQyxJQUFILEdBQ3RCQyxHQURzQixDQUNsQixVQUFTQyxDQUFULEVBQVk7QUFDZixXQUFPQSxDQUFDLENBQUNDLElBQVQ7QUFDRCxHQUhzQixFQUl0QkYsR0FKc0IsQ0FJbEIsVUFBU0MsQ0FBVCxFQUFZO0FBQ2YsV0FBT0EsQ0FBQyxDQUFDRSxVQUFUO0FBQ0QsR0FOc0IsRUFPdEJILEdBUHNCLENBT2xCLFVBQVNDLENBQVQsRUFBWTtBQUNmLFdBQU9BLENBQUMsQ0FBQ0csS0FBVDtBQUNELEdBVHNCLEVBVXRCQyxPQVZzQixDQVVkVCxXQVZjLENBQXpCLENBRjRCLENBYzVCOztBQUNBLE1BQU1VLHNCQUFzQixHQUFHO0FBQzdCLFlBQVEsRUFEcUI7QUFFN0IsZ0JBQVlULGdCQUFnQixDQUFDVSxHQUFqQixDQUFxQixVQUFBTCxJQUFJLEVBQUk7QUFFdkMsYUFBTztBQUNMLGdCQUFRQSxJQUFJLENBQUNGLEdBRFI7QUFFTCxvQkFBWUUsSUFBSSxDQUFDTSxNQUFMLENBQVlELEdBQVosQ0FBZ0IsVUFBQUosVUFBVSxFQUFJO0FBRXhDLGlCQUFPO0FBQ0wsb0JBQVFBLFVBQVUsQ0FBQ0gsR0FEZDtBQUVMLHdCQUFZRyxVQUFVLENBQUNLLE1BQVgsQ0FBa0JELEdBQWxCLENBQXNCLFVBQUFILEtBQUssRUFBSTtBQUV6QyxxQkFBTztBQUNMLHdCQUFRQSxLQUFLLENBQUNKLEdBRFQ7QUFFTCw0QkFBWUksS0FBSyxDQUFDSSxNQUFOLENBQWFELEdBQWIsQ0FBaUIsVUFBQUUsUUFBUSxFQUFJO0FBQUEsc0JBQ2hDTixVQURnQyxHQUNtQ00sUUFEbkMsQ0FDaENOLFVBRGdDO0FBQUEsc0JBQ3JCQyxLQURxQixHQUNtQ0ssUUFEbkMsQ0FDckJMLEtBRHFCO0FBQUEsc0JBQ2ZNLE9BRGUsR0FDbUNELFFBRG5DLENBQ2ZDLE9BRGU7QUFBQSxzQkFDUEMsVUFETyxHQUNtQ0YsUUFEbkMsQ0FDUEUsVUFETztBQUFBLHNCQUNJQyxNQURKLEdBQ21DSCxRQURuQyxDQUNJRyxNQURKO0FBQUEsc0JBQ1dDLFNBRFgsR0FDbUNKLFFBRG5DLENBQ1dJLFNBRFg7QUFBQSxzQkFDcUJDLFVBRHJCLEdBQ21DTCxRQURuQyxDQUNxQkssVUFEckI7QUFFdkMseUJBQU87QUFDTCw0QkFBUTtBQUNOLG9DQUFjWCxVQURSO0FBRU4sZ0NBQVVTLE1BRko7QUFHTiw2Q0FBZ0JSLEtBQWhCLGNBQXlCTSxPQUF6QixDQUhNO0FBSU4sb0NBQWNDLFVBSlI7QUFLTixtQ0FBYUUsU0FMUDtBQU1OLG9DQUFjQztBQU5SO0FBREgsbUJBQVA7QUFVRCxpQkFaVztBQUZQLGVBQVA7QUFnQkQsYUFsQlc7QUFGUCxXQUFQO0FBc0JELFNBeEJXO0FBRlAsT0FBUDtBQTRCRCxLQTlCVztBQUZpQixHQUEvQixDQWY0QixDQWtENUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRixTQUFPUixzQkFBUDtBQUNELENBckVELEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7QUFFQSxJQUFNUyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDZCxDQUFELEVBQU87QUFDdkIsTUFBSUEsQ0FBQyxDQUFDZSxLQUFGLEtBQVksQ0FBaEIsRUFBbUI7QUFDakIsV0FBTyxvQkFBUDtBQUNELEdBRkQsTUFFTyxJQUFJZixDQUFDLENBQUNlLEtBQUYsS0FBWSxDQUFoQixFQUFtQjtBQUN4QixXQUFPLHFCQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlmLENBQUMsQ0FBQ2UsS0FBRixLQUFZLENBQWhCLEVBQW1CO0FBQ3hCLFdBQU8sb0JBQVA7QUFDRCxHQUZNLE1BRUE7QUFDTCxXQUFPLFlBQVA7QUFDRDtBQUNGLENBVkQ7O0FBWWUsMkVBQU07QUFDbkIsTUFBTUMsTUFBTSxHQUFHO0FBQUVDLE9BQUcsRUFBRSxFQUFQO0FBQVdDLFNBQUssRUFBRSxFQUFsQjtBQUFzQkMsVUFBTSxFQUFFLEVBQTlCO0FBQWtDQyxRQUFJLEVBQUU7QUFBeEMsR0FBZjtBQUFBLE1BQ0VDLEtBQUssR0FBRyxPQUFPTCxNQUFNLENBQUNJLElBQWQsR0FBcUJKLE1BQU0sQ0FBQ0UsS0FEdEM7QUFBQSxNQUVFSSxNQUFNLEdBQUcsTUFBTU4sTUFBTSxDQUFDQyxHQUFiLEdBQW1CRCxNQUFNLENBQUNHLE1BRnJDO0FBSUEsTUFBTUksWUFBWSxHQUFHO0FBQ25CLGVBQVc7QUFDVEMsVUFBSSxFQUFFLENBQUNILEtBQUQsRUFBUUMsTUFBUixDQURHO0FBRVRHLE9BQUMsRUFBRSxXQUFTekIsQ0FBVCxFQUFZO0FBQ2IsZUFBT0EsQ0FBQyxDQUFDeUIsQ0FBVDtBQUNELE9BSlE7QUFLVEMsT0FBQyxFQUFFLFdBQVMxQixDQUFULEVBQVk7QUFDYixlQUFPc0IsTUFBTSxHQUFHdEIsQ0FBQyxDQUFDMEIsQ0FBbEI7QUFDRDtBQVBRO0FBRFEsR0FBckI7QUFZQSxNQUFNQyxHQUFHLEdBQUc5QixFQUFFLENBQ1grQixNQURTLENBQ0YsTUFERSxFQUVUQyxTQUZTLENBRUMsS0FGRCxFQUdUQyxJQUhTLENBR0pqQyxFQUFFLENBQUNPLE9BQUgsQ0FBV21CLFlBQVgsQ0FISSxFQUlUUSxLQUpTLEdBS1R0QyxNQUxTLENBS0YsS0FMRSxFQU1UdUMsSUFOUyxDQU1KLE9BTkksRUFNS1gsS0FBSyxHQUFHTCxNQUFNLENBQUNJLElBQWYsR0FBc0JKLE1BQU0sQ0FBQ0UsS0FObEMsRUFPVGMsSUFQUyxDQU9KLFFBUEksRUFPTVYsTUFBTSxHQUFHTixNQUFNLENBQUNDLEdBQWhCLEdBQXNCRCxNQUFNLENBQUNFLEtBUG5DLEVBUVR6QixNQVJTLENBUUYsR0FSRSxFQVNUdUMsSUFUUyxDQVNKLFdBVEksRUFTUyxlQUFlaEIsTUFBTSxDQUFDSSxJQUF0QixHQUE2QixHQUE3QixHQUFtQ0osTUFBTSxDQUFDQyxHQUExQyxHQUFnRCxHQVR6RCxDQUFaLENBakJtQixDQTRCbkI7O0FBQ0FwQixJQUFFLENBQUNvQyxHQUFILENBQU8sNkJBQVAsRUFBc0NDLElBQXRDLENBQTJDLFVBQVNKLElBQVQsRUFBZTtBQUV4RDtBQUNBLFFBQUlLLFFBQVEsR0FBR0MscUVBQWtCLENBQUNOLElBQUQsQ0FBakM7QUFFQUgsT0FBRyxDQUFDVSxJQUFKLENBQVMsVUFBU0MsV0FBVCxFQUFzQjtBQUM3QixVQUFNWCxHQUFHLEdBQUc5QixFQUFFLENBQUMrQixNQUFILENBQVUsSUFBVixDQUFaO0FBQUEsVUFDRVcsQ0FBQyxHQUFHRCxXQUFXLENBQUNFLEtBRGxCLENBRDZCLENBSTdCOztBQUNBLFVBQUlDLE9BQU8sR0FBRzVDLEVBQUUsQ0FBQzZDLElBQUgsR0FBVWxCLElBQVYsQ0FBZWUsQ0FBQyxDQUFDZixJQUFqQixDQUFkO0FBRUEsVUFBSW1CLEtBQUssR0FBRzlDLEVBQUUsQ0FBQytDLFNBQUgsQ0FBYVQsUUFBYixDQUFaO0FBRUFRLFdBQUssR0FBR0YsT0FBTyxDQUFDRSxLQUFELENBQWYsQ0FUNkIsQ0FXN0I7O0FBQ0EsVUFBTUUsS0FBSyxHQUFHRixLQUFLLENBQUNHLFdBQU4sR0FBb0JDLEtBQXBCLENBQTBCLENBQTFCLENBQWQ7QUFFQXBCLFNBQUcsQ0FBQ0UsU0FBSixDQUFjLE9BQWQsRUFDR0MsSUFESCxDQUNRZSxLQURSLEVBRUdkLEtBRkgsR0FHR3RDLE1BSEgsQ0FHVSxNQUhWLEVBSUd1QyxJQUpILENBSVEsT0FKUixFQUlpQixVQUFTaEMsQ0FBVCxFQUFZO0FBQUUsZUFBT2MsU0FBUyxDQUFDZCxDQUFELENBQWhCO0FBQXNCLE9BSnJELEVBS0dnQyxJQUxILENBS1EsR0FMUixFQUthLFVBQVNoQyxDQUFULEVBQVk7QUFDckIsZUFDRSxNQUNBQSxDQUFDLENBQUN5QixDQURGLEdBRUEsR0FGQSxHQUdBYyxDQUFDLENBQUNiLENBQUYsQ0FBSTFCLENBQUosQ0FIQSxHQUlBLEdBSkEsR0FLQUEsQ0FBQyxDQUFDeUIsQ0FMRixHQU1BLEdBTkEsR0FPQSxDQUFDYyxDQUFDLENBQUNiLENBQUYsQ0FBSTFCLENBQUosSUFBU3VDLENBQUMsQ0FBQ2IsQ0FBRixDQUFJMUIsQ0FBQyxDQUFDZ0QsTUFBTixDQUFWLElBQTJCLENBUDNCLEdBUUEsR0FSQSxHQVNBaEQsQ0FBQyxDQUFDZ0QsTUFBRixDQUFTdkIsQ0FUVCxHQVVBLEdBVkEsR0FXQSxDQUFDYyxDQUFDLENBQUNiLENBQUYsQ0FBSTFCLENBQUosSUFBU3VDLENBQUMsQ0FBQ2IsQ0FBRixDQUFJMUIsQ0FBQyxDQUFDZ0QsTUFBTixDQUFWLElBQTJCLENBWDNCLEdBWUEsR0FaQSxHQWFBaEQsQ0FBQyxDQUFDZ0QsTUFBRixDQUFTdkIsQ0FiVCxHQWNBLEdBZEEsR0FlQWMsQ0FBQyxDQUFDYixDQUFGLENBQUkxQixDQUFDLENBQUNnRCxNQUFOLENBaEJGO0FBa0JELE9BeEJILEVBZDZCLENBd0M3Qjs7QUFDQSxVQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxVQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQVAsV0FBSyxDQUFDRyxXQUFOLEdBQW9CSyxPQUFwQixDQUE0QixVQUFBQyxJQUFJLEVBQUk7QUFDbEMsWUFBSUEsSUFBSSxDQUFDckMsS0FBTCxLQUFlLENBQW5CLEVBQXFCO0FBQ25CbUMsbUJBQVMsQ0FBQ0csSUFBVixDQUFlRCxJQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0xILHFCQUFXLENBQUNJLElBQVosQ0FBaUJELElBQWpCO0FBQ0Q7QUFDRixPQU5ELEVBM0M2QixDQW1EN0I7O0FBQ0EsVUFBSUUsUUFBUSxHQUFHM0IsR0FBRyxDQUNmRSxTQURZLENBQ0YsV0FERSxFQUVaQyxJQUZZLENBRVBvQixTQUZPLEVBR1puQixLQUhZLEdBSVp0QyxNQUpZLENBSUwsR0FKSyxDQUFmO0FBS0E2RCxjQUFRLENBQ0w3RCxNQURILENBQ1UsUUFEVixFQUVHdUMsSUFGSCxDQUVRLE9BRlIsRUFFaUIsV0FGakIsRUFHR0EsSUFISCxDQUdRLEdBSFIsRUFHYSxHQUhiLEVBSUdBLElBSkgsQ0FJUSxJQUpSLEVBSWNPLENBQUMsQ0FBQ2QsQ0FKaEIsRUFLR08sSUFMSCxDQUtRLElBTFIsRUFLY08sQ0FBQyxDQUFDYixDQUxoQixFQXpENkIsQ0FnRTdCOztBQUNBLFVBQUk2QixVQUFVLEdBQUc1QixHQUFHLENBQ2pCRSxTQURjLENBQ0osYUFESSxFQUVkQyxJQUZjLENBRVRtQixXQUZTLEVBR2RsQixLQUhjLEdBSWR0QyxNQUpjLENBSVAsR0FKTyxDQUFqQjtBQUtBOEQsZ0JBQVUsQ0FDUDlELE1BREgsQ0FDVSxRQURWLEVBRUd1QyxJQUZILENBRVEsT0FGUixFQUVpQixZQUZqQixFQUdHQSxJQUhILENBR1EsR0FIUixFQUdhLEdBSGIsRUFJR0EsSUFKSCxDQUlRLElBSlIsRUFJY08sQ0FBQyxDQUFDZCxDQUpoQixFQUtHTyxJQUxILENBS1EsSUFMUixFQUtjTyxDQUFDLENBQUNiLENBTGhCO0FBT0E2QixnQkFBVSxDQUNQOUQsTUFESCxDQUNVLE1BRFYsRUFFRytELElBRkgsQ0FFUSxVQUFTeEQsQ0FBVCxFQUFZO0FBQ2hCLGVBQU9BLENBQUMsQ0FBQzhCLElBQUYsQ0FBTzJCLElBQWQ7QUFDRCxPQUpILEVBS0d6QixJQUxILENBS1EsR0FMUixFQUthTyxDQUFDLENBQUNkLENBTGYsRUFNR08sSUFOSCxDQU1RLElBTlIsRUFNYyxDQU5kLEVBT0dBLElBUEgsQ0FPUSxHQVBSLEVBT2FPLENBQUMsQ0FBQ2IsQ0FQZjtBQVVELEtBdkZEO0FBeUZELEdBOUZEO0FBK0ZELENBNUhELEU7Ozs7Ozs7Ozs7O0FDZEEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGNyZWF0ZVRyZWUgZnJvbSBcIi4vc2NyaXB0cy9jcmVhdGVfdHJlZVwiO1xuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoXCJIZWxsbyBXb3JsZFwiKVxuICBjcmVhdGVUcmVlKCk7XG59KSIsImV4cG9ydCBkZWZhdWx0IChmZXRjaGVkRGF0YSkgPT4ge1xuICAvLyBDb252ZXJ0IGRhdGEgdG8gaGllcmFyY2hpY2FsIHN0cnVjdHVyZVxuICAgIGNvbnN0IGhpZXJhcmNoaWNhbERhdGEgPSBkMy5uZXN0KClcbiAgICAgIC5rZXkoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5ob21lO1xuICAgICAgfSlcbiAgICAgIC5rZXkoZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgcmV0dXJuIGQuY29sbGVjdGlvbjsgXG4gICAgICB9KVxuICAgICAgLmtleShmdW5jdGlvbihkKSB7IFxuICAgICAgICByZXR1cm4gZC5nZW51czsgXG4gICAgICB9KVxuICAgICAgLmVudHJpZXMoZmV0Y2hlZERhdGEpXG5cbiAgICAvLyBDb3JyZWN0IGtleS92YWx1ZSBmb3JtYXQgZm9yIGQzLmhpZXJhcmNoeSBhbmQgLnRyZWVcbiAgICBjb25zdCBzaGFwZWRIaWVyYXJjaGljYWxEYXRhID0ge1xuICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IGhpZXJhcmNoaWNhbERhdGEubWFwKGhvbWUgPT4ge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXCJuYW1lXCI6IGhvbWUua2V5LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogaG9tZS52YWx1ZXMubWFwKGNvbGxlY3Rpb24gPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogY29sbGVjdGlvbi5rZXksXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogY29sbGVjdGlvbi52YWx1ZXMubWFwKGdlbnVzID0+IHtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogZ2VudXMua2V5LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBnZW51cy52YWx1ZXMubWFwKHNwZWNpbWVuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2NvbGxlY3Rpb24sZ2VudXMsc3BlY2llcyxjb21tb25OYW1lLGZhbWlseSxhY2Nlc3Npb24scHJvdmVuYW5jZX0gPSBzcGVjaW1lbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xsZWN0aW9uXCI6IGNvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBmYW1pbHksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhdGluTmFtZVwiOiBgJHtnZW51c30gJHtzcGVjaWVzfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbW1vbk5hbWVcIjogY29tbW9uTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWNjZXNzaW9uXCI6IGFjY2Vzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvdmVuYW5jZVwiOiBwcm92ZW5hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGNvbGxlY3Rpb24sZ2VudXMsc3BlY2llcyxjb21tb25OYW1lLGZhbWlseSxhY2Nlc3Npb24scHJvdmVuYW5jZVxuICAgIC8vIGhpZXJhcmNoaWNhbERhdGEuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgLy8gICBkLm5hbWUgPSBkLmtleTtcbiAgICAvLyAgIGQuY2hpbGRyZW4gPSBkLnZhbHVlcztcbiAgICAvLyAgIGQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCl7XG4gICAgLy8gICAgIGNoaWxkLm5hbWUgPSBjaGlsZC5rZXk7XG4gICAgLy8gICAgIGNoaWxkLmNoaWxkcmVuID0gY2hpbGQudmFsdWVzO1xuICAgIC8vICAgICBjaGlsZC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGdyYW5kY2hpbGQpIHtcbiAgICAvLyAgICAgICBncmFuZGNoaWxkLm5hbWUgPSBncmFuZGNoaWxkLmtleTtcbiAgICAvLyAgICAgICBncmFuZGNoaWxkLmNoaWxkcmVuID0gZ3JhbmRjaGlsZC52YWx1ZXM7XG4gICAgLy8gICAgICAgZ3JhbmRjaGlsZC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGdyZWF0Z3JhbmRjaGlsZCkge1xuICAgIC8vICAgICAgICAgZ3JlYXRncmFuZGNoaWxkLm5hbWUgPSBncmVhdGdyYW5kY2hpbGQua2V5O1xuICAgIC8vICAgICAgICAgZ3JlYXRncmFuZGNoaWxkLmNoaWxkcmVuID0gZ3JlYXRncmFuZGNoaWxkLnZhbHVlcztcbiAgICAvLyAgICAgICB9KVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuXG4gIHJldHVybiBzaGFwZWRIaWVyYXJjaGljYWxEYXRhO1xufSIsImltcG9ydCBjb252ZXJ0RmV0Y2hlZERhdGEgZnJvbSBcIi4vY29udmVydF9mZXRjaGVkX2RhdGFcIjtcblxuY29uc3QgYnJhbmNoTHZsID0gKGQpID0+IHtcbiAgaWYgKGQuZGVwdGggPT09IDQpIHtcbiAgICByZXR1cm4gXCJsaW5rIHVwcGVyQnJhbmNoZXNcIlxuICB9IGVsc2UgaWYgKGQuZGVwdGggPT09IDMpIHtcbiAgICByZXR1cm4gXCJsaW5rIG1pZGRsZUJyYW5jaGVzXCJcbiAgfSBlbHNlIGlmIChkLmRlcHRoID09PSAyKSB7XG4gICAgcmV0dXJuIFwibGluayBsb3dlckJyYW5jaGVzXCJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJsaW5rIHRydW5rXCJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAyNSwgcmlnaHQ6IDI1LCBib3R0b206IDI1LCBsZWZ0OiAyNSB9LFxuICAgIHdpZHRoID0gMTQwMCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuICAgIGhlaWdodCA9IDYwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gIGNvbnN0IG9yaWVudGF0aW9ucyA9IHtcbiAgICBcImdyb3ctdXBcIjoge1xuICAgICAgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLFxuICAgICAgeDogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC54O1xuICAgICAgfSxcbiAgICAgIHk6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGhlaWdodCAtIGQueTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3ZnID0gZDNcbiAgICAuc2VsZWN0KFwiYm9keVwiKVxuICAgIC5zZWxlY3RBbGwoXCJzdmdcIilcbiAgICAuZGF0YShkMy5lbnRyaWVzKG9yaWVudGF0aW9ucykpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4ucmlnaHQpXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gIC8vIExvYWQgYW5kIGNvbnZlcnQgY3N2IGRhdGEgPT4gZWFjaCByb3cgYmVjb21lcyBhbiBvYmplY3Qgd2l0aCBjb2x1bW5zIGFzIGtleXNcbiAgZDMuY3N2KFwic3JjL2RhdGEvYmJnX2RhdGExOTEyMDQuY3N2XCIpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgIFxuICAgIC8vIENvbnZlcnQgZGF0YSB0byBoaWVyYXJjaGljYWwgc3RydWN0dXJlXG4gICAgbGV0IGJiZ19kYXRhID0gY29udmVydEZldGNoZWREYXRhKGRhdGEpO1xuXG4gICAgc3ZnLmVhY2goZnVuY3Rpb24ob3JpZW50YXRpb24pIHtcbiAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdCh0aGlzKSxcbiAgICAgICAgbyA9IG9yaWVudGF0aW9uLnZhbHVlO1xuXG4gICAgICAvLyBDcmVhdGUgdHJlZVxuICAgICAgbGV0IHRyZWVtYXAgPSBkMy50cmVlKCkuc2l6ZShvLnNpemUpO1xuXG4gICAgICBsZXQgbm9kZXMgPSBkMy5oaWVyYXJjaHkoYmJnX2RhdGEpO1xuICAgICAgXG4gICAgICBub2RlcyA9IHRyZWVtYXAobm9kZXMpO1xuXG4gICAgICAvLyBSZW5kZXIgYW5kIGNsYXNzaWZ5IGFsbCBsaW5rc1xuICAgICAgY29uc3QgbGlua3MgPSBub2Rlcy5kZXNjZW5kYW50cygpLnNsaWNlKDEpO1xuXG4gICAgICBzdmcuc2VsZWN0QWxsKFwiLmxpbmtcIilcbiAgICAgICAgLmRhdGEobGlua3MpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gYnJhbmNoTHZsKGQpOyB9KVxuICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBcIk1cIiArXG4gICAgICAgICAgICBkLnggK1xuICAgICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgICAgby55KGQpICtcbiAgICAgICAgICAgIFwiQ1wiICtcbiAgICAgICAgICAgIGQueCArXG4gICAgICAgICAgICBcIixcIiArXG4gICAgICAgICAgICAoby55KGQpICsgby55KGQucGFyZW50KSkgLyAyICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIGQucGFyZW50LnggK1xuICAgICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgICAgKG8ueShkKSArIG8ueShkLnBhcmVudCkpIC8gMiArXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICBkLnBhcmVudC54ICtcbiAgICAgICAgICAgIFwiLFwiICtcbiAgICAgICAgICAgIG8ueShkLnBhcmVudClcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuXG4gICAgICAvLyBHcm91cCBicmFuY2ggYW5kIGxlYWYgbm9kZXNcbiAgICAgIGxldCBicmFuY2hOb2RlcyA9IFtdO1xuICAgICAgbGV0IGxlYWZOb2RlcyA9IFtdO1xuICAgICAgbm9kZXMuZGVzY2VuZGFudHMoKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBpZiAobm9kZS5kZXB0aCA9PT0gNCl7XG4gICAgICAgICAgbGVhZk5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJhbmNoTm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSkgICAgICBcblxuICAgICAgLy8gQ3JlYXRlIGxlYWZOb2RlIGRpYW1vbmRzXG4gICAgICBsZXQgbGVhZk5vZGUgPSBzdmdcbiAgICAgICAgLnNlbGVjdEFsbChcIi5sZWFmTm9kZVwiKVxuICAgICAgICAuZGF0YShsZWFmTm9kZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpO1xuICAgICAgbGVhZk5vZGVcbiAgICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiLmxlYWZOb2RlXCIpXG4gICAgICAgIC5hdHRyKFwiclwiLCA0LjUpXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgby54KVxuICAgICAgICAuYXR0cihcImN5XCIsIG8ueSk7XG5cbiAgICAgIC8vIENyZWF0ZSBicmFuY2hOb2RlIGNpcmNsZXNcbiAgICAgIGxldCBicmFuY2hOb2RlID0gc3ZnXG4gICAgICAgIC5zZWxlY3RBbGwoXCIuYnJhbmNoTm9kZVwiKVxuICAgICAgICAuZGF0YShicmFuY2hOb2RlcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcImdcIik7XG4gICAgICBicmFuY2hOb2RlXG4gICAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJyYW5jaE5vZGVcIilcbiAgICAgICAgLmF0dHIoXCJyXCIsIDQuNSlcbiAgICAgICAgLmF0dHIoXCJjeFwiLCBvLngpXG4gICAgICAgIC5hdHRyKFwiY3lcIiwgby55KTtcblxuICAgICAgYnJhbmNoTm9kZVxuICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuZGF0YS5uYW1lO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcInhcIiwgby54KVxuICAgICAgICAuYXR0cihcImR4XCIsIDUpXG4gICAgICAgIC5hdHRyKFwieVwiLCBvLnkpO1xuXG5cbiAgICB9KVxuICAgIFxuICB9KTtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9