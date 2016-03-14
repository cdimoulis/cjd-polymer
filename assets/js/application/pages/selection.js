App.Page.extend({
  name: "pages/selection",
  init_functions: [
    'setup',
    'setupMenus',
  ],

  setup: function() {
    var model = new App.Model({
      item_1: "First",
      item_2: "Second",
      item_3: "Third",
    });
    this.components = c = {};
    window.model = model;

    c.item_1 = {
      model: model,
      attribute: "item_1",
    };
    c.item_2 = {
      model: model,
      attribute: "item_2",
    };
    c.item_3 = {
      model: model,
      attribute: "item_3",
    };

    c.item_view_1 = {
      view: "views/selection/item/item_view_1",
      view_data: {
        text: "home",
        icon: "home",
      },
    };
    c.item_view_2 = {
      view: "views/selection/item/item_view_1",
      view_data: {
        text: "vacation",
        icon: "flight-takeoff",
      },
    };
    c.item_view_3 = {
      view: "views/selection/item/item_view_1",
      view_data: {
        text: "work",
        icon: "work",
      },
    };

    c.item_view_body_1 = {
      view: "views/selection/item/item_view_2",
      view_data: {
        primary: "Primary Title",
        secondary: "Some info about that",
      },
    };
    c.item_view_body_2 = {
      view: "views/selection/item/item_view_2",
      view_data: {
        primary: "Check Notes",
        secondary: "Make sure you are right",
      },
    };
    c.item_view_body_3 = {
      view: "views/selection/item/item_view_2",
      view_data: {
        primary: "Do Something",
        secondary: "Because this is boring",
      },
    };
  },

  setupMenus: function() {
    var collection = new App.Collection([
      {text: "One"},
      {text: "Two"},
      {text: "Three"},
    ]);
    var selected = new App.Collection();
    var c = this.components;
    window.collection = collection;
    window.selected = selected;

    c.menu = {
      collection: collection,
      attribute: 'text',
      selected: selected,
    };
  }
});
