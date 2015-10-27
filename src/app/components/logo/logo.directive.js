(function() {
  'use strict';

  angular
    .module('amaliaLaFantastica')
    .directive('logo', logo);

  /** @ngInject */
  function logo() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/logo/logo.html'

    };

    return directive;
  }

})();
