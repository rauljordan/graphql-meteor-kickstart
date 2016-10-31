/* @flow */
import { CountItem } from '../data';
import { Viewer } from '/imports/server/viewer/data';
import type { CountType } from '../types';

export default {
  addCount(root: Object, args: Object, context: Object): ?CountType {
    const viewer = Viewer.genViewerFromId(context.userId);
    return CountItem.add(viewer);
  }
};
