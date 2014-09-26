// router.js
import Ember from 'ember';

var Router = Ember.Router.extend({
    location: EmberWbsENV.locationType
});

Router.map(function () {
    this.resource('items', function(){
        this.route('edit', { path: '/:item_id/edit' });
        this.route('new');
    });
});

export default Router;
