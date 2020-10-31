import { Match } from '../models/Match';

interface IMatch {
  name: string;
  attempts: number;
  time: number;
  number: number;
}

interface IList {
  results: IMatch[];
  count: number;
}

export class MatchService {
  public async createMatch(
    name: string,
    attempts: number,
    time: number,
    number: number
  ): Promise<IMatch> {
    try {
      const match = await Match.create({
        name,
        attempts,
        time,
        number
      });

      return match;
    } catch (err) {
      throw err;
    }
  }

  public async listMatchs(page: number): Promise<IList> {
    try {
      const PAGE_SIZE = 5;
      const skip = (page - 1) * PAGE_SIZE;
      const matchs = await Match.find({})
        .skip(skip)
        .limit(PAGE_SIZE)
        .sort({ time: 1 });
      const count = await Match.find({}).countDocuments();
      return {
        results: matchs,
        count
      };
    } catch (err) {
      throw err;
    }
  }
}
