App.Page.extend({
  name: 'pages/toggles',
  init_functions: [
    'setup',
  ],

  setup: function() {
    this.components = c = {};
    var model = new App.Model({group: 'second'});
    var attrs = new App.Model({disabled: true});
    window.model = model;
    window.attrs = attrs;

    c.checkbox = {
      model: model,
      attribute: 'checkbox',
      label: 'Checkbox',
    };

    c.checkbox_disabled = {
      model: model,
      attribute: 'checkbox_disabled',
      label: 'Disabled',
      attributes: attrs,
    };

    c.radio = {
      model: model,
      attribute: 'radio',
      value: 'pizza',
      label: 'Radio',
    };

    c.radio_disabled = {
      model: model,
      attribute: 'radio_disabled',
      value: 'veggies',
      label: 'Radio',
      attributes: attrs
    };

    c.switch = {
      model: model,
      attribute: 'switch',
      label: 'Switch',
    };

    c.switch_disabled = {
      model: model,
      attribute: 'switch_disabled',
      label: 'Switch',
      attributes: attrs
    };

    c.radio_first = {
      model: model,
      attribute: 'group',
      value: 'first',
      label: 'First',
    };

    c.radio_second = {
      model: model,
      attribute: 'group',
      value: 'second',
      label: 'Second',
    };

    c.radio_third = {
      model: model,
      attribute: 'group',
      value: 'third',
      label: 'Third',
    };

    c.radio_fourth = {
      model: model,
      attribute: 'group',
      value: 'fourth',
      label: 'Fourth',
    };

  },
});
