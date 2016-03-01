import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var committees = [];
    var url = 'http://congress.api.sunlightfoundation.com/committees?member_ids=' + params.bioguide_id + '&apikey=988b07b488ba4e6f9745b062644ea9ba';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      responseJSON.results.forEach(function(committee) {
        committees.push(committee);
      });
      function compare(a,b) {
        if (a.name < b.name)
          return -1;
        else if (a.name > b.name)
          return 1;
        else
          return 0;
      }

      committees.sort(compare);
      return committees;
    });
  },
});
