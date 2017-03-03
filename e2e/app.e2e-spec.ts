import { RifferreinertPage } from './app.po';

describe('rifferreinert App', () => {
  let page: RifferreinertPage;

  beforeEach(() => {
    page = new RifferreinertPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
