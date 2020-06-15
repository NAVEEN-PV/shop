import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('todo',{path:'/'}, function() {
    this.route('active');
  });
  this.route('completed');
  this.route('shop');
  this.route('bill');
  this.route('customer');
  this.route('final');
  this.route('payment');
});

export default Router;
