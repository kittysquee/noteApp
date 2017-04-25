(function(exports) {

  function List() {
    this.notes = [];
  };

  List.prototype.addNote = function(note) {
    this.notes.push(note);
  };

  List.prototype.printNote = function() {
    for(var i = 0; i < this.notes.length; i++){
      return this.notes[i];
    }
  };

  exports.List = List;
})(this);
