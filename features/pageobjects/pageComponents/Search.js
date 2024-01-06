class Search {
  get 'Search Field'() {
    return '.ui-autocomplete-input';
  }

  get 'First Search Result'() {
    return '.ui-menu-item:nth-child(1) a';
  }

  get 'First Search Submit'() {
    return '.search-form__submit';
  }

  get 'First Search Results'() {
    return '.product-card__button.btn.btn-outline-primary.btn-sm';
  }

  get 'Invalid Search Result'() {
    return '.breadcrumbs__list__item span';
  }
}

module.exports = { Search };
