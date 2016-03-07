App.Page.extend({
  name: "pages/home",
  init_functions: [
    'setup',
  ],

  setup: function() {
    this.components = c = {}

    c.text = {
      heading: 'Text',
      img_url: 'images/text.png',
      content: "Variations of text inputs.",
      footer: "Button here soon",
    }
  },
});
