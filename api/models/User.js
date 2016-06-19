/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string',
      unique: true
    },

    password: {
      type: 'string',
      required: true
    },


    data:{
      collection:'data',
      via:'user'
    },

    verifyPassword: function (password) {
      if (password === undefined)
        return false;
      var a = bcrypt.compareSync(password, this.password);
      return a;
    },

    changePassword: function (newPassword, cb) {
      this.newPassword = newPassword;
      this.save(function (err, u) {
        return cb(err, u);
      });
    },

    decryptPassword:function(){


    },

    toJSON: function () {
      var obj = this.toObject();
      return obj;
    }
  },

  beforeCreate: function (attrs, cb) {
    if(attrs.password) {
      bcrypt.hash(attrs.password, SALT_WORK_FACTOR, function (err, hash) {
        attrs.password = hash;
        return cb();
      });
    }

    else
      return cb();


  },

  beforeUpdate: function (attrs, cb) {

    console.log('Before Update User');
    console.log(attrs);

    if(attrs.password) {
      bcrypt.hash(attrs.password, SALT_WORK_FACTOR, function (err, hash) {
        attrs.password = hash;
        return cb();
      });
    }

    else
      return cb();

  }
};

