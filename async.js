exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  	var deferred = $.Deferred();
  	setTimeout(function() {
  		deferred.resolve(value)
  	}, 10);
  	return deferred.promise();
  },

  manipulateRemoteData : function(url) {

  }
};
