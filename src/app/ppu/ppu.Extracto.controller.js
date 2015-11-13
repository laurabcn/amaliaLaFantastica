(function() {
  'use strict';

  angular
    .module('amaliaLaFantastica')
    .controller('PpuExtractoController', PpuExtractoController);


  PpuExtractoController.$inject = ['$scope', 'uiGridConstants'];

  function PpuExtractoController($scope, uiGridConstants) {
      var vm = this;

      vm.gridOptions = {
        enableHorizontalScrollbar : uiGridConstants.scrollbars.NEVER, //deshabilita el scroll horizontal
        enableVerticalScrollbar   : uiGridConstants.scrollbars.NEVER, //deshabilita el scroll vertical
        enableSorting: false, //deshabilita que las coumnas se puedan ordenar
        enableColumnMenus: false //deshabilita el menu superior de los campos de la cabecera
      };
      //cabecera del grid: field->nombre del campo del xml | displayName->el nombre que queremos que se vea | width->Definimos el ancho del campo
      vm.gridOptions.columnDefs = [
        {field: 'concepto', displayName: 'Concepto', width:225},
        {field: 'fecha', displayName: 'Fecha', width: 100},
        {field: 'origen', displayName: 'Origen', width: 205},
        {field: 'puntos', displayName: 'Puntos', width: 70, cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex){
          if(grid.getCellValue(row, col) < 0 ){
            return 'colorRed';
          }
        }}
      ];
      //los valores del xml estan seteados
      vm.gridOptions.data = [
        {concepto: "Mercadona", fecha: "20-09-14", origen: "4548 4845 4548 4845", "puntos": -19},
        {concepto: "ME - PLAN DE AHORRO", fecha: "20-04-15", origen: "4548 4845 4548 4845", "puntos": +150},
        {concepto: "Jubilación", fecha: "01-06-15", origen: "4548 4845 4548 4845", "puntos": +150},
        {concepto: "Decathlon", fecha: "08-09-15", origen: "4548 4845 4548 4845", "puntos": +12},
        {concepto: "Metro", fecha: "20-09-15", origen: "4548 4845 4548 4845", "puntos": +2}
      ];

      vm.gridOptions.classHeader = 'yellow';
      //Titulo de la cabecera
      vm.title = 'Extracto de Puntos Estrella';
      //Titulo de los botones
      vm.buttons = [{name: 'Inicio', image: 'home'}, {name: 'Ayuda', image: 'zoom-in',  subtitle: 'Buscador' }, {name: 'Salir', image: 'off', subtitle: 'Retirar Tarjeta'}];
    }
})();
