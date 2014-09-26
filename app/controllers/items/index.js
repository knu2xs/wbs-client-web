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
        }
    }
});