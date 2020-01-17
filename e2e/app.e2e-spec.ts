import { CAAppPage } from './app.po';

describe('ca-app App', function() {
  let page: CAAppPage;

  beforeEach(() => {
    page = new CAAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
