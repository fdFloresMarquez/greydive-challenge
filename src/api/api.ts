import DATA from '@/db/dataset.json';
import { Test } from '@/types';

export const api = {
  tests: {
    list: async (): Promise<Test[]> => {
      return DATA;
    },
  },
};
