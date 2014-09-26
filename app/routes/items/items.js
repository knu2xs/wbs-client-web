import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        this.store.find('item"');
    },

    actions: {

        // exit without changing anything
        cancel: function(item) {
            item.rollback();
            this.transitionTo('items.index');
        },

        // enter the new dialog with a new item instance

        // enter the edit dialog
        edit: function(item){
            this.transitionTo('items.edit', item);
        },


    }
});
