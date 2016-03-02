import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('legislator-committees', {path: '/committees/:bioguide_id'});
  this.route('legislator-bills', {path: '/bills/:bioguide_id'});
});

export default Router;
