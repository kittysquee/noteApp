    var list = new List();
    list.addNote("Favourite drink: seltzer");
    list.addNote("Cucumber");
    var listView = new ListView(list);
    var controller = new NoteController(listView);
    controller.sendToIndex();
