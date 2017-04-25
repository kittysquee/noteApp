  function testNote() {
    var list = new List();
    list.addNote("Elaine loves cats");
    assert.isTrue(list.notes.includes("Elaine loves cats"));
  };

  function testPrintNote() {
    var list = new List();
    list.addNote("Hello");
    assert.isTrue(list.printNote().includes("Hello"));
  };

  testNote();
  testPrintNote();
