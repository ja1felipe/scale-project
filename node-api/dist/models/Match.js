"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Match = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const matchSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  attempts: {
    type: Number,
    required: true
  },
  number: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    transform: (_, ret) => {
      ret.id = ret._id, delete ret._id;
      delete ret.__v;
    }
  }
});

const Match = _mongoose.default.model('Match', matchSchema);

exports.Match = Match;