App.Component.extend({
  name: 'components/general/selection',
  tagName: 'paper-dropdown-menu',
  dependencies: [
    'paper-dropdown-menu/paper-dropdown-menu.html',
  ],
  data_source: [
    {key: 'collection', required: true},
    {key: 'attribute', required: true},
    {key: 'selected', required: true},
    {key: 'attributes', required: false},
    {key: 'label', required: false, default: ''},
  ],
  init_functions: [
    'setup',
    'setupAttributesModel',
  ],

  setup: function() {
    this.data.attributes = this.data.attributes || new App.Model();

    // Setup menu component
    this._selected_collection = new App.Collection(this.data.selected.models);
    this.components = {
      menu: {
        collection: this.data.collection,
        attribute: this.data.attribute,
        selected: this._selected_collection,
      }
    };

    // Setup attributes
    this.$el.attr('label', this.data.label);

    // Listen to selection
    this.listenTo(this._selected_collection, 'add', function(model) {
      this.data.selected.add(model);
    });

    this.listenTo(this._selected_collection, 'remove', function(model) {
      this.data.selected.remove(model)
    });

    this.listenTo(this._selected_collection, 'reset', function() {
      this.data.selected.reset();
    });

    // Listen to this element' selection
    this.listenTo(this.data.selected, 'add', function(model) {
      this._selected_collection.reset([model]);
    });
    this.listenTo(this.data.selected, 'remove', function(model) {
      this._selected_collection.remove(model);
    });
    this.listenTo(this.data.selected, 'reset', function() {
      this._selected_collection.reset(this.data.selected.models);
    });
    this.listenTo(this.data.selected, 'sync', function(model) {
      this._selected_collection.reset(this.data.selected.models);
    });
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
});
