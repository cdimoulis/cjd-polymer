App.View.extend({
  name: 'views/selection/item/item_view_2',
  tagName: "paper-item-body",
  dependencies: [
    'paper-item/paper-item-body.html',
  ],
  attributes: {
    'style': 'width: 100%',
  },
  events: {
   'click': '_onClick',
 },
  data_source: [
    {key: 'primary', required: true},
    {key: 'secondary', required: true},
  ],
  init_functions: [
    'setup',
  ],

  setup: function() {

  },
});
