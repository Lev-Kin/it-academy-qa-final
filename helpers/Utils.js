class Utils {
  static poParser(parts, pages) {
    const pageName = parts[0];
    const elementName = parts[parts.length - 1];
    let pageObject = pages[pageName];

    for (let i = 1; i < parts.length - 1; i++) {
      pageObject = pageObject[parts[i]];
      if (!pageObject) {
        throw new Error(`Element '${parts[i]}' not found in ${JSON.stringify(parts)}`);
      }
    }

    const locator = typeof pageObject === 'function' ? pageObject()[elementName] : pageObject[elementName];
    if (!locator) {
      throw new Error(`Locator for '${elementName}' not found`);
    }
    return locator;
  }
}

module.exports = Utils;
