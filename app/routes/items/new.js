import Ember from 'ember';

export default Ember.Route.extend({

    model: function(){
        return this.store.createRecord('item');
    },

    // if back button is pressed, clean up uncommitted edits
    deactivate: function () {
        var model = this.modelFor('items.new');
        if (model && model.get('isDirty') && !model.get('isSaving')) {
            model.rollback();
        }
    },

    actions: {

        // exit without changing anything
        cancel: function (item) {
            item.rollback();
            this.transitionTo('items.index');
        },

        // save item instance into data store and return to items list
        save: function (item) {
            var self = this;
            item.save().then(function () {
                self.transitionTo('items.index');
            });
        }
    }
});
