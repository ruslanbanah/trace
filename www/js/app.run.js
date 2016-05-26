App
  .run(function($ionicPlatform, $rootScope, $state, AuthService) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });

    $rootScope.$on('event:auth-login-failed', function(event) {
      event.preventDefault();
      $state.go('login');
    });

    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, fromState) {
      if ('authorized' in next && next.authorized) {
        if (AuthService.isAuthenticated()) {
          event.preventDefault();
          $state.go($state.current, {}, {reload: true});
        }
      }

      if (!AuthService.isAuthenticated()) {
        if (next.name !== 'login') {
          event.preventDefault();
          $state.go('login');
        }
      }
    });
  });
