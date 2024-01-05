class BooksSectionPage {
  get Bestsellers() {
    return '.landing-nav-list__item:nth-child(1)';
  }

  get 'Fiction Literature'() {
    return '.landing-nav-list__item:nth-child(3)';
  }
}

module.exports = { BooksSectionPage };
