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
  ],
  init_functions:[
    'setup',
  ],

  setup: function() {
    _.bindAll(this,'_onClick');

    this.display = {
      text: this.data.text,
      raised: this.data.raised,
      icon: this.data.icon,
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
  },

  _onClick: function(e) {
    console.log('clicked');
    if (_.has(this.data, 'event_handler') && _.isFunction(this.data.event_handler)) {
      this.data.event_handler(e);
    }
  },
});
