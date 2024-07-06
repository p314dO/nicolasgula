/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/filter.tsx":
/*!****************************!*\
  !*** ./context/filter.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProvideFilter: () => (/* binding */ ProvideFilter),\n/* harmony export */   filterContext: () => (/* binding */ filterContext),\n/* harmony export */   useFilter: () => (/* binding */ useFilter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst filterContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    searchText: \"\",\n    postLanguage: \"All\"\n});\nconst ProvideFilter = ({ children })=>{\n    const value = useProvideFilter();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(filterContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/pelado/ngbonzini/context/filter.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\nconst useFilter = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(filterContext);\nconst useProvideFilter = ()=>{\n    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [postLanguage, setPostLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const onSearch = (val)=>{\n        setSearchText(val);\n    };\n    const onLanguageChange = (val)=>{\n        setPostLanguage(val);\n    };\n    return {\n        searchText,\n        postLanguage,\n        onSearch,\n        onLanguageChange\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2ZpbHRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUU7QUFXNUQsTUFBTUksOEJBQWdCSCxvREFBYUEsQ0FBb0I7SUFDNURJLFlBQVk7SUFDWkMsY0FBYztBQUNoQixHQUFHO0FBRUksTUFBTUMsZ0JBQWdCLENBQUMsRUFBRUMsUUFBUSxFQUFpQztJQUN2RSxNQUFNQyxRQUFRQztJQUNkLHFCQUNFLDhEQUFDTixjQUFjTyxRQUFRO1FBQUNGLE9BQU9BO2tCQUFRRDs7Ozs7O0FBRTNDLEVBQUU7QUFFSyxNQUFNSSxZQUFZLElBQU1WLGlEQUFVQSxDQUFDRSxlQUFlO0FBRXpELE1BQU1NLG1CQUFtQjtJQUN2QixNQUFNLENBQUNMLFlBQVlRLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDRyxjQUFjUSxnQkFBZ0IsR0FBR1gsK0NBQVFBLENBQWU7SUFFL0QsTUFBTVksV0FBVyxDQUFDQztRQUNoQkgsY0FBY0c7SUFDaEI7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0Q7UUFDeEJGLGdCQUFnQkU7SUFDbEI7SUFFQSxPQUFPO1FBQ0xYO1FBQ0FDO1FBQ0FTO1FBQ0FFO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhdG5haW5nLmRldi8uL2NvbnRleHQvZmlsdGVyLnRzeD80NWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIEZpbHRlckluaXRpYWxUeXBlIHtcclxuICBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgcG9zdExhbmd1YWdlOiBMYW5ndWFnZVR5cGU7XHJcbiAgb25TZWFyY2g/OiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgb25MYW5ndWFnZUNoYW5nZT86ICh2YWw6IExhbmd1YWdlVHlwZSkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTGFuZ3VhZ2VUeXBlID0gXCJBbGxcIiB8IFwiRW5nbGlzaFwiIHwgXCJTcGFuaXNoXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8RmlsdGVySW5pdGlhbFR5cGU+KHtcclxuICBzZWFyY2hUZXh0OiBcIlwiLFxyXG4gIHBvc3RMYW5ndWFnZTogXCJBbGxcIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZUZpbHRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgY29uc3QgdmFsdWUgPSB1c2VQcm92aWRlRmlsdGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmaWx0ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvZmlsdGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUZpbHRlciA9ICgpID0+IHVzZUNvbnRleHQoZmlsdGVyQ29udGV4dCk7XHJcblxyXG5jb25zdCB1c2VQcm92aWRlRmlsdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwb3N0TGFuZ3VhZ2UsIHNldFBvc3RMYW5ndWFnZV0gPSB1c2VTdGF0ZTxMYW5ndWFnZVR5cGU+KFwiQWxsXCIpO1xyXG5cclxuICBjb25zdCBvblNlYXJjaCA9ICh2YWw6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0U2VhcmNoVGV4dCh2YWwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uTGFuZ3VhZ2VDaGFuZ2UgPSAodmFsOiBMYW5ndWFnZVR5cGUpID0+IHtcclxuICAgIHNldFBvc3RMYW5ndWFnZSh2YWwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZWFyY2hUZXh0LFxyXG4gICAgcG9zdExhbmd1YWdlLFxyXG4gICAgb25TZWFyY2gsXHJcbiAgICBvbkxhbmd1YWdlQ2hhbmdlLFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJmaWx0ZXJDb250ZXh0Iiwic2VhcmNoVGV4dCIsInBvc3RMYW5ndWFnZSIsIlByb3ZpZGVGaWx0ZXIiLCJjaGlsZHJlbiIsInZhbHVlIiwidXNlUHJvdmlkZUZpbHRlciIsIlByb3ZpZGVyIiwidXNlRmlsdGVyIiwic2V0U2VhcmNoVGV4dCIsInNldFBvc3RMYW5ndWFnZSIsIm9uU2VhcmNoIiwidmFsIiwib25MYW5ndWFnZUNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/filter.tsx\n");

