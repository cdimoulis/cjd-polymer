App.Page.extend({
  name: 'pages/buttons',
  init_functions: [
    'setup',
  ],

  setup: function() {
    this.components = c = {}
    var disabled = new App.Model({disabled: true});
    window.attrs = disabled;

    c.flat = {
      text: 'Flat',
      raised: false,
    };

    c.flat_primary = {
      text: 'Flat_Primary',
      raised: false,
      button_color: 'primary',
      text_color: 'white',
    };

    c.flat_accent = {
      text: 'Flat_Accent',
      raised: false,
      button_color: 'accent',
    };

    c.button = {
      text: 'Press',
      event_handler: function(e) {
        console.log('button pressed');
      }
    };

    c.primary = {
      text: 'Press',
      icon: 'arrow-downward',
      button_color: 'primary',
      text_color: 'white',
    };

    c.accent = {
      text: 'Press',
      button_color: 'accent',
    };

    c.disabled = {
      text: 'Press',
      attributes: disabled,
    };

    c.icon = {
      icon: 'close',
    };

    c.icon_primary = {
      icon: "flight-takeoff",
      button_color: 'primary',
      icon_color: 'white',
    };

    c.icon_accent = {
      icon: "flight-land",
      button_color: 'accent',
      event_handler: function() {
        console.log('flight takeoff');
      },
    };

    c.icon_disabled = {
      icon: "alarm-on",
      attributes: disabled,
    };
  },
});
