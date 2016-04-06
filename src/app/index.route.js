(function() {
  'use strict';

  angular
    .module('training')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

     .state('state1', {
        url: '/my-first-state.html',
        templateUrl: 'app/main/my-first-html.html',
        controller: 'TestController',
        controllerAs: 'main'
      })

     .state('state2', {
        url: '/my-first-state.html',
        templateUrl: 'app/main/my-first-html.html',
        controller: 'TestController',
        controllerAs: 'main',
         data: {
             needsLogin: true,
             key2: "bbb",
         }
      })

     .state('state3', {
        url: '/my-first-state.html',
        templateUrl: 'app/main/my-first-html.html',
        controller: 'TestController',
        controllerAs: 'main'
      })


    ;



    $urlRouterProvider.otherwise('/');
  }

})();
