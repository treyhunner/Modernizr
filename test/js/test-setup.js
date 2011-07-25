
// test helper object
window.TEST = {
  // note some unique members of the Modernizr object
  inputs    : ['input','inputtypes'],
  audvid    : ['video','audio'],
  API       : ['addTest', 'mq', 'hasEvent', 'testProp', 'testAllProps', 'testStyles', 'selector', '_prefixes', '_domPrefixes', 'prefixed'],
  extraclass: ['js'],
  privates  : ['_enableHTML5','_version','_fontfaceready'],
  deprecated : [
                { oldish : 'crosswindowmessaging', newish : 'postmessage'},
                { oldish : 'historymanagement', newish : 'history'},
              ],

  // utility methods
  inArray: function(elem, array) {
      if (array.indexOf) {
          return array.indexOf(elem);
      }
      for (var i = 0, length = array.length; i < length; i++) {
          if (array[i] === elem) {
              return i;
          }
      }
      return -1;
  },
  trim : function(str){
    return str.replace(/^\s*/, "").replace(/\s*$/, "");
  },
  forEach : function(array,callbackfn){
    // Production steps of ECMA-262, Edition 5, 15.4.4.18
    if ( !Array.prototype.forEach ) {

      Array.prototype.forEach = function( callbackfn, thisArg ) {

        var T,
          O = Object(this),
          len = O.length >>> 0,
          k = 0;

        if ( !callbackfn || !callbackfn.call ) {
          throw new TypeError();
        }

        if ( thisArg ) {
          T = thisArg;
        }

        while( k < len ) {

          var Pk = String( k ),
            kPresent = O.hasOwnProperty( Pk ),
            kValue;

          if ( kPresent ) {
            kValue = O[ Pk ];

            callbackfn.call( T, kValue, k, O );
          }

          k++;
        }
      };
      array.forEach(callbackfn);
    } else {
        array.forEach(callbackfn);
    }
  }
};

