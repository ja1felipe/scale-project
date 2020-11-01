"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MatchService = void 0;

var _logger = _interopRequireDefault(require("../logger"));

var _Match = require("../models/Match");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MatchService {
  async createMatch(name, attempts, time, number) {
    try {
      _logger.default.info(`Creating new match with name: ${name}, attempts: ${attempts}, time: ${time} and number: ${number}`);

      const match = await _Match.Match.create({
        name,
        attempts,
        time,
        number
      });
      return match;
    } catch (err) {
      _logger.default.error(err);

      throw err;
    }
  }

  async listMatchs(page) {
    try {
      _logger.default.info(`Fetching matchs on page ${page}`);

      const PAGE_SIZE = 5;
      const skip = (page - 1) * PAGE_SIZE;
      const matchs = await _Match.Match.find({}).skip(skip).limit(PAGE_SIZE).sort({
        time: 1
      });
      const count = await _Match.Match.find({}).countDocuments();
      return {
        results: matchs,
        count
      };
    } catch (err) {
      _logger.default.error(err);

      throw err;
    }
  }

}

exports.MatchService = MatchService;