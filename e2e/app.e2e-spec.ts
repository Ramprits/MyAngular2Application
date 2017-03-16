import { MyAngular2ApplicationPage } from './app.po';

describe('my-angular2-application App', () => {
  let page: MyAngular2ApplicationPage;

  beforeEach(() => {
    page = new MyAngular2ApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
