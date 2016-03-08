App.View.extend({
  name: 'components/text/area',
  events: {
    'keyup paper-textarea': '_onChange',
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
    {key: 'attributes', required: false},
    {key: 'label', required: false, default: ''},
    {key: 'float_label', required: false, default: true},
    {key: 'always_float_label', require: false, default: false},
    {key: 'pattern', required: false},
    {key: 'error_message', required: false, default: "Invalid Input"},
    {key: 'auto_validate', required: false, default: false},
    {key: 'char_counter', required: false, default: false},
    {key: 'max_count', required: false},
  ],
  init_functions: [
    'setup',
    'setupAttributesModel',
  ],

  setup: function() {
    _.bindAll(this, '_setValue', '_onChange');
    var data = this.data;
    this.components = {};
    this.display = {};
    this.display.attrs = "";
    data.attributes = data.attributes || new App.Model()

    // Setup the attributes of the paper input element
    this.display.attrs += 'value="'+(data.model.get(data.attribute) || '')+'" ';
    this.display.attrs += 'label="'+data.label+'" ';
    this.display.attrs += 'error-message="'+data.error_message+'" ';

    if (!!data.max_count){
      this.display.attrs += 'maxlength='+data.max_count+' ';
    }

    if (!!data.pattern){
      if (!!data.pattern && !!this._standard_patterns[data.pattern]) {
        this.display.attrs += 'pattern="'+this._standard_patterns[data.pattern]+'" ';
      }
      else {
        this.display.attrs += 'pattern="'+(data.pattern || '')+'" ';
      }
    }

    if (!data.float_label) {
      this.display.attrs += 'no-float-label ';
    }

    if (data.float_label && data.always_float_label) {
      this.display.attrs += 'always-float-label ';
    }

    if (data.auto_validate) {
      this.display.attrs += 'auto-validate ';
    }

    if (data.char_counter) {
      this.display.attrs += 'char-counter ';
    }

    if (data.password) {
      this.display.attrs += 'type="password" ';
    }

    // Build the icon button component
    if (!!data.icon_button) {
      var attrs = new App.Model({suffix: true, class: "text_input_suffix"});
      attrs.set({disabled: data.attributes.get('disabled')});
      this.components.icon_button = {
        icon: data.icon_button,
        event_handler: data.icon_event_handler,
        attributes: attrs,
      }
    }

    // Listen to changes to models
    this.listenTo(this.data.model, 'change:'+this.data.attribute, this._setValue);

    this.listenTo(data.attributes,'change:disabled',function(model,disabled) {
      if (disabled) {
        this.$el.find('paper-textarea').attr('disabled',true);
      }
      else {
        this.$el.find('paper-textarea').removeAttr('disabled');
      }
    });
  },

  setupAttributesModel: function() {
    var extra_attrs = "";

    _.each(this.data.attributes.attributes, function(val, key) {
      if (!val || key == 'class'){
        return;
      }
      extra_attrs += key+'="'+val+'" ';
    });

    this.display.extra_attrs = extra_attrs;
    this.display.extra_classes = this.data.attributes.get('class') || '';
  },

  _setValue: function(model,value) {
    var $input = this.$el.find('paper-textarea');
    $input.val(value);
  },

  _onChange: function(e) {
    var input = this.$el.find('paper-textarea')[0];
    if (input.validate()) {
      this.data.model.set(this.data.attribute, e.currentTarget.value);
    }
  },
});
