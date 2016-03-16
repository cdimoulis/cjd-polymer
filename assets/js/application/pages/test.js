App.Page.extend({
  name: "pages/test",
  dependencies: [
    'iron-image/iron-image.html',
    'paper-tooltip/paper-tooltip.html',
    'paper-badge/paper-badge.html',
    'paper-input/paper-input.html',
  ],
  init_functions: [
    'setup',
  ],

  setup: function() {
    model = new App.Model({
      text: 'My Text',
    });
    window.model = model;

    this.components = c = {};
    c.input = {
      model: model,
      attribute: 'text',
      label: 'Special Text',
      icon_prefix: 'home',
      text_suffix: 'bla bla bla',
      icon_suffix: 'mail',
      char_counter: true,
      icon_button: "close",
      icon_event_handler: function() {
        model.set('text','');
      },
    };
  },

});
