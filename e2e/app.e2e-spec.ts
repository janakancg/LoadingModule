import { LoadingModulePage } from './app.po';

describe('loading-module App', () => {
  let page: LoadingModulePage;

  beforeEach(() => {
    page = new LoadingModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
