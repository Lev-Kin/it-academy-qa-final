class MainPage {
  get 'Slider Links'() {
    return '.offers-slider__pagination__item span';
  }

  get 'Category Goods'() {
    return '.b-mpgs-header h2 a';
  }

  get 'Stationery Main Menu'() {
    return '#staticmenu_body_business li a';
  }

  get 'Books Main Menu'() {
    return '#staticmenu_body_books li a';
  }

  get 'Up Button'() {
    return '.up-btn.up-btn_visible';
  }
}

module.exports = { MainPage };
