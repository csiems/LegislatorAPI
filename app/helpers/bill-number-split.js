import Ember from 'ember';

export function billNumberSplit(params/*, hash*/) {
  return params[0].split('-')[0].toUpperCase();
}

export default Ember.Helper.helper(billNumberSplit);
