'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {

	var campaign = new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);

	return campaign;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImFkZHJlc3MiLCJjYW1wYWlnbiIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBcUIsQUFBckIsQUFHQTs7Ozs7O2tCQUFlLFVBQUMsQUFBRCxTQUFhLEFBRTNCOztLQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2hCLEtBQUssQUFBTCxNQUFXLG1CQUFTLEFBQXBCLEFBRGdCLFlBRWhCLEFBRmdCLEFBQWpCLEFBS0E7O1FBQU8sQUFBUCxBQUVBO0FBVEQiLCJmaWxlIjoiY2FtcGFpZ24uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvaW5tb2JpdGVjL3d3dy9kYXBwLWtpY2tzdGFydCJ9