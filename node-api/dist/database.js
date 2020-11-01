"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.connect = void 0;

var _config = _interopRequireDefault(require("config"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dbConfig = _config.default.get('App.database');

const connect = async () => await _mongoose.default.connect(dbConfig.get('mongoURI'), {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

exports.connect = connect;

const close = () => _mongoose.default.connection.close();

exports.close = close;