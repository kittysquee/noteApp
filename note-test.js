// var note = require("./note-model").note;
(function(exports) {
  function testNote() {
    var note = new Note();

    if (note.noteArray.length !== 0) {
      throw new Error("Notes array is not empty");
    } else {
      console.log("This test passes!");
    }
  };

  function testAddNote(){
    var note = new Note();
    note.addNote("Hello")

    if (note.noteArray[note.noteArray.length-1] !== "Hello") {
      throw new Error("It does not add notes to the array");
    } else {
      console.log("This test passes!");
    }
  };

  testNote();
  testAddNote();
})(this);


