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
  papelPijamaController.$inject = ['$scope'];
  function papelPijamaController($scope){
    var vm = this;

    console.log(vm.gridOptions+"GO");
  }

})();
