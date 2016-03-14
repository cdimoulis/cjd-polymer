App.View.extend({
  name: 'views/selection/item/item_view_1',
  attributes: {
    'style': 'width: 100%',
  },
  events: {
   'click': '_onClick',
 },
  data_source: [
    {key: 'text', required: true},
    {key: 'icon', required: true},
  ],
  init_functions: [
    'setup',
  ],

  setup: function() {
    _.bindAll(this, '_onClick');
    this.components = c = {};
    var model = new App.Model();

    c.icon = {
      icon: "home",
    };

    c.checkbox = {
      label: '',
      model: model,
      attribute: this.data.text,
    };
  },

  _onClick: function() {
    console.log('clicking item_view_1 ',this.data.text);
  },
});
