/* @flow */
import { Counts } from '/lib/collections';
import type { CountType } from './types';

export class CountItem {
  static genAllCounts(options: Object): Array<CountType> {
    return Counts.find({}, options).fetch();
  }
  static add(viewer): ?CountType {
    if (!this.authorized(viewer)) {
      return null;
    }
    return {
      amount: 10,
      createdAt: new Date().toString(),
      superPrivatePassword: '1234',
      _id: '123123123'
    };
  }
  static authorized(viewer): boolean {
    return viewer ? true : false;
  }
}
