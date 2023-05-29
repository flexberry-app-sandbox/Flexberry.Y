import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-y-client-l');
  this.route('i-i-s-y-client-e',
  { path: 'i-i-s-y-client-e/:id' });
  this.route('i-i-s-y-client-e.new',
  { path: 'i-i-s-y-client-e/new' });
  this.route('i-i-s-y-product-l');
  this.route('i-i-s-y-product-e',
  { path: 'i-i-s-y-product-e/:id' });
  this.route('i-i-s-y-product-e.new',
  { path: 'i-i-s-y-product-e/new' });
  this.route('i-i-s-y-sale-l');
  this.route('i-i-s-y-sale-e',
  { path: 'i-i-s-y-sale-e/:id' });
  this.route('i-i-s-y-sale-e.new',
  { path: 'i-i-s-y-sale-e/new' });
});

export default Router;
