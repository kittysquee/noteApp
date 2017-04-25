(function(exports){
  function NoteController(listView){
    this.listView = listView;
  }
  NoteController.prototype.sendToIndex = function() {
    document.getElementById('app').innerHTML = this.listView.htmlConverter();
  };
  exports.NoteController = NoteController;
})(this);
