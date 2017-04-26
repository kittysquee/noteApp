function singleNoteViewTest() {
  var note = new Note("text");
  var noteView = new NoteView(note);
  assert.isTrue(noteView.viewNote().includes("<li>text</li>"));
}
singleNoteViewTest();