/***/ }),

/***/ "./context/section.tsx":
/*!*****************************!*\
  !*** ./context/section.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProvideSection: () => (/* binding */ ProvideSection),\n/* harmony export */   sectionContext: () => (/* binding */ sectionContext),\n/* harmony export */   useSection: () => (/* binding */ useSection)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst sectionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    currentSection: \"\"\n});\nconst ProvideSection = ({ children })=>{\n    const value = useProvideSection();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sectionContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/pelado/ngbonzini/context/section.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\nconst useSection = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(sectionContext);\nconst useProvideSection = ()=>{\n    const [currentSection, setCurrentSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const onSectionChange = (val)=>{\n        setCurrentSection(val);\n    };\n    return {\n        currentSection,\n        onSectionChange\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3NlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1FO0FBTzVELE1BQU1JLCtCQUFpQkgsb0RBQWFBLENBQXFCO0lBQzlESSxnQkFBZ0I7QUFDbEIsR0FBRztBQUVJLE1BQU1DLGlCQUFpQixDQUFDLEVBQUVDLFFBQVEsRUFBaUM7SUFDeEUsTUFBTUMsUUFBUUM7SUFDZCxxQkFDRSw4REFBQ0wsZUFBZU0sUUFBUTtRQUFDRixPQUFPQTtrQkFBUUQ7Ozs7OztBQUU1QyxFQUFFO0FBRUssTUFBTUksYUFBYSxJQUFNVCxpREFBVUEsQ0FBQ0UsZ0JBQWdCO0FBRTNELE1BQU1LLG9CQUFvQjtJQUN4QixNQUFNLENBQUNKLGdCQUFnQk8sa0JBQWtCLEdBQUdULCtDQUFRQSxDQUFDO0lBRXJELE1BQU1VLGtCQUFrQixDQUFDQztRQUN2QkYsa0JBQWtCRTtJQUNwQjtJQUVBLE9BQU87UUFDTFQ7UUFDQVE7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2F0bmFpbmcuZGV2Ly4vY29udGV4dC9zZWN0aW9uLnRzeD85MzFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFNlY3Rpb25Jbml0aWFsVHlwZSB7XHJcbiAgY3VycmVudFNlY3Rpb246IHN0cmluZztcclxuICBvblNlY3Rpb25DaGFuZ2U/OiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZWN0aW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U2VjdGlvbkluaXRpYWxUeXBlPih7XHJcbiAgY3VycmVudFNlY3Rpb246IFwiXCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb3ZpZGVTZWN0aW9uID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IHVzZVByb3ZpZGVTZWN0aW9uKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L3NlY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU2VjdGlvbiA9ICgpID0+IHVzZUNvbnRleHQoc2VjdGlvbkNvbnRleHQpO1xyXG5cclxuY29uc3QgdXNlUHJvdmlkZVNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRTZWN0aW9uLCBzZXRDdXJyZW50U2VjdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qgb25TZWN0aW9uQ2hhbmdlID0gKHZhbDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50U2VjdGlvbih2YWwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjdXJyZW50U2VjdGlvbixcclxuICAgIG9uU2VjdGlvbkNoYW5nZSxcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwic2VjdGlvbkNvbnRleHQiLCJjdXJyZW50U2VjdGlvbiIsIlByb3ZpZGVTZWN0aW9uIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsInVzZVByb3ZpZGVTZWN0aW9uIiwiUHJvdmlkZXIiLCJ1c2VTZWN0aW9uIiwic2V0Q3VycmVudFNlY3Rpb24iLCJvblNlY3Rpb25DaGFuZ2UiLCJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/section.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var context_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/filter */ \"./context/filter.tsx\");\n/* harmony import */ var context_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! context/section */ \"./context/section.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const cursorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener(\"mousemove\", (e)=>{\n            const mouseX = e.clientX;\n            const mouseY = e.clientY;\n            gsap__WEBPACK_IMPORTED_MODULE_7___default().to(cursorRef.current, {\n                x: mouseX,\n                y: mouseY,\n                opacity: 1,\n                delay: 0\n            });\n        });\n        const hideCursor = ()=>{\n            gsap__WEBPACK_IMPORTED_MODULE_7___default().to(cursorRef.current, {\n                opacity: 0\n            });\n        };\n        const showCursor = ()=>{\n            gsap__WEBPACK_IMPORTED_MODULE_7___default().to(cursorRef.current, {\n                opacity: 1\n            });\n        };\n        document.addEventListener(\"mouseleave\", hideCursor);\n        document.addEventListener(\"mousedown\", hideCursor);\n        document.addEventListener(\"mouseup\", showCursor);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {\n                id: \"google-analytics\",\n                strategy: \"lazyOnload\",\n                src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`\n            }, void 0, false, {\n                fileName: \"/home/pelado/ngbonzini/pages/_app.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {\n                id: \"google-analytics-script\",\n                strategy: \"lazyOnload\",\n                children: `\r\n        window.dataLayer = window.dataLayer || [];\r\n        function gtag(){dataLayer.push(arguments);}\r\n        gtag('js', new Date());\r\n        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {\r\n        page_path: window.location.pathname,\r\n        });\r\n    `\n            }, void 0, false, {\n                fileName: \"/home/pelado/ngbonzini/pages/_app.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1\"\n                }, void 0, false, {\n                    fileName: \"/home/pelado/ngbonzini/pages/_app.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/pelado/ngbonzini/pages/_app.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: cursorRef,\n                className: \"hidden lg:block w-12 h-12 opacity-0 pointer-events-none rounded-full border-2 border-marrsgreen dark:border-carrigreen z-[9999] fixed -translate-x-1/2 -translate-y-1/2\"\n            }, void 0, false, {\n                fileName: \"/home/pelado/ngbonzini/pages/_app.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                attribute: \"class\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(context_filter__WEBPACK_IMPORTED_MODULE_4__.ProvideFilter, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(context_section__WEBPACK_IMPORTED_MODULE_5__.ProvideSection, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/home/pelado/ngbonzini/pages/_app.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/pelado/ngbonzini/pages/_app.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/pelado/ngbonzini/pages/_app.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/pelado/ngbonzini/pages/_app.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDYjtBQUVlO0FBQ0c7QUFDRTtBQUVsQjtBQUVQO0FBQ1M7QUFFakMsU0FBU1EsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyxNQUFNQyxZQUFZViw2Q0FBTUEsQ0FBQztJQUV6QkQsZ0RBQVNBLENBQUM7UUFDUlksU0FBU0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDQztZQUN0QyxNQUFNQyxTQUFTRCxFQUFFRSxPQUFPO1lBQ3hCLE1BQU1DLFNBQVNILEVBQUVJLE9BQU87WUFDeEJaLDhDQUFPLENBQUNLLFVBQVVTLE9BQU8sRUFBRTtnQkFDekJDLEdBQUdOO2dCQUNITyxHQUFHTDtnQkFDSE0sU0FBUztnQkFDVEMsT0FBTztZQUNUO1FBQ0Y7UUFFQSxNQUFNQyxhQUFhO1lBQ2pCbkIsOENBQU8sQ0FBQ0ssVUFBVVMsT0FBTyxFQUFFO2dCQUFFRyxTQUFTO1lBQUU7UUFDMUM7UUFFQSxNQUFNRyxhQUFhO1lBQ2pCcEIsOENBQU8sQ0FBQ0ssVUFBVVMsT0FBTyxFQUFFO2dCQUFFRyxTQUFTO1lBQUU7UUFDMUM7UUFFQVgsU0FBU0MsZ0JBQWdCLENBQUMsY0FBY1k7UUFDeENiLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFZO1FBQ3ZDYixTQUFTQyxnQkFBZ0IsQ0FBQyxXQUFXYTtJQUN2QyxHQUFHLEVBQUU7SUFDTCxxQkFDRTs7MEJBQ0UsOERBQUNuQixvREFBTUE7Z0JBQ0xvQixJQUFHO2dCQUNIQyxVQUFTO2dCQUNUQyxLQUFLLENBQUMsNENBQTRDLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsNEJBQTRCLENBQUMsQ0FBQzs7Ozs7OzBCQUdoRyw4REFBQ3pCLG9EQUFNQTtnQkFBQ29CLElBQUc7Z0JBQTBCQyxVQUFTOzBCQUMzQyxDQUFDOzs7O3dCQUljLEVBQUVFLFFBQVFDLEdBQUcsQ0FBQ0MsNEJBQTRCLENBQUM7OztJQUcvRCxDQUFDOzs7Ozs7MEJBRUMsOERBQUM5QixrREFBSUE7MEJBQ0gsNEVBQUMrQjtvQkFBS0MsTUFBSztvQkFBV0MsU0FBUTs7Ozs7Ozs7Ozs7MEJBRWhDLDhEQUFDQztnQkFDQ0MsS0FBSzFCO2dCQUNMMkIsV0FBVTs7Ozs7OzBCQUVaLDhEQUFDbkMsc0RBQWFBO2dCQUFDb0MsV0FBVTswQkFDdkIsNEVBQUNuQyx5REFBYUE7OEJBQ1osNEVBQUNDLDJEQUFjQTtrQ0FDYiw0RUFBQ0k7NEJBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhdG5haW5nLmRldi8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcclxuaW1wb3J0IHsgUHJvdmlkZUZpbHRlciB9IGZyb20gXCJjb250ZXh0L2ZpbHRlclwiO1xyXG5pbXBvcnQgeyBQcm92aWRlU2VjdGlvbiB9IGZyb20gXCJjb250ZXh0L3NlY3Rpb25cIjtcclxuXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5cclxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICBjb25zdCBjdXJzb3JSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1vdXNlWCA9IGUuY2xpZW50WDtcclxuICAgICAgY29uc3QgbW91c2VZID0gZS5jbGllbnRZO1xyXG4gICAgICBnc2FwLnRvKGN1cnNvclJlZi5jdXJyZW50LCB7XHJcbiAgICAgICAgeDogbW91c2VYLFxyXG4gICAgICAgIHk6IG1vdXNlWSxcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhpZGVDdXJzb3IgPSAoKSA9PiB7XHJcbiAgICAgIGdzYXAudG8oY3Vyc29yUmVmLmN1cnJlbnQsIHsgb3BhY2l0eTogMCB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0N1cnNvciA9ICgpID0+IHtcclxuICAgICAgZ3NhcC50byhjdXJzb3JSZWYuY3VycmVudCwgeyBvcGFjaXR5OiAxIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoaWRlQ3Vyc29yKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGlkZUN1cnNvcik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzaG93Q3Vyc29yKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTY3JpcHRcclxuICAgICAgICBpZD1cImdvb2dsZS1hbmFseXRpY3NcIlxyXG4gICAgICAgIHN0cmF0ZWd5PVwibGF6eU9ubG9hZFwiXHJcbiAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1N9YH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxTY3JpcHQgaWQ9XCJnb29nbGUtYW5hbHl0aWNzLXNjcmlwdFwiIHN0cmF0ZWd5PVwibGF6eU9ubG9hZFwiPlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxyXG4gICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgZ3RhZygnY29uZmlnJywgJyR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDU30nLCB7XHJcbiAgICAgICAgcGFnZV9wYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICBgfVxyXG4gICAgICA8L1NjcmlwdD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgcmVmPXtjdXJzb3JSZWZ9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIHctMTIgaC0xMiBvcGFjaXR5LTAgcG9pbnRlci1ldmVudHMtbm9uZSByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLW1hcnJzZ3JlZW4gZGFyazpib3JkZXItY2FycmlncmVlbiB6LVs5OTk5XSBmaXhlZCAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciBhdHRyaWJ1dGU9XCJjbGFzc1wiPlxyXG4gICAgICAgIDxQcm92aWRlRmlsdGVyPlxyXG4gICAgICAgICAgPFByb3ZpZGVTZWN0aW9uPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICA8L1Byb3ZpZGVTZWN0aW9uPlxyXG4gICAgICAgIDwvUHJvdmlkZUZpbHRlcj5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJIZWFkIiwiVGhlbWVQcm92aWRlciIsIlByb3ZpZGVGaWx0ZXIiLCJQcm92aWRlU2VjdGlvbiIsImdzYXAiLCJTY3JpcHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImN1cnNvclJlZiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJtb3VzZVgiLCJjbGllbnRYIiwibW91c2VZIiwiY2xpZW50WSIsInRvIiwiY3VycmVudCIsIngiLCJ5Iiwib3BhY2l0eSIsImRlbGF5IiwiaGlkZUN1cnNvciIsInNob3dDdXJzb3IiLCJpZCIsInN0cmF0ZWd5Iiwic3JjIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1MiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();