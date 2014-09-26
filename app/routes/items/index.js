// routes/items.js
import Ember from 'ember';

export default Ember.Route.extend({

    // set model
    model: function(){
        return this.modelFor('application');
    }
});
