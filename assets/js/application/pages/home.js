App.Page.extend({
  name: "pages/home",
  init_functions: [
    'setup',
  ],

  setup: function() {
    this.components = c = {}

    c.text = {
      heading: 'Text',
      img_url: 'images/text_sm.png',
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
      img_url: 'images/push_button_sm.jpg',
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
      img_url: 'images/b737_switches_sm.jpeg',
      attributes: new App.Model({class:'home-card'}),
      content: "Variations of polymer toggle controls.",
      footer: "views/home/card/footer",
      footer_data: {
        route: '/elements/toggles',
      },
    };
  },
});
