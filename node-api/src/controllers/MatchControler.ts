import { Get, Post, Controller } from '@overnightjs/core';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { MatchService } from '../services/match';

@Controller('matchs')
export class MatchControler {
  @Post('')
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { name, attempts, time, number } = req.body;

      const matchService = new MatchService();

      const match = await matchService.createMatch(
        name,
        attempts,
        time,
        number
      );

      res.status(201).send(match);
    } catch (err) {
      if (err instanceof mongoose.Error.ValidationError) {
        res.status(422).send({ error: err.message });
      } else {
        res.status(500).send({ error: err.message });
      }
    }
  }

  @Get('')
  public async list(req: Request, res: Response): Promise<void> {
    try {
      const { page } = req.params;

      const matchService = new MatchService();

      const data = await matchService.listMatchs(Number(page));

      res.status(200).send(data);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
}
