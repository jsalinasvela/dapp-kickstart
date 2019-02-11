'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _campaign = require('../../ethereum/campaign');

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