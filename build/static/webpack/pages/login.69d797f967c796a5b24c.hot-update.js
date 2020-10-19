webpackHotUpdate_N_E("pages/login",{

/***/ "./src/contexts/Auth.context.js":
/*!**************************************!*\
  !*** ./src/contexts/Auth.context.js ***!
  \**************************************/
/*! exports provided: AuthContext, AuthProvider, useAuth, ProtectRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthContext\", function() { return AuthContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProtectRoute\", function() { return ProtectRoute; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var services_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! services/axios */ \"./src/services/axios.js\");\n\n\n\nvar _jsxFileName = \"/home/kin/Desktop/ecom/frontend/src/contexts/Auth.context.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});\n\nfunction AuthProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  console.log(\"authprovider chay\");\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isAuthenticated = _useState2[0],\n      setAuthenticated = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(\"useEffect chay\");\n\n    function loadUserFromCookies() {\n      return _loadUserFromCookies.apply(this, arguments);\n    }\n\n    function _loadUserFromCookies() {\n      _loadUserFromCookies = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var user;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                user = localStorage.getItem(\"userInfo\");\n                if (user) setUser(JSON.parse(user)); //Use can check user by request to server with autocookie send in request\n                // setLoading(false);\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _loadUserFromCookies.apply(this, arguments);\n    }\n\n    loadUserFromCookies();\n    return function () {\n      return console.log(\"re-mount auth contexnt\");\n    };\n  }, []);\n\n  var login = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, password) {\n      var _yield$api$post, _user;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return services_axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"api/auth/login\", {\n                email: email,\n                password: password\n              });\n\n            case 3:\n              _yield$api$post = _context2.sent;\n              _user = _yield$api$post.data.user;\n\n              if (!_user) {\n                _context2.next = 11;\n                break;\n              }\n\n              localStorage.setItem(\"userInfo\", JSON.stringify(_user));\n              _context2.next = 9;\n              return setUser(_user);\n\n            case 9:\n              _context2.next = 11;\n              return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(\"/admin\");\n\n            case 11:\n              _context2.next = 16;\n              break;\n\n            case 13:\n              _context2.prev = 13;\n              _context2.t0 = _context2[\"catch\"](0);\n              return _context2.abrupt(\"return\", console.error(_context2.t0.response));\n\n            case 16:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 13]]);\n    }));\n\n    return function login(_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var logout = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              localStorage.removeItem(\"userInfo\");\n              _context3.next = 3;\n              return services_axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"auth/logout\");\n\n            case 3:\n              setUser(null);\n              _context3.next = 6;\n              return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(\"/login\");\n\n            case 6:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function logout() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(AuthContext.Provider, {\n    value: {\n      isAuthenticated: !!user,\n      user: user,\n      login: login,\n      loading: loading,\n      logout: logout\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, children);\n}\n\n_s(AuthProvider, \"e/AO3Ao3ZMChgrNtovlVsmBlwiA=\");\n\n_c = AuthProvider;\n\nfunction useAuth() {\n  _s2();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(AuthContext);\n}\n\n_s2(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nfunction ProtectRoute(_ref4) {\n  _s3();\n\n  var children = _ref4.children;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(AuthContext),\n      isAuthenticated = _useContext.isAuthenticated,\n      loading = _useContext.loading;\n\n  if (!isAuthenticated) {\n    if (loading) next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(\"/login\");\n    return __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 12\n      }\n    }, \"Loading\");\n  }\n\n  return children;\n}\n\n_s3(ProtectRoute, \"z4i+y1JWRMwnp/XsTPH72LjUDw0=\");\n\n_c2 = ProtectRoute;\n\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AuthProvider\");\n$RefreshReg$(_c2, \"ProtectRoute\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0F1dGguY29udGV4dC5qcz80NzRiIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsImlzQXV0aGVudGljYXRlZCIsInNldEF1dGhlbnRpY2F0ZWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsImxvYWRVc2VyRnJvbUNvb2tpZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiYXBpIiwicG9zdCIsImRhdGEiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiUm91dGVyIiwicHVzaCIsImVycm9yIiwicmVzcG9uc2UiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwidXNlQXV0aCIsInVzZUNvbnRleHQiLCJQcm90ZWN0Um91dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEVBQXBCLENBQXBCOztBQUVBLFNBQVNDLFlBQVQsT0FBb0M7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDbENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaOztBQURrQyxrQkFFVkMsc0RBQVEsQ0FBQyxJQUFELENBRkU7QUFBQSxNQUUzQkMsSUFGMkI7QUFBQSxNQUVyQkMsT0FGcUI7O0FBQUEsbUJBR1VGLHNEQUFRLENBQUMsS0FBRCxDQUhsQjtBQUFBLE1BRzNCRyxlQUgyQjtBQUFBLE1BR1ZDLGdCQUhVOztBQUFBLG1CQUlKSixzREFBUSxDQUFDLElBQUQsQ0FKSjtBQUFBLE1BSTNCSyxPQUoyQjtBQUFBLE1BSWxCQyxVQUprQjs7QUFNbENDLHlEQUFTLENBQUMsWUFBTTtBQUNkVCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjs7QUFEYyxhQUVDUyxtQkFGRDtBQUFBO0FBQUE7O0FBQUE7QUFBQSw4TUFFZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUVAsb0JBRFIsR0FDZVEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBRGY7QUFFRSxvQkFBSVQsSUFBSixFQUFVQyxPQUFPLENBQUNTLElBQUksQ0FBQ0MsS0FBTCxDQUFXWCxJQUFYLENBQUQsQ0FBUCxDQUZaLENBR0U7QUFFQTs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZjO0FBQUE7QUFBQTs7QUFTZE8sdUJBQW1CO0FBQ25CLFdBQU87QUFBQSxhQUFNVixPQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWixDQUFOO0FBQUEsS0FBUDtBQUNELEdBWFEsRUFXTixFQVhNLENBQVQ7O0FBYUEsTUFBTWMsS0FBSztBQUFBLGlNQUFHLGtCQUFPQyxLQUFQLEVBQWNDLFFBQWQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFJQUMsc0RBQUcsQ0FBQ0MsSUFBSixDQUFTLGdCQUFULEVBQTJCO0FBQUVILHFCQUFLLEVBQUxBLEtBQUY7QUFBU0Msd0JBQVEsRUFBUkE7QUFBVCxlQUEzQixDQUpBOztBQUFBO0FBQUE7QUFHQWQsbUJBSEEsbUJBR1JpQixJQUhRLENBR0FqQixJQUhBOztBQUFBLG1CQUtOQSxLQUxNO0FBQUE7QUFBQTtBQUFBOztBQU1SUSwwQkFBWSxDQUFDVSxPQUFiLENBQXFCLFVBQXJCLEVBQWlDUixJQUFJLENBQUNTLFNBQUwsQ0FBZW5CLEtBQWYsQ0FBakM7QUFOUTtBQUFBLHFCQU9GQyxPQUFPLENBQUNELEtBQUQsQ0FQTDs7QUFBQTtBQUFBO0FBQUEscUJBUUZvQixrREFBTSxDQUFDQyxJQUFQLENBQVksUUFBWixDQVJFOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFXSHhCLE9BQU8sQ0FBQ3lCLEtBQVIsQ0FBYyxhQUFJQyxRQUFsQixDQVhHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUxYLEtBQUs7QUFBQTtBQUFBO0FBQUEsS0FBWDs7QUFlQSxNQUFNWSxNQUFNO0FBQUEsaU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiaEIsMEJBQVksQ0FBQ2lCLFVBQWIsQ0FBd0IsVUFBeEI7QUFEYTtBQUFBLHFCQUVQVixzREFBRyxDQUFDQyxJQUFKLENBQVMsYUFBVCxDQUZPOztBQUFBO0FBR2JmLHFCQUFPLENBQUMsSUFBRCxDQUFQO0FBSGE7QUFBQSxxQkFJUG1CLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaLENBSk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTkcsTUFBTTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQU9BLFNBQ0UsTUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRXRCLHFCQUFlLEVBQUUsQ0FBQyxDQUFDRixJQUFyQjtBQUEyQkEsVUFBSSxFQUFKQSxJQUEzQjtBQUFpQ1ksV0FBSyxFQUFMQSxLQUFqQztBQUF3Q1IsYUFBTyxFQUFQQSxPQUF4QztBQUFpRG9CLFlBQU0sRUFBTkE7QUFBakQsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHNUIsUUFESCxDQURGO0FBS0Q7O0dBOUNRRCxZOztLQUFBQSxZOztBQWdEVCxTQUFTK0IsT0FBVCxHQUFtQjtBQUFBOztBQUNqQkMsMERBQVUsQ0FBQ25DLFdBQUQsQ0FBVjtBQUNEOztJQUZRa0MsTzs7QUFJVCxTQUFTRSxZQUFULFFBQW9DO0FBQUE7O0FBQUEsTUFBWmhDLFFBQVksU0FBWkEsUUFBWTs7QUFBQSxvQkFDRytCLHdEQUFVLENBQUNuQyxXQUFELENBRGI7QUFBQSxNQUMxQlUsZUFEMEIsZUFDMUJBLGVBRDBCO0FBQUEsTUFDVEUsT0FEUyxlQUNUQSxPQURTOztBQUVsQyxNQUFJLENBQUNGLGVBQUwsRUFBc0I7QUFDcEIsUUFBR0UsT0FBSCxFQUFZZ0Isa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDWixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDs7QUFFRCxTQUFPekIsUUFBUDtBQUNEOztJQVJRZ0MsWTs7TUFBQUEsWTtBQVVUIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL0F1dGguY29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgYXBpIGZyb20gXCJzZXJ2aWNlcy9heGlvc1wiO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xuXG5mdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnNvbGUubG9nKFwiYXV0aHByb3ZpZGVyIGNoYXlcIik7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNBdXRoZW50aWNhdGVkLCBzZXRBdXRoZW50aWNhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInVzZUVmZmVjdCBjaGF5XCIpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRVc2VyRnJvbUNvb2tpZXMoKSB7XG4gICAgICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySW5mb1wiKTtcbiAgICAgIGlmICh1c2VyKSBzZXRVc2VyKEpTT04ucGFyc2UodXNlcikpO1xuICAgICAgLy9Vc2UgY2FuIGNoZWNrIHVzZXIgYnkgcmVxdWVzdCB0byBzZXJ2ZXIgd2l0aCBhdXRvY29va2llIHNlbmQgaW4gcmVxdWVzdFxuXG4gICAgICAvLyBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gICAgbG9hZFVzZXJGcm9tQ29va2llcygpO1xuICAgIHJldHVybiAoKSA9PiBjb25zb2xlLmxvZyhcInJlLW1vdW50IGF1dGggY29udGV4bnRcIik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhOiB7IHVzZXIgfSxcbiAgICAgIH0gPSBhd2FpdCBhcGkucG9zdChcImFwaS9hdXRoL2xvZ2luXCIsIHsgZW1haWwsIHBhc3N3b3JkIH0pO1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VySW5mb1wiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgICAgIGF3YWl0IHNldFVzZXIodXNlcik7XG4gICAgICAgIGF3YWl0IFJvdXRlci5wdXNoKFwiL2FkbWluXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyLnJlc3BvbnNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlckluZm9cIik7XG4gICAgYXdhaXQgYXBpLnBvc3QoXCJhdXRoL2xvZ291dFwiKTtcbiAgICBzZXRVc2VyKG51bGwpO1xuICAgIGF3YWl0IFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlzQXV0aGVudGljYXRlZDogISF1c2VyLCB1c2VyLCBsb2dpbiwgbG9hZGluZywgbG9nb3V0IH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHVzZUF1dGgoKSB7XG4gIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBQcm90ZWN0Um91dGUoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCBsb2FkaW5nIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICBpZihsb2FkaW5nKSBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICByZXR1cm4gPGgxPkxvYWRpbmc8L2gxPlxuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5leHBvcnQgeyBBdXRoQ29udGV4dCwgQXV0aFByb3ZpZGVyLCB1c2VBdXRoLCBQcm90ZWN0Um91dGUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/Auth.context.js\n");

/***/ })

})