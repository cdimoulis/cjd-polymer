App.Component.extend({
  name: 'components/genera/slider',
  tagName: 'paper-slider',
  dependencies: [
    'paper-slider/paper-slider.html',
  ],
  events: {
    'change': '_onChange',
  },
  data_source: [
    {key: 'model', required: true},
    {key: 'attribute', required: true},
    {key: 'max', required: false, default: 10},
    {key: 'min', required: false, default: 0},
    {key: 'step', required: false, default: 1},
    {key: 'pin', required: false, default: false},
  ],
  init_functions: [
    'setup',
    'setupAttributesModel',
  ],

  setup: function() {
    _.bindAll(this, '_onChange');
    this.data.attributes = this.data.attributes || new App.Model();


  },

  setupAttributesModel: function() {
    var _this = this;

    _.each(this.data.attributes.attributes, function(val, key) {
      if (!val || key == 'class'){
        return;
      }
      _this.$el.attr(key, val);
    });

    this.$el.addClass(this.data.attributes.get('class') || '');
  },

  _onChange: function() {
    console.log('change', this.el.value);
  },
});
