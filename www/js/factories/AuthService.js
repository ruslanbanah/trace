App.factory('AuthService', function(AUTH_URL, $timeout, $rootScope, $http, $q, $ionicLoading) {
  var securityToken = null;

  return {
    login: function(userName, password, database) {
      var data = {
              "username": userName,
              "password": encodeURIComponent(password)
      },
          def = $q.defer();
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });

      $http({
        url: AUTH_URL,
        params: data,
        method: 'GET'
      }).success(function(responseData) {
        if (responseData.error) {
          def.reject(responseData.error);
        }
          securityToken = responseData.result.securityToken;
          securityToken.serialNumber = 'C69E0001B211'; //ToDo: this serial number must be returned from the server
          def.resolve(securityToken);
          $ionicLoading.hide();
        }
      ).error(function(error) {
        def.reject(error);
        $ionicLoading.hide();
      });

      return def.promise;
    },

    logout: function() {
      var status = {
            error: 'Log out.'
          };
        securityToken = null;
      $rootScope.$broadcast('event:auth-login-failed', status);
    },

    isAuthenticated: function() {
      return securityToken;
    }
  }
});
