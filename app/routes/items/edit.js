// routes/edit.js
import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        return this.store.find('item', params.item_id);
    },
    setupController: function(controller, item) {
        controller.set('model', item);
    }
});
