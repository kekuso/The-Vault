'use strict';
module.exports = function() {
  var secretKey = null;
  var secretValue = null;
  return {
    //key: 0,

    getValue: function(key) {
      if(secretKey === key) {
        return secretValue;
      }
      else {
        return null;
      }
    },

    setValue: function(key, value) {
      secretKey = key;
      secretValue = value;
    }
  };
};