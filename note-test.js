  function testNote() {
    var note = new Note();
    note.addNote("Elaine loves cats");
    assert.isTrue(note.noteArray.includes("Elaine loves cats"));
  };

  function testPrintNote() {
    var note = new Note();
    note.addNote("Hello");
    note.printNote();
    assert.isTrue(note.printNote().includes("Hello"));
  };

  testNote();
  testPrintNote();
