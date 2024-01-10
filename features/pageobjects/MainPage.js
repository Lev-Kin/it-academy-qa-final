class MainPage {
  constructor() {
    this.sliderSelector = '.offers-slider__area__ul';
    this.carCountSelector = '#cart-count';
  }

  get 'Main Slider'() {
    return '.offers-slider__area__ul';
  }

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

  get 'Car Count'() {
    return '#cart-count';
  }

  async isElementDisplayed(element) {
    let elementCheck = '';
    if (element === 'slider') {
      elementCheck = await $(this.sliderSelector);
    } else {
      elementCheck = await $(this.carCountSelector);
    }

    return elementCheck.isDisplayed();
  }
}

module.exports = { MainPage };
