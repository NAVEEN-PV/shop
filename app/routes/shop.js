import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
 
    model() {
        return Ember.RSVP.hash({
            shop: this.store.findAll('shop'),
            bill: this.store.findAll('bill')
        });
       
      },
});
