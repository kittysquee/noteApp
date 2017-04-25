(function(exports) {

  function ListView(list) {
    this.list = list;
  };

  ListView.prototype.htmlConverter = function() {
    return '<ul><li><div>' + this.list.join('</div></li><li><div>') + '</div></li></ul>'
  };
  exports.ListView = ListView;
})(this);
