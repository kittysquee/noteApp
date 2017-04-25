function listViewTest() {
  var list = new List();
  list.addNote("Euge");
  var listView = new ListView(list);
  assert.isTrue(listView.htmlConverter() === '<ul><li>Euge</li></ul>')
};
listViewTest();
