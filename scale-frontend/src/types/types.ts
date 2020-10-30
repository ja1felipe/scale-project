export interface IMatch {
  id: number;
  name: string;
  attempts: number;
  time: number;
  number: number;
}

export interface IListResponse {
  count: number;
  next: string;
  previus: string;
  results: IMatch[];
}
