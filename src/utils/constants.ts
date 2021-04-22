import mockData from './mockData.json';

export enum QueryType {
  users = 'users',
  posts = 'posts',
}

export const Routes = {
  public: 'api/public',
  private: 'api/private',
};

export const makeFakeQuery = () => {
  return mockData;
};
