import { AppPage } from './app.po';

describe('brinsk2 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display page header', () => {
    page.navigateTo('login');
    expect(page.getTextByElementSelector('h1')).toEqual('Login');
  });
});
