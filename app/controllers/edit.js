//
import Ember from 'ember';

export default Ember.ObjectController.extend({
    // variables for form values
    wbsCode: this.get('model.code'),
    wbsAbbrev: this.get('model.abbrev'),
    wbsDesc: this.get('model.desc'),
    wbsIsSuffix: this.get('model.isSuffix'),

    actions: {

        // exit without changing anything
        cancel: function () {
            this.transitionToRoute('items');
        },

        // process new wbs item submissions
        save: function () {

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
