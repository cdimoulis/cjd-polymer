App.Page.extend({
  name: 'pages/text',
  init_functions: [
    'setup',
    'textareas',
  ],

  setup: function() {
    this.components = c = {}
    var model = new App.Model({name: "Chachie"});
    var attrs = new App.Model({disabled: true, class: 'monkey cheese', monkey: 'cheese'});
    window.model = model;
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
      attribute: 'disabled',
      attributes: attrs,
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
      attribute: 'characters',
      char_counter: true,
      label: 'Count all characters',
    };

    c.max_count = {
      model: model,
      attribute: 'max',
      char_counter: true,
      max_count: 20,
      label: 'Count all characters',
    };

    c.pattern = {
      model: model,
      attribute: 'pattern',
      pattern: 'numeric',
      auto_validate: true,
      error_message: 'Only numbers allowed!!!',
      label: 'Only numbers',
    };

    c.icon = {
      model: model,
      attribute: 'dollars',
      pattern: 'numeric',
      auto_validate: true,
      error_message: 'Cash has no letters!',
      label: 'Money',
      icon_prefix: 'editor:attach-money',
    };

    c.email = {
      model: model,
      attribute: 'email',
      label: 'Email',
      text_suffix: '@gmail.com',
      icon_suffix: 'communication:email',
    };

    c.clear = {
      model: model,
      attribute: 'clear',
      label: 'Clear with icon button',
      icon_button: "close",
      icon_event_handler: function() {
        model.set('clear','');
      },
    };
  },

  textareas: function() {
    var c = this.components;
    var model = new App.Model({info: "Here is a lot of fun info..."});
    var attrs = new App.Model({rows: 5});
    window.textarea_attrs = attrs;

    c.textarea = {
      model: model,
      attribute: 'description',
      label: 'Description',
    };

    c.info = {
      model: model,
      attribute: 'info',
      attributes: attrs,
      label: 'Information',
    }
  },
});
