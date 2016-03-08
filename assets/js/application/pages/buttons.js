App.Page.extend({
  name: 'pages/buttons',
  init_functions: [
    'setup',
  ],

  setup: function() {
    this.components = c = {}
    var disabled = new App.Model({class:'monkey_cheese', monkey: "cheese"});
    window.attrs = disabled;

    c.one = {
      text: 'Press',
      icon: 'arrow-downward',
      button_color: 'primary',
      text_color: 'white',
      attributes: disabled,
    };

    c.icon = {
      icon: "flight-takeoff",
      button_color: 'accent',
      event_handler: function() {
        console.log('flight takeoff');
      },
      attributes: disabled,
    };
  },
});
