import Ember from 'ember';

var Router = Ember.Router.extend({
    location: EmberWbsENV.locationType
});

Router.map(function () {
    this.route('items');
    this.resource('item', { path: 'items/:item_id' });
});

export default Router;
