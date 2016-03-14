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
      attrs: '',
      classes: '',
      content: this.data.content,
      content_data: this.data.content_data,
      footer: this.data.footer,
      footer_data: this.data.footer,
      id: this.data.attributes.get('id') || this.cid+'_card',
    };

    if (!this.data.attributes.has('id')) {
      this.data.attributes.set('id', this.display.id)
    }

    if (!!this.data.heading) {
      this.display.attrs += 'heading="'+this.data.heading+'" ';
    }

    if (!!this.data.img_url) {
      this.display.attrs += 'image="'+this.data.img_url+'" ';
    }

    if (this.data.heading_color == 'white'){
      this.display.classes += "heading-text-white ";
    }
  },

  setupAttributesModel: function() {
    var _this = this;
    var extra_attrs = "";

    _.each(this.data.attributes.attributes, function(val, key){
      if (!val || key == 'class'){
        return;
      }
      _this.display.attrs += key+'="'+val+'" ';
    });

    this.display.extra_attrs = extra_attrs;
    this.display.classes += this.data.attributes.get('class') || '';
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
