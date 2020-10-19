webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/Auth.context.js":
/*!**************************************!*\
  !*** ./src/contexts/Auth.context.js ***!
  \**************************************/
/*! exports provided: AuthContext, AuthProvider, useAuth, ProtectRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthContext\", function() { return AuthContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProtectRoute\", function() { return ProtectRoute; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var services_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! services/axios */ \"./src/services/axios.js\");\n\n\n\nvar _jsxFileName = \"/home/kin/Desktop/ecom/frontend/src/contexts/Auth.context.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});\n\nfunction AuthProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  console.log(\"authprovider chay\");\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(\"useEffect chay\");\n\n    function loadUserFromCookies() {\n      return _loadUserFromCookies.apply(this, arguments);\n    }\n\n    function _loadUserFromCookies() {\n      _loadUserFromCookies = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var user;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                user = localStorage.getItem(\"userInfo\");\n                if (user) setUser(JSON.parse(user)); //Use can check user by request to server with autocookie send in request\n\n                setLoading(false);\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _loadUserFromCookies.apply(this, arguments);\n    }\n\n    loadUserFromCookies();\n    return function () {\n      return console.log(\"re-mount auth contexnt\");\n    };\n  }, []);\n\n  var login = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, password) {\n      var _yield$api$post, _user;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return services_axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"api/auth/login\", {\n                email: email,\n                password: password\n              });\n\n            case 3:\n              _yield$api$post = _context2.sent;\n              _user = _yield$api$post.data.user;\n\n              if (!_user) {\n                _context2.next = 11;\n                break;\n              }\n\n              localStorage.setItem(\"userInfo\", JSON.stringify(_user));\n              _context2.next = 9;\n              return setUser(_user);\n\n            case 9:\n              _context2.next = 11;\n              return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(\"/admin\");\n\n            case 11:\n              _context2.next = 16;\n              break;\n\n            case 13:\n              _context2.prev = 13;\n              _context2.t0 = _context2[\"catch\"](0);\n              return _context2.abrupt(\"return\", console.error(_context2.t0.response));\n\n            case 16:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 13]]);\n    }));\n\n    return function login(_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var logout = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              localStorage.removeItem(\"userInfo\");\n              _context3.next = 3;\n              return services_axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"auth/logout\");\n\n            case 3:\n              setUser(null);\n              _context3.next = 6;\n              return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(\"/login\");\n\n            case 6:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function logout() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(AuthContext.Provider, {\n    value: {\n      isAuthenticated: !!user,\n      user: user,\n      login: login,\n      loading: loading,\n      logout: logout\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, children);\n}\n\n_s(AuthProvider, \"NiO5z6JIqzX62LS5UWDgIqbZYyY=\");\n\n_c = AuthProvider;\n\nfunction useAuth() {\n  _s2();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(AuthContext);\n}\n\n_s2(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nfunction ProtectRoute(_ref4) {\n  _s3();\n\n  var children = _ref4.children;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(AuthContext),\n      isAuthenticated = _useContext.isAuthenticated,\n      loading = _useContext.loading;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  if (!isAuthenticated) {\n    if (!loading) router.push(\"/login\");\n    return __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 12\n      }\n    }, \"Loading\");\n  }\n\n  return children;\n}\n\n_s3(ProtectRoute, \"bIL6h1fIp/aNDK+bGQNyVTDfuGY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c2 = ProtectRoute;\n\nRedirectPage.getInitialProps = function (ctx) {\n  // We check for ctx.res to make sure we're on the server.\n  if (ctx.res) {\n    ctx.res.writeHead(302, {\n      Location: '/new/url'\n    });\n    ctx.res.end();\n  }\n\n  return {};\n};\n\n\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AuthProvider\");\n$RefreshReg$(_c2, \"ProtectRoute\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0F1dGguY29udGV4dC5qcz80NzRiIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwibG9hZFVzZXJGcm9tQ29va2llcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJhcGkiLCJwb3N0IiwiZGF0YSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJyZXNwb25zZSIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsIlByb3RlY3RSb3V0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlZGlyZWN0UGFnZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixFQUFwQixDQUFwQjs7QUFFQSxTQUFTQyxZQUFULE9BQW9DO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ2xDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjs7QUFEa0Msa0JBRVZDLHNEQUFRLENBQUMsSUFBRCxDQUZFO0FBQUEsTUFFM0JDLElBRjJCO0FBQUEsTUFFckJDLE9BRnFCOztBQUFBLG1CQUdKRixzREFBUSxDQUFDLElBQUQsQ0FISjtBQUFBLE1BRzNCRyxPQUgyQjtBQUFBLE1BR2xC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QzFCQSxlQUQwQjtBQUFBLE1BQ1R0QixPQURTLGVBQ1RBLE9BRFM7O0FBRWxDLE1BQU0wQixNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQUksQ0FBQ0wsZUFBTCxFQUFzQjtBQUNwQixRQUFHLENBQUN0QixPQUFKLEVBQWEwQixNQUFNLENBQUNULElBQVAsQ0FBWSxRQUFaO0FBQ2IsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0Q7O0FBRUQsU0FBT3ZCLFFBQVA7QUFDRDs7SUFUUStCLFk7VUFFUUUscUQ7OztNQUZSRixZOztBQVdURyxZQUFZLENBQUNDLGVBQWIsR0FBK0IsVUFBQUMsR0FBRyxFQUFJO0FBQ3BDO0FBQ0EsTUFBSUEsR0FBRyxDQUFDQyxHQUFSLEVBQWE7QUFDWEQsT0FBRyxDQUFDQyxHQUFKLENBQVFDLFNBQVIsQ0FBa0IsR0FBbEIsRUFBdUI7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBdkI7QUFDQUgsT0FBRyxDQUFDQyxHQUFKLENBQVFHLEdBQVI7QUFDRDs7QUFDRCxTQUFPLEVBQVA7QUFDRCxDQVBEOztBQVVBIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL0F1dGguY29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyLCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IGFwaSBmcm9tIFwic2VydmljZXMvYXhpb3NcIjtcblxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcblxuZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zb2xlLmxvZyhcImF1dGhwcm92aWRlciBjaGF5XCIpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTsgXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ1c2VFZmZlY3QgY2hheVwiKTtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVXNlckZyb21Db29raWVzKCkge1xuICAgICAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckluZm9cIik7XG4gICAgICBpZiAodXNlcikgc2V0VXNlcihKU09OLnBhcnNlKHVzZXIpKTtcbiAgICAgIC8vVXNlIGNhbiBjaGVjayB1c2VyIGJ5IHJlcXVlc3QgdG8gc2VydmVyIHdpdGggYXV0b2Nvb2tpZSBzZW5kIGluIHJlcXVlc3RcblxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICAgIGxvYWRVc2VyRnJvbUNvb2tpZXMoKTtcbiAgICByZXR1cm4gKCkgPT4gY29uc29sZS5sb2coXCJyZS1tb3VudCBhdXRoIGNvbnRleG50XCIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YTogeyB1c2VyIH0sXG4gICAgICB9ID0gYXdhaXQgYXBpLnBvc3QoXCJhcGkvYXV0aC9sb2dpblwiLCB7IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlckluZm9cIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgICBhd2FpdCBzZXRVc2VyKHVzZXIpO1xuICAgICAgICBhd2FpdCBSb3V0ZXIucHVzaChcIi9hZG1pblwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGVyci5yZXNwb25zZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJbmZvXCIpO1xuICAgIGF3YWl0IGFwaS5wb3N0KFwiYXV0aC9sb2dvdXRcIik7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgICBhd2FpdCBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBpc0F1dGhlbnRpY2F0ZWQ6ICEhdXNlciwgdXNlciwgbG9naW4sIGxvYWRpbmcsIGxvZ291dCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiB1c2VBdXRoKCkge1xuICB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gUHJvdGVjdFJvdXRlKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCwgbG9hZGluZyB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGlmICghaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgaWYoIWxvYWRpbmcpIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgIHJldHVybiA8aDE+TG9hZGluZzwvaDE+XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cblJlZGlyZWN0UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBjdHggPT4ge1xuICAvLyBXZSBjaGVjayBmb3IgY3R4LnJlcyB0byBtYWtlIHN1cmUgd2UncmUgb24gdGhlIHNlcnZlci5cbiAgaWYgKGN0eC5yZXMpIHtcbiAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246ICcvbmV3L3VybCcgfSk7XG4gICAgY3R4LnJlcy5lbmQoKTtcbiAgfVxuICByZXR1cm4geyB9O1xufVxuXG5cbmV4cG9ydCB7IEF1dGhDb250ZXh0LCBBdXRoUHJvdmlkZXIsIHVzZUF1dGgsIFByb3RlY3RSb3V0ZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/Auth.context.js\n");

/***/ })

})