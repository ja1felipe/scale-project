import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';
import expressPino from 'express-pino-logger';
import apiSchema from './api-schema.json';
import swagger from 'swagger-ui-express';
import cors from 'cors';
import { MatchControler } from './controllers/MatchControler';
import * as database from './database';
import logger from './logger';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    this.setupControllers();
    await this.setupDatabase();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(
      expressPino({
        logger
      })
    );
    this.app.use(cors());
    this.app.use('/docs', swagger.serve, swagger.setup(apiSchema));
  }
  private setupControllers(): void {
    const matchController = new MatchControler();
    this.addControllers([matchController]);
  }

  public getApp(): Application {
    return this.app;
  }

  public async setupDatabase(): Promise<void> {
    await database.connect();
  }

  public async close(): Promise<void> {
    await database.close();
  }

  public async start(): Promise<void> {
    this.app.listen(this.port, () => {
      logger.info('App is listening in port:' + this.port);
    });
  }
}
