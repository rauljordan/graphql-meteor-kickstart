import { Counts } from '/lib/collections';

export default {
  counts(root, args, context) {
    return Counts.find({}).fetch();
  }
};
