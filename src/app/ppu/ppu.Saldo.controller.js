(function() {
  'use strict';

  angular
    .module('amaliaLaFantastica')
    .controller('PpuSaldoController', PpuSaldoController);

  PpuSaldoController.$inject = ['$scope', 'dataPpuServices'];

  /** @ngInject */
  function PpuSaldoController($scope, dataPpuServices) {

    var vm = this;
    //vars to cabecera
    vm.title   = 'Puntos Estrella';
    vm.buttons = [{name: 'Inicio', image:'home', url:'/'}, {name: 'Ayuda', image:'zoom-in', subtitle: 'Buscador', url:'/'}, {name:'Salir', image: 'off', subtitle: 'Retirar Tarjeta', url:'/'}];
    vm.three   = [{name: 'Puntos Estrella', image: 'star', url: '/ppu/saldo'}];

    //vars to footer
    vm.footerbtn  = [{name:'Atrás', image:'arrow-left', url:'/', position: 'left'}, {name:'Extracto', url:'/ppu/extracto', position:'left'}];

    getData();

    function getData(){
      return dataPpuServices.getDataPpu()
        .then(function(data){
          vm.data = data.doc;
        })
        .catch(function(error){
          logger.error('PpuSaldoController' + error.data);
        });
    }

  }
})();
