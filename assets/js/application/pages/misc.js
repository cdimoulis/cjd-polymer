App.Page.extend({
  name: "pages/misc",
  init_functions: [
    'setup',
    'spinner',
    'toast',
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

  spinner: function() {
    var spinner = new App.Model({active: true});
    var spin_attr = new App.Model({class: 'cjd-spinner'})
    window.spinner = spinner;
    window.spin_attr = spin_attr;
    c = this.components;

    c.spinner = {
      model: spinner,
      attribute: 'active',
      alt: 'Working on it...',
    };

    c.other_spinner = {
      model: spinner,
      attribute: 'other',
      attributes: spin_attr,
      alt: 'Something...',
    };
  },

  toast: function() {
    c = this.components;

    c.toast = {
      text: 'toast',
      event_handler: function() {
        App.showToast('Hi i am called a toast!');
      },
    };

    c.long_toast = {
      text: 'Long',
      event_handler: function() {
        App.showToast('I am a toast that lasts 10 seconds!',10000);
      },
    };

    c.success_toast = {
      text: 'Success',
      event_handler: function() {
        App.showSuccess('Colored green to show success!');
      },
    };

    c.error_toast = {
      text: 'Error',
      event_handler: function() {
        App.showError('Colored red to show error!');
      },
    };

    c.persistent_toast = {
      text: 'Persistent',
      event_handler: function() {
        App.showPersistentToast('I am toast that will not close unless you tell me')
      }
    };

    c.full_toast = {
      text: 'Full',
      event_handler: function() {
        App.showPersistentToast('I am toast that will fill the width of the page', true)
      }
    };
  }
});
