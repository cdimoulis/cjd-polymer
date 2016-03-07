App.Page.extend({
  name: 'pages/text',
  init_functions: [
    'setup',
  ],

  setup: function() {
    this.components = c = {}
    var model = new App.Model({name: "Chachie"});
    window.model = model;

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
    }
  },
});
