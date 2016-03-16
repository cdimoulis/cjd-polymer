App.Component.extend({
  name: 'components/general/menu',
  tagName: 'paper-menu',
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
    var _this = this;
    this.data.attributes = this.data.attributes || new App.Model();
    this._items = {};
    var attrs = {};
    var classes = '';

    this.display = {
      text: this.data.text,
      view: this.data.view,
      view_data: this.data.view_data,
    };

    attrs.id = this.data.attributes.get('id') || this.cid+"_menu";

    if (!this.data.attributes.has('id')) {
      this.data.attributes.set('id', attrs.id);
    }

    this.$el.attr(attrs);
    this.$el.addClass(classes);
    // Listen to collection for changes
    this.listenTo(this.data.collection, 'sync', this.setupItems);
    this.listenTo(this.data.collection, 'add', this._addItem);
    this.listenTo(this.data.collection, 'remove', this._removeItem);
    this.listenTo(this.data.collection, 'reset', function() {
      _this._clearAll();
      _this.setupItems();
    });
    this.listenTo(this.data.collection, 'sort', function() {
      _this._clearAll();
      _this.setupItems();
    });
    this.listenTo(this, 'rendered', this.setupItems);
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

    var item = this.addView('components/general/item', data)

    this._items[model.cid] = item;
  },

  _removeItem: function(model) {
    var _this = this;
    var item = this._items[model.cid];
    item.$el.fadeOut(400, function() {
      _this.removeView(item);
      delete _this._items[model.cid];
    });
  },

  _onClick: function() {
    console.log('menu item clicked');
  },

  _clearAll: function() {
    var _this = this;
    _.each(this._items, function(item, key){
      item.$el.fadeOut(400, function() {
        _this.removeView(item);
      });
    });
    this._items = {};
  }
});
