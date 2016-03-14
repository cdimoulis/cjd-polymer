App.View.extend({
  name: 'components/general/item',
  dependencies: [
    "paper-item/paper-item.html",
  ],
  data_source: [
    {key: 'text', required: false},
    {key: 'view', required: false},
    {key: 'attributes', required: false},
  ],
  init_functions: [
    'setup',
    'setupAttributesModel',
  ],

  setup: function() {

  },

  setupAttributesModel: function() {

  },
});
