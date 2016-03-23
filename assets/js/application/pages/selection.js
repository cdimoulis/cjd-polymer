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
    var selected = new App.Collection([collection.first()]);
    var selected_multi = new App.Collection([collection.first(),collection.last()])
    var selected_sel = new App.Collection();
    var attrs_sel = new App.Model({disabled: true});
    var c = this.components;
    window.collection = collection;
    window.selected = selected;
    window.selected_multi = selected_multi;
    window.selected_sel = selected_sel;
    window.attrs_sel = attrs_sel;

    c.menu = {
      collection: collection,
      attribute: 'text',
      selected: selected,
    };

    c.menu_multi = {
      collection: collection,
      attribute: 'text',
      selected: selected_multi,
      multi: true,
    };

    c.selection = {
      collection: collection,
      attribute: 'text',
      selected: selected_sel,
      label: 'Select Number',
    };

    c.selection_disabled = {
      collection: collection,
      attribute: 'text',
      selected: new App.Collection(),
      label: 'Disabled',
      attributes: attrs_sel,
    };
  }
});
