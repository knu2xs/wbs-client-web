import Ember from 'ember';

export default Ember.ArrayController.extend({
    // set sorting properties
    sortProperties: ['abbrev'],
    sortAscending: true
});
