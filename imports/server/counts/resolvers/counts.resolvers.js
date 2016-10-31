/* @flow */
import { CountItem } from '../data';
import type { CountType } from '../types';

export default {
  counts(
    root: Object, { sort }: { sort: string }, { userId }: { userId: string}
  ): Array<CountType> {
    if (sort === 'Biggest') {
      return CountItem.genAllCounts({sort: { createdAt: -1 }});
    }
    return CountItem.genAllCounts({sort: { createdAt: -1 }});
  }
};
