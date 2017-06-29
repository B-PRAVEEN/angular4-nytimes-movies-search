import { ZillionPage } from './app.po';

describe('zillion App', () => {
  let page: ZillionPage;

  beforeEach(() => {
    page = new ZillionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
