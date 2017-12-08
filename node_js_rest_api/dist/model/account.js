'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _person = require('./person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var Account = new Schema({
  email: String,
  password: String,
  persons: [{
    type: Schema.Types.ObjectId,
    ref: 'person'
  }]
});

module.exports = _mongoose2.default.model('account', Account);
//# sourceMappingURL=account.js.map