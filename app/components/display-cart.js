import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    remove(item) {
      this.get('shoppingCart').remove(item);
      }
    },
    empty() {
      this.get('shoppingCart').empty([]);
    }


});
