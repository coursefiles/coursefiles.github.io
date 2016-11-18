import { CoursefilesPage } from './app.po';

describe('coursefiles App', function() {
  let page: CoursefilesPage;

  beforeEach(() => {
    page = new CoursefilesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
