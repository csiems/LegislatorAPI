import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup() {
      var params = {
        zip: this.get('zip')
      };
      this.set('zip', '');
      this.sendAction('zipLookup', params);
    }
  }
});
