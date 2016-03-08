App.Page.extend({
  name: 'pages/text',
  init_functions: [
    'setup',
  ],

  setup: function() {
    this.components = c = {}
    var model = new App.Model({name: "Chachie"});
    var attrs = new App.Model({disabled: true});
    window.attrs = attrs;

    c.one = {
      model: model,
      attribute: 'name',
      label: "Your name",
    };

    c.password = {
      model: model,
      attribute: 'password',
      label: "Password",
      password: true,
    };

    c.disabled = {
      model: model,
      attribute: 'whocares',
      disabled: attrs,
      label: 'This is disabled',
    };

    c.always_float = {
      model: model,
      attribute: 'whocares',
      always_float_label: true,
      label: 'Always floating label',
    };

    c.never_float = {
      model: model,
      attribute: 'whocares',
      float_label: false,
      label: 'Non floating label',
    };

    c.char_count = {
      model: model,
      attribute: 'whocares',
      char_counter: true,
      label: 'Count all characters',
    };

    c.max_count = {
      model: model,
      attribute: 'whocares',
      char_counter: true,
      max_count: 20,
      label: 'Count all characters',
    };

    c.pattern = {
      model: model,
      attribute: 'whocares',
      pattern: 'numeric',
      auto_validate: true,
      error_message: 'Only numbers allowed!!!',
      label: 'Only numbers',
    }
  },
});