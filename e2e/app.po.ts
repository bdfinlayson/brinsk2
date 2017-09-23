import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path) {
    return browser.get(path);
  }

  getTextByElementSelector(selector) {
    return element(by.css(selector)).getText();
  }
}
