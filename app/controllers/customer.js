import Controller from '@ember/controller';
import DS from 'ember-data';

export default Controller.extend({
    errors:DS.Errors.create(),
    actions:{
        store(e,m){
            if(this.validate()){
            console.log('submited');
            var cust=this.get('c');
            console.log(cust);

            let post = this.store.createRecord('customer', {
                customer:cust,
                email:e,
                mobile:m
              });
        
              post.save()
        }
    }
    },
    validate:function(){
        this.set('errors',DS.Errors.create());
        if(this.get('c') === ''|| this.get('c') === undefined ){
            this.get('errors').add('NAME',"can't be empty");
        }
        
        if(this.get('e') === ''|| this.get('e') === undefined ){
            this.get('errors').add('EMAILID',"can't be empty");
           
        }
        if(!this.get('e') === /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]$/){
            this.get('errors').add('EMAILID',"EMAILID is invlid");
        }
        if(this.get('m') === ''|| this.get('m') === undefined ){
            this.get('errors').add('MOBILE',"can't be empty");
        }
        
         
return this.get('errors.isEmpty');
    }
});
