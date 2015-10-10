'use strict';

var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  initializing: function () {
  },

  prompting: {
    askFor: function () {
      // var done = this.async();

      this.log(yosay('\'Allo \'allo!\rLet\'s create a\r' + chalk.red('Sitecore') + ' project!'));
    }
  }

});
