import Ember from 'ember';

export default Ember.ArrayController.extend({
    // properties for form data collection
    wbsCode: '',
    wbsAbbrev: '',
    wbsDesc: '',
    wbsIsSuffix: false,
    wbsSuffixes: '',

    // set sorting properties
    sortProperties: ['abbrev'],
    sortAscending: true,

    actions:{

        // process new wbs item submissions
        newWbs: function(){

            // create item instance and populate values using
            var item = this.store.createRecord('item', {
                code: this.get('wbsCode'),
                abbrev: this.get('wbsAbbrev'),
                desc: this.get('wbsDesc'),
                isSuffix: this.get('wbsIsSuffix')
            });

            // create reference to controller
            var controller = this;

            // save item instance into data store and clear form field values
            item.save().then(function(item){
                controller.set('wbsCode', '');
                controller.set('wbsAbbrev', '');
                controller.set('wbsDesc', '');
                controller.set('wbsIsSuffix', false);
            });
        },

        showEditModal: function(){
            Ember.$('#editModal').modal('show');
        }
    }
});
