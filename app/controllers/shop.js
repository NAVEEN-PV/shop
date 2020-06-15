import Controller from '@ember/controller';


export default Controller.extend({
    
    actions:{
        add(selected){
            event.preventDefault();
            
                let post =this.store.createRecord('bill', {
                    product:null
                  });
            this.store.findRecord('shop', selected).then(function(shop){
               let x= shop.get('price');
               shop.get('quantity');
                shop.set('quantity',shop.price*x);
                shop.save(); 
                post.product=shop.product;
                post.price=shop.price;
        })
        post.save();
    }, updatePrice(params,kg){
        event.preventDefault();
        this.store.findRecord('bill',params.id).then(function(bill){
            let x=bill.get('price')
            bill.get('cost')
            bill.set('cost',kg*x);
            bill.save();
        })
      }
    
        }
});