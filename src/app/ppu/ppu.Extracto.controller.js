(function() {
  'use strict';

  angular
    .module('amaliaLaFantastica')
    .controller('PpuExtractoController', PpuExtractoController);


  PpuExtractoController.$inject = ['$scope', 'uiGridConstants', 'dataPpuServices', 'StringToDateFilter'];

  function PpuExtractoController($scope, uiGridConstants, dataPpuServices, StringToDateFilter) {
      var vm = this;


      vm.gridOptions = {
        enableHorizontalScrollbar : uiGridConstants.scrollbars.NEVER, //deshabilita el scroll horizontal
        enableVerticalScrollbar   : uiGridConstants.scrollbars.NEVER, //deshabilita el scroll vertical
        enableSorting: false, //deshabilita que las coumnas se puedan ordenar
        enableColumnMenus: false //deshabilita el menu superior de los campos de la cabecera
      };
      //cabecera del grid: field->nombre del campo del xml | displayName->el nombre que queremos que se vea | width->Definimos el ancho del campo
      vm.gridOptions.columnDefs = [
        {field: 'conceptocatalan', displayName: 'Concepte', width:225},
        {field: 'fechaoperacion', displayName: 'Fecha', width: 100, cellFilter: 'StringToDateFilter:this'},
        {field: 'datosadicionalescatalan', displayName: 'Origen', width: 205},
        {field: 'puntosmovimiento', displayName: 'Puntos', width: 70, cellClass: function(grid, row, col){
          if(grid.getCellValue(row, col) < 0 ){
            return 'colorRed';
          }
        }}
      ];

      //indicamos el color de la tabla
      vm.gridOptions.classHeader = 'blue';
      //Titulo de la cabecera
      vm.title = 'Extracto de Puntos Estrella';
      //Titulo de los botones
      vm.buttons = [{name: 'Inicio', image:'home', url:'/'}, {name: 'Ayuda', image:'zoom-in', subtitle: 'Buscador', url:'/'}, {name:'Salir', image: 'off', subtitle: 'Retirar Tarjeta', url:'/'}];
      //vars to footer
      vm.footerbtn  = [{name:'Atrás', image:'arrow-left', url:'/ppu/saldo', position: 'left'}, {name:'Imprimir', position:'right'},  {name:'Ver más movimientos', url:'/ppu/extracto', position:'right'}];

      getData();

      function getData(){
        return dataPpuServices.getDataPpu()
          .then(function(data){
            vm.gridOptions.data = vm.data.doc.toextractopuntosout.listamovimientosretornados.listamovimientosretornado;
          })
          .catch(function(error){
            logger.error('PpuExtractoController' + error.data);
          });
      }
    }
})();
