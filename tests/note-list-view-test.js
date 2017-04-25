function listViewTest() {
  var list = new List();
  list.addNote("Euge");
  list.addNote("Elaine");
  var listView = new ListView(list.notes);
  assert.isTrue(listView.htmlConverter() === '<ul><li><div>Euge</div></li><li><div>Elaine</div></li></ul>')
};
listViewTest();
