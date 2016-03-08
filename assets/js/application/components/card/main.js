App.View.extend({
  name: 'components/card/main',
  dependencies: [
    "paper-card/paper-card.html",
  ],
  data_source:[
    {key: 'heading', required: false},
    {key: 'heading_color', required: false, default: 'black', options: ['black', 'white']},
    {key: 'attributes', required: false},
    {key: 'img_url', required: false},
    {key: 'content', required: false},
    {key: 'content_data', required: false},
    {key: 'footer', required: false},
    {key: 'footer_data', required: false},
  ],
  init_functions:[
    'setup',
    'setupAttributesModel',
    'setupContent',
    'setupFooter',
  ],

  setup: function() {
    this.data.attributes = this.data.attributes || new App.Model()
    this._control = {
      content_view: false,
      footer_view: false,
    }

    this.display = {
      heading: this.data.heading,
      img_url: this.data.img_url,
      content: this.data.content,
      content_data: this.data.content_data,
      footer: this.data.footer,
      footer_data: this.data.footer,
    };

    if (this.data.heading_color == 'white'){
      this.display.classes = "heading-text-white";
    }
  },

  setupAttributesModel: function() {
    var extra_attrs = "";

    _.each(this.data.attributes.attributes, function(val, key){
      if (!val || key == 'class'){
        return;
      }
      extra_attrs += key+'="'+val+'" ';
    });

    this.display.extra_attrs = extra_attrs;
    this.display.extra_classes = this.data.attributes.get('class');
  },

  setupContent: function() {
    if (_.has(App.Views,this.data.content)) {
      this._control.content_view = true;
    }
  },

  setupFooter: function() {
    if (_.has(App.Views,this.data.footer)) {
      this._control.footer_view = true;
    }
  }
});
