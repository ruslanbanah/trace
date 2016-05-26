AppControllers.controller('AppCtrl',  function($scope, AuthService) {
    $scope.logout = function(){
      AuthService.logout();
    };
  });
