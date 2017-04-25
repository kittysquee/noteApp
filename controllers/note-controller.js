(function(exports){
  function NoteController(list){
    this.listView = new ListView(list);
  }
  NoteController.prototype.sendToIndex = function() {
    document.getElementById('app').innerHTML = this.listView.htmlConverter();
  };
  exports.NoteController = NoteController;
})(this);
