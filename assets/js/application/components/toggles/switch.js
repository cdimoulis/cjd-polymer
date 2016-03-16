App.View.extend({
  name: 'components/toggles/switch',
  tagName: 'paper-toggle-button',
  events: {
    'click': '_onClick',
  },
  dependencies: [
    "paper-toggle-button/paper-toggle-button.html",
  ],
  data_source: [
    {key: 'model', required: true},
    {key: 'attribute', required: true},
    {key: 'attributes', required: false},
    {key: 'label', required: false, default: ''},
  ],
  init_functions: [
    'setup',
    'setupAttributesModel',
  ],

  setup: function() {
    _.bindAll(this, 'handleModelChange', '_handleDisabled', '_onClick');
    this.data.attributes = this.data.attributes || new App.Model();
    this.checked = false;
    var attrs = {};
    var classes = '';

    this.display = {
      label: this.data.label,
    };

    attrs.id = this.data.attributes.get('id') || this.cid+'_switch';

    if (!this.data.attributes.has('id')) {
      this.data.attributes.set('id', attrs.id);
    }

    if (this.data.model.get(this.data.attribute)) {
      attrs.checked = true;
      this.checked = true;
    }

    this.$el.attr(attrs);
    this.$el.addClass(classes);

    // Listen for model and attr change
    this.listenTo(this.data.model, 'change:'+this.data.attribute, this.handleModelChange);
    this.listenTo(this.data.attributes,'change:disabled',this._handleDisabled);
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

  handleModelChange: function (model, value, options) {
    if (!options[this.cid+'_silent']) {
      if (this.data.model.get(this.data.attribute)) {
        this.$el.attr('checked', true);
        this.checked = true;
      }
      else {
        this.$el.removeAttr('checked');
        this.checked = false;
      }
    }
  },

  _handleDisabled: function(model, disable) {
    this.$el.attr('disabled', disable);
  },

  _onClick: function() {
    this.checked = !this.checked
    obj = {};
    obj[this.data.attribute] = this.checked;
    options = {};
    options[this.cid+"_silent"] = true;
    this.data.model.set(obj, options);
  },
});
