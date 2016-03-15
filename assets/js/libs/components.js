Backbone.Component = Backbone.View.extend({

  addView: function(view_name, data, selector){
    var view;

    if (_.has(App.Views, view_name)) {
      var view = new App.Views[view_name]({parent: this, hash: {data: data}});
    }
    else if (_.has(App.Components, view_name)){
      var view = new App.Components[view_name]({parent: this, hash: {data: data}});
    }
    else {
      console.warn('View or Component '+view_name+'does not exist.');
      return;
    }
    this.children[view.cid] = view;
    view.render();
    $selector = this.$el.find(selector);
    view.appendTo($selector);
    return view;
  },

  removeView: function(view){
    Polymer.dom(this.el).removeChild(view.el);
    view.remove();
    delete this.children[view.cid];
  },

  _addChildView: function(view, $template) {
    // Find the placeholder for where to put the view's markup
    var selector = view.tagName+'[data-view-name="'+view.name+'"]'+
                                '[data-view-cid="'+view.cid+'"]';
    var $placeholder = $template.find(selector);
    view.render();
    $placeholder.replaceWith(view.$el);
  },

  render: function() {
    var _this = this;

    _.each(this.children,function(view){
      _this.removeView(view);
    })

    if (!!this.template){
      var template = this.template(this);
      var $template = $(template);

      // Add the children in their dom place
      _.each(this.children,function(view,key){
        _this._addChildView(view, $template);
      });

      $template.each(function(index, node) {
        Polymer.dom(_this.el).appendChild(node);
      });
    }

    this.trigger('rendered',this);
    return this;
  },
});
