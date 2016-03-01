import Ember from 'ember';

export default Ember.Route.extend({


  model: function(params) {
    var legislators = [];
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=988b07b488ba4e6f9745b062644ea9ba&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      responseJSON.results.forEach(function(legislator) {
        legislators.push(legislator);
      });
      return legislators;
    });
  },

});
