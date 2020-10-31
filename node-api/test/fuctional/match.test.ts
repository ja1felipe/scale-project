import { Match } from '../../src/models/Match';

describe('Match functional tests', () => {
  beforeAll(async () => await Match.deleteMany({}));

  it('should create a match with success', async () => {
    const { body, status } = await global.testRequest.post('/matchs').send({
      name: 'Felipe',
      time: 1000,
      attempts: 12,
      number: 113
    });

    const expectResponse = {
      name: 'Felipe',
      time: 1000,
      attempts: 12,
      number: 113
    };

    expect(status).toBe(201);
    expect(body).toEqual(expect.objectContaining(expectResponse));
  });

  it('should return error 422 validation error', async () => {
    const { status } = await global.testRequest.post('/matchs').send({
      name: 'Felipe',
      time: 'invalid string',
      attempts: 12,
      number: 113
    });

    expect(status).toBe(422);
  });

  it('should return a list of matchs ', async () => {
    await global.testRequest.post('/matchs').send({
      name: 'Felipe',
      time: 12,
      attempts: 12,
      number: 113
    });

    const { body, status } = await global.testRequest.get('/matchs?page=1');

    const expectResponse = {
      results: [
        {
          name: 'Felipe',
          time: 12,
          attempts: 12,
          number: 113
        },
        {
          name: 'Felipe',
          time: 1000,
          attempts: 12,
          number: 113
        }
      ],
      count: 2
    };

    expect(status).toBe(200);
    expect(body).toEqual(expect.objectContaining(expectResponse));
  });
});
