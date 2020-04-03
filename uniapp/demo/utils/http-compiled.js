'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Http = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('@/config.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Http = function () {
	function Http(arg) {
		_classCallCheck(this, Http);

		this.baseUrl = _config.config.base_url;
	}

	_createClass(Http, [{
		key: 'request',
		value: function request(_ref) {
			var _this = this;

			var url = _ref.url,
			    _ref$data = _ref.data,
			    data = _ref$data === undefined ? {} : _ref$data,
			    _ref$method = _ref.method,
			    method = _ref$method === undefined ? 'GET' : _ref$method;

			return new Promise(function (resolve, reject) {
				_this._request(url, resolve, reject, data, method);
			});
		}
	}, {
		key: '_request',
		value: function _request(url, resolve, reject) {
			var _this2 = this;

			var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
			var method = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'GET';

			uni.request({
				url: '' + this.baseUrl + url,
				method: method,
				data: data,
				header: {
					'content-type': 'application/json',
					'appId': _config.config.appId,
					'Authorization': uni.getStorageSync(_config.config.AUTH_TOKEN)
				},
				success: function success(res) {
					if (res.data) {
						var _success = res.data.status === 200 && (!res.data.code || res.data.code === '200');
						if (_success) {
							resolve(res.data);
						} else {
							reject(res.data.message);
							var error_code = res.data.code;
							var _message = res.data.message;
							_this2._show_error(error_code, _message);
						}
					} else {
						resolve(res.data);
					}
				},
				fail: function fail(err) {
					reject();
					_this2._show_error(err.message);
				}
			});
		}
	}, {
		key: '_show_error',
		value: function _show_error(error_code, _message) {
			uni.showToast({
				title: '' + _message,
				icon: 'none',
				duration: 2000
			});
		}
	}]);

	return Http;
}();

exports.Http = Http;
