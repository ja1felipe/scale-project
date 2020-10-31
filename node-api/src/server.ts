import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';
import { MatchControler } from './controllers/MatchControler';
import * as database from './database';
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
}
