const { Search } = require('./pageComponents/Search');
const { LoginPage } = require('./pageComponents/LoginPage');
const { MainPage } = require('./MainPage');
const { ItemPage } = require('./ItemPage');
const { LeftNavigationBar } = require('./LeftNavBar');
const { SectionPage } = require('./SectionPage');
const { BooksSectionPage } = require('./BooksSectionPage');

class PageFactory {
  static 'Search' = new Search();

  static 'Item Page' = new ItemPage();

  static 'Left Navigation Bar' = new LeftNavigationBar();

  static 'Section Page' = new SectionPage();

  static 'Books Section' = new BooksSectionPage();

  static 'Login Page' = new LoginPage();

  static 'Main Page' = new MainPage();
}

module.exports = { PageFactory };
