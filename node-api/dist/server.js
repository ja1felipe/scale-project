"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetupServer = void 0;

var _core = require("@overnightjs/core");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _expressPinoLogger = _interopRequireDefault(require("express-pino-logger"));

var _apiSchema = _interopRequireDefault(require("./api-schema.json"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _cors = _interopRequireDefault(require("cors"));

var _MatchControler = require("./controllers/MatchControler");

var database = _interopRequireWildcard(require("./database"));

var _logger = _interopRequireDefault(require("./logger"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SetupServer extends _core.Server {
  constructor(port = 3000) {
    super();
    this.port = port;
  }

  async init() {
    this.setupExpress();
    this.setupControllers();
    await this.setupDatabase();
  }

  setupExpress() {
    this.app.use(_bodyParser.default.json());
    this.app.use((0, _expressPinoLogger.default)({
      logger: _logger.default
    }));
    this.app.use((0, _cors.default)());
    this.app.use('/docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_apiSchema.default));
  }

  setupControllers() {
    const matchController = new _MatchControler.MatchControler();
    this.addControllers([matchController]);
  }

  getApp() {
    return this.app;
  }

  async setupDatabase() {
    await database.connect();
  }

  async close() {
    await database.close();
  }

  async start() {
    this.app.listen(this.port, () => {
      _logger.default.info('App is listening in port:' + this.port);
    });
  }

}

exports.SetupServer = SetupServer;