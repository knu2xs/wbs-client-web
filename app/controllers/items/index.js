// app/controllers/items/index.js
import Ember from 'ember';

export default Ember.ArrayController.extend({
    // set sorting properties
    sortProperties: ['abbrev'],
    sortAscending: true,

    actions: {
        // go to edit page for item
        gotoEdit: function (item) {
            this.transitionToRoute('items.edit', item);
        },

        // remove the current wbs item
        remove: function (item) {
            var self = this;
            item.destroyRecord().then(function(){
                self.transitionTo('items.index');
            });
        }
    }
});