import axios from 'axios';
import { IListResponse, IMatch } from '../types/types';

const connection = axios.create({ baseURL: 'http://localhost:8000' });

const api = {
  async create(
    name: string,
    attempts: number,
    time: number,
    number: number
  ): Promise<IMatch> {
    return new Promise((resolve, reject) => {
      connection
        .post('/matchs/', {
          name,
          attempts,
          time,
          number
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  },

  async list(page: number): Promise<IListResponse> {
    return new Promise((resolve, reject) => {
      connection
        .get(`/matchs?page=${page}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }
};

export default api;
