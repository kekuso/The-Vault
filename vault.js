'use strict';
module.exports = function() {
  var secretKey = null;
  return {
    getValue: function(key) {
      if(key) {
        return secretKey;
      }
      else {
        return null;
      }
    },

    setValue: function(key, value) {
      secretKey = value;
    }
  };
};