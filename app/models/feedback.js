import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  eval: DS.attr(),
  rating: DS.attr(),
  product: DS.belongsTo('product', { async: true })
});
