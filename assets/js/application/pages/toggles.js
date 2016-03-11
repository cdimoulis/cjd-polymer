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

    c.standard = {
      model: model,
      attribute: 'standard',
      label: 'Standard',
    };

    c.disabled = {
      model: model,
      attribute: 'disabled',
      label: 'Disabled',
      attributes: attrs,
    }

  },
});
