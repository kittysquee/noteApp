function listViewTest() {
  var list = new List();
  list.addNote("Euge");
  var listView = new ListView(list);
  assert.isTrue(listView.htmlConverter() === '<ul><li>Euge</li></ul>');
}

function viewLimitedCharacters() {
  var list = new List();
  list.addNote("12345678912345678912 WE DONT WANT THIS TO BE TOOO LOOOOOOONG.");
  var listView = new ListView(list);
  assert.isTrue(listView.htmlConverter() === "<ul><li>12345678912345678912</li></ul>");
  }

listViewTest();
viewLimitedCharacters();
