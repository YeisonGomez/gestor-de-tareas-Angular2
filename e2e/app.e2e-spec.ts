import { GestorDeTareasPage } from './app.po';

describe('gestor-de-tareas App', function() {
  let page: GestorDeTareasPage;

  beforeEach(() => {
    page = new GestorDeTareasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
