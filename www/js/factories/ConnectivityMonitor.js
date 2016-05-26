App.factory('ConnectivityMonitor', function($rootScope, $cordovaNetwork) {

  return {
    isOnline: function() {
      if (ionic.Platform.isWebView()) {
        return $cordovaNetwork.isOnline();
      } else {
        return navigator.onLine;
      }
    },
    isOffline: function() {
      if (ionic.Platform.isWebView()) {
        return !$cordovaNetwork.isOnline();
      } else {
        return !navigator.onLine;
      }
    },
    startWatching: function(isOnlineCallback, isOfflineCallback) {
      if (this.isOnline()) {
        isOnlineCallback();
      } else {
        isOfflineCallback();
      }

      if (ionic.Platform.isWebView()) {
        $rootScope.$on('$cordovaNetwork:online', isOnlineCallback);
        $rootScope.$on('$cordovaNetwork:offline', isOfflineCallback);
      }else{
        window.addEventListener("online", isOnlineCallback, false);
        window.addEventListener("offline", isOfflineCallback, false);
      }
    }
  }
});
