App.View.extend({
  name: 'components/general/menu',
  dependencies: [
    "paper-menu/paper-menu.html",
  ],
  events: {
    'tap paper-list': '_onClick',
  },
  data_source: [
    {key: 'collection', required: true},
    {key: 'attribute', required: true},
    {key: 'selected', required: true},
    {key: 'view', required: false},
    {key: 'view_data', required: false},
    {key: 'attributes', required: false},
  ],
  init_functions: [
    'setup',
    'setupAttributesModel',
  ],

  setup: function() {
    _.bindAll(this, 'setupItems', '_addItem', '_onClick');
    this.data.attributes = this.data.attributes || new App.Model();
    this._items = {};

    this.display = {
      text: this.data.text,
      view: this.data.view,
      view_data: this.data.view_data,
      attrs: '',
      classes: '',
      id: this.data.attributes.get('id') || this.cid+"_menu",
    };

    if (!this.data.attributes.has('id')) {
      this.data.attributes.set('id', this.display.id);
    }

    // Listen to collection for changes
    this.listenTo(this.data.collection, 'add', this._addItem);

    this.listenTo(this, 'rendered', this.setupItems);
  },

  setupItems: function() {
    var _this = this;

    this.data.collection.each(function(model) {
      _this._addItem(model);
    });
  },

  _addItem: function(model) {
    if (_.has(this._items, model.cid)){
      return;
    }

    var data = {
      model: model,
      attribute: this.data.attribute,
      view: this.data.view,
      view_data: this.data.view_data,
    }

    var s = this.$el.find('div.selectable-content');
    if (!s[0]) {
      var item = this.addView('components/general/item', data, "paper-menu");
    }
    else {
      var item = new App.Views['components/general/item']({hash: {data: data}})
      item.render();
      var menu = this.$el.find('paper-menu')[0]
      Polymer.dom(menu).appendChild(item.el)
    }
    this._items[model.cid] = item;
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

  _onClick: function() {
    console.log('menu item clicked');
  },
});
