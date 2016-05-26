AppControllers.controller('loginCtrl', function($scope, $state, $ionicPopup, AuthService, ConnectivityMonitor){
  $scope.user = {
    email: 'support@gofleet.ca',
    password: '"18889981122##"'
  };

  $scope.doLogin = function() {
    AuthService.login($scope.user.email, $scope.user.password, 'testdatabase').then(function() {
      $state.go('app.agenda');
    }, function(error) {
      $ionicPopup.alert({
        title: error.name || 'Error',
        template: error.message || 'Unknow error.'
      });
    });
  };
});
