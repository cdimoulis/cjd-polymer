App.View.extend({
  name: 'components/general/item',
  dependencies: [
    "paper-item/paper-item.html",
  ],
  data_source: [
    {key: 'model', required: false},
    {key: 'attribute', required: false},
    {key: 'view', required: false},
    {key: 'view_data', required: false},
    {key: 'attributes', required: false},
  ],
  init_functions: [
    'setup',
    'setupAttributesModel',
  ],

  setup: function() {
    this.data.model = this.data.model || new App.Model();
    this.data.attributes = this.data.attributes || new App.Model();

    this.display = {
      text: this.data.model.get(this.data.attribute),
      view: this.data.view,
      view_data: this.data.view_data,
      attrs: '',
      classes: '',
      id: this.data.attributes.get('id') || this.cid+'_item',
    };

    if (!this.data.attributes.has('id')) {
      this.data.attributes.set('id', this.display.id);
    }

    // If a new view is not being rendered then listen for change to the
    // model's attribute to rerender
    if (!this.display.view){
      this.listenTo(this.data.model, 'change:'+this.data.attribute, function() {
        this.display.text = this.data.model.get(this.data.attribute);
        this.render()
      });
    }
  },

  setupAttributesModel: function() {
    var _this = this;

    _.each(this.data.attributes.attributes, function(val, key) {
      if (!val || key == 'class'){
        return;
      }
      _this.display.attrs += key+'='+val+' ';
    });

    this.display.classes += this.data.attributes.get('class') || '';
  },
});
