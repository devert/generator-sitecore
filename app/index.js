'use strict';

var generators = require('yeoman-generator');
var chalk = require('chalk');
var request = require('superagent');
var yosay = require('yosay');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  initializing: function () {
    this.log(yosay('\'Allo \'allo!\rLet\'s create a\r' + chalk.red('Sitecore') + ' project!'));
  },

  prompting: {
    askForSDNCredentials: function () {
      var done = this.async();

      this.log('First, I will need your SDN credentials.');
      this.prompt([
        {
          type: 'input',
          name: 'username',
          message: 'What is your SDN username?'
        },
        {
          type: 'input',
          name: 'password',
          message: 'What is your SDN password?'
        }
      ], function (answers) {
        this.sdnUsername = answers.username;
        this.sdnPassword = answers.password;
        done();
      }.bind(this));
    }
  },

  loginToSDN: function () {
    request
      .post('https://sdn.sitecore.net/sdn5/misc/loginpage.aspx')
      .type('form')
      .send({ ctl09_emailTextBox: this.sdnUsername, ctl09_passwordTextBox: this.sdnPassword })
      .end(function(err, res){
       if (res.ok) {
         console.log('yay got ' + JSON.stringify(res.body));
       } else {
         console.log('Oh no! error ' + res.text);
       }
     });
  }

  //

});
