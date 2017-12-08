'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _account = require('./account');

var _account2 = _interopRequireDefault(_account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = _mongoose2.default.Schema;
var persons = new schema({
    name: String,
    age: Number,
    account: {
        type: schema.Types.ObjectId,
        ref: 'account'
    }
});

module.exports = _mongoose2.default.model('person', persons);
//# sourceMappingURL=person.js.map