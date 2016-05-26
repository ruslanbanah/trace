App.factory('GpsService', function(GPS_URL, $timeout, $rootScope, $http, $q) {
  var securityToken = null;

  return {
    send: function(params) {
      var data =  {
          "login": "driver1@email.com",
          "speed" : 180,
          "latitude" : 48.8382600,
          "longitude": 24.0232400,
          "dateTime" : "2016-05-26T13:12:11.000Z",
          "is_working": 0
        },
          def = $q.defer();
      angular.extend(data, params);
      console.log(data);

      $http({
        url: GPS_URL,
        method: 'POST',
        data: data,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }).success(function(responseData) {
        if (responseData.error) {
          def.reject(responseData.error);
        }
          securityToken = responseData.result.securityToken;
          securityToken.serialNumber = 'C69E0001B211'; //ToDo: this serial number must be returned from the server
          def.resolve(securityToken);
        }
      ).error(function(error) {
        def.reject(error);
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
