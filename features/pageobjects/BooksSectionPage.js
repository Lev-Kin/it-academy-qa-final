class BooksSectionPage {
  get 'Bestsellers'() {
    return '.landing-nav-list__item:nth-child(1)';
  }

  get 'Fiction Literature'() {
    return '.landing-nav-list__item:nth-child(3)';
  }

  get 'Header Title'() {
    return '.landing-header__title';
  }
}

module.exports = { BooksSectionPage };
