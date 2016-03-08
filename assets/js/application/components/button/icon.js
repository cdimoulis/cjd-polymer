App.View.extend({
  name: 'components/button/icon',
  events:{
    'click paper-icon-button': '_onClick',
  },
  data_source:[
    {key: 'icon', required: true},
    {key: 'ripple', required: false, default: true, options: [true,false]},
    {key: 'button_color', required: false, default: false, options: ['primary','accent']},
    {key: 'icon_color', required: false, default: 'black', options: ['black', 'white']},
    {key: 'event_handler', required: false},
    {key: 'attributes', required: false},
  ],
  init_functions:[
    'setup',
    'setupAttributesModel',
  ],

  setup: function() {
    _.bindAll(this, '_handleDisabled', '_onClick');
    this.data.attributes = this.data.attributes || new App.Model()

    this.display = {
      icon: this.data.icon,
      button_color: "",
      icon_color: "",
    }

    // Determine class for background color if not disabled
    if (!this.data.attributes.get('disabled')){
      switch(this.data.button_color) {
        case 'primary': {
          this.display.button_color = 'mdl-color--primary';
          break;
        }
        case 'accent': {
          this.display.button_color = 'mdl-color--accent';
          break;
        }
      }

      // Determine class for text color
      if (this.data.icon_color == 'white') {
        this.display.icon_color = 'text-white';
      }
    }

    this.listenTo(this.data.attributes,'change:disabled',this._handleDisabled);
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

  _handleDisabled: function(model,disabled) {
    var $button = this.$el.find('paper-icon-button');
    if (disabled) {
      $button.attr('disabled',true);
      $button.removeClass('mdl-color--primary');
      $button.removeClass('mdl-color--accent');
      $button.removeClass('text-white');
    }
    else {
      $button.removeAttr('disabled');
      switch(this.data.button_color) {
        case 'primary': {
          $button.addClass('mdl-color--primary');
          break;
        }
        case 'accent': {
          $button.addClass('mdl-color--accent');
          break;
        }
      }
      if (this.data.text_color == 'white') {
        $button.addClass('text-white');
      }
    }
  },

  _onClick: function(e) {
    if (_.has(this.data, 'event_handler') && _.isFunction(this.data.event_handler)) {
      this.data.event_handler(e);
    }
  },
});
