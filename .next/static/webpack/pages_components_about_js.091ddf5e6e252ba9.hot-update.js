"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages_components_about_js",{

/***/ "./pages/components/about.js":
/*!***********************************!*\
  !*** ./pages/components/about.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ about; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var _public_avatar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/avatar.png */ \"./pages/public/avatar.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction getYearMonthDifference(targetDate) {\n    var startDate = new Date(\"2021-01-18\");\n    var endDate = new Date(targetDate);\n    var startYear = startDate.getFullYear();\n    var startMonth = startDate.getMonth();\n    var endYear = endDate.getFullYear();\n    var endMonth = endDate.getMonth();\n    var yearDiff = endYear - startYear;\n    var monthDiff = endMonth - startMonth;\n    var totalMonths = yearDiff * 12 + monthDiff;\n    var years = Math.floor(totalMonths / 12);\n    var months = totalMonths % 12;\n    return {\n        years: years,\n        months: months\n    };\n}\nfunction about(props) {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)({\n        threshold: 0.5\n    }), 2), ref1 = ref[0], inView = ref[1];\n    var container = {\n        hidden: {\n            opacity: 1,\n            scale: 0\n        },\n        visible: {\n            opacity: 1,\n            scale: 0.9\n        }\n    };\n    var item = {\n        hidden: {\n            y: 20,\n            opacity: 0\n        },\n        visible: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    var date = new Date();\n    var experience = getYearMonthDifference(date);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n            ref: ref1,\n            variants: container,\n            animate: inView ? \"visible\" : \"hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    ref: ref1,\n                    variants: item,\n                    animate: inView ? \"visible\" : \"hidden\",\n                    whileHover: {\n                        scale: 1.1\n                    },\n                    whileTap: {\n                        scale: 0.7\n                    },\n                    style: {\n                        background: props.primary\n                    },\n                    className: \"mx-auto mb-10 rounded-full w-80 h-80 relative overflow-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        alt: \"img\",\n                        src: _public_avatar_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        layout: \"fill\",\n                        objectFit: \"cover\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sidha\\\\Desktop\\\\Portfolio\\\\Portfolio-framer\\\\pages\\\\components\\\\about.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sidha\\\\Desktop\\\\Portfolio\\\\Portfolio-framer\\\\pages\\\\components\\\\about.js\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.h3, {\n                    ref: ref1,\n                    variants: item,\n                    style: {\n                        color: props.primary\n                    },\n                    animate: inView ? \"visible\" : \"hidden\",\n                    className: \"text-3xl py-1 dark:text-white \",\n                    children: \"About me\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sidha\\\\Desktop\\\\Portfolio\\\\Portfolio-framer\\\\pages\\\\components\\\\about.js\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.p, {\n                    ref: ref1,\n                    variants: item,\n                    animate: inView ? \"visible\" : \"hidden\",\n                    style: {\n                        color: props.secondary\n                    },\n                    className: \"text-md py-2 leading-8 text-gray-800 dark:text-gray-200\",\n                    children: [\n                        \"Innovative tech mind with \",\n                        experience.years,\n                        \".\",\n                        experience.months,\n                        \" years of experience working as a computer programmer. Capable of working with a variety of technology and software solutions, and managing databases. Valuable team member who has experience diagnosing problems and developing solutions.Talented person with unique ideas and a history of successful contributions in the field.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\sidha\\\\Desktop\\\\Portfolio\\\\Portfolio-framer\\\\pages\\\\components\\\\about.js\",\n                    lineNumber: 75,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\sidha\\\\Desktop\\\\Portfolio\\\\Portfolio-framer\\\\pages\\\\components\\\\about.js\",\n            lineNumber: 49,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sidha\\\\Desktop\\\\Portfolio\\\\Portfolio-framer\\\\pages\\\\components\\\\about.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(about, \"GpcLnEGLCRT/LcXgsVwPMCbjDPg=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07d0JBQUNDLFNBQVMsRUFBQyxPQUFPOzs7Ozs0QkFBRzs7Ozs7d0JBQ3BEOzhCQUNiLDhEQUFDakQsb0RBQVM7b0JBQ1YwQixHQUFHLEVBQUVBLElBQUc7b0JBQ1JZLFFBQVEsRUFBRUwsSUFBSTtvQkFDZFMsS0FBSyxFQUFFO3dCQUFDUyxLQUFLLEVBQUMzQixLQUFLLENBQUNvQixPQUFPO3FCQUFDO29CQUM1QkwsT0FBTyxFQUFFWixNQUFNLEdBQUcsU0FBUyxHQUFHLFFBQVE7b0JBQ3BDa0IsU0FBUyxFQUFDLGdDQUFnQzs4QkFDM0MsVUFFRDs7Ozs7d0JBQVk7OEJBRVosOERBQUM3QyxtREFBUTtvQkFDVDBCLEdBQUcsRUFBRUEsSUFBRztvQkFDUlksUUFBUSxFQUFFTCxJQUFJO29CQUNkTSxPQUFPLEVBQUVaLE1BQU0sR0FBRyxTQUFTLEdBQUcsUUFBUTtvQkFDdENlLEtBQUssRUFBRTt3QkFBQ1MsS0FBSyxFQUFDM0IsS0FBSyxDQUFDNkIsU0FBUztxQkFBQztvQkFDNUJSLFNBQVMsRUFBQyx5REFBeUQ7O3dCQUFDLDRCQUMxQzt3QkFBQ1QsVUFBVSxDQUFDakIsS0FBSzt3QkFBQyxHQUFDO3dCQUFDaUIsVUFBVSxDQUFDZCxNQUFNO3dCQUFDLHVVQU1sRTs7Ozs7O3dCQUFXOzs7Ozs7Z0JBQ0E7Ozs7O1lBQ0ssQ0FDbEI7QUFDSixDQUFDO0dBaEV1QkMsS0FBSzs7UUFDTHJCLGtFQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvYWJvdXQuanM/OWYyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xyXG5pbXBvcnQgZGV2ZWQgZnJvbSBcIi4uL3B1YmxpYy9hdmF0YXIucG5nXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0WWVhck1vbnRoRGlmZmVyZW5jZSh0YXJnZXREYXRlKSB7XHJcbiAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoJzIwMjEtMDEtMTgnKTtcclxuICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUodGFyZ2V0RGF0ZSk7XHJcblxyXG4gIGNvbnN0IHN0YXJ0WWVhciA9IHN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvbnN0IHN0YXJ0TW9udGggPSBzdGFydERhdGUuZ2V0TW9udGgoKTtcclxuXHJcbiAgY29uc3QgZW5kWWVhciA9IGVuZERhdGUuZ2V0RnVsbFllYXIoKTtcclxuICBjb25zdCBlbmRNb250aCA9IGVuZERhdGUuZ2V0TW9udGgoKTtcclxuXHJcbiAgY29uc3QgeWVhckRpZmYgPSBlbmRZZWFyIC0gc3RhcnRZZWFyO1xyXG4gIGNvbnN0IG1vbnRoRGlmZiA9IGVuZE1vbnRoIC0gc3RhcnRNb250aDtcclxuXHJcbiAgY29uc3QgdG90YWxNb250aHMgPSB5ZWFyRGlmZiAqIDEyICsgbW9udGhEaWZmO1xyXG4gIGNvbnN0IHllYXJzID0gTWF0aC5mbG9vcih0b3RhbE1vbnRocyAvIDEyKTtcclxuICBjb25zdCBtb250aHMgPSB0b3RhbE1vbnRocyAlIDEyO1xyXG5cclxuICByZXR1cm4geyB5ZWFycywgbW9udGhzIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0KHByb3BzKSB7XHJcbiAgY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldyh7XHJcbiAgICB0aHJlc2hvbGQ6IDAuNSxcclxuICB9KTtcclxuICBjb25zdCBjb250YWluZXIgPSB7XHJcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMSwgc2NhbGU6IDAgfSxcclxuICAgIHZpc2libGU6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgc2NhbGU6IDAuOVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBpdGVtID0ge1xyXG4gICAgaGlkZGVuOiB7IHk6IDIwLCBvcGFjaXR5OiAwIH0sXHJcbiAgICB2aXNpYmxlOiB7XHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgZGF0ZT0gbmV3IERhdGUoKTtcclxuICBjb25zdCBleHBlcmllbmNlID0gZ2V0WWVhck1vbnRoRGlmZmVyZW5jZShkYXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEFuaW1hdGVQcmVzZW5jZT5cclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICByZWY9e3JlZn1cclxuICAgIHZhcmlhbnRzPXtjb250YWluZXJ9XHJcbiAgICBhbmltYXRlPXtpblZpZXcgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9XHJcbiAgICA+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICB2YXJpYW50cz17aXRlbX1cclxuICAgICAgYW5pbWF0ZT17aW5WaWV3ID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxyXG4gICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cclxuICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuNyB9fVxyXG4gICAgICBzdHlsZT17e2JhY2tncm91bmQ6cHJvcHMucHJpbWFyeX19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBtYi0xMCByb3VuZGVkLWZ1bGwgdy04MCBoLTgwIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgID5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiaW1nXCIgc3JjPXtkZXZlZH0gbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvdmVyXCIgLz5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8bW90aW9uLmgzXHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICB2YXJpYW50cz17aXRlbX1cclxuICAgICAgc3R5bGU9e3tjb2xvcjpwcm9wcy5wcmltYXJ5fX1cclxuICAgICAgYW5pbWF0ZT17aW5WaWV3ID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIHB5LTEgZGFyazp0ZXh0LXdoaXRlIFwiXHJcbiAgICAgID5cclxuICAgICAgICBBYm91dCBtZVxyXG4gICAgICA8L21vdGlvbi5oMz5cclxuXHJcbiAgICAgIDxtb3Rpb24ucFxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgdmFyaWFudHM9e2l0ZW19XHJcbiAgICAgIGFuaW1hdGU9e2luVmlldyA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIn1cclxuICAgICAgc3R5bGU9e3tjb2xvcjpwcm9wcy5zZWNvbmRhcnl9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtbWQgcHktMiBsZWFkaW5nLTggdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtZ3JheS0yMDBcIj5cclxuICAgICAgICBJbm5vdmF0aXZlIHRlY2ggbWluZCB3aXRoIHtleHBlcmllbmNlLnllYXJzfS57ZXhwZXJpZW5jZS5tb250aHN9IHllYXJzIG9mIGV4cGVyaWVuY2Ugd29ya2luZyBhcyBhXHJcbiAgICAgICAgY29tcHV0ZXIgcHJvZ3JhbW1lci4gQ2FwYWJsZSBvZiB3b3JraW5nIHdpdGggYSB2YXJpZXR5IG9mIHRlY2hub2xvZ3kgYW5kXHJcbiAgICAgICAgc29mdHdhcmUgc29sdXRpb25zLCBhbmQgbWFuYWdpbmcgZGF0YWJhc2VzLiBWYWx1YWJsZSB0ZWFtIG1lbWJlciB3aG8gaGFzXHJcbiAgICAgICAgZXhwZXJpZW5jZSBkaWFnbm9zaW5nIHByb2JsZW1zIGFuZCBkZXZlbG9waW5nIHNvbHV0aW9ucy5UYWxlbnRlZCBwZXJzb25cclxuICAgICAgICB3aXRoIHVuaXF1ZSBpZGVhcyBhbmQgYSBoaXN0b3J5IG9mIHN1Y2Nlc3NmdWwgY29udHJpYnV0aW9ucyBpbiB0aGVcclxuICAgICAgICBmaWVsZC5cclxuICAgICAgPC9tb3Rpb24ucD5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlSW5WaWV3IiwiZGV2ZWQiLCJJbWFnZSIsImdldFllYXJNb250aERpZmZlcmVuY2UiLCJ0YXJnZXREYXRlIiwic3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJzdGFydFllYXIiLCJnZXRGdWxsWWVhciIsInN0YXJ0TW9udGgiLCJnZXRNb250aCIsImVuZFllYXIiLCJlbmRNb250aCIsInllYXJEaWZmIiwibW9udGhEaWZmIiwidG90YWxNb250aHMiLCJ5ZWFycyIsIk1hdGgiLCJmbG9vciIsIm1vbnRocyIsImFib3V0IiwicHJvcHMiLCJ0aHJlc2hvbGQiLCJyZWYiLCJpblZpZXciLCJjb250YWluZXIiLCJoaWRkZW4iLCJvcGFjaXR5Iiwic2NhbGUiLCJ2aXNpYmxlIiwiaXRlbSIsInkiLCJkYXRlIiwiZXhwZXJpZW5jZSIsImRpdiIsInZhcmlhbnRzIiwiYW5pbWF0ZSIsIndoaWxlSG92ZXIiLCJ3aGlsZVRhcCIsInN0eWxlIiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJoMyIsImNvbG9yIiwicCIsInNlY29uZGFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/about.js\n"));

/***/ })

});