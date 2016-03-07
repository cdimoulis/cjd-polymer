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

  buttons: function(req, res) {
    var locals = {
      page: 'buttons',
    };
    return res.view('index', locals);
  },
};
