'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _account = require('../model/account');

var _account2 = _interopRequireDefault(_account);

var _person = require('../model/person');

var _person2 = _interopRequireDefault(_person);

var _express = require('express');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;


    var api = (0, _express.Router)();

    api.post('/add', function (req, res) {
        var acc = new _account2.default();
        acc.email = req.body.email;
        acc.password = req.body.password;
        acc.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: "stored" });
        });
    });

    api.get('/get', function (req, res) {
        _account2.default.find({}, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    });

    api.get('/get/:email', function (req, res) {
        _account2.default.findOne({ email: req.params.email }, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    });

    api.put('/update/:email', function (req, res) {
        _account2.default.findOne({ email: req.params.email }, function (err, data) {
            if (err) {
                res.send(err);
            }
            data.email = req.body.email;
            data.password = req.body.password;
            data.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.send('updated');
            });
        });
    });

    api.delete('/delete/:email', function (req, res) {
        _account2.default.remove({ email: req.params.email }, function (err) {
            if (err) {
                res.send(err);
            }
            res.send("deleted");
        });
    });

    api.post('/addperson/:email', function (req, res) {
        _account2.default.findOne({ email: req.params.email }, function (err, data) {
            if (err) {
                res.send(err);
            }
            var per = new _person2.default();
            per.name = req.body.name;
            per.age = req.body.age;
            per.account = data._id;
            per.save(function (err) {
                if (err) {
                    res.send(err);
                }
            });
            data.persons.push(per);
            data.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.send('person added');
            });
        });
    });

    api.get('/getperson/:id', function (req, res) {
        _person2.default.find({ account: req.params.id }, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    });

    api.get('/getperson', function (req, res) {
        _person2.default.find({}, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    });
    return api;
};
//# sourceMappingURL=account.js.map