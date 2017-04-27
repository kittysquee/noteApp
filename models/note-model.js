(function(exports) {

  function Note(text) {
    this.text = text;
    this.id = undefined;
  }

  Note.prototype.returnText = function() {
    return this.text;
  };

  Note.prototype.addId = function(id) {
    this.id = id;
  };

  exports.Note = Note;
})(this);
