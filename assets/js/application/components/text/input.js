App.View.extend({
  name: 'components/text/input',
  tagName: 'paper-input',
  events: {
    'keyup': '_onChange',
  },
  _standard_patterns: {
    alpha: '[A-Z,a-z]*',
    capital_alpha: '[A-Z]*',
    lower_alpha: '[a-z]*',
    alpha_numeric: '[A-Z,a-z,0-9]*',
    numeric: '-?[0-9]*(\\.[0-9]+)?',
    numeric_positive: '[0-9]*(\\.[0-9]+)?',
    numeric_whole: '-?[0-9]*',
    numeric_whole_positive: '[0-9]*',
    phone_number: '((\\()?[2-9]{1}\\d{2}(\\))?-)?[2-9]{1}\\d{2}-\\d{4}',
    ssn: '[1-9]{3}-[1-9]{2}-[1-9]{4}'
  },
  data_source: [
    {key: 'model', required: true},
    {key: 'attribute', required: true},
    {key: 'disabled', required: false},
    {key: 'label', required: false},
    {key: 'float_label', required: false, default: true},
    {key: 'always_float_label', require: false, default: false},
    {key: 'pattern', required: false},
    {key: 'error_message', required: false, default: "Invalid Input"},
    {key: 'auto_validate', required: false, default: false},
    {key: 'char_counter', required: false, default: false},
    {key: 'max_count', required: false},
    {key: 'password', required: false, default: false},
  ],
  init_functions: [
    'setup',
  ],

  setup: function() {
    _.bindAll(this, '_onChange');
    var data = this.data;
    data.disabled = data.disabled || new App.Model({disabled: false})

    var attrs = {
      value: data.model.get(data.attribute),
      label: data.label,
      'error-message': data.error_message,
      maxlength: data.max_count,
    };

    if (!!data.pattern && !!this._standard_patterns[data.pattern]) {
      attrs.pattern = this._standard_patterns[data.pattern];
    }
    else {
      attrs.pattern = data.pattern;
    }

    if (data.disabled.get('disabled')) {
      attrs['disabled'] = true;
    }

    this.listenTo(data.disabled,'change:disabled',function(model,disabled) {
      if (disabled) {
        this.$el.attr('disabled',true);
      }
      else {
        this.$el.removeAttr('disabled');
      }
    });

    if (!data.float_label) {
      attrs['no-label-float'] = true;
    }

    if (data.float_label && data.always_float_label) {
      attrs['always-float-label'] = true;
    }

    if (data.auto_validate) {
      attrs['auto-validate'] = true;
    }

    if (data.char_counter) {
      attrs['char-counter'] = true;
    }

    if (data.password) {
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
