"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./artifacts/ts/BurnToken.ts":
/*!***********************************!*\
  !*** ./artifacts/ts/BurnToken.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BurnToken\": function() { return /* binding */ BurnToken; },\n/* harmony export */   \"BurnTokenInstance\": function() { return /* binding */ BurnTokenInstance; }\n/* harmony export */ });\n/* harmony import */ var _alephium_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @alephium/web3 */ \"./node_modules/@alephium/web3/dist/src/index.js\");\n/* harmony import */ var _alephium_web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alephium_web3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BurnToken_ral_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BurnToken.ral.json */ \"./artifacts/BurnToken.ral.json\");\n/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contracts */ \"./artifacts/ts/contracts.ts\");\n/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ \n\n\nclass Factory extends _alephium_web3__WEBPACK_IMPORTED_MODULE_0__.ContractFactory {\n    getInitialFieldsWithDefaultValues() {\n        return this.contract.getInitialFieldsWithDefaultValues();\n    }\n    at(address) {\n        return new BurnTokenInstance(address);\n    }\n    constructor(...args){\n        super(...args);\n        this.eventIndex = {\n            Burn: 0,\n            Destroy: 1\n        };\n        this.consts = {\n            Error: {\n                InvalidCaller: BigInt(0)\n            }\n        };\n        this.tests = {\n            getSymbol: async (params)=>{\n                return (0,_alephium_web3__WEBPACK_IMPORTED_MODULE_0__.testMethod)(this, \"getSymbol\", params);\n            },\n            getName: async (params)=>{\n                return (0,_alephium_web3__WEBPACK_IMPORTED_MODULE_0__.testMethod)(this, \"getName\", params);\n            },\n            burntoken: async (params)=>{\n                return (0,_alephium_web3__WEBPACK_IMPORTED_MODULE_0__.testMethod)(this, \"burntoken\", params);\n            },\n            destroy: async (params)=>{\n                return (0,_alephium_web3__WEBPACK_IMPORTED_MODULE_0__.testMethod)(this, \"destroy\", params);\n            }\n        };\n    }\n}\n// Use this object to test and deploy the contract\nconst BurnToken = new Factory(_alephium_web3__WEBPACK_IMPORTED_MODULE_0__.Contract.fromJson(_BurnToken_ral_json__WEBPACK_IMPORTED_MODULE_1__, \"\", \"f2def89f6c6812d5b48e2bc92ed1fc50520dfb84621676d9aa3e9e3b2bba609c\"));\n// Use this class to interact with the blockchain\nclass BurnTokenInstance extends _alephium_web3__WEBPACK_IMPORTED_MODULE_0__.ContractInstance {\n    async fetchState() {\n        return (0,_alephium_web3__WEBPACK_IMPORTED_MODULE_0__.fetchContractState)(BurnToken, this);\n    }\n    async getContractEventsCurrentCount() {\n        return (0,_alephium_web3__WEBPACK_IMPORTED_MODULE_0__.getContractEventsCurrentCount)(this.address);\n    }\n    subscribeBurnEvent(options, fromCount) {\n        return (0,_alephium_web3__WEBPACK_IMPORTED_MODULE_0__.subscribeContractEvent)(BurnToken.contract, this, options, \"Burn\", fromCount);\n    }\n    subscribeDestroyEvent(options, fromCount) {\n        return (0,_alephium_web3__WEBPACK_IMPORTED_MODULE_0__.subscribeContractEvent)(BurnToken.contract, this, options, \"Destroy\", fromCount);\n    }\n    subscribeAllEvents(options, fromCount) {\n        return (0,_alephium_web3__WEBPACK_IMPORTED_MODULE_0__.subscribeContractEvents)(BurnToken.contract, this, options, fromCount);\n    }\n    async multicall(calls) {\n        return await (0,_alephium_web3__WEBPACK_IMPORTED_MODULE_0__.multicallMethods)(BurnToken, this, calls, _contracts__WEBPACK_IMPORTED_MODULE_2__.getContractByCodeHash);\n    }\n    constructor(address){\n        super(address);\n        this.methods = {\n            getSymbol: async (params)=>{\n                return (0,_alephium_web3__WEBPACK_IMPORTED_MODULE_0__.callMethod)(BurnToken, this, \"getSymbol\", params === undefined ? {} : params, _contracts__WEBPACK_IMPORTED_MODULE_2__.getContractByCodeHash);\n            },\n            getName: async (params)=>{\n                return (0,_alephium_web3__WEBPACK_IMPORTED_MODULE_0__.callMethod)(BurnToken, this, \"getName\", params === undefined ? {} : params, _contracts__WEBPACK_IMPORTED_MODULE_2__.getContractByCodeHash);\n            }\n        };\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcnRpZmFjdHMvdHMvQnVyblRva2VuLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUE2QyxHQUM3QyxrQkFBa0IsR0FDbEIsa0JBQWtCLEdBdUJNO0FBQ2lEO0FBQ3JCO0FBMkNwRCxNQUFNYSxnQkFBZ0JaLDJEQUFlQTtJQUluQ2Esb0NBQW9DO1FBQ2xDLE9BQU8sSUFBSSxDQUFDQyxRQUFRLENBQUNELGlDQUFpQztJQUN4RDtJQUtBRSxHQUFHQyxPQUFlLEVBQXFCO1FBQ3JDLE9BQU8sSUFBSUMsa0JBQWtCRDtJQUMvQjs7O2FBTEFFLGFBQWE7WUFBRUMsTUFBTTtZQUFHQyxTQUFTO1FBQUU7YUFDbkNDLFNBQVM7WUFBRUMsT0FBTztnQkFBRUMsZUFBZUMsT0FBTztZQUFHO1FBQUU7YUFNL0NDLFFBQVE7WUFDTkMsV0FBVyxPQUNUQyxTQUMyQztnQkFDM0MsT0FBT3hCLDBEQUFVQSxDQUFDLElBQUksRUFBRSxhQUFhd0I7WUFDdkM7WUFDQUMsU0FBUyxPQUNQRCxTQUMyQztnQkFDM0MsT0FBT3hCLDBEQUFVQSxDQUFDLElBQUksRUFBRSxXQUFXd0I7WUFDckM7WUFDQUUsV0FBVyxPQUNURixTQUNzQztnQkFDdEMsT0FBT3hCLDBEQUFVQSxDQUFDLElBQUksRUFBRSxhQUFhd0I7WUFDdkM7WUFDQUcsU0FBUyxPQUNQSCxTQUNzQztnQkFDdEMsT0FBT3hCLDBEQUFVQSxDQUFDLElBQUksRUFBRSxXQUFXd0I7WUFDckM7UUFDRjs7QUFDRjtBQUVBLGtEQUFrRDtBQUMzQyxNQUFNSSxZQUFZLElBQUluQixRQUMzQmIsNkRBQWlCLENBQ2ZXLGdEQUFxQkEsRUFDckIsSUFDQSxxRUFFRjtBQUVGLGlEQUFpRDtBQUMxQyxNQUFNTywwQkFBMEJWLDREQUFnQkE7SUFLckQsTUFBTTBCLGFBQTRDO1FBQ2hELE9BQU8zQixrRUFBa0JBLENBQUN5QixXQUFXLElBQUk7SUFDM0M7SUFFQSxNQUFNdkIsZ0NBQWlEO1FBQ3JELE9BQU9BLDZFQUE2QkEsQ0FBQyxJQUFJLENBQUNRLE9BQU87SUFDbkQ7SUFFQWtCLG1CQUNFQyxPQUF3RCxFQUN4REMsU0FBa0IsRUFDQztRQUNuQixPQUFPbkMsc0VBQXNCQSxDQUMzQjhCLFVBQVVqQixRQUFRLEVBQ2xCLElBQUksRUFDSnFCLFNBQ0EsUUFDQUM7SUFFSjtJQUVBQyxzQkFDRUYsT0FBMkQsRUFDM0RDLFNBQWtCLEVBQ0M7UUFDbkIsT0FBT25DLHNFQUFzQkEsQ0FDM0I4QixVQUFVakIsUUFBUSxFQUNsQixJQUFJLEVBQ0pxQixTQUNBLFdBQ0FDO0lBRUo7SUFFQUUsbUJBQ0VILE9BRUMsRUFDREMsU0FBa0IsRUFDQztRQUNuQixPQUFPbEMsdUVBQXVCQSxDQUM1QjZCLFVBQVVqQixRQUFRLEVBQ2xCLElBQUksRUFDSnFCLFNBQ0FDO0lBRUo7SUEyQkEsTUFBTUcsVUFDSkMsS0FBWSxFQUNxQztRQUNqRCxPQUFRLE1BQU1uQyxnRUFBZ0JBLENBQzVCMEIsV0FDQSxJQUFJLEVBQ0pTLE9BQ0E3Qiw2REFBcUJBO0lBRXpCO0lBdEZBOEIsWUFBWXpCLE9BQWdCLENBQUU7UUFDNUIsS0FBSyxDQUFDQTthQW1EUjBCLFVBQVU7WUFDUmhCLFdBQVcsT0FDVEMsU0FDMEQ7Z0JBQzFELE9BQU92QiwwREFBVUEsQ0FDZjJCLFdBQ0EsSUFBSSxFQUNKLGFBQ0FKLFdBQVdnQixZQUFZLENBQUMsSUFBSWhCLE1BQU0sRUFDbENoQiw2REFBcUJBO1lBRXpCO1lBQ0FpQixTQUFTLE9BQ1BELFNBQ3dEO2dCQUN4RCxPQUFPdkIsMERBQVVBLENBQ2YyQixXQUNBLElBQUksRUFDSixXQUNBSixXQUFXZ0IsWUFBWSxDQUFDLElBQUloQixNQUFNLEVBQ2xDaEIsNkRBQXFCQTtZQUV6QjtRQUNGO0lBekVBO0FBcUZGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXJ0aWZhY3RzL3RzL0J1cm5Ub2tlbi50cz9jMzVmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEF1dG9nZW5lcmF0ZWQgZmlsZS4gRG8gbm90IGVkaXQgbWFudWFsbHkuICovXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ29udHJhY3QsXG4gIENvbnRyYWN0U3RhdGUsXG4gIFRlc3RDb250cmFjdFJlc3VsdCxcbiAgSGV4U3RyaW5nLFxuICBDb250cmFjdEZhY3RvcnksXG4gIEV2ZW50U3Vic2NyaWJlT3B0aW9ucyxcbiAgRXZlbnRTdWJzY3JpcHRpb24sXG4gIENhbGxDb250cmFjdFBhcmFtcyxcbiAgQ2FsbENvbnRyYWN0UmVzdWx0LFxuICBUZXN0Q29udHJhY3RQYXJhbXMsXG4gIENvbnRyYWN0RXZlbnQsXG4gIHN1YnNjcmliZUNvbnRyYWN0RXZlbnQsXG4gIHN1YnNjcmliZUNvbnRyYWN0RXZlbnRzLFxuICB0ZXN0TWV0aG9kLFxuICBjYWxsTWV0aG9kLFxuICBtdWx0aWNhbGxNZXRob2RzLFxuICBmZXRjaENvbnRyYWN0U3RhdGUsXG4gIENvbnRyYWN0SW5zdGFuY2UsXG4gIGdldENvbnRyYWN0RXZlbnRzQ3VycmVudENvdW50LFxufSBmcm9tIFwiQGFsZXBoaXVtL3dlYjNcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgQnVyblRva2VuQ29udHJhY3RKc29uIH0gZnJvbSBcIi4uL0J1cm5Ub2tlbi5yYWwuanNvblwiO1xuaW1wb3J0IHsgZ2V0Q29udHJhY3RCeUNvZGVIYXNoIH0gZnJvbSBcIi4vY29udHJhY3RzXCI7XG5cbi8vIEN1c3RvbSB0eXBlcyBmb3IgdGhlIGNvbnRyYWN0XG5leHBvcnQgbmFtZXNwYWNlIEJ1cm5Ub2tlblR5cGVzIHtcbiAgZXhwb3J0IHR5cGUgRmllbGRzID0ge1xuICAgIHRva2Vuc2J1cm5lZDogYmlnaW50O1xuICAgIHRva2VuaWQ6IEhleFN0cmluZztcbiAgICBvd25lcjogQWRkcmVzcztcbiAgfTtcblxuICBleHBvcnQgdHlwZSBTdGF0ZSA9IENvbnRyYWN0U3RhdGU8RmllbGRzPjtcblxuICBleHBvcnQgdHlwZSBCdXJuRXZlbnQgPSBDb250cmFjdEV2ZW50PHtcbiAgICBmcm9tOiBBZGRyZXNzO1xuICAgIGFtb3VudDogYmlnaW50O1xuICAgIHRva2VuOiBIZXhTdHJpbmc7XG4gIH0+O1xuICBleHBvcnQgdHlwZSBEZXN0cm95RXZlbnQgPSBDb250cmFjdEV2ZW50PHsgZnJvbTogQWRkcmVzcyB9PjtcblxuICBleHBvcnQgaW50ZXJmYWNlIENhbGxNZXRob2RUYWJsZSB7XG4gICAgZ2V0U3ltYm9sOiB7XG4gICAgICBwYXJhbXM6IE9taXQ8Q2FsbENvbnRyYWN0UGFyYW1zPHt9PiwgXCJhcmdzXCI+O1xuICAgICAgcmVzdWx0OiBDYWxsQ29udHJhY3RSZXN1bHQ8SGV4U3RyaW5nPjtcbiAgICB9O1xuICAgIGdldE5hbWU6IHtcbiAgICAgIHBhcmFtczogT21pdDxDYWxsQ29udHJhY3RQYXJhbXM8e30+LCBcImFyZ3NcIj47XG4gICAgICByZXN1bHQ6IENhbGxDb250cmFjdFJlc3VsdDxIZXhTdHJpbmc+O1xuICAgIH07XG4gIH1cbiAgZXhwb3J0IHR5cGUgQ2FsbE1ldGhvZFBhcmFtczxUIGV4dGVuZHMga2V5b2YgQ2FsbE1ldGhvZFRhYmxlPiA9XG4gICAgQ2FsbE1ldGhvZFRhYmxlW1RdW1wicGFyYW1zXCJdO1xuICBleHBvcnQgdHlwZSBDYWxsTWV0aG9kUmVzdWx0PFQgZXh0ZW5kcyBrZXlvZiBDYWxsTWV0aG9kVGFibGU+ID1cbiAgICBDYWxsTWV0aG9kVGFibGVbVF1bXCJyZXN1bHRcIl07XG4gIGV4cG9ydCB0eXBlIE11bHRpQ2FsbFBhcmFtcyA9IFBhcnRpYWw8e1xuICAgIFtOYW1lIGluIGtleW9mIENhbGxNZXRob2RUYWJsZV06IENhbGxNZXRob2RUYWJsZVtOYW1lXVtcInBhcmFtc1wiXTtcbiAgfT47XG4gIGV4cG9ydCB0eXBlIE11bHRpQ2FsbFJlc3VsdHM8VCBleHRlbmRzIE11bHRpQ2FsbFBhcmFtcz4gPSB7XG4gICAgW01heWJlTmFtZSBpbiBrZXlvZiBUXTogTWF5YmVOYW1lIGV4dGVuZHMga2V5b2YgQ2FsbE1ldGhvZFRhYmxlXG4gICAgICA/IENhbGxNZXRob2RUYWJsZVtNYXliZU5hbWVdW1wicmVzdWx0XCJdXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfTtcbn1cblxuY2xhc3MgRmFjdG9yeSBleHRlbmRzIENvbnRyYWN0RmFjdG9yeTxcbiAgQnVyblRva2VuSW5zdGFuY2UsXG4gIEJ1cm5Ub2tlblR5cGVzLkZpZWxkc1xuPiB7XG4gIGdldEluaXRpYWxGaWVsZHNXaXRoRGVmYXVsdFZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdC5nZXRJbml0aWFsRmllbGRzV2l0aERlZmF1bHRWYWx1ZXMoKTtcbiAgfVxuXG4gIGV2ZW50SW5kZXggPSB7IEJ1cm46IDAsIERlc3Ryb3k6IDEgfTtcbiAgY29uc3RzID0geyBFcnJvcjogeyBJbnZhbGlkQ2FsbGVyOiBCaWdJbnQoMCkgfSB9O1xuXG4gIGF0KGFkZHJlc3M6IHN0cmluZyk6IEJ1cm5Ub2tlbkluc3RhbmNlIHtcbiAgICByZXR1cm4gbmV3IEJ1cm5Ub2tlbkluc3RhbmNlKGFkZHJlc3MpO1xuICB9XG5cbiAgdGVzdHMgPSB7XG4gICAgZ2V0U3ltYm9sOiBhc3luYyAoXG4gICAgICBwYXJhbXM6IE9taXQ8VGVzdENvbnRyYWN0UGFyYW1zPEJ1cm5Ub2tlblR5cGVzLkZpZWxkcywgbmV2ZXI+LCBcInRlc3RBcmdzXCI+XG4gICAgKTogUHJvbWlzZTxUZXN0Q29udHJhY3RSZXN1bHQ8SGV4U3RyaW5nPj4gPT4ge1xuICAgICAgcmV0dXJuIHRlc3RNZXRob2QodGhpcywgXCJnZXRTeW1ib2xcIiwgcGFyYW1zKTtcbiAgICB9LFxuICAgIGdldE5hbWU6IGFzeW5jIChcbiAgICAgIHBhcmFtczogT21pdDxUZXN0Q29udHJhY3RQYXJhbXM8QnVyblRva2VuVHlwZXMuRmllbGRzLCBuZXZlcj4sIFwidGVzdEFyZ3NcIj5cbiAgICApOiBQcm9taXNlPFRlc3RDb250cmFjdFJlc3VsdDxIZXhTdHJpbmc+PiA9PiB7XG4gICAgICByZXR1cm4gdGVzdE1ldGhvZCh0aGlzLCBcImdldE5hbWVcIiwgcGFyYW1zKTtcbiAgICB9LFxuICAgIGJ1cm50b2tlbjogYXN5bmMgKFxuICAgICAgcGFyYW1zOiBUZXN0Q29udHJhY3RQYXJhbXM8QnVyblRva2VuVHlwZXMuRmllbGRzLCB7IGFtb3VudDogYmlnaW50IH0+XG4gICAgKTogUHJvbWlzZTxUZXN0Q29udHJhY3RSZXN1bHQ8bnVsbD4+ID0+IHtcbiAgICAgIHJldHVybiB0ZXN0TWV0aG9kKHRoaXMsIFwiYnVybnRva2VuXCIsIHBhcmFtcyk7XG4gICAgfSxcbiAgICBkZXN0cm95OiBhc3luYyAoXG4gICAgICBwYXJhbXM6IE9taXQ8VGVzdENvbnRyYWN0UGFyYW1zPEJ1cm5Ub2tlblR5cGVzLkZpZWxkcywgbmV2ZXI+LCBcInRlc3RBcmdzXCI+XG4gICAgKTogUHJvbWlzZTxUZXN0Q29udHJhY3RSZXN1bHQ8bnVsbD4+ID0+IHtcbiAgICAgIHJldHVybiB0ZXN0TWV0aG9kKHRoaXMsIFwiZGVzdHJveVwiLCBwYXJhbXMpO1xuICAgIH0sXG4gIH07XG59XG5cbi8vIFVzZSB0aGlzIG9iamVjdCB0byB0ZXN0IGFuZCBkZXBsb3kgdGhlIGNvbnRyYWN0XG5leHBvcnQgY29uc3QgQnVyblRva2VuID0gbmV3IEZhY3RvcnkoXG4gIENvbnRyYWN0LmZyb21Kc29uKFxuICAgIEJ1cm5Ub2tlbkNvbnRyYWN0SnNvbixcbiAgICBcIlwiLFxuICAgIFwiZjJkZWY4OWY2YzY4MTJkNWI0OGUyYmM5MmVkMWZjNTA1MjBkZmI4NDYyMTY3NmQ5YWEzZTllM2IyYmJhNjA5Y1wiXG4gIClcbik7XG5cbi8vIFVzZSB0aGlzIGNsYXNzIHRvIGludGVyYWN0IHdpdGggdGhlIGJsb2NrY2hhaW5cbmV4cG9ydCBjbGFzcyBCdXJuVG9rZW5JbnN0YW5jZSBleHRlbmRzIENvbnRyYWN0SW5zdGFuY2Uge1xuICBjb25zdHJ1Y3RvcihhZGRyZXNzOiBBZGRyZXNzKSB7XG4gICAgc3VwZXIoYWRkcmVzcyk7XG4gIH1cblxuICBhc3luYyBmZXRjaFN0YXRlKCk6IFByb21pc2U8QnVyblRva2VuVHlwZXMuU3RhdGU+IHtcbiAgICByZXR1cm4gZmV0Y2hDb250cmFjdFN0YXRlKEJ1cm5Ub2tlbiwgdGhpcyk7XG4gIH1cblxuICBhc3luYyBnZXRDb250cmFjdEV2ZW50c0N1cnJlbnRDb3VudCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiBnZXRDb250cmFjdEV2ZW50c0N1cnJlbnRDb3VudCh0aGlzLmFkZHJlc3MpO1xuICB9XG5cbiAgc3Vic2NyaWJlQnVybkV2ZW50KFxuICAgIG9wdGlvbnM6IEV2ZW50U3Vic2NyaWJlT3B0aW9uczxCdXJuVG9rZW5UeXBlcy5CdXJuRXZlbnQ+LFxuICAgIGZyb21Db3VudD86IG51bWJlclxuICApOiBFdmVudFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHN1YnNjcmliZUNvbnRyYWN0RXZlbnQoXG4gICAgICBCdXJuVG9rZW4uY29udHJhY3QsXG4gICAgICB0aGlzLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIFwiQnVyblwiLFxuICAgICAgZnJvbUNvdW50XG4gICAgKTtcbiAgfVxuXG4gIHN1YnNjcmliZURlc3Ryb3lFdmVudChcbiAgICBvcHRpb25zOiBFdmVudFN1YnNjcmliZU9wdGlvbnM8QnVyblRva2VuVHlwZXMuRGVzdHJveUV2ZW50PixcbiAgICBmcm9tQ291bnQ/OiBudW1iZXJcbiAgKTogRXZlbnRTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiBzdWJzY3JpYmVDb250cmFjdEV2ZW50KFxuICAgICAgQnVyblRva2VuLmNvbnRyYWN0LFxuICAgICAgdGhpcyxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBcIkRlc3Ryb3lcIixcbiAgICAgIGZyb21Db3VudFxuICAgICk7XG4gIH1cblxuICBzdWJzY3JpYmVBbGxFdmVudHMoXG4gICAgb3B0aW9uczogRXZlbnRTdWJzY3JpYmVPcHRpb25zPFxuICAgICAgQnVyblRva2VuVHlwZXMuQnVybkV2ZW50IHwgQnVyblRva2VuVHlwZXMuRGVzdHJveUV2ZW50XG4gICAgPixcbiAgICBmcm9tQ291bnQ/OiBudW1iZXJcbiAgKTogRXZlbnRTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiBzdWJzY3JpYmVDb250cmFjdEV2ZW50cyhcbiAgICAgIEJ1cm5Ub2tlbi5jb250cmFjdCxcbiAgICAgIHRoaXMsXG4gICAgICBvcHRpb25zLFxuICAgICAgZnJvbUNvdW50XG4gICAgKTtcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgZ2V0U3ltYm9sOiBhc3luYyAoXG4gICAgICBwYXJhbXM/OiBCdXJuVG9rZW5UeXBlcy5DYWxsTWV0aG9kUGFyYW1zPFwiZ2V0U3ltYm9sXCI+XG4gICAgKTogUHJvbWlzZTxCdXJuVG9rZW5UeXBlcy5DYWxsTWV0aG9kUmVzdWx0PFwiZ2V0U3ltYm9sXCI+PiA9PiB7XG4gICAgICByZXR1cm4gY2FsbE1ldGhvZChcbiAgICAgICAgQnVyblRva2VuLFxuICAgICAgICB0aGlzLFxuICAgICAgICBcImdldFN5bWJvbFwiLFxuICAgICAgICBwYXJhbXMgPT09IHVuZGVmaW5lZCA/IHt9IDogcGFyYW1zLFxuICAgICAgICBnZXRDb250cmFjdEJ5Q29kZUhhc2hcbiAgICAgICk7XG4gICAgfSxcbiAgICBnZXROYW1lOiBhc3luYyAoXG4gICAgICBwYXJhbXM/OiBCdXJuVG9rZW5UeXBlcy5DYWxsTWV0aG9kUGFyYW1zPFwiZ2V0TmFtZVwiPlxuICAgICk6IFByb21pc2U8QnVyblRva2VuVHlwZXMuQ2FsbE1ldGhvZFJlc3VsdDxcImdldE5hbWVcIj4+ID0+IHtcbiAgICAgIHJldHVybiBjYWxsTWV0aG9kKFxuICAgICAgICBCdXJuVG9rZW4sXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiZ2V0TmFtZVwiLFxuICAgICAgICBwYXJhbXMgPT09IHVuZGVmaW5lZCA/IHt9IDogcGFyYW1zLFxuICAgICAgICBnZXRDb250cmFjdEJ5Q29kZUhhc2hcbiAgICAgICk7XG4gICAgfSxcbiAgfTtcblxuICBhc3luYyBtdWx0aWNhbGw8Q2FsbHMgZXh0ZW5kcyBCdXJuVG9rZW5UeXBlcy5NdWx0aUNhbGxQYXJhbXM+KFxuICAgIGNhbGxzOiBDYWxsc1xuICApOiBQcm9taXNlPEJ1cm5Ub2tlblR5cGVzLk11bHRpQ2FsbFJlc3VsdHM8Q2FsbHM+PiB7XG4gICAgcmV0dXJuIChhd2FpdCBtdWx0aWNhbGxNZXRob2RzKFxuICAgICAgQnVyblRva2VuLFxuICAgICAgdGhpcyxcbiAgICAgIGNhbGxzLFxuICAgICAgZ2V0Q29udHJhY3RCeUNvZGVIYXNoXG4gICAgKSkgYXMgQnVyblRva2VuVHlwZXMuTXVsdGlDYWxsUmVzdWx0czxDYWxscz47XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250cmFjdCIsIkNvbnRyYWN0RmFjdG9yeSIsInN1YnNjcmliZUNvbnRyYWN0RXZlbnQiLCJzdWJzY3JpYmVDb250cmFjdEV2ZW50cyIsInRlc3RNZXRob2QiLCJjYWxsTWV0aG9kIiwibXVsdGljYWxsTWV0aG9kcyIsImZldGNoQ29udHJhY3RTdGF0ZSIsIkNvbnRyYWN0SW5zdGFuY2UiLCJnZXRDb250cmFjdEV2ZW50c0N1cnJlbnRDb3VudCIsImRlZmF1bHQiLCJCdXJuVG9rZW5Db250cmFjdEpzb24iLCJnZXRDb250cmFjdEJ5Q29kZUhhc2giLCJGYWN0b3J5IiwiZ2V0SW5pdGlhbEZpZWxkc1dpdGhEZWZhdWx0VmFsdWVzIiwiY29udHJhY3QiLCJhdCIsImFkZHJlc3MiLCJCdXJuVG9rZW5JbnN0YW5jZSIsImV2ZW50SW5kZXgiLCJCdXJuIiwiRGVzdHJveSIsImNvbnN0cyIsIkVycm9yIiwiSW52YWxpZENhbGxlciIsIkJpZ0ludCIsInRlc3RzIiwiZ2V0U3ltYm9sIiwicGFyYW1zIiwiZ2V0TmFtZSIsImJ1cm50b2tlbiIsImRlc3Ryb3kiLCJCdXJuVG9rZW4iLCJmcm9tSnNvbiIsImZldGNoU3RhdGUiLCJzdWJzY3JpYmVCdXJuRXZlbnQiLCJvcHRpb25zIiwiZnJvbUNvdW50Iiwic3Vic2NyaWJlRGVzdHJveUV2ZW50Iiwic3Vic2NyaWJlQWxsRXZlbnRzIiwibXVsdGljYWxsIiwiY2FsbHMiLCJjb25zdHJ1Y3RvciIsIm1ldGhvZHMiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./artifacts/ts/BurnToken.ts\n"));

/***/ })

});