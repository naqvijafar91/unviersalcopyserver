/**
 * Created by jafarnaqvi on 06/05/16.
 */

var jsonwebtoken = require('jsonwebtoken');
var config = require('./../../config');
module.exports = {

  generateTokenUser: function (user) {

    var token = jsonwebtoken.sign({

      id: user.id,
      email: user.email


    }, config.superSecretCustomer);


    return token;


  }
};
