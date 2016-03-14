App.Page.extend({
  name: "pages/selection",
  init_functions: [
    'setup',
  ],

  setup: function() {
    this.components = c = {};

    c.item_1 = {
      text: "First",
    };
    c.item_2 = {
      text: "Second",
    };
    c.item_3 = {
      text: "Third",
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
});
