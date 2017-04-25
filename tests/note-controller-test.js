function testNoteController() {
  var listView = "stub"
  var noteController = new NoteController(listView);
  assert.isTrue(noteController.listView === listView)
};
testNoteController();
