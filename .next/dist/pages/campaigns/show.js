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

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/cesarsv93/Projects/www/dapp-kickstart/pages/campaigns/show.js?entry';


var CampaignShow = function (_React$Component) {
	(0, _inherits3.default)(CampaignShow, _React$Component);

	function CampaignShow() {
		(0, _classCallCheck3.default)(this, CampaignShow);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignShow, [{
		key: 'renderCards',
		value: function renderCards() {
			var _props = this.props,
			    minimumContribution = _props.minimumContribution,
			    balance = _props.balance,
			    requestCount = _props.requestCount,
			    approversCount = _props.approversCount,
			    manager = _props.manager;

			var items = [{
				header: manager,
				description: 'The manager created this campaign and can create requests.',
				meta: 'Address of manager',
				style: { overflowWrap: 'break-word' }
			}, {
				header: minimumContribution,
				description: 'You must contribute at least this much wei to become an approver',
				meta: 'Minimum Contribution',
				style: { overflowWrap: 'break-word' }
			}, {
				header: requestCount,
				description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers.',
				meta: 'Number of Requests',
				style: { overflowWrap: 'break-word' }
			}, {
				header: approversCount,
				description: 'Number of people who have already donated to this campaign',
				meta: 'Number of approvers',
				style: { overflowWrap: 'break-word' }
			}, {
				header: _web2.default.utils.fromWei(balance, 'ether'),
				description: 'The balance is how much money this campaign has left to spend.',
				meta: 'Campaign balance (ether)',
				style: { overflowWrap: 'break-word' }
			}];

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			}, 'Campaign Show'), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 91
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 93
				}
			}, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
					fileName: _jsxFileName,
					lineNumber: 96
				}
			}, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 97
				}
			}))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 101
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 102
				}
			}, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
					fileName: _jsxFileName,
					lineNumber: 103
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 104
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 105
				}
			}, 'View Requests')))))));
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
									address: props.query.address,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNvbnRyaWJ1dGVGb3JtIiwid2ViMyIsIkxpbmsiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwicmVxdWVzdENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJtYW5hZ2VyIiwiaXRlbXMiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsIm1ldGEiLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFNOztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBVzs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7O2dDQTBCUTtnQkFRUixLQVJRLEFBUUg7T0FSRyxBQUdYLDZCQUhXLEFBR1g7T0FIVyxBQUlYLGlCQUpXLEFBSVg7T0FKVyxBQUtYLHNCQUxXLEFBS1g7T0FMVyxBQU1YLHdCQU5XLEFBTVg7T0FOVyxBQU9YLGlCQVBXLEFBT1gsQUFHRDs7T0FBTTtZQUNMLEFBQ1ksQUFDUjtpQkFGSixBQUVpQixBQUNiO1VBSEosQUFHVSxBQUNOO1dBQU0sRUFBRSxjQUxDLEFBQ2IsQUFJVSxBQUFnQjtBQUoxQixBQUNJLElBRlM7WUFPYixBQUNZLEFBQ1I7aUJBRkosQUFFaUIsQUFDYjtVQUhKLEFBR1UsQUFDTjtXQUFNLEVBQUUsY0FYQyxBQU9iLEFBSVUsQUFBZ0I7QUFKMUIsQUFDSTtZQUtKLEFBQ1ksQUFDUjtpQkFGSixBQUVpQixBQUNiO1VBSEosQUFHVSxBQUNOO1dBQU0sRUFBRSxjQWpCQyxBQWFiLEFBSVUsQUFBZ0I7QUFKMUIsQUFDSTtZQUtKLEFBQ1ksQUFDUjtpQkFGSixBQUVpQixBQUNiO1VBSEosQUFHVSxBQUNOO1dBQU0sRUFBRSxjQXZCQyxBQW1CYixBQUlVLEFBQWdCO0FBSjFCLEFBQ0k7WUFNUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEL0IsQUFDWSxBQUE0QixBQUNwQztpQkFGSixBQUVpQixBQUNiO1VBSEosQUFHVSxBQUNOO1dBQU0sRUFBRSxjQTdCYixBQUFjLEFBeUJiLEFBSVUsQUFBZ0IsQUFLM0I7QUFUQyxBQUNJOzt3Q0FTSixBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO2VBQW5CO2lCQURELEFBQ0MsQUFHRDtBQUhDO0lBQUE7Ozs7MkJBS00sQUFFUDs7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUVBLGtDQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7ZUFBcEI7aUJBQUEsQUFDRTtBQURGO1dBREQsQUFDQyxBQUNFLEFBQUssQUFFUCxnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO2VBQXBCO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO2VBQXBDO2lCQU5ILEFBQ0MsQUFJQyxBQUNDLEFBSUY7QUFKRTt5QkFJRCxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztlQUFBO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMseUNBQU8sU0FBUjtlQUFBO2lCQUFBO0FBQUE7TUFsQlAsQUFDQyxBQUdDLEFBVUMsQUFDQyxBQUNDLEFBQ0MsQUFDQyxBQWFQOzs7Ozt3R0EzRzZCLEE7Ozs7O1lBQzdCO0FBRUE7O0FBRUE7O0FBRU07O0EsbUJBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQUFBcUIsQTs7ZUFFaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYSxBQUFqQixBQUE4Qjs7WUFBOUM7QTs7a0JBS0ksTUFBQSxBQUFNLE1BRFYsQUFDZ0IsQUFDckI7OEJBQXFCLFFBRmhCLEFBRWdCLEFBQVEsQUFDN0I7a0JBQVMsUUFISixBQUdJLEFBQVEsQUFDakI7dUJBQWMsUUFKVCxBQUlTLEFBQVEsQUFDdEI7eUJBQWUsUUFMVixBQUtVLEFBQVEsQUFDdkI7a0JBQVEsUUFOSCxBLEFBTUcsQUFBUTtBQU5YLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoQndCLGdCQUFNLEEsQUFpSGpDOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Nlc2Fyc3Y5My9Qcm9qZWN0cy93d3cvZGFwcC1raWNrc3RhcnQifQ==