import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return i + 1;
  },
  title(i) {
    return ` LEARN EMBER JS`;
  },
  isCompleted(i){
     return false
  }
});
