import Component from '@ember/component';
import {filterBy} from '@ember/object/computed'

export default Component.extend ({
    active: filterBy("model","isCompleted",false),
    
});
