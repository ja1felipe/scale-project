"use strict";

var _server = require("./server");

var _config = _interopRequireDefault(require("config"));

var _logger = _interopRequireDefault(require("./logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.on('unhandledRejection', (reason, promise) => {
  _logger.default.error(`App exist due to an unhandled promise: ${promise} and reason: ${reason}`);

  throw reason;
});
process.on('uncaughtException', error => {
  _logger.default.error(`App exist due to an unhandled expection: ${error}`);

  process.exit(1);
});

(async () => {
  try {
    const server = new _server.SetupServer(_config.default.get('App.port'));
    await server.init();
    server.start();
    const exitSignals = ['SIGINT', 'SIGTERM', 'SIGQUIT'];

    for (const sig of exitSignals) {
      process.on(sig, async () => {
        try {
          await server.close();

          _logger.default.info(`App shutdown with success.`);

          process.exit(0);
        } catch (error) {
          _logger.default.error(`App shutdown with failure: ${error}`);

          process.exit(1);
        }
      });
    }
  } catch (error) {
    _logger.default.error(`App exited with error: ${error}`);

    process.exit(1);
  }
})();