App.Component.extend({
  name: 'components/general/item',
  tagName: 'paper-item',
  attribute: {
    'style': 'display: none;',
  },
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
    _.bindAll(this, '_rendered');
    this.data.model = this.data.model || new App.Model();
    this.data.attributes = this.data.attributes || new App.Model();

    this.display = {
      text: this.data.model.get(this.data.attribute),
      view: this.data.view,
      view_data: this.data.view_data,
    };

    var id = this.data.attributes.get('id') || this.cid+'_item';
    this.$el.attr('id', id);

    if (!this.data.attributes.has('id')) {
      this.data.attributes.set('id', id);
    }

    // If a new view is not being rendered then listen for change to the
    // model's attribute to rerender
    if (!this.display.view){
      this.listenTo(this.data.model, 'change:'+this.data.attribute, function() {
        this.display.text = this.data.model.get(this.data.attribute);
        this.render()
      });
    }

    this.listenTo(this, 'rendered', this._rendered);
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

  _rendered: function() {
    this.$el.fadeIn().css('display', '');
  },
});
