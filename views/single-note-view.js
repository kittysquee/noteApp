(function(exports) {

  function NoteView(note) {
    this.note = note;
  }
  NoteView.prototype.viewNote = function() {
    return '<li>' + this.note.returnText() + '</li>';
  };
  exports.NoteView = NoteView;
})(this);
