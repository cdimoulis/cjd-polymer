App.View.extend({
  name: 'layouts/main',
  attributes: {
    style: 'height: 100%;'
  },
  events: {
    'click #title': '_navigateHome',
  },
  data_source: [
    {key: 'page', required: true},
  ],
  init_functions: [
    'setup',
  ],

  setup: function() {
    _.bindAll(this, '_navigateHome');
  },

  _navigateHome: function() {
    console.log('navigate home');
    window.location.pathname = "/";
  },
});
