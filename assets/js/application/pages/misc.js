App.Page.extend({
  name: "pages/misc",
  init_functions: [
    'setup',
  ],

  setup: function() {
    var model = new App.Model();
    window.model = model;
    this.components = c = {};

    

  },
});
