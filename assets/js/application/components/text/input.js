App.View.extend({
  name: 'components/text/input',
  events: {
    'keyup paper-input': '_onChange',
    'error': '_onChange',
  },
  init_functions: [
    'setup',
  ],

  setup: function() {
    _.bindAll(this, '_rendered', '_onChange');

    this.listenTo(this,'rendered',this._rendered);
  },

  _rendered: function() {
    console.log('setup input');
    console.log('el',this.$el.find("paper-input"))
    this.$el.find('paper-input').on('error',function(){
      console.log('paper change',arguments);
    })
  },

  _onChange: function(e) {
    var re = /[A-Z,a-z'\-]/g;
    var value = e.currentTarget.value;
    console.log('on change',re.test(value));
  },
});
