import DS from 'ember-data';

export default DS.Model.extend({
  card: DS.attr('string'),
  cvv:DS.attr('number'),
  expiredate:DS.attr('number')
});
