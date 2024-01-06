class LeftNavigationBar {
  get 'Navigation Links'() {
    return '.menu-link-action.main-nav__list__item';
  }

  get 'Books Section'() {
    return '.main-nav__list__li_wnav:nth-child(2)';
  }

  get 'Stationery Section'() {
    return '.main-nav__list__li_wnav:nth-child(5)';
  }
}

module.exports = { LeftNavigationBar };
