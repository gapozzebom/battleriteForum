import { BattleritePage } from './app.po';

describe('battlerite App', () => {
  let page: BattleritePage;

  beforeEach(() => {
    page = new BattleritePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
