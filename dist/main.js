/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("$(function() {\n    let books = [\n        {\n            title: \"フロントエンド開発入門　プロフェッショナルな開発ツールと設計・実装\",\n            image: \"https://images-na.ssl-images-amazon.com/images/I/81A9ki9YShL.jpg\",\n            author: \"安達 稜・武田 諭\",\n            overview: \"現代のフロントエンド開発の基礎を知ることができます。\"\n        },\n        {\n            title: \"リーダブルコード より良いコードを書くためのシンプルで実践的なテクニック\",\n            image: \"https://images-na.ssl-images-amazon.com/images/I/51MgH8Jmr3L.jpg\",\n            author: \"Dustin Boswell・Trevor Founcher 訳 角 征典\",\n            overview: \"読みやすく、理解しやすいコードを書くためのテクニックが詰まっています。\"\n        },\n    ]\n\n    function appendBook(book){\n        $(\"#js-book-list\").append($(\n            \"<li>\" + \n                \"<div>\" +\n                    \"<img src='\" + book.image + \"' alt='\" + book.title + \"'>\" +\n                    \"<div>\" +\n                        \"<div>\" +\n                            \"<h3>\" + book.title +\n                                \"<span>(\" + book.author + \")</span>\" +\n                            \"</h3>\" +\n                            \"<p>\" + book.overview + \"</p>\" +\n                        \"</div>\" +\n                    \"</div>\" +\n                \"</div>\" +\n            \"</li>\"\n        ))  \n    }\n\n    books.forEach(book => appendBook(book));\n\n    $(\"#js-add-book\").on(\"click\", function(){\n        let book = {\n            title: \"\",\n            image: \"\",\n            author: \"\",\n            overview: \"\"\n        }\n        book.title = $(\"add-book-form\").find(\"#id\").val();\n        books.push(book);\n        books.forEach(book => appendBook(book));\n    })\n});\n\n//# sourceURL=webpack://IntroductionToFrontendDevelopmentApp/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;