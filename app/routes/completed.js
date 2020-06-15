import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('todo');
  },
  renderTemplete(){
    this.render('completed',{
        into:'todo',
      outlet:'completed'
    });
  }
});