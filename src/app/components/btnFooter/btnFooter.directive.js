(function() {
  'use strict';

  angular
    .module('amaliaLaFantastica')
    .directive('btnFooter', btnFooter);

  /** @ngInject */
  function btnFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/btnFooter/btnFooter.html',
      scope: {
        properties: '='
      },
      controller: btnFooterController,
      controllerAs: 'vm',
      bindToController: true

    };
    function btnFooterController(){
      //console.log(this+"vm");
    }
    return directive;
  }

})();
