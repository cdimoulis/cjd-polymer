App.View.extend({
  name: 'components/button/main',
  events:{
    'click paper-button': '_onClick',
  },
  data_source:[
    {key: 'text', required: true},
    {key: 'raised', required: false, default: true, options: [true,false]},
    {key: 'ripple', required: false, default: true, options: [true,false]},
    {key: 'button_color', required: false, default: false, options: ['primary','accent']},
    {key: 'text_color', required: false, default: 'black', options: ['black', 'white']},
    {key: 'icon', required: false},
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
      text: this.data.text,
      raised: this.data.raised,
      icon: this.data.icon,
      disabled: (this.data.disabled.get('disabled') ? 'disabled' : ''),
    }

    // Determin class for background color
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

    // Determin class for text color
    if (this.data.text_color == 'white') {
      this.display.text_color = 'text-white';
    }

    this.listenTo(this.data.disabled, 'change:disabled', this._handleDisabled);
  },

  _handleDisabled: function(model,disabled) {
    var $button = this.$el.find('paper-button');
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
