import Ember from 'ember';

export default Ember.Route.extend({
    // variables for form values
    wbsCode: '',
    wbsAbbrev: '',
    wbsDesc: '',
    wbsIsSuffix: false,

    actions: {

        // exit without changing anything
        cancel: function(item) {
            item.rollback();
            this.transitionToRoute('items');
        },

        // go to edit dialog for item
        edit: function(item) {

            // set values from form to current instance model
            this.set('code', this.wbsCode);
            this.set('abbrev', this.wbsAbbrev);
            this.set('desc', this.wbsDesc);
            this.set('isSuffix', this.wbsIsSuffix);

            // save item instance into data store and return to items list
            item.save().then(function () {
                this.transitionToRoute('items');
            });
        },

        // remove the current wbs item
        remove: function(item) {
            item.destroyRecord();
            this.transitionToRoute('items');
        }
    }
});
