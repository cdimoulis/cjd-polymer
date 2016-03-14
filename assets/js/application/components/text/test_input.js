App.View.extend({
  name: 'components/text/test_input',
  tagName: 'paper-input',
  events: {
    'keyup': '_onChange',
  },
  dependencies: [
    "paper-input/paper-input.html",
    "paper-icon-button/paper-icon-button.html",
  ],
  init_functions: [
    'setup',
  ],

  setup: function() {
    _.bindAll(this, '_onChange');
    this.test = "TESTING!";
  },

  _onChange: function() {
    console.log('change', this.el.value);
  },
});
