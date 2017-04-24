(function(exports) {

  function Note() {
    this.noteArray = [];
  }

  Note.prototype.addNote = function(string) {
    this.noteArray.push(string);
  }

  Note.prototype.printNote = function() {
    var lastItem = this.noteArray[this.noteArray.length-1];
    return lastItem;
  }

  exports.Note = Note;
})(this);