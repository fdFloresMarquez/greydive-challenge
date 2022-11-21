import DATA from '@/db/dataset.json';
import { Test } from '@/types';

export const api = {
  tests: {
    list: async (): Promise<Test[]> => {
      return DATA;
    },
  },
  test: {
    // I choosed to use index as an id since the db.json has repeated ID values
    getById: async (id: number): Promise<Test> => {
      if (id > DATA.length) {
        throw new Error('The id does not exist in the database');
      }

      return DATA[id - 1];
    },
  },
};
