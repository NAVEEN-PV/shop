import Route from '@ember/routing/route';

export default Route.extend({
 
    model() {
        return Ember.RSVP.hash({
            customer: this.store.findAll('customer'),
            bill: this.store.findAll('bill')
        });
       
      },
});
