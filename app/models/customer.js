import DS from 'ember-data';

export default DS.Model.extend({
  customer: DS.attr('string'),
  email: DS.attr('string'),
  ph:DS.attr('string'),
  mobile:DS.attr('string')

  
});
