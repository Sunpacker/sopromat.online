webpackHotUpdate_N_E("pages/404",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/styles/layouts.module.sass":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/next/node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/styles/layouts.module.sass ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".layouts_default__3b-hI {\n  min-height: calc(100vh - 60px * 2 - 1rem * 4);\n}\n\n.layouts_error__3GILm {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.layouts_error__3GILm h2 {\n  margin-bottom: 0.75em;\n}\n\n.layouts_home__1ZYjC .layouts_intro__1x5zZ {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n}", "",{"version":3,"sources":["webpack://layouts.module.sass"],"names":[],"mappings":"AACA;EACC,6CAAA;AAAD;;AAGA;EACC,qBAAA;EAAA,aAAA;EACA,8BAAA;UAAA,sBAAA;EACA,+BAAA;UAAA,uBAAA;EACA,2BAAA;UAAA,mBAAA;AAAD;AACC;EACC,qBAAA;AACF;;AAGC;EACC,qBAAA;EAAA,aAAA;EACA,8BAAA;UAAA,sBAAA;EACA,+BAAA;UAAA,uBAAA;EACA,2BAAA;UAAA,mBAAA;AAAF","sourcesContent":["// default layout class\t\n.default\n\tmin-height: calc(100vh - 60px * 2 - 1rem * 4) // 100vh - nav & footer height - their paddings\n\n// error page class\t\n.error\n\tdisplay: flex\n\tflex-direction: column\n\tjustify-content: center\n\talign-items: center\n\th2\n\t\tmargin-bottom: .75em\n\n\n.home\n\t.intro\n\t\tdisplay: flex\n\t\tflex-direction: column\n\t\tjustify-content: center\n\t\talign-items: center\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"default": "layouts_default__3b-hI",
	"error": "layouts_error__3GILm",
	"home": "layouts_home__1ZYjC",
	"intro": "layouts_intro__1x5zZ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/styles/pages.module.sass":
false,

/***/ "./src/layouts/default.tsx":
/*!*********************************!*\
  !*** ./src/layouts/default.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./src/components/index.ts");
/* harmony import */ var _styles_layouts_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/layouts.module.sass */ "./src/styles/layouts.module.sass");
/* harmony import */ var _styles_layouts_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_layouts_module_sass__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\WEB\\_current\\sopromat.online\\src\\layouts\\default.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DefaultLayout = ({
  className = '',
  children
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: `${_styles_layouts_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.default} container ${className}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }, children), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Footer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }));
};

_c = DefaultLayout;
/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

var _c;

$RefreshReg$(_c, "DefaultLayout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/404.tsx":
/*!***************************!*\
  !*** ./src/pages/404.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts */ "./src/layouts/index.ts");
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui */ "./src/components/ui/index.ts");
/* harmony import */ var _styles_layouts_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/layouts.module.sass */ "./src/styles/layouts.module.sass");
/* harmony import */ var _styles_layouts_module_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_layouts_module_sass__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\WEB\\_current\\sopromat.online\\src\\pages\\404.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ErrorPage = () => {
  return __jsx(_layouts__WEBPACK_IMPORTED_MODULE_2__["DefaultLayout"], {
    className: _styles_layouts_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.error,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_components_ui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    text: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }))));
};

_c = ErrorPage;
/* harmony default export */ __webpack_exports__["default"] = (ErrorPage);

var _c;

$RefreshReg$(_c, "ErrorPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/styles/layouts.module.sass":
/*!****************************************!*\
  !*** ./src/styles/layouts.module.sass ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./layouts.module.sass */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/styles/layouts.module.sass");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./layouts.module.sass */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/styles/layouts.module.sass",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./layouts.module.sass */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/styles/layouts.module.sass");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/styles/pages.module.sass":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9sYXlvdXRzLm1vZHVsZS5zYXNzIiwid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0cy9kZWZhdWx0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzLzQwNC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvbGF5b3V0cy5tb2R1bGUuc2Fzcz9hOWFmIl0sIm5hbWVzIjpbIkRlZmF1bHRMYXlvdXQiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInBhZ2VDbGFzcyIsImRlZmF1bHQiLCJFcnJvclBhZ2UiLCJsYXlvdXQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw0SUFBcUU7QUFDL0c7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDRCQUE0QixrREFBa0QsR0FBRywyQkFBMkIsMEJBQTBCLGtCQUFrQixtQ0FBbUMsbUNBQW1DLG9DQUFvQyxvQ0FBb0MsZ0NBQWdDLGdDQUFnQyxHQUFHLDRCQUE0QiwwQkFBMEIsR0FBRyxnREFBZ0QsMEJBQTBCLGtCQUFrQixtQ0FBbUMsbUNBQW1DLG9DQUFvQyxvQ0FBb0MsZ0NBQWdDLGdDQUFnQyxHQUFHLE9BQU8sb0ZBQW9GLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLDBjQUEwYztBQUMvL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBOztBQU9BLE1BQU1BLGFBQTJDLEdBQUcsQ0FBQztBQUFFQyxXQUFTLEdBQUcsRUFBZDtBQUFrQkM7QUFBbEIsQ0FBRCxLQUFzRDtBQUN6RyxTQUNDLG1FQUNDLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUM7QUFBSyxhQUFTLEVBQUcsR0FBRUMsa0VBQVMsQ0FBQ0MsT0FBUSxjQUFhSCxTQUFVLEVBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUMsUUFERixDQUZELEVBS0MsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FERDtBQVNBLENBVkQ7O0tBQU1GLGE7QUFhU0EsNEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU1LLFNBQW1CLEdBQUcsTUFBMEI7QUFDckQsU0FDQyxNQUFDLHNEQUFEO0FBQWUsYUFBUyxFQUFFQyxrRUFBTSxDQUFDQyxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpSEFERCxFQUVDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMscURBQUQ7QUFBUSxRQUFJLEVBQUMsZ0hBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsQ0FGRCxDQUREO0FBVUEsQ0FYRDs7S0FBTUYsUztBQWNTQSx3RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBLFVBQVUsbUJBQU8sQ0FBQywwTEFBNkY7QUFDL0csMEJBQTBCLG1CQUFPLENBQUMsK2xCQUF1Vjs7QUFFelg7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sK2xCQUF1VjtBQUM3VjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLCtsQkFBdVY7O0FBRWpYOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvNDA0LmM3NmU1ZDQyYmUyNWI4YTFlYjdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubGF5b3V0c19kZWZhdWx0X18zYi1oSSB7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCAqIDIgLSAxcmVtICogNCk7XFxufVxcblxcbi5sYXlvdXRzX2Vycm9yX18zR0lMbSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5sYXlvdXRzX2Vycm9yX18zR0lMbSBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1ZW07XFxufVxcblxcbi5sYXlvdXRzX2hvbWVfXzFaWWpDIC5sYXlvdXRzX2ludHJvX18xeDV6WiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9sYXlvdXRzLm1vZHVsZS5zYXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0MsNkNBQUE7QUFBRDs7QUFHQTtFQUNDLHFCQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQUFEO0FBQ0M7RUFDQyxxQkFBQTtBQUNGOztBQUdDO0VBQ0MscUJBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FBQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gZGVmYXVsdCBsYXlvdXQgY2xhc3NcXHRcXG4uZGVmYXVsdFxcblxcdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4ICogMiAtIDFyZW0gKiA0KSAvLyAxMDB2aCAtIG5hdiAmIGZvb3RlciBoZWlnaHQgLSB0aGVpciBwYWRkaW5nc1xcblxcbi8vIGVycm9yIHBhZ2UgY2xhc3NcXHRcXG4uZXJyb3JcXG5cXHRkaXNwbGF5OiBmbGV4XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtblxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlclxcblxcdGgyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogLjc1ZW1cXG5cXG5cXG4uaG9tZVxcblxcdC5pbnRyb1xcblxcdFxcdGRpc3BsYXk6IGZsZXhcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZGVmYXVsdFwiOiBcImxheW91dHNfZGVmYXVsdF9fM2ItaElcIixcblx0XCJlcnJvclwiOiBcImxheW91dHNfZXJyb3JfXzNHSUxtXCIsXG5cdFwiaG9tZVwiOiBcImxheW91dHNfaG9tZV9fMVpZakNcIixcblx0XCJpbnRyb1wiOiBcImxheW91dHNfaW50cm9fXzF4NXpaXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmF2YmFyLCBGb290ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzJ1xuaW1wb3J0IHBhZ2VDbGFzcyBmcm9tICcuLi9zdHlsZXMvbGF5b3V0cy5tb2R1bGUuc2FzcydcblxuXG5pbnRlcmZhY2UgRGVmYXVsdExheW91dFByb3BzIHtcblx0Y2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbmNvbnN0IERlZmF1bHRMYXlvdXQ6IFJlYWN0LkZDPERlZmF1bHRMYXlvdXRQcm9wcz4gPSAoeyBjbGFzc05hbWUgPSAnJywgY2hpbGRyZW4gfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxOYXZiYXIgLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtwYWdlQ2xhc3MuZGVmYXVsdH0gY29udGFpbmVyICR7Y2xhc3NOYW1lfWB9PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8Lz5cblx0KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRMYXlvdXRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHsgRGVmYXVsdExheW91dCB9IGZyb20gJy4uL2xheW91dHMnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3VpJ1xuaW1wb3J0IGxheW91dCBmcm9tICcuLi9zdHlsZXMvbGF5b3V0cy5tb2R1bGUuc2FzcydcblxuY29uc3QgRXJyb3JQYWdlOiBSZWFjdC5GQyA9ICgpOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxEZWZhdWx0TGF5b3V0IGNsYXNzTmFtZT17bGF5b3V0LmVycm9yfT5cblx0XHRcdDxoMj7QodGC0YDQsNC90LjRhtCwINC90LUg0L3QsNC50LTQtdC90LAuPC9oMj5cblx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdDxhPlxuXHRcdFx0XHRcdDxCdXR0b24gdGV4dD1cItCS0LXRgNC90YPRgtGM0YHRjyDQvdCwINCz0LvQsNCy0L3Rg9GOXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9MaW5rPlxuXHRcdDwvRGVmYXVsdExheW91dD5cblx0KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yUGFnZVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2xheW91dHMubW9kdWxlLnNhc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vbGF5b3V0cy5tb2R1bGUuc2Fzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9sYXlvdXRzLm1vZHVsZS5zYXNzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=