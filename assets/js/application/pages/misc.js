App.Page.extend({
  name: "pages/misc",
  init_functions: [
    'setup',
  ],

  setup: function() {
    var model = new App.Model();
    var attrs = new App.Model({disabled: true})
    window.model = model;
    window.attrs = attrs;
    this.components = c = {};

    c.slider = {
      model: model,
      attribute: 'slider',
    };

    c.pin = {
      model: model,
      attribute: 'pin',
      max: 75,
      min: 25,
      pin: true,
    };

    // Markers don't seem to actually work,
    // though they are in the documentation
    c.markers = {
      model: model,
      attribute: 'marker',
      attributes: attrs,
      max: 5,
      min: 0,
      markers: [1,2,3,4],
      snap: true,
    }

  },
});
