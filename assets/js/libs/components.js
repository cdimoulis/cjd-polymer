Backbone.Component = Backbone.View.extend({

  addView: function(view_name, data, selector){
    if (!_.has(App.Views,view_name)){
      console.warn('View '+view_name+'does not exist.');
      return;
    }
    var view = new App.Views[view_name]({parent: this, hash: {data: data}});
    this.children[view.cid] = view;
    view.render();
    $selector = this.$el.find(selector);
    view.appendTo($selector);
    return view;
  },

  removeView: function(view){
    view.remove();
    delete this.children[view.cid];
  },

  _addChildView: function(view) {
    // Find the placeholder for where to put the view's markup
    var selector = view.tagName+'[data-view-name="'+view.name+'"]'+
                                '[data-view-cid="'+view.cid+'"]';
    var $placeholder = this.$el.find(selector);
    view.render();
    $placeholder.replaceWith(view.$el);
  },

  render: function() {
    var _this = this;
    // console.trace();
    _.each(this.children,function(view){
      _this.removeView(view);
    })

    if (!!this.template){
      this.$el.html(this.template(this));
    }

    // Add the children in their dom place
    _.each(this.children,function(view,key){
      _this._addChildView(view);
    });

    // Register dynamic elements for mdl
    // componentHandler.upgradeElements(this.el);
    this.trigger('rendered',this);
    return this;
  },
});
