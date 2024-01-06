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

  async isSliderDisplayed() {
    const slider = await $(this.sliderSelector);
    return slider.isDisplayed();
  }

  async isCarCountDisplayed() {
    const carCount = await $(this.carCountSelector);
    return carCount.isDisplayed();
  }
}

module.exports = { MainPage };
