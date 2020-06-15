import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
 
    model() {
        return this.store.findAll('customer')
      },
      setupController:function(controller,model){
          controller.set('customer',model);
      }
});
