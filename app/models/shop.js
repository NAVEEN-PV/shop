import DS from 'ember-data';

export default DS.Model.extend({
  product: DS.attr('string'),
  quantity:DS.attr('number'),
  price:DS.attr('number')
});
