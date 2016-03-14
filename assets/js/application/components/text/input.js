App.View.extend({
  name: 'components/text/input',
  events: {
    'keyup paper-input': '_onChange',
    'click paper-icon-button': '_onClick',
  },
  dependencies: [
    "paper-input/paper-input.html",
    "paper-icon-button/paper-icon-button.html",
  ],
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
    {key: 'password', required: false, default: false},
    {key: 'icon_prefix', required: false},
    {key: 'text_suffix', required: false},
    {key: 'icon_suffix', required: false},
    {key: 'icon_button', required: false},
    {key: 'icon_event_handler', required: false},
  ],
  init_functions: [
    'setup',
    'setupAttributesModel',
  ],

  setup: function() {
    _.bindAll(this, '_setValue', '_onChange', '_onClick');
    var data = this.data;
    data.attributes = data.attributes || new App.Model()
    this.components = {};
    this.display = {
      attrs: '',
      classes: '',
      id: data.attributes.get('id') || this.cid+'_text_input',
    };

    if (!data.attributes.has('id')) {
      data.attributes.set('id', this.display.id);
    }

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
      console.log('no float');
      this.display.attrs += 'no-label-float ';
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
        this.$el.find('paper-input').attr('disabled',true);
      }
      else {
        this.$el.find('paper-input').removeAttr('disabled');
      }
    });
  },

  setupAttributesModel: function() {
    var _this = this;

    _.each(this.data.attributes.attributes, function(val, key) {
      if (!val || key == 'class'){
        return;
      }
      _this.display.attrs += key+'="'+val+'" ';
    });

    this.display.classes += this.data.attributes.get('class') || '';
  },

  _setValue: function(model,value) {
    var $input = this.$el.find('paper-input');
    $input.val(value);
  },

  _onChange: function(e) {
    var input = this.$el.find('paper-input')[0];
    if (input.validate()) {
      this.data.model.set(this.data.attribute, e.currentTarget.value);
    }
  },

  _onClick: function(e) {
    if (_.has(this.data, 'icon_event_handler') && _.isFunction(this.data.icon_event_handler)) {
      this.data.icon_event_handler(this.data.model);
    }
  },
});
