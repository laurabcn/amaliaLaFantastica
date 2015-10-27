(function() {
  'use strict';

  angular
    .module('amaliaLaFantastica')
    .directive('btnBlue', btnBlue);

  /** @ngInject */
  function btnBlue() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/btnBlue/btnBlue.html',
      scope: {
        
      },
      controller: btnBlueController,
      controllerAs: 'vm',
      bindToController: true

    };
    function btnBlueCtrl(){

    }
    return directive;
  }

})();
