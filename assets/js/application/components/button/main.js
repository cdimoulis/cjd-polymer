App.View.extend({
  name: 'components/button/main',
  events:{
    'click paper-button': '_onClick',
  },
  data_source:[
    {key: 'text', required: true},
    {key: 'raised', required: false, default: true, options: [true,false]},
    {key: 'ripple', required: false, default: true, options: [true,false]},
    {key: 'color', required: false, default: true, options: ['primary','accent']},
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
  },

  _onClick: function(e) {
    console.log('clicked');
    if (_.has(this.data, 'event_handler') && _.isFunction(this.data.event_handler)) {
      this.data.event_handler(e);
    }
  },
});
