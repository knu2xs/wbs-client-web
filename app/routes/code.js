import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        return this.store.get('item', { isSuffix: params.code_id });
    }
});
