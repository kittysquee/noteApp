(function(exports) {

  function Note(text) {
    this.text = text;
    this.id = undefined;
  }

  Note.prototype.returnText = function() {
    return this.text;
  };

  Note.prototype.addId = function() {
    this.id = 0;
  };

  exports.Note = Note;
})(this);
