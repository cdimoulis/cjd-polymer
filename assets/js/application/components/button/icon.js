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
    {key: 'disabled', required: false},
  ],
  init_functions:[
    'setup',
  ],

  setup: function() {
    _.bindAll(this, '_handleDisabled', '_onClick');
    this.data.disabled = this.data.disabled || new App.Model({disabled: false})

    this.display = {
      icon: this.data.icon,
      button_color: "",
      icon_color: "",
      disabled: (this.data.disabled.get('disabled') ? 'disabled' : ''),
    }

    // Determine class for background color
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

    this.listenTo(this.data.disabled,'change:disabled',this._handleDisabled);
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
