const { Cart } = require('./pageComponents/ShoppingCart');
const { Search } = require('./pageComponents/SearchPage');
const { MainPage } = require('./MainPage');
const { ItemPage } = require('./ItemPage');
const { LoginPage } = require('./pageComponents/LoginPage');
const { LeftNavBar } = require('./LeftNavBar');
const { SectionPage } = require('./SelectionPage');
const { BooksSection } = require('./BooksSection');
const { PersonalAccount } = require('./pageComponents/PersonalAccountPage');

class PageFactory {
  static Search = new Search();

  static 'Item Page' = new ItemPage();

  static 'Left Navigation Bar' = new LeftNavBar();

  static 'Section Page' = new SectionPage();

  static 'Books Section' = new BooksSection();

  static 'Login Page' = new LoginPage();

  static 'Personal Account' = new PersonalAccount();

  static Cart = new Cart();

  static 'Main Page' = new MainPage();
}

module.exports = { PageFactory };
