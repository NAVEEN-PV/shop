import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return i + 1;
  },
  product(i) {
    return ` `;
  },
  quantity(i){
     return 0;
  },
  price(i){
      return 0;
  },
  cost(i){
      return 0;
  }
});
