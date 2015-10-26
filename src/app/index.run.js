(function() {
  'use strict';

  angular
    .module('amaliaLaFantastica')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
