class ItemPage {
  get 'Product Name'() {
    return '.product-card__title';
  }

  get 'Add To Cart Button'() {
    return 'product-card__button btn btn-primary btn-sm';
  }
}

module.exports = { ItemPage };
