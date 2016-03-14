App.View.extend({
  name: 'components/general/item',
  dependencies: [
    "paper-item/paper-item.html",
  ],
  data_source: [
    {key: 'text', required: false},
    {key: 'view', required: false},
    {key: 'view_data', required: false},
    {key: 'attributes', required: false},
  ],
  init_functions: [
    'setup',
    'setupAttributesModel',
  ],

  setup: function() {
    this.display = {
      text: this.data.text,
      view: this.data.view,
      view_data: this.data.view_data,
    };
  },

  setupAttributesModel: function() {

  },
});
