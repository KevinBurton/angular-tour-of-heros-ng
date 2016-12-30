import { AngularTourOfHerosNgPage } from './app.po';

describe('angular-tour-of-heros-ng App', function() {
  let page: AngularTourOfHerosNgPage;

  beforeEach(() => {
    page = new AngularTourOfHerosNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
