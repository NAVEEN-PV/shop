import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return i + 1;
  },
  card(i) {
    return ` `;
  },
  cvv(i){
     return '';
  },
  expiredate(i){
      return '';
  },
 
});