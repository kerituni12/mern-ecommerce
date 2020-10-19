webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/Auth.context.js":
/*!**************************************!*\
  !*** ./src/contexts/Auth.context.js ***!
  \**************************************/
/*! exports provided: AuthContext, AuthProvider, useAuth, ProtectRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthContext\", function() { return AuthContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProtectRoute\", function() { return ProtectRoute; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var services_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! services/axios */ \"./src/services/axios.js\");\n\n\n\nvar _jsxFileName = \"/home/kin/Desktop/ecom/frontend/src/contexts/Auth.context.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});\n\nfunction AuthProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  console.log(\"authprovider chay\");\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(\"useEffect chay\");\n\n    function loadUserFromCookies() {\n      return _loadUserFromCookies.apply(this, arguments);\n    }\n\n    function _loadUserFromCookies() {\n      _loadUserFromCookies = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var user;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                user = localStorage.getItem(\"userInfo\");\n                if (user) setUser(JSON.parse(user)); //Use can check user by request to server with autocookie send in request\n\n                setLoading(false);\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _loadUserFromCookies.apply(this, arguments);\n    }\n\n    loadUserFromCookies();\n    return function () {\n      return console.log(\"re-mount auth contexnt\");\n    };\n  }, []);\n\n  var login = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, password) {\n      var _yield$api$post, _user;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return services_axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"api/auth/login\", {\n                email: email,\n                password: password\n              });\n\n            case 3:\n              _yield$api$post = _context2.sent;\n              _user = _yield$api$post.data.user;\n\n              if (!_user) {\n                _context2.next = 11;\n                break;\n              }\n\n              localStorage.setItem(\"userInfo\", JSON.stringify(_user));\n              _context2.next = 9;\n              return setUser(_user);\n\n            case 9:\n              _context2.next = 11;\n              return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(\"/admin\");\n\n            case 11:\n              _context2.next = 16;\n              break;\n\n            case 13:\n              _context2.prev = 13;\n              _context2.t0 = _context2[\"catch\"](0);\n              return _context2.abrupt(\"return\", console.error(_context2.t0.response));\n\n            case 16:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 13]]);\n    }));\n\n    return function login(_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var logout = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              localStorage.removeItem(\"userInfo\");\n              _context3.next = 3;\n              return services_axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"auth/logout\");\n\n            case 3:\n              setUser(null);\n              _context3.next = 6;\n              return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(\"/login\");\n\n            case 6:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function logout() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(AuthContext.Provider, {\n    value: {\n      isAuthenticated: !!user,\n      user: user,\n      login: login,\n      loading: loading,\n      logout: logout\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, children);\n}\n\n_s(AuthProvider, \"NiO5z6JIqzX62LS5UWDgIqbZYyY=\");\n\n_c = AuthProvider;\n\nfunction useAuth() {\n  _s2();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(AuthContext);\n}\n\n_s2(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nfunction ProtectRoute(_ref4) {\n  _s3();\n\n  var children = _ref4.children;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(AuthContext),\n      isAuthenticated = _useContext.isAuthenticated,\n      loading = _useContext.loading;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  if (!isAuthenticated) {\n    // if(!loading) router.push(\"/login\");\n    // return <h1>Loading</h1>\n    if (true) {\n      router.push(\"/new/url\");\n      return;\n    }\n  }\n\n  return children;\n}\n\n_s3(ProtectRoute, \"bIL6h1fIp/aNDK+bGQNyVTDfuGY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c2 = ProtectRoute;\n\nRedirectPage.getInitialProps = function (ctx) {\n  // We check for ctx.res to make sure we're on the server.\n  if (ctx.res) {\n    ctx.res.writeHead(302, {\n      Location: \"/new/url\"\n    });\n    ctx.res.end();\n  }\n\n  return {};\n};\n\n\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AuthProvider\");\n$RefreshReg$(_c2, \"ProtectRoute\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0F1dGguY29udGV4dC5qcz80NzRiIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwibG9hZFVzZXJGcm9tQ29va2llcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJhcGkiLCJwb3N0IiwiZGF0YSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJyZXNwb25zZSIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsIlByb3RlY3RSb3V0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlZGlyZWN0UGFnZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixFQUFwQixDQUFwQjs7QUFFQSxTQUFTQyxZQUFULE9BQW9DO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ2xDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjs7QUFEa0Msa0JBRVZDLHNEQUFRLENBQUMsSUFBRCxDQUZFO0FBQUEsTUFFM0JDLElBRjJCO0FBQUEsTUFFckJDLE9BRnFCOztBQUFBLG1CQUdKRixzREFBUSxDQUFDLElBQUQsQ0FISjtBQUFBLE1BRzNCRyxPQUgyQjtBQUFBLE1BR2xC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QzFCQSxlQUQwQjtBQUFBLE1BQ1R0QixPQURTLGVBQ1RBLE9BRFM7O0FBRWxDLE1BQU0wQixNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQUksQ0FBQ0wsZUFBTCxFQUFzQjtBQUNwQjtBQUNBO0FBQ0EsY0FBbUM7QUFDakNJLFlBQU0sQ0FBQ1QsSUFBUCxDQUFZLFVBQVo7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsU0FBT3ZCLFFBQVA7QUFDRDs7SUFiUStCLFk7VUFFUUUscUQ7OztNQUZSRixZOztBQWVURyxZQUFZLENBQUNDLGVBQWIsR0FBK0IsVUFBQ0MsR0FBRCxFQUFTO0FBQ3RDO0FBQ0EsTUFBSUEsR0FBRyxDQUFDQyxHQUFSLEVBQWE7QUFDWEQsT0FBRyxDQUFDQyxHQUFKLENBQVFDLFNBQVIsQ0FBa0IsR0FBbEIsRUFBdUI7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBdkI7QUFDQUgsT0FBRyxDQUFDQyxHQUFKLENBQVFHLEdBQVI7QUFDRDs7QUFDRCxTQUFPLEVBQVA7QUFDRCxDQVBEOztBQVNBIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL0F1dGguY29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgYXBpIGZyb20gXCJzZXJ2aWNlcy9heGlvc1wiO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xuXG5mdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnNvbGUubG9nKFwiYXV0aHByb3ZpZGVyIGNoYXlcIik7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwidXNlRWZmZWN0IGNoYXlcIik7XG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFVzZXJGcm9tQ29va2llcygpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJbmZvXCIpO1xuICAgICAgaWYgKHVzZXIpIHNldFVzZXIoSlNPTi5wYXJzZSh1c2VyKSk7XG4gICAgICAvL1VzZSBjYW4gY2hlY2sgdXNlciBieSByZXF1ZXN0IHRvIHNlcnZlciB3aXRoIGF1dG9jb29raWUgc2VuZCBpbiByZXF1ZXN0XG5cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICBsb2FkVXNlckZyb21Db29raWVzKCk7XG4gICAgcmV0dXJuICgpID0+IGNvbnNvbGUubG9nKFwicmUtbW91bnQgYXV0aCBjb250ZXhudFwiKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGE6IHsgdXNlciB9LFxuICAgICAgfSA9IGF3YWl0IGFwaS5wb3N0KFwiYXBpL2F1dGgvbG9naW5cIiwgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJbmZvXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICAgICAgYXdhaXQgc2V0VXNlcih1c2VyKTtcbiAgICAgICAgYXdhaXQgUm91dGVyLnB1c2goXCIvYWRtaW5cIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcihlcnIucmVzcG9uc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySW5mb1wiKTtcbiAgICBhd2FpdCBhcGkucG9zdChcImF1dGgvbG9nb3V0XCIpO1xuICAgIHNldFVzZXIobnVsbCk7XG4gICAgYXdhaXQgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNBdXRoZW50aWNhdGVkOiAhIXVzZXIsIHVzZXIsIGxvZ2luLCBsb2FkaW5nLCBsb2dvdXQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gdXNlQXV0aCgpIHtcbiAgdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIFByb3RlY3RSb3V0ZSh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIGxvYWRpbmcgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAvLyBpZighbG9hZGluZykgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgLy8gcmV0dXJuIDxoMT5Mb2FkaW5nPC9oMT5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcm91dGVyLnB1c2goXCIvbmV3L3VybFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cblJlZGlyZWN0UGFnZS5nZXRJbml0aWFsUHJvcHMgPSAoY3R4KSA9PiB7XG4gIC8vIFdlIGNoZWNrIGZvciBjdHgucmVzIHRvIG1ha2Ugc3VyZSB3ZSdyZSBvbiB0aGUgc2VydmVyLlxuICBpZiAoY3R4LnJlcykge1xuICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogXCIvbmV3L3VybFwiIH0pO1xuICAgIGN0eC5yZXMuZW5kKCk7XG4gIH1cbiAgcmV0dXJuIHt9O1xufTtcblxuZXhwb3J0IHsgQXV0aENvbnRleHQsIEF1dGhQcm92aWRlciwgdXNlQXV0aCwgUHJvdGVjdFJvdXRlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/Auth.context.js\n");

/***/ })

})