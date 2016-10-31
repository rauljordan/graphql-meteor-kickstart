import { Meteor } from 'meteor/meteor';

export class Viewer {
  static genViewerFromId(_id) {
    return Meteor.users.findOne({_id});
  }
}
