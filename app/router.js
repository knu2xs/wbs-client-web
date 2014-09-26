// router.js
import Ember from 'ember';

var Router = Ember.Router.extend({
    location: EmberWbsENV.locationType
});

Router.map(function () {
    this.route('index', { path: '/' });
    this.resource('items', function(){
        this.resource('edit', { path: '/:item_id/edit' });
        this.resource('new', { path: '/items/new' });
    });
});

export default Router;
