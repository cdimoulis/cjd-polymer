Handlebars.registerHelper('view', function(view_name,obj){
  if (!App.Views[view_name]){
    throw "Could not find a view named: "+view_name
    return
  }
  var parent = obj.data.root;
  obj.parent = parent;
  var view = new App.Views[view_name](obj);
  if (!view.template){
    throw "View "+view_name+" does not have a template"
    return
  }

  parent.children[view.cid] = view;
  var placeholder = view.$el.wrap('<temp>').parent().html();

  return new Handlebars.SafeString(placeholder);
});
