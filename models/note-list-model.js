(function(exports) {

  function List() {
    this.notes = [];
  }

  List.prototype.addNote = function(text) {
    var newNote = new Note(text);
    this.notes.push(newNote);
  };

  List.prototype.printNote = function() {
    for(var i = 0; i < this.notes.length; i++){
      return this.notes[i].returnText();
    }
  };

  exports.List = List;
})(this);
