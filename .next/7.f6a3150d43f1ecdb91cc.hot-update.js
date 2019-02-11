webpackHotUpdate(7,{

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _campaign = __webpack_require__(1203);

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/inmobitec/www/dapp-kickstart/pages/campaigns/show.js?entry';


var CampaignShow = function (_React$Component) {
	(0, _inherits3.default)(CampaignShow, _React$Component);

	function CampaignShow() {
		(0, _classCallCheck3.default)(this, CampaignShow);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignShow, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, 'Show Campaign !');
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var campaign, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								//static keyword is REQUIRED by Next.js

								//props is coming from next router

								//console.log(props);

								campaign = (0, _campaign2.default)(props.query.address);
								_context.next = 3;
								return campaign.methods.getSummary().call();

							case 3:
								summary = _context.sent;
								return _context.abrupt('return', {
									minimumContribution: summary[0],
									balance: summary[1],
									requestCount: summary[2],
									approversCount: summary[3],
									manager: summary[4]
								});

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignShow;
}(_react2.default.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FtcGFpZ24iLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsImNhbXBhaWduIiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwicmVxdWVzdENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJtYW5hZ2VyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBYzs7Ozs7Ozs7O0lBR2YsQTs7Ozs7Ozs7Ozs7MkJBeUJHLEFBRVA7OzBCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLElBQUEsRUFERCxBQUNDLEFBSUQ7Ozs7O3dHLEFBOUI2Qjs7Ozs7WUFDN0I7QUFFQTs7QUFFQTs7QUFFTTs7QSxtQkFBVyx3QkFBUyxNQUFBLEFBQU0sTUFBZixBQUFxQixBOztlQUVoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QixBOztZQUE5QztBOzs4QkFLZ0IsUUFEaEIsQUFDZ0IsQUFBUSxBQUM3QjtrQkFBUyxRQUZKLEFBRUksQUFBUSxBQUNqQjt1QkFBYyxRQUhULEFBR1MsQUFBUSxBQUN0Qjt5QkFBZSxRQUpWLEFBSVUsQUFBUSxBQUN2QjtrQkFBUSxRQUxILEFBS0csQUFBUSxBO0FBTFgsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhCd0IsZ0JBQU0sQSxBQW9DakM7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9pbm1vYml0ZWMvd3d3L2RhcHAta2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/inmobitec/www/dapp-kickstart/pages/campaigns/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/inmobitec/www/dapp-kickstart/pages/campaigns/show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5mNmEzMTUwZDQzZjFlY2RiOTFjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/Y2I0ZDdiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcblxuXG5jbGFzcyBDYW1wYWlnblNob3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHByb3BzKSB7XG5cdFx0Ly9zdGF0aWMga2V5d29yZCBpcyBSRVFVSVJFRCBieSBOZXh0LmpzXG5cblx0XHQvL3Byb3BzIGlzIGNvbWluZyBmcm9tIG5leHQgcm91dGVyXG5cblx0XHQvL2NvbnNvbGUubG9nKHByb3BzKTtcblxuXHRcdGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XG5cblx0XHRjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuXG5cdFx0Ly8gY29uc29sZS5sb2coc3VtbWFyeSk7XG5cblx0XHRyZXR1cm57XG5cdFx0XHRtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxuXHRcdFx0YmFsYW5jZTogc3VtbWFyeVsxXSxcblx0XHRcdHJlcXVlc3RDb3VudDogc3VtbWFyeVsyXSxcblx0XHRcdGFwcHJvdmVyc0NvdW50OnN1bW1hcnlbM10sXG5cdFx0XHRtYW5hZ2VyOnN1bW1hcnlbNF1cblx0XHR9XG5cdH1cblxuXG5cdHJlbmRlcigpe1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGgzPlNob3cgQ2FtcGFpZ24gITwvaDM+XG5cblx0XHQpO1xuXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQXpCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBOztBQUVBO0FBQ0E7QUFEQTs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWpCQTtBQUNBO0FBbUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=