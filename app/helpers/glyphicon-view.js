import Ember from 'ember';

export function glyphiconView(params) {
  var flag = params[0];
  var classString = "";
  if (flag) {
    classString = 'glyphicon glyphicon-menu-down';
  } else {
    classString = 'glyphicon glyphicon-menu-right';
  }
  return classString;
}

export default Ember.Helper.helper(glyphiconView);
