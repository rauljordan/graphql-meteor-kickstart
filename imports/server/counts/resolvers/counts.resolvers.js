import { Counts } from '/lib/collections';

export default {
  counts(root, { sort }, context) {
    if (sort === 'Biggest') {
      return Counts.find({}, { sort: { amount: -1 } }).fetch();
    }
    return Counts.find({}, { sort: { amount: 1 } }).fetch(); 
  }
};
