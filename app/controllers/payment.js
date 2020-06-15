import Controller from '@ember/controller';


export default Controller.extend({
    
    actions:{
        store(c,cvv,e){
            console.log('submited');
            let post = this.store.createRecord('payment', {
                card:c,
                cvv:cvv,
                expiredate:e,
              });
              post.save()
        }
        }
});