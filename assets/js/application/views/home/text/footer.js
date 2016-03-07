App.View.extend({
  name: 'views/home/text/footer',
  init_functions: [
    'setup',
  ],

  setup: function() {
    _.bindAll(this, '_performNavigation');
    this.components = c = {};

    c.view_button = {
      text: "view",
      raised: false,
      icon: "arrow-forward",
      event_handler: this._performNavigation,
    };
  },

  _performNavigation: function() {
    window.location.pathname = "/elements/text";
  },
});
