    var list = new List();
    list.addNote("Favourite drink: seltzer");
    list.addNote("Cucumber");
    var controller = new NoteController(list);
    controller.sendToIndex();
