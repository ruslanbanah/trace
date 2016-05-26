AppControllers.controller('AgendaCtrl', function($scope, $ionicLoading, $interval) {
  $scope.lat ='1';
  $scope.long ='1';
  $scope.start = function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
        console.log('Start time.');
        $scope.lat = position.coords.latitude;
        $scope.long = position.coords.longitude;
      });
    };
  $interval(function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      $scope.lat = position.coords.latitude;
      $scope.long = position.coords.longitude;
    })
  },1000)
});
