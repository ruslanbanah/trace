App.constant('AUTH_URL', 'https://myadminapi.geotab.com/v2/MyAdminApi.ashx/Authenticate');
App.constant('GPS_URL', 'https://wfm.demo.relevant.software/gps');

App.config(function($httpProvider) {
  //Enable cross domain calls
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
