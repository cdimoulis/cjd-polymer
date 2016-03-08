App.View.extend({
  name: 'components/card/main',
  dependencies: [
    "paper-card/paper-card.html",
  ],
  data_source:[
    {key: 'heading', required: false},
    {key: 'img_url', required: false},
    {key: 'content', required: false},
    {key: 'content_data', required: false},
    {key: 'footer', required: false},
    {key: 'footer_data', required: false},
  ],
  init_functions:[
    'setup',
    'setupContent',
    'setupFooter',
  ],

  setup: function() {
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
