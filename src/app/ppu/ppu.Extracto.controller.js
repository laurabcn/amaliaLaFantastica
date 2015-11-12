(function() {
  'use strict';

  angular
    .module('amaliaLaFantastica')
    .controller('PpuExtractoController', PpuExtractoController);


  PpuExtractoController.$inject = ['$scope', 'uiGridConstants'];

  function PpuExtractoController($scope, uiGridConstants) {
      var vm = this;

      vm.gridOptions = {
        enableHorizontalScrollbar : uiGridConstants.scrollbars.NEVER,
        enableVerticalScrollbar   : uiGridConstants.scrollbars.NEVER,
        enableSorting: false,
        groupingShowAggregationMenu: false
      };

      vm.gridOptions.columnDefs = [
        {field: 'concepto', displayName: 'Concepto', width:150},
        {field: 'fecha', displayName: 'Fecha', width: 75},
        {field: 'origen', displayName: 'Origen', width: 205},
        {field: 'puntos', displayName: 'Puntos', width: 70}
      ];

      vm.gridOptions.data = [
        {concepto: "Mercadona", fecha: "20-09-14", origen: "4548 4845 4548 4845", "puntos": +19},
        {concepto: "ME - PLAN DE AHORRO", fecha: "20-04-15", origen: "4548 4845 4548 4845", "puntos": +150},
        {concepto: "Jubilación", fecha: "01-06-15", origen: "4548 4845 4548 4845", "puntos": +150},
        {concepto: "Decathlon", fecha: "08-09-15", origen: "4548 4845 4548 4845", "puntos": +12},
        {concepto: "Metro", fecha: "20-09-15", origen: "4548 4845 4548 4845", "puntos": +2}
      ];

      vm.title = 'Extracto de Puntos Estrella';
      vm.buttons = [{name: 'Inicio', image: 'home'}, {name: 'Ayuda', image: 'zoom-in',  subtitle: 'Buscador' }, {name: 'Salir', image: 'off', subtitle: 'Retirar Tarjeta'}];
    }
})();
