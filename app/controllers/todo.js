import Controller from '@ember/controller';


export default Controller.extend({
    
    actions:{
        add(text){
            event.preventDefault();

            let post = this.store.createRecord('todo', {
              title: text,
              isCompleted:false
            });
      
            post.save()
        },
        deletePost(todo) {
            let confirmed = window.confirm(
              'Are you sure you want to delete this post?'
            );
      
            if (confirmed) {
              todo.destroyRecord();
            }
          },
          completeTodo(params){
            event.preventDefault();
            this.store.findRecord('todo', params.id).then(function(todo){
                todo.get('isCompleted');
                todo.set('isCompleted',true);
                todo.save();
            })
          }
        
        }
});

