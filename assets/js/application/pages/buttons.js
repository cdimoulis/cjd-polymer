App.Page.extend({
  name: 'pages/buttons',
  init_functions: [
    'setup',
  ],

  setup: function() {
    this.components = c = {}

    c.one = {
      text: 'Press',
      icon: 'arrow-downward',
      button_color: 'primary',
      text_color: 'white',
    }
  },
});
