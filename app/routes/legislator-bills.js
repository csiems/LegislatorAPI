import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var bills = [];
    var url = 'http://congress.api.sunlightfoundation.com/bills?history.active=true&order=last_action_at&sponsor_id=' + params.bioguide_id + '&apikey=988b07b488ba4e6f9745b062644ea9ba&per_page=50'
    return Ember.$.getJSON(url).then(function(responseJSON) {
      responseJSON.results.forEach(function(bill) {
        bills.push(bill);
      });

      return bills;
    });
  },
});
