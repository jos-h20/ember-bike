import Ember from 'ember';

export default Ember.Component.extend({
  newProductForm: false,
  actions: {
    newProductFormShow(){
      this.set('newProductForm', true);
    },
    addProduct(){
      var params = {
        title: this.get('title') ? this.get('title'): "",
        description: this.get('description') ? this.get('description'): "",
        image: this.get('image') ? this.get('image'): "",
        cost: parseInt(this.get('cost')) ? this.get('cost'): "",
        rating: parseInt(this.get('rating')),
      };
      this.set('newProductForm', false);
      this.sendAction('addProduct', params);
    }
  }
});
