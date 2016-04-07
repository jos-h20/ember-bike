import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('product', {
      orderBy: 'rating',
      endAt: 0
    });
  }
});
