/**
 * MainController
 *
 * @description :: Server-side logic for managing Mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function(req, res) {
    var locals = {
      page: 'home',
    };
    return res.view('index',locals);
  },

  components: function(req, res) {
    var component = req.param('type');
    var locals = {
      page: component,
    };
    return res.view('index', locals);
  }
};
