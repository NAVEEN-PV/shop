import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return i + 1;
  },
  customer(i) {
    return '';
  },
  ph(i){
     return '';
  },
  email(i){
      return '';
  },
  mobile(){
      return '';
  }
 
});