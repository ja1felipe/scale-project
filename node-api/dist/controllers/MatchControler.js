"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MatchControler = void 0;

var _core = require("@overnightjs/core");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _match = require("../services/match");

var _dec, _dec2, _dec3, _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let MatchControler = (_dec = (0, _core.Controller)('matchs'), _dec2 = (0, _core.Post)(''), _dec3 = (0, _core.Get)(''), _dec(_class = (_class2 = class MatchControler {
  async create(req, res) {
    try {
      const {
        name,
        attempts,
        time,
        number
      } = req.body;
      const matchService = new _match.MatchService();
      const match = await matchService.createMatch(name, attempts, time, number);
      res.status(201).send(match);
    } catch (err) {
      if (err instanceof _mongoose.default.Error.ValidationError) {
        res.status(422).send({
          error: err.message
        });
      } else {
        res.status(500).send({
          error: err.message
        });
      }
    }
  }

  async list(req, res) {
    try {
      const {
        page
      } = req.query;
      const matchService = new _match.MatchService();
      const data = await matchService.listMatchs(Number(page));
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send({
        error: err.message
      });
    }
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "create", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "create"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "list", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "list"), _class2.prototype)), _class2)) || _class);
exports.MatchControler = MatchControler;