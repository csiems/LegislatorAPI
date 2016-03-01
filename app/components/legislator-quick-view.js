import Ember from 'ember';

export default Ember.Component.extend({
  isQuickViewShowing: false,

  actions: {
    showQuickView() {
      if (this.get('isQuickViewShowing')) {
        this.set('isQuickViewShowing', false);
      } else {
        this.set('isQuickViewShowing', true);
      }
      // console.log(this.get('isQuickViewShowing'))
    }
  }
});
