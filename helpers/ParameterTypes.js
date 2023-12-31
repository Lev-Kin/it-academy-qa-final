const { defineParameterType } = require('@wdio/cucumber-framework');
const { Utils } = require('./Utils');
const { PageFactory } = require('../features/pageobjects/PageFactory');

// Функция для парсинга опций позиции
const parsePositionOption = (position) => {
  if (!position) return { array: false };

  switch (position.toLowerCase()) {
    case 'each ':
    case 'every ':
    case 'all ':
      return { array: true };
    default:
      return parseInt(position, 10) ? { array: true, position: parseInt(position, 10) - 1 } : { array: false };
  }
};

// Парсинг локаторов
defineParameterType({
  regexp: /"([^"\\]*(\\.[^"\\]*)*)"/,
  name: 'locator',
  transformer: (string) => Utils.poParser(string.split(' > '), PageFactory),
  useForSnippets: false,
});

// Парсинг опций позиции локаторов
defineParameterType({
  regexp: /[eE]ach |[eE]very |[aA]ll |[0-9]*-[th|st|nd|rd]* |[0-9]* |[Ll]ast |/,
  name: 'locatorOptions',
  transformer: parsePositionOption,
  useForSnippets: false,
});

// Парсинг позиции локатора
defineParameterType({
  regexp: /[0-9]*-[th|st|nd|rd]* |[0-9]* |last |/,
  name: 'locatorPosition',
  transformer: parsePositionOption,
  useForSnippets: false,
});

// Парсинг условий ожидания
defineParameterType({
  regexp: /exist|be enabled|be displayed|be clickable|be focused|be displayed in viewport/,
  name: 'waitCondition',
  transformer(condition) {
    const CONDITIONS = {
      exist: 'waitForExist',
      'be enabled': 'waitForEnabled',
      'be displayed': 'waitForDisplayed',
      'be clickable': 'waitForClickable',
      'be focused': 'waitForElementFocused',
      'be displayed in viewport': 'waitForElementDisplayedInViewport',
    };
    return CONDITIONS[condition];
  },
  useForSnippets: false,
});

// Парсинг условий проверки
defineParameterType({
  regexp: /be displayed|be clickable|be focused|exist|be displayed in viewport/,
  name: 'expectCondition',
  transformer(condition) {
    const CONDITIONS = {
      'be displayed': 'isDisplayed',
      'be clickable': 'isClickable',
      exist: 'isExisting',
      'be focused': 'isFocused',
      'be displayed in viewport': 'isDisplayedInViewport',
    };
    return CONDITIONS[condition];
  },
  useForSnippets: false,
});

// Парсинг числовых значений
defineParameterType({
  regexp: /[0-9]+|\$[a-zA-Z]+/,
  name: 'number',
  transformer(number) {
    if (number.startsWith('$')) {
      return this[number.slice(1)]; // Использование переменных из контекста
    }
    return parseInt(number, 10); // Преобразование строки в число
  },
  useForSnippets: false,
});

// Парсинг текстовых значений
defineParameterType({
  regexp: /"([^"\\]*(\\.[^"\\]*)*)"/,
  name: 'text',
  useForSnippets: false,
  transformer(textString) {
    return textString;
  },
});
