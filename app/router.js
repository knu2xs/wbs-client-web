import Ember from 'ember';

var Router = Ember.Router.extend({
    location: EmberWbsENV.locationType
});

Router.map(function () {
    this.route('index', { path: '/' });
    this.route('items');
    this.resource('edit', { path: 'items/:item_id/edit' });
    this.route('new', { path: 'items/new' });
});

export default Router;
