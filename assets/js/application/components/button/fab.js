App.View.extend({
  name: 'components/button/fab',
  tagName: 'paper-fab',
  events:{
    'click': '_onClick',
  },
  dependencies: [
    "paper-fab/paper-fab.html",
  ],
  data_source:[
    {key: 'icon', required: true},
    {key: 'ripple', required: false, default: true, options: [true,false]},
    {key: 'button_color', required: false, default: false, options: ['primary','accent']},
    {key: 'icon_color', required: false, default: 'white', options: ['black', 'white']},
    {key: 'mini', required: false, default: false},
    {key: 'event_handler', required: false},
    {key: 'attributes', required: false},
  ],
  init_functions:[
    'setup',
    'setupAttributesModel',
  ],

  setup: function() {
    _.bindAll(this, '_handleDisabled', '_onClick');
    this.data.attributes = this.data.attributes || new App.Model()
    var classes = "";
    var attrs = {};

    // Determine class for background color if not disabled
    if (!this.data.attributes.get('disabled')){
      switch(this.data.button_color) {
        case 'primary': {
          classes += "mdl-color--primary ";
          break;
        }
        case 'accent': {
          classes += "mdl-color--accent ";
          break;
        }
      }

      // Determine class for text color
      if (this.data.icon_color == 'black') {
        classes += "text-black";
      }
    }

    // Determine attributes
    var id = this.data.attributes.get('id') || this.cid+'icon_button';
    attrs.id = id;
    attrs.icon = this.data.icon;

    if (!this.data.attributes.has('id')) {
      this.data.attributes.set('id',attrs.id);
    }

    if (this.data.mini) {
      attrs.mini = true;
    }

    this.$el.attr(attrs);
    this.$el.addClass(classes);
    this.listenTo(this.data.attributes,'change:disabled',this._handleDisabled);
  },

  setupAttributesModel: function() {
    var attrs = {};

    _.each(this.data.attributes.attributes, function(val, key) {
      if (!val || key == 'class'){
        return;
      }
      attrs[key] = val;
    });

    this.$el.attr(attrs);
    this.$el.addClass(this.data.attributes.get('class'));
  },

  _handleDisabled: function(model,disabled) {
    if (disabled) {
      this.$el.attr('disabled',true);
      this.$el.removeClass('mdl-color--primary');
      this.$el.removeClass('mdl-color--accent');
      this.$el.removeClass('text-white');
    }
    else {
      this.$el.removeAttr('disabled');
      switch(this.data.button_color) {
        case 'primary': {
          this.$el.addClass('mdl-color--primary');
          break;
        }
        case 'accent': {
          this.$el.addClass('mdl-color--accent');
          break;
        }
      }
      if (this.data.icon_color == 'black') {
        this.$el.addClass('text-black');
      }
    }
  },

  _onClick: function(e) {
    if (_.has(this.data, 'event_handler') && _.isFunction(this.data.event_handler)) {
      this.data.event_handler(e);
    }
  },
});
