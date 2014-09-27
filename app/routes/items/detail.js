import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        edit: function(item){
            this.transitionTo('items.edit', item.id);
        }
    }
});
