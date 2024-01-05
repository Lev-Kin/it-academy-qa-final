class Search {
  get 'Search Field'() {
    return '.ui-autocomplete-input';
  }

  get 'First Search Result'() {
    return 'search-form__submit';
  }

  get 'Invalid Search Result'() {
    return '.breadcrumbs__list__item span';
  }
}

module.exports = { Search };
