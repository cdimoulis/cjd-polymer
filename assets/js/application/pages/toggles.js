App.Page.extend({
  name: 'pages/toggles',
  init_functions: [
    'setup',
  ],

  setup: function() {
    this.components = c = {};
    var model = new App.Model();
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
      label: 'Radio',
    };

    c.radio_disabled = {
      model: model,
      attribute: 'radio_disabled',
      label: 'Radio',
      attributes: attrs
    };

  },
});
