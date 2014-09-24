import Ember from 'ember';

export default Ember.Controller.extend({

    // variables to store form field values
    wbsCode: '',
    wbsAbbrev: '',
    wbsDesc: '',
    wbsIsSuffix: false,

    actions: {

        // cancel and return to items list
        cancel: function () {
            this.transitionToRoute('items');
        },

        // save the new item
        save: function () {

            // create new item instance
            var item = this.store.createRecord('item', {
                code: this.get('wbsCode'),
                abbrev: this.get('wbsAbbrev'),
                desc: this.get('wbsDesc'),
                isSuffix: this.get('wbsIsSuffix')
            });

            // reference this/self/controller
            var controller = this;

            // save and clear the form
            item.save().then(function () {

                // reset controller variables
                controller.set('wbsCode', '');
                controller.set('wbsAbbrev', '')
                controller.set('wbsDesc', '');
                controller.set('wbsIsSuffix', false);

                // return to items list
                controller.transitionToRoute('items');
            });
        }
    }
});
