this.Application = function (options) {

  this._dependencies = [];

  this.Models = {};
  this.Collections = {};
  this.Views = {};
  this.Pages = {};

  this.View = Backbone.View.extend();
  this.Page = this.View.extend();

  this.Collection = Backbone.Collection.extend();
  this.Model = Backbone.Model.extend();

  this.setPage = function () {
    // Remove the page if one is currently being shown.

    var $content = $('#main-content');
    var page_name = 'pages/'+$content.attr('page-name')
    // Add page if exists
    if (_.has(this.Pages,[page_name])){
      var layout = new this.Views['layouts/main']({hash: {data: {page: page_name}}});
      layout.render();
      layout.appendTo($content);
      // var page = new this.Pages['pages/'+page_name]();
      // page.render();
      // page.appendTo($content);
    }
    else {
      throw "No page content "+page_name+" exists."
    }
  };

  /*****
  * Adjust the extend function of backbone's classes
  * This change will allow the Application object to
  * store all the created classes (i.e. models, collections, views)
  ******/
  var _registerClass = function (cls, hash) {
    cls_extend = cls.extend
    cls.extend = function () {
      child = cls_extend.apply(this,arguments);
      if (child.prototype.name){
        hash[child.prototype.name] = child;
      }
      return child;
    }
  };

  _registerClass(this.Model, this.Models);
  _registerClass(this.Collection, this.Collections);
  _registerClass(this.View, this.Views);
  _registerClass(this.Page, this.Pages);
  /*********
  * END REGISTER
  **********/

  _.extend(this, {
    initialize: function() {
      return null;
    },
    ready: function() {
      return null;
    },
    main: function() {
      return null;
    }
  });

  _.extend(this, options);
  this.initialize.call(this);
  this.ready.call(this);
  this.main.call(this);

  return this;
};
