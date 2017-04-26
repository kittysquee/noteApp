  function testNote() {
    var list = new List();
    list.addNote("Elaine loves cats");
    assert.isTrue(list.notes[0].returnText("Elaine loves cats"));
  }

  function testPrintNote() {
    var list = new List();
    list.addNote("Hello");
    assert.isTrue(list.printNote() === "Hello");
  }

  function testAddId() {
    var list = new List();
    list.addNote("Connie!");
    list.notes[0].addId();
    assert.isTrue(list.notes[0].id === 0);
  }

  testNote();
  testPrintNote();
  testAddId();
