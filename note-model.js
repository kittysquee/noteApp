(function(exports) {

  function Note() {
    this.noteArray = [];
  }

  Note.prototype.addNote = function(string) {
    this.noteArray.push(string);
  }

  Note.prototype.printNote = function() {
    for(var i = 0; i < this.noteArray.length; i++){
      return this.noteArray[i];
    }
  };

  exports.Note = Note;
})(this);
