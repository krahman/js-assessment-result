
exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {
  indexOf : function(arr, item) {

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },
  sum: function(arr) {
    var sum = 0;
    
    for (var i = 0, len = arr.length; i < len; i++) {
      sum += arr[i];
    }

    return sum;
  },
  remove: function(arr, item) {
    for (var i = 0, len = arr.length; i < len; i++ ) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }

    return arr;
  },
  removeWithoutCopy: function(arr, item) {
    for (var i = 0, len = arr.length; i < len; i++ ) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  },
  append: function(arr, item) {
    if (arr) {
      arr.push(item);
    }
    return arr;  
  },
  truncate: function(arr, item) {
    if (arr) {
      arr.pop();  
    }
    return arr;
  },
  prepend: function(arr, item) {
    if (arr) {
      arr.unshift(item);
    }
    return arr;
  },
  curtail: function(arr, item) {
    if (arr) {
      arr.shift(item);
    }
    return arr;
  },
  concat: function(arr1, arr2) {
    var arr = arr1.concat(arr2);
    return arr;
  },
  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },
  count: function(arr, item) {
    var count = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },
  duplicates: function(arr) {
    var _arr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      if (this.count(arr, arr[i]) > 1 && _arr.indexOf(arr[i]) === -1) {
        _arr.push(arr[i]);
      }
    }
    return _arr;
  },
  square: function(arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i] *= arr[i];
    }
    return arr;
  },
  findAllOccurrences: function(arr, item) {
    var occrs = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        occrs.push(i);
      }
    }
    return occrs;
  }
};