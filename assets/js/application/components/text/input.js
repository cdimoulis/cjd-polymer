App.View.extend({
  name: 'components/text/input',
  tagName: 'paper-input',
  attributes: {

  },
  events: {
    'keyup': '_onChange',
  },
  data_source: [
    {key: 'model', required: true},
    {key: 'attribute', required: true},
    {key: 'label', required: false},
    {key: 'pattern', required: false},
    {key: 'error_message', required: false, default: "Invalid Input"},
    {key: 'auto_validate', required: false, default: false},
    {key: 'char_counter', required: false, default: false},
    {key: 'password', required: false, default: false},
  ],
  init_functions: [
    'setup',
  ],

  setup: function() {
    _.bindAll(this, '_onChange');

    var attrs = {
      value: this.data.model.get(this.data.attribute),
      label: this.data.label,
      pattern: this.data.pattern,
      'error-message': this.data.error_message,
    };

    if (this.data.auto_validate) {
      attrs['auto-validate'] = true;
    }

    if (this.data.char_counter) {
      attrs['char-counter'] = true;
    }

    if (this.data.password) {
      attrs.type = 'password';
    }

    this.$el.attr(attrs);
  },

  _onChange: function(e) {
    if (this.el.validate()) {
      this.data.model.set(this.data.attribute, e.currentTarget.value);
    }
  },
});
