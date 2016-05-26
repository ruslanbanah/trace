App
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'js/login/login.html',
        controller: 'loginCtrl'
      })

      .state('app', {
        url: '/app',
        authorized: true,
        abstract: true,
        templateUrl: 'js/app/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.agenda', {
        url: '/agenda',
        views: {
          'menuContent': {
            templateUrl: 'js/agenda/agenda.html',
            controller: 'AgendaCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/agenda');
  });
