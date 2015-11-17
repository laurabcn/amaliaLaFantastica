(function() {
  'use strict';

  angular
    .module('amaliaLaFantastica')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/ppu/saldo', {
        templateUrl: 'app/ppu/views/saldo.html',
        controller: 'PpuSaldoController',
        controllerAs: 'ppuS'
      })
      .when('/ppu/extracto', {
        templateUrl: 'app/ppu/views/extracto.html',
        controller: 'PpuExtractoController',
        controllerAs: 'ppuE'
      })

      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  }

})();
