App.Page.extend({
  name: "pages/home",
  init_functions: [
    'setup',
  ],

  setup: function() {
    this.components = c = {}

    c.text = {
      heading: 'Text',
      img_url: 'images/text.png',
      attributes: new App.Model({class:'home-card'}),
      content: "Variations of text inputs.",
      footer: "views/home/card/footer",
      footer_data: {
        route: '/elements/text',
      },
    };

    c.buttons = {
      heading: 'Buttons',
      heading_color: 'white',
      img_url: 'images/push_button.jpg',
      attributes: new App.Model({class:'home-card'}),
      content: "Variations of polymer buttons.",
      footer: "views/home/card/footer",
      footer_data: {
        route: '/elements/buttons',
      },
    };

    c.toggles = {
      heading: 'Toggles',
      heading_color: 'white',
      img_url: 'images/b737_switches.jpg',
      attributes: new App.Model({class:'home-card'}),
      content: "Variations of polymer toggle controls.",
      footer: "views/home/card/footer",
      footer_data: {
        route: '/elements/toggles',
      },
    };
  },
});
