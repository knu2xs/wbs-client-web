import Ember from 'ember';

export default Ember.Route.extend({

    // set model
    model: function(){
        return this.store.find('item');
    },

    // variables for form values
    wbsCode: '',
    wbsAbbrev: '',
    wbsDesc: '',
    wbsIsSuffix: false,

    actions: {

        // exit without changing anything
        cancel: function () {
            this.transitionToRoute('items');
        },

        // process new wbs item submissions
        saveNew: function () {

            // set values from form to current instance model
            this.set('code', this.wbsCode);
            this.set('abbrev', this.wbsAbbrev);
            this.set('desc', this.wbsDesc);
            this.set('isSuffix', this.wbsIsSuffix);

            // save item instance into data store and return to items list
            this.save().then(function () {
                this.transitionToRoute('items');
            });

        },

        // remove the current wbs item
        remove: function () {
            // TODO: create delete/remove method
            this.transitionToRoute('items');
        }
    }
});
