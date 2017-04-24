(function(exports) {

  function Note() {
    this.noteArray = [];
  }

  Note.prototype.addNote = function(string) {
    this.noteArray.push(string);
  }

  exports.Note = Note;
})(this);