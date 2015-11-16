(function() {
  'use strict';

  angular
    .module('amaliaLaFantastica')
    .directive('papelPijama', papelPijama);

  /** @ngInject */
  function papelPijama() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/papelPijama/papelPijama.html',
      scope:{
        prop: '='
      },
      controller: papelPijamaController,
      controllerAs: 'vm',
      bindToController: true

    };

    return directive;
  }

  function papelPijamaController(){
    var vm = this;

    if(vm.prop.classHeader){
      vm.classTable = vm.prop.classHeader;
    }

  }

})();
