AppControllers.controller('AgendaCtrl', function($scope, $ionicLoading, $interval, GpsService) {
  $scope.isStart = false;
  $scope.lat ='1';
  $scope.long ='1';

  // $scope.timeInterval = $interval(function() {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     GpsService.send({
  //       "login": "driver1@email.com",
  //       "speed" : 180,
  //       "latitude" : position.coords.latitude,
  //       "longitude": position.coords.longitude,
  //       "dateTime" : new Date(),
  //       "is_working": 0
  //     });
  //   })
  // },5000);

  $scope.stop = function() {
    $scope.isStart = false;
    // $interval.cancel($scope.timeInterval);
    // $scope.timeInterval = $interval(function() {
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     GpsService.send({
    //       "login": "driver1@email.com",
    //       "speed" : 180,
    //       "latitude" : position.coords.latitude,
    //       "longitude": position.coords.longitude,
    //       "dateTime" : new Date(),
    //       "is_working": 0
    //     });
    //   })
    // },5000);
  };

  $scope.start = function() {
    $scope.isStart = true;

    navigator.geolocation.getCurrentPosition(function(position) {
      GpsService.send({
        "login": "driver1@email.com",
        "speed": 180,
        "latitude": position.coords.latitude,
        "longitude": position.coords.longitude,
        "dateTime": new Date(),
        "is_working": 0
      });
    });

    // $interval.cancel($scope.timeInterval);
    // $scope.timeInterval = $interval(function() {
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     GpsService.send({
    //       "login": "driver1@email.com",
    //       "speed" : 180,
    //       "latitude" : position.coords.latitude,
    //       "longitude": position.coords.longitude,
    //       "dateTime" : new Date(),
    //       "is_working": 0
    //     });
    //   })
    // },1000);

    };


});
